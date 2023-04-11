---
title: Wrapper-Klassen
description: ''
sidebar_position: 10
tags: [java-api, wrappers]
---

Wrapper-Klassen verpacken primitive Datentypen in vollwertigen Klassen und erweitern so die primitiven Datentypen um hilfreiche Methoden. Das Verpacken eines primitiven Datentyps bezeichnet man als **Boxing**, das Entpacken als **Unboxing**.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    Integer i = Integer.valueOf("631");
    System.out.println(i);
    Boolean b = Boolean.logicalXor(true, false);
    System.out.println(b);
    Character c = Character.toUpperCase('a');
    System.out.println(c);
  }

}
```
