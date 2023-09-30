---
title: Kommandozeile verwenden
description: ''
sidebar_position: 10
---

Zur Entwicklung von Java-Programmen wird neben dem _Java Development Kit_ (JDK) nur ein einfacher Texteditor benötigt. Das Kompilieren und Ausführen der Java-Klassen erfolgt dann über die Kommandozeile. In Windows wird die Kommandozeile als Eingabeaufforderung bezeichnet und kann über den Suchbegriff `CMD` gestartet werden.

Um ein einfaches Hello-World-Programm in Java zu entwickeln, muss zunächst eine Java-Quellcode-Datei mit Hilfe eines Texteditors erstellt werden. Die Java-Quellcode-Datei muss dabei denselben Namen wie die Klasse besitzen und auf `java` enden.

```java title="MainClass.java" showLineNumbers
package demos;

public class MainClass {

  public static void main(String[] args) {
    System.out.println("Hello World");
  }

}
```

Damit die erstellte Java-Quellcode-Datei kompiliert werden kann, muss zunächst in der Kommandozeile in das entsprechende Projekt-Verzeichnis gewechselt werden. 

```console
C:\Users>cd..
C:\>cd "Users\Maier\Projects\Java\src"
C:\Users\Maier\Projects\Java\src>
```

:::note Hinweis

Mit dem Befehl `cd <Pfad\Verzeichnis>` kann zum angegebenen Verzeichnis gewechselt werden, mit dem Befehl `cd..` zum übergeordneten Verzeichnis und mit dem Befehl
`<Laufwerksbuchstabe>:` zum angegebenen Laufwerk.

:::

Das Überführen der Java-Quellcode-Datei in eine Java-Bytecode-Datei erfolgt mit Hilfe des Java-Kompilers. Hierzu muss der komplette Pfad zur Klasse inklusive der
Dateiendung `java` angegeben werden.

```console
C:\Users\Maier\Projects\Java\src>javac demos/MainClass.java -d ../bin
```

:::note Hinweis

Der optionale Zusatz `-d` ermöglicht die Angabe des Verzeichnisses für die erstellten Bytecode-Dateien.

:::

Das Ausführen der erstellten Java-Bytecode-Datei erfolgt über die Java Virtual Machine. Auch beim Ausühren muss der komplette Klassenpfad angegeben werden, allerdings ohne eine Dateiendung.

```console
C:\Users\Maier\Projects\Java\src>cd..
C:\Users\Maier\Projects\Java>cd bin
C:\Users\Maier\Projects\Java\bin>java demos.MainClass
```

:::danger Hinweis

Um eine Bytecode-Datei ausführen zu können, benötigt die dazugehörige Java-Klasse die Methode `void main(String[])`.

:::
