---
layout: workshop
titel: Nebenläufigkeit in JavaScript
social-media-untertitel: Online-Workshop am 26. April 2022
datum: 2022-04-26
modul: wt
autor: Tobias Hund
bild: ../hero.png
art: workshop
termin: Dienstag, 26. April 2022, 13:00 Uhr
dauer: ca. 150 Minuten
raum: https://th-koeln.zoom.us/j/83055835045?pwd=ZWRCVVVPRUNNK1ZMQXplS0J1WEJkQT09
---

Wenn wir im Web entwickeln, dann werden wir mit höchster Wahrscheinlichkeit mit JavaScript (JS) konfrontiert. [W3Techs](https://w3techs.com/technologies/overview/client_side_language) stellte JS mit 97,9% als verbreitetste Client-Side Sprache für Websites fest. Um eine positive Benutzererfahrung zu erzielen, sollte die Website möglichst flüssig daher kommen, während externe Inhalte geladen und Berechnungen durchgeführt werden, der Nutzer mit der Seite interagiert und Aufgaben im Hintergrund laufen. Um das zu erreichen bedient man sich dem Konzept der Nebenläufigkeit in Verbindung zu Asynchronität.
In diesem Workshop werden wir uns mit Nebenläufigkeit in JavScript auseinandersetzen. Dazu werden wir uns anschauen, wie ein Internetbrowser archtiekturell aufgebaut ist und welche Rolle JS darin spielt. Folgend werden wir uns mit konkreten Methoden zur Nebenläufigkeit auseinandersetzen und uns dabei Callbacks und Promises anschauen und uns mit den Fallstricken (Pifalls) und Best Practices beschäftigen. Der Workshop ist in mehrere praktische und theoretische Teile eingeteilt, versteht sich aber stets offen für Diskussionen.

## Vorraussetzungen

Grundsätzlich sind für den Workshop nur grundlegende Kenntnisse in JavaScript (ES6) notwendig. Wir werden die Grundlagen gemeinsam aufarbeiten und uns mit den verschiedenen Techniken zur Nebenläufigkeit in JavaScript auseinandersetzen. 
Erfahrungen mit Callbacks und Promises sind von Vorteil, aber nicht zwingend erforderlich -- Jeder mit einem einigermaßen sicheren Code-Verständnis kann mitmachen.

## Vorbereitungen

Mindestens [Node.js](https://nodejs.org/en/) 14.x oder 16.x (der Workshop wurde auf 16.13.1 konzipiert, sollte aber mit den gängigen Versionen kompatibel sein). 
Idealerweise hierzu [VSCode](https://code.visualstudio.com/) und die Erweiterung [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) - ein anderer Editor und die Kommandozeile tun es aber auch.

**Alternativ** [Docker](https://www.docker.com/), [VSCode](https://code.visualstudio.com/) mit den Erweiterungen [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) und [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) installiert haben -- es wird ein Devcontainer bereitgestellt.

## Material

- [Workshop-Repository (Public ab Vortrag)](https://github.com/twobiers/webtech-workshop-js-async)
- In den letzten Slides (Zu finden im GitHub Repo) werden diverse Links zu ergänzenden Materialen aufgeführt. Mehr dazu im Workshop

Die wichtigsten Referenzen:
- [ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
- [HTML Specification - Web application APIs](https://html.spec.whatwg.org/multipage/webappapis.html)
- [Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)