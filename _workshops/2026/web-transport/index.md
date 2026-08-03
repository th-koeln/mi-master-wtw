---
layout: workshop
titel: WebTransport als Alternative zu WebSockets
social-media-untertitel: Workshop am 21. Juli 2026
datum: 2026-07-21
modul: wt
published: true
autor: Michel Haurand
bild: ../thumbnail-ai-generated.webp
bildcredits: 
art: workshop
termin: Workshop fällt leider aus
dauer: ~120-180 Minuten
raum: 3.215
---

# Ziel des Workshops

WebSockets sind seit Jahren der Standard für bidirektionale Echtzeitkommunikation im Web. Sie bringen jedoch durch das zugrundeliegende TCP-Protokoll Limitationen mit sich (wie z. B. Head-of-Line Blocking). Hier setzt WebTransport als moderne, performante Alternative auf Basis von HTTP/3 und QUIC an. 

Dieser Workshop stellt die Technologie vor, vergleicht sie mit WebSockets und zeigt anhand eines Mini-Projekts, wie eine Implementierung in der Praxis aussieht. Der Workshop bietet dabei eine Balance zwischen theoretischen Grundlagen und praktischer Anwendung.

Es werden die folgenden Themen behandelt:

* **Theorie & Einordnung:** Was ist WebTransport? Wie unterscheidet sich die Architektur von WebSockets und welche Rolle spielen HTTP/3 und QUIC?
* **Praxisteil:** Aufbau einer einfachen, bidirektionalen Client-Server-Verbindung mit WebTransport (ohne komplexe Frameworks).
* **Migration:** Gemeinsamer Umbau eines rudimentären WebSocket-Beispiels auf WebTransport.
* **WrapUp & Reflexion:** Diskussion über Vor- und Nachteile, Anwendungsfälle und ein Ausblick auf den Einsatz im Entwickleralltag.

## Zielgruppe

Dieser Workshop richtet sich an Master-Studierende und Web-Entwicklerinnen und -Entwickler, die performante Echtzeit-Anwendungen bauen wollen und sich für zukunftsfähige Netzwerkprotokolle im Web interessieren.

## Vorkenntnisse

Um an den praktischen Übungen sinnvoll teilnehmen zu können, wird ein grundlegendes Verständnis in folgenden Bereichen vorausgesetzt:
* Wesentliche Protokolle und Strukturen im Web
* Solide JavaScript-Kenntnisse (Frontend und Serverseitige Programmierung mit Node.js)
* Grundverständnis von asynchroner Programmierung und Client-Server-Architekturen

## Technische Voraussetzungen

Bitte stellt sicher, dass folgende Tools vor dem Workshop installiert und einsatzbereit sind:
* Node.js inklusive npm
* IDE oder Code-Editor (z. B. VS Code)
* Ein aktueller Browser mit WebTransport-Unterstützung (z. B. Chrome)

## Material & Dokumentation

* [Workshop-Repository](https://github.com/Y0d4l3/webtech-workshop-web-transport)
* [WebTransport W3C Spezifikation](https://w3c.github.io/webtransport/)
* [MDN Web Docs: WebTransport API](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API)
