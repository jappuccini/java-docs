---
title: Bibliothek
description: ''
tags: [inheritance, polymorphy, exceptions, records, maps]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/212540954-f87dfbd0-05a5-4fac-be2f-5aa7fac8a6fd.png)

## Allgemeine Hinweise
- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden
- Die statische Methode `UUID randomUUID()` der Klasse `UUID` gibt eine zufällig erstellte UUID zurück

## Hinweis zur Klasse EBook
Der Konstruktor soll alle Attribute initialisieren. Für den Fall, dass die eingehende Dateigröße kleiner gleich Null ist, soll die Ausnahme `WrongFileSizeException` ausgelöst werden.

## Hinweise zur Klasse Library
- Die Methode `void addBook(book: Book)` soll der Bücherliste (`books`) das eingehende Buch mit dem Status `verfügbar` hinzufügen
- Die Methode `Book getBookByTitle(title: String)` soll das Buch zum eingehenden Titel zurückgeben
- Die Methode `ArrayList<PaperBook> getPaperBooksByStatus(status: Status)` soll alle gedruckten Bücher zum eingehenden Status zurückgeben
