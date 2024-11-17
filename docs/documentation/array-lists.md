---
title: Feldbasierte Listen (ArrayLists)
description: ''
sidebar_position: 120
tags: [collections, arrays, lists]
---

Um das Arbeiten mit Feldern zu erleichtern, stellt die Java API die Klasse
`ArrayList<E>` zur Verfügung. Diese stellt eine veränderbare Liste dynamischer
Größe auf Basis eines Feldes dar und bietet hilfreiche Methoden zum Hinzufügen,
Ändern, Löschen und Lesen von Listelementen.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    List<String> list = new ArrayList<>();
    list.add("Hans");
    list.add("Peter");
    list.add("Lisa");

    System.out.println(list.size());
    System.out.println(list.get(0));
    list.set(0, "Max");
    list.add("Heidi");
    list.remove(0);
  }

}
```
