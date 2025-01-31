---
title: Die Programmiersprache Java
description: ''
sidebar_position: 14
tags: [java]
---

Die Programmiersprache Java gehört zu den problemorientierten
Programmiersprachen und ist daher einfacher zu erlernen und einfacher zu
verstehen als maschinenorientierte Programmiersprachen. Bei der Entwicklung von
Java verfolgte man das Ziel, eine einfache, objektorientierte, robuste,
architekturneutrale und parallelisierbare Programmiersprache zu entwickeln. Java
wurde hauptsächlich von C und C++ beeinflusst, ist allerdings im Gegensatz zu C
und C++ nicht darauf ausgelegt, möglichst leistungsfähige Programme zu erzeugen,
sondern möglichst sichere und fehlerfreie Programme.

## Die Geschichte von Java

Anfang der 90er begannen bei der Firma Sun Microsystems unter Federführung des
Chefentwicklers James Gosling die Arbeiten an einem Projekt mit dem Codenamen
_The Green Project_ mit dem Ziel, eine vollständige Betriebssystemumgebung für
unterschiedliche Zwecke (interaktives Kabelfernsehen, intelligente
Kaffeemaschinen etc.) zu entwickeln. Die daraus entstehende Programmiersprache
sollte ursprünglich den Namen _Oak_ (Object Application Kernel) tragen, wurde
aber schließlich im Mai 1995 unter dem Namen _Java_ veröffentlicht. Der große
Durchbruch von Java kam 1996 durch eine Kooperation mit der Firma Netscape
zustande, die eine Integration von Java-Applets mit Hilfe von JavaScript in den
Browser Netscape Navigator 2.0 ermöglichte. Weitere wichtige Meilensteine in der
Geschichte von Java waren die Veröffentlichungen der Google-Entwicklungsumgebung
Android 2008 sowie des Computerspiels Minecraft 2009.

:::note Hinweis

Java war der Name der beliebtesten Kaffeesorte der Entwickler.

:::

## JDK und JRE

Das JDK (Java Development Kit) stellt die wichtigste Komponente zum
Programmieren von Java-Programmen dar. Es enthält neben dem Compiler und
Debugger weitere wichtige Werkzeuge sowie umfangreiche Bibliotheken (siehe
[Die Java API](java-api)). Die JRE (Java Runtime Environment) enthält den
Interpreter (die _Java Virtual Machine_) und wird zum Ausführen von
Java-Applikationen benötigt. Seit September 2017 wird alle sechs Monate eine
neue JDK-Version veröffentlicht (i.d.R. Mitte März und Mitte September eines
Jahres). Diese Versionen werden von Oracle nur bis zum Erscheinen der jeweils
nächsten Version unterstützt. Eine Ausnahme bilden hier die LTS-Versionen
(long-term-support-releases). Die aktuellen LTS-Versionen sind 8, 11, 17 und 21.
Die Neuerungen einer Version werden durch sogenannte JEPs (JDK Enhancement
Proposals) festgelegt. Weitere Informationen zu den verschiedenen JDK-Versionen
können auf der offziellen [JDK-Seite](https://jdk.java.net/) gefunden werden.

## Entwicklung von Java-Programmen

Zur Entwicklung von Java-Programmen wird neben dem _Java Development Kit_ (JDK)
nur ein einfacher Texteditor benötigt. Das Kompilieren und Ausführen der Klassen
erfolgt dann über die Kommandozeile (Command Line Interface, kurz CLI).
Alternativ kann auch eine Entwicklungsumgebung (Integrated Development
Environment, kurz IDE) verwendet werden. Diese bieten in der Regel zusätzliche
Komfortfunktionen wie Syntaxhighlighting, Autovervollständigung,
Vorschlagslisten etc. und vereinfachen so die Entwicklung von Programmen. Die am
weitesten verbreiteten Entwicklungsumgebungen im Java-Umfeld sind dabei
[IntelliJ IDEA](https://www.jetbrains.com/idea/) und
[Eclipse IDE](https://www.eclipse.org/).
