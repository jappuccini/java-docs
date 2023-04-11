---
title: Generics01
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Erstelle die Klassen `Bottle`, `BeerBottle`, `WineBottle` und `Crate` anhand
  des abgebildeten Klassendiagramms
- Erstelle eine ausführbare Klasse, welche eine Getränkiste sowie mehrere
  Flaschen erzeugt und die Flaschen in die Getränkekiste stellt

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209157752-8708e5ad-c3d4-45c1-af3e-eda8c69b983a.png)

## Hinweis zur Klasse BeerBottle
Die Methode `void chugALug()` soll den Text "Ex und Hopp" auf der Konsole ausgeben.

## Hinweise zur Klasse Crate
- Die Methode `void insertBottle(bottle: Bottle, box: int)` soll eine Flasche in eine der 6
  Getränkefächer einfügen
- Die Methode `Bottle takeBottle(box: int)` soll die Flasche des entsprechenden
  Getränkefachs zurückgeben

<Exercise pullRequest="52" branchSuffix="generics/01" />
