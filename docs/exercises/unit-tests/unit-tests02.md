---
title: UnitTests02
description: ''
---

Erstelle die Klasse `RentalTest` und erweitere die Klasse `Rental` aus Übungsaufgabe [Exceptions01](../exceptions/exceptions01.md) anhand des abgebildeten Klassendiagramms.

## Klassendiagramm
```mermaid
classDiagram
    Vehicle <|-- Car
    Vehicle <|-- Truck
    Vehicle o-- Engine
    Rental o-- Vehicle
    Partner <|.. Rental
    TravelAgency o-- Partner
    RentalTest o-- Rental

    class Vehicle {
        <<abstract>>
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
        +print()* void
        +getNumberOfVehicles()$ int
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
        +accelerateAllVehicles(value int) void
        +getVehicles() ArrayList~Vehicle~
        +print() void
    }

    class Partner {
        <<interface>>
        +print() void
    }

    class TravelAgency {
        -name String
        -partners ArrayList~Partner~
        +TravelAgency(name String)
        +addPartner(partner Partner) void
        +print() void
    }

    class RentalTest {
        -rental Rental
        +setUp() void
        +testTransformAllTrucks() void
        +testAccelerateAllVehicles() void
    }
```

## Hinweis zur Klasse Rental
Die Methode `void accelerateAllVehicles(value: int)` soll alle Fahrzeuge der Fahrzeugvermietung um den eingehenden Wert beschleunigen.

## Hinweise zur Klasse RentalTest
- Die Lebenszyklus-Methode `void setUp()` soll eine Fahrzeugvermietung samt dazugehöriger Fahrzeuge erzeugen
- Die Testmethode `void testTransformAllTrucks()` soll prüfen, ob nach Ausführen der Methode `void transformAllTrucks()` der Klasse `Rental` alle Lastwagen in Autobots umgewandelt werden und nach erneutem Ausführen wieder zurückverwandelt werden
- Die Testmethode `void testAccelerateAllVehicles(int)` soll prüfen, ob beim Ausführen der Methode `void accelerateAllVehicles(value: int)` der Klasse `Rental` mit einem negativen Wert die Ausnahme `InvalidValueException` ausgelöst wird
