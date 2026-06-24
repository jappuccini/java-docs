---
title: Zeichenketten (Strings)
description: ''
sidebar_position: 50
tags: [java-api, strings]
---

Zeichenketten (Strings) sind Folgen beliebiger Zeichen und werden in Java durch
die Klasse `String` realisiert. Sie ist keine primitive, sondern eine
strukturierte Datentyp-Klasse und stellt zahlreiche Methoden zur Analyse und
Verarbeitung von Zeichenketten bereit. Zeichenketten werden in Anführungszeichen
geschrieben.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      String text = "Winter";
      String text2 = "Coming";

      // Zeichenketten verbinden
      String text3 = text + " is " + text2;

      int length = text3.length();          // Länge der Zeichenkette
      char charAt1 = text3.charAt(0);       // Zeichen an Position 0
      String upperCase = text3.toUpperCase(); // In Großbuchstaben umwandeln
   }

}
```

Die folgende Tabelle zeigt häufig verwendete Methoden der Klasse `String`.

| Methode                             | Rückgabetyp | Beschreibung                                                |
| ----------------------------------- | ----------- | ----------------------------------------------------------- |
| `length()`                          | `int`       | Gibt die Anzahl der Zeichen zurück                          |
| `charAt(index: int)`                | `char`      | Gibt das Zeichen an der angegebenen Position zurück         |
| `indexOf(str: String)`              | `int`       | Gibt die erste Fundstelle der Teilzeichenkette zurück       |
| `substring(begin: int)`             | `String`    | Gibt den Teilstring ab der angegebenen Position zurück      |
| `substring(begin: int, end: int)`   | `String`    | Gibt den Teilstring zwischen begin und end zurück           |
| `toUpperCase()`                     | `String`    | Wandelt alle Zeichen in Großbuchstaben um                   |
| `toLowerCase()`                     | `String`    | Wandelt alle Zeichen in Kleinbuchstaben um                  |
| `trim()`                            | `String`    | Entfernt führende und abschließende Leerzeichen             |
| `replace(old: String, new: String)` | `String`    | Ersetzt alle Vorkommen eines Teilstrings durch einen neuen  |
| `contains(str: String)`             | `boolean`   | Prüft, ob die Zeichenkette einen Teilstring enthält         |
| `startsWith(prefix: String)`        | `boolean`   | Prüft, ob die Zeichenkette mit dem Präfix beginnt           |
| `endsWith(suffix: String)`          | `boolean`   | Prüft, ob die Zeichenkette mit dem Suffix endet             |
| `equals(other: Object)`             | `boolean`   | Prüft auf inhaltliche Gleichheit                            |
| `equalsIgnoreCase(other: String)`   | `boolean`   | Prüft auf inhaltliche Gleichheit ohne Groß-/Kleinschreibung |
| `split(regex: String)`              | `String[]`  | Teilt die Zeichenkette anhand eines Trennzeichens auf       |

## Escape-Sequenzen

Steuer- und Sonderzeichen in Zeichenketten können mit Hilfe einer Escape-Sequenz
eingefügt werden.

| Escape-Sequenz        | Beschreibung      |
| --------------------- | ----------------- |
| `\n`                  | Zeilenumbruch     |
| `\t`                  | Tabulatorzeichen  |
| `\\`                  | Backslash         |
| `\"`                  | Anführungszeichen |
| `\'`                  | Hochkomma         |
| `\u0000` bis `\uFFFF` | Unicode-Zeichen   |

## Textblöcke

Seit Java 15 ermöglichen Textblöcke mehrzeilige Zeichenketten ohne umständliche
Escape-Sequenzen. Der Inhalt wird durch drei Anführungszeichen (`"""`)
eingeschlossen.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      String text = """
            <html>
              <body>
                <p>Winter is Coming</p>
              </body>
            </html>""";
      System.out.println(text);
   }

}
```
