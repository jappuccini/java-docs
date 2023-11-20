---
title: Lambda-Ausdrücke (Lambdas)
description: ''
sidebar_position: 265
tags: [inner-classes, lambdas]
---

Lambda-Ausdrücke sind anonyme Funktionen, die nur über ihre Referenz
angesprochen werden können.

## Implementierung von Lambda-Ausdrücken

Die Methodenparameter sowie der Methodenkörper werden bei einem Lambda-Ausdruck
getrennt vom Pfeiloperator `->` notiert.

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

:::note Hinweis

Voraussetzung für den Einsatz eines Lambda-Ausdrucks ist eine funktionale
Schnittstelle, also eine Schnittstelle, die über genau eine Methode verfügt.

:::

## Syntaxvarianten

- Bei keinem oder mehreren Methodenparametern müssen diese in runden Klammern
  angegeben werden, bei genau einem Methodenparameter können die runden Klammern
  weggelassen werden
- Besteht der Methodenkörper aus mehreren Anweisungen, müssen diese in
  geschweiften Klammern angegeben werden, bei genau einer Anweisung können die
  geschweiften Klammern weggelassen werden
- Besteht der Methodenkörper aus genau einer Anweisung, kann das Semikolon am
  Anweisungsende weggelassen werden, ist die Anweisung eine return-Anweisung,
  kann auch das `return` weggelassen werden

## Methodenreferenzen

Lambda-Ausdrücke, die nur aus dem Aufruf einer Methode bestehen, können als
Methodenreferenz dargestellt werden. Bei einer Methodenreferenz wird die Klasse
bzw. die Referenz auf der linken Seite mit Hilfe zweier Doppelpunkte vom
Methodennamen auf der recht Seite getrennt.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    List<Integer> numbers = new ArrayList<>();
    numbers.add(256);
    numbers.add(314);
    numbers.add(127);

    numbers.stream().map(n -> n.byteValue()).forEach(b -> System.out.println(b)); // Lambda-Ausdruck
    numbers.stream().map(Integer::byteValue).forEach(System.out::println); // Methodenreferenz
  }

}
```
