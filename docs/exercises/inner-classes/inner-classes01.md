---
title: InnerClasses01
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Erstelle die Klassen `House` und `Room` anhand des abgebildeten
  Klassendiagramms
- Erstelle eine ausführbare Klasse, welche ein Haus mit mehreren Räumen erzeugt
  und auf der Konsole ausgibt
- Die Klasse Room soll hierbei eine Element Klasse sein.

## Klassendiagramm

```mermaid
classDiagram
    House *-- Room

    class House {
        -rooms ArrayList~Room~
        +addRoom(room Room) void
        +printRooms() void
    }

    class Room {
        -name String
        +Room(name String)
        +printRoom() void
    }
```

## Konsolenausgabe

```console
Wohnzimmer
Esszimmer
Schlafzimmer
Küche
WC
```

<Exercise pullRequest="54" branchSuffix="inner-classes/01" />
