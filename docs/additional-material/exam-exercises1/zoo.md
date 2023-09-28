---
title: Zoo
description: ''
tags: [oo, enumerations, inheritance, polymorphy]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
    Zoo o-- Animal
    Animal <|-- Mammal
    Animal <|-- Bird
    Animal <|-- Fish

    class Zoo {
        -name String
        -animals ArrayList~Animal~
        +Zoo(name String, animals ArrayList~Animal~)
        +addAnimal(animal Animal) void
        +getBiggestAnimal() Animal
        +getFishesByColor(color String) ArrayList~Fish~
    }

    class Animal {
        -description String
        -sizeInM double
        -weigthInKG double
        +Animal(description String, sizeInM double, weigthInKG double)
    }

    class Mammal {
        +Mammal(description String, sizeInM double, weigthInKG double)
        +suckle() void
    }

    class Bird {
        +Bird(description String, sizeInM double, weigthInKG double)
        +fly() void
    }

    class Fish {
        +Fish(description String, sizeInM double, weigthInKG double)
        +swim() void
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse Bird

Die Methode `void fly()` soll die Zeichenkette _flatter, flatter_ ausgeben.

## Hinweis zur Klasse Mammal

Die Methode `void suckle()` soll die Zeichenkette _saug, saug_ ausgeben.

## Hinweis zur Klasse Fish

Die Methode `void swim()` soll die Zeichenkette _schwimm, schwimm_ ausgeben.

## Hinweise zur Klasse Zoo

- Die Methode `void addAnimal(animal: Animal)` soll dem Zoo das eingehende Tier hinzufügen
- Die Methode `Animal getBiggestAnimal()` soll das größte Tier des Zoos zurückgeben
- Die Methode `ArrayList<Fish> getFishesByColor(color: String)` soll alle Fische des Zoos zur eingehenden Farbe zurückgeben
