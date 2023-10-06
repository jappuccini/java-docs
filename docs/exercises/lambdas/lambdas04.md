---
title: Lambdas04
description: ''
---

import Exercise from '@site/src/components/Exercise';

It´s a Bug! Steffen der Schlingel hat gelogen und ist 17 Jahre alt. Das Alter
wurde aber erst geändert, nachdem er schon der Liste mit den erwachsenden
Studenten hinzugefügt wurde.

Passe die Methode `void forEach(consumer Consumer<Student>)` der gegebenen
Klasse `FilteredStudents` so an, dass vor dem Aufruf der Methode
`void accept(t T)` überprüft wird, ob der Student wirklich verarbeitet werden
darf.

<Exercise pullRequest="70" branchSuffix="lambdas/04" />
