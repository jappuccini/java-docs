---
title: Aufzählungen (Enumerations)
description: ''
sidebar_position: 150
tags: [enumerations]
---

Bei einer Aufzählung (Enumeration) handelt es sich um eine spezielle Klasse, von
der nur eine vorgegebene, endliche Anzahl an Instanzen existiert. Diese
Instanzen werden als _Aufzählungskonstanten_ bezeichnet. Technisch gesehen
handelt es sich bei Aufzählungskonstanten um öffentliche, statische Konstanten
vom Typ der Aufzählung.

## Implementieren von Aufzählungen

Die Definition einer Aufzählung erfolgt analog zur Definition von Klassen, das
Schlüsselwort hierfür lautet `enum`.

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

Aufzählungen besitzen eine Reihe hilfreicher Methoden:

- Die statische Methode `T[] values()` gibt alle Aufzählunskonstanten als Feld
  zurück
- Die statische Methode `T valueOf(name: String)` gibt zu einer eingehenden
  Zeichenkette die dazugehörige Aufzählungskonstante zurück
- Die Methode `int ordinal()` gibt die Ordnungszahl der Aufzählungskonstanten
  zurück

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
