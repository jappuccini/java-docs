---
title: Geschenkesack
description: ''
tags: [oo]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
    GiftBag o-- Present
    Present o-- Person

    class GiftBag {
        -presents List~Present~
        +GiftBag()
        +addPresent(present Present) void
        +getMostExpensivePresent() Present
    }

    class Present {
        -description String
        -priceInEuro double
        -sender Person
        -recipient Person
        +Present(description String, priceInEuro double, sender Person, recipient Person)
    }

    class Person {
        -name String
        -age int
        -gender char
        +Player(name String, age int, gender char )
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse GiftBag

- Die Methode `void addPresent(present: present)` soll der Geschenkeliste (`presents`) das eingehende Geschenk hinzufügen
- Die Methode `Present getMostExpensivePresent()` soll das teuerste Geschenk zurückgeben
