---
title: Die Programmiersprache Java
description: ''
sidebar_position: 14
tags: [java]
---

Die Programmiersprache Java gehört zu den problemorientierten
Programmiersprachen und ist daher einfacher zu erlernen und zu verstehen als
maschinenorientierte Sprachen. Bei der Entwicklung von Java verfolgte man das
Ziel, eine einfache, objektorientierte, robuste, architekturneutrale und
parallelisierbare Sprache zu schaffen. Java wurde hauptsächlich von C und C++
beeinflusst, legt aber im Gegensatz zu diesen weniger Wert auf maximale
Leistung, sondern vor allem auf Sicherheit und Fehlerfreiheit.

## Die Geschichte von Java

Anfang der 1990er Jahre startete bei der Firma Sun Microsystems unter der
Leitung von Chefentwickler James Gosling ein Projekt mit dem Codenamen _The
Green Project_. Ziel war es, eine vollständige Betriebssystemumgebung für
unterschiedliche Anwendungsfälle (interaktives Kabelfernsehen, intelligente
Haushaltsgeräte etc.) zu entwickeln. Die daraus entstehende Programmiersprache
sollte ursprünglich den Namen _Oak_ (Object Application Kernel) tragen, wurde
aber schließlich im Mai 1995 unter dem Namen _Java_ veröffentlicht. Der
Durchbruch gelang 1996 durch eine Kooperation mit der Firma Netscape, die eine
Integration von Java-Applets in den Browser Netscape Navigator 2.0 ermöglichte.
Weitere wichtige Meilensteine waren die Veröffentlichung der
Android-Entwicklungsumgebung von Google (2008) sowie des Computerspiels
Minecraft (2009).

:::info

Java war der Name der beliebtesten Kaffeesorte der Entwickler.

:::

## JDK und JRE

Das _Java Development Kit_ (JDK) ist die wichtigste Komponente zur Entwicklung
von Java-Programmen. Es enthält neben dem Compiler und Debugger weitere
Werkzeuge sowie umfangreiche Bibliotheken (siehe [Die Java API](java-api)). Die
_Java Runtime Environment_ (JRE) enthält den Interpreter (die _Java Virtual
Machine_) und wird zum Ausführen von Java-Programmen benötigt. Seit September
2017 erscheint alle sechs Monate eine neue JDK-Version (in der Regel Mitte März
und Mitte September). Diese Versionen werden von Oracle nur bis zum Erscheinen
der jeweils nächsten Version unterstützt. Eine Ausnahme bilden die LTS-Versionen
(Long-Term-Support-Releases). Die aktuellen LTS-Versionen sind 8, 11, 17 und 21.
Die Neuerungen einer Version werden durch sogenannte JEPs (JDK Enhancement
Proposals) festgelegt. Weitere Informationen zu den verschiedenen JDK-Versionen
sind auf der offiziellen [JDK-Seite](https://jdk.java.net/) zu finden.

## Entwicklung von Java-Programmen

Zur Entwicklung von Java-Programmen wird neben dem JDK nur ein einfacher
Texteditor benötigt. Das Kompilieren und Ausführen erfolgt dann über die
Kommandozeile (Command Line Interface, kurz CLI). Alternativ kann eine
Entwicklungsumgebung (Integrated Development Environment, kurz IDE) verwendet
werden. Diese bietet in der Regel zusätzliche Komfortfunktionen wie
Syntaxhervorhebung, Autovervollständigung und Vorschlagslisten, was die
Entwicklung deutlich erleichtert. Die am weitesten verbreiteten IDEs im
Java-Umfeld sind [IntelliJ IDEA](https://www.jetbrains.com/idea/) und
[Eclipse IDE](https://www.eclipse.org/).

## Programmierstil (Code Style)

Als Programmierstil (Code Style) bezeichnet man alle Regeln und Richtlinien, die
Entwicklerinnen und Entwickler befolgen sollten, um sicherzustellen, dass ihr
Quellcode konsistent, gut lesbar und leicht wartbar ist. Ein einheitlicher
Programmierstil erleichtert auch die Zusammenarbeit in Teams, da er die
Verständlichkeit und Wartbarkeit des Codes verbessert.

Ein Programmierstil legt unter anderem Regeln für folgende Aspekte fest:

- Namenskonventionen
- Klammersetzung
- Leerzeichen
- Leerzeilen
- Einrückung
- Zeilenlänge und Zeilenumbrüche
- Kommentare und Dokumentation

Zu den bekanntesten Programmierstilen in Java gehören die offiziellen
[Code Conventions for the Java Programming Language](https://www.oracle.com/java/technologies/javase/codeconventions-introduction.html)
von Oracle sowie der
[Google Java Style](https://google.github.io/styleguide/javaguide.html) von
Google. Zudem gibt es mit
[Prettier Java](https://github.com/jhipster/prettier-java) eine Erweiterung für
den weit verbreiteten Code-Formatierer [Prettier](https://prettier.io/). Neben
vielen Gemeinsamkeiten — etwa dem Verzicht auf Tabulatorzeichen zur Einrückung,
den Regeln zu Leerzeichen sowie zur Klammersetzung — unterscheiden sich die
genannten Stile in Details wie der Anzahl der Leerzeichen zur Einrückung, der
festgelegten Zeilenlänge sowie dem Umgang mit Zeilenumbrüchen bei funktionalen
Aufrufen.
