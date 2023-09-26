---
title: Generics01
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Erstelle die Klassen `Bottle`, `BeerBottle`, `WineBottle` und `Crate` anhand
  des abgebildeten Klassendiagramms
- Erstelle eine ausführbare Klasse, welche eine Getränkiste sowie mehrere
  Flaschen erzeugt und die Flaschen in die Getränkekiste stellt

## Klassendiagramm
```mermaid
classDiagram
    Bottle <|-- BeerBottle
    Bottle <|-- WineBottle
    Crate o-- Bottle

    class Crate {
        -box1 Bottle
        -box2 Bottle
        -box3 Bottle
        -box4 Bottle
        -box5 Bottle
        -box6 Bottle
        +insertBottle(bottle Bottle, box int) void
        +takeBottle(box int) Bottle
    }

    class Bottle {
        <<abstract>>
    }

    class BeerBottle {
        +chugALug() void
    }

    class WineBottle {

    }
```

## Hinweis zur Klasse BeerBottle
Die Methode `void chugALug()` soll den Text "Ex und Hopp" auf der Konsole ausgeben.

## Hinweise zur Klasse Crate
- Die Methode `void insertBottle(bottle: Bottle, box: int)` soll eine Flasche in eine der 6
  Getränkefächer einfügen
- Die Methode `Bottle takeBottle(box: int)` soll die Flasche des entsprechenden
  Getränkefachs zurückgeben

<Exercise pullRequest="52" branchSuffix="generics/01" />
