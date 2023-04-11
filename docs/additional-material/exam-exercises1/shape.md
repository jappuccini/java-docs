---
title: Geometrische Form
description: ''
tags: [oo, inheritance, polymorphy, io-streams]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209169202-d76dfb78-8b31-45c7-b7e4-f99cb50aca70.png)

## Allgemeine Hinweise
- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden
- Die statische Konstante `PI` der Klasse `Math` stellt die Kreiszahl Pi dar

## Hinweise zur Klasse Shape
- Die Methode `double getArea()` soll den Wert _0_ zurückgeben
- Die Methode `double getCircumference()` soll den Wert _0_ zurückgeben

## Hinweise zur Klasse Circle
- Die Methode `double getArea()` soll den Flächeninhalt gemäß der Formel _Pi * r * r_ berechnen und zurückgeben
- Die Methode `double getCircumference()` soll den Umfang gemäß der Formel _2 * Pi * r_ berechnen und zurückgeben

## Hinweise zur Klasse Rectangle
- Die Methode `double getArea()` soll den Flächeninhalt gemäß der Formel _a * b_ berechnen und zurückgeben
- Die Methode `double getCircumference()` soll den Umfang gemäß der Formel _2 * a + 2 * b_ berechnen und zurückgeben

## Hinweise zur Klasse ShapeReader
- Der Konstruktor soll der Formenliste (`shapes`) alle Formen der eingehenden Formenliste hinzufügen
- Die Methode `ArrayList<Circle> getCircles()` soll alle Kreise der Formenliste (`shapes`) zurückgeben
- Die Methode `ArrayList<Shape> getShapesWithMinArea(minArea: double)` soll alle Formen der Formenliste (`shapes`) zurückgeben, die mindestens den eingehenden
Flächeninhalt aufweisen
