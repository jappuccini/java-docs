---
title: Tiefgarage
description: ''
tags: [oo, inheritance, polymorphy]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209169139-a04aaf76-269a-4216-8e9e-c9e0aa03d61e.png)

## Allgemeine Hinweise
- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse ParkingGarage
- Die Methode `boolean parkIn(car: Car, parkingSpotNumber: int)` soll das eingehende Fahrzeug auf dem Parkplatz mit der eingehenden Parkplatznummer "parken", falls dieser
frei ist. In diesem Fall soll der Wert `true` zurückgegeben werden, andernfalls der Wert `false`
- Die Methode `boolean parkOut(car: Car)` soll das eingehende Auto "ausparken", falls dieses in der Tiefgarage steht. In diesem Fall soll der Wert `true` zurückgegeben
werden, andernfalls der Wert `false`
- Die Methode `int getNextFreeParkingSpotNumber()` soll die Nummer des nächsten freien Parkplatzes zurückgeben
