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
- _**Window - Preferences - General - Appearance - Theme**_: Dark
- _**Window - Preferences - Java - Code Style - Formatter - Active profile**_: GoogleStyle
- _**Window - Preferences - Java - Editor - Save actions - Perform the selected actions on save**_: Ja
- _**Window - Preferences - Java - Editor - Save actions - Perform the selected actions on save - Format source code**_: Ja
- _**Window - Preferences - Java - Editor - Save actions - Perform the selected actions on save - Organize imports**_: Ja
- _**Window - Preferences - Java - Editor - Save actions - Perform the selected actions on save - Additional actions**_: Ja

## JavaFX-Anwendung ausführen (ab Java 11)
- Im Package Explorer zur gewünschten JavaFX Anwendung navigieren und gewünschte JavaFX Anwendung auswählen
- Option _**Run – Run Configurations**_ auswählen
- Option _**Java Application**_ auswählen und Drucktaste _**New launch configuration**_ betätigen
- Reiter _**Arguments**_ auswählen
- VM arguments: _**--module-path "C:\Program Files\Java\javafx-sdk-[JavaFX SDK Version\]\lib" --add-modules=javafx.controls,javafx.fxml**_ eingeben und Drucktaste _**Run**_ betätigen
