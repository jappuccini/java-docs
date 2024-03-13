---
title: Quellcode
description: ''
tags: []
---

Welche Konsolenausgaben erzeugen die abgebildeten Klassen?

## Quellcode zur Klasse _Bytes_

```java title="Bytes.java" showLineNumbers
public class Bytes {

  public static void main(String[] args) {
    byte byte1 = (byte) 0b10101;
    byte byte2 = (byte) 129;
    byte byte3 = (byte) 0b11010101;
    byte byte4 = 0b10110;
    byte byte5 = 0b101110;
    byte byte6 = (byte) (byte4 - byte5);

    System.out.println("byte1: " + byte1);
    System.out.println("byte2: " + byte2);
    System.out.println("byte3: " + byte3);
    System.out.println("byte4: " + byte4);
    System.out.println("byte5: " + byte5);
    System.out.println("byte6: " + byte6);
  }

}
```

## Quellcode zur Klasse _Strings_

```java title="Strings.java" showLineNumbers
public class Strings {

  public static void main(String[] args) {
    a();
    b();
    c();
  }

  public static void a() {
    String[] values = {"NH", "FF3", "4", "XTU"};
    String a = values[2];
    int b = values[1].length() == 3 ? 1 : 2;
    int c = (int) (0.33 + 0.33 + 0.33);
    String d = 1 + "";
    char e = values[3].charAt(1);

    System.out.println(a + values[b] + values[c] + d + e + "Z3");
  }

  public static void b() {
    String[] values = {"RO", "ER"};
    boolean x = true;
    int i = 3, j = 5, k = 4;
    int index = ++i % 2 == 0 ? 0 : 1;
    j -= x || ++k == 5 ? 5 : 0;

    System.out.println(values[1] + values[index] + "R " + i + j + k);
  }

  private static void c() {
    String[] values = {"COLD", "AEIOU", "HOT"};
    int index1 = values[2].length() == 3 ? 2 : 0;
    String value1 = values[index1];
    int index2 = (int) (2.1 + 2.8);
    char value2 = values[1].charAt(index2);

    System.out.println(index1 + value1 + index2 + value2);
  }

}
```

## Quellcode zur Klasse _Patterns_

```java title="Patterns.java" showLineNumbers
public class Patterns {

  public static void main(String[] args) {
    a();
    b();
    c();
  }

  public static void a() {
    for (int i = 0; i < 5; i++) {
      if (i == 0 || i == 5 - 1) {
        for (int j = 0; j < 5; j++) {
          System.out.print('-');
        }
      } else {
        System.out.print('|');
      }
      System.out.println();
    }
  }

  public static void b() {
    for (int i = 0; i < 5; i++) {
      if (i == 0 || i == 4) {
        for (int x = 0; x < 2; x++) {
          System.out.print("X-");
        }
      System.out.print("X");
      } else {
        System.out.print("X");
        for (int x = 0; x < 3; x++) {
          System.out.print("-");
        }
        System.out.print("X");
      }
      System.out.println();
    }
  }

  private static void c() {
    char x = 'X';
    for (int i = 0; i < 5; i++) {
      System.out.print(i + ": ");
      for (int j = 5 - i - 1; j > 0; j--) {
        System.out.print(x);
      }
      System.out.println();
    }
  }

}
```

## Quellcode zur Klasse _Expressions_

```java title="Expressions.java" showLineNumbers
public class Expressions {

  public static void main(String[] args) {
    a(4, 3);
    b();
    c();
  }

  public static void a(int a, int b) {
    int c = (a < b) ? -1 : (a > b) ? 1 : 0;
    b++;
    boolean d = (a < b && ++b == 5) ? true : false;

    System.out.println("b: " + b);
    System.out.println("c: " + c);
    System.out.println("d: " + d);
  }

  public static void b() {
    String s = "Programmierung";
    char c = s.charAt(s.length() - 3);
    double d = 0.9;
    int i = 2 * (int) d;

    System.out.println("c: " + c);
    System.out.println("i: " + i);
  }

  public static void c() {
    String textA = new String("Text A");
    String textB = new String("Text B");
    boolean boolean1, boolean2;
    int int1 = 1;
    boolean1 = (textA == textB) ? true : false;
    boolean2 = boolean1 && ++int1 % 2 == 0 ? true : false;

    System.out.println("int1: " + int1);
    System.out.println("boolean1: " + boolean1);
    System.out.println("boolean2: " + boolean2);
  }

}
```
