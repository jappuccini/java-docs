---
title: UnitTests04
description: ''
---

Erstelle die Klasse `BookCollectionTest` anhand des abgebildeten Klassendiagramms.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/235099790-c2561eb5-6050-4f14-8fe1-588771c0b897.png)

## Hinweise zur Klasse `BookCollectionTest`
- Die Lebenszyklus-Methode `void setUp()` soll eine Büchersammlung samt dazugehöriger Einträge erzeugen
- Die Testmethode `void testAddAuthor()` soll prüfen, ob nach dem Ausführen der Methode `void addAuthor(author: Author)` mit einem Autoren, der bereits in der Büchersammlung vorhanden ist, die Ausnahme `DuplicateKeyException` ausgelöst wird 
- Die Testmethode `void testAddBook()` soll prüfen, ob nach dem Ausführen der Methode `void addBook(author: Author, book: Book)` mit einem Buch von einem Autoren, der noch nicht in der Büchersammlung vorhanden ist, ein entsprechender Eintrag erzeugt wurde
und ob nach dem Ausführen der Methode `void addBook(author: Author, book: Book)` mit einem Buch von einem Autoren, der bereits in der Büchersammlung vorhanden ist, der entsprechende Eintrag aktualisiert wurde
- Die Testmethode `void testGetMostDiligentAuthor()` soll prüfen, ob beim Ausführen der Methode `Optional<Author> getMostDiligentAuthor()` der Autor mit den meisten Büchern in der Büchersammlung bzw. ein leeres Optional zurückgegeben wird
- Die Testmethode `void testGetBookByTitle()` soll prüfen, ob beim Ausführen der Methode `Optional<Book> getBookByTitle(title: String)` mit einem Buchtitel das entsprechende Buch bzw. ein leeres Optional zurcükgegeben wird

## Hinweis
Verweden die Klasse `BookCollection` aus Übungsaufgabe [Optional01](../optionals/optionals01.md).
