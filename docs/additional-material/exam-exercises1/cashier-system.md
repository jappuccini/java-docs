---
title: Kassensystem
description: ''
tags: [oo, enumerations, inheritance, polymorphy]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
    Product o-- Currency
    Product <|-- Goods
    Item o-- Goods
    ShoppingCart o-- Item
    Goods o-- ClassOfGoods
    CashierSystem o-- Goods
    CashierSystem o-- Cashier
    CashierSystem o-- ShoppingCart

    class Product {
        -id int
        -description String
        -unit String
        -price double
        -currency Currency
        +Product(id int, description String, unit String, price double, currency Currency)
        +setPrice(price double) void
        +setCurrency(currency Currency) void
    }

    class Currency {
        <<enumeration>>
        EURO
        DOLLAR
    }

    class Goods {
        -classOfGoods ClassOfGoods
        +Goods(id int, description String, unit String, price double, currency Currency, classOfGoods ClassOfGoods)
    }

    class Item {
        -goods Goods
        -amount int
        +Item(goods Goods, amount int)
        +setAmount(amount int) void
        +getSubTotal() double
    }

    class ShoppingCart {
        -items ArrayList~Item~
        +ShoppingCart()
        +createItem(goods Goods, amount int) void
        +getTotal() double
    }

    class ClassOfGoods {
        BAKERY_PRODUCTS = Backwaren
        DAIRY_PRODUCTS = Milchprodukte
        FRUITS = Obst
        VEGETABLES = Gemüse
        -description String
    }

    class CashierSystem {
        -name String
        -goods ArrayList~Goods~
        -cashiers ArrayList~Cashier~
        -shoppingCart ShoppingCart
        -cashier Cashier
        +CashierSystem(name String)
        +addGoods(goods Goods) void
        +addCashier(cahier Cashier) void
        +login(id int) void
        +createShoppingCart() void
        +addItem(id int, amount int) void
        +printBon() void
    }

    class Cashier {
        -id int
        -name String
        +Cashier(name String, id int)
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse Item

Die Methode `double getSubTotal()` soll die Zwischensumme gemäß der Formel _Anzahl \* Preis_ zurückgeben

## Hinweise zur Klasse ShoppingCart

- Die Methode `void createItem(goods: Goods, amount: int)` soll den Einträgen des Warenkorbs (`items`) die eingehende Ware und die eingehende Anzahl als Eintrag hinzufügen
- Die Methode `double getTotal()` soll die Gesamtsumme zurückgeben

## Hinweise zur Klasse CashierSystem

- Die Methode `void addGoods(goods: Goods)` soll der Warenliste (`goods`) die eingehende Ware hinzufügen
- Die Methode `void addCashier(cashier: Cashier)` soll der Kassiererliste (`cashiers`) den eingehenden Kassierer hinzufügen
- Die Methode `void login(id: int)` soll den Kassierer zur eingehenden Kassierernummer an der Kasse "registrieren"
- Die Methode `void createShoppingCart()` soll an der Kasse einen neuen Warenkorb erstellen
- Die Methode `void addItem(id: int, amount: int)` soll dem Warenkorb (`shoppingCart`) anhand der eingehenden Produktnummer und anhand der eingehenden Anzahl
  einen neuen Warenkorbeintrag hinzufügen
- Die Methode `void printBon()` soll alle relevanten Informationen zum Warenkorb auf der Konsole ausgeben
