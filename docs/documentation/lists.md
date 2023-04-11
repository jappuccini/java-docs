---
title: Listen
description: ''
sidebar_position: 120
tags: []
---

Die Java API stellt eine Reihe von Klassen und Schnittstellen zur Verfügung, mit deren Hilfe Listen realisiert werden. Unter einer Liste versteht man eine geordnete Folge von Elementen, die auch doppelt enthalten sein können. Der Zugriff auf die Elemente erfolgt
über den Index oder sequentiell.

## Die Klasse `ArrayList<E>`
Die Klasse `ArrayList<E>` stellt eine veränderbare Liste dynamischer Größe auf Basis eine Feldes dar.

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

## Die Klasse `Arrays`
Die Klasse `Arrays` stellt neben Methoden zum Sortieren und Durchsuchen von Feldern auch eine Methode zum Erzeugen veränderbarer Listen fixer Größe zur Verfügung.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    List<String> list = Arrays.asList("Hans", "Peter", "Lisa");

    System.out.println(list.size());
    System.out.println(list.get(0));
    list.set(0, "Max");
    list.add("Heidi"); // Laufzeitfehler
    list.remove(0); // Laufzeitfehler
  }

}
```

## Die Schnittstelle `List<E>`
Die Schnittstelle `List<E>` stellt verschiedene Fabrikmethoden zum Erzeugen unveränderlicher Listen zur Verfügung.

:::note Hinweis
Fabrikmethoden sind Methoden, die Objekte erzeugen.
:::

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    List<String> list = List.of("Hans", "Peter", "Lisa");

    System.out.println(list.size());
    System.out.println(list.get(0));
    list.set(0, "Max"); // Laufzeitfehler
    list.add("Heidi"); // Laufzeitfehler
    list.remove(0); // Laufzeitfehler
  }

}
```
