---
layout: workshop
titel: Sicherheit in der Webentwicklung - Vom Bedrohungsmodell zum Exploit
social-media-untertitel: Workshop am 30. Juni 2026
datum: 2026-06-30
modul: wt
published: true
autor: Florian Fertikowski
bild: ../thumbnail.webp
bildcredits: magnific.com
art: workshop
termin: Dienstag, 30. Juni 2026, 13:00 Uhr
dauer: ~120-150 Minuten
raum: 3.215
---


# Ziel des Workshops

Sicherheit beginnt nicht beim Angriff, sondern beim Entwurf. In diesem Workshop lernen die Teilnehmenden Bedrohungsmodellierung (Threat Modelling) als systematische Methode kennen, um proaktiv vorherzusagen, wo eine Webanwendung verwundbar ist. Damit setzt der Workshop dort an, wo die OWASP Top 10 2025 (die Referenzliste der zehn kritischsten Web-Sicherheitsrisiken) mit Insecure Design (A06) das Fehlen genau dieser Methode als Risiko benennt.

Mithilfe von STRIDE und einem Datenflussdiagramm stellen die Teilnehmenden Hypothesen darüber auf, wo eine Webanwendung – am Beispiel des OWASP Juice Shop – angreifbar sein könnte. Danach gleichen sie diese Hypothesen in einer Hands-on-Hacking-Session mit der realen Web-App ab. Als Leitfaden dienen dabei die Schwachstellen aus den OWASP Top 10 2025.

Es werden die folgenden Themen behandelt:

* Grundlagen der Bedrohungsmodellierung – Was, Warum, Wann und ihr Platz im Secure SDLC (Software Development Life Cycle)
* Systeme verstehen und modellieren mit Datenflussdiagrammen (DFD) und Trust Boundaries
* Bedrohungen systematisch ableiten mit der STRIDE-Methode
* Hypothesen in der Praxis beweisen und die vorhergesagten Schwachstellen am OWASP Juice Shop ausnutzen
* Zentrale Sicherheitsrisiken der OWASP Top 10 2025 kennenlernen

## Zielgruppe

Dieser Workshop richtet sich an Studierende sowie Web-Entwicklerinnen und -Entwickler, die über das reaktive Schließen einzelner Lücken hinausgehen und Sicherheit systematisch und von Anfang an mitdenken möchten. Teilnehmende lernen Schwachstellen vorherzusagen und diese Vorhersagen anschließend in einer Live-Umgebung zu finden und nachzuweisen.

## Vorkenntnisse

Empfohlen wird ein grundlegendes Verständnis von Webanwendungen und den Entwicklertools des Browsers (DevTools). Web-Security-Grundkenntnisse sind hilfreich, aber keine Voraussetzung: Kurze Auffrischungs-Inputs und Begleitmaterialien geben den Teilnehmenden das nötige Grundwissen an die Hand.

## Technische Voraussetzungen

* Docker
* OWASP Threat Dragon (als Desktop-App)
* Aktueller Browser mit DevTools, z. B. Firefox

## Material & Dokumentation

* [Workshop-Repository](https://github.com/florian-fertikowski/threat-modeling-workshop)
* [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/)
* [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/)
* [OWASP Top 10 2025](https://owasp.org/Top10/)
* [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org/)

