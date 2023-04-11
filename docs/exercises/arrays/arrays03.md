---
title: Arrays03
description: ''
---

import Exercise from '@site/src/components/Exercise';

Erstelle eine ausführbare Klasse zum Berechnen von ISBN-Prüfziffern.

## Konsolenausgabe

```console
Gib bitte eine ISBN ohne Prüfziffer ein: 978376572781
Ergebnis: Die Prüfziffer lautet 8
```

## Formel

```
z13 = (10 - ((z1 + z3 + z5 + z7 + z9 + z11 + 3*(z2 + z4 + z6 + z8 + z10 + z12))mod10))mod10
```

## Hinweise

- Die Methode `char charAt(index: int)` der Klasse `String` gibt das Zeichen mit dem
  Index der eingehenden Zahl zurück
- Die statische Methode `int getNumericValue(ch: char)` der Klasse `Character`
  gibt den ganzzahligen Wert des eingehenden Zeichens zurück
- Eine ISBN besteht aus 13 Ziffern (die 13. Ziffer stellt die Prüfziffer dar)

<Exercise pullRequest="20" branchSuffix="arrays/03" />
