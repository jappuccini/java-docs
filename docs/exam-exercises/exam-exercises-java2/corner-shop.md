---
title: Tante-Emma-Laden
description: ''
tags:
  [inheritance, polymorphy, interfaces, comparators, exceptions, records, maps]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

```mermaid
classDiagram
    Product <|-- Goods
    CornerShop o-- Goods
    Comparable~T~ <|.. Goods
    Goods o-- ClassOfGoods

    class Product {
        <<abstract>>
        -description String
        -price double
        -currency String
        +Product(description String, price double, currency String)
    }

    class Goods {
        -classOfGoods ClassOfGoods
        -unit String
        +Goods(description String, price double, currency String, classOfGoods ClassOfGoods, unit String)
        +compareTo(other Goods) int
    }

    class Comparable~T~ {
        <<interface>>
        +compareTo(t T) int
    }

    class CornerShop {
        <<record>>
        -name String
        -store Map~Goods&#44&#160Integer~
        +getAmountByDescription(description String) Optional~Integer~
        +buyGoods(goods Goods, amount int) void
        +sellGoods(goods Goods, amount int) void
    }

    class ClassOfGoods {
        <<enumeration>>
        BAKERY_PRODUCTS = Backwaren
        DAIRY_PRODUCTS = Milchprodukte
        FRUITS = Obst
        VEGETABLES = Gemüse
        -description String
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse Goods

Die Methode `int compareTo(other: Goods)` soll so implementiert werden, dass damit Waren aufsteigend nach ihrer Beschreibung sortiert werden können.

## Hinweise zur Klasse CornerShop

- Die Methode `Optional<Integer> getAmountByDescription(description: String)` soll die Anzahl Waren zur eingehenden Warenbeschreibung als Optional zurückgeben
- Die Methode `void buyGoods(goods: Goods, amount: int)` soll die eingehende Ware im Lager (`store`) um die eingehende Anzahl erhöhen
- Die Methode `void sellGoods(goods: Goods, amount: int)` soll die eingehende Ware im Lager (`store`) um die eingehende Anzahl reduzieren. Für den Fall, dass keine
  ausreichende Anzahl an Waren vorhanden ist, soll die Ausnahme `OutOfStockException` ausgelöst werden
