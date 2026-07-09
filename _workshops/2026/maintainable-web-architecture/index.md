---
layout: workshop
titel: Modulare und wartbare Web-Architekturen
social-media-untertitel: Vom Spaghetti-Code zur wartbaren Web-Architektur
datum: 2026-07-07 #
modul: wt
published: true
autor: Muhammad Fakhar
bild: ../thumbnail.webp
bildcredits: ChatGPT
art: workshop
termin: Dienstag, 7. Juli 2026, 14:30 Uhr
dauer: 120 Minuten
raum: 3.215
---

## Modulare und wartbare Web-Architektur

Web-Apps werden meist nicht sofort unübersichtlich — sie werden es langsam. Wenn wir UI, State, API-Aufrufe, Validierung, Geschäftsregeln, Drittanbieter-SDKs und Fehlerbehandlung hinzufügen, kann eine einzelne Komponente oder Service-Datei schnell zu viel auf einmal tun.

Dieser Workshop erklärt, warum Webanwendungen schwer zu warten sind, wenn Verantwortlichkeiten vermischt werden, und wie praktische Architekturprinzipien helfen können. Das Hauptthema ist die **Unabhängigkeit** zwischen den Teilen der Anwendung: Bei guter Architektur geht es nicht um komplizierte Ordnerstrukturen, sondern darum, zukünftige Änderungen einfacher, sicherer und günstiger zu machen.

Der Workshop konzentriert sich besonders auf zwei praktische Themen: die Verwendung des **Wrapper-Patterns** für Drittanbieter-SDKs und die Nutzung von **Sentry** zum Verständnis von Fehlern in der Produktion.

## Zielsetzung und Inhalte

- **Zentrale Architekturprinzipien:** Wir behandeln kurz Prinzipien wie Separation of Concerns, DRY, KISS, Kapselung, lose Kopplung und reine Funktionen (Pure Functions) und zeigen, wie sie helfen, Code änderbar zu halten.
- **Praktisches Refactoring:** Wir refaktorisieren eine unübersichtliche React-Komponente in kleinere Teile mit klareren Verantwortlichkeiten.
- **Dependency Inversion und Wrapper-Pattern:** Wir erstellen einen Wrapper um einen E-Mail-Provider wie Resend oder Mailjet, damit die App nicht eng an ein einzelnes Drittanbieter-SDK gekoppelt ist.
- **Production Telemetry mit Sentry:** Wir zeigen, wie Sentry dabei hilft, Produktionsfehler mithilfe von Stacktraces, Breadcrumbs, Browser-/Geräteinformationen und Session Replay zu verstehen.

## Zielgruppe

Dieser Workshop richtet sich an Studierende und Entwickler\*innen, die bereits die Grundlagen der Webentwicklung kennen und lernen möchten, wie Anwendungen bei zunehmender Größe leichter zu warten sind.

Er ist besonders nützlich für alle, die bereits React-Komponenten oder kleine Web-Apps gebaut haben, aber verstehen möchten, wie man unübersichtlichen Code, wiederholte Logik und eine enge Kopplung an Drittanbieter-Tools vermeidet.

## Vorkenntnisse

- Vertrautheit mit React oder einem ähnlichen Frontend-Framework.
- Grundlegendes Verständnis von API-Aufrufen und Component State.
- Grundlegende Git-Kenntnisse sind hilfreich.

## Technische Voraussetzungen

Um einen direkten und reibungslosen Einstieg in die Praxis zu gewährleisten, sollten folgende Komponenten im Vorfeld auf dem eigenen Gerät installiert bzw. vorbereitet werden:

- Node.js installiert.
- Git installiert.
- Ein moderner Code-Editor, z. B. VS Code.
- Empfohlen: Ein Sentry-Account.
- Empfohlen: Ein Account bei einem E-Mail-Provider wie Resend oder Mailjet.

## Material & Dokumentation

- [Workshop-Repository](https://github.com/fakhar23/Workshop-Maintainable-webapp-architecture.git)
- [Workshop-Folien (Slides)](https://github.com/fakhar23/Workshop-Maintainable-webapp-architecture/blob/main/Slides.pdf)

### Industry Standard Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [Martin Fowler - Software Architecture](https://martinfowler.com/architecture/)
- [OWASP Secure Coding Practices](https://owasp.org/)
