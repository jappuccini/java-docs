---
title: Weihnachtsbaum
description: ''
tags: [oo, inheritance, polymorphy]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
    Candle <|-- ElectricCandle : extends
    ChristmasTree o-- Candle

    class ChristmasTree {
        -type: String &#123final&#125
        -sizeInM: double &#123final&#125
        -candles: List~Candle~ &#123final&#125
        +ChristmasTree(type: String, sizeInM: double)
        +addCandle(candle: Candle) void
        +lightChristmasTree() void
        +getNumberOfElectricCandles() int

    }

    class Candle {
        #isBurning: boolean
        -colour: String &#123final&#125
        +Candle(colour: String)
        +lightACandle() void
        +turnOffACandle() void
    }

    class ElectricCandle {
        -powerInPercent: int
        +ElectricCandle(colour: String)
        +lightACandle() void
        +recharge() void
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse _ChristmasTree_

- Die Methode `void addCandle(candle: Candle)` soll der Kerzenliste (`candles`)
  die eingehende Kerze hinzufügen
- Die Methode `void lightChristmasTree()` soll alle Kerzen "entzünden"
- Die Methode `int getNumberOfElectricCandles()` soll die Anzahl elektrischer
  Kerzen zurückgeben

## Hinweise zur Klasse _Candle_

- Die Methode `void lightACandle()` soll die Kerze "entzünden"
- Die Methode `void turnOffACandle()` soll die Kerze "ausmachen"

## Hinweise zur Klasse _ElectricCandle_

- Der Konstruktor soll die Energie (`powerInPercent`) auf den Wert _100_ setzen
- Die Methode `void lightACandle()` soll die elektrische Kerze "entzünden", wenn
  diese noch über Energie verfügt und die Energie um den Wert _10_ reduzieren
- Die Methode `void recharge()` soll die Energie der elektrische Kerze wieder
  auf den Wert _100_ setzen
