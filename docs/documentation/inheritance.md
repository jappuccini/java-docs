---
title: Vererbung
description: ''
sidebar_position: 170
tags: []
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Bei der Modellierung von Klassen stellt man häufig fest, dass sich einige Klassen der Struktur und dem Verhalten nach ähneln. In solchen Fällen hat man die Möglichkeit, die gemeinsamen Strukturen und Verhaltensweisen aus den speziellen Klassen zu extrahieren
und in einer allgemeineren Klasse unterzubringen. Dies wird als _Generalisierung_ bezeichnet. Umgekehrt gibt es oftmals auch Bedarf, eine bestehende Klasse um zusätzliche Attribute und/oder Methoden zu erweitern. Dies bezeichnet man als _Spezialisierung_
Die Beziehung zwischen einer speziellen Klasse und einer allgemeinen Klasse wird _Vererbung_ bezeichnet. Die speziellen Klasse einer Vererbung werden als _Unterklassen_ (Sub Classes), die allgemeinen Klassen als _Oberklassen_ (Super Classes) bezeichnet.

## Implementieren von Vererbung

Die Vererbung wird mit dem Schlüsselwort `extends` realisiert. In der Oberklasse können Attribute und Methoden mit dem Schlüsselwort `protected` als geschützt festlegt werden. Unterklassen können auf alle öffentlichen und geschützten Attribute und Methoden der
Oberklasse zugreifen.

<Tabs>
  <TabItem value="superClass" label="Oberklasse" default>

```java title="SuperClass.java" showLineNumbers
public class SuperClass {

  public String foo;
  protected String bar;
  private String baz;

  public SuperClass(String foo, String bar, String baz) {
    this.foo = foo;
    this.bar = bar;
    this.baz = baz;
  }

}
```

  </TabItem>
  <TabItem value="subClass" label="Unterklasse" default>

```java title="SubClass.java" showLineNumbers
public class SubClass extends SuperClass {

  public SubClass(String foo, String bar, String baz) {
    super(foo, bar, baz);
  }

  public void foobar() {
    System.out.println(foo);
    System.out.println(bar);
    System.out.println(baz); // Kompilierungsfehler
  }

}
```

  </TabItem>
</Tabs>

:::danger Hinweis
In den Konstruktoren der Unterklasse muss ein Konstruktor der Oberklasse mit Hilfe von `super` aufgerufen werden.
:::

## Überschreiben von Methoden

Wird in einer Unterklasse eine Methode definiert, die der Signatur einer Methode der Oberklasse entspricht, wird die Methode der Oberklasse _überschrieben_, d.h. von der Unterklasse neu implementiert. Bei Bedarf kann die ursprüngliche Methodenimplementierung
der Oberklasse mit Hilfe der Objektreferenz `super` aufgerufen werden.

<Tabs>
  <TabItem value="superClass" label="Oberklasse" default>

```java title="SuperClass.java" showLineNumbers
public class SuperClass {

  public void foo() {
    System.out.print("foo");
  }

}
```

  </TabItem>
  <TabItem value="subClass" label="Unterklasse" default>

```java title="SubClass.java" showLineNumbers
public class SubClass extends SuperClass {

  @Override
  public void foo() {
    super.foo();
    System.out.println("bar");
  }

}
```

  </TabItem>
</Tabs>

:::note Hinweis
Die Annotation `@Override` sorgt bei fehlerhaftem Überschreiben der Methode für entsprechende Kompilierungsfehler.
:::
