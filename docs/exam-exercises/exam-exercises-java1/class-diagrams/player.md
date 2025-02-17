---
title: Spieler
description: ''
tags: [oo, enumerations, io-streams]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
   Player o-- GameToken
   GameToken o-- GameTokenColor
   GameToken o-- GameTokenType
   class Player {
      -name: String #123;final#125;
      -gameTokens: List~GameToken~ #123;final#125;
      +GameToken(name: String, gameTokens: List~GameToken~)
      +addGameToken(gameToken: GameToken) void
   }
   class GameToken {
      -type: GameTokenType #123;final#125;
      -color: GameTokenColor #123;final#125;
      -value: int #123;final#125;
      +GameToken(type: GameTokenType, color: GameTokenColor, value: int)
   }
   class GameTokenColor {
      <<enumeration>>
      RED, BLUE, GREEN, WHITE, BLACK,...
   }
   class GameTokenType {
      <<enumeration>>
      KNIGHT, PIRATE, VIKING,...
   }
   class GameTokens {
      +getGameTokens(file: File) List~gameToken~$
   }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse _Player_

Die Methode `void addGameToken(gameToken: gameToken)` soll den Spielfiguren die
eingehene Spielfigur hinzufügen.

## Hinweis zur Klasse _GameTokens_

Die Methode `List<GameToken> getGameTokens(file: File)` soll alle Spielfiguren
der eingehenden Datei in einer zufälligen Reihenfolge zurückgeben.

## Beispielhafter Aufbau der Spielfigurendatei

```
KNIGHT;RED;3
PIRATE;BLUE;2
PIRATE;GREEN;4
VIKING;WHITE;1
```
