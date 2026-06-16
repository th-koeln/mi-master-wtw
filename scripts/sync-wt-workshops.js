#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const workshopsRoot = path.join(repoRoot, '_workshops');
const wtRoot = path.join(repoRoot, '_lehrveranstaltungen', 'web-technologien');
const isDryRun = process.argv.includes('--dry-run');
const syncAllYears = process.argv.includes('--all-years');
const yearArg = process.argv.find((arg) => arg.startsWith('--year='));
const targetYear = yearArg ? yearArg.slice('--year='.length) : String(new Date().getFullYear());

if (!syncAllYears && !/^\d{4}$/.test(targetYear)) {
  console.error('Ungueltiges Jahr. Bitte --year=YYYY verwenden.');
  process.exit(1);
}

const MARKER_START = '<!-- auto:student-workshop:start -->';
const MARKER_END = '<!-- auto:student-workshop:end -->';

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function writeText(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

function parseFrontMatter(content) {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!fmMatch) {
    return null;
  }

  const raw = fmMatch[1];
  const data = {};
  for (const line of raw.split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) {
      continue;
    }
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    data[key] = value;
  }

  return {
    data,
    start: 0,
    end: fmMatch[0].length,
    full: fmMatch[0],
    raw,
  };
}

function setFrontMatterField(frontMatterRaw, key, value) {
  const lines = frontMatterRaw.split('\n');
  let found = false;
  const nextLines = lines.map((line) => {
    if (line.startsWith(key + ':')) {
      found = true;
      return `${key}: ${value}`;
    }
    return line;
  });

  if (!found) {
    nextLines.push(`${key}: ${value}`);
  }

  return nextLines.join('\n');
}

function listWorkshopFiles() {
  if (!fs.existsSync(workshopsRoot)) {
    return [];
  }

  const years = fs
    .readdirSync(workshopsRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory() && /^\d{4}$/.test(d.name))
    .map((d) => d.name)
    .sort();

  const result = [];
  for (const year of years) {
    const yearDir = path.join(workshopsRoot, year);
    const slugs = fs
      .readdirSync(yearDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort();

    for (const slug of slugs) {
      const file = path.join(yearDir, slug, 'index.md');
      if (fs.existsSync(file)) {
        result.push({ file, year, slug });
      }
    }
  }

  return result;
}

function listWtTermineFiles() {
  if (!fs.existsSync(wtRoot)) {
    return [];
  }

  return fs
    .readdirSync(wtRoot)
    .filter((name) => /^wt-termin-\d+\.md$/.test(name))
    .map((name) => path.join(wtRoot, name))
    .sort();
}

function parseDateFromTerm(termValue) {
  if (!termValue) {
    return null;
  }
  const trimmed = termValue.trim();
  if (trimmed.length < 10) {
    return null;
  }
  const candidate = trimmed.slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(candidate) ? candidate : null;
}

function extractWtDates(termineValue) {
  if (!termineValue) {
    return [];
  }

  return termineValue
    .split(',')
    .map((part) => parseDateFromTerm(part))
    .filter(Boolean);
}

function replaceOrAppendWorkshopBlock(body, block) {
  if (body.includes(MARKER_START) && body.includes(MARKER_END)) {
    const pattern = new RegExp(`${MARKER_START}[\\s\\S]*?${MARKER_END}`, 'm');
    return body.replace(pattern, block);
  }

  const trimmedBody = body.replace(/^\s+|\s+$/g, '');
  if (!trimmedBody) {
    return `\n${block}\n`;
  }

  return `${body.replace(/\s*$/, '')}\n\n${block}\n`;
}

function toPosixPath(p) {
  return p.split(path.sep).join('/');
}

function relativeToRepo(filePath) {
  return toPosixPath(path.relative(repoRoot, filePath));
}

function main() {
  console.log(`Sync-Modus: ${syncAllYears ? 'alle Jahre' : `Jahr ${targetYear}`}`);

  const wtFiles = listWtTermineFiles();
  const wtByDate = new Map();

  for (const wtFile of wtFiles) {
    const content = readText(wtFile);
    const fm = parseFrontMatter(content);
    if (!fm) {
      continue;
    }

    const dates = extractWtDates(fm.data.termine || '');
    for (const date of dates) {
      const list = wtByDate.get(date) || [];
      list.push(wtFile);
      wtByDate.set(date, list);
    }
  }

  const workshopFiles = listWorkshopFiles();
  const workshopEntries = [];

  for (const entry of workshopFiles) {
    const content = readText(entry.file);
    const fm = parseFrontMatter(content);
    if (!fm) {
      continue;
    }

    const modul = (fm.data.modul || '').toLowerCase();
    const published = (fm.data.published || '').toLowerCase();
    const date = fm.data.datum || '';
    const title = fm.data.titel || '';
    const author = fm.data.autor || '';

    if (modul !== 'wt' || published !== 'true' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      continue;
    }

    if (!syncAllYears && entry.year !== targetYear) {
      continue;
    }

    workshopEntries.push({
      date,
      title,
      author,
      url: `/mi-master-wtw/workshops/${entry.year}/${entry.slug}/`,
      file: entry.file,
    });
  }

  let changes = 0;
  const warnings = [];

  for (const workshop of workshopEntries) {
    const matchingWtFiles = wtByDate.get(workshop.date) || [];

    if (matchingWtFiles.length === 0) {
      warnings.push(`Kein WT-Termin gefunden fuer ${workshop.date} (${relativeToRepo(workshop.file)}).`);
      continue;
    }

    if (matchingWtFiles.length > 1) {
      warnings.push(`Mehrere WT-Termine fuer ${workshop.date}: ${matchingWtFiles.map(relativeToRepo).join(', ')}.`);
      continue;
    }

    const wtFile = matchingWtFiles[0];
    const current = readText(wtFile);
    const fm = parseFrontMatter(current);
    if (!fm) {
      warnings.push(`Kein Frontmatter in ${relativeToRepo(wtFile)}.`);
      continue;
    }

    const nextFmRaw = setFrontMatterField(fm.raw, 'verantwortlich', workshop.author || 'tbd');
    const nextFrontMatter = `---\n${nextFmRaw}\n---\n`;

    const body = current.slice(fm.end);
    const block = `${MARKER_START}\nIn diesem Termin findet ein studentischer Workshop statt.\n\n[Zur Einladung und zu den Materialien: ${workshop.title}](${workshop.url})\n${MARKER_END}`;
    const nextBody = replaceOrAppendWorkshopBlock(body, block);

    const nextContent = `${nextFrontMatter}${nextBody}`;

    if (nextContent !== current) {
      changes += 1;
      if (!isDryRun) {
        writeText(wtFile, nextContent);
      }
      console.log(`${isDryRun ? '[DRY-RUN] ' : ''}Aktualisiert: ${relativeToRepo(wtFile)} <= ${relativeToRepo(workshop.file)}`);
    }
  }

  if (warnings.length > 0) {
    console.log('\nHinweise:');
    for (const warning of warnings) {
      console.log(`- ${warning}`);
    }
  }

  console.log(`\nFertig. ${changes} Datei(en) ${isDryRun ? 'wuerden' : 'wurden'} aktualisiert.`);
}

main();
