---
title: Feldbasierte Listen (ArrayLists)
description: ''
sidebar_position: 141
tags: [collections, arrays, lists]
---

Die Klasse `ArrayList<E>` aus der Java API stellt eine veränderbare Liste
dynamischer Größe auf Basis eines Feldes bereit und bietet Methoden zum
Hinzufügen, Ändern, Löschen und Lesen von Elementen.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      ArrayList<String> names = new ArrayList<>();
      names.add("Hans");
      names.add("Peter");
      names.add("Lisa");

      System.out.println(names.size());    // Anzahl der Elemente
      System.out.println(names.get(0));    // Element an Index 0 lesen
      names.set(0, "Max");                 // Element an Index 0 ersetzen
      names.add("Heidi");                  // Element am Ende hinzufügen
      names.remove(0);                     // Element an Index 0 entfernen
   }

}
```

Die folgende Tabelle zeigt häufig verwendete Methoden der Klasse `ArrayList<E>`.

| Methode                 | Rückgabetyp | Beschreibung                                        |
| ----------------------- | ----------- | --------------------------------------------------- |
| `add(e: E)`             | `boolean`   | Fügt ein Element am Ende hinzu                      |
| `add(index: int, e: E)` | `void`      | Fügt ein Element an der angegebenen Position ein    |
| `get(index: int)`       | `E`         | Gibt das Element an der angegebenen Position zurück |
| `set(index: int, e: E)` | `E`         | Ersetzt das Element an der angegebenen Position     |
| `remove(index: int)`    | `E`         | Entfernt das Element an der angegebenen Position    |
| `remove(o: Object)`     | `boolean`   | Entfernt das erste Vorkommen des Objekts            |
| `size()`                | `int`       | Gibt die Anzahl der Elemente zurück                 |
| `contains(o: Object)`   | `boolean`   | Prüft, ob das Objekt in der Liste enthalten ist     |
| `indexOf(o: Object)`    | `int`       | Gibt den Index des ersten Vorkommens zurück         |
| `isEmpty()`             | `boolean`   | Prüft, ob die Liste leer ist                        |
| `clear()`               | `void`      | Entfernt alle Elemente                              |
