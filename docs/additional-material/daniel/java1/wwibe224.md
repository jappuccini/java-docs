---
title: WWIBE224
description: ''
sidebar_position: 40
tags: []
---

## Links

- [GitHub Repository Demos](https://github.com/appenmaier/java_wwibe224)
- [GitHub Repository Musterlösungen Übungsaufgaben](https://github.com/appenmaier/java_exercises)
- [GitHub Repository Musterlösungen Klausuraufgaben](https://github.com/appenmaier/java_exam_exercises)
- [Abbildungen](https://app.mural.co/t/programmierungwwibe2248240/m/programmierungwwibe2248240/1729834706630/301020393cfaff8bb3d89e41e78d79d332f429aa)

## Wiederholungsaufgabe 1 (Vorlesung 1 - 3)

Es soll eine erste Version des Kill Team Spiels erstellt werden. Erstelle hierzu
eine ausführbare Klasse wie folgt:

- es sollen Datenobjekte für die Eigenschaften _Name Spieler_, _Name Kämpfer_,
  _LP Kämpfer_ sowie _Wurfert_ des ER-Modells für 2 Spieler, 2 Kämpfer und 10
  Würfel (je 5 pro Spieler) deklariert werden
- es soll möglich sein, den Datenobjekten für die Eigenschaften der Spieler und
  Kämpfer Werte über die Konsole zuzuweisen
- es sollen lediglich zwei einfache Angriffe simuliert werden

### Ablauf eines einfachen Angriffs und Ermittlung des Schadens

Der angreifende Spieler würfelt mit 4 Würfeln, der verteidigende Spieler würfelt
mit 3 Würfeln. Anschließend wird der Schaden berechnet und dem verteidigenden
Spieler Lebenspunkte in Höhe des Schadens abgezogen. Der Schaden berechnet sich
dabei gemäß der Formel _Anzahl Treffer - Anzahl Blocks_. Die Anzahl Treffer
ergibt sich aus der Summe der Wurfwerte des angreifenden Spielers, die Anzahl
Blocks aus der Summe der Wurfwerte des verteidigenden Spielers.

**Hinweise**

- Wurfwerte sollen zwischen 1 und 6 liegen
- Die Problematiken, dass ein verteidigender Spieler bei einem Angriff "geheilt"
  wird (Anzahl Treffer < Anzahl Blocks) und dass ein "toter" Spieler angreift
  (Schaden beim ersten Angriff >= LP), sollen aktuell noch ignoriert werden.

### Beispielhafte Konsolenausgabe

```console
Spieler 1, Name: Hans
Spieler 1, Kämpfer 1, Name: Gregor
Spieler 1, Kämpfer 1, LP: 8

Spieler 2, Name: Peter
Spieler 2, Kämpfer 1, Name: Bonekraka
Spieler 2, Kämpfer 1, LP: 10

*-------*
* Zug 1 *
*-------*
Kämpfer von Hans: Gregor (8 LP)
Kämpfer von Peter: Bonekraka (10 LP)

Gregor greift Bonekraka an.
Gregor würfelt 2, 2, 3 und 6.
Gregor erzielt 13 Treffer.
Bonekraka würfelt 1, 4 und 5.
Bonekraka erzielt 10 Blocks.
Bonekraka erleidet 3 Schaden und hat noch 7 LP.

*-------*
* Zug 2 *
*-------*
Kämpfer von Hans: Gregor (8 LP)
Kämpfer von Peter: Bonekraka (7 LP)

Bonekraka greift Gregor an.
Bonekraka würfelt 1, 1, 3 und 5.
Bonekraka erzielt 10 Treffer.
Gregor würfelt 2, 4 und 5.
Gregor erzielt 11 Blocks.
Gregor erleidet -1 Schaden und hat noch 9 LP.
```

## Wiederholungsaufgabe 2 (Vorlesung 4 und 5)

Es soll eine zweite Version des Kill Team Spiels entwickelt werden. Passe hierzu
die ausführbare Klasse wie folgt an:

- es sollen zusätzliche Datenobjekte für die Eigenschaften _VW Kämpfer_, _RW
  Kämpfer_, _Name Waffe_, _AW Waffe_, _BF/KG Waffe_ und _SW Waffe_ des
  ER-Modells für 2 Spieler, 2 Kämpfer, 2 Waffen (je eine pro Kämpfer) und 10
  Würfel (je 5 pro Spieler) deklariert werden
- es soll möglich sein, den neuen Datenobjekten Werte über die Konsole
  zuzuweisen (alternativ können den Datenobjekten auch statisch Werte zugewiesen
  werden)
- es soll ein vollständiges Spiel mit einfachen Angriffen umgesetzt werden

### Beispielhafte Konsolenausgabe

```console
Spieler 1, Name eingeben: Hans
Spieler 1, Kämpfer 1, Name eingeben: Gregor
Spieler 1, Kämpfer 1, LP eingeben: 8
Spieler 1, Kämpfer 1, VW eingeben: 3
Spieler 1, Kämpfer 1, RW eingeben: 5
Spieler 1, Kämpfer 1, Waffe 1, Name eingeben: Boltpistole
Spieler 1, Kämpfer 1, Waffe 1, AW eingeben: 4
Spieler 1, Kämpfer 1, Waffe 1, BF_KG eingeben: 3
Spieler 1, Kämpfer 1, Waffe 1, SW eingeben: 2

Spieler 2, Name eingeben: Peter
Spieler 2, Kämpfer 1, Name eingeben: Bonekraka
Spieler 2, Kämpfer 1, LP eingeben: 10
Spieler 2, Kämpfer 1, VW eingeben: 3
Spieler 2, Kämpfer 1, RW eingeben: 5
Spieler 2, Kämpfer 1, Waffe 1, Name eingeben: Spalta
Spieler 2, Kämpfer 1, Waffe 1, AW eingeben: 4
Spieler 2, Kämpfer 1, Waffe 1, BF_KG eingeben: 4
Spieler 2, Kämpfer 1, Waffe 1, SW eingeben: 3

*----------------*
* Runde 1, Zug 1 *
*----------------*
Kämpfer von Hans: Gregor (8 LP)
Kämpfer von Peter: Bonekraka (10 LP)

Gregor greift Bonekraka mit Boltpistole an.
Gregor würfelt 6, 4, 3 und 2.
Gregor erzielt 3 Treffer.
Bonekraka würfelt 4, 1 und 5.
Bonekraka erzielt 1 Blocks.
Bonekraka erleidet 4 Schaden und hat noch 6 LP.

*----------------*
* Runde 1, Zug 2 *
*----------------*
Kämpfer von Hans: Gregor (8 LP)
Kämpfer von Peter: Bonekraka (6 LP)

Bonekraka greift Gregor mit Spalta an.
Bonekraka würfelt 2, 4, 3 und 2.
Bonekraka erzielt 1 Treffer.
Gregor würfelt 3, 5 und 5.
Gregor erzielt 2 Blocks.
Gregor erleidet 0 Schaden und hat noch 8 LP.

*----------------*
* Runde 2, Zug 1 *
*----------------*
Kämpfer von Hans: Gregor (8 LP)
Kämpfer von Peter: Bonekraka (6 LP)

Gregor greift Bonekraka mit Boltpistole an.
Gregor würfelt 1, 5, 5 und 3.
Gregor erzielt 3 Treffer.
Bonekraka würfelt 5, 4 und 2.
Bonekraka erzielt 1 Blocks.
Bonekraka erleidet 4 Schaden und hat noch 2 LP.

*----------------*
* Runde 2, Zug 2 *
*----------------*
Kämpfer von Hans: Gregor (8 LP)
Kämpfer von Peter: Bonekraka (2 LP)

Bonekraka greift Gregor mit Spalta an.
Bonekraka würfelt 6, 4, 6 und 1.
Bonekraka erzielt 3 Treffer.
Gregor würfelt 4, 2 und 4.
Gregor erzielt 0 Blocks.
Gregor erleidet 9 Schaden und stirbt.
```

## Wiederholungsaufgabe 3 (Vorlesung 5 und 6)

Es soll eine dritte Version des Kill Team Spiels entwickelt werden. Überführe
hierzu den bisherigen imperativen Programmentwurf in einen objektorientierten
Programmentwurf.
