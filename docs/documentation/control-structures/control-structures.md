---
title: Kontrollstrukturen
description: ''
sidebar_position: 100
tags: [control-structures]
---

Kontrollstrukturen wie [Verzweigungen](cases.md) und [Schleifen](loops.md) sind wesentliche Bestandteile der Programmierung. Verzweigungen ermöglichen die Ausführung unterschiedlicher Anweisungsblöcke, mit Hilfe von Schleifen können Anweisungsblöcke wiederholt 
ausgeführt werden.

```mermaid
graph
    a((Start)) --> b(Ausgabe: Zahl 1 eingeben)
    b --> c(Eingabe: Zahl 1)
    c --> d(Ausgabe: Zahl 2 eingeben)
    d --> e(Eingabe: Zahl 2)
    e --> f{Zahl 2 = 0}
    f -->|Ja| e
    f -->|Nein| h(Rückgabe: Zahl 1 : Zahl 2)
    h --> i((Stop))
```

