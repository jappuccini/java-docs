---
title: Allgemeine Hilfe (man java-docs)
description: ''
sidebar_position: 30
tags: []
---

# Aufgaben

Für alle Themengebiete gibt es Übungsaufgaben, die sich im
java-exercises-Repository befinden.

Zunächst muss das Repository auf den Rechner heruntergeladen werden, an dem du
arbeitest. Wechsle dazu mit der Kommandozeile in den gewünschten Ordner und
führe folgenden Befehl aus:

```bash
git clone https://github.com/jappuccini/java-exercises.git
```

Jede Aufgabe enthält eine Ausgangssituation, von der aus du die Aufgabe
bearbeitest. Diese kann bereits erstellte Klassen aus den vorherigen Aufgaben
enthalten. Weiterhin gibt es für jede Aufgabe einen Lösungsvorschlag. Weicht
deine Lösung vom Lösungsvorschlag ab, so ist das kein Problem – sie kann
trotzdem richtig sein. Die Lösung muss jedoch immer ohne externe Bibliotheken
funktionieren. Als Drittes enthält jede Aufgabe eine Ansicht (Diff), in der du
nachsehen kannst, an welchen Stellen Änderungen entfernt, bearbeitet und
hinzugefügt wurden. Öffne immer eine Kommandozeile auf deinem Computer und
navigiere in den entsprechenden Ordner, damit du die nachfolgend genannten
Befehle ausführen kannst.

Die Übungsaufgabe
[Class Diagrams 02](/exercises/class-diagrams/class-diagrams02) enthält im
unteren Bereich drei Tabs: Exercise, Solution und Diff.

Um das Aufgabenverzeichnis zu bereinigen und alle Änderungen
zwischenzuspeichern, führe die nachfolgenden Befehle aus. Sie legen alle
Änderungen zwischen (stash). Gib sie immer vor der Bearbeitung einer neuen
Aufgabe ein:

```bash
git add . && git stash
```

Um eine Aufgabe zu bearbeiten, klicke auf den Tab Exercise und kopiere den
jeweiligen Befehl. In unserem Beispiel:

```bash
git switch exe/class-diagrams-02
```

Führe ihn anschließend in der Kommandozeile aus.

Das häufigste Vorgehen ist:

- Bereinigen mit dem erstgenannten Befehl und anschließend die Aufgabe in der
  Ausgangssituation auschecken.
