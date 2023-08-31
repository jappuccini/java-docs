---
title: JavaStreamAPI01
description: ''
---

import Exercise from '@site/src/components/Exercise';
import ClassDiagramm from '@site/static/img/exercises/java-stream-api/java-stream-api01.png';

- Erstelle die Klasse `Queries` anhand des abgebildeten Klassendiagramms
- Erstelle eine ausführbare Klasse, welche alle erstellten Abfragen ausführt und die Ergebnisse auf der Konsole ausgibt

## Klassendiagramm
<img src={ClassDiagramm} />

## Hinweis zur Klasse Console
Konsolen, die aktuell noch verkauft werden, besitzen bei der Lebensspanne den Wert `-1` (Stand: 14.06.2023)

## Hinweise zur Klasse Queries
- Die Methode `List<String> getAllCurrentConsoleNames()` soll die Namen aller Konsolen, die aktuell noch verkauft werden zurückgeben (_Nintendo Switch, PlayStation 4, XBox One_)
- Die Methode `List<VideoGameConsole> getAllConsolesSortedByLifespan()` soll alle Konsolen absteigend sortiert nach der Lebensspanne zurückgeben (_VideoGameConsole\[title=Nintendo Wii, maker=NINTENDO, lifespan=13, soldUnits=101.63]_,...)
- Die Methode `boolean isAnyConsoleWithMoreThan150MillionSoldUnits()` soll die Antwort auf die Frage, ob es eine Konsole mit mehr als 150 Millionen verkauften Einheiten gibt, zurückgeben (_true_)
- Die Methode `boolean isAllConsolesWithMoreThan50MillionSoldUnits()` soll die Antwort auf die Frage, ob von allen Konsolen mehr als 50 Millionen Einheiten verkauft wurden, zurückgeben (_false_)
- Die Methode `long getNumberOfConsolesFromNintendo()` soll die Anzahl der Konsolen von Nintendo zurückgeben (_8_)
- Die Methode `List<String> getSoldUnitsInMillionsPerYearFromAllOutdatedConsoles()` soll die Namen aller Konsolen, die nicht mehr verkauft werden sowie die Anzahl verkaufter Einheiten pro Jahr in Millionen zurückgeben (_PlayStation 2 (13.225)_,...)
- Die Methode `OptionalDouble getAverageSoldUnitsInMillionsPerYearFromAllOutdatedConsoles()` soll den Durchschnitt verkaufter Einheiten pro Jahr in Millionen aller Konsolen, die nicht mehr verkauft werden zurückgeben (_9.900365412365412_)
- Die Methode `Map<Maker, List<VideogameConsole>> getAllConsolesByMaker()` soll alle Konsolen gruppiert nach den Herstellern zurückgeben (_MICROSOFT: \[VideoGameConsole\[title=XBox 360, maker=MICROSOFT, lifespan=12, soldUnitsInMillions=85.81]_,...],...)
- Die Methode `Map<Maker, Double> getTotalSoldUnitsInMillionsPerMaker()` soll die Anzahl verkaufter Einheiten pro Hersteller in Millionen zurückgeben (_MICROSOFT: 137.07_,...)


<Exercise pullRequest="71" branchSuffix="stream-api/01" />
