---
title: Softwaretests
description: ''
sidebar_position: 310
tags: []
---

Softwaretests sollen sicherstellen, dass bei der Entwicklung oder Änderung einer Software der Quellcode in allen festgelegten Anwendungsfällen korrekt funktioniert. Mit Hilfe von Softwaretests können Softwareentwickler im Idealfall schon während des 
Entwicklungsprozesses mögliche Fehler identifizieren und beheben.

## Testarten
Man unterscheidet bei Softwaretests zwischen verschiedenen Testarten, die in der Testpyramide dargestellt werden:
- Akzeptanztests: Testen des gesamten Systems unter realitätsgetreuen Bedingungen
- Systemtests: Testen des gesamten Systems
- Integrationstests: Testen mehrerer, voneinander abhängiger Komponenten
- Komponententests: Testen einzelner, abgeschlossener Softwarebausteine

![image](https://user-images.githubusercontent.com/47243617/209136099-fb19c504-1394-4781-87d6-20811bc274f3.png)

## Testgetriebe Entwicklung (Test Driven Development)
Komponententests (Unit Tests) spielen vor allem bei der Testgetriebenen Entwicklung (Test Driven Development) eine große Rolle. Hierbei werden Anwendungen Schritt für Schritt (also inkrementell) um neue Funktionen erweitert (Red-Green-Refactor-Methode):
- Red: Einen Test schreiben, der zunächst fehlschlägt
- Green: Genau soviel Produktivcode schreiben, damit der Test erfolgreich durchläuft
- Refactor: Testcode und Produktivcode aufräumen (vereinfachen und verbessern)

![image](https://user-images.githubusercontent.com/47243617/209136163-fd99c88b-6864-41fd-9b13-129a964ab2c3.png)

:::note Hinweis
Da durch die vorangestellten Tests eine kontinuierliche Designverbesserung stattfindet, wird die Testgetriebene Entwicklung zu den Designstrategien gezählt.
:::

## Test Doubles
Oftmals werden zum Testen einer Methode andere Objekte bzw. Komponenten benötigt, die vom Test bereitgestellt werden müssen. Zum Testen können entweder die realen Komponenten, oder aber sogenannte **Test Doubles** verwendet werden:
- Eine _Fälschung_ (Fake) imitiert eine reale Komponente
- Eine _Attrappe_ (Dummy) ist ein Platzhalter für ein Objekt, welches im Test nicht benötigt wird
- Ein _Stummel_ (Stub) gibt bei Aufruf einen festen Wert zurück; wird also für eingehende Aufrufe verwendet
- Eine _Nachahmung_ (Mock) zeichnet die Methodenaufrufe an ihr auf und kann zurückgeben, welche Methode wie oft mit welchen Parametern aufgerufen wurde; wird also für ausgehende Aufrufe verwendet
- Ein _Spion_ (Spy) kann ähnlich wie eine Nachahmung Methodenaufrufe aufzeichnen, kann diese aber auch die reale Komponente weiterleiten

Test Doubles sollen die Abhängigkeiten des SUT (System under Test) minimieren und für vorhersagbare Ergebnisse sorgen.
