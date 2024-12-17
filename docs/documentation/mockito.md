---
title: Mockito
description: ''
sidebar_position: 325
tags: [unit-tests]
---

[Mockito](https://site.mockito.org/) ist ein leistungsfähiges und einfach zu
verwendendes Framework für das Erstellen von Mock-Objekten in Java. Es bietet
eine Vielzahl von Funktionen, um das Verhalten von Objekten zu simulieren und zu
überprüfen, was das Testen von Anwendungen erheblich vereinfacht.

## Test Doubles

Oftmals werden zum Testen einer Methode andere Objekte bzw. Komponenten
benötigt, die vom Test bereitgestellt werden müssen. Um Abhängigkeiten des SUT
(System under Test) zu minimieren, kommen beim Testen selten die realen
Komponenten, sondern sogenannte _Test Doubles_ zum Einsatz:

- Eine _Fälschung_ (Fake) imitiert eine reale Komponente
- Eine _Attrappe_ (Dummy) ist ein Platzhalter für ein Objekt, welches im Test
  nicht benötigt wird
- Ein _Stummel_ (Stub) gibt bei Aufruf einen festen Wert zurück; wird also für
  eingehende Aufrufe verwendet
- Eine _Nachahmung_ (Mock) zeichnet die Methodenaufrufe an ihr auf und kann
  zurückgeben, welche Methode wie oft mit welchen Parametern aufgerufen wurde;
  wird also für ausgehende Aufrufe verwendet
- Ein _Spion_ (Spy) kann ähnlich wie eine Nachahmung Methodenaufrufe
  aufzeichnen, kann diese aber auch die reale Komponente weiterleiten

:::note Hinweis

Man spricht in diesem Zusammenhang auch von Test-Isolierung.

:::
