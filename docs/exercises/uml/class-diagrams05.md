---
title: ClassDiagrams05
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Erstelle die Aufzählungen `SkatCardColor` und `SkatCardValue` sowie die
  Klassen `SkatCard` und `SkatCardDeck` anhand des abgebildeten Klassendiagramms
- Erstelle eine ausführbare Klasse, welche ein Skatblatt erzeugt, mischt und
  auf der Konsole ausgibt

## Klassendiagramm

```mermaid
classDiagram
     SkatCard o-- SkatCardColor
     SkatCard o-- SkatCardValue
     SkatCardDeck o-- SkatCard

    class SkatCardValue {
        <<enumeration>>
        SEVEN = Seven, 7
        EIGHT = Eight, 8
        NINE = Nine, 9
        TEN = Ten, 10
        JACK, Jack, 2
        CHECKERS = Checkers, 3
        KING = King, 4
        ACE = Ace, 11
        -description String
        -value int
    }

    class SkatCardColor {
        <<enumeration>>
        DIAMONDS = Diamonds
        HEARTS = Hearts
        SPADE = Spade
        CLUBS = Clubs
        -description String
    }

    class SkatCard {
        -color SkatCardColor
        -value SkatCardValue
        +SkatCard(color SkatCardColor, value SkatCardValue)
        +getColor() SkatCardColor
        +getValue() SkatCardValue
        +getCardDescription() String
    }

    class SkatCardDeck {
        -skatCards ArrayList~SkatCard~
        +SkatCardDeck()
        +shuffleSkatCards() void
        +getSkatCards() ArrayList~SkatCard~
    }
```

## Hinweise zur Klasse SkatCardDeck

- Der Konstruktor soll ein Skatblatt, bestehend aus 32 Karten, erzeugen
- Die Methode `void shuffleSkatCards()` soll das Skatblatt mischen

## Konsolenausgabe

```console
Kreuz König
Pik 10
Kreuz 9
Pik 9
Kreuz Bube
Pik Ass
Herz Bube
Karo Bube
Pik 8
Karo Dame
…
```

## Hinweis

Die statische Methode `T[] values()` einer Aufzählung gibt alle
Aufzählungskonstanten der Aufzählung als Feld zurück.

<Exercise pullRequest="40" branchSuffix="class-diagrams/05" />
