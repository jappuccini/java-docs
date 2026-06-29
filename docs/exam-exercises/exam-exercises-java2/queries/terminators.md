---
title: Terminatoren
description: ''
tags:
  [
    enumerations,
    inheritance,
    comparators,
    java-stream-api,
    exceptions,
    records,
    maps,
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
    TerminatorQueries o-- Terminator

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

    class TerminatorQueries {
        <<record>>
        terminators: List~Terminator~
        +getAllUniqueSeriesDescriptions() List~String~
        +getAllHumanoidTerminatorsSortedByFabricationDate() List~Terminator~
        +getAverageWeigthInKg() double
        +getTerminatorsByWeightInKg() Map~Double, List~Terminator~~
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

## Hinweise zur Klasse _TerminatorQueries_

- Die Methode `List<String> getAllUniqueSeriesDescriptions()` soll die
  Serienbeschreibungen aller Terminatoren ohne Dopplungen zurückgeben
- Die Methode
  `List<Terminator> getAllHumanoidTerminatorsSortedByFabricationDate()` soll
  alle menschenähnlichen Terminatoren absteigend sortiert nach ihrem
  Fabrikationsdatum zurückgeben
- Die Methode `double getAverageWeigthInKg()` soll das durchschnittliche Gewicht
  aller Terminatoren zurückgeben. Für den Fall, dass kein durchschnittliches
  Gewicht berechnet werden kann, soll die Ausnahme `Exception` ausgelöst werden
- Die Methode `Map<Double, List<Terminator>> getTerminatorsByWeightInKg()` soll
  alle Terminatoren gruppiert nach ihrem Gewicht zurückgeben
