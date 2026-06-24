---
title: Mathematische Berechnungen
description: ''
sidebar_position: 70
tags: [java-api, math]
---

Die Klasse `Math` aus dem Paket `java.lang` stellt neben den Konstanten
`Math.PI` (Kreiszahl π) und `Math.E` (Eulersche Zahl) zahlreiche Methoden für
mathematische Berechnungen bereit. Da alle Methoden statisch sind, müssen sie
nicht instanziiert werden.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      int a = 5;
      int b = 3;
      double result;

      result = Math.pow(a, b);   // a hoch b = 125.0
      System.out.println(result);

      result = Math.sqrt(a);     // Quadratwurzel aus a = 2.236...
      System.out.println(result);
   }

}
```

Die folgende Tabelle zeigt häufig verwendete Methoden der Klasse `Math`.

| Methode                          | Rückgabetyp | Beschreibung                               |
| -------------------------------- | ----------- | ------------------------------------------ |
| `abs(a: int)`                    | `int`       | Gibt den Absolutbetrag zurück              |
| `max(a: int, b: int)`            | `int`       | Gibt den größeren der beiden Werte zurück  |
| `min(a: int, b: int)`            | `int`       | Gibt den kleineren der beiden Werte zurück |
| `pow(base: double, exp: double)` | `double`    | Berechnet base hoch exp                    |
| `sqrt(a: double)`                | `double`    | Berechnet die Quadratwurzel                |
| `round(a: double)`               | `long`      | Rundet auf die nächste ganze Zahl          |
| `floor(a: double)`               | `double`    | Rundet ab (in Richtung −∞)                 |
| `ceil(a: double)`                | `double`    | Rundet auf (in Richtung +∞)                |
| `log(a: double)`                 | `double`    | Berechnet den natürlichen Logarithmus      |
| `log10(a: double)`               | `double`    | Berechnet den dekadischen Logarithmus      |
| `sin(a: double)`                 | `double`    | Berechnet den Sinus (Winkel in Bogenmaß)   |
| `cos(a: double)`                 | `double`    | Berechnet den Kosinus (Winkel in Bogenmaß) |
| `tan(a: double)`                 | `double`    | Berechnet den Tangens (Winkel in Bogenmaß) |
