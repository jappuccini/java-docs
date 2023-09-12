---
title: Objektorientierte Programmierung
description: ''
sidebar_position: 130
tags: [oo]
---

Die reale Welt besteht aus Objekten mit individuellen Eigenschaften und individuellem Verhalten. Für ein einfacheres Verständnis werden Objekte kategorisiert, also zu sinnhaften Einheiten verbunden. In der objektorientierten Programmierung werden Beobachtungen 
aus der realen Welt zum Konzept der Objektorientierung zusammengefasst:
- Eine Kategorie von ähnlichen Objekten bezeichnet man als _Klasse_
- Konkrete Ausprägungen bzw. Instanzen einer Klasse werden wiederum als _Objekte_ bezeichnet
- Die Eigenschaften von Objekten werden als _Attribute_ das Verhalten als _Methoden_ bezeichnet

```mermaid
flowchart LR
    rectangle1(Bezeichner: rectangle1\nDatentyp: Shape\nWert: 13fee20c) --> o1[hashCode: 13fee20c\nareaInCM2: 12]
    rectangle2(Bezeichner: rectangle2\nDatentyp: Shape\nWert: 88d45a01) --> o2[hashCode: 88d45a01\nareaInCM2: 12]
    trapezoid(Bezeichner: trapezoid\nDatentyp: Shape\nWert: 915a002f) --> o3[/hashCode: 915a002f\nareaInCM2: 12\]
```

:::note Hinweis
Jedes Objekt ist eindeutig identifizierbar.
:::

## Datenkapselung
Ein wesentlicher Grundsatz der Objektorientierung ist, dass Attribute durch Methoden gekapselt werden. Datenkapselung bedeutet, dass Attribute nicht direkt geändert werden können, sondern nur durch den indirekten Zugriff über Methoden. Typische Methoden zum 
Lesen und Schreiben von Attributen sind die sogenannten Getter bzw. Setter.

```mermaid
flowchart LR
    write[Schreibender Zugriff] -.-> setter1
    write -.-> setter2
    getter1 -.-> read[Lesender Zugriff]
    getter2 -.-> read
    subgraph Klasse
        attribut1((Attribut 1))
        attribut2((Attribut 2))
        setter1(Setter für Attribut 1) -.-> attribut1
        attribut1 -.-> getter1(Getter für Attribut 1)
        setter2(Setter für Attribut 2) -.-> attribut2
        attribut2 -.-> getter2(Getter für Attribut 2)
    end
```

## Sichtbarkeit von Attributen und Methoden
Um die Sichtbarkeit von Attributen und Methoden zu definieren, existieren verschiedene Zugriffsrechte. Die Sichtbarkeit bestimmt, von welchem Ort aus Attribute und Methoden verwendet bzw. aufgerufen werden dürfen.

| Zugriffsrecht | Zugriff aus gleicher Klasse | Zugriff von einer Klasse aus dem gleichen Paket | Zugriff von einer Unterklasse | Zugriff von einer beliebigen Klasse |
| ------------- | --------------------------- | ----------------------------------------------- | ----------------------------- | ----------------------------------- |
| public        | ja                          | ja                                              | ja                            | ja                                  |
| protected     | ja                          | ja                                              | ja                            | nein                                |
| package       | ja                          | ja                                              | nein                          | nein                                |
| private       | ja                          | nein                                            | nein                          | nein                                |

## Definition von Klassen
Klassen werden in Java mit dem Schlüsselwort `class` definiert. Die Angabe des Zugriffsrechts legt die Sichtbarkeit der Klasse fest.

```java title="Foo.java" showLineNumbers
public class Foo {
}
```

## Definition von Attributen
Die Attribute einer Klasse sind Datenobjekte und werdern daher analog zu Variablen und Konstanten definiert. Die Angabe des Zugriffsrechts legt die Sichtbarkeit des Attributs fest.

```java title="Foo.java" showLineNumbers
public class Foo {

  private String bar;
  public int baz;

}
```

## Definition und Implementierung von Methoden
Methoden sind in der Programmierung eine Verallgemeinerung von mathematischen Funktionen. Eine Methode besteht aus einem Methodennamen, einer Liste von Eingabeparameter (optional), einem Rückgabewert (optional) sowie dem Methodenrumpf.

Methoden können entweder genau einen Rückgabewert oder keinen Rückgabewert besitzen. Methoden mit genau einem Rückgabewert müssen vor dem Methodennamen den Datentyp des Rückgabewerts angeben und am Ende des Methodenrumpfes immer die Anweisung `return` besitzen,
Methoden ohne Rückgabewert müssen dies mit dem Schlüsselwort `void` kenntlich machen.


```java title="Foo.java" showLineNumbers
public class Foo {

  private String bar;
  public int baz;

  public void setBar(String bar) {
    this.bar = bar;
  }

  public String getBar() {
    return bar;
  }

}
```

:::note Hinweis
Die Signatur einer Methode setzt sich aus Methodenname und den Datentypen der Parameterliste zusammen.
:::

## Deklaration von Referenzvariablen
Technisch gesehen handelt es sich bei einer Klasse um einen komplexen Datentyp. Analog zu den primitiven Datentypen können auch für Klassen Variablen – sogenannte _Referenzvariablen_ – definiert werden. 

Im Gegensatz zu "normalen" Variablen werden bei Referenzvariablen nicht die eigentlichen Werte in den Variablen gespeichert, sondern die Speicheradressen der erzeugten Objekte. Die Selbstreferenz `this` verweist innerhalb einer Klasse auf das eigene Objekt.

```mermaid
flowchart LR
    rectangle1(Bezeichner: rectangle1\nDatentyp: Shape\nWert: 13fee20c) --> o1[hashCode: 13fee20c\nareaInCM2: 12]
    rectangle2(Bezeichner: rectangle2\nDatentyp: Shape\nWert: 13fee20c) --> o1[hashCode: 13fee20c\nareaInCM2: 12]
    trapezoid(Bezeichner: trapezoid\nDatentyp: Shape\nWert: 915a002f) --> o3[/hashCode: 915a002f\nareaInCM2: 10\]
```

:::note Hinweis
Der Standarwert von Referenzvariablen ist `null`.
:::

## Erzeugen von Objekten
Beim Erzeugen eines Objekts mit Hilfe des Operators `new` wird der bei der Deklaration reservierte Speicherplatz durch das Objekt belegt.

```java title="Foo.java" showLineNumbers
public class Foo {

  private String bar;
  public int baz;

  public void setBar(String bar) {
    this.bar = bar;
  }

  public String getBar() {
    return bar;
  }

}
```
```java  title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    Foo foo = new Foo();
  }

}
```

:::danger Hinweis
Nach dem new-Operator muss immer ein Konstruktor der Klasse stehen.
:::

## Zugriff auf Attribute und Aufruf von Methoden
Erlauben die Zugriffsrechte den Zugriff auf ein Attribut, kann über die deklarierte Referenzvariable und einem nachgestellten Punkt auf das Attribut zugegriffen werden. Auch sichtbare Methoden werden über diese Syntax aufgerufen.

```java title="Foo.java" showLineNumbers
public class Foo {

  private String bar;
  public int baz;

  public void setBar(String bar) {
    this.bar = bar;
  }

  public String getBar() {
    return bar;
  }

}
```
```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    Foo foo = new Foo();
    foo.setBar("Winter is Coming");
    foo.baz = 42;
  }

}
```

:::danger Hinweis
Beim Aufruf einer Methode müssen alle Parameter in der richtigen Reihenfolge versorgt werden. Parameter, die diesem Prinzip folgen, bezeichnet man als _Positionsparameter_
:::

## Überladene Methoden
Gleichnamige Methoden mit unterschiedlichen Parameterlisten einer Klasse werden als überladene Methoden bezeichnet. Man spricht in diesem Zusammenhang auch von statischer Polymorphie, da der Aufruf gleichnamiger Methoden unterschiedliche Ergebnisse liefern kann.

```java title="Foo.java" showLineNumbers
public class Foo {

  private String bar;
  public int baz;

  public void setBar(String bar) {
    this.bar = bar;
  }

  public void setBar(int bar) {
    this.bar = bar + "";
  }

  public String getBar() {
    return bar;
  }

}
```
```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    Foo foo = new Foo();
    foo.setBar("Winter is Coming");
    foo.setBar(42);
  }

}
```

:::danger Hinweis
Überladene Methoden können keine unterschiedlichen Rückgabewerte besitzen.
:::

## Konstruktoren
Bei Konstruktoren handelt es sich um spezielle Methoden, die zur Initialisierung eines Objekts verwendet werden. Konstruktoren heißen wie ihre Klasse und können eine beliebige Anzahl an Parametern haben. Allerdings kann für Konstruktoren kein Rückgabewert 
festgelegt werden, da diese implizit die Referenz auf das Objekt zurückgeben.

Im Gegensatz zu z.B. C++ existieren in Java keine Destruktoren, die nicht mehr benötigte Objekte aus dem Speicher entfernen. Stattdessen läuft im Hintergrund der sogenannte Garbage Collector, der nicht mehr benötigte Objekte (also Objekte, die nicht mehr über 
eine Referenzvariable angesprochen werden können) löscht.

```java title="Foo.java" showLineNumbers
public class Foo {

  private String bar;
  public int baz;

  public Foo(String bar) {
    this.bar = bar;
  }

  public Foo(int bar) {
    this.bar = bar + "";
  }

  public String getBar() {
    return bar;
  }

}
```
```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    Foo foo = new Foo("Winter is Coming");
    Foo foo2 = new Foo(42);
  }

}
```

:::note Hinweis
Auch Konstruktoren können überladen werden.
:::

## Statische Attribute und Methoden
Neben "normalen" Attributen und Methoden kann eine Klasse auch statische Attribute und statische Methoden besitzen. Im Gegensatz zu "normalen" Attributen existieren statische Attribute nur einmal pro Klasse und besitzen daher für alle Objekte dieser Klasse 
dieselben Werte. Innerhalb einer statischen Methode kann nur auf die statischen Attribute der Klasse zugegriffen werden.

Bei der Deklaration von statischen Attributen und statischen Methoden kommt das Schlüsselwort `static` zum Einsatz. Für den Zugriff auf ein statisches Attribut bzw. den Aufruf einer statischen Methode wird keine Instanziierung benötigt, d.h. der der Zugriff 
bzw. Aufruf erfolgt über den Klassennamen.

```java title="Foo.java" showLineNumbers
public class Foo {

  private String bar;
  public int baz;

  private static int foobar;

  public Foo(String bar) {
    this.bar = bar;
    foobar++;
  }

  public Foo(int bar) {
    this.bar = bar + "";
  }

  public String getBar() {
    return bar;
  }

  public static int getFoobar() {
    return foobar;
  }

}
```
```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    Foo foo = new Foo("Winter is Coming");
    int foobar = Foo.getFoobar();
    System.out.println(foobar);
  }

}
```

:::note Hinweis
"Normale" Attribute und Methoden werden auch als Instanzattribute bzw. Instanzmethoden bezeichnet, statische Attribute und Methoden auch Klassenattribute bzw. Klassenmethoden.
:::
