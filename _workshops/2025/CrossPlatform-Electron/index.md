---
layout: workshop
titel: Einführung in Electron – Desktop-Apps mit Web-Technologien
social-media-untertitel: Workshop am 08. Juli 2025
datum: 2025-07-08
modul: wt
published: true
autor: Julian Schuller-Lingner
bild: ../thumbnail.png
bildcredits: SeekLogo
art: workshop
termin: Donnerstag, 08. Juli 2025, 14:00 Uhr
dauer: 120 Minuten
raum: 3.215
---

## Ziel des Workshops

Electron ermöglicht es, mit bekannten Web-Technologien wie HTML, CSS und JavaScript plattformübergreifende Desktop-Apps zu entwickeln. In diesem Workshop lernst du die Architektur und Besonderheiten von Electron kennen und setzt selbst kleine Features in einer vorgefertigten Anwendung um.

### Was wir zusammen aufbauen

Du erhältst eine funktionierende, aber unvollständige Electron-App. Gemeinsam fügen wir gezielt Funktionen hinzu, um typische Electron-Vorteile wie native Dialoge, Mehrfensterfähigkeit oder OS-Integration erlebbar zu machen:

* **Datei öffnen** – per nativen Dateidialog auswählen und anzeigen
* **About-Fenster** – ein zweites BrowserWindow dynamisch erzeugen
* **Optional:** Tray-Icon oder Desktop-Benachrichtigung als Systemintegration
* **Einbinden eines Frameworks:** Einbindung von React
* **Bonus:** Packaging der App mit electron-forge (je nach Zeit)

### Warum Electron?

Electron wird von großen Projekten wie Visual Studio Code, Slack oder Discord verwendet. Der große Vorteil: Web-Entwickler*innen können mit vertrauten Tools Desktop-Apps bauen – ohne für jedes Betriebssystem eigene Varianten zu schreiben.

### Für wen geeignet?

Für Studierende und Entwickler*innen mit grundlegender Erfahrung in HTML/JavaScript. Electron selbst wird im Workshop erklärt – du brauchst keine Vorkenntnisse im Umgang mit Electron.

### Praktisches Arbeiten

Du arbeitest an deinem eigenen Klon des Workshop-Repositories. Die Anwendung enthält gezielte Lücken mit TODO-Kommentaren, die du im Laufe des Workshops ergänzt. Ziel ist es, praxisnah zu lernen, wie Electron-Projekte aufgebaut sind und mit dem Betriebssystem kommunizieren.

### Erweiterung: React in Electron

Im Workshop werfen wir außerdem einen Blick darauf, wie man ein Framework wie **React** in eine Electron-Anwendung integriert. Dabei lernst du, wie man moderne Komponentenarchitekturen mit der nativen Plattform verbindet.

### Zusätzliche Herausforderung (für Fortgeschrittene)

Als zusätzliche Aufgabe für erfahrenere Teilnehmer*innen steht eine komplexere Übung bereit:

* **Drag-and-Drop Dateiimport**
  – Implementiere eine Funktion, die es erlaubt, eine Datei per Drag-and-Drop in das Fenster zu ziehen. Der Inhalt der Datei soll automatisch im Editor angezeigt werden.

Diese Übung erfordert ein gutes Verständnis der Renderer-Logik, DOM-Ereignisse sowie der sicheren Kommunikation mit dem Main-Prozess.

## Technische Voraussetzung

* **Node.js** (aktuelle LTS-Version)
* **Electron (global oder im Projekt installiert)**  
  – Wenn du möchtest, kannst du Electron bereits vorab global installieren:  
  `npm install -g electron`
* **Git**
* **Code-Editor** (z. B. Visual Studio Code)

> Bitte installiere vorab Node.js, Git und optional Electron auf deinem System.

## Material

Das Material wird im Workshop bereitgestellt und umfasst:

* Git-Repository mit Starter-App (`starter/`)
* Code mit kommentierten TODOs für die Übungen
* Folien zur Theorie
* Hinweise auf weiterführende Ressourcen

## Hilfreiche Links

* [Electron Dokumentation](https://www.electronjs.org/docs/latest/)
* [Electron Forge (Packaging-Tool)](https://www.electronforge.io/)

## GitHub Aufgaben Ressource
* [GIT](https://github.com/boolJul/CrossPlattform_Workshop.git)
