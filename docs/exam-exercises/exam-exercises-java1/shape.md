---
title: Geometrische Form
description: ''
tags: [oo, inheritance, polymorphy, io-streams]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
    ShapeReader o-- Shape
    Shape <|-- Circle
    Shape <|-- Rectangle
    Rectangle <|-- Square

    class ShapeReader {
        -shapes List~Shape~
        +ShapeReader(file File)
        +getCircles() List~Circle~
        +getShapesWithMinArea(minAreaInCM2 double) List~Shape~
    }

    class Shape {
        +getAreaInCM2() double
        +getCircumferenceInCM() double
    }

    class Circle {
        -rInCM double
        +Circle(rInCM double)
        +getAreaInCM2() double
        +getCircumferenceInCM() double
    }

    class Rectangle {
        -aInCM double
        -bInCM double
        +Rectangle(aInCM double, bInCM double)
        +getAreaInCM2() double
        +getCircumferenceInCM() double
    }

    class Square {
        +Square(aInCM double)
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden
- Die statische Konstante `PI` der Klasse `Math` stellt die Kreiszahl Pi dar

## Hinweise zur Klasse Shape

- Die Methode `double getAreaInCM2()` soll den Wert _0_ zurückgeben
- Die Methode `double getCircumferenceInCM()` soll den Wert _0_ zurückgeben

## Hinweise zur Klasse Circle

- Die Methode `double getAreaInCM2()` soll den Flächeninhalt gemäß der Formel
  _Pi * r * r_ berechnen und zurückgeben
- Die Methode `double getCircumferenceInCM()` soll den Umfang gemäß der Formel
  _2 * Pi * r_ berechnen und zurückgeben

## Hinweise zur Klasse Rectangle

- Die Methode `double getAreaInCM2()` soll den Flächeninhalt gemäß der Formel
  _a \* b_ berechnen und zurückgeben
- Die Methode `double getCircumferenceInCM()` soll den Umfang gemäß der Formel
  _2 * a + 2 * b_ berechnen und zurückgeben

## Hinweise zur Klasse ShapeReader

- Der Konstruktor soll der Formenliste (`shapes`) alle Formen der eingehenden
  Datei hinzufügen
- Die Methode `List<Circle> getCircles()` soll alle Kreise der Formenliste
  (`shapes`) zurückgeben
- Die Methode `List<Shape> getShapesWithMinArea(minAreaInCM2: double)` soll alle
  Formen der Formenliste (`shapes`) zurückgeben, die mindestens den eingehenden
  Flächeninhalt aufweisen

## Beispielhafter Aufbau der Formendatei

```
Circle;4
Square;5
Rectangle;3;4
Rectangle;1;7
Circle;2
Circle;3
```
