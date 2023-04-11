---
title: Arbeiten mit der Eingabeaufforderung
description: ''
sidebar_position: 10
--- 

## Schritt 1: Quellcode-Datei erstellen
Eine Java-Quellcode-Datei kann mit Hilf eines einfachen Texteditors erstellt und bearbeitet werden. Java-Quellcode-Dateien müssen die Dateiendung `.java` besitzen.

```java
package demos;

public class MainClass {

  public static void main(String[] args) {
    System.out.println("Hello World");
  }

}
```

## Schritt 2: Eingabeaufforderung starten und in das Projekt-Verzeichnis wechseln
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

## Schritt 3: Quellcode-Datei in Bytecode-Datei überführen (kompilieren)
Das Überführen einer Quellcode-Datei in eine Bytecode-Datei erfolgt mit Hilfe des Java-Kompilers. Hierzu muss der komplette Pfad zur Klasse inklusive der 
Dateiendung angegeben werden.

```
C:\Users\Maier\Projects\Java\src>javac demos/MainClass.java -d ../bin
```

:::note Hinweis
Der optionale Zusatz `-d` ermöglicht die Angabe des Verzeichnisses für die erstellten Bytecode-Dateien.
:::

## Schritt 4: Bytecode-Datei ausführen
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
