---
title: Kontrollstrukturen
description: ''
sidebar_position: 100
tags: [control-structures]
---

Kontrollstrukturen wie [Verzweigungen](cases.md) und [Schleifen](loops.md) sind wesentliche Bestandteile der Programmierung. Verzweigungen ermöglichen die Ausführung unterschiedlicher Anweisungsblöcke, mit Hilfe von Schleifen können Anweisungsblöcke wiederholt 
ausgeführt werden.

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

