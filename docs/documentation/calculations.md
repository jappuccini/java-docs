---
title: Mathematische Berechnungen
description: ''
sidebar_position: 70
tags: []
---

Die Klasse `Math` stellt neben einigen Konstanten wie der Kreiszahl _Pi_ und der Eulerschen Zahl _E_ zahlreiche Methoden für mathematische Berechnungen zur Verfügung.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    int a = 5;
    int b = 3;
    double result;

    result = Math.pow(a, b);
    System.out.println(result);

    result = Math.sqrt(a);
    System.out.println(result);
  }

}
```
