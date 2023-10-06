---
title: Optionals
description: ''
sidebar_position: 290
tags: []
---

Der Umgang mit null-Werten stellt in vielen Programmiersprachen eine große
Herausforderung dar. Zur Vermeidung von Laufzeitfehlern (`NullPointerException`)
müsste vor jedem Methodenaufruf eigentlich überprüft werden, ob ein gültiger
Wert vorliegt oder nicht.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    String text = foo();
    System.out.println(text.length()); // Laufzeitfehler
  }

  public static String foo() {
    return null;
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

  public static void main(String[] args) {
    Optional<String> optionalText = foo();
    optionalText.ifPresent(t -> System.out.println(t.length()));
  }

  public static Optional<String> foo() {
    return Optional.ofNullable(null);
  }

}
```
