---
title: Kassensystem
description: ''
tags: [oo, enumerations, inheritance, polymorphism]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
    Product <|-- Goods : extends
    Item o-- Goods
    ShoppingCart o-- Item
    Goods o-- ClassOfGoods
    Goods --o CashierSystem
    CashierSystem o-- Cashier
    ShoppingCart --o CashierSystem

    class Product {
        -id: int #123;final#125;
        -description: String #123;final#125;
        -unit: String
        -priceInEuro: double
        +Product(id: int, description: String, unit: String, priceInEuro: double)
        +setPriceInEuro(priceInEuro: double) void
    }

    class Goods {
        -classOfGoods: ClassOfGoods #123;final#125;
        +Goods(id: int, description: String, unit: String, priceInEuro: double, classOfGoods: ClassOfGoods)
    }

    class Item {
        -goods: Goods #123;final#125;
        -amount: int
        +Item(goods: Goods, amount: int)
        +setAmount(amount: int) void
        +getSubTotalInEuro() double
    }

    class ShoppingCart {
        -items: List~Item~ #123;final#125;
        +ShoppingCart()
        +createItem(goods: Goods, amount: int) void
        +getTotalInEuro() double
    }

    class ClassOfGoods {
        <<enumeration>>
        BAKERY_PRODUCTS = Backwaren
        DAIRY_PRODUCTS = Milchprodukte
        FRUITS = Obst
        VEGETABLES = Gemüse
        -description: String #123;final#125;
    }

    class CashierSystem {
        -name: String #123;final#125;
        -goods: List~Goods~ #123;final#125;
        -cashiers: List~Cashier~ #123;final#125;
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
        -id: int #123;final#125;
        -name: String #123;final#125;
        +Cashier(name: String, id: int)
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse _Item_

Die Methode `double getSubTotalInEuro()` soll die Zwischensumme als Produkt aus
der Anzahl und dem Preis zurückgeben.

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
