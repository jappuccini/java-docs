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

## Wiederholungsaufgabe 1

Es soll eine erste Version des Kill Team Spiels erstellt werden. Erstelle hierzu
eine ausführbare Klasse wie folgt:

- es sollen Datenobjekte für die Eigenschaften _Name Spieler_, _Name Kämpfer_,
  _LP Kämpfer_ sowie _Wurfert_ des ER-Modells für 2 Spieler, 2 Kämpfer und 10
  Würfel deklariert werden
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

*----------------*
* Runde 1, Zug 1 *
*----------------*
Kämpfer von Hans: Gregor (8 LP)
Kämpfer von Peter: Bonekraka (10 LP)

Gregor würfelt 2, 2, 3 und 6.
Gregor erzielt 13 Treffer.
Bonekraka würfelt 1, 4 und 5.
Bonekraka erzielt 10 Blocks.
Bonekraka erleidet 3 Schaden und hat noch 7 LP.

*----------------*
* Runde 1, Zug 2 *
*----------------*
Kämpfer von Hans: Gregor (8 LP)
Kämpfer von Peter: Bonekraka (7 LP)

Bonekraka würfelt 1, 1, 3 und 5.
Bonekraka erzielt 10 Treffer.
Gregor würfelt 2, 4 und 5.
Gregor erzielt 11 Blocks.
Gregor erleidet -1 Schaden und hat noch 9 LP.
```

## Wiederholungsaufgabe 2

Es soll eine zweite Version des Kill Team Spiels entwickelt werden. Passe hierzu
die ausführbare Klasse wie folgt an:

- es sollen zusätzliche Datenobjekte für die Eigenschaften _VW Kämpfer_, _RW
  Kämpfer_, _Name Waffe_, _Typ Waffe_, _AW Waffe_, _BF/KG Waffe_, _SW Waffe_ und
  _KS Waffe_ des ER-Modells für 2 Spieler, 2 Kämpfer, 2 Nah- sowie 2
  Fernkampfwaffen (je eine Nah- und Fernkampfwaffe pro Kämpfer) und 10 Würfel
  deklariert werden
- es soll möglich sein, den neuen Datenobjekten Werte über die Konsole
  zuzuweisen (alternativ können den Datenobjekten auch statisch Werte zugewiesen
  werden)
- es soll ein vollständiges Spiel umgesetzt werden

### Beispielhafte Konsolenausgabe

```console
Spieler 1, Name: Hans
Spieler 1, Kämpfer 1, Name: Gregor
Spieler 1, Kämpfer 1, LP: 8
Spieler 1, Kämpfer 1, VW: 3
Spieler 1, Kämpfer 1, RW: 5
Spieler 1, Kämpfer 1, Waffe 1, Name: Boltpistole
Spieler 1, Kämpfer 1, Waffe 1, Ty: Fernkampfwaffe
Spieler 1, Kämpfer 1, Waffe 1, AW: 4
Spieler 1, Kämpfer 1, Waffe 1, BF_KG: 3
Spieler 1, Kämpfer 1, Waffe 1, SW: 2
Spieler 1, Kämpfer 1, Waffe 1, KS: 3
Spieler 1, Kämpfer 1, Waffe 2, Name: Energieschwert
Spieler 1, Kämpfer 1, Waffe 2, Typ: Nahkampfwaffe
Spieler 1, Kämpfer 1, Waffe 2, AW: 4
Spieler 1, Kämpfer 1, Waffe 2, BF_KG: 3
Spieler 1, Kämpfer 1, Waffe 2, SW: 3
Spieler 1, Kämpfer 1, Waffe 2, KS: 5

Spieler 2, Name: Peter
Spieler 2, Kämpfer 1, Name: Bonekraka
Spieler 2, Kämpfer 1, LP: 10
Spieler 2, Kämpfer 1, VW: 3
Spieler 2, Kämpfer 1, RW: 5
Spieler 2, Kämpfer 1, Waffe 1, Name: Bolter
Spieler 2, Kämpfer 1, Waffe 1, Typ: Fernkampfwaffe
Spieler 2, Kämpfer 1, Waffe 1, AW: 4
Spieler 2, Kämpfer 1, Waffe 1, BF_KG: 3
Spieler 2, Kämpfer 1, Waffe 1, SW: 3
Spieler 2, Kämpfer 1, Waffe 1, KS: 4
Spieler 2, Kämpfer 1, Waffe 2, Name: Spalta
Spieler 2, Kämpfer 1, Waffe 2, Typ: Nahkampfwaffe
Spieler 2, Kämpfer 1, Waffe 2, AW: 4
Spieler 2, Kämpfer 1, Waffe 2, BF_KG: 4
Spieler 2, Kämpfer 1, Waffe 2, SW: 3
Spieler 2, Kämpfer 1, Waffe 2, KS: 4

*----------------*
* Runde 1, Zug 1 *
*----------------*
Kämpfer von Hans: Gregor (8 LP)
Kämpfer von Peter: Bonekraka (10 LP)

Gregor, Angriffsart (N-Nahkampfangriff, F-Fernkampfangriff): F

Gregor würfelt 6, 4, 3 und 2.
Gregor erzielt 2 Treffer und 1 Kritische Treffer.
Bonekraka würfelt 4, 1 und 5.
Bonekraka erzielt 1 Blocks und 0 Kritische Blocks.
Bonekraka erleidet 2 Schaden und 3 Kritischen Schaden und hat noch 5 LP.

*----------------*
* Runde 1, Zug 2 *
*----------------*
Kämpfer von Hans: Gregor (8 LP)
Kämpfer von Peter: Bonekraka (5 LP)

Bonekraka, Angriffsart (N-Nahkampfangriff, F-Fernkampfangriff): N

Bonekraka würfelt 6, 4, 5 und 1.
Bonekraka erzielt 2 Attacken und 1 Kritische Attacken.
Gregor würfelt 4, 5, 4 und 2.
Gregor erzielt 3 Attacken und 0 Kritische Attacken.

Bonekraka, Aktion (1-Kritisch Schlagen, 2-Schlagen, 3-Kritisch Blocken oder 4-Blocken): 1
Gregor erleidet 4 Kritischen Schaden und hat noch 4 LP.
Gregor, Aktion (1-Kritisch Schlagen, 2-Schlagen, 3-Kritisch Blocken oder 4-Blocken): 2
Bonekraka erleidet 3 Schaden und hat noch 2 LP.
Bonekraka, Aktion (1-Kritisch Schlagen, 2-Schlagen, 3-Kritisch Blocken oder 4-Blocken): 2
Gregor erleidet 3 Schaden und hat noch 1 LP.
Gregor, Aktion (1-Kritisch Schlagen, 2-Schlagen, 3-Kritisch Blocken oder 4-Blocken): 2
Bonekraka erleidet 3 Schaden und stirbt.
```

## Wiederholungsaufgabe 3

Es soll eine dritte Version des Kill Team Spiels entwickelt werden. Passe hierzu
die ausführbare Klasse wie folgt an:

- es sollen zusätzliche Datenobjekte für zusätzliche Kämpfer und Waffen
  deklariert werden
- es soll möglich sein, den neuen Datenobjekten Werte über die Konsole
  zuzuweisen (alternativ können den Datenobjekten auch statisch Werte zugewiesen
  werden)
