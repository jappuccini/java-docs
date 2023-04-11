---
title: ClassDiagrams04
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Erstelle die Klassen `Company`, `Employee` und `Person` anhand des
  abgebildeten Klassendiagramms
- Erstelle eine ausführbare Klasse, welche ein Unternehmen mit mehreren
  Mitarbeitern erzeugt und auf der Konsole ausgibt

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209156255-10033920-eeda-45ba-a347-3cc6c13b2e45.png)

## Hinweis zur Klasse Person
Der Konstruktor soll den Namen initialisieren.

## Hinweise zur Klasse Employee
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `String getName()` soll den Namen des Mitarbeiters zurückgeben
- Die Methode `void print()` soll alle Attribute auf der Konsole ausgeben

## Hinweise zur Klasse Company
- Der Konstruktor soll den Namen sowie die Mitarbeiterliste initialisieren
- Die Methode `void addEmployee(employee: Employee)` soll der Mitarbeiterliste einen Mitarbeiter
  hinzufügen
- Die Methode `void print()` soll alle Attribute auf der Konsole ausgeben

## Konsolenausgabe

```console
Maier GmbH (5 Mitarbeiter)
1 - Max Schmid - 50000€
2 - Hans Müller - 75000€
3 - Lisa Meier - 40000€
4 - Peter Schneider - 55000€
5 - Miriam Albers - 90000€
```

<Exercise pullRequest="39" branchSuffix="class-diagrams/04" />
