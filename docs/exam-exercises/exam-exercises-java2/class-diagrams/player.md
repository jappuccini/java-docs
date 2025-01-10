---
title: Kartenspieler
description: ''
tags: [exceptions, records, maps, optionals]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

```mermaid
classDiagram

    Player o-- Card

    class Card {
        <<record>>
        description: String
        costs: int
        power: int
    }

    class Player {
        -name: String #123;final#125;
        -handCards: List~Card~ #123;final#125;
        -playedCards: Map~Card, Integer~ #123;final#125;
        -actionPoints: int
        +Player(name: String, handCards: List~Card~, playedCards: Map~Card, Integer~)
        +getActionPoints() int
        +getHandCards() List~Card~
        +getName() String
        +getPlayedCards() Map~Card, Integer~
        +getMostPowerfulCardByRow(row: int) Optional~Card~
        +playCard(card: Card, row: int) void
        +setActionPoints(int: actionPoints) void
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse _Player_

- Die Schlüssel-Werte-Paare des Assoziativspeichers beinhalten als Schlüssel die
  ausgespielten Karten des Spielers sowie als Wert deren Reihe
- Die Methode `void playCard(card: Card, row: int)` soll die eingehende Karte
  ausspielen. Beim Ausspielen einer Karte soll diese aus den Handkarten entfernt
  und den ausgespielten Karten hinzugefügt werden. Zudem sollen die
  Aktionspunkte des Spielers um die Kosten der Karte reduziert werden. Für den
  Fall, dass die Karte nicht Teil der Handkarten ist, soll die Ausnahme
  `CardNotFoundException` ausgelöst werden und für den Fall, dass die
  Aktionspunkte des Spielers nicht ausreichen, die Ausnahme
  `NotEnoughActionPointsException`
- Die Methode `Optional<Card> getMostPowerfulCardByRow(row: int)` soll die
  stärkste ausgespielte Karte der eingehenden Reihe zurückgeben
