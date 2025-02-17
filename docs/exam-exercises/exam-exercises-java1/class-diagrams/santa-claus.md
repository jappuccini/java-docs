---
title: Weihnachtsmann
description: ''
tags: [oo, inheritance, polymorphism]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
   Wrappable <|.. Present: implements
   Present <|-- Toy: extends
   Present <|-- Book: extends
   SantaClaus o-- Present
   class Wrappable {
      <<interface>>
      getDescription() String
      wrap() void
      unwrap() void
   }
   class Present {
      <<abstract>>
      -isWrapped: boolean
      +wrap() void
      +unwrap() void
   }
   class Book {
      -title: String #123;final#125;
      -author: String #123;final#125;
      +Book(title: String, author: String)
      +getDescription() String
   }
   class Toy {
      -description: String #123;final#125;
      -priceInEuro: double #123;final#125;
      +Toy(description: String, priceInEuro: double)
   }
   class SantaClaus {
      -presents: List~Present~ #123;final#125;
      +SantaClaus()
      +addPresent(present: Present) void
      +wrapAllPresents() void
      +getNumberOfToys() int
   }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse _Present_

- Die Methode `void wrap()` soll das Geschenk einpacken
- Die Methode `void unwrap()` soll das Geschenk auspacken

## Hinweis zur Klasse _Book_

Die Methode `String getDescription()` soll die Beschreibung in der Form _[Titel]
[Autor]_ zurückgeben

## Hinweise zur Klasse _SantaClaus_

- Die Methode `void addPresent(present: Present)` soll der Geschenkeliste das
  eingehende Geschenk hinzufügen
- Die Methode `int getNumberOfToys()` soll die Anzahl Spielzeuge in der
  Geschenkeliste zurückgeben
- Die Methode `void wrapAllPresents()` soll alle Geschenke der Geschenkeliste
  einpacken
