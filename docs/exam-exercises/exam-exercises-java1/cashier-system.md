---
title: Kassensystem
description: ''
tags: [oo, enumerations, inheritance, polymorphy]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
    Product <|-- Goods
    Item o-- Goods
    ShoppingCart o-- Item
    Goods o-- ClassOfGoods
    CashierSystem o-- Goods
    CashierSystem o-- Cashier
    CashierSystem o-- ShoppingCart

    class Product {
        -id: int
        -description: String
        -unit: String
        -priceInEuro: double
        +Product(id: int, description: String, unit: String, priceInEuro: double)
        +setPriceInEuro(priceInEuro: double) void
    }

    class Goods {
        -classOfGoods: ClassOfGoods
        +Goods(id: int, description: String, unit: String, priceInEuro: double, classOfGoods: ClassOfGoods)
    }

    class Item {
        -goods: Goods
        -amount: int
        +Item(goods: Goods, amount: int)
        +setAmount(amount: int) void
        +getSubTotalInEuro() double
    }

    class ShoppingCart {
        -items: List~Item~
        +ShoppingCart()
        +createItem(goods: Goods, amount: int) void
        +getTotalInEuro() double
    }

    class ClassOfGoods {
        BAKERY_PRODUCTS = Backwaren
        DAIRY_PRODUCTS = Milchprodukte
        FRUITS = Obst
        VEGETABLES = Gemüse
        -description: String
    }

    class CashierSystem {
        -name: String
        -goods: List~Goods~
        -cashiers: List~Cashier~
        -shoppingCart: ShoppingCart
        -cashier: Cashier
        +CashierSystem(name: String)
        +addGoods(goods: Goods) void
        +addCashier(cahier: Cashier) void
        +login(id: int) void
        +createShoppingCart() void
        +addItem(id: int, amount: int) void
        +printBon() void
    }

    class Cashier {
        -id: int
        -name: String
        +Cashier(name: String, id: int)
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse _Item_

Die Methode `double getSubTotalInEuro()` soll die Zwischensumme gemäß der Formel
_Anzahl \* Preis_ zurückgeben

## Hinweise zur Klasse _ShoppingCart_

- Die Methode `void createItem(goods: Goods, amount: int)` soll den Einträgen
  des Warenkorbs (`items`) die eingehende Ware und die eingehende Anzahl als
  Eintrag hinzufügen
- Die Methode `double getTotalInEuro()` soll die Gesamtsumme zurückgeben

## Hinweise zur Klasse _CashierSystem_

- Die Methode `void addGoods(goods: Goods)` soll der Warenliste (`goods`) die
  eingehende Ware hinzufügen
- Die Methode `void addCashier(cashier: Cashier)` soll der Kassiererliste
  (`cashiers`) den eingehenden Kassierer hinzufügen
- Die Methode `void login(id: int)` soll den Kassierer zur eingehenden
  Kassierernummer an der Kasse "registrieren"
- Die Methode `void createShoppingCart()` soll an der Kasse einen neuen
  Warenkorb erstellen
- Die Methode `void addItem(id: int, amount: int)` soll dem Warenkorb
  (`shoppingCart`) anhand der eingehenden Produktnummer und anhand der
  eingehenden Anzahl einen neuen Warenkorbeintrag hinzufügen
- Die Methode `void printBon()` soll alle relevanten Informationen zum Warenkorb
  auf der Konsole ausgeben
