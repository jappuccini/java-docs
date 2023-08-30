---
title: Lambdas04
description: ""
---

import Exercise from '@site/src/components/Exercise';

It is a Bug! Steffen der Schlingel hat gelogen und ist 17 Jahre alt.
Das Alter wurde aber erst geändert, nachdem er schon der Liste hinzugefügt
wurde. Passe die bestehende Klasse entsprechend folgenden Anforderungen an, um
den Bug zu fixen:

Prüfe in der Methode forEach vor dem Aufrufen des Consumers ab, ob der Student
noch in der Liste sein darf. Verifiziere in Exercise.java, dass Steffen nicht
mehr in der Liste mit erwachsenen Studenten ausgegeben wird.

<Exercise pullRequest="70" branchSuffix="lambdas/04" />
