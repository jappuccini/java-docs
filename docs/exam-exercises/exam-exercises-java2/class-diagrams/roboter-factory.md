---
title: Roboterfabrik
description: ''
tags:
  [
    enumerations,
    inheritance,
    comparators,
    records,
    maps,
    optionals,
    dates-and-times,
  ]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

```mermaid
classDiagram
    Roboter <|-- Terminator : extends
    Terminator ..|> Comparable~Terminator~ : implements
    Terminator o-- Series
    RoboterFactory~T extends Roboter~ ..> Roboter : uses

    class Roboter {
        -serialNumber: String #123;final#125;
        -fabricationDate: LocalDate #123;final#125;
        +Roboter(serialNumber: String, fabricationDate: LocalDate)
    }

    class Terminator {
        -series: Series #123;final#125;
        +Terminator(serialNumber: String, fabricationDate: LocalDate, series: Series)
        +compareTo(other: Terminator) int
    }

    class Comparable~Terminator~ {
        <<interface>>
        +compareTo(o: Terminator) int
    }

    class RoboterFactory~T extends Roboter~ {
        <<record>>
        roboters: Map~String, T~
        +getRoboterBySerialNumber(serialNumber: String) Optional~T~
        +getRobotersByFabricationYear(fabricationYear: int) List~T~
    }

    class Series {
        <<enumeration>>
        T1 = 1 series, false, 2000
        T800 = 800 series, true, 500
        T1000 = 1000 series, true, 100
        ...
        -description: String #123;final#125;
        -isHumanoid: boolean #123;final#125;
        -weightInKg: double #123;final#125;
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse _Terminator_

Die Methode `int compareTo(other: Terminator)` soll so implementiert werden,
dass Terminatoren absteigend nach ihrem Gewicht sortiert werden können.

## Hinweise zur Klasse _RoboterFactory_

- Die Schlüssel-Werte-Paare des Assoziativspeichers `roboters` beinhalten als
  Schlüssel die Seriennummer sowie als Wert den dazugehörigen Roboter
- Die Methode `Optional<T> getRoboterBySerialNumber(serialNumber: String)` soll
  den Roboter zur eingehenden Seriennummer zurückgeben
- Die Methode `List<T> getRobotersByFabricationYear(fabricationYear: int)` soll
  alle Roboter zum eingehenden Fabrikationsjahr zurückgeben
