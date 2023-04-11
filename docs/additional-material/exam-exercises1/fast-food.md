---
title: Fast Food
description: ''
tags: [oo, enumerations, inheritance, polymorphy, io-streams]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209168965-579ef1d6-1497-42ce-9bc1-8739dbb5555f.png)

## Allgemeine Hinweise
- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse FastFood
- Die Methode `void addRating(rating: int)` soll den Bewertungen (`ratings`) die eingehende Bewertung hinzufügen
- Die Methode `double getAverageRating()` soll die durchschnittliche Bewertung zurückgeben

## Hinweise zur Klasse FastFoodShop
- Der Konstruktor soll die Fast-Food-Liste (`fastFood`) mit Hilfe der Klasse `FoodHelper` initialisieren
- Die Methode `void rateFastFood(fastFood: FastFood, rating: int)` soll dem eingehenden Fast Food die eingehende Bewertung hinzufügen
- Die Methode `Burger getBestRatedBurger()` soll den Burger mit der höchsten Bewertung zurückgeben

## Hinweise zur Klasse FoodHelper
- Die Methode `ArrayList<Food> readFood(file: File)` soll alle Lebensmittel der eingehenden Datei zurückgeben
- Die Methode `void printFood(food: ArrayList<Food>)` soll die eingehenden Lebensmittel auf der Konsole ausgeben
- Die Methode `FoodCategory getFoodCategoryByDescription(description: String)` soll die Lebensmittelkategorie zur eingehenden Beschreibung zurückgeben

## Hinweis zur Klasse Burger
Burger sollen entweder der Lebensmittelkategorie _Gemüse_ oder der Lebensmittelkategorie _Fleisch_ zugeordnet werden.
