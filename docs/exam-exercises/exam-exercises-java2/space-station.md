---
title: Raumstation
description: ''
tags: [exceptions, records, maps, optionals]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

```mermaid
classDiagram
    SpaceStation o-- SpaceFighter
    SpaceFighter o-- Type

    class SpaceStation {
        <<record>>
        name: String
        bays: Map~Integer, SpaceFighter~
        +land(bayNumber: Integer, spaceFighter: SpaceFighter) void
        +getFastestSpaceFighter() Optional~SpaceFighter~
    }

    class SpaceFighter {
        <<record>>
        id: String
        type: Type
    }

    class Type {
        <<enumeration>>
        A_WING = 1300
        B_WING = 950
        X_WING = 1050
        Y_WING = 1000
        TIE_FIGHTER = 1200
        -maxSpeedInKmh: int &#123final&#125
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse _SpaceStation_

- Die Methode `void land(bayNumber: Integer, spaceFighter: SpaceFighter)` soll
  den eingehenden Sternenjäger in der Bucht mit der eingehenden Buchtnummer
  landen lassen. Für den Fall, dass der eingehende Sternenjäger bereits gelandet
  ist (also bereits eine Bucht belegt), soll die Ausnahme
  `SpaceFighterAlreadyLandedException` ausgelöst werden und für den Fall, dass
  die Bucht bereits belegt ist, die Ausnahme `BayAlreadyLoadedException`
- Die Methode `Optional<SpaceFighter> getFastestSpaceFighter()` soll den
  schnellsten Sternenjäger der Raumstation als Optional zurückgeben
