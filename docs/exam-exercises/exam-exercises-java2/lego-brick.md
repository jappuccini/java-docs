---
title: Lego-Baustein
description: ''
tags: [inheritance, polymorphy, interfaces, comparators]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

```mermaid
classDiagram
    Lego <|-- LegoBrick
    LegoBrick <|-- LegoBrick2x2x2
    LegoBrick <|-- LegoBrick4x2x1
    Comparator~LegoBrick~ <|.. LegoBrickVolumeComparator

    class Lego {
        <<abstract>>
        -id: int &#123final&#125
        +Lego(id: int)
    }

    class LegoBrick {
        <<abstract>>
        -dimensions: int[3] &#123final&#125
        -color: String &#123final&#125
        +LegoBrick(id: int, dimensions: int[3], color: String)
    }

    class LegoBrick2x2x2 {
        +LegoBrick2x2x2(id: int, color: String)
    }

    class LegoBrick4x2x1 {
        +LegoBrick4x2x1(id: int, color: String)
    }

    class Comparator~LegoBrick~ {
        <<interface>>
        +compare(o1: LegoBrick, o2: LegoBrick) int
    }

    class LegoBrickVolumeComparator {
        +compare(legoBrick1: LegoBrick, legoBrick2: LegoBrick) int
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse _LegoBrickVolumeComparator_

Die Methode `int compare(legoBrick1: LegoBrick, legoBrick2: LegoBrick)` soll so
implementiert werden, dass damit Lego-Bausteine aufsteigend nach ihrem Volumen
sortiert werden können.
