---
title: Daniel
description: ''
sidebar_position: 10
tags: []
---

## Downloads

- [Programmierung - Abbildungen.pptx](https://github.com/jappuccini/java-docs/files/11428579/Programmierung.-.Abbildungen.pptx)
- [Programmierung - Cheatsheet.pdf](https://github.com/jappuccini/java-docs/files/11428580/Programmierung.-.Cheatsheet.pdf)
- [Programmierung 1 - Alt- und Probeklausuren.zip](https://github.com/appenmaier/programming/files/10235160/Programmierung.1.-.Alt-.und.Probeklausuren.zip)
- [Programmierung 2 - Alt- und Probeklausuren.zip](https://github.com/jappuccini/java-docs/files/11428599/Programmierung.2.-.Alt-.und.Probeklausuren.zip)

## Arbeiten mit der Eingabeaufforderung

### Schritt 1: Quellcode-Datei erstellen

Eine Java-Quellcode-Datei kann mit Hilf eines einfachen Texteditors erstellt und bearbeitet werden. Java-Quellcode-Dateien müssen die Dateiendung `.java` besitzen.

```java
package demos;

public class MainClass {

  public static void main(String[] args) {
    System.out.println("Hello World");
  }

}
```

### Schritt 2: Eingabeaufforderung starten und in das Projekt-Verzeichnis wechseln

Um eine Java-Klasse zu kompilieren muss zunächst in der Eingabeaufforderung in das entsprechende Projekt-Verzeichnis gewechselt werden. Die Eingabeaufforderung gehört
zu den Windows-System-Anwendungen und kann über den Suchbegriff `CMD` gestartet werden.

```
C:\Users>cd..
C:\>cd "Users\Maier\Projects\Java\src"
C:\Users\Maier\Projects\Java\src>
```

:::note Hinweis

Mit dem Befehl `cd <Pfad\Verzeichnis>` kann zum angegebenen Verzeichnis gewechselt werden, mit dem Befehl `cd..` zum übergeordneten Verzeichnis und mit dem Befehl
`<Laufwerksbuchstabe>:` zum angegebenen Laufwerk.

:::

### Schritt 3: Quellcode-Datei in Bytecode-Datei überführen (kompilieren)

Das Überführen einer Quellcode-Datei in eine Bytecode-Datei erfolgt mit Hilfe des Java-Kompilers. Hierzu muss der komplette Pfad zur Klasse inklusive der
Dateiendung angegeben werden.

```
C:\Users\Maier\Projects\Java\src>javac demos/MainClass.java -d ../bin
```

:::note Hinweis

Der optionale Zusatz `-d` ermöglicht die Angabe des Verzeichnisses für die erstellten Bytecode-Dateien.

:::

### Schritt 4: Bytecode-Datei ausführen

Das Ausführen einer Bytecode-Datei erfolgt über die Java Virtual Machine. Auch beim Ausühren muss der komplette Klassenpfad angegeben werden, allerdings ohne eine
Dateiendung.

```
C:\Users\Maier\Projects\Java\src>cd..
C:\Users\Maier\Projects\Java>cd bin
C:\Users\Maier\Projects\Java\bin>java demos.MainClass
```

:::danger Hinweis

Um eine Bytecode-Datei ausführen zu können, benötigt die dazugehörige Java-Klasse die Methode `void main(String[])`.

:::

## Eclipse einrichten

### JDK herunterladen und installieren

- JDK herunterladen (_**https://jdk.java.net/ \[JDK Version\] – Builds – Windows/x64 – zip**_)
- Zip-Datei _**openjdk-\[JDK Version\]\_windows-x64_bin.zip**_ entpacken
- Unterordner _**jdk-\[JDK Version\]**_ der Zip-Datei in den Ordner _**C:\Progam Files\Java**_ kopieren (gegebenenfalls den Ordner _**Java**_ anlegen)

### Eclipse herunterladen und installieren

- Eclipse herunterladen (_**https://www.eclipse.org/downloads/ – Download 64 bit**_)
- Exe-Datei _**eclipse-inst-jre-win64.exe**_ ausführen
- Drucktaste _**Eclipse IDE for Java Developers**_ betätigen
- Drucktaste _**Select a Java VM**_ betätigen
- Drucktaste _**Browse…**_ betätigen
- Ordner _**C:\Program Files\Java\jdk-\[JDK Version\]**_ auswählen und Drucktaste _**Select Folder**_ betätigen
- Drucktaste _**OK**_ betätigen
- Drucktaste _**INSTALL**_ betätigen
- Drucktaste _**LAUNCH**_ betätigen
- Option _**Use this as the default and do not ask again**_ auswählen und Drucktaste _**Continue**_ betätigen

### Eclipse-Plugin PlantUML herunterladen und installieren

- Eclipse starten
- Zu _**Help – Install new Software…**_ navigieren
- Bei Feld _**Work with**_ den Wert _**http://hallvard.github.io/plantuml/**_ eingeben und _**ENTER**_ betätigen
- Drucktaste _**Select All**_ betätigen
- Drucktaste _**Next >**_ betätigen
- Option _**I accept the terms of the license agreement auswählen**_ und Drucktaste _**FINISH**_ betätigen
- Druckaste _**Finish**_ betätigen
- Drucktaste _**Select All**_ betätigen
- Drucktaste _**Trust selected**_ betätigen
- Drucktaste _**Restart now**_ betätigen

### Persönliches Java-Projekt erstellen und einrichten

- Eclipse starten
- Zu _**File – New – Java Project**_ navigieren
- Bei Feld _**Project name**_ den Wert _**\[Projektname\]**_ eingeben (z.B. _Java_)
- Option _**Use default JRE 'jdk-\[JDK Version\]' and workspace compiler preferences auswählen**_ und Drucktaste _**Finish**_ betätigen
- Drucktaste _**Apply and Close**_ betätigen
