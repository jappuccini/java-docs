---
title: Arbeiten mit dem JDK
description: ''
sidebar_position: 10
tags: [jdk]
---

:::info Benötigte Tools

[JDK](https://www.oracle.com/java/technologies/downloads/)

:::

## Quellcode-Datei erstellen

- Erstelle ein Arbeitsverzeichnis (z.B. _C:\Users\Daniel Appenmaier\Java_)
- Erstelle im eben erstellten Arbeitsverzeichnis einen Ordner (z.B. _main_)
- Erstelle im eben erstellten Ordner eine Datei mit der Endung _.java_ (z.B.
  _HelloWorld.java_)
- Öffne die eben erstellte Datei, füge validen Java-Quellcode ein, speichere die
  Änderungen und schließe die Datei wieder (siehe Quellcode)

```java title="HelloWorld.java" showLineNumbers
package main;

public class HelloWorld {

   public static void main(String[] args) {
      System.out.println("Hello World");
   }

}
```

## Quellcode-Datei kompilieren

- Starte die Kommandozeile (z.B. Windows PowerShell)
- Führe den Befehl `cd "[Der Pfad zu Deinem Arbeitsverzeichnis]"` aus, um zum
  Arbeitsbereich zu wechseln (z.B. `cd "C:\Users\Daniel Appenmaier\Java"`)
- Führe den Befehl `javac [Der Name der zu kompilierenden Quellcode-Datei].java`
  aus, um die Quellcode-Datei zu kompilieren (z.B. `javac main/HelloWorld.java`)

## Bytecode-Datei ausführen

- Starte die Kommandozeile (z.B. Windows PowerShell)
- Führe den Befehl `cd "[Der Pfad zu Deinem Arbeitsverzeichnis]"` aus, um zum
  Arbeitsbereich zu wechseln (z.B. `cd "C:\Users\Daniel Appenmaier\Java"`)
- Führe den Befehl `java [Der Name der auszuführenden Bytecode-Datei]` aus, um
  die Bytecode-Datei auszuführen (z.B. `java main.HelloWorld`)
