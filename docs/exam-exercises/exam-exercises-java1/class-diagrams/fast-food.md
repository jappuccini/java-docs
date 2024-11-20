---
title: Fast Food
description: ''
tags: [oo, enumerations, inheritance, polymorphism]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
    FoodCategory --o Food
    Food <|-- FastFood : extends
    FastFood <|-- Burger : extends
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
        -description: String #123;final#125;
        -points: int #123;final#125;
    }

    class Food {
        -name: String #123;final#125;
        -foodCategory: FoodCategory #123;final#125;
        -calorificValueInKcal: double #123;final#125;
        +Food(name: String, foodCategory: FoodCategory, calorificValueInKcal: double)
    }

    class FastFood {
        -isVegetarian: boolean #123;final#125;
        -ratings: List~Integer~ #123;final#125;
        +FastFood(name: String, foodCategory: FoodCategory, calorificValueInKcal: double, isVegetarian: boolean)
        +addRating(rating: int) void
        +getAverageRating() double
    }

    class Burger {
        +Burger(name: String, calorificValueInKcal: double, isVegetarian: boolean)
    }

    class FastFoodShop {
        -name: String #123;final#125;
        -fastFood: List~FastFood~ #123;final#125;
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
