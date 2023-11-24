---
title: Schleifen
description: ''
sidebar_position: 105
tags: [control-structures, loops]
---

Schleifen sind eine von zwei Möglichkeiten, Anweisungsblöcke wiederholt
auszuführen. Die zweite Möglichkeit sind Selbstaufrufe in Form rekursiver
Methoden.

## while-Schleifen

Bei der while-Schleife wird eine bestimmte Anweisungsfolge (_Schleifenrumpf_)
wiederholt, solange eine bestimmte Bedingung (_Schleifenbedingung_) wahr ist. Da
zu Beginn der Schleife die Bedingung geprüft wird, spricht man auch von einer
_kopfgesteuerten Schleife_.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    int i = 0;
    while (i < 10) {
      System.out.println(i);
      i++;
    }
  }

}
```

## do/while-Schleifen

Im Gegensatz zur while-Schleife wird bei der do/while-Schleife der
Schleifenrumpf immer mindestens einmal durchlaufen. Da die Bedingung hier am
Ende der Schleife geprüft wird, spricht man hier von einer _fußgesteuerten
Schleife_.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    int i = 0;
    do {
      System.out.println(i);
      i++;
    } while (i < 10);
  }

}
```

## for-Schleifen

Bei der for-Schleife handelt es sich um eine indexgesteuerte Schleife, auch
_Zählschleife_ genannt. Durch den Index wird bereits zu Schleifenbeginn
festgelegt, wie oft die Schleife durchlaufen wird.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    for (int i = 0; i < 10; i++) {
      System.out.println(i);
    }
  }

}
```

## for-each-Schleifen

Mit Hilfe der for-each-Schleife können Datensammlungen wie z.B. [Felder](arrays)
und [Listen](lists) elementweise durchlaufen werden. Allerdings können die
Elemente einer Datensammlung nur geändert werden, nicht jedoch die Datensammlung
selbst.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    int[] ids = {4, 8, 15, 16, 23, 42};
    for (int i : ids) {
      System.out.println(i);
    }
  }

}
```

## Schleifensteuerung

Die Anweisung `break` sorgt dafür, dass eine Schleife ungeachtet der Bedingung
komplett verlassen wird. Mit der Anweisung `continue` wird der aktuelle
Schleifendurchgang abgebrochen und die Schleife wird mit dem nächsten Durchlauf
fortgeführt.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    for (int i = 0; i < 10; i++) {
      if (i == 6) {
        break;
      }
      if (i % 2 == 0) {
        continue;
      }
      System.out.println(i);
    }
  }

}
```
