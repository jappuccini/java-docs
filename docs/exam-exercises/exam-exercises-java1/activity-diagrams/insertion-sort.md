---
title: Insertionsort
description: ''
tags: [activity-diagrams]
---

Erstelle die ausführbare Klasse `InsertionSort` anhand des abgebildeten
Klassendiagramms sowie anhand der abgebildeten Aktivitätsdiagramme.

## Klassendiagramm

```mermaid
classDiagram
    class InsertionSort {
        -counter: int$
        -data: int[]$
        +main(args: String[]) void$
        -sort() void$
        -print() void$
    }
```

## Aktivitätsdiagramm zur Methode _void main(args: String[])_

```mermaid
stateDiagram-v2
    state "[Feld] mit 1.000 Zufallszahlen zwischen 1 und 100 füllen" as state1
    state "Ausführen: [Sortieren]" as state2

    state "Insertionsort" as main {
        [*] --> state1
        state1 --> state2
        state2 --> [*]
    }
```

## Aktivitätsdiagramm zur Methode _void sort()_

```mermaid
stateDiagram-v2
    state "[Temporäre Variable] = 0" as state1
    state "[Zählvariable A] = 1" as state2
    state "[Zähler] inkrementieren" as state3
    state "[Zählvariable B] = [Zählvariable A]" as state4
    state "[Temporäre Variable] = Element [Zählvariable B] von [Feld]" as state5
    state "Element [Zählvariable B] von [Feld] = [Temporäre Variable]" as state6
    state "Ausführen: [Feld ausgeben]" as state7
    state "[Zählvariable A] inkrementieren" as state8
    state "Element [Zählvariable B] von [Feld] = Element [Zählvariable B] - 1 von [Feld]" as state9
    state "[Zählvariable B] dekrementieren" as state10

    state if1 <<choice>>
    state if2 <<choice>>

    state "Sortieren" as sort {
        [*] --> state1
        state1 --> state2
        state2 --> if1
        if1 --> state3: [Zählvariable A] < [Länge des Feldes]
        if1 --> [*]: sonst
        state3 --> state4
        state4 --> state5
        state5 --> if2
        if2 --> state6: sonst
        if2 --> state9: [Zählvariable B] > 0 und Element [Zählvariable B] - 1 von [Feld] > [Temporäre Variable]
        state6 --> state7
        state7 --> state8
        state8 --> if1
        state9 --> state10
        state10 --> if2
    }
```

## Aktivitätsdiagramm zur Methode _void print()_

```mermaid
stateDiagram-v2
    state "Ausgabe: Durchlauf [Zähler]" as state1
    state "[Zählvariable] = 0" as state2
    state "Ausgabe: Element [Zählvariable] von [Feld]" as state3
    state "[Zählvariable] inkrementieren" as state4

    state if1 <<choice>>

    state "Feld ausgeben" as print {
        [*] --> state1
        state1 --> state2
        state2 --> if1
        if1 --> state3: [Zählvariable] < [Länge des Feldes]
        if1 --> [*]: sonst
        state3 --> state4
        state4 --> if1
    }
```
