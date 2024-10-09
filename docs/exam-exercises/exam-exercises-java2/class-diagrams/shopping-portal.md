---
title: Einkaufsportal
description: ''
tags: [interfaces, records, inner-classes, generics]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

```mermaid
classDiagram
    Sellable <|.. Product : implements
    ShoppingPortal o-- ShoppingCart~T extends Sellable~
    ShoppingCart *-- Item

    class ShoppingCart~T extends Sellable~ {
        -items: List~Item~ &#123final&#125
        +ShoppingCart()
        +addItem(sellable: T, amount: int) void
        +removeItem(sellable: T) void
        +getTotalInEuro() double
    }

    class Item {
        -sellable: T &#123final&#125
        -amount: int &#123final&#125
        -Item(sellable: T, amount: int)
        +getSubTotalInEuro() double
    }

    class Sellable {
        <<interface>>
        +priceInEuro() double
    }

    class Product {
        <<record>>
        description: String
        priceInEuro: double
    }

    class ShoppingPortal {
        <<record>>
        user: String
        shoppingCart: ShoppingCart~Product~
        +addProductToShoppingCart(product: Product, amount: int) void
        +removeProductFromShoppingCart(product: Product) void
        +clearShoppingCart() void
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse _Item_

Die Methode `double getSubTotalInEuro()` soll die Zwischensumme des
Warenkorbeintrags als Produkt aus dem Produktpreis und der Anzahl zurückgeben.

## Hinweise zur Klasse _ShoppingCart_

- Die Methode `void addItem(sellable: T, amount: int)` soll den Einträgen des
  Warenkorbs (`items`) das eingehende verkäufliche Objekt und die eingehende
  Anzahl als Eintrag hinzufügen
- Die Methode `void removeItem(sellable: T)` soll das eingehende verkäufliche
  Objekt aus den Einträgen des Warenkorbs (`items`) entfernen
- Die Methode `double getTotalInEuro()` soll die Gesamtsumme des Warenkorbs
  zurückgeben

## Hinweise zur Klasse _ShoppingPortal_

- Die Methode `void addProductToShoppingCart(product: Product, amount: int)`
  soll dem Warenkorb (`shoppingCart`) das eingehende Produkt und die eingehende
  Anzahl als Eintrag hinzufügen
- Die Methode `void removeProductFromShoppingCart(product: Product)` soll das
  eingehende Produkt aus dem Warenkorb (`shoppingCart`) entfernen
- Die Methode `void clearShoppingCart()` soll alle Einträge des Warenkorbs
  (`shoppingCart`) entfernen
