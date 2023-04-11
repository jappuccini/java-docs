---
title: JavaFX einrichten
description: ''
sidebar_position: 30
--- 

## JavaFX SDK herunterladen und installieren
- JavaFX SDK herunterladen (_**https://gluonhq.com/products/javafx/**_)
- Zip-Datei _**openjfx-\[JavaFX SDK Version\]_windows-x64_bin-sdk.zip**_ entpacken
- Unterordner _**javafx-sdk-\[JavaFX SDK Version\]**_ der Zip-Datei in den Ordner _**C:\Progam Files\Java**_ kopieren

## Eclipse-Plugin e(fx)clipse herunterladen und installieren
- Eclipse starten
- Zu _**Help – Install new Software...**_ navigieren
- Bei Feld _**Work with**_ den Wert _**http://download.eclipse.org/efxclipse/updates-released/3.8.0/site**_ eingeben und _**ENTER**_ betätigen
- Option _**e(fx)clipse - install**_ und Option _**e(fx)clipse – single components**_ auswählen und Drucktaste _**Next >**_ betätigen
- Druckaste _**Finish**_ betätigen
- Drucktaste _**Restart now**_ betätigen
  
## Scene Builder herunterladen, installieren und mit Eclipse verknüpfen
- Scene Builder herunterladen (_**https://gluonhq.com/products/scene-builder/ - Download Scene Builder**_)
- Scene Builder installieren
- Eclipse starten
- Zu _**Window – Preferences – JavaFX**_ navigieren
- Bei Feld _**SceneBuilder executable**_ den Wert _**\[Pfad zur SceneBuilder.exe\]/SceneBuilder.exe**_ eingeben und Drucktaste _**Apply and Close**_ betätigen

## Java FX User Library einrichten
- Eclipse starten
- Zu _**Window – Preferences – Java – Build Path – User Libraries**_ navigieren
- Drucktaste _**New...**_ betätigen
- Bei Feld _**User library name**_ den Wert _**JavaFX \[JavaFX SDK Version\]**_ eingeben und Drucktaste _**OK**_ betätigen
- Eintrag _**JavaFX \[JavaFX SDK Version\]**_ auswählen und Drucktaste _**Add External JARs…**_ betätigen
- Alle .jar-Dateien des Ordners _**C:\Progam Files\Java\javafx-sdk-\[JavaFX SDK Version\]\lib**_ auswählen und Drucktaste _**Open**_ betätigen
- Für jede .jar-Datei nachfolgende Schritte durchführen:
    - Eintrag _**JavaFX \[JavaFX SDK Version\] – \<.jar-Datei\> – Source attachment: (None)**_ auswählen und Drucktaste _**Edit...**_ betätigen
    - Option _**External location**_ auswählen
    - Bei Feld _**Path C:\Progam Files\Java\javafx-sdk-\[JavaFX SDK Version\]\lib\src.zip**_ eingeben und Drucktaste _**OK**_ betätigen
    - Eintrag _**JavaFX \[JavaFX SDK Version\] – \<.jar-Datei\> – Javadoc location: (None)**_ auswählen und Drucktaste _**Edit...**_ betätigen
    - Option _**Javadoc URL**_ auswählen
    - Bei Feld _**Javadoc location path**_ den Wert _**https://openjfx.io/javadoc/ \[JavaFX SDK Version\]/**_ eingeben und Drucktaste _**OK**_ betätigen
- Drucktaste _**Apply and Close**_ betätigen
