---
title: Polymorphy03
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Passe die Klasse `Rental` aus Übungsaufgabe
  [Polymorphy02](polymorphy02.md) anhand des abgebildeten Klassendiagramms an
- Passe die ausführbare Klasse aus Übungsaufgabe
  [Polymorphy02](polymorphy02.md) so an, dass sich alle Lastwagen der
  Fahrzeugvermietung in Autobots verwandeln

## Klassendiagramm
```mermaid
classDiagram
    Car --|> Vehicle
    Truck --|> Vehicle
    Engine --> Vehicle
    Vehicle --> Rental

    class Vehicle {
        -make String
        -model String
        -engine Engine
        #speed double
        -numberOfVehicles int$
        +Vehicle(make String, model String, engine Engine)
        +getMake() String
        +getModel() String
        +getEngine() Engine
        +getSpeed() double
        +accelerate(value int) void
        +brake(value int) void
        +print() void
        +getNumberOfVehicles() int$
    }

    class Engine {
        <<enumeration>>
        DIESEL = Diesel
        PETROL = Benzin
        GAS = Gas
        ELECTRO = Elektro
        -description String
    }

    class Car {
        -seats int
        +Car(make String, model String, engine Engine, seats int)
        +getSeats() int
        +doATurboBoost() void
        +print() void
    }

    class Truck {
        -cargo int
        -isTransformed boolean
        +Truck(make String, model String, engine Engine, cargo int)
        +getCargo() int
        +isTransformed() boolean
        +transform() void
        +print() void
    }

    class Rental {
        -name String
        -vehicles ArrayList~Vehicle~
        +Rental(name String)
        +addVehicle(vehicle Vehicle) void
        +addAllVehicles(vehicles Vehicle...) void
        +transformAllTrucks() void
        +print() void
    }
```

## Hinweis zur Klasse Rental
Die Methode `void transformAllTrucks()` soll alle Lastwagen in Autobots
verwandeln.

<Exercise pullRequest="43" branchSuffix="polymorphy/03" />
