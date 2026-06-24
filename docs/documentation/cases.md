---
title: Verzweigungen und Fallunterscheidungen
description: ''
sidebar_position: 95
tags: [control-structures, cases]
---

Mit Hilfe von Verzweigungen (auch _bedingte Anweisungen_ genannt) und
Fallunterscheidungen können unterschiedliche Anweisungsblöcke abhängig von
Bedingungen ausgeführt werden. Verzweigungen und Fallunterscheidungen sind —
genau wie Schleifen — wesentliche Bestandteile der Programmierung und werden
zusammenfassend als _Kontrollstrukturen_ bezeichnet.

## Einfache Verzweigungen

Die if-Verzweigung wählt abhängig von einer Bedingung zwischen zwei
Anweisungsblöcken: Ist die Bedingung wahr, wird der Anweisungsblock direkt nach
der Bedingung ausgeführt, andernfalls der Anweisungsblock nach `else`.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      int a = 3, b = 4, c;

      if (a > b) {
         c = a - b;
      } else {
         c = b - a;
      }

      System.out.println(c);
   }

}
```

:::info

Der else-Zweig ist optional, kann also weggelassen werden.

:::

## Mehrfachverzweigungen

Mehrfachverzweigungen werden mit einer if-else-if-Leiter abgebildet, die mehrere
if-Anweisungen zu einer kaskadierten Verzweigung zusammenfasst.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      int amount = 6;

      if (amount >= 10) {
         System.out.println("viel");
      } else if (amount == 0) {
         System.out.println("nichts");
      } else if (amount > 0 && amount <= 5) {
         System.out.println("wenig");
      } else if (amount < 0) {
         System.out.println("nicht definiert");
      } else {
         System.out.println("irgendwas zwischen wenig und viel");
      }
   }

}
```

## Bedingte Zuweisungen

Wird eine if-Verzweigung ausschließlich für eine Wertzuweisung verwendet,
spricht man von einer bedingten Zuweisung. Neben der ausführlichen Schreibweise
gibt es dafür auch eine kompakte Kurzschreibweise mit dem Ternäroperator `?:`.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      int x = 1;
      int y = 2;
      int z;

      // ausführliche Schreibweise
      if (x > y) {
         z = 3;
      } else {
         z = 4;
      }
      System.out.println(z);

      // Kurzschreibweise mit dem Ternäroperator
      z = (x > y) ? 3 : 4;
      System.out.println(z);
   }

}
```

:::info

Die Kurzschreibweise sollte verantwortungsvoll verwendet werden, da die
Lesbarkeit dadurch eventuell erschwert wird.

:::

## Fallunterscheidungen

Fallunterscheidungen können entweder mit einer if-else-if-Leiter oder mit der
switch-case-Anweisung umgesetzt werden. Tritt ein Fall ein, werden alle
Anweisungen bis zum nächsten `break` ausgeführt. Durch das Weglassen von `break`
können mehrere Fälle gleich behandelt werden. Der `default`-Block wird
ausgeführt, wenn keiner der aufgeführten Fälle zutrifft.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      String color = "r";
      switch (color) {
         case "r":
         case "R":
            System.out.println("rot");
            break;
         case "g":
         case "G":
            System.out.println("grün");
            break;
         case "b":
         case "B":
            System.out.println("blau");
            break;
         default:
            break;
      }
   }

}
```

Seit Java 14 vereinfachen Switch-Ausdrücke die Syntax und beheben einige
Schwächen der klassischen switch-case-Anweisung.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      String color = "r";

      String colorText = switch (color) {
         case "r", "R" -> "rot";
         case "g", "G" -> "grün";
         case "b", "B" -> "blau";
         default       -> "";
      };

      System.out.println(colorText);
   }

}
```
