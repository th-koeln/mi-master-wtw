---
layout: workshop
titel: Web Security - Code Injection
social-media-untertitel: Online-Workshop am 31. Mai 2022
datum: 2022-05-31
modul: web
published: true
autor: Luca Stamos, Stefan Steinhauer
bild: ../codeinject.png
art: workshop
termin: Dienstag, 31. Mai 2022, 13:00 Uhr
dauer: 120-150 Minuten
raum: https://th-koeln.zoom.us/j/83055835045 (Zugangscode webtech) 
---

In diesem Workshop geht es um Web Security. Speziell geht es um Injection Vulnerabilitys und Cross Site Scripting (XSS) Angriffe.
Dazu wird auf 3 verschiedene Injection Vulnerabilities eingegangen, diese sind:
- XSS (Javascript)
- PHP Injection
- SQL Injection
Zuerst werden diese drei Vulnerabilities vorgestellt und demonstriert. Anschließend wird den Teilnehmern, auf einer eigens für den Workshop erstellten Webseite, die Möglichkeit gegeben die demonstrierten Verfahren anzuwenden und mit Diesen zu experimentieren. 
Nachdem auf diese Weise ein Verständnis für diese Vulnerabilities aufgebaut wurde wird anschließen erläutert wie Diese möglichst vermieden werden können.
So ist es das Ziel dieses Workshops die Teilnehmer für dieses Thema zu sensibilisieren und somit Ihr Verständnis von Web Security zu erweitern.


## Vorraussetzungen

Es gibt keine technischen Voraussetzungen um am Workshop teilzunehmen. Es wird kein Repository und keine spezielle Software benötigt. Ihr solltet mit der Syntax sowie grundlegenden Befehlen von Linux, PHP und SQL vertraut sein.
Bei Interesse kann das von uns verwendete Docker Image heruntergeladen und lokal ausgeführt werden (siehe unten). 

## Vorbereitungen

### Linux:

- https://kinsta.com/de/blog/linux-befehle/


### PHP:

- https://www.php-einfach.de/php-tutorial/erste-schritte/

### SQL:

- https://www.php-einfach.de/mysql-tutorial/uebersicht-sql-befehle/


## Material


### Workshop-Material

Bei Interesse kann folgender Befehl verwendet werden um einen Container auf Basis unseres Docker Images zu erstellen (keine Voraussetzung!):
- docker run -d -p 8080:80 --name codeinject lazyloki/workshop 

Alternativ kann das Image auch nur heruntergeladen werden:
- docker pull lazyloki/workshop

Das Image befindet sich im offiziellen Docker Hub:
- https://hub.docker.com/repository/docker/lazyloki/workshop
