---
layout: workshop
titel: Skalierbare Web-Architektur durch Monorepos
social-media-untertitel: Workshop am 16. Juni 2026
datum: 2026-06-16
modul: wt
published: true
autor: Paul Strebinger
bild: ../thumbnail.webp
bildcredits: Generated using Google Gemini 3
art: workshop
termin: Dienstag, 16. Juni 2026, 13:00 Uhr
dauer: ~120 Minuten
raum: 3.215
---

# Workshop-Beschreibung: Skalierbare Web-Architektur durch Monorepos

In diesem Workshop wird praxisnah vermittelt, wie moderne Multi-App-Umgebungen mithilfe von **Monorepos** strukturiert und skaliert werden. In einer Mischung aus theoretischen Grundlagen und geführten Coding-Sessions migrieren wir Schritt für Schritt zwei isolierte Anwendungen in ein gemeinsames, hocheffizientes Repository.

Am konkreten Beispiel eines Component-Sharings zwischen einer Web-App und einer Landing-Page lösen wir das klassische Problem von redundantem Code und lästigem Copy-Paste-Chaos auf. Als Basis nutzen wir dafür das moderne Web-Framework **Astro** in Kombination mit nativen **NPM Workspaces**.

---

## Zielsetzung und Inhalte

* **Workspace-Architektur mit NPM:** Aufbau und Konfiguration eines zentralen Root-Workspaces mitsamt automatischer Symlink-Verknüpfungen im Dateisystem.
* **Single Source of Truth:** Auslagerung und Kapselung von UI-Komponenten in lokale, geteilte Shared Packages (`packages/ui`).
* **Multi-App Orchestration:** Paralleles Starten, Entwickeln und Verwalten isolierter Astro-Anwendungen über globale Root-Workspace-Befehle.
* **Governance & Ausblick:** Ausblick auf weitere Möglichkeiten der Monorepo-Architektur und Best Practices für die Wartbarkeit und Skalierbarkeit von Webprojekten.

## Zielgruppe

Dieser Workshop richtet sich an Webentwicklerinnen und -entwickler, die den Schritt von starren Monolithen oder unübersichtlichen Multirepo-Strukturen hin zu einer modularisierten, wartbaren Codebase gehen möchten. Der Fokus liegt darauf, wie man Abhängigkeiten zentralisiert und UI-Komponenten ohne Publishing-Overhead projektübergreifend teilt.

## Vorkenntnisse

* Grundlegende Erfahrung mit Node.js und dem NPM-Ökosystem
* Fundiertes Verständnis von HTML, CSS und modernen Frontend-Komponenten
* Erste Berührungspunkte mit komponentenbasierter Entwicklung (z. B. Astro frontmatter, Layouts oder Slots) sind von Vorteil, aber kein Muss

## Technische Voraussetzungen

Um einen direkten und reibungslosen Einstieg in die Praxis zu gewährleisten, sollten folgende Komponenten im Vorfeld auf dem eigenen Gerät installiert bzw. vorbereitet werden:

* **Node.js 24+** (aktuelle LTS-Version)
* **NPM 11+** (wird standardmäßig mit Node.js ausgeliefert)
* **IDE** (z. B. VS Code) mit installierter _Astro_-Extension für optimales Syntax-Highlighting

## Material & Dokumentation

Während des Workshops wird ein Repository mit Aufgaben, Code-Snippets und der Auflösung der einzelnen Etappen bereitgestellt.

* [Workshop-Slides](https://visualsofpaul.github.io/presentations/monorepos/)
* [Workshop-Repository](https://github.com/visualsofpaul/workshop-monorepos)
* [Astro Documentation](https://docs.astro.build/)
* [NPM Workspaces Documentation](https://docs.npmjs.com/cli/using-npm/workspaces)
