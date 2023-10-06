---
title: Aktivitätsdiagramme
description: ''
sidebar_position: 20
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
    state "Eingabe: 1. Zahl" as input1
    state "Eingabe: 2. Zahl" as input2
    state "Ausgabe: 1. Zahl eingeben" as output1
    state "Ausgabe: 2. Zahl eingeben" as output2
    state "Rückgabe: 1. Zahl : 2. Zahl" as activity1
    state if <<choice>>
    [*] --> output1
    output1 --> input1
    input1 --> output2
    output2 --> input2
    input2 --> if
    if --> output2 : 2. Zahl ist gleich 0
    if --> activity1: 2. Zahl ist ungleich 0
    activity1 --> [*]
```
