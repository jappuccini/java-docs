---
title: Lambdas02
description: ""
---

import Exercise from '@site/src/components/Exercise';

Es gibt 2 Klassen, die verhindern, dass bestimmte Objekte in der Liste
gespeichert werden. In der Klasse FilteredAdultStudents werden nur Studenten
der internen ArrayList hinzugefügt, sofern der Student mindestens 18 Jahre alt 
ist. In der Klasse FilteredTeenStudents werden nur Studenten der internen
ArrayList hinzugefügt, sofern der Student unter 18 Jahre alt ist.
In der Example.java wird ein Erwachsener Student und ein jugendlicher Student
erzeugt. Beide Studenten werden beiden FilteredStudents Klassen hinzugefügt und
anschließend ausgegeben. Die gefilterten Listen funktionieren, jedoch nicht
flexibel. Schreibe eine Klasse, mit folgenden Anforderungen:

Die Klasse soll FilteredStudents heißen. Sie soll ein privates Attribut students
vom Typ ArrayList&lt;Student&gt; haben. Weiterhin soll in einem privaten Attribut mandatoryFilter
eine Lambdafunktion vom Typ Predicate&lt;Student&gt; definiert werden.
Erstelle einen Konstruktor der einen Parameter filter vom Typ Predicate&lt;Student&gt;
enthält. Der Konstruktor soll alle Attribute initialisieren. Die Methode add
soll vor dem Hinzufügen des Elements mit Hilfe des mandatoryFilters überprüfen, 
ob das eingehende Element hinzugefügt werden kann. Falls es hinzugefügt werden
kann soll es der internen ArrayList hinzugefügt werden. Kopiere die
printStudents Methode von einem der beiden bestehenden Klassen.
Lösche die Klassen FilteredTeenStudents und FilteredAdultStudents. Verwende in
der Klasse Exercise.java nur noch die FilteredStudents Klasse und übergebe dem
Konstruktor jeweils die richtigen Lambdafunktionen, damit es gleich funktioniert
wie davor.

<Exercise pullRequest="68" branchSuffix="lambdas/02" />
