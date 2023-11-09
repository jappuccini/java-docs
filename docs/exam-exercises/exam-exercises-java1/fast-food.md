---
title: Fast Food
description: ''
tags: [oo, enumerations, inheritance, polymorphy]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
    Food o-- FoodCategory
    Food <|-- FastFood
    FastFood <|-- Burger
    FastFoodShop o-- FastFood

    class FoodCategory {
        <<enumeration>>
        BEVERAGES = Getränke, 1
        VEGETABLES = Gemüse, 2
        FRUITS = Obst, 2
        GRAIN_PRODUCTS = Getreideprodukte, 3
        POTATOES = Kartoffeln, 3
        DAIRY_PRODUCTS = Milchprodukte, 4
        MEAT = Fleisch, 4
        FISH = Fisch, 4
        EGGS = Eier, 4
        FATS_AND_OILS = Fette und Öle, 5
        SWEETS = Süßigkeiten, 6
        -description: String
        -points: int
    }

    class Food {
        -name: String
        -foodCategory: FoodCategory
        -calorificValueInKcal: double
        +Food(name: String, foodCategory: FoodCategory, calorificValueInKcal: double)
    }

    class FastFood {
        -isVegetarian: boolean
        -ratings: List~Integer~
        +FastFood(name: String, foodCategory: FoodCategory, calorificValueInKcal: double, isVegetarian: boolean)
        +addRating(rating: int) void
        +getAverageRating() double
    }

    class Burger {
        +Burger(name: String, calorificValueInKcal: double, isVegetarian: boolean)
    }

    class FastFoodShop {
        -name: String
        -fastFood: List~FastFood~
        +FastFoodShop(name: String)
        +addFastFood(fastFood: FastFood) void
        +rateFastFood(fastFood: FastFood, rating: int) void
        +getBestRatedBurger() Burger
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse _FastFood_

- Die Methode `void addRating(rating: int)` soll den Bewertungen (`ratings`) die
  eingehende Bewertung hinzufügen
- Die Methode `double getAverageRating()` soll die durchschnittliche Bewertung
  zurückgeben

## Hinweise zur Klasse _FastFoodShop_

- Die Methode `void addFastFood(fastFood: FastFood)` soll das eingehende Fast
  Food zum Sortiment hinzufügen
- Die Methode `void rateFastFood(fastFood: FastFood, rating: int)` soll dem
  eingehenden Fast Food die eingehende Bewertung hinzufügen
- Die Methode `Burger getBestRatedBurger()` soll den Burger mit der höchsten
  Bewertung zurückgeben
