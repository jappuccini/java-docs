---
title: Raumstation
description: ''
tags: [exceptions, records, maps, optionals]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

![image](https://user-images.githubusercontent.com/47243617/212030022-79dfab78-9aec-4790-a039-4ef555bbb65c.png)

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse SpaceStation

- Die Methode `void land(bayNumber: Integer, spaceFighter: SpaceFighter)` soll den eingehenden Sternenjäger in der Bucht mit der eingehenden Buchtnummer landen lassen.
  Für den Fall, dass der eingehende Sternenjäger bereits gelandet ist (also bereits eine Bucht belegt), soll die Ausnahme `SpaceFighterAlreadyLandedException` ausgelöst
  werden und für den Fall, dass die Bucht bereits belegt ist, die Ausnahme `BayAlreadyLoadedException`
- Die Methode `SpaceFighter getFastestSpaceFighter()` soll den schnellsten Sternenjäger der Raumstation zurückgeben
