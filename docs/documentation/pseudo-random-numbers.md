---
title: Pseudozufallszahlen
description: ''
sidebar_position: 80
tags: [java-api, random]
---

Die Klasse `Random` aus dem Paket `java.util` ermöglicht das Erzeugen von
Pseudozufallszahlen. Als _pseudozufällig_ bezeichnet man Zahlen, die zwar
zufällig wirken, aber durch einen deterministischen Algorithmus auf Basis eines
Startwerts (Seed) berechnet werden. Wird kein Seed angegeben, verwendet Java die
aktuelle Systemzeit.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      Random random = new Random();
      int randomNumber;

      // 100 Zufallszahlen von 1 bis 100 ausgeben
      for (int i = 0; i < 100; i++) {
         randomNumber = random.nextInt(100) + 1;
         System.out.println(randomNumber);
      }
   }

}
```

Die folgende Tabelle zeigt häufig verwendete Methoden der Klasse `Random`.

| Methode               | Rückgabetyp | Beschreibung                                                    |
| --------------------- | ----------- | --------------------------------------------------------------- |
| `nextInt()`           | `int`       | Gibt eine zufällige `int`-Zahl zurück                           |
| `nextInt(bound: int)` | `int`       | Gibt eine zufällige `int`-Zahl im Bereich 0 bis bound−1 zurück  |
| `nextDouble()`        | `double`    | Gibt eine zufällige `double`-Zahl im Bereich 0.0 bis 1.0 zurück |
| `nextBoolean()`       | `boolean`   | Gibt zufällig `true` oder `false` zurück                        |

:::info

Mit `random.nextInt(n) + 1` lassen sich gleichverteilte Zufallszahlen im Bereich
1 bis n erzeugen.

:::
