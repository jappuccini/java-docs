---
title: Felder (Arrays)
description: ''
sidebar_position: 110
tags: [arrays]
---

Wenn eine größere Menge gleichartiger Daten verarbeitet werden soll, bieten sich
_Felder_ (Arrays) an. Ein Feld ist eine Datenstruktur, die eine feste Anzahl von
Elementen desselben Typs zusammenfasst. Die einzelnen Elemente werden über einen
nullbasierten Index angesprochen.

| 0    | 1     | 2    | 3   | 4     |
| ---- | ----- | ---- | --- | ----- |
| Hans | Peter | Lisa | Max | Heidi |

## Erzeugen von Feldern

Da Felder Objekte sind, müssen sie vor der Verwendung mit dem `new`-Operator
erzeugt werden. Bei der Erzeugung muss die Länge des Feldes (Anzahl der
Elemente) angegeben werden. Jedes Feld besitzt das Attribut `length`, das die
Länge enthält.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      int[] ids = new int[5];
      System.out.println(Arrays.toString(ids));
      int[] ids2 = {4, 8, 15, 16, 23, 42};
      System.out.println(Arrays.toString(ids2));
   }

}
```

:::info

Felder werden zwar mit dem `new`-Operator erzeugt, besitzen aber keinen
Konstruktor.

:::

## Zugriff auf Feldelemente

Der Zugriff auf ein Element erfolgt über den zugehörigen Index in eckigen
Klammern. Der Index beginnt in Java bei 0.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      int[] ids = {4, 8, 15, 16, 23, 42};

      // alle Elemente über den Index ausgeben
      for (int i = 0; i < ids.length; i++) {
         System.out.println(ids[i]);
      }
   }

}
```

## Der Parameter _String[] args_

Der Parameter `String[] args` der main-Methode ermöglicht es, der Anwendung beim
Aufruf über die [Kommandozeile](java) Argumente zu übergeben.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      for (int i = 0; i < args.length; i++) {
         System.out.println("args[" + i + "]: " + args[i]);
      }
   }

}
```

## Variable Argumentlisten (VarArgs)

Variable Argumentlisten (VarArgs) ermöglichen die Definition von Methoden, denen
eine beliebige Anzahl von Werten desselben Datentyps übergeben werden kann. Eine
Parameterliste darf nur eine VarArgs-Liste enthalten, und diese muss stets am
Ende der Parameterliste stehen.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      printAll("Peter", "Lisa");
      printAll("Heidi", "Franz", "Fritz");
   }

   public static void printAll(String... texts) {
      for (int i = 0; i < texts.length; i++) {
         System.out.println(texts[i]);
      }
   }

}
```

:::info

Technisch gesehen handelt es sich bei einer variablen Argumentliste um ein Feld.

:::

## Mehrdimensionale Felder

Mehrdimensionale Felder sind Felder, deren Elemente selbst wieder Felder sind.
Der häufigste Anwendungsfall ist das zweidimensionale Feld, das sich als Matrix
mit Zeilen und Spalten vorstellen lässt. Der Zugriff auf ein Element erfolgt
über zwei Indizes: zuerst die Zeile, dann die Spalte.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      int[][] matrix = {
         {1, 2, 3},
         {4, 5, 6},
         {7, 8, 9}
      };

      // alle Elemente zeilenweise ausgeben
      for (int row = 0; row < matrix.length; row++) {
         for (int col = 0; col < matrix[row].length; col++) {
            System.out.print(matrix[row][col] + " ");
         }
         System.out.println();
      }
   }

}
```
