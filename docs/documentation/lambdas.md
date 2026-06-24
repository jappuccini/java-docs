---
title: Lambda-Ausdrücke (Lambdas)
description: ''
sidebar_position: 265
tags: [inner-classes, lambdas]
---

Lambda-Ausdrücke sind anonyme Funktionen, die einer Variablen zugewiesen oder
direkt als Parameter übergeben werden können.

## Implementierung von Lambda-Ausdrücken

Die Parameterliste und der Methodenkörper eines Lambda-Ausdrucks werden durch
den Pfeiloperator `->` getrennt.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      List<String> names = new ArrayList<>();
      names.add("Hans");
      names.add("Peter");
      names.add("Lisa");

      Collections.sort(names, (n1, n2) -> n2.compareTo(n1));
      names.forEach(n -> System.out.println(n));
   }

}
```

:::info

Voraussetzung für Lambda-Ausdrücke ist eine _funktionale Schnittstelle_ — eine
Schnittstelle mit genau einer abstrakten Methode.

:::

## Syntaxvarianten

Die Syntax von Lambda-Ausdrücken erlaubt verschiedene Kurzformen:

- Enthält die Parameterliste genau einen Parameter, können die runden Klammern
  weggelassen werden; bei keinem oder mehreren Parametern sind sie verpflichtend
- Besteht der Methodenkörper aus genau einer Anweisung, können die geschweiften
  Klammern und das abschließende Semikolon weggelassen werden
- Besteht diese eine Anweisung aus einer `return`-Anweisung, kann auch das
  Schlüsselwort `return` weggelassen werden

## Methodenreferenzen

Besteht ein Lambda-Ausdruck ausschließlich aus dem Aufruf einer Methode, kann er
als _Methodenreferenz_ geschrieben werden. Die Klasse oder Referenz auf der
linken Seite wird dabei durch `::` vom Methodennamen auf der rechten Seite
getrennt.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      List<Integer> numbers = new ArrayList<>();
      numbers.add(256);
      numbers.add(314);
      numbers.add(127);

      numbers.stream().map(n -> n.byteValue()).forEach(b -> System.out.println(b));
      numbers.stream().map(Integer::byteValue).forEach(System.out::println);
   }

}
```
