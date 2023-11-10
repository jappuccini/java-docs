---
title: Smartphone-Shop
description: ''
tags: [records, maps, optionals, java-stream-api]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

```mermaid
classDiagram
    Phone o-- ConnectionType
    Phone o-- Brand
    PhoneStore o-- Phone

    class ConnectionType {
        <<enumeration>>
        USB_C = USB C, true
        USB_MICRO = USB Micro, false
        THUNDERBOLT = Thunderbolt, true
        -description: String &#123final&#125
        -isModern: boolean &#123final&#125
    }

    class Brand {
        <<enumeration>>
        SAMSUNG
        APPLE
        HUAWEI
    }

    class Phone {
        <<record>>
        description: String
        brand: Brand
        conncetionType: ConnectionType
        numberOfCameras: int
        batteryCapacityInMAh: int
        cpuPowerInGHz: double
        priceInEuro: double
    }

    class PhoneStore {
        <<record>>
        phones: List~Phone~
        +query1() List~Phone~
        +query2() OptionalDouble
        +query3(maxPriceInEuro: double) List~Phone~
        +query4() Map~Phone, String~
        +query5() Map~ConnectionTyp&sbquo; List~Phone~~
    }
```

## Hinweise zur Klasse _PhoneStore_

- Die Methode `List<Phone> query1()` soll die drei leistungsstärksten
  Smartphones mit 3 Kameras der Marke Huawei absteigend nach dem Preis
  zurückgeben
- Die Methode `OptionalDouble query2()` soll die durchschnittliche Anzahl
  Kameras aller Smartphones zurückgeben, die eine Akkukapazität von 2500 mAh
  oder mehr haben
- Die Methode `List<Phone> query3(maxPriceInEuro: double)` soll alle Smartphones
  aufsteigend nach Preis zurückgeben, die den eingehenden Höchstpreis nicht
  überschreiten, einen modernen Anschlusstyp haben und weniger als 2,4 GHz
  Leistung besitzen
- Die Methode `Map<Phone, String> query4()` soll jedes Smartphone mit der
  zusammengesetzten Zeichenkette aus Marke und Anschlusstyp zurückgeben
- Die Methode `Map<ConnectionType, Phone> query4()` soll alle Smartphones
  gruppiert nach dem Anschlusstyp zurückgeben
