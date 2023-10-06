---
title: Generics02
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Passe die Klasse `Crate` aus Übungsaufgabe [Generics01](generics01) anhand des
  abgebildeten Klassendiagramms an
- Passe die ausführbare Klasse aus Übungsaufgabe [Generics01](generics01) so an,
  dass sie fehlerfrei ausgeführt werden kann

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
        +takeBottle(box int) T
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

<Exercise pullRequest="53" branchSuffix="generics/02" />
