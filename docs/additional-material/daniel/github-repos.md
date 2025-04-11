---
title: GitHub-Repositories
description: ''
sidebar_position: 10
tags: []
---

## Allgemeine Repositories

- [Musterlösungen Übungsaufgaben](https://github.com/appenmaier/java_exercises)
- [Musterlösungen Klausuraufgaben](https://github.com/appenmaier/java_exam_exercises)
- [Apps](https://github.com/appenmaier/java_apps)
- [Demos](https://github.com/appenmaier/java_demos)

## Kursspezifische Repositories

- [Demos WWIBE124](https://github.com/appenmaier/java_wwibe124)
- [Demos WWIBE224](https://github.com/appenmaier/java_wwibe224)
- [Demos WWIBE123](https://github.com/appenmaier/java_wwibe123)
- [Demos WWIBE223](https://github.com/appenmaier/java_wwibe223)
- [Demos TIM24 & TIS24](https://github.com/appenmaier/java_timtis24)
- [Demos TIT24 & TIK24](https://github.com/appenmaier/java_tittik24)
- [Demos TIM23 & TIS23](https://github.com/appenmaier/java_timtis23)
- [Demos TIT23 & TIK23](https://github.com/appenmaier/java_tittik23)

## Anleitung: Installieren benötigter Tools

- Installiere ein [JDK](https://www.oracle.com/java/technologies/downloads/)
- Installiere die [Eclipse IDE](https://www.eclipse.org/)
- Installiere [Git](https://git-scm.com/downloads)
- Installiere den [Scene Builder](https://gluonhq.com/products/scene-builder/)
  (nur für JavaFX-Anwendungen)
- Installiere das Eclipse-Plugin
  [e(fx)clipse](http://download.eclipse.org/efxclipse/updates-released/) (nur
  für JavaFX-Anwendungen)

## Anleitung: Klonen und Einbinden eines remote Repositorys

- Starte die Kommandozeile (z.B. Windows PowerShell)
- Führe den Befehl
  `git clone https://github.com/appenmaier/[Der Name des remote Repositorys] "[Pfad zu Deinem lokalen Repository]"`
  aus, um das remote Repository zu klonen (z.B.
  `git clone https://github.com/appenmaier/java_exercises "C:\Users\Jappuccini\git\java_exercises"`)
- Starte Eclipse
- Führe die Funktion
  `File - Import... - General - Projects from Folder or Archive` aus und
  betätige die Drucktaste `Next >`
- Gib die nachfolgenden Informationen ein und betätige die Drucktaste `Finish`
  - Import source: `[Pfad zu Deinem lokalen Repository]` (z.B.
    `C:\Users/Jappuccini\git\java_exercises`)

## Anleitung: Aktualisieren eines lokalen Repositorys

**Variante A: Via Kommandozeile**

- Starte die Kommandozeile (z.B. Windows PowerShell)
- Führe den Befehl `cd "[Pfad zu Deinem lokalen Repository]"` aus, um zum
  Arbeitsbereich Deines lokalen Repositorys zu wechseln (z.B.
  `cd "C:\Users\Jappuccini\git\java_exercises"`)
- Führe den Befehl `git pull` aus, um den Arbeitsbereich zu aktualisieren

**Variante B: Via Eclipse**

- Starte Eclipse
- Navigiere im _Package Explorer_ zum Arbeitsbereich Deines lokalen Repositorys
- Führe im Kontextmenü des Arbeitsbereichs (Rechtsklick) die Funktion
  `Team - Pull` aus
- Betätige die Drucktaste `Close`

## Anleitung: Anlegen eines Maven-Projects

- Starte Eclipse
- Führe die Funktion `File - New - Maven Project` aus
- Markiere die Option `Create a simple project (skip archetype selection)`,
  entmarkiere die Option `Use default Workspace location`, gib die nachfolgenden
  Informationen ein und betätige die Drucktaste `Next >`
  - Location: `[Pfad zu Deinem Projektordner]` (z.B.
    `C:\Users\Jappuccini\eclipse-workspace\java_demos`)
- Gib die nachfolgenden Informationen ein und betätige die Drucktaste `Finish`
  - Group Id:
    `[Eine Domain].[Dein Name bzw. Deine Organisation in Kleinbuchstaben]` (z.B.
    `edu.jappuccini`)
  - Artifact Id:
    `[Der Name Deines Projekts in Kleinbuchstaben und ohne Leerzeichen]` (z.B.
    `java-demos`)
  - Version: `0.0.1-SNAPSHOT`
  - Packaging: `jar`
  - Name: `[Der Name Deines Projekts]` (z.B. `Java Demos`)
  - Description: `[Die Beschreibung Deines Projekts` (z.B. `Java Demos`)

## Anleitung: Scene Builder mit Eclipse verbinden

- Starte Eclipse
- Navigiere zu `Window – Preferences – JavaFX`
- Gib beim Feld `SceneBuilder executable` den Wert
  `[Pfad zur SceneBuilder.exe]\SceneBuilder.exe` ein und betätige die Drucktaste
  `Apply and Close` (z.B. `C:\Programme\Scene Builder\SceneBuilder.exe`)

## Anleitung: Ausführen von JavaFX-Anwendungen

**Variante A: Via Klasse _App_**

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

**Variante B: Via Klasse _MainClass_**

- Starte Eclipse
- Navigiere im Package Explorer zur gewünschten JavaFX-Anwendung und wähle die
  Klasse `MainClass` aus
- Wähle die Option `Run As - 1 Java Application` aus
