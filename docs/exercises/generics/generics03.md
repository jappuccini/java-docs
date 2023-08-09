---
title: Generics03
description: ''
---

- Erstelle die Klassen `Pair`, `Pupil` und `SchoolClass` anhand des abgebildeten Klassendiagramms
- Erstelle eine ausführbare Klasse, welche eine Schulklasse mit mehreren Schülern erzeugt und die Schülerpaare ausgibt

## Klassendiagramm
XXX

## Hinweise zur Klasse SchoolClass
- Die Methode `void addPupil(pupil: Pupil)` soll der Schulklasse den eingehenden Schüler hinzufügen
- Die Methode `List<Pair<Pupil>> getPairs()` soll aus den Schülern der Schulklasse zufällige Paare bilden und zurückgeben. Bei einer ungeraden Anzahl an Schülern soll der verbleibende Schüler mit dem Wert `null` gepaart werden

## Konsolenausgabe

```console
Pair[partA=Pupil[name=Jennifer, gender=w], partB=Pupil[name=Franziska, gender=w]]
Pair[partA=Pupil[name=Fritz, gender=m], partB=Pupil[name=Lisa, gender=w]]
Pair[partA=Pupil[name=Max, gender=m], partB=Pupil[name=Hans, gender=m]]
Pair[partA=Pupil[name=Peter, gender=m], partB=null]
```
