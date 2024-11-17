---
title: Klassen
description: ''
sidebar_position: 131
tags: [oo]
---

Klassen legen die Eigenschafen (Attribute) sowie das Verhalten (Methoden) von
Objekten fest und stellen damit quasi Baupläne für Objekte dar.

## Sichtbarkeit von Klassen, Attributen und Methoden

Um die Sichtbarkeit von Klassen, Attributen und Methoden zu definieren,
existieren verschiedene Zugriffsrechte. Die Sichtbarkeit bestimmt, von welchem
Ort aus Klassen, Attribute und Methoden verwendet bzw. aufgerufen werden dürfen.

| Zugriffsrecht | Zugriff aus gleicher Klasse | Zugriff von einer Klasse aus dem gleichen Paket | Zugriff von einer Unterklasse | Zugriff von einer beliebigen Klasse |
| ------------- | --------------------------- | ----------------------------------------------- | ----------------------------- | ----------------------------------- |
| public        | ja                          | ja                                              | ja                            | ja                                  |
| protected     | ja                          | ja                                              | ja                            | nein                                |
| package       | ja                          | ja                                              | nein                          | nein                                |
| private       | ja                          | nein                                            | nein                          | nein                                |

## Definition von Attributen

Die Attribute einer Klasse sind Datenobjekte und werdern daher analog zu
Variablen und Konstanten definiert. Das Schlüsselwort `final` erlaubt die
Definition von unveränderlichen Attributen, also Attributen, deren Wert nicht
geändert werden kann. Die Initialisierung dieser unveränderlichen Attribute
erfolgt durch [Konstruktoren](classes#definition-von-konstruktoren).

```java title="Computer.java (Auszug)" showLineNumbers
public class Computer {
  ...
  private final String description;
  private CPU cpu;
  private int memoryInGB;
  ...
}
```

:::note Hinweis

Die Selbstreferenz `this` verweist innerhalb einer Klasse auf das eigene Objekt
(siehe auch [Referenzen und Objekte](references-and-objects)).

:::

## Definition und Implementierung von Methoden

Methoden sind in der Programmierung eine Verallgemeinerung von mathematischen
Funktionen. Eine Methode besteht aus einem Methodennamen, einer Liste von
Eingabeparameter (optional), einem Rückgabewert (optional) sowie dem
Methodenrumpf. Die Kombination aus Methodenname und den Datentypen der
Parameterliste bezeichent man als _Signatur einer Methode_.

Methoden können entweder genau einen Rückgabewert oder keinen Rückgabewert
besitzen. Methoden mit genau einem Rückgabewert müssen vor dem Methodennamen den
Datentyp des Rückgabewerts angeben und am Ende des Methodenrumpfes immer die
Anweisung `return` besitzen, Methoden ohne Rückgabewert müssen dies mit dem
Schlüsselwort `void` kenntlich machen.

```java title="Computer.java (Auszug)" showLineNumbers
public class Computer {
  ...
  public CPU getCpu() {
    return cpu;
  }

  public String getDescription() {
    return description;
  }

  public int getMemoryInGB() {
    return memoryInGB;
  }

  public void setCpu(CPU cpu) {
    this.cpu = cpu;
  }

  public void setMemoryInGB(int memoryInGB) {
    this.memoryInGB = memoryInGB;
  }
  ...
}
```

## Definition überladener Methoden

Gleichnamige Methoden mit unterschiedlichen Parameterlisten einer Klasse werden
als überladene Methoden bezeichnet. Man spricht in diesem Zusammenhang auch von
statischer Polymorphie, da der Aufruf gleichnamiger Methoden unterschiedliche
Ergebnisse liefern kann.

```java title="Computer.java (Auszug)" showLineNumbers
public class Computer {
  ...
  public void setCpu(CPU cpu) {
    this.cpu = cpu;
  }

  public void setCpu(double powerInGHz, int numberOfCores) {
    cpu = new CPU(powerInGHz, numberOfCores);
  }
  ...
}
```

:::danger Hinweis

Überladene Methoden können keine unterschiedlichen Rückgabewerte besitzen.

:::

## Definition von Konstruktoren

Bei Konstruktoren handelt es sich um spezielle Methoden, die zur Initialisierung
eines Objekts verwendet werden. Konstruktoren heißen wie ihre Klasse und können
eine beliebige Anzahl an Parametern haben. Allerdings kann für Konstruktoren
kein Rückgabewert festgelegt werden, da diese implizit die Referenz auf das
Objekt zurückgeben.

Im Gegensatz zu z.B. C++ existieren in Java keine Destruktoren, die nicht mehr
benötigte Objekte aus dem Speicher entfernen. Stattdessen läuft im Hintergrund
der sogenannte Garbage Collector, der nicht mehr benötigte Objekte (also
Objekte, die nicht mehr über eine Referenzvariable angesprochen werden können)
löscht.

```java title="Computer.java (Auszug)" showLineNumbers
public class Computer {
  ...
  public Computer(String description) {
    this.description = description;
  }

  public Computer(String description, CPU cpu, int memoryInGB) {
    this(description);
    this.cpu = cpu;
    this.memoryInGB = memoryInGB;
  }
  ...
}
```

:::note Hinweis

Auch Konstruktoren können überladen werden, das heißt eine Klasse kann über
mehrere Konstruktoren verfügen. Der Aufruf eines Konstruktors innerhalb eines
anderen Konstruktors erfolgt dabei über die Selbstreferenz `this`.

:::

## Definition statischer Attribute und Methoden

Neben "normalen" Attributen und Methoden kann eine Klasse auch statische
Attribute und statische Methoden besitzen. Im Gegensatz zu "normalen" Attributen
existieren statische Attribute nur einmal pro Klasse und besitzen daher für alle
Objekte dieser Klasse dieselben Werte. Innerhalb einer statischen Methode kann
nur auf die statischen Attribute der Klasse zugegriffen werden.

Bei der Deklaration von statischen Attributen und statischen Methoden kommt das
Schlüsselwort `static` zum Einsatz. Für den Zugriff auf ein statisches Attribut
bzw. den Aufruf einer statischen Methode wird keine Instanziierung benötigt,
d.h. der der Zugriff bzw. Aufruf erfolgt über den Klassennamen.

```java title="Computer.java (Auszug)" showLineNumbers
public class Computer {
  ...
  private static int numberOfComputers;

  public Computer(String description) {
    this.description = description;
    numberOfComputers++;
  }

  public static int getNumberOfComputers() {
    return numberOfComputers;
  }
  ...
}
```

:::note Hinweis

"Normale" Attribute und Methoden werden auch als Instanzattribute bzw.
Instanzmethoden bezeichnet, statische Attribute und Methoden auch
Klassenattribute bzw. Klassenmethoden.

:::
