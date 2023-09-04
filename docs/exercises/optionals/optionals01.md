---
title: Optionals01
description: ''
---

- Passe die Klasse `BookCollection` aus Übungsaufgabe [Maps02](../maps/maps02) anhand des abgebildeten Klassendiagramms an
- Passe die ausführbare Klasse aus Übungsaufgabe [Maps02](../maps/maps02) so an, dass entweder die gefundenen Werte oder alternativ entsprechende Meldungen ausgegeben werden

## Klassendiagramm
```mermaid
classDiagram
    Author --o BookCollection
    Book --o BookCollection

    note for BookCollection "Map-Key: Author, Map-Value: List~Book~"

    class Author {
        <<record>>
        -name String
    }

    class Book {
        <<record>>
        -title String
    }

    class BookCollection {
        <<record>>
        -collection Map
        +addAuthor(author Author) void
        +addBook(author Author, book Book) void
        +getMostDiligentAuthor() Optional~Author~
        +getBookByTitle(title String) Optional~Book~
    }
```
