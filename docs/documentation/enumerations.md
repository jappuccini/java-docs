---
title: Aufzählungen (Enumerations)
description: ''
sidebar_position: 150
tags: [enumerations]
---

Eine Aufzählung (Enumeration) ist eine spezielle Klasse, von der nur eine
vorgegebene, endliche Anzahl an Instanzen existiert. Diese Instanzen heißen
_Aufzählungskonstanten_ und sind technisch gesehen öffentliche, statische
Konstanten vom Typ der Aufzählung selbst.

## Implementieren von Aufzählungen

Eine Aufzählung wird ähnlich wie eine Klasse definiert. Das Schlüsselwort lautet
`enum`.

```java title="WeekDay.java" showLineNumbers
public enum Weekday {

   MONDAY("Montag", true),
   TUESDAY("Dienstag", true),
   WEDNESDAY("Mittwoch", true),
   THURSDAY("Donnerstag", true),
   FRIDAY("Freitag", true),
   SATURDAY("Samstag", true),
   SUNDAY("Sonntag", false);

   private final String description;
   private final boolean isWorkingDay;

   Weekday(String description, boolean isWorkingDay) {
      this.description = description;
      this.isWorkingDay = isWorkingDay;
   }

   public String description() {
      return description;
   }

   public boolean workingDay() {
      return isWorkingDay;
   }

}
```

## Verwenden von Aufzählungen

Aufzählungen stellen eine Reihe hilfreicher Methoden bereit:

- `T[] values()` — statisch; gibt alle Aufzählungskonstanten als Feld zurück
- `T valueOf(name: String)` — statisch; gibt die Aufzählungskonstante zur
  angegebenen Zeichenkette zurück
- `int ordinal()` — gibt die nullbasierte Ordnungszahl der Konstante zurück

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      Weekday monday = Weekday.valueOf("MONDAY");
      for (Weekday w : Weekday.values()) {
         System.out.println(w.ordinal());
      }
   }

}
```
