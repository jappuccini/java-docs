---
title: Aktivitätsdiagramme
description: ''
sidebar_position: 165
tags: [uml, activity-diagrams]
---

Aktivitätsdiagramme sind ein Diagrammtyp der UML und gehören dort zum Bereich
der Verhaltensdiagramme. Der Fokus von Aktivitätsdiagrammen liegt auf
imperativen Verarbeitungsaspekten. Eine Aktivität stellt einen gerichteten
Graphen dar, der über Knoten (Aktionen, Datenknoten und Kontrollknoten) und
Kanten (Kontrollflüsse und Datenflüsse) verfügt:

- Aktionen sind elementare Bausteine für beliebiges, benutzerdefiniertes
  Verhalten
- Kontrollknoten steuern den Kontroll- und Datenfluss in einer Aktivität:
  - Startknoten: legen den Beginn der Aktivität fest
  - Endknoten: legen das Ende der Aktivität fest
  - Ablaufendknoten: legen das Ende eines Ablaufes fest
  - Verzweigungsknoten: ermöglichen die Verzweigung von Abläufen
  - Zusammenführungsknoten: ermöglichen die Zusammenführung von Abläufen
- Datenknoten sind Hilfsknoten, die als ein- oder ausgehende Parameter einer
  Aktion verwendet werden können
- Kontroll- und Datenflüsse legen Abläufe zwischen Vorgänger- und
  Nachfolger-Knoten fest

```mermaid
stateDiagram-v2
    state "Ausgabe: 1. Zahl eingeben" as state1
    state "Eingabe: 1. Zahl" as state2
    state "Ausgabe: 2. Zahl eingeben" as state3
    state "Eingabe: 2. Zahl" as state4
    state "Rückgabe: 1. Zahl geteilt durch 2. Zahl" as state5

    state if <<choice>>

    state "Division zweier Zahlen" as main {
        [*] --> state1
        state1 --> state2
        state2 --> state3
        state3 --> state4
        state4 --> if
        if --> state3: 2. Zahl = 0
        if --> state5: sonst
        state5 --> [*]
    }
```
