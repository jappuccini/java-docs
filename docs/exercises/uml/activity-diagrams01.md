---
title: ActivityDiagrams01
description: ''
---

import Exercise from '@site/src/components/Exercise';

Erstelle die Klasse `MainClass` anhand des abgebildeten Klassendiagramms sowie den abgebildeten Aktivitätsdiagrammen.

## Klassendiagramm
```mermaid
classDiagram
    class MainClass {
        -sc Scanner$
        -randomNumber int$
        +main(args String[])$ void
        +play()$ void
        +move(name String)$ boolean
    }
```

## Aktivitätsdiagramm zur Aktivität main
```mermaid
stateDiagram-v2
    state "Zufallszahl erzeugen" as state1
    state "Spielen (Aktivität play)" as state2

    state main {
        [*] --> state1
        state1 --> state2
        state2 --> [*]
    }
```

## Aktivitätsdiagramm zur Aktivität play
```mermaid
stateDiagram-v2
    state "Ausgabe: Spieler 1, Name eingeben" as state1
    state "Eingabe: [name1]" as state2
    state "Ausgabe: Spieler 2, Name eingeben" as state3
    state "Eingabe: [name2]" as state4
    state "Spielzug machen für Spieler 1 (Aktivität move)" as state5
    state "Spielzug machen für Spieler 2 (Aktivität move)" as state6
    state if <<choice>>
    state if2 <<choice>>

    state play {
        [*] --> state1
        state1 --> state2
        state2 --> state3
        state3 --> state4
        state4 --> state5
        state5 --> if
        if --> [*] : Rückgabe = false
        if --> state6 : Rückgabe = true
        state6 --> if2
        if2 --> state5 : Rückgabe = true
        if2 --> [*] : Rückgabe = false
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

<Exercise pullRequest="35" branchSuffix="activity-diagrams/01" />
