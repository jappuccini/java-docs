---
title: Schleifen
description: ''
sidebar_position: 105
tags: [control-structures, loops]
---

Schleifen sind eine Möglichkeit, Anweisungsblöcke wiederholt auszuführen. Eine
weitere Möglichkeit sind rekursive Methoden, die sich selbst aufrufen.

## while-Schleifen

Bei der while-Schleife wird ein Anweisungsblock (_Schleifenrumpf_) wiederholt,
solange eine Bedingung (_Schleifenbedingung_) wahr ist. Da die Bedingung zu
Beginn jedes Durchlaufs geprüft wird, spricht man von einer _kopfgesteuerten
Schleife_.

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
Schleifenrumpf immer mindestens einmal ausgeführt, da die Bedingung erst am Ende
des Durchlaufs geprüft wird. Daher spricht man von einer _fußgesteuerten
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

Die for-Schleife ist eine indexgesteuerte Schleife, auch _Zählschleife_ genannt.
Der Index legt bereits zu Beginn fest, wie oft die Schleife durchlaufen wird.

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

Mit der for-each-Schleife können Datensammlungen wie [Felder](arrays) und
[Listen](lists) elementweise durchlaufen werden. Dabei können einzelne Elemente
verändert werden, jedoch nicht die Struktur der Sammlung selbst (z.B. kein
Hinzufügen oder Entfernen von Elementen).

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

Mit `break` wird eine Schleife unabhängig von der Bedingung sofort beendet. Mit
`continue` wird der aktuelle Schleifendurchgang abgebrochen und die Schleife mit
dem nächsten Durchlauf fortgesetzt.

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
