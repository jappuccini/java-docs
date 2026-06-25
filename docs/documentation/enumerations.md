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

- `String name()` — gibt den Namen der Konstante exakt so zurück, wie er im
  Quellcode deklariert wurde (z.B. `"MONDAY"`)
- `T[] values()` — statisch; gibt alle Aufzählungskonstanten als Feld zurück
- `T valueOf(name: String)` — statisch; gibt die Aufzählungskonstante zur
  angegebenen Zeichenkette zurück
- `int ordinal()` — gibt die nullbasierte Ordnungszahl der Konstante zurück

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      Weekday monday = Weekday.valueOf("MONDAY");
      System.out.println(monday.name());    // MONDAY
      System.out.println(monday.ordinal()); // 0

      for (Weekday w : Weekday.values()) {
         System.out.println(w.ordinal() + ": " + w.description());
      }
   }

}
```

:::info

`name()` und `toString()` liefern bei einfachen Aufzählungen dasselbe Ergebnis.
`name()` ist jedoch fest spezifiziert und kann nicht überschrieben werden;
`toString()` kann dagegen in der Aufzählung überschrieben werden, um eine
angepasste Darstellung zu liefern.

:::

## Abstrakte Methoden in Aufzählungen

Aufzählungen können abstrakte Methoden deklarieren, wenn jede Konstante ein
individuelles Verhalten bereitstellen soll. Jede Aufzählungskonstante muss die
abstrakte Methode dann mit einer eigenen Implementierung überschreiben.

```java title="Operation.java" showLineNumbers
public enum Operation {

   ADD {
      @Override
      public double apply(double a, double b) {
         return a + b;
      }
   },
   SUBTRACT {
      @Override
      public double apply(double a, double b) {
         return a - b;
      }
   },
   MULTIPLY {
      @Override
      public double apply(double a, double b) {
         return a * b;
      }
   },
   DIVIDE {
      @Override
      public double apply(double a, double b) {
         if (b == 0) throw new ArithmeticException("Division durch null");
         return a / b;
      }
   };

   public abstract double apply(double a, double b);

}
```

In der Startklasse können alle Operationen einheitlich über den gemeinsamen
Methodenaufruf verwendet werden, ohne dass eine `switch`-Fallunterscheidung
nötig ist.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      double a = 10;
      double b = 3;

      for (Operation op : Operation.values()) {
         System.out.printf("%s: %.2f%n", op.name(), op.apply(a, b));
      }
      // ADD: 13,00
      // SUBTRACT: 7,00
      // MULTIPLY: 30,00
      // DIVIDE: 3,33
   }

}
```

:::tip

Abstrakte Methoden in Aufzählungen eignen sich besonders dann, wenn sich
Verhalten je nach Konstante unterscheidet und ein `switch`-Ausdruck über die
Aufzählung vermieden werden soll. Das Muster ist eine kompakte Variante des
_Strategy_-Entwurfsmusters.

:::
