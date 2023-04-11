---
title: Exceptions01
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Passe die Klasse `Vehicle` aus Übungsaufgabe
  [Interfaces01](../interfaces/interfaces01) anhand des abgebildeten
  Klassendiagramms an und erstelle die Ausnahmenklasse `InvalidValueException`
- Passe die ausführbare Klasse aus Übungsaufgabe
  [Interfaces01](../interfaces/interfaces01) so an, dass sie fehlerfrei
  ausgeführt werden kann

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209157391-2f2ee299-cb0c-4b3e-b9c2-f07e2acec6b8.png)

## Hinweise zur Klasse Vehicle

- In der Methode `void accelerate(value: int)` soll bei einem eingehenden Wert kleiner
  gleich Null die Ausnahme `InvalidValueException` ausgelöst werden
- In der Methode `void brake(value: int)` soll bei einem eingehenden Wert kleiner
  gleich Null die Ausnahme `InvalidValueException` ausgelöst werden

<Exercise pullRequest="49" branchSuffix="exceptions/01" />
