---
title: Optionals02
description: ''
---

- Passe die Klasse `TelephoneBook` aus Übungsaufgabe [Maps01](../maps/maps01) anhand des abgebildeten Klassendiagramms an
- Passe die ausführbare Klasse aus Übungsaufgabe [Maps01](../maps/maps01) so an, dass entweder die gefundenen Werte oder alternativ entsprechende Meldungen ausgegeben werden

## Klassendiagramm
```mermaid
classDiagram
    Person --o TelephoneBook
    TelephoneNumber --o TelephoneBook

    note for TelephoneBook "Map-Key: Person, Map-Value: TelephoneNumber"

    class Person {
        <<record>>
        -name String
    }

    class TelephoneNumber {
        <<record>>
        -value String
    }

    class TelephoneBook {
        <<record>>
        -entries Map
        +addEntry(person Person, telephoneNumber TelephoneNumber) void
        +getTelephoneNumberByName(name String) Optional~TelephoneNumber~
    }
```
