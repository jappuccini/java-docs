---
title: Fast Food
description: ''
tags: [oo, enumerations, inheritance, polymorphy, io-streams]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm
![image](https://github.com/jappuccini/java-docs/assets/47243617/cc4faaf3-3301-441b-bd00-4d487265b4a7)

## Allgemeine Hinweise
- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse FastFood
- Die Methode `void addRating(rating: int)` soll den Bewertungen (`ratings`) die eingehende Bewertung hinzufügen
- Die Methode `double getAverageRating()` soll die durchschnittliche Bewertung zurückgeben

## Hinweise zur Klasse FastFoodShop
- Der Konstruktor soll die Fast-Food-Liste (`fastFood`) mit Hilfe der Klasse `FoodHelper` initialisieren
- Die Methode `void addFastFood(fastFood: FastFood)` soll das eingehende Fast Food zum Sortiment hinzufügen
- Die Methode `void rateFastFood(fastFood: FastFood, rating: int)` soll dem eingehenden Fast Food die eingehende Bewertung hinzufügen
- Die Methode `Burger getBestRatedBurger()` soll den Burger mit der höchsten Bewertung zurückgeben
