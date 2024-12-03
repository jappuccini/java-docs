---
title: Die Mutter aller Klassen
description: ''
sidebar_position: 190
tags: [object]
---

Alle Klassen in Java sind letztlich Unterklassen der Klasse `Object`. Daher wird
diese auch als die Mutter aller Klassen bezeichnet. Die Klasse vererbt ihren
Unterklassen unter anderem die Methoden `boolean equals(object: Object)`,
`int hashCode()` und `String toString()`. Diese drei Methoden sollte jede
Unterklasse sinnvoll überschreiben.

## Die Methode _equals(object: Object)_

Die Methode `boolean equals(object: Object)` prüft zwei Objekte auf Gleichheit.
Zwei Objekte gelten dabei in der Regel als gleich, wenn all ihre Attribute
gleich sind.

```java title="Computer.java (Auszug)" showLineNumbers
public class Computer {
  ...
  @Override
  public boolean equals(Object object) {
    if (this == object) {
      return true;
    }
    if (object == null) {
      return false;
    }
    if (getClass() != object.getClass()) {
      return false;
    }
    Computer other = (Computer) object;
    return Objects.equals(description, other.description)
      && Objects.equals(cpu, other.cpu) && memoryInGB == other.memoryInGB;
  }
  ...
}
```

## Die Methode _hashCode()_

Die Methode `int hashCode()` liefert den Hashcode des aktuellen Objektes zurück.
Die Methode sollte so überschrieben werden, dass gleiche Objekte den gleichen
Hashwert zurückgeben. Dies ist vor allem beim Arbeiten mit Hash-basierten
Datensammlungen wie z.B. der Klasse `HashMap<K, V>` notwendig.

```java title="Computer.java (Auszug)" showLineNumbers
public class Computer {
  ...  @Override
  public int hashCode() {
    return Objects.hash(description, cpu, memoryInGB);
  }
  ...
}
```

:::note Hinweis

Die statische Methode `int hash(values: Object...)` der Klasse `Objects` liefert
eine einfache Möglichkeit zur Implementierung der Methode `boolean hashCode()`.

:::

## Die Methode _toString()_

Die Methode `String toString()` liefert eine eindeutige Kennung des Objektes in
der Form _[Vollständiger Klassenname]_@_[Adresse des Objektes im Hauptspeicher
in hexadezimaler Notation]_ zurück. Die Methode sollte so überschrieben werden,
dass alle relevanten Attribute des Objektes als Zeichenkette zurückgegeben
werden. In der Regel geschieht dies in der Form _[Klassenname]
[[Attribut]=[Attributswert], ...]_.

```java title="Computer.java" showLineNumbers
public class Computer {
  ...
  @Override
  public String toString(t) {
    return "Computer [description=" + description + ", cpu=" + cpu
      + ", memoryInGB=" + memoryInGB + "]");
  }
  ...
}
```

:::note Hinweis

Wird den print-Methoden des Ausgabestroms `System.out` eine Objektreferenz
übergeben, wird implizit die Methode `String toString()` des jeweiligen Objektes
aufgerufen.

:::
