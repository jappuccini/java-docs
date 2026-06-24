---
title: Aktivitätsdiagramme
description: ''
sidebar_position: 165
tags: [uml, activity-diagrams]
---

Aktivitätsdiagramme sind ein Diagrammtyp der UML und gehören zu den
Verhaltensdiagrammen. Sie modellieren den Ablauf von Aktivitäten mit Fokus auf
dem Kontroll- und Datenfluss. Eine Aktivität ist ein gerichteter Graph aus
Knoten und Kanten:

- Aktionen sind elementare Bausteine für benutzerdefiniertes Verhalten.
- Kontrollknoten steuern den Ablauf:
  - Startknoten legen den Beginn der Aktivität fest.
  - Endknoten legen das Ende der Aktivität fest.
  - Ablaufendknoten legen das Ende eines einzelnen Ablaufzweigs fest.
  - Verzweigungsknoten ermöglichen das Aufteilen von Abläufen.
  - Zusammenführungsknoten führen Abläufe wieder zusammen.
- Datenknoten dienen als ein- oder ausgehende Parameter einer Aktion.
- Kontroll- und Datenflüsse verbinden Vorgänger- und Nachfolgeknoten.

```mermaid
stateDiagram-v2
   state "Ausgabe: Zahl 1 eingeben" as state1
   state "Eingabe: [Zahl 1]" as state2
   state "Ausgabe: Zahl 2 eingeben" as state3
   state "Eingabe: [Zahl 2]" as state4
   state "Rückgabe: [Zahl 1] / [Zahl 2]" as state5
   state if <<choice>>
   state "Division zweier Zahlen" as main {
      [*] --> state1
      state1 --> state2
      state2 --> state3
      state3 --> state4
      state4 --> if
      if --> state3: [Zahl 2] = 0
      if --> state5: sonst
      state5 --> [*]
   }
```
