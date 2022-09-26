---
layout: workshop
titel: A short journey to deno.land
social-media-untertitel: Online-Workshop am 06. Juli 2021
datum: 2022-04-26
modul: wt
published: false
autor: Benedikt Engel
bild: ../hero.png
art: workshop
termin: Dienstag, 06. Juli 2021, 13:00 Uhr
dauer: 120-150 Minuten
raum: https://th-koeln.zoom.us/j/83055835045 (Zugangscode webtech) 
---

In diesem Workshop werden wir die JS- & TS-Runtime `Deno` kennenlernen. Zum einen soll ein Überblick gegeben werden was `Deno` überhaupt ist und worin die Unterschiede und Gemeinsamkeiten zwischen `Deno` und `Node.js` liegen. Außerdem wird die `Deno CLI` vorgestellt und daraufhin genutzt um Projekte auszuführen, zu bundeln, zu formatieren und in eine einzelne ausführbare Datei zu überführen. Zudem werden wir grundlegende Funktionen der Runtime-API kennenlernen und in kleinen Übungen nutzen.

Wir werden also keine komplette Backend-Architektur umsetzen, sondern viel mehr die verschiedenen Möglichkeiten die `Deno` bietet kennenlernen und verwenden. Für den Workshop werden grundlegende JS-Kenntnisse vorrausgesetzt. TS-Kenntnisse können von Vorteil sein, sind jedoch kein Muss.

## Vorraussetzungen

Um am Workshop teilzunehmen habt ihr zwei Möglichkeiten um Deno zum Laufen zu bekommen.
Entweder ihr nutzt den zur Verfügung gestellten Dev-Container für VS-Code oder ihr installiert bei euch Deno lokal.

### Möglichkeit 1 - Als Dev-Container:

- VS Code
- VS Code Extension [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
- VS Code Extension [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- Docker

In diesem Fall sind die Deno-Extensions in den Dev-Container integriert.

### Möglichkeit 2 - Ohne Container:

- Editor, empfohlen wird VS Code mit folgenden Extensions:
- (Optional) [Deno (VS-Code Extension)](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
- (Optional) [Deno Standard Library Snippets (VS-Code Extension)](https://marketplace.visualstudio.com/items?itemName=laurencebahiirwa.deno-std-lib-snippets)
- [Deno CLI](https://deno.land/#installation)

## Vorbereitungen

### Möglichkeit 1 - Dev-Container:

- Docker starten
- Download des [Workshop-Repositorys](https://github.com/BenediktEngel/wt-deno-workshop) und dieses in VS Code öffnen
- In der Command-Palette (Mac:`shift+cmd+p`, Win:`shift+ctrl+p`) Remote-Container Starten:
  - Container existiert noch nicht: `Remote-Containers: Open Workspace in Container` ausführen
  - Container lief schon mal: `Remote-Containers: Reopen in Container`
- Nun verbindet sich VS-Code mit dem Container und lädt das Fenster neu
- Der Container ist gestartet sobald eure Terminalanzeige sich auf `vscode ➜ /workspaces/wt-deno-workshop` geändert hat

### Möglichkeit 2 - Ohne Container:

- Deno und wenn gewollt optionale Extensions installieren
- Download des [Workshop-Repositorys](https://github.com/BenediktEngel/wt-deno-workshop) und diesen im Editor öffnen
- Wenn ihr die Deno VS-Code Extension nutzt müsst ihr einmalig in der Command-Palette den Command `Deno: Initialize Workspace Configuration` ausführen und zweimal mit `Yes` bestätigen.
- Im Terminal zum Workshop-Repository navigieren.

## Material

### Dokus

- [Deno Manual (Dokumentation)](https://deno.land/manual)
- [Deno doc (Runtime-API Dokumentation)](https://doc.deno.land/builtin/stable)
- [Deno Standard Library](https://deno.land/std)

### VS-Code Extensions

- [Deno (VS-Code Extension)](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
- [Deno Standard Library Snippets](https://marketplace.visualstudio.com/items?itemName=laurencebahiirwa.deno-std-lib-snippets)
<br /><br/>
- [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
- [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Workshop-Material

- [Workshop-Repository (Aufgaben folgen)](https://github.com/BenediktEngel/wt-deno-workshop)
