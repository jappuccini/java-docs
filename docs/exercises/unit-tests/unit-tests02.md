---
title: UnitTests02
description: ''
---

Erstelle die JUnit5-Testklasse `RentalTest` und erweitere die Klasse `Rental`
aus Übungsaufgabe [Exceptions01](../exceptions/exceptions01) anhand des
abgebildeten Klassendiagramms.

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
        -make: String &#123final&#125
        -model: String &#123final&#125
        -engine: Engine &#123final&#125
        #speedInKmh: double
        -numberOfVehicles: int$
        +Vehicle(make: String, model: String, engine: Engine)
        +make() String
        +model() String
        +engine() Engine
        +getSpeedInKmh() double
        +accelerate(valueInKmh: int) void &#123final&#125
        +brake(valueInKmh: int) void &#123final&#125
        +equals(object: Object) boolean
        +hashCode() int
        +toString() String
        +getNumberOfVehicles()$ int
    }

    class Engine {
        <<enumeration>>
        DIESEL = Diesel
        PETROL = Benzin
        GAS = Gas
        ELECTRO = Elektro
        -description: String &#123final&#125
    }

    class Car {
        <<final>>
        -seats: int &#123final&#125
        +Car(make: String, model: String, engine: Engine, seats: int)
        +seats() int
        +doATurboBoost() void
        +equals(object: Object) boolean
        +hashCode() int
        +toString() String
    }

    class Truck {
        <<final>>
        -cargo: int &#123final&#125
        -isTransformed: boolean
        +Truck(make: String, model: String, engine: Engine, cargo: int)
        +cargo() int
        +isTransformed() boolean
        +transform() void
        +equals(object: Object) boolean
        +hashCode() int
        +toString() String
    }

    class Rental {
        -name: String &#123final&#125
        -vehicles: List~Vehicle~ &#123final&#125
        +Rental(name: String)
        +name() String
        +vehicles() List~Vehicle~
        +addVehicle(vehicle: Vehicle) void
        +addAllVehicles(vehicles: Vehicle...) void
        +transformAllTrucks() void
        +accelerateAllVehicles(valueInKmh: int) void
        +equals(object: Object) boolean
        +hashCode() int
        +toString() String
    }

    class Partner {
        <<interface>>
        +toString() String
    }

    class TravelAgency {
        -name: String &#123final&#125
        -partners: List~Partner~ &#123final&#125
        +TravelAgency(name: String)
        +name() String
        +partners() List~Partner~
        +addPartner(partner: Partner) void
        +equals(object: Object) boolean
        +hashCode() int
        +toString() String
    }

    class RentalTest {
        -rental: Rental
        +setUp() void
        +testTransformAllTrucks() void
        +testAccelerateAllVehicles() void
    }
```

## Hinweis zur Klasse _Rental_

Die Methode `void accelerateAllVehicles(valueInKmh: int)` soll alle Fahrzeuge
der Fahrzeugvermietung um den eingehenden Wert beschleunigen.

## Hinweise zur Klasse _RentalTest_

- Die Lebenszyklus-Methode `void setUp()` soll eine Fahrzeugvermietung samt
  dazugehöriger Fahrzeuge erzeugen
- Die Testmethode `void testTransformAllTrucks()` soll prüfen, ob nach Ausführen
  der Methode `void transformAllTrucks()` der Klasse `Rental` alle Lastwagen in
  Autobots umgewandelt werden und nach erneutem Ausführen wieder
  zurückverwandelt werden
- Die Testmethode `void testAccelerateAllVehicles()` soll prüfen, ob beim
  Ausführen der Methode `void accelerateAllVehicles(valueInKmh: int)` der Klasse
  `Rental` mit einem negativen Wert die Ausnahme `InvalidValueException`
  ausgelöst wird
