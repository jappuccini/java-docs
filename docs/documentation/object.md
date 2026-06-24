---
title: Die Mutter aller Klassen
description: ''
sidebar_position: 190
tags: [object]
---

Alle Klassen in Java sind letztlich Unterklassen der Klasse `Object`, die daher
auch als die _Mutter aller Klassen_ bezeichnet wird. Sie vererbt ihren
Unterklassen unter anderem die Methoden `boolean equals(object: Object)`,
`int hashCode()` und `String toString()`. Diese drei Methoden sollte jede eigene
Klasse sinnvoll überschreiben.

## Die Methode _boolean equals(object: Object)_

Die Methode `boolean equals(object: Object)` prüft zwei Objekte auf inhaltliche
Gleichheit. Zwei Objekte gelten in der Regel als gleich, wenn alle ihre
Attribute übereinstimmen.

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
      return Objects.equals(description, other.description) && Objects.equals(cpu, other.cpu)
            && memoryInGb == other.memoryInGb;
   }
   ...
}
```

## Die Methode _int hashCode()_

Die Methode `int hashCode()` liefert den Hashcode des aktuellen Objekts zurück.
Sie sollte so überschrieben werden, dass inhaltlich gleiche Objekte denselben
Hashwert liefern. Das ist insbesondere beim Arbeiten mit Hash-basierten
Datensammlungen wie `HashMap<K, V>` notwendig.

```java title="Computer.java (Auszug)" showLineNumbers
public class Computer {
   ...
   @Override
   public int hashCode() {
      return Objects.hash(description, cpu, memoryInGb);
   }
   ...
}

```

:::info

Die statische Methode `int hash(values: Object...)` der Klasse `Objects` bietet
eine einfache Möglichkeit zur Implementierung von `hashCode()`.

:::

## Die Methode _String toString()_

Die Methode `String toString()` liefert eine eindeutige Kennung des Objekts in
der Form _[vollständiger Klassenname]_@_[Adresse im Hauptspeicher in
hexadezimaler Notation]_ zurück. Üblicherweise wird sie so überschrieben, dass
alle relevanten Attribute als Zeichenkette zurückgegeben werden — typischerweise
in der Form _[Klassenname][Attribut]=[Wert], ...]_.

```java title="Computer.java" showLineNumbers
public class Computer {
   ...
   @Override
   public String toString() {
      return "Computer [description=" + description + ", cpu=" + cpu + ", memoryInGb=" + memoryInGb
            + "]";
   }
   ...
}
```

:::info

Wird den print-Methoden des Ausgabestroms `System.out` eine Objektreferenz
übergeben, wird implizit die Methode `String toString()` des jeweiligen Objektes
aufgerufen.

:::
