---
title: Maps01
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Erstelle die Klassen `Person`, `TelephoneNumber` und `TelephoneBook` anhand
  des abgebildeten Klassendiagramms
- Erstelle eine ausführbare Klasse, welche ein Telefonbuch mit mehreren
  Einträgen erzeugt und zu eingegebenen Namen die dazugehörigen Telefonnummern
  auf der Konsole ausgibt

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
        +getTelephoneNumberByName(name String) TelephoneNumber
    }
```

## Hinweise zur Klasse TelephoneBook
- Die Methode `void addEntry(person: Person, telephoneNumber: TelephoneNumber)` soll einen Eintrag im
  Telefonbuch anlegen
- Die Methode `TelephoneNumber getTelephoneNumberByName(name: String)` soll die
  Telefonnummer zum eingehenden Namen zurückgeben

<Exercise pullRequest="59" branchSuffix="maps/01" />
