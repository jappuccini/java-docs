---
title: Optionals
description: ''
sidebar_position: 290
tags: [optionals]
---

Der Umgang mit null-Werten stellt in vielen Programmiersprachen eine große
Herausforderung dar. Zur Vermeidung von Laufzeitfehlern (`NullPointerException`)
müsste vor jedem Methodenaufruf eigentlich überprüft werden, ob ein gültiger
Wert vorliegt oder nicht.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   private static List<String> names;

   public static void main(String[] args) {
      names = new ArrayList<>();
      String name = getNameByInitial('H');
      System.out.println(name.length()); // Laufzeitfehler
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

Die Klasse `Optional` ermöglicht in Java eine komfortable Möglichkeit, mit
null-Werten umzugehen. Das eigentliche Objekt wird dabei in einem Objekt der
Klasse `Optional` verpackt; der Zugriff auf das verpackte Objekt erfolgt über
entsprechende Methoden. Dies stellt sicher, dass sich der Entwickler mit
null-Werten auseinander setzen muss.

Für den Umgang mit null-Werten stellt die Klasse `Optional` Methoden wie
`T get()`, `boolean isPresent()` und `void ifPresent(consumer: Consumer<T>)` zur
Verfügung. Zudem existieren Methoden wie `void orElse(other: T)`, mit denen
Standardwerte festgelegt werden können.

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
