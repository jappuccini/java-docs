---
title: Bibliothek
description: ''
tags: [inheritance, polymorphism, exceptions, records, maps, optionals]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

```mermaid
classDiagram
    Library o-- Book
    Status --o Library
    Book <|-- EBook : extends
    Book <|-- PaperBook : extends
    Author --o Book
    EBook o-- FileFormat

    class Library {
        <<record>>
        name: String #123;final#125;
        books: Map~Book, Status~ #123;final#125;
        +addBook(book: Book) void
        +getBookByTitle(title: String) Optional~Book~
        +getPaperBooksByStatus(status: Status) List~PaperBook~
    }

    class Status {
        <<enumeration>>
        AVAILABLE = verfügbar
        LENT = verliehen
        -description: String #123;final#125;
    }

    class Book {
        <<abstract>>
        -id: UUID #123;final#125;
        -author: Author #123;final#125;
        -title: String #123;final#125;
        +Book(author: Author, title: String)
    }

    class EBook {
        -fileFormat: FileFormat #123;final#125;
        -fileSizeInKb: int #123;final#125;
        +EBook(author: Author, title: String, fileFormat: FileFormat, fileSizeInKb: int)
    }

    class PaperBook {
        -pages: int #123;final#125;
        +PaperBook(author: Author, title: String, pages: int)
    }

    class Author {
        <<record>>
        name: String
        nationality: String
    }

    class FileFormat {
        <<enumeration>>
        AZW = Amazon Kindle
        EPUB = Electronic Publication
        LRF = Portable Reader File
        -description: String #123;final#125;
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden
- Die statische Methode `UUID randomUUID()` der Klasse `UUID` gibt eine zufällig
  erstellte UUID zurück

## Hinweis zur Klasse _EBook_

Der Konstruktor soll alle Attribute initialisieren. Für den Fall, dass die
eingehende Dateigröße kleiner gleich Null ist, soll die Ausnahme
`WrongFileSizeException` ausgelöst werden.

## Hinweise zur Klasse _Library_

- Die Methode `void addBook(book: Book)` soll der Bücherliste (`books`) das
  eingehende Buch mit dem Status `verfügbar` hinzufügen
- Die Methode `Optional<Book> getBookByTitle(title: String)` soll das Buch zum
  eingehenden Titel als Optional zurückgeben
- Die Methode `List<PaperBook> getPaperBooksByStatus(status: Status)` soll alle
  gedruckten Bücher zum eingehenden Status zurückgeben
