---
title: ActivityDiagrams01
description: ''
---

import Exercise from '@site/src/components/Exercise';

Erstelle die Klasse `MainClass` anhand des abgebildeten Klassendiagramms sowie den abgebildeten Aktivitätsdiagrammen.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/235862155-d542ea65-c2c9-4c97-a8c0-765fe05a8767.png)

## Aktivitätsdiagramm zur Aktivität main
```mermaid
stateDiagram-v2
    state "Zufallszahl erzeugen" as state1
    state "Spielen (play)" as state2

    state main {
        [*] --> state1
        state1 --> state2
        state2 --> [*]
    }
```

## Aktivitätsdiagramm zur Aktivität move
```mermaid
stateDiagram-v2
    state "Ausgabe: [name], Tipp eingeben" as state1
    state "Eingabe: [tipp]" as state2
    state "Ausgabe: Richtig, das war die gesuchte Zahl" as state3
    state "Rückgabe: true" as state4
    state "Ausgabe: Die gesuchte Zahl ist kleiner" as state5
    state "Ausgabe: Die gesuchte Zahl ist größer" as state6
    state "Rückgabe: false" as state7
    state if <<choice>>
    
    state move {
        [*] --> state1
        state1 --> state2
        state2 --> if
        if --> state3 : [tipp] = [zufallszahl]
        if --> state5 : [tipp] > [zufallszahl]
        if --> state6 : [tipp] < [zufallszahl]
        state3 --> state4
        state4 --> [*]
        state5 --> state7
        state6 --> state7
        state7 --> [*]
    }
```

## Aktivitätsdiagramm zur Aktivität play
![image](https://user-images.githubusercontent.com/47243617/209174541-bab788f7-7fb2-42f2-8b0f-269db393a8c0.png)

<Exercise pullRequest="35" branchSuffix="activity-diagrams/01" />
