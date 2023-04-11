---
title: Cases04
description: ''
---

import Exercise from '@site/src/components/Exercise';

Erstelle eine ausführbare Klasse, welche es zwei Spielern ermöglicht, eine
Zufallszahl zwischen 1 und 100 zu erraten. Der Spieler, der mit seinem Tipp
näher an der Zufallszahl liegt, gewinnt das Spiel.

## Konsolenausgabe

```console
Spieler 1, gib bitte Deinen Tipp ein: 34
Spieler 2, gib bitte Deinen Tipp ein: 60
Zufallszahl: 39, Spieler 1 gewinnt
```

## Hinweise
- Die Methode `int nextInt(bound: int)` der Klasse `Random` gibt eine Zufallszahl zwischen 0 (inklusive) und der eingehenden Zahl (exklusive) zurück
- Die statische Methode `int abs(a: int)` der Klasse `Math` gibt den Betrag der eingehenden Zahl zurück

<Exercise pullRequest="10" branchSuffix="cases/04" />
