---
title: UnitTests04
description: ''
---

Erstelle die Klasse `BookCollectionTest` anhand des abgebildeten Klassendiagramms.

## Klassendiagramm
![image](https://github.com/jappuccini/java-docs/assets/47243617/92687f2c-5693-4bae-9e87-9033b46ac644)

## Hinweise zur Klasse `BookCollectionTest`
- Die Lebenszyklus-Methode `void setUp()` soll den Attributen der Testklasse passende Werte zuweisen
- Die Testmethode `void testAddAuthor()` soll prüfen, ob beim Ausführen der Methode `void addAuthor(author: Author)` mit einem Autoren, der bereits in der Büchersammlung vorhanden ist, die Ausnahme `DuplicateKeyException` ausgelöst wird
- Die Testmethode `void testAddBook()` soll prüfen, ob nach dem Ausführen der Methode `void addBook(author: Author, book: Book)` der entsprechende Eintrag aktualisiert wurde
- Die Testmethode `void testGetMostDiligentAuthor()` soll prüfen, ob beim Ausführen der Methode `Optional<Author> getMostDiligentAuthor()` entweder ein leeres Optional oder ein Optional mit dem Autor mit den meisten Büchern in der Büchersammlung zurückgegeben wird
- Die Testmethode `void testGetBookByTitle()` soll prüfen, ob beim Ausführen der Methode `Optional<Book> getBookByTitle(title: String)` mit einem Buchtitel entweder ein leeres Optional oder das entsprechende Buch als Optional zurückgegeben wird

## Hinweis
Verweden die Klasse `BookCollection` aus Übungsaufgabe [Optionals01](../optionals/optionals01.md).
