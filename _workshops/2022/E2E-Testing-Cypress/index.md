---
layout: workshop
titel: Einführung zu End-to-End Testing mit Cypress.io
social-media-untertitel: Online-Workshop am 27. Juni 2022
datum: 2022-06-27
modul: wt
published: false
autor: Max Hammer, Alex Spindeler
bild: ../hero.png
art: workshop
termin: Dienstag, 27. Juni 2022, 13:00 Uhr
dauer: 120-150 Minuten
raum: https://th-koeln.zoom.us/j/83055835045 (Zugangscode webtech) 
---

In diesem Workshop werden wir eine Einführung ins E2E Web Testing mit Cypress.io geben. Wir werden lernen was E2E Testing ist und welche Ziele man damit erreichen möchte.

Wir werden also nicht jeden Aspekt von Cypress erforschen, sondern viel mehr anhand einer Beispiel Anwendung die ersten Schritte erklären und wichtige und nützliche Aspkete aufzeigen, sodass jeder in der Lage ist tiefer in E2E Testing mit diesem Framework einzutauchen. Die Beispiel Applikation ist von [TodoMVC](https://todomvc.com/) entnommen worden. 

## Vorkenntnisse:
- HTML (+CSS)
- Javascript
- Git
- REST (+Client)

## Benötigte Tools:
- IDE (VS Code)
- [Github Repo](https://github.com/MaxHam/testing-workshop-cypress)
- NodeJS
- Browser mit DevTools (Google Chrome)

## Vorbereitung:

- Node.js/npm installieren.
- Workshop-Repository clonen.
- npm-Abhängigkeiten für Cypress Workshop installieren.
  - Ìm Repository `npm install` ausführen
- npm-Abhängigkeiten für Beispiel Applikation installieren.
  - Die Abhängigkeiten für die Beispiel Applikation sollten bereits durch obriges Kommando installiert sein, sonst `cd todomvc && npm install`
- Überprüfen ob Beispiel Applikation startet mit `npm run start` unter `http://localhost:3000/`
- Überprüfen ob Cypress startet mit `npm run cy:open`

### Material
- [Workshop Repository](https://github.com/MaxHam/testing-workshop-cypress) (Wird spätestens am Tag des Workshops veröffentlicht)
- [Cypress.io Dokumentation](https://docs.cypress.io/)
- [Mocha Testing Library](https://mochajs.org/api/)
- Folien (später im [Repo](https://github.com/MaxHam/testing-workshop-cypress))