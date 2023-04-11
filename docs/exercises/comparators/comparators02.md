---
title: Comparators02
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Erstelle die Klasse `CoordinateComparator` anhand des abgebildeten
  Klassendiagramms
- Passe die ausführbare Klasse aus Übungsaufgabe
  [Comparators01](comparators01.md) so an, dass die Koordinatenliste mit
  Hilfe der Klasse `CoordinateComparator` sortiert wird

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209157261-c5a4d348-dd78-444a-a72f-08733b293bff.png)

## Hinweis zur Klasse CoordinateComparator
Die Methode `int compare(o1: Coordinate, o2: Coordinate)` soll zwei eingehende
Koordinaten anhand ihrer jeweiligen Distanz zum Nullpunkt vergleichen. Ist die
Distanz der ersten Koordinate zum Nullpunkt kleiner als bzw. größer als bzw.
gleich die der zweiten Koordinate, soll der Wert -1 bzw. 1 bzw. 0 zurückgegeben
werden.

<Exercise pullRequest="48" branchSuffix="comparators/02" />
