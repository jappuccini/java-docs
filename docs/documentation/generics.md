---
title: Generische Programmierung
description: ''
sidebar_position: 270
tags: [generics]
---

Quellcode sollte generell so allgemein bzw. generisch geschrieben werden, dass er für unterschiedliche Datenstrukturen und Datentypen verwendet werden kann. Das Ziel der generischen Programmierung ist die Entwicklung von wiederverwendbarem Code. In Java
verwendet man das Konzept der generischen Datentypen, also Klassen, die mit verschiedene Datentypen verwendet werden können.

## Generische Klassen ohne Java Generics

Auch ohne Java Generics kann in Java mit Hilfe der Klasse `Object` generisch programmiert werden. Der Nachteil besteht darin, dass durch den Upcast einer beliebigen Klasse auf die Klasse `Object` die spezifischen Methoden der Klasse nicht mehr verwendet werden
können und der dadurch notwendige Downcast zu Laufzeitfehlern führen kann.

Die Klasse `Box` ermöglicht das Speichern einer beliebig typisierten Information.

```java title="Box.java" showLineNumbers
public class Box {

  private Object content;

  public void set(Object content) {
    this.content = content;
  }

  public Object get() {
    return content;
  }

}
```

In der main-Methode der Startklasse wird zunächst eine ganze Zahl in einer Box gespeichert und anschließend wieder ausgelesen. Die Umwandlung der ganzen Zahl in eine Zeichenkette führt erst zur Laufzeit zu einem Fehler.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    Box box = new Box();
    box.set(5);
    String i = (String) box.get(); // Laufzeitfehler
    System.out.println(i);
  }

}
```

## Generische Klassen mit Java Generics

Klassen und Methoden können in Java mit Typen parametrisiert werden. Diese werden durch spitze Klammern `<>` gekennzeichnet und stellen Platzhalter für konkrete Datentypen dar. Beim Kompilieren werden alle generischen Informationen vollständig entfernt und durch die konkreten Datentypen ersetzt. Durch die dadurch vorhandene statische Typsicherheit können Laufzeitfehler verhindert und Fehler bereits beim Kompilieren entdeckt werden.

Die generische Klasse `Box<T>` ermöglicht das Speichern einer beliebig typisierten Information mit Hilfe des Typparameters `T`.

```java title="Box.java" showLineNumbers
public class Box<T> {

  private T content;

  public void set(T content) {
    this.content = content;
  }

  public T get() {
    return content;
  }

}
```

In der main-Methode der Startklasse wird zunächst eine ganze Zahl in einer Box gespeichert und anschließend wieder ausgelesen. Die Umwandlung der ganzen Zahl in eine Zeichenkette führt aufgrund der statischen Typsicherheit zu einem Kompilierungsfehler.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    Box<Integer> box = new Box<>();
    box.set(5);
    String i = box.get(); // Kompilierungsfehler
    System.out.println(i);
  }

}
```

:::note Hinweis

Die Typisierung kann entweder explizit oder implizit über den Diamantenoperator `<>` erfolgen.

:::

:::note Hinweis

Typparameter können auf die Unterklassen einer bestimmten Klasse eingeschränkt werden. Dadurch kann in der generischen Klasse auf Attribute und Methoden der angegebenen Klasse zugegriffen werden. Die Angabe eines eingeschränkten Typparameters erfolgt über den Zusatz `extends` sowie die Angabe der entsprechenden Klasse.

:::

## Generische Methoden mit Java Generics

Die generische Methode `<T> int getIndex(value: T, values: T[])` gibt den Index eines beliebig typisierten gesuchten Wertes innerhalb eines gleichtypisierten Feldes zurück.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    System.out.println(getIndex(5, new Integer[] {3, 5, 2, 4, 1}));
  }

  public static <T> int getIndex(T value, T[] values) {
    for (int i = 0; i < values.length; i++) {
      if (values[i].equals(value)) {
        return i;
      }
    }
    return -1;
  }

}
```

## Namensrichtlinien für Typparameter

Um den Einsatzbereich von Typparametern in generischen Klassen und Methoden kenntlich zu machen, sollte man festgelegte Zeichen verwenden.

| Typparameter  | Einsatzbereich                            |
| ------------- | ----------------------------------------- |
| T, U, V, W... | Datentyp (Type)                           |
| E             | Element einer Datensammlung (Element)     |
| K             | Schlüssel eines Assoziativspeichers (Key) |
| V             | Wert eines Assoziativspeichers (Value)    |

## Varianz

Bei der Deklaration einer generischen Klasse ermöglicht der Wildcard-Typ `?` die Angabe eines unbestimmten Typs. Dieser kann gar nicht (**Bivarianz**), nach oben (**Kovarianz**), nach unten (**Kontravarianz**), oder sowohl nach oben als auch nach unten (**Invarianz**) eingeschränkt werden.

Die generische Klasse `Box<T>` ermöglicht das Speichern einer beliebig typisierten Information.

```java title="Box.java" showLineNumbers
public class Box<T> {

  private T content;

  public void set(T content) {
    this.content = content;
  }

  public T get() {
    return content;
  }

}
```

In der main-methode der Startklasse werden verschiedene Boxen unterschiedlich deklariert und anschließend initialisiert. Dabei ist die Klasse `String` eine Unterklasse der Klasse `Object`, die Klasse `Integer` eine Unterklasse der Klasse `Number` und diese eine Unterklasse der Klasse `Object`.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    Box<?> bivariantBox;
    bivariantBox = new GenericBox<Object>();
    bivariantBox = new GenericBox<Number>();
    bivariantBox = new GenericBox<Integer>();
    bivariantBox = new GenericBox<String>();

    Box<? extends Number> covariantBox;
    covariantBox = new GenericBox<Object>(); // Kompilierungsfehler
    covariantBox = new GenericBox<Number>();
    covariantBox = new GenericBox<Integer>();
    covariantBox = new GenericBox<Integer>(); // Kompilierungsfehler

    Box<? super Number> contravariantBox;
    contravariantBox = new GenericBox<Object>();
    contravariantBox = new GenericBox<Number>();
    contravariantBox = new GenericBox<Integer>(); // Kompilierungsfehler
    covariantBox = new GenericBox<Integer>(); // Kompilierungsfehler

    Box<Number> invariantBox;
    invariantBox = new GenericBox<Object>(); // Kompilierungsfehler
    invariantBox = new GenericBox<Number>();
    invariantBox = new GenericBox<Integer>(); // Kompilierungsfehler
    covariantBox = new GenericBox<String>(); // Kompilierungsfehler
  }

}
```
