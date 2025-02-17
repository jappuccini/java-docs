---
title: Spielfiguren
description: ''
tags: [interfaces, comparators, records, maps, optionals, java-stream-api]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

```mermaid
classDiagram
   Character o-- Race
   Character o-- Profession
   CharacterQueries --o Character
   Comparable~T~ <|.. Character: implements
   class Race {
      <<enumeration>>
      HUMAN, ORC, DWARF,...
   }
   class Profession {
      <<enumeration>>
      HUNTER, MAGE, WARRIOR,...
   }
   class Character {
      <<record>>
      name: String
      race: Race
      profession: Profession
      level: int
      experiencePoints: int
      +compareTo(other: Character) int
   }
   class Comparable~T~ {
      <<interface>>
      +compareTo(other: T) int
   }
   class CharacterQueries {
      <<record>>
      characters: List~Character~
      +getAnyOrcHunter() Optional~Character~
      +getNumberOfCharactersByName(name: String) long
      +getAverageExperiencePointsOfAllMages() OptionalDouble
      +getUniqueCharacterNames() List~String~
      +getCharactersByRace() Map~Race&sbquo; List~Character~~
   }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse _CharacterQueries_

- Die Methode `Optional<Character> getAnyOrcHunter()` soll einen beliebigen
  Ork-Jäger zurückgeben
- Die Methode `long getNumberOfCharactersByName(name: String)` soll die Anzahl
  aller Spielfiguren zum eingehenden Namen zurückgeben
- Die Methode `OptionalDouble getAverageExperiencePointsOfAllMages()` soll die
  durchschnittlichen Erfahrungspunkte aller Magier zurückgeben
- Die Methode `List<String> getUniqueCharacterNames()` soll die Namen aller
  Spielfiguren ohne Dopplungen absteigend sortiert zurückgeben
- Die Methode `Map<Race, List<Character>> getCharactersByRace()` soll alle
  Spielfiguren gruppiert nach der Rasse zurückgeben
