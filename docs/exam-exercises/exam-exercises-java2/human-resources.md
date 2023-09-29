---
title: Personalverwaltung
description: ''
tags: [exceptions, records, maps]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

![image](https://user-images.githubusercontent.com/47243617/212029467-d88f9b15-2314-49e5-a6f2-2027cefbd5d7.png)

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse HumanResources

- Die Methode `void addTelephoneNumber(telephoneNumber: TelephoneNumber, person: Person)` soll dem Telefonbuch (`telephoneBook`) die eingehende Telefonnummer als Schlüssel
  sowie die eingehende Person als Wert hinzufügen
- Die Methode `void addStaff(person: Person)` soll der Personalliste (`staff`) die eingehende Person hinzufügen. Für den Fall, dass diese Person bereits in der
  Personalliste vorhanden ist, soll die Ausnahme `DuplicateException` ausgelöst werden
- Die Methode `ArrayList<TelephoneNumber> getTelephoneNumbersByPersonId(id: int)` soll alle Telefonnummern zur eingehenden Personennummer zurückgeben
