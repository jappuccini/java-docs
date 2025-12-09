---
title: Arbeiten mit Git
description: ''
sidebar_position: 30
tags: [git]
---

:::info Benötigte Tools

[JDK](https://www.oracle.com/java/technologies/downloads/),
[Eclipse](https://www.eclipse.org/) und [Git](https://git-scm.com/downloads)

:::

## Remote Repository anlegen

- Registriere Dich bei [GitHub](https://github.com/)
- Melde Dich bei [GitHub](https://github.com/) an
- Führe die Funktion **New** aus
- Gib die folgenden Informationen ein, markiere die Option **Add a README file**
  und betätige die Drucktaste **Create repository**
  - Repository name: **[Der Name Deines remote Repositorys]** (z.B. _Java_)
- Führe die Funktion **Profil - Settings** aus
- Führe die Funktion **Developer Settings** aus
- Führe die Funktion **Personal access tokens - Tokens (classic)** aus
- Führe die Funktion **Generate new token - Generate new token (classic)** aus
- Gib die folgenden Informationen ein, Markiere die Option **repo** und betätige
  die Drucktaste **Generate token**
  - Note: **[Deine Beschreibung]** (z.B. _Java_)
  - Expiration: **No expiration**
- Kopiere das erstellte Token und speichere es irgendwo ab

## Git konfigurieren

- Starte die Kommandozeile (z.B. Windows PowerShell)
- Führe den Befehl `git config --global user.name "[Dein Name]"` aus, um den
  Benutzernamen festzulegen (z.B.
  `git config --global user.name "Daniel Appenmaier"`)
- Führe den Befehl `git config --global user.email "[Deine E-Mail-Adresse]"`
  aus, um die E-Mail-Adresse festzulegen (z.B.
  `git config --global user.email "daniel.appenmaier@gmail.com"`)

## Lokales Repository anlegen

**Variante A: Via Git Init**

- Starte die Kommandozeile (z.B. Windows PowerShell)
- Führe den Befehl `git init "[Der Pfad zu Deinem lokalen Repository]"` aus, um
  ein lokales Repository zu erstellen (z.B.
  `git init "C:\Users\Daniel Appenmaier\git\Java"`)
- Führe den Befehl `cd "[Der Pfad zu Deinem lokalen Repository]"` aus, um zum
  Arbeitsbereich Deines ersten lokalen Repositorys zu wechseln (z.B.
  `cd "C:\Users\Daniel Appenmaier\git\Java"`)
- Führe den Befehl
  `git remote add origin https://github.com/[Dein GitHub Benutzername]/[Der Name Deines remote Repositorys]`
  aus, um eine Verbindung zwischen dem lokalen Repository und dem remote
  Repository herzustellen (z.B.
  `git remote add origin https://github.com/appenmaier/Java`)
- Führe den Befehl `git pull origin main` aus, um den Arbeitsbereich zu
  aktualisieren
- Führe den Befehl `git switch main` aus, um zum Branch _main_ zu wechseln

**Variante B: Via Git Clone**

- Starte die Kommandozeile (z.B. Windows PowerShell)
- Führe den Befehl
  `git clone https://github.com/[Dein GitHub Benutzername]/[Der Name Deines remote Repositorys] "[Der Pfad zu Deinem lokalen Repository]"`
  aus, um das remote Repository zu klonen (z.B.
  `git clone https://github.com/appenmaier/Java "C:\Users\Daniel Appenmaier\git\Java"`)

## Lokales Repository in Eclipse einbinden

- Starte Eclipse
- Führe die Funktion **File - Import... - General - Projects from Folder or
  Archive** aus und betätige die Drucktaste **Next >**
- Gib die nachfolgenden Informationen ein und betätige die Drucktaste **Finish**
  - Import source: **[Der Pfad zu Deinem lokalen Repository]** (z.B.
    _C:\Users\Daniel Appenmaier\git\Java_)

## Remote Repository aktualisieren (bei Änderungen im lokalen Repository)

**Variante A: Via Kommandozeile**

- Führe mehrmals den Befehl `git add [Die zu indizierende Datei]` aus, um die
  hinzugefügten bzw. geänderten bzw. gelöschten Dateien zu indizieren (z.B.
  `git add main/HelloWorld.java`)
- Führe den Befehl `git commit -m "[Deine Commit-Message]"` aus, um die
  indizierten Dateien zu versionieren (z.B.
  `git commit -m "Add HelloWorld.java"`)
- Führe den Befehl `git push` aus, um das remote Repository zu aktualisieren
- Gib Deine Anmeldedaten für GitHub ein, um Dich zu authentifizieren

**Variante B: Via Eclipse**

- Starte Eclipse
- Führe die Funktion **Window - Show View - Other...** aus
- Markiere den Eintrag **Git Staging** und betätige die Drucktaste **Open**
- Navigiere zur View _Git Staging_
- Markiere die zu indizierenden Dateien und betätige die Drucktaste **Add
  selected files to the index**
- Gib die nachfolgenden Informationen ein und betätige die Drucktaste **Commit
  and Push**
  - Commit Message: **[Deine Commit-Message]** (z.B. _Add HelloWorld.java_)

## Lokales Repository aktualisieren (bei Änderungen im remote Repository)

**Variante A: Via Kommandozeile**

- Starte die Kommandozeile (z.B. Windows PowerShell)
- Führe den Befehl `cd "[Der Pfad zu Deinem lokalen Repository]"` aus, um zum
  Arbeitsbereich Deines lokalen Repositorys zu wechseln (z.B.
  `cd "C:\Users\Daniel Appenmaier\git\Java"`)
- Führe den Befehl `git pull` aus, um den Arbeitsbereich zu aktualisieren

**Variante B: Via Eclipse**

- Starte Eclipse
- Navigiere in der View _Package Explorer_ zum Arbeitsbereich Deines lokalen
  Repositorys
- Führe im Kontextmenü des Arbeitsbereichs (Rechtsklick) die Funktion **Team -
  Pull** aus
- Betätige die Drucktaste **Close**
