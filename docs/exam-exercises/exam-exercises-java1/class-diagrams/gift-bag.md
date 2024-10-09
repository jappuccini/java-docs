---
title: Geschenkesack
description: ''
tags: [oo]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
    GiftBag o-- Present
    Present o-- Person

    class GiftBag {
        -presents: List~Present~ &#123final&#125
        +GiftBag()
        +addPresent(present: Present) void
        +getMostExpensivePresent() Present
    }

    class Present {
        -description: String &#123final&#125
        -priceInEuro: double &#123final&#125
        -sender: Person &#123final&#125
        -recipient: Person &#123final&#125
        +Present(description: String, priceInEuro: double, sender: Person, recipient: Person)
    }

    class Person {
        -name: String &#123final&#125
        -age: int &#123final&#125
        -gender: char &#123final&#125
        +Player(name: String, age: int, gender: char )
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse _GiftBag_

- Die Methode `void addPresent(present: present)` soll der Geschenkeliste
  (`presents`) das eingehende Geschenk hinzufügen
- Die Methode `Present getMostExpensivePresent()` soll das teuerste Geschenk
  zurückgeben
