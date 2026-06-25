---
title: Optionals
description: ''
sidebar_position: 290
tags: [optionals]
---

Der Umgang mit `null`-Werten ist in vielen Programmen eine häufige Fehlerquelle.
Ohne explizite Prüfungen kann der Zugriff auf ein `null`-Objekt eine
`NullPointerException` auslösen.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   private static List<String> names;

   public static void main(String[] args) {
      names = new ArrayList<>();
      String name = getNameByInitial('H');
      System.out.println(name.length()); // Laufzeitfehler: name ist null
   }

   public static String getNameByInitial(char initial) {
      String name = null;
      for (String n : names) {
         if (n.charAt(0) == initial) {
            name = n;
            break;
         }
      }
      return name;
   }

}
```

Die Klasse `Optional` bietet eine komfortable Möglichkeit, mit `null`-Werten
umzugehen. Das eigentliche Objekt wird in einem `Optional`-Objekt verpackt; der
Zugriff erfolgt über entsprechende Methoden. So wird sichergestellt, dass der
`null`-Fall explizit behandelt werden muss.

Die Klasse `Optional` stellt u.a. folgende Methoden bereit: `T get()`,
`boolean isPresent()`, `void ifPresent(consumer: Consumer<T>)` und
`T orElse(other: T)` zum Festlegen eines Standardwerts.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   private static List<String> names;

   public static void main(String[] args) {
      names = new ArrayList<>();
      Optional<String> name = getNameByInitial('H');
      name.ifPresent(n -> System.out.println(n.length()));
   }

   public static Optional<String> getNameByInitial(char initial) {
      String name = null;
      for (String n : names) {
         if (n.charAt(0) == initial) {
            name = n;
            break;
         }
      }
      return Optional.ofNullable(name);
   }

}
```

## Transformieren mit map() und flatMap()

Neben dem direkten Zugriff erlaubt `Optional` das Transformieren des enthaltenen
Werts, ohne den `null`-Fall explizit behandeln zu müssen. Die Methode
`Optional<U> map(mapper: Function<T, U>)` wendet eine Funktion auf den Wert an
und verpackt das Ergebnis wieder in ein `Optional`. Ist der Ausgangswert nicht
vorhanden, liefert `map()` ein leeres `Optional` zurück.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   private static List<String> names;

   public static void main(String[] args) {
      names = List.of("Hans", "Anna", "Klaus");

      // Liefert die Länge des Namens oder nichts, falls kein Name gefunden
      Optional<Integer> nameLength = getNameByInitial('A')
            .map(String::length);
      nameLength.ifPresent(System.out::println); // 4

      // Liefert den Namen in Großbuchstaben oder einen Standardwert
      String upper = getNameByInitial('Z')
            .map(String::toUpperCase)
            .orElse("unbekannt");
      System.out.println(upper); // unbekannt
   }

   public static Optional<String> getNameByInitial(char initial) {
      return names.stream()
            .filter(n -> n.charAt(0) == initial)
            .findFirst();
   }

}
```

Die Methode `Optional<U> flatMap(mapper: Function<T, Optional<U>>)` wird
eingesetzt, wenn die Transformationsfunktion selbst ein `Optional` zurückgibt.
Sie verhindert dabei das Entstehen verschachtelter
`Optional<Optional<T>>`-Werte.

```java title="MainClass.java (Auszug)" showLineNumbers
// map() würde Optional<Optional<String>> liefern – flatMap() vermeidet das
Optional<String> result = Optional.of("  hallo  ")
      .flatMap(s -> s.isBlank() ? Optional.empty() : Optional.of(s.trim()));
System.out.println(result); // Optional[hallo]
```

## Filtern mit filter()

Mit `Optional<T> filter(predicate: Predicate<T>)` lässt sich der enthaltene Wert
anhand einer Bedingung prüfen. Erfüllt der Wert das Prädikat, bleibt das
`Optional` unverändert; anderenfalls wird ein leeres `Optional` zurückgegeben.

```java title="MainClass.java (Auszug)" showLineNumbers
Optional<String> longName = getNameByInitial('H')
      .filter(n -> n.length() > 3);
longName.ifPresent(System.out::println); // Hans (Länge 4 > 3)

Optional<String> shortName = getNameByInitial('H')
      .filter(n -> n.length() > 10);
System.out.println(shortName.isPresent()); // false
```

## Fehlerbehandlung mit orElseThrow()

Soll das Fehlen eines Werts als Fehlerfall gewertet werden, bietet
`T orElseThrow(exceptionSupplier: Supplier<X>)` eine präzise Alternative zu
`orElse()`. Ist kein Wert vorhanden, wird die angegebene Ausnahme ausgelöst.

```java title="MainClass.java (Auszug)" showLineNumbers
// Wirft eine IllegalArgumentException, wenn kein Name mit 'X' existiert
String name = getNameByInitial('X')
      .orElseThrow(() -> new IllegalArgumentException("Kein Name gefunden"));
```

:::warning

`Optional.get()` sollte nur aufgerufen werden, wenn vorher `isPresent()` geprüft
wurde. Ohne diese Prüfung kann `get()` eine `NoSuchElementException` auslösen —
genau wie der ursprüngliche `null`-Zugriff. Bevorzuge stattdessen `orElse()`,
`orElseThrow()` oder `ifPresent()`.

:::
