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

Objekte der Klasse `Foo` können durch die Implementierung der Methode
`int compareTo(o: T)` der Schnittstelle `Comparable<T>` miteinander verglichen
werden.

```java title="Container.java" showLineNumbers
public class Container implements Comparable<Container> {

  private String value;

  public Container(String value) {
    this.value = value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public int compareTo(Container o) {
    return value.compareTo(o.value);
  }

}
```

In der main-Methode der Startklasse wird mit Hilfe der statischen Methode
`void sort(list: List<T>)` der Klasse `Collections` eine Liste mit Objekten der
Klasse `Foo` sortiert. Aufgrund der Implementierung der compareTo-Methode wird
die Liste aufsteigend nach dem Attribut `bar` sortiert.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    List<Container> containers = new ArrayList<>();
    containers.add(new Container("Winter"));
    containers.add(new Container("is"));
    containers.add(new Container("Coming"));

    Collections.sort(containers);
  }

}
```
