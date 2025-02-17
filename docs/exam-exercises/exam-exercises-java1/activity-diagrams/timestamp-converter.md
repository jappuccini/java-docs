---
title: Zeitstempel-Konvertierer
description: ''
tags: [activity-diagrams]
---

Erstelle die Klasse `TimestampConverter` anhand des abgebildeten
Klassendiagramms sowie anhand der abgebildeten Aktivitätsdiagramme. Erstelle zum
Testen eine ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
   class TimestampConverter {
      -year: int$
      -month: int$
      -dayOfMonth: int$
      -totalDays: int$
      -extraDays: int$
      -flag: int$
      -daysOfMonth: int[] = #123;31,28,31,30,31,30,31,31,30,31,30,31#125;$
      +convert(timestamp: long) LocalDate$
      -calculateYear() void$
      -calculateMonth() void$
      -calculateDayOfMonth() void$
   }
```

## Aktivitätsdiagramm zur Methode _LocalDate convert(timestamp: long)_

```mermaid
stateDiagram-v2
   state "[Tage Gesamt] = [Zeitstempel] / 86.400.000" as state1
   state "Ausführen: [Jahr berechnen]" as state2
   state "Ausführen: [Monat berechnen]" as state3
   state "Ausführen: [Tag berechnen]" as state4
   state "[Datum] erzeugen mit [Jahr], [Monat] und [Tag]" as state5
   state "Rückgabe: [Datum]" as state6
   state "Zeitstempel konvertieren" as convert {
      [*] --> state1
      state1 --> state2
      state2 --> state3
      state3 --> state4
      state4 --> state5
      state5 --> state6
      state6 --> [*]
   }
```

## Aktivitätsdiagramm zur Methode _void calculateYear()_

```mermaid
stateDiagram-v2
   state "[Jahr] = 1970" as state1
   state "Schleife beenden" as state2
   state "[Tage Gesamt] = [Tage Gesamt] - 366" as state3
   state "Schleife beenden" as state4
   state "[Tage Gesamt] = [Tage Gesamt] - 365" as state5
   state "[Jahr] inkrementieren" as state6
   state "[Extratage] = [Tage Gesamt] + 1" as state7
   state "[Kennzeichen] = 1" as state8
   state if1 <<choice>>
   state if2 <<choice>>
   state if3 <<choice>>
   state if4 <<choice>>
   state if5 <<choice>>
   state fork1 <<fork>>
   state fork2 <<fork>>
   state fork3 <<fork>>
   state fork4 <<fork>>
   state "Jahr berechnen" as calculateYear {
      [*] --> state1
      state1 --> if1
      if1 --> if2: true
      if2 --> if3: [Jahr] Modulo 400 = 0 oder ([Jahr] Modulo 4 = 0 und [Jahr] Modulo 100 != 0)
      if3 --> state2: [Tage Gesamt] < 366
      if3 --> fork1: sonst
      state2 --> fork1
      fork1 --> state3
      if2 --> if4: sonst
      if4 --> state4: [Tage Gesamt] < 365
      if4 --> fork2: sonst
      state4 --> fork2
      fork2 --> state5
      state3 --> fork3
      state5 --> fork3
      fork3 --> state6
      state6 --> if1
      if1 --> state7: sonst
      state7 --> if5
      if5 --> state8: [Jahr] Modulo 400 = 0 oder ([Jahr] Modulo 4 = 0 und [Jahr] Modulo 100 != 0)
      if5 --> fork4: sonst
      state8 --> fork4
      fork4 --> [*]
   }
```

## Aktivitätsdiagramm zur Methode _void calculateMonth()_

```mermaid
stateDiagram-v2
   state "[Monat] = 0" as state1
   state "[Zähler] = 0" as state2
   state "Schleife beenden" as state3
   state "[Monat] inkrementieren" as state4
   state "[Extratage] = [Extratage] - 29" as state5
   state "Schleife beenden" as state6
   state "[Monat] inkrementieren" as state7
   state "[Extratage] = [Extratage] - Element [Zähler] von Feld [Monatstage]" as state8
   state "[Zähler] inkrementieren" as state9
   state "Schleife beenden" as state10
   state "[Monat] inkrementieren" as state11
   state "[Extratage] = [Extratage] - Element [Zähler] von Feld [Monatstage]" as state12
   state "[Zähler] inkrementieren" as state13
   state "[Monat] inkrementieren" as state14
   state if1 <<choice>>
   state if2 <<choice>>
   state if3 <<choice>>
   state if4 <<choice>>
   state if5 <<choice>>
   state if6 <<choice>>
   state if7 <<choice>>
   state if8 <<choice>>
   state fork1 <<fork>>
   state fork2 <<fork>>
   state fork3 <<fork>>
   state fork4 <<fork>>
   state fork5 <<fork>>
   state fork6 <<fork>>
   state "Monat berechnen" as calculateMonth {
      [*] --> state1
      state1 --> state2
      state2 --> if1
      if1 --> if2 : [Kennzeichen] = 1
      if1 --> if6 : sonst
      if2 --> if3 : true
      if2 --> fork5 : sonst
      if3 --> if4 : [Zähler] = 1
      if3 --> if5 : sonst
      if4 --> state3 : [Extratage] - 29 < 0
      if4 --> fork1 : sonst
      state3 --> fork1
      fork1 --> state4
      state4 --> state5
      state5 --> fork3
      if5 --> state6 : [Extratage] - Element [Zähler] von Feld [Monatstage] < 0
      if5 --> fork2 : sonst
      state6 --> fork2
      fork2 --> state7
      state7 --> state8
      state8 --> fork3
      fork3 --> state9
      state9 --> if2
      if6 --> if7 : true
      if6 --> fork5 : sonst
      if7 --> state10 : [Extratage] - Element [Zähler] von Feld [Monatstage] < 0
      if7 --> fork4 : sonst
      state10 --> fork4
      fork4 --> state11
      state11 --> state12
      state12 --> state13
      state13 --> if6
      fork5 --> if8
      if8 --> state14 : [Extratage] > 0
      if8 --> fork6
      state14 --> fork6
      fork6 --> [*]
   }
```

## Aktivitätsdiagramm zur Methode _void calculateDayOfMonth()_

```mermaid
stateDiagram-v2
   state "[Tag] = [Extratage]" as state1
   state "[Tag] = 29" as state2
   state "[Tag] = Element [Monat] - 1 von Feld [Monatstage]" as state3
   state if1 <<choice>>
   state fork1 <<fork>>
   state "Tag berechnen" as calculateDayOfMonth {
      [*] --> if1
      if1 --> state1: [Extratage] > 0
      if1 --> state2: [Monat] = 2 und [Kennzeichen] = 1
      if1 --> state3: sonst
      state1 --> fork1
      state2 --> fork1
      state3 --> fork1
      fork1 --> [*]
   }
```
