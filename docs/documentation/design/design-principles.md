---
title: Gestaltungsprinzipien (Design Principles)
description: ''
sidebar_position: 10
tags: []
---

Unter Gestaltungsprinzipien (Design Principles) versteht man Richtlinien, welche eine hohe Softwarequalität sicherstellen sollen. Neben einfachen Gestaltungsprinzipen wie _DRY_ (Don´t Repeat Yourself), _KISS_ (Keep It Simple, Stupid) und _YAGNI_
(You Ain´t Gonna Need It), sind in der objektorientierten Programmierung vor allem die SOLID-Prinzipen sowie die Prinzipien *_Separation of Concerns_ und _Inversion of Control_ von Bedeutung.

## Die SOLID-Prinzipien
Hinter dem Akronym SOLID verbergen sich 5 Gestaltungsprinzipien:
- _Single Responsibility Principle_: jede Klasse sollte genau eine Verantwortung besitzen
- _Open Closed Principle_: Software-Einheiten sollten offen für Erweiterungen, aber geschlossen für Modifikationen sein
- _Liscov Substitution Principle_: Objekte von Unterklassen sollten sich so Verhalten wie Objekte der dazugehörigen Oberklasse
- _Interface Segregation Principle_: Klassen sollten nur Methoden implementieren müssen, die sie auch verwenden
- _Dependency Inversion Principle_: Abhängigkeiten sollten immer von den konkreten zu den abstrakten Modulen verlaufen

Das Akronym SOLID geht auf den Softwareentwickler Robert C. Martin zurück, der unter anderem auch an der Entwicklung des Agilen Manifests beteiligt war. Dieses wurde 2001 verfasst und umfasst die vier wesentlichen Leitsätze der agilen Softwareentwicklung.

## Separation of Concerns
Unter dem Begriff _Separation of Concerns_ versteht man in der Informatik das Gestaltungsprinzip, die verschiedenen Aufgaben einer Anwendung in verschiedene Bereiche aufzuteilen. Grafische Benutzeroberflächen werden zum Beispiel in der Regel in die Bereiche 
Aufbau, Aussehen und Verhalten aufgeteilt.

![image](https://user-images.githubusercontent.com/47243617/209138908-2809dfe5-38c6-4386-b319-e694ae1b9f31.png)

## Inversion of Control
Der Begriff _Inversion of Control_ beschreibt die Arbeitsweise von Frameworks: Die Funktionen einer Anwendung werden beim Framework registriert, welches die Funktionen zu einem späteren Zeitpunkt aufruft, d.h. die Steuerung des Kontrollfluss obliegt nicht der 
Anwendung, sondern dem Framework. Daher versteht man unter einem Framework ein Programmiergerüst, welches die Architektur für die Anwendung vorgibt und den Kontrollfluss der Anwendung steuert.

Die Umkehr der Steuerung kann auch als Anwendung des Hollywood-Prinzips (_Don´t call us, we´ll call you_) verstanden werden.
