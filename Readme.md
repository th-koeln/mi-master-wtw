## Subtree Commands

### Add Remote for subtree
```
git remote add -f mi-slides git@github.com:cnoss/mi-slides.git
```

### Add Subtree itself
```
git subtree add --prefix=mi-slides/ mi-slides master
```

### Pull Changes from Subtree Master
```
git subtree pull --prefix=mi-slides/ mi-slides master
```

## Docker for local testing

### Clone this repo

```
git clone https://github.com/th-koeln/mi-master-wtw.git
cd mi-master-wtw/
```

### Start Container

```
docker-compose up -d
```

This will build and serve the mi-master-wtw website. The build process needs some time. To oberserve the build process, simply `docker-compose logs -f`.

```
webserver_1  | Configuration file: /srv/jekyll/_config.yml
webserver_1  |             Source: /srv/jekyll
webserver_1  |        Destination: /srv/jekyll/_site
webserver_1  |  Incremental build: disabled. Enable with --incremental
webserver_1  |       Generating...
webserver_1  |                     done in 21.212 seconds.
webserver_1  |  Auto-regeneration: enabled for '/srv/jekyll'
webserver_1  |     Server address: http://0.0.0.0:4000/mi-master-wtw/
```

### Open the site

[http://localhost:4000/mi-master-wtw/](http://localhost:4000/mi-master-wtw/)

### Stop Container

```
docker-compose down
```

## Weekly Workflow: WT Workshop Sync

Ziel: Neue studentische Workshop-Einladungen automatisch in die passenden WT-Termine eintragen.

Was automatisch passiert:
- Mapping von _workshops/YYYY/*/index.md auf _lehrveranstaltungen/web-technologien/wt-termin-XX.md per Datum
- Setzen von verantwortlich aus dem Feld autor der Workshop-Seite
- Eintrag eines kurzen Hinweistextes + Link zur Workshop-Seite
- Idempotent per Marker-Block (mehrfaches Ausfuehren erzeugt keine Duplikate)

### 1. Vorschau (Dry-Run)

```
npm run wt:sync-workshops
```

### 2. Aenderungen schreiben

```
npm run wt:sync-workshops:write
```

### Optional: Alle Jahre pruefen

```
npm run wt:sync-workshops:all
```

### Optional: Bestimmtes Jahr syncen

```
node scripts/sync-wt-workshops.js --dry-run --year=2026
node scripts/sync-wt-workshops.js --year=2026
```

Hinweise:
- Standardmaessig wird nur das aktuelle Jahr verarbeitet.
- Es werden nur Workshops mit modul: wt und published: true beruecksichtigt.
- Falls kein passender WT-Termin zum Datum gefunden wird, gibt das Skript einen Hinweis aus.