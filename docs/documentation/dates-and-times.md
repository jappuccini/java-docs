---
title: Datums- und Zeitangaben
description: ''
sidebar_position: 142
tags: [java-api, dates-and-times]
---

Die Klasse `LocalDateTime` stellt Informationen zum gregorianischen Kalender
(ISO-8601) bereit und gibt Zugriff auf Jahr, Monat, Tag, Stunde, Minute und
Sekunde der aktuellen Systemzeit.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      LocalDateTime now = LocalDateTime.now();

      System.out.println("Jahr: " + now.getYear());
      System.out.println("Monat: " + now.getMonth());
      System.out.println("Tag: " + now.getDayOfMonth());
   }

}
```

Neben `LocalDateTime` bietet die Klasse `System` die Methode
`long currentTimeMillis()`, die die Differenz in Millisekunden zwischen der
aktuellen Systemzeit und dem Nullpunkt (1. Januar 1970, 0 Uhr) zurückgibt.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      long timeInMilliseconds = System.currentTimeMillis();
      System.out.println(timeInMilliseconds);
   }

}
```

:::info

Der Nullpunkt (Unix-Epoch) ist der 1. Januar 1970 um 0:00 Uhr UTC.

:::
