---
title: Innere Klassen (Inner Classes)
description: ''
sidebar_position: 260
tags: [inner-classes]
---

Java bietet die Möglichkeit, Klassen und Schnittstellen zu verschachteln. Das
Ziel von inneren Klassen ist eine Definition von Hilfsklassen möglichst nahe an
der Stelle, wo sie gebraucht werden. Beispiele für Hilfsklassen sind
Ausnahmeklassen, Komparatoren und Ereignisbehandler. Alle bisherigen Klassen
werden auch als _äußerer Klassen_ bzw. _Top-Level-Klassen_ bezeichnet.

## Geschachtelte Klassen (Nested Classes)

Geschachtelte Klassen sind Top-Level-Klassen, die zur Strukturierung des
Namensraumes in anderen Top-Level-Klassen definiert sind. Ein Namensraum ist die
vollständige Pfadangabe zur Klasse (z.B. `java.lang`). Geschachtelte Klassen
müssen statisch definiert werden und sind daher im eigentlichen Sinne keine
richtigen inneren Klassen.

Zunächst wird die äußere Klasse `OuterClass` samt der geschachtelten Klasse
`InnerClass` definiert.

```java title="OuterClass.java" showLineNumbers
public class OuterClass {

  public static class InnerClass {
  }

}
```

In der main-Methode der Startklasse kann die innere Klasse `InnerClass` nur
durch Angabe des vollständigen Namensraumes verwendet werden, was die Angabe der
äußerer Klasse `OuterClass` miteinschließt.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
      OuterClass o = new OuterClass();
      OuterClass.InnerClass i = new OuterClass.InnerClass();
  }

}
```

## Elementklassen (Member Classes)

Objekte von Elementklassen sind immer mit einem Objekt der umgebenden Klasse
verbunden. Dies ermöglicht die Umsetzung von Kompositionen (siehe
[Darstellung von Assoziationen](class-diagrams#darstellung-von-assoziationen)).
Sie haben Zugriff auf alle Variablen und Methoden der sie umgebenden Klasse und
dürfen keine statischen Elemente enthalten.

Zunächst wird die äußere Klasse `OuterClass` samt der Elementklasse `InnerClass`
definiert.

```java title="OuterClass.java" showLineNumbers
public class OuterClass {

  public class InnerClass {
  }

}
```

In der main-Methode der Startklasse kann ein Objekt der Klasse `InnerClass` nur
auf ein bestehendes Objekt der Klasse `OuterClass` erzeugt werden.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    OuterClass o = new OuterClass();
    OuterClass.InnerClass i = new OuterClass.InnerClass(); // Kompilierungsfehler
    OuterClass.InnerClass i = o.new InnerClass();
  }

}
```

## Lokale Klassen

Lokale Klassen werden innerhalb einer Methode definiert und können auch nur dort
verwendet werden. Sie dürfen nicht als `public`, `protected`, `private` oder
`static` definiert werden, dürfen keine statischen Elemente enthalten und können
nur die mit `final` markierten Variablen und Parameter der umgebenden Methode
verwenden.

Zunächst wird die Schnittstelle `Qux` samt der Methode
`void quux(s: String)`definiert.

```java title="Qux.java" showLineNumbers
public interface Qux {

  void quux(String s);

}
```

Die Klasse `Foo` soll die Verwenderklasse der Schnittstelle `Qux` darstellen.

```java title="Foo.java" showLineNumbers
public class Foo {

  public static void bar(String s, Qux q) {
    q.quux(s);
  }

}
```

In der main-Methode der Startklasse soll die Methode
`void bar(s: String, q: Qux)` der Klasse `Foo` aufgerufen werden, wofür eine
konkrete Implementierung der Schnittstelle `Qux` benötigt wird. Die
Implementierung erfolgt in Form der lokalen Klasse `LocalClass`.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    class LocalClass implements Qux {
      @Override
      public void quux(String s) {
        System.out.println(s);
      }
    }

    LocalClass l = new LocalClass();
    Foo.bar("Winter is Coming", l);
  }

}
```

## Anonyme Klassen

Anonyme Klassen besitzen im Gegensatz zu lokalen Klassen keinen Namen und werden
innerhalb eines Ausdrucks definiert und instanziiert; Klassendeklaration und
Objekterzeugung sind also in einem Sprachkonstrukt vereint. Wird als Datentyp
eine Schnittstelle benötigt, implementiert die anonyme Klasse diese
Schnittstelle, wird als Datentyp eine Klasse benötigt, so wird die anonyme
Klasse daraus abgeleitet.

Zunächst wird die Schnittstelle `Qux` samt der Methode
`void quux(s: String)`definiert.

```java title="Qux.java" showLineNumbers
public interface Qux {

  void quux(String s);

}
```

Die Klasse `Foo` soll die Verwenderklasse der Schnittstelle `Qux` darstellen.

```java title="Foo.java" showLineNumbers
public class Foo {

  public static void bar(String s, Qux q) {
    q.quux(s);
  }

}
```

In der main-Methode der Startklasse soll die Methode
`void bar(s: String, q: Qux)` der Klasse `Foo` aufgerufen werden, wofür eine
konkrete Implementierung der Schnittstelle `Qux` benötigt wird. Die
Implementierung erfolgt in Form einer anonymen Klasse.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    Foo.bar("Winter is Coming", new Qux() {
      @Override
      public void quux(String s) {
        System.out.println(s);
      }
    });
  }

}
```
