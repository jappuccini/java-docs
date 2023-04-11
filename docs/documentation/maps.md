---
title: Assoziativspeicher (Maps)
description: ''
sidebar_position: 280
tags: [maps]
---

Unter einem Assoziativspeicher (Map) versteht man eine Menge zusammengehöriger Paare von Objekten. Das erste Objekt stellt dabei den Schlüssel (Key), das zweite Objekt den Wert (Value) dar. Jeder Schlüssel kann dabei nur einmal in einem Assoziativspeicher 
vorhanden sein. Aufgrund dieses Aufbaus werden Assoziativspeicher auch als Wörterbücher bezeichnet.

![image](https://user-images.githubusercontent.com/47243617/209135548-62e0e10e-1f7f-4fd7-99cb-1a4d9a15a9de.png)

Um auf die Einträge, Schlüssel und Werte eines Assoziativspeichers zugreifen können, stellt die Schnittstelle `Map` die Methoden `Set<Entry<K, V>> entrySet()`, `Set<K> keySet()` und `Collection<V> values()` zur Verfügung. 

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {

    HashMap<Integer, String> foos = new HashMap<>();
    foos.put(834, "Hans");
    foos.put(269, "Peter");
    foos.put(771, "Lisa");

    for (Entry<Integer, String> entry : foos.entrySet()) {
      System.out.println(entry.getKey());
      System.out.println(entry.getValue());
    }

    for (Integer i : foos.keySet()) {
      System.out.println(i);
    }

    for (String s : foos.values()) {
      System.out.println(s);
    }

  }

}
```

Die Klasse `HashMap<K, V>` implementiert den Assoziativspeicher in Form einer Hashtabelle. Für den Einsatz einer Hashtabelle ist es zwingend erforderlich, dass die Klasse, die den Schlüssel bildet, die Methoden `int hashCode()` und `boolean equals(object: Object)` 
gemäß den entsprechenden Dokumentationskommentaren überschrieben hat. Im Gegensatz zu einem Binärbaum liegen die Paare in einer Hashtabelle unsortiert vor.

| Index | Schlüssel | Wert |
| ----- | --------- | ---- |
| 0     | Butter    | 3    |
| 2     | Brot      | 9    |
| 13    | Milch     | 2    |
| 14    | Eier      | 5    |


Die Klasse `TreeMap<K, V>` implementiert den Assoziativspeicher in Form eines Binärbaumes. Als Datenstruktur wird dabei ein balancierter Baum verwendet, d.h. spezielle Einfüge- und Löschoperationen stellen sicher, dass der Baum nicht zu einer linearen Liste 
entartet. Da die Paare in einem Binärbaum sortiert vorliegen, ist es für den Einsatz zwingend erforderlich, dass die Klasse, die den Schlüssel bildet, die Schnittstelle `Comparable<T>` implementiert hat. Alternativ kann dem Konstruktor der Klasse `TreeMap<K, V>`
ein Komparator für den Schlüssel mitgegeben werden.

![image](https://user-images.githubusercontent.com/47243617/209135608-ee2b5bb7-6abc-4cc0-8e6f-cf4c1ad723a2.png)

