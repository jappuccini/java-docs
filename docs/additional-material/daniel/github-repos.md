---
title: GitHub-Repositories
description: ''
sidebar_position: 10
tags: []
---

Diese Anleitung beschreibt das Arbeiten mit den nachfolgenden
GitHub-Repositories. Diese enthalten sämtlichen relevanten Quellcode zu den
Vorlesungen _Programmierung I (WI)_, _Programmierung II (WI)_ und _Programmieren
(INF)_.

- [Musterlösungen Übungsaufgaben](https://github.com/appenmaier/java_exercises)
- [Musterlösungen Klausuraufgaben](https://github.com/appenmaier/java_exam_exercises)
- [Musterlösungen Apps](https://github.com/appenmaier/java_apps)
- [Demos WWIBE224](https://github.com/appenmaier/java_wwibe224)
- [Demos WWIBE123](https://github.com/appenmaier/java_wwibe123)
- [Demos WWIBE223](https://github.com/appenmaier/java_wwibe223)
- [Demos TIM23 & TIS23](https://github.com/appenmaier/java_timtis23)
- [Demos TIT23 & TIK23](https://github.com/appenmaier/java_tittik23)

:::danger Hinweis

Alle Angaben in dieser Anleitung beziehen sich auf Windows als Betriebssystem
und Eclipse als IDE.

:::

## Voraussetzungen

- Ein installiertes [JDK](https://www.oracle.com/java/technologies/downloads/)
- Eine installierte [Eclipse IDE](https://www.eclipse.org/)
- Ein installiertes [Git](https://git-scm.com/downloads)

## Klonen eines remote Repositorys

- Starte die Kommandozeile (z.B. Windows PowerShell)
- Führe den Befehl
  `git clone https://github.com/appenmaier/[Der Name des remote Repositorys] "[Pfad zu Deinem lokalen Repository]"`
  aus, um das remote Repository zu klonen

## Einbinden eines remote Repositorys

- Starte Eclipse
- Führe die Funktion
  `File - Import... - General - Projects from Folder or Archive` aus und
  betätige die Drucktaste `Next >`
- Gib nachfolgende Informationen ein und betätige die Drucktaste `Finish`
  - Import source: `[Pfad zu Deinem lokalen Repository]`

## Lombok einrichten (falls benötigt)

- Lade die Datei [lombok.jar](https://projectlombok.org/) herunter
- Führe die Datei `lombok.jar` aus
- Betätige die Drucktaste `Install / Update`
- Betätige die Drucktaste `Quit Installer`
- Starte Eclipse
- Navigiere zu `Window – Preferences – Java – Build Path – User Libraries`
- Betätige die Drucktaste `New...`
- Gib beim Feld `User library name` den Wert `Lombok` ein und betätige die
  Drucktaste `OK`
- Wähle den Eintrag `Lombok` aus und betätige die Drucktaste
  `Add External JARs...`
- Wähle die .jar-Datei des Ordners `[Pfad zu Eclipse]\lombok.jar` aus und
  betätige die Drucktaste `Open`
- Betätige die Drucktaste `Apply and Close`
- Navigiere im Package Explorer zu Deinem Projekt und wähle dieses aus
- Navigiere zu `Project - Properties - Java Build Path` und wähle den Reiter
  `Libraries` aus
- Wähle den Eintrag `Classpath` aus und betätige die Drucktaste `Add Library...`
- Wähle die Option `User Library` aus und betätige die Drucktaste `Next >`
- Wähle die Option `Lombok` aus und betätige die Drucktase `Finish`
- Betätige die Drucktaste `Apply and Close`

## JavaFX einrichten (falls benötigt)

- Lade das [JavaFX SDK](https://gluonhq.com/products/javafx/) herunter
- Entpacke die heruntergeladene Zip-Datei und kopiere den Unterordner
  `javafx-sdk-[JavaFX SDK Version]` der entpackten Zip-Datei in den Ordner
  `[Pfad zu Deinem JavaFX-Ordner]`
- Starte Eclipse
- Navigiere zu `Window – Preferences – Java – Build Path – User Libraries`
- Betätige die Drucktaste `New...`
- Gib beim Feld `User library name` den Wert `JavaFX [JavaFX SDK Version]` ein
  und betätige die Drucktaste `OK`
- Wähle den Eintrag `JavaFX [JavaFX SDK Version]` aus und betätige die
  Drucktaste `Add External JARs...`
- Wähle alle .jar-Dateien des Ordners
  `[Pfad zu Deinem JavaFX-Ordner]\javafx-sdk-[JavaFX SDK Version]\lib` aus und
  betätige die Drucktaste `Open`
- Führe für jede .jar-Datei nachfolgende Schritte durch:
  - Wähle den Eintrag
    `JavaFX [JavaFX SDK Version] – <.jar-Datei> – Source attachment: (None)` aus
    und betätige die Drucktaste `Edit...`
  - Wähle die Option `External location` aus
  - Gib beim Feld `Path` den Wert
    `[Pfad zu Deinem JavaFX-Ordner]\javafx-sdk-[JavaFX SDK Version]\lib\src.zip`
    ein und betätige die Drucktaste `OK`
  - Wähle den Eintrag
    `JavaFX [JavaFX SDK Version] – <.jar-Datei> – Javadoc location: (None)` aus
    und betätige die Drucktaste `Edit...`
  - Wähle die Option `Javadoc URL` aus
  - Gib beim Feld `Javadoc location path` den Wert
    `https://openjfx.io/javadoc/[JavaFX SDK Version]/` ein und betätige die
    Drucktaste `OK`
- Betätige die Drucktaste `Apply and Close`
- Navigiere im Package Explorer zu Deinem Projekt und wähle dieses aus
- Navigiere zu `Project - Properties - Java Build Path` und wähle den Reiter
  `Libraries` aus
- Wähle die Option `Classpath` aus und betätige die Drucktaste `Add Library...`
- Wähle die Option `User Library` aus und betätige die Drucktaste `Next >`
- Wähle die Option `JavaFX [JavaFX Version]` aus und betätige die Drucktase
  `Finish`
- Betätige die Drucktaste `Apply and Close`

:::note Hinweis

Anleitungen für andere gängige Entwicklungsumgebungen können der
[JavaFX Homepage](https://openjfx.io/openjfx-docs/#introduction) entnommen
werden.

:::

## Scene Builder einrichten (falls benötigt)

- Installiere den [Scene Builder](https://gluonhq.com/products/scene-builder/)
- Installiere das Eclipse-Plugin
  [e(fx)clipse](http://download.eclipse.org/efxclipse/updates-released/)
- Starte Eclipse
- Navigiere zu `Window – Preferences – JavaFX`
- Gib beim Feld `SceneBuilder executable` den Wert
  `[Pfad zur SceneBuilder.exe]\SceneBuilder.exe` ein und betätige die Drucktaste
  `Apply and Close`

## JUnit 5 einrichten (falls benötigt)

- Starte Eclipse
- Navigiere im Package Explorer zu Deinem Projekt und wähle dieses aus
- Navigiere zu `Project - Properties - Java Build Path` und wähle den Reiter
  `Libraries` aus
- Wähle die Option `Classpath` aus und betätige die Drucktaste `Add Library...`
- Wähle den Eintrag `JUnit` aus und betätige die Drucktaste `Next >`
- Gib nachfolgende Informationen ein und betätige die Drucktaste `Finish`
  - JUnit library Version: `JUnit 5`
- Betätige die Drucktaste `Apply and Close`

## Aktualisieren eines lokalen Repositorys

- Starte die Kommandozeile (z.B. Windows PowerShell)
- Führe den Befehl `cd "[Pfad zu Deinem lokalen Repository]"` aus, um zum
  Arbeitsbereich Deines lokalen Repositorys zu wechseln
- Führe den Befehl `git pull` aus, um den Arbeitsbereich zu aktualisieren

## Ausführen von JavaFX-Anwendungen

**Variante A**

- Starte Eclipse
- Navigiere im Package Explorer zur gewünschten JavaFX-Anwendung und wähle die
  Klasse `App` aus
- Wähle die Option `Run – Run Configurations` aus
- Wähle die Option `Java Application` aus und betätige die Drucktaste
  `New launch configuration`
- Wähle den Reiter `Arguments` aus
- Gib beim Feld `VM arguments` den Wert
  `--module-path "[Pfad zu Deinem JavaFX-Ordner]\javafx-sdk-[JavaFX SDK Version]\lib" --add-modules=javafx.controls,javafx.fxml`
  ein und betätige die Drucktaste `Run`

**Variante**

- Starte Eclipse
- Navigiere im Package Explorer zur gewünschten JavaFX-Anwendung und wähle die
  Klasse `MainClass` aus
- Wähle die Option `Run As - 1 Java Application` aus
