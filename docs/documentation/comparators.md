---
title: Komparatoren
description: ''
sidebar_position: 220
tags: [comparators]
---

Mit Hilfe der Methode `int compareTo(o: T)` der Schnittstelle `Comparable<T>`
bzw. der Methode `int compare(o1: T, o2: T)` der Schnittstelle `Comparator<T>`
können Objekte einer Klasse miteinander verglichen werden. Der Rückgabewert
beider Methoden gibt die Ordnung der zu vergleichenden Objekte an:

- Rückgabewert kleiner Null: das Vergleichsobjekt ist größer
- Rückgabewert gleich Null: beide Objekte sind gleich groß
- Rückgabewert größer Null: das Vergleichsobjekt ist kleiner

Objekte der Klasse `Notebook` können durch die Implementierung der Methode
`int compareTo(o: T)` der Schnittstelle `Comparable<T>` miteinander verglichen
werden.

```java title="Notebook.java (Auszug)" showLineNumbers
public final class Notebook extends Computer implements Comparable<Notebook> {
   ...
   @Override
   public int compareTo(Notebook o) {
      return Integer.compare(o.memoryInGb, memoryInGb);
   }
   ...
}
```

Die Klasse `NotebookByPowerInGhzComparator` ermöglicht das Vergleichen von
Objekten der Klasse `Notebook` anhand der Prozessorleistung.

```java title="NotebookByPowerInGhzComparator.java" showLineNumbers
public class NotebookByPowerInGhzComparator implements Comparator<Notebook> {
   ...
   @Override
   public int compare(Notebook o1, Notebook o2) {
      return Integer.compare(o1.cpu().powerInGhz(), o2.cpu.powerInGhz());
   }
   ...
}
```

In der main-Methode der Startklasse wird mit Hilfe der statischen Methode
`void sort(list: List<T>)` der Klasse `Collections` eine Liste mit Objekten der
Klasse `Notebook` sortiert. Aufgrund der Implementierung der compareTo-Methode
wird die Liste zunächst absteigend nach dem Attribut `memoryInGb` sortiert.
Anschließend wird die Liste aufsteigend nach der Prozessorleistung sortiert.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      List<Notebook> notebooks = new ArrayList<>();
      notebooks.add(new Notebook("Mein Office Laptop", new Cpu(3.5, 8), 16, 14));
      notebooks.add(new Notebook("Mein Gaming Laptop", new Cpu(4.7, 8), 32, 16));

      Collections.sort(notebooks);
      Collections.sort(notebooks, new NotebookByPowerInGhzComparator());
   }

}
```
