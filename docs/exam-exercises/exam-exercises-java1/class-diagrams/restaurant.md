---
title: Restaurant
description: ''
tags: [enumerations, lambdas, java-stream-api]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

```mermaid
classDiagram
    Restaurant o-- Dish
    Dish o-- DishType
    Dish o-- NutritionValues

    class Restaurant {
        -name: String #123;final#125;
        -menu: List~Dish~ #123;final#125;
        +Restaurant(name: String)
        +addDish(dish: Dish) void
        +getDishesByType(type: DishType) List~Dish~
        +getHighProteinDishes(minProteinsInG: double) List~Dish~
    }

    class Dish {
        -name: String #123;final#125;
        -priceInEuro: double
        -type: DishType #123;final#125;
        -nutritionValues: NutritionValues #123;final#125;
        +Dish(name: String, type: DishType, nutritionValues: NutritionValues)
    }

    class NutritionValues {
        -carbohydratesInG: double #123;final#125;
        -fatsInG: double #123;final#125;
        -proteinsInG: double #123;final#125;
        +NutritionValues(carbohydratesInG: double, fatsInG: double, proteinsInG: double)
    }

    class DishType {
        <<enumeration>>
        APPETIZER
        MAIN_COURSE
        DESSERT
        DRINK
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Object-Methoden
  dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse _Restaurant_

- Die Methode `void addDish(dish: Dish)` soll dem Menü das eingehende Gericht
  hinzufügen
- Die Methode `List<Dish> getDishesByType(type: DishType)` soll alle Gerichte
  vom eingehenden Typ zurückgeben
- Die Methode `List<Dish> getHighProteinDishes(minProteinsInG: double)` soll
  alle Gerichte zurückgeben, die mindestens über den eingehenden Eiweißwert
  verfügen
