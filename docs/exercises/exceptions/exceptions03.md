---
title: Exceptions03
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Passe die Klasse `Employee` aus Übungsaufgabe
  [ClassDiagrams04](../uml/class-diagrams04) anhand des abgebildeten
  Klassendiagramms an und erstelle die Ausnahmenklassen
  `SalaryIncreaseTooHighException` und `SalaryDecreaseException`
- Passe die ausführbare Klasse aus Übungsaufgabe
  [ClassDiagrams04](../uml/class-diagrams04) so an, dass ein oder mehrere
  Mitarbeiter eine Gehaltserhöhung bekommen

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209157552-387c5ab4-0a01-48d9-b346-69a08a523cee.png)

## Hinweis zur Klasse Employee
In der Methode `void setSalary(salary: int)` soll bei einer Gehaltserhöhung größer
10% die Ausnahme `SalaryIncreaseTooHighException` und bei einer
Gehaltsverringerung die Ausnahme `SalaryDecreaseException` ausgelöst werden.

<Exercise pullRequest="51" branchSuffix="exceptions/03" />
