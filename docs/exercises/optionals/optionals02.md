---
title: Optionals02
description: ''
---

- Passe die Klasse `TelephoneBook` aus Übungsaufgabe [Maps01](../maps/maps01)
  anhand des abgebildeten Klassendiagramms an
- Passe die ausführbare Klasse aus Übungsaufgabe [Maps01](../maps/maps01) so an,
  dass entweder die gefundenen Werte oder alternativ entsprechende Meldungen
  ausgegeben werden

## Klassendiagramm

```mermaid
classDiagram
    TelephoneBook o-- Person
    TelephoneBook o-- TelephoneNumber

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
        -entries Map~Person&#44&#160TelephoneNumber~
        +addEntry(person Person, telephoneNumber TelephoneNumber) void
        +getTelephoneNumberByName(name String) Optional~TelephoneNumber~
    }
```
