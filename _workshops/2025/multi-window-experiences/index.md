---
layout: workshop
titel: Multi-Window Experiences with p5.js
social-media-untertitel: Workshop am 27. Mai 2025
datum: 2025-05-27
modul: wt
published: true
autor: Christian Noss
bild: ../thumbnail-p5.jpg
bildcredits: Christian Noss
art: workshop
termin: Dienstag, 27. Mai 2025, 13:00 Uhr
dauer: ~180 Minuten
raum: 3.217
---

## Ziel des Workshops

Dieser Workshop führt in Konzepte und Techniken ein, um mit p5.js interaktive Anwendungen zu entwickeln, die sich über mehrere Browserfenster oder -tabs hinweg erstrecken. Im Fokus steht die Umsetzung reaktiver, visuell verteilter oder modularer Interfaces – von einfachen Beispielen bis hin zu einer experimentellen Multi-Fenster-Visualisierung.

Dabei schauen wir uns an wie man:
- mit window.open() Fenster dynamisch erzeugt,
- Zustände und Daten zwischen Fenstern synchronisiert (z. B. per postMessage, BroadcastChannel, window.opener, localStorage, Worker),
- p5.js im Kontext mehrerer Render-Kontexte organisiert,

und wie man Fallstricke wie Kontextverlust meistert.

Am Ende steht ein funktionierender Prototyp im Form eines verteiltes Canvas-Systems.



## Empfohlene Vorkenntnisse

* Solide JavaScript-Grundkenntnisse (Funktionen, Objekte, Scope)
* Verständnis von DOM und Browserkontexten (z. B. `window`, `document`)
* Grundlegende Erfahrung im Umgang mit HTML
* Optional: Erfahrung mit p5.js: `setup()`, `draw()`, einfache Interaktionen


## Für wen ist der Workshop interessant?

Der Workshop richtet sich an:

* **Frontend-Entwickler\:innen**, die sich für dynamische UI-Konzepte, parallele Darstellung oder Zustands-Synchronisation interessieren
* **Creative Coder\:innen**, die mit p5.js experimentieren und neue Formen der Interaktion im Browser erkunden möchten
* **Mediengestalter\:innen** und **Interaction Designer\:innen**, die webbasierte Installationen oder performative Interfaces über mehrere Bildschirme oder Fenster hinweg umsetzen wollen

Interesse an kreativen Browser-Interfaces, dynamischer Interaktion und dem Zusammenspiel von Code, Darstellung und Kommunikation im Web.

## Material
- folgt

## Hilfreiche Links

* [p5.js Referenz](https://p5js.org/reference/)
* [p5.js Learn – Getting Started](https://p5js.org/learn/)
* [MDN: `window.open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)
* [MDN: `postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
* [MDN: BroadcastChannel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)



## Further Readings

* [p5.js Instance Mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode) – für saubere Trennung mehrerer p5-Kontexte
* [You Might Not Need window.opener](https://web.dev/broadcastchannel/) – modernes Messaging statt Window-Referenzen
* [Multiplayer Web Experiences (Google Dev Blog)](https://developer.chrome.com/articles/multiplayer-web-experiences/) – synchronisierte Browseranwendungen
* [Cross-Window Messaging Patterns](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#examples)
* [Data synchronization strategies across browser contexts (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/1y0tDdqGVW0?si=pxMa2FjWL_yUgDvP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

