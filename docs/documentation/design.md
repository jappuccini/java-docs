---
title: Softwaredesign
description: ''
sidebar_position: 15
tags: []
---

Als Teilprozess der Softwareentwicklumg umfasst das Softwaredesign die
Datenmodellierung, den Entwurf der Softwarearchitektur sowie das Festlegen
benötigter Komponenten, Datentypen und Algorithmen. Bei der Datenmodellierung
werden alle relevanten Objekte der Anwendung inklusive ihrer Eigenschaften und
Beziehungen zueinander dargestellt; die Softwarearchitektur beschreibt alle
relevanten Komponenten und deren Interaktionen. Bei der Gestaltung von Software
kommen häufig Entwurfsmuster zur Lösung wiederkehrender Probleme zum Einsatz.
Zudem soll durch Beachtung von Gestaltungsprinzipien eine hohe Softwarequalität
sichergestellt werden.

## Entwurfsmuster

Entwurfsmuster (Design Patterns) sind Lösungsansätze für wiederkehrende Probleme
der Softwareentwicklung und sollen dabei helfen, Programmierfehler zu vermeiden,
Programmentwürfe wiederverwendbar und möglichst effizient zu gestalten. Sie
können u.a. in Erzeugungsmuster (z.B. Einzelstück (Singleton)), Strukturmuster
(z.B. Adapter) und Verhaltensmuster (z.B. Beobachter (Observer)) unterteilt
werden. Der Begriff Entwurfsmuster wurde maßgeblich durch das 1994 erschienene
Buch _Design Patterns – Elements of Reusable Object-Oriented Software_ von
Richard Helm, Ralph Johnson und John Vlissides (auch bekannt als _Gang of Four_)
geprägt.

## Gestaltungsprinzipien

Unter Gestaltungsprinzipien (Design Principles) versteht man Richtlinien, welche
eine hohe Softwarequalität sicherstellen sollen. Neben einfachen
Gestaltungsprinzipen wie _DRY_ (Don´t Repeat Yourself), _KISS_ (Keep It Simple,
Stupid) und _YAGNI_ (You Ain´t Gonna Need It) sind in der objektorientierten
Programmierung vor allem die SOLID-Prinzipen von Bedeutung. Hinter dem Akronym
SOLID verbergen sich 5 Gestaltungsprinzipien:

- _Single Responsibility Principle_: jede Klasse sollte genau eine Verantwortung
  besitzen
- _Open Closed Principle_: Software-Einheiten sollten offen für Erweiterungen,
  aber geschlossen für Modifikationen sein
- _Liscov Substitution Principle_: Objekte von Unterklassen sollten sich so
  Verhalten wie Objekte der dazugehörigen Oberklasse
- _Interface Segregation Principle_: Klassen sollten nur Methoden implementieren
  müssen, die sie auch verwenden
- _Dependency Inversion Principle_: Abhängigkeiten sollten immer von den
  konkreten zu den abstrakten Modulen verlaufen

Das Akronym SOLID geht auf den Softwareentwickler Robert C. Martin zurück, der
unter anderem auch an der Entwicklung des Agilen Manifests beteiligt war. Dieses
wurde 2001 verfasst und umfasst die vier wesentlichen Leitsätze der agilen
Softwareentwicklung.
