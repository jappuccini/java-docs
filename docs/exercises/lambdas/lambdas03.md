---
title: Lambdas03
description: ""
---

import Exercise from '@site/src/components/Exercise';

Die Klasse Filtered Students hat die Methode printStudents. Verwender der 
Klasse wollen selber entscheiden, wie die Liste der Studenten verarbeitet
werden soll. Passe die bestehende Klasse entsprechend folgenden Anforderungen 
an:

Ersetze die Methode printStudents mit der Methode forEach. Diese Methode soll
den Parameter consumer vom Typ Consumer&lt;Student&gt; haben. Verwende eine for-each
Schleife um für jeden Studenten die consumer Methode auszuführen. Passe die 
Klasse Exercise.java so an, das die erwachsenen Studenten UpperCase und die 
jugendlichen Studenten LowerCase in der Konsole ausgegeben werden.

<Exercise pullRequest="69" branchSuffix="lambdas/03" />
