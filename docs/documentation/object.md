---
title: Die Mutter aller Klassen
description: ''
sidebar_position: 190
tags: []
---

Alle Klassen in Java sind letztlich Unterklassen der Klasse `Object`. Daher wird diese auch als die Mutter aller Klassen bezeichnet. Die Klasse vererbt ihren Unterklassen wichtige Methoden, die jede Unterklasse überschreiben sollte:
- Die Methode `boolean equals(object: Object)` prüft zwei Objekte auf Gleichheit
- Die Methode `int hashCode()` liefert den Hashcode des aktuellen Objektes zurück
- Die Methode `String toString()` liefert eine eindeutige Kennung des Objektes in der Form _[Vollständiger Klassenname]_@_[Adresse des Objektes im Hauptspeicher in hexadezimaler Notation]_ zurück

:::note Hinweis
Zwei Objekte sind gleich, wenn all ihre Attribute gleich sind.
:::

:::note Hinweis
Wird den print-Methoden des Ausgabestroms `System.out` eine Objektreferenz übergeben, wird implizit die Methode `String toString()` des jeweiligen Objektes aufgerufen.
:::
