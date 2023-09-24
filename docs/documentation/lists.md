---
title: Listen
description: ''
sidebar_position: 215
tags: []
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Die Java API stellt unter Anderem die Schnittstelle `List<E>` sowie die Klassen `ArrayList<E>` und `Arrays` zur Verfügung, mit deren Hilfe Listen realisiert werden. Unter einer Liste versteht man eine geordnete Folge von Elementen, die auch doppelt enthalten sein können. Der Zugriff auf die Elemente erfolgt über den Index oder sequentiell.

<Tabs>
  <TabItem value="list" label="Unveränderbare Listen" default>

  Die Schnittstelle `List<E>` bietet verschiedene Fabrikmethoden zum Erzeugen unveränderbarer Listen. Unveränderbar bedeutet, dass weder die Liste selbst noch ihre Elemente 
  geändert werden können.


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

  :::note Hinweis
  Fabrikmethoden sind Methoden, die Objekte erzeugen.
  :::

  </TabItem>
  <TabItem value="arrays" label="Veränderbare Listen fixer Größe" default>

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

  </TabItem>
  <TabItem value="arrayListAndLinkedList" label="Veränderbare Listen" default>

  Die Klasse `ArrayList<E>` stellt eine veränderbare Liste dynamischer Größe auf Basis eine Feldes dar, die Klasse `LinkedList<E>` eine veränderbare Liste dynamischer Größe auf Basis einfach verketteter Elemente.

  ```java title="MainClass.java" showLineNumbers
  public class MainClass {

    public static void main(String[] args) {
      List<String> list = new ArrayList<>(); // = new LinkedList<>();
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

  :::note Hinweis
  Eine ArrayList ist bei wahlfreiem Zugriff schneller als eine LinkedList; eine LinkedList ist bei Anfüge- und Löschoperationen (insbesondere bei großen Elementzahlen) schneller als eine ArrayList.
  :::

  </TabItem>
</Tabs>
