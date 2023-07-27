---
title: Eclipse verwenden
description: ''
sidebar_position: 40
--- 

## Hilfreiche Tastaturkürzel
| Kürzel       | Funktion                                    |
| ------------ | ------------------------------------------- |
| Ctrl + Space | Autovervollständigung                       |
| Shift + F1   | Quellcode formatieren                       |
| Ctrl + 1     | Quick-Fix ausführen                         |
| Ctrl + 7     | Quellcode auskommentieren / entkommentieren |
| Ctrl + +     | Quellcode-Schriftgröße erhöhen              |
| Ctrl + -     | Quellcode-Schriftgröße verringern           |

## Hilfreiche Einstellungen
- _**Window - Preferences - Java - Editor - Save actions - Perform the selected actions on save**_: Ja
- _**Window - Preferences - Java - Editor - Save actions - Perform the selected actions on save - Format source code**_: Ja
- _**Window - Preferences - Java - Editor - Save actions - Perform the selected actions on save - Organize imports**_: Ja
- _**Window - Preferences - Java - Editor - Save actions - Perform the selected actions on save - Additional actions**_: Ja

## Perspektiven wechseln
![image](https://user-images.githubusercontent.com/47243617/209168372-45c00707-e408-400d-ac25-f122242eff5a.png)

:::note Hinweis
Perspektiven können über _**Window – Perspective – Reset Perspective...**_ auf den Ursprungszustand zurückgesetzt werden
:::

## Hilfreiche Funktionen der Java-Perspektive
![image](https://user-images.githubusercontent.com/47243617/209168402-4396c998-08ca-46ba-9c70-af331691b856.png)

## Hilfreiche Funktionen der Debugging-Perspektive
![image](https://user-images.githubusercontent.com/47243617/209168425-7c333b87-aeb0-45db-85dd-8199c8ff4437.png)

## Git-Repository in Eclipse integrieren
- In der Git-Perspektive Drucktaste _**Clone a Git repository**_ betätigen
- URI eingeben (z.B. https://github.com/appenmaier/dhbw-java) und Drucktaste _**Next >**_ betätigen
- Drucktaste _**Next >**_ betätigen
- Drucktaste _**Finish**_ betätigen
- Importiertes Git-Repository aufklappen
- Im _**Working Tree**_ Rechtsklick auf den gewünschten Ordner ausführen
- Option _**Import Projects...**_ auswählen
- Drucktaste _**Finish**_ betätigen

## Java-Projekt zu einem Git-Repository hinzufügen
- In der Java-Perspektive Rechtsklick auf gewünschtes Java-Projekt ausführen
- Option _**Team – Share Project**_ auswählen
- Option _**Git**_ auswählen und Drucktaste _**Next >**_ betätigen
- Gewünschtes Git-Repository auswählen und Drucktaste _**Finish**_ betätigen

## Git-Staging-View anzeigen lassen
- Option _**Window – Show View – Other...**_ auswählen
- Option _**Git Staging**_ auswählen
- Drucktaste _**OK**_ betätigen

## Änderungen eines lokalen Git-Repositories hochladen (Pushen)
- In der View _**Git Staging**_ alle geänderten Objekte markieren und Drucktaste _**Add selected files to the index**_ betätigen
- _**Commit Message**_ eingeben und Drucktaste _**Commit and push**_ betätigen

## Lokales Git-Repository aktualisieren (Pullen)
- In der Java-Perspektive Rechtsklick auf gewünschtes Java-Projekt ausführen
- Option _**Team – Pull**_ auswählen
