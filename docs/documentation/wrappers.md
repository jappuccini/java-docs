---
title: Wrapper-Klassen
description: ''
sidebar_position: 141
tags: [java-api, wrappers]
---

Wrapper-Klassen (auch _Hüllenklassen_ genannt) verpacken primitive Datentypen in
vollwertige Objekte und erweitern sie so um nützliche Methoden. Das Verpacken
eines primitiven Werts nennt man _Boxing_, das Entpacken _Unboxing_. Java führt
diese Konvertierung in vielen Kontexten automatisch durch (_Autoboxing_).

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      Integer i = Integer.valueOf("631");  // String in Integer umwandeln
      System.out.println(i);
      Boolean b = Boolean.logicalXor(true, false); // logisches XOR
      System.out.println(b);
      Character c = Character.toUpperCase('a');    // Zeichen in Großbuchstaben
      System.out.println(c);
   }

}
```

:::note

Wrapper-Klassen basieren auf dem Entwurfsmuster _Adapter_, das die Kommunikation
zwischen Klassen mit inkompatiblen Schnittstellen ermöglicht.

:::
