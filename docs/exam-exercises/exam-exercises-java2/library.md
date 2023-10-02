---
title: Bibliothek
description: ''
tags: [inheritance, polymorphy, exceptions, records, maps, optionals]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

```mermaid
classDiagram
    Library o-- Book
    Library o-- Status
    Book <|-- EBook
    Book <|-- PaperBook
    Book o-- Author
    EBook o-- FileFormat

    class Library {
        <<record>>
        -name String
        -books Map~Book&#44&#160Status~
        +addBook(book Book) void
        +getBookByTitle(title String) Optional~Book~
        +getPaperBooksByStatus(status Status) List~PaperBook~
    }

    class Status {
        <<enumeration>>
        AVAILABLE = verfügbar
        LENT = verliehen
        -description String
    }

    class Book {
        <<abstract>>
        -id UUID
        -author Author
        -title String
        +Book(author Author, title String)
    }

    class EBook {
        -fileFormat FileFormat
        -fileSize int
        +EBook(author Author, title String, fileFormat FileFormat, fileSize int)
    }

    class PaperBook {
        -pages int
        +PaperBook(author Author, title String, pages int)
    }

    class Author {
        <<record>>
        -name String
        -nationality String
    }

    class FileFormat {
        <<enumeration>>
        AZW = Amazon Kindle
        EPUB = Electronic Publication
        LRF = Portable Reader File
        -description String
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden
- Die statische Methode `UUID randomUUID()` der Klasse `UUID` gibt eine zufällig erstellte UUID zurück

## Hinweis zur Klasse EBook

Der Konstruktor soll alle Attribute initialisieren. Für den Fall, dass die eingehende Dateigröße kleiner gleich Null ist, soll die Ausnahme `WrongFileSizeException` ausgelöst werden.

## Hinweise zur Klasse Library

- Die Methode `void addBook(book Book)` soll der Bücherliste (`books`) das eingehende Buch mit dem Status `verfügbar` hinzufügen
- Die Methode `Optional<Book> getBookByTitle(title String)` soll das Buch zum eingehenden Titel als Optional zurückgeben
- Die Methode `List<PaperBook> getPaperBooksByStatus(status Status)` soll alle gedruckten Bücher zum eingehenden Status zurückgeben
