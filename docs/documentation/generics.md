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
Klassen und Methoden können in Java mit Typen parametrisiert werden. Diese werden durch spitze Klammern `<>` gekennzeichnet und stellen Platzhalter für konkrete Datentypen dar. Beim Kompilieren werden alle generischen Informationen vollständig entfernt und 
durch die konkreten Datentypen ersetzt. Durch die dadurch vorhandene statische Typsicherheit können Laufzeitfehler verhindert und Fehler bereits beim Kompilieren entdeckt werden.

Die generische Klasse `GenericBox<T>` ermöglicht das Speichern einer beliebig typisierten Information mit Hilfe des Typparameters `T`.

```java title="GenericBox.java" showLineNumbers
public class GenericBox<T> {

  private T content;

  public void set(T content) {
    this.content = content;
  }

  public T get() {
    return content;
  }

}
```

In der main-Methode der Startklasse wird zunächst eine ganze Zahl in einer generischen Box gespeichert und anschließend wieder ausgelesen. Die Umwandlung der ganzen Zahl in eine Zeichenkette führt aufgrund der statischen Typsicherheit zu einem 
Kompilierungsfehler.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    GenericBox<Integer> genericBox = new GenericBox<>();
    genericBox.set(5);
    String i = genericBox.get(); // Kompilierungsfehler
    System.out.println(i);
  }

}
```

:::note Hinweis
Die Typisierung kann entweder explizit oder implizit über den Diamantenoperator `<>` erfolgen.
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
Um den Einsatzbereich von Typparameteren in generischen Klassen und Methoden kenntlich zu machen, sollte man festgelegte Zeichen verwenden.

| Typparameter  | Einsatzbereich                            |
| ------------- | ----------------------------------------- |
| T, U, V, W... | Datentyp (Type)                           |
| E             | Element einer Datensammlung (Element)     |
| K             | Schlüssel eines Assoziativspeichers (Key) |
| V             | Wert eines Assoziativspeichers (Value)    |

## Varianz
Typparameter können gar nicht (**Bivarianz**), nach oben (**Kovarianz**), nach unten (**Kontravarianz**), oder sowohl nach oben als auch nach unten (**Invarianz**) eingeschränkt werden. Zusätzlich ermöglicht der Wildcard-Typ `?` bei parametrisierten Typen die 
Angabe eines unbestimmten Typs. 

Die generische Klasse `GenericBox<T>` ermöglicht das Speichern einer beliebig typisierten Information.

```java title="GenericBox.java" showLineNumbers
public class GenericBox<T> {

  private T content;

  public void set(T content) {
    this.content = content;
  }

  public T get() {
    return content;
  }

}
```

Die Drei Klassen `Above`, `Center` und `Below` bilden eine Generalisierungshierarchie ab, wobei die Klasse `Below` eine Unterklasse der Klasse `Center` und diese wiederum eine Unterklasse der Klasse `Above` darstellt.

```java title="Above.java" showLineNumbers
public class Above {}
```
```java title="Center.java" showLineNumbers
public class Center extends Above {}
```
```java title="Below.java" showLineNumbers
public class Below extends Center {}
```

In der main-methode der Startklasse werden verschiedene generische Boxen unterschiedlich deklariert und anschließend initialisiert.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    GenericBox<?> bivariant;
    bivariant = new GenericBox<Above>();
    bivariant = new GenericBox<Center>();
    bivariant = new GenericBox<Below>();

    GenericBox<? extends Center> covariant;
    covariant = new GenericBox<Above>(); // Kompilierungsfehler
    covariant = new GenericBox<Center>();
    covariant = new GenericBox<Below>();

    GenericBox<? super Center> contravariant;
    contravariant = new GenericBox<Above>();
    contravariant = new GenericBox<Center>();
    contravariant = new GenericBox<Below>(); // Kompilierungsfehler

    GenericBox<Center> invariant;
    invariant = new GenericBox<Above>(); // Kompilierungsfehler
    invariant = new GenericBox<Center>();
    invariant = new GenericBox<Below>(); // Kompilierungsfehler
  }

}
```
