---
title: Klassen
description: ''
sidebar_position: 131
tags: [oo]
---

Klassen legen die Eigenschaften (Attribute) sowie das Verhalten (Methoden) von
Objekten fest und stellen damit Baupläne für Objekte dar.

## Sichtbarkeit von Klassen, Attributen und Methoden

Über _Zugriffsrechte_ wird festgelegt, von welchem Ort aus auf Klassen,
Attribute und Methoden zugegriffen werden darf.

| Zugriffsrecht | Zugriff aus gleicher Klasse | Zugriff von einer Klasse aus dem gleichen Paket | Zugriff von einer Unterklasse | Zugriff von einer beliebigen Klasse |
| ------------- | --------------------------- | ----------------------------------------------- | ----------------------------- | ----------------------------------- |
| public        | ja                          | ja                                              | ja                            | ja                                  |
| protected     | ja                          | ja                                              | ja                            | nein                                |
| package       | ja                          | ja                                              | nein                          | nein                                |
| private       | ja                          | nein                                            | nein                          | nein                                |

## Definition von Attributen

Die Attribute einer Klasse sind Datenobjekte und werden daher analog zu
Variablen und Konstanten definiert. Mit dem Schlüsselwort `final` lassen sich
unveränderliche Attribute definieren, deren Wert nach der Initialisierung nicht
mehr geändert werden kann. Die Initialisierung dieser Attribute erfolgt im
[Konstruktor](classes#definition-von-konstruktoren).

```java title="Computer.java (Auszug)" showLineNumbers
public class Computer {
   ...
   private final String description;
   private Cpu cpu;
   private int memoryInGb;
   ...
}
```

:::info

Die Selbstreferenz `this` verweist innerhalb einer Klasse auf das eigene Objekt
(siehe auch [Referenzen und Objekte](references-and-objects)).

:::

## Definition und Implementierung von Methoden

Methoden sind in der Programmierung eine Verallgemeinerung mathematischer
Funktionen. Eine Methode besteht aus einem Namen, einer (optionalen) Liste von
Eingabeparametern, einem (optionalen) Rückgabewert sowie dem Methodenrumpf. Die
Kombination aus Methodenname und den Datentypen der Parameterliste bezeichnet
man als _Signatur_.

Methoden können entweder genau einen Rückgabewert oder keinen besitzen. Methoden
mit einem Rückgabewert müssen vor dem Methodennamen den Rückgabetyp angeben und
im Methodenrumpf eine `return`-Anweisung enthalten. Methoden ohne Rückgabewert
werden mit `void` gekennzeichnet.

```java title="Computer.java (Auszug)" showLineNumbers
public class Computer {
   ...
   public Cpu getCpu() {
      return cpu;
   }

   public String getDescription() {
      return description;
   }

   public int getMemoryInGb() {
      return memoryInGb;
   }

   public void setCpu(Cpu cpu) {
      this.cpu = cpu;
   }

   public void setMemoryInGb(int memoryInGb) {
      this.memoryInGb = memoryInGb;
   }
   ...
}
```

## Definition überladener Methoden

Gleichnamige Methoden mit unterschiedlichen Parameterlisten in einer Klasse
werden als _überladene Methoden_ bezeichnet. Dieses Konzept nennt man auch
_statische Polymorphie_, da der Aufruf gleichnamiger Methoden je nach Parametern
zu unterschiedlichen Ergebnissen führt.

```java title="Computer.java (Auszug)" showLineNumbers
public class Computer {
   ...
   public void setCpu(Cpu cpu) {
      this.cpu = cpu;
   }

   public void setCpu(double powerInGhz, int numberOfCores) {
      cpu = new Cpu(powerInGhz, numberOfCores);
   }
   ...
}
```

:::info

Überladene Methoden können keine unterschiedlichen Rückgabewerte besitzen.

:::

## Definition von Konstruktoren

Konstruktoren sind spezielle Methoden, die zur Initialisierung eines Objekts
dienen. Sie tragen denselben Namen wie ihre Klasse und können beliebig viele
Parameter haben. Ein Rückgabetyp wird nicht angegeben, da Konstruktoren implizit
eine Referenz auf das neue Objekt zurückgeben.

Im Gegensatz zu z.B. C++ gibt es in Java keine Destruktoren. Stattdessen
übernimmt der _Garbage Collector_ im Hintergrund das Aufräumen: Er entfernt
Objekte aus dem Speicher, auf die keine Referenzvariable mehr zeigt.

```java title="Computer.java (Auszug)" showLineNumbers
public class Computer {
   ...
   public Computer(String description) {
      this.description = description;
   }

   public Computer(String description, Cpu cpu, int memoryInGb) {
      this(description);
      this.cpu = cpu;
      this.memoryInGb = memoryInGb;
   }
   ...
}
```

:::info

Auch Konstruktoren können überladen werden, d.h. eine Klasse kann über mehrere
Konstruktoren verfügen. Ein Konstruktor kann dabei einen anderen Konstruktor
derselben Klasse mit `this(...)` aufrufen.

:::

## Definition statischer Attribute und Methoden

Neben Instanzattributen und -methoden kann eine Klasse auch statische Attribute
und Methoden besitzen. Statische Attribute existieren nur einmal pro Klasse und
haben für alle Objekte dieser Klasse denselben Wert. Innerhalb einer statischen
Methode kann nur auf statische Attribute zugegriffen werden.

Statische Attribute und Methoden werden mit dem Schlüsselwort `static`
deklariert. Für den Zugriff ist keine Instanziierung nötig — er erfolgt direkt
über den Klassennamen.

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

:::info

Instanzattribute und -methoden werden auch als Klassenattribute und
Klassenmethoden bezeichnet, wenn sie statisch sind.

:::
