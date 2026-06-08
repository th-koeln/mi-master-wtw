---
layout: workshop
titel: Web Research Agent using Google ADK 
social-media-untertitel: Workshop am 9. Juni 2026
datum: 2026-06-09
modul: wt
published: true
autor: David Hoffmann
bild: ../thumbnail.webp
bildcredits: Generated using Google Gemini
art: workshop
termin: Dienstag, 09. Juni 2026, 13:00 Uhr
dauer: ~120 Minuten
raum: 3.215
---

# Workshop-Beschreibung: Web Research Agent mit Google ADK

In diesem Workshop wird praxisnah vermittelt, wie autonome Agenten-Systeme mit dem **Google ADK** (Agent Development Kit) entwickelt werden können. In einer Mischung aus theoretischen Grundlagen und praktischen Implementierungen werden die Kernkonzepte des Frameworks Schritt für Schritt am konkreten Beispiel eines **Event Research Agents** erlernt.

Um dem Agenten den Zugriff auf aktuelle Daten aus dem Internet zu ermöglichen, wird die Websuche über die **Tavily API** angebunden. Zusätzlich ermöglichen wir dem Agenten tiefergehende Webcrawls über die selbstgehostete App **Crawl4AI**.

---

## Zielsetzung und Inhalte

* **Multi-Agenten-Design mit Google ADK:** Agent Orchestration, Tool-Anbindung und die Integration von Model Context Protocol (MCP) Servern.
* **Zustandsverwaltung (State Management):** Sessions und State Handling über verteilte Agenten-Interaktionen hinweg.
* **Advanced Web Grounding:** Tavily und Crawl4AI zur Extraktion von unstrukturierten Online-Inhalten.
* **Architektur und Prompt Engineering:** Best Practices für deterministisches Verhalten in agentischen Systemen.

## Zielgruppe

Dieser Workshop richtet sich an Entwicklerinnen und Entwickler, die den Schritt von einfachen LLM-Prompts hin zu autonomen Agenten gehen möchten. Der Fokus liegt darauf, wie generative Agenten über Tools mit externen Schnittstellen interagieren, APIs konsumieren und Webinhalte strukturiert verarbeiten können.

## Vorkenntnisse

* Solide Erfahrung mit Node.js (JavaScript / TypeScript)
* Fundiertes Verständnis von REST-APIs
* Grundkenntnisse in Docker und Docker Compose

## Technische Voraussetzungen

Um einen direkten Einstieg in die Praxis zu gewährleisten, sollten folgende Komponenten im Vorfeld installiert bzw. vorbereitet werden:

* **Node.js 24+** (aktuelle LTS-Version)
* **Docker & Docker Compose** (zum Selbsthosten der Agent-Tools und der Webseite zum Workshop)
* **IDE** (z. B. VS Code)
* **Gemini API Key** für den Modell-Zugriff (kostenlos unter [aistudio.google.com](https://aistudio.google.com))
* **Tavily API Key** für die Websuche (kostenlos unter [tavily.com](https://tavily.com))

> Um Verzögerungen durch Limits kostenloser Versionen der Google AI API während des Workshops zu vermeiden und falls sich jemand nicht registrieren möchte, stelle ich kostenlimitierte API Keys für den Zeitraum des Workshops zur Verfügung.

## Material & Dokumentation

Während des Workshops wird eine Webseite mit Aufgaben und weiteren Infos bereitgestellt.

* [Workshop-Repository](https://github.com/d-hoffmann/workshop-web-technologies)
* [Google ADK Documentation](https://adk.dev/)
* [Tavily Documentation](https://docs.tavily.com/)
* [Crawl4AI Documentation](https://docs.crawl4ai.com/)
