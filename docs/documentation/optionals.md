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
