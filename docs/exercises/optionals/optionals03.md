---
title: Optionals03
description: ''
---

- Passe die Klasse `Crate` aus Übungsaufgabe [Generics02](../generics/generics02) anhand des abgebildeten Klassendiagramms an
- Passe die ausführbare Klasse aus Übungsaufgabe [Generics02](../generics/generics02) so an, dass entweder die gefundenen Werte oder alternativ entsprechende Meldungen ausgegeben werden

## Klassendiagramm

```mermaid
classDiagram
    Bottle <|-- BeerBottle
    Bottle <|-- WineBottle

    class Crate~T extends Bottle~ {
        -box1 T
        -box2 T
        -box3 T
        -box4 T
        -box5 T
        -box6 T
        +insertBottle(bottle T, box int) void
        +takeBottle(box int) Optional~T~
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
