---
title: Feldbasierte Listen (ArrayLists)
description: ''
sidebar_position: 141
tags: [collections, arrays, lists]
---

Um das Arbeiten mit Feldern zu erleichtern, stellt die Java API die Klasse
`ArrayList<E>` zur Verfügung. Diese stellt eine veränderbare Liste dynamischer
Größe auf Basis eines Feldes dar und bietet hilfreiche Methoden zum Hinzufügen,
Ändern, Löschen und Lesen von Listelementen.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      ArrayList<String> names = new ArrayList<>();
      names.add("Hans");
      names.add("Peter");
      names.add("Lisa");

      System.out.println(names.size());
      System.out.println(names.get(0));
      names.set(0, "Max");
      names.add("Heidi");
      names.remove(0);
   }

}
```
