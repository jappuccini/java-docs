---
title: Tiefgarage
description: ''
tags: [oo, inheritance, polymorphy]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm
![image](https://github.com/jappuccini/java-docs/assets/47243617/0ff1ca1c-3529-4c36-a180-5e76b9020929)

## Allgemeine Hinweise
- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse ParkingGarage
- Die Methode `String parkIn(car: Car, parkingSpotNumber: int)` soll das eingehende Fahrzeug auf dem Parkplatz mit der eingehenden Parkplatznummer "parken", falls dieser frei ist
- Die Methode `String parkOut(car: Car)` soll das eingehende Auto "ausparken", falls dieses in der Tiefgarage steht
- Die Methode `int getNextFreeParkingSpotNumber()` soll die Nummer des nächsten freien Parkplatzes zurückgeben
