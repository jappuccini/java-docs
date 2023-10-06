---
title: Operatoren
description: ''
sidebar_position: 60
tags: [operators]
---

Operatoren sind Zeichen, mit denen Daten manipuliert werden können. Mit Hilfe
von Operanden und Operatoren können beliebig komplexe Ausdrücke abgebildet
werden. Operatoren mit einem, zwei oder drei Operanden werden als _unäre
Operatoren_ _binäre Operatoren_ und _ternäre Operatoren_ bezeichnet. Man
unterscheidet zudem zwischen arithmetischen, bitweisen und logischen Operatoren
sowie Vergleichsoperatoren.

## Arithmetische Operatoren

Für die arithmetischen Grundrechenarten stehen verschiedene arithmetische
Operatoren zur Verfügung.

| Ausdruck mit Operator | Bedeutung                                                     |
| --------------------- | ------------------------------------------------------------- |
| x + y                 | Addiere y zu x                                                |
| x - y                 | Subtrahiere y von x                                           |
| x \* y                | Multipliziere x mit y                                         |
| x / y                 | Dividiere x durch y                                           |
| x % y                 | Divisionsrest von x / y                                       |
| x++                   | Inkrementiere x und gib den alten Wert an den Ausdruck zurück |
| ++x                   | Inkrementiere x und gib den neuen Wert an den Ausdruck zurück |
| x--                   | Dekrementiere x und gib den alten Wert an den Ausdruck zurück |
| --x                   | Dekrementiere x und gib den neuen Wert an den Ausdruck zurück |

## Bitweise Operatoren

Bitweise Operatoren können dazu verwendet werden, Binäroperationen auf Operanden
durchzuführen.

| Ausdruck mit Operator | Bedeutung                |
| --------------------- | ------------------------ |
| a & b                 | Bitweise AND-Verknüpfung |
| a \| b                | Bitweise OR-Verknüpfung  |
| a ^ b                 | Bitweise XOR-Verknüpfung |
| ~a                    | Bitweises NOT            |

## Logische Operatoren

Logische Operatoren können dazu verwendet werden, logische Aussagen miteinander
zu verknüpfen.

| Ausdruck mit Operator | Bedeutung                |
| --------------------- | ------------------------ |
| a && b                | Logische AND-Verknüpfung |
| a \|\| b              | Logische OR-Verknüpfung  |
| !a                    | Logisches NOT            |

## Vergleichsoperatoren

Logische Bedingungen für zwei Werte eines elementaren Datentyps können durch
Vergleichsoperatoren realisiert werden.

| Ausdruck mit Operator | Bedeutung              |
| --------------------- | ---------------------- |
| x == y                | x ist gleich y         |
| x != y                | x ist ungleich y       |
| x \> y                | x ist größer y         |
| x < y                 | x ist kleiner y        |
| x \>= y               | x ist größer gleich y  |
| x <= y                | x ist kleiner gleich y |

:::danger Hinweis

Da der Vergleichsoperator `==` auf referenzielle Gleichheit prüft, sollte zum
Vergleich von zwei Objekten die Methode `boolean equals(object: Object)`
verwendet werden.

:::

## Priorität von Operatoren

Operatoren werden gemäß ihrer Priorität verarbeitet.

| Priorität | Operator                                                     |
| --------- | ------------------------------------------------------------ |
| 1         | ()                                                           |
| 2         | ++, --, Vorzeichenplus, Vorzeichenminus, \~, !, (_Datentyp_) |
| 3         | \*, /, %                                                     |
| 4         | +, -                                                         |
| 5         | <, <=, \>, \>=                                               |
| 6         | ==, !=                                                       |
| 7         | &                                                            |
| 8         | ^                                                            |
| 9         | \|                                                           |
| 10        | &&                                                           |
| 11        | \|\|                                                         |
