---
title: Selectionsort
description: ''
tags: [activity-diagrams]
---

Erstelle die ausführbare Klasse `SelectionSort` anhand des abgebildeten
Klassendiagramms sowie anhand der abgebildeten Aktivitätsdiagramme.

## Klassendiagramm

```mermaid
classDiagram
    class SelectionSort {
        -data: List~Integer~$
        +main(args: String[]) void$
        -sort() void$
    }
```

## Aktivitätsdiagramm zur Methode _void main(args: String[])_

```mermaid
stateDiagram-v2
    state "Liste mit 1.000 Zufallszahlen zwischen 1 und 100 füllen" as state1
    state "Liste ausgeben" as state2
    state "Aktivität 'Sortieren' ausführen" as state3
    state "Liste ausgeben" as state4

    state "Selectionsort" as main {
        [*] --> state1
        state1 --> state2
        state2 --> state3
        state3 --> state4
        state4 --> [*]
    }
```

## Aktivitätsdiagramm zur Methode _void sort()_

```mermaid
stateDiagram-v2
    state "Zählvariable 1 = 0" as state1
    state "Index = Zählvariable 1" as state2
    state "Zählvariable 2 = Zählvariable 1 + 1" as state3
    state "Index = Zählvariable 2" as state4
    state "Zählvariable 2 inkrementieren" as state5
    state "Temporäre Variable = Liste[Index]" as state6
    state "Liste[Index] = Liste[Zählvariable 1]" as state7
    state "Liste[Zählvariable 1] = Temporäre Variable" as state8
    state "Zählvariable 1 inkrementieren" as state9

    state if1 <<choice>>
    state if2 <<choice>>
    state if3 <<choice>>
    state fork1 <<fork>>

    state "Sortieren" as sort {
        [*] --> state1
        state1 --> if1
        if1 --> state2: Zählvariable 1 < Länge der Liste - 1
        if1 --> [*]: sonst
        state2 --> state3
        state3 --> if2
        if2 --> if3: Zählvariable 2 < Länge der Liste
        if2 --> state6: sonst
        if3 --> state4: Liste[Zählvariable 2] < Liste[Index]
        if3 --> fork1: sonst
        state4 --> fork1
        fork1 --> state5
        state5 --> if2
        state6 --> state7
        state7 --> state8
        state8 --> state9
        state9 --> if1
    }
```
