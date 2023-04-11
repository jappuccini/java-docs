---
title: UnitTests03
description: ''
---

Erstelle die Klasse `TelephoneBookTest` anhand des abgebildeten Klassendiagramms.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209158772-4fe41693-1aff-49e4-b462-3f95d4c15030.png)

## Hinweise zur Klasse `TelephoneBookTest`
- Die Lebenszyklus-Methode `void setUp()` soll ein Telefonbuch samt dazugehöriger Einträge erzeugen
- Die Testmetode `void testAddEntry()` soll prüfen, ob nach dem Ausführen der Methode `void addEntry(person: Person, telephoneNumber: TelephoneNumber)` mit einer Person, zu der es bereits einen Eintrag im Telefonbuch gibt, die Telefonnummer aktualisiert wurde
- Die Testmethode `void testGetTelephoneNumberByName1()` soll prüfen, ob beim Ausführen der Methode `TelephoneNumber getTelephoneNUmberByName(name: String)` mit einem Namen, zu dem es eine entsprechende Person im Telefonbuch gibt, die dazugehörige Telefonnummer zurückgegeben wird 
- Die Testmethode `void testGetTelephoneNumberByName2()` soll prüfen, ob beim Ausführen der Methode `TelephoneNumber getTelephoneNUmberByName(name: String)` mit einem Namen, zu dem es keine entsprechende Person im Telefonbuch gibt, der Wert `null` zurückgegeben wird 

## Hinweis
Verweden die Klasse `TelephoneBook` aus Übungsaufgabe [Maps01](../maps/maps01.md).
