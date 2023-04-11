---
title: UnitTests02
description: ''
---

Erstelle die Klasse `RentalTest` und erweitere die Klasse `Rental` aus Übungsaufgabe [Exceptions01](../exceptions/exceptions01.md) anhand des abgebildeten Klassendiagramms.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209158670-4f8867ce-fbb1-4a4e-b842-f47c1b4038df.png)

## Hinweis zur Klasse Rental
Die Methode `void accelerateAllVehicles(value: int)` soll alle Fahrzeuge der Fahrzeugvermietung um den eingehenden Wert beschleunigen.

## Hinweise zur Klasse RentalTest
- Die Lebenszyklus-Methode `void setUp()` soll eine Fahrzeugvermietung samt dazugehöriger Fahrzeuge erzeugen
- Die Testmethode `void testTransformAllTrucks()` soll prüfen, ob nach Ausführen der Methode `void transformAllTrucks()` der Klasse `Rental` alle Lastwagen in Autobots umgewandelt werden und nach erneutem Ausführen wieder zurückverwandelt werden
- Die Testmethode `void testAccelerateAllVehicles(int)` soll prüfen, ob beim Ausführen der Methode `void accelerateAllVehicles(value: int)` der Klasse `Rental` mit einem negativen Wert die Ausnahme `InvalidValueException` ausgelöst wird
