---
title: Geldautomat
description: ''
tags: [activity-diagrams]
---

Erstelle die ausführbare Klasse `CashMachine` anhand des abgebildeten
Aktivitätsdiagramms. Erstelle zum Testen eine Klasse, die die benötigten
Methoden zur Verfügung stellt.

## Aktivitätsdiagramm zur Klasse _CashMachine_

```mermaid
stateDiagram-v2
    state "Ausgabe: Bitte Kontonummer eingeben" as state1
    state "Eingabe: [Kontonummer]" as state2
    state "Ausgabe: Bitte PIN eingeben" as state3
    state "Eingabe: [PIN]" as state4
    state "Ausführen: [Logindaten prüfen] mit [Kontonummer] und [PIN]" as state5
    state "Ausgabe: Logindaten sind ungültig" as state6
    state "Ausgabe: Bitte Auswahl treffen
           1: Kontostand anzeigen
           2: Geld abheben
           3: Beenden" as state7
    state "Eingabe: [Auswahl]" as state8
    state "Ausführen: [Kontostand anzeigen]" as state9
    state "Ausgabe: Bitte Betrag in Euro eingeben" as state10
    state "Eingabe: [Betrag in Euro]" as state11
    state "Ausführen: [Kontostand prüfen] mit [Betrag in Euro]" as state12
    state "Ausführen: [Geld auszahlen]" as state13
    state "Ausgabe: Kontostand ist zu niedrig" as state14

    state if1 <<choice>>
    state if2 <<choice>>
    state if3 <<choice>>
    state fork1 <<fork>>

    state "Geldautomat" as main {
        [*] --> state1
        state1 --> state2
        state2 --> state3
        state3 --> state4
        state4 --> state5
        state5 --> if1
        if1 --> state6: sonst
        if1 --> state7: Logindaten sind gültig
        state6 --> state1
        state7 --> state8
        state8 --> if2
        if2 --> state9: [Auswahl] = 1
        if2 --> state10: [Auswahl] = 2
        if2 --> [*]: [Auswahl] = 3
        state9 --> fork1
        state10 --> state11
        state11 --> state12
        state12 --> if3
        if3 --> state13: Auszahlung ist möglich
        if3 --> state14: sonst
        state13 --> fork1
        state14 --> fork1
        fork1 --> state7
    }
```
