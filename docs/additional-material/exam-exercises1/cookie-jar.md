---
title: Plätzchendose
description: ''
tags: [oo, enumerations, inheritance, polymorphy, io-streams]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm
![image](https://github.com/jappuccini/java-docs/assets/47243617/ff46487f-92ea-4e85-ad4f-0cc1eac6f915)

## Allgemeine Hinweise
- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden
- 
## Hinweis zur Klasse Cookie
Die Methode `ArrayList<Ingredient> getIngredients()` soll alle Zutaten des Teigs zurückgeben.

## Hinweis zur Klasse StuffedCookie
Die Methode `ArrayList<Ingredient> getIngredients()` soll alle Zutaten des Teigs sowie der Füllung zurückgeben.

## Hinweis zur Klasse Recipe
Die Methode `void addIngredient(ingredient: Ingredient)` soll dem Rezept die eingehende Zutat hinzufügen.

## Hinweise zur Klasse CookieJar
- Die Methode `void addCookie(cookie: Cookie)` soll der Plätzchendose das eingehende Plätzchen hinzufügen
- Die Methode `StuffedCookie getStuffedCookie()` soll ein beliebiges gefülltes Plätzchen der Plätzchendose zurückgeben
- Die Methode `Cookie getCookieByName(name: String)` soll ein Plätzchen der Plätzchendose zum eingehenden Namen zurückgeben

## Hinweis zur Klasse IngredientsReader
Die Methode `ArrayList<Ingredient> readIngredients()` soll alle Zutaten der eingehenden Datei auslesen und zurückgeben.

## Beispielhafter Aufbau der Zutatendatei

```
200g Butter
300g Mehl
1 Prise Salz
100g gemahlene Mandeln
150g Zucker
1 Pck. Vanillezucker
2 Eier
```
