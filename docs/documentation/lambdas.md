---
title: Lambda-Ausdrücke (Lambdas)
description: ''
sidebar_position: 265
tags: [inner-classes, lambdas]
---

Lambda-Ausdrücke sind anonyme Funktionen, die einer Variablen zugewiesen oder
direkt als Parameter übergeben werden können.

## Funktionale Schnittstellen

Voraussetzung für einen Lambda-Ausdruck ist eine _funktionale Schnittstelle_ —
eine Schnittstelle mit genau einer abstrakten Methode. Die Annotation
`@FunctionalInterface` kennzeichnet eine Schnittstelle als funktional und lässt
den Compiler prüfen, dass sie tatsächlich nur eine abstrakte Methode enthält.

Das Paket `java.util.function` enthält häufig benötigte funktionale
Schnittstellen:

| Schnittstelle      | Abstrakte Methode           | Beschreibung                           |
| ------------------ | --------------------------- | -------------------------------------- |
| `Predicate<T>`     | `boolean test(t: T)`        | Prüft eine Bedingung                   |
| `Function<T, R>`   | `R apply(t: T)`             | Bildet einen Wert auf einen anderen ab |
| `Consumer<T>`      | `void accept(t: T)`         | Verarbeitet einen Wert ohne Rückgabe   |
| `Supplier<T>`      | `T get()`                   | Liefert einen Wert ohne Eingabe        |
| `UnaryOperator<T>` | `T apply(t: T)`             | Bildet einen Wert auf denselben Typ ab |
| `Comparator<T>`    | `int compare(o1: T, o2: T)` | Vergleicht zwei Werte                  |

Diese Schnittstellen werden unter anderem von der
[Java Stream API](java-stream-api) verwendet.

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
