---
title: Cheatsheet Java 1
description: ''
sidebar_position: 30
tags: []
---

## Java API

| Klasse        | Methode                                                             | Statisch | Rückgabetyp  |
| ------------- | ------------------------------------------------------------------- | -------- | ------------ |
| Aufzählung    | `valueOf(arg0: String)`                                             | X        | Aufzählung   |
| Aufzählung    | `values()`                                                          | X        | Aufzählung[] |
| `Boolean`     | `valueOf(s: String)`, `valueOf(b: boolean)`                         | X        | `Boolean`    |
| `Double`      | `valueOf(s: String)`, `valueOf(d: double)`                          | X        | `Double`     |
| `Integer`     | `valueOf(s: String)`, `valueOf(i: int)`                             | X        | `Integer`    |
| `LocalDate`   | `getDayOfMonth()`, `getDayOfYear()`, `getMonthValue()`, `getYear()` |          | `int`        |
| `LocalDate`   | `now()`                                                             | X        | `LocalDate`  |
| `LocalDate`   | `of(year: int, month: int, dayOfMonth: int)`                        | X        | `LocalDate`  |
| `LocalTime`   | `getHour()`, `getMinute()`, `getSecond()`                           |          | `int`        |
| `LocalTime`   | `now()`                                                             | X        | `LocalTime`  |
| `LocalTime`   | `of(hour: int, minute: int, second: int)`                           | X        | `LocalTime`  |
| `Object`      | `equals(object: Object)`                                            |          | `boolean`    |
| `Object`      | `hashCode()`                                                        |          | `int`        |
| `Object`      | `toString()`                                                        |          | `String`     |
| `PrintStream` | `print(obj: Object)`, `println()`, `println(x: Object)`             |          | `void`       |
| `Random`      | `nextInt(bound: int)`                                               |          | `int`        |
| `Scanner`     | `hasNextLine()`                                                     |          | `boolean`    |
| `Scanner`     | `next()`                                                            |          | `String`     |
| `Scanner`     | `nextBoolean()`                                                     |          | `boolean`    |
| `Scanner`     | `nextDouble()`                                                      |          | `double`     |
| `Scanner`     | `nextInt()`                                                         |          | `int`        |
| `Scanner`     | `nextLine()`                                                        |          | `String`     |
| `String`      | `charAt(index: int)`                                                |          | `char`       |
| `String`      | `length()`                                                          |          | `int`        |
| `String`      | `split(regex: String)`                                              |          | `String[]`   |
| `String`      | `toLowerCase()`, `toUpperCase()`                                    |          | `String`     |
| `System`      | `currentTimeMillis()`                                               | X        | `long`       |

## Java Collections Framework

| Klasse         | Methode                                                       | Statisch | Rückgabetyp |
| -------------- | ------------------------------------------------------------- | -------- | ----------- |
| `ArrayList<E>` | `add(e: E)`                                                   |          | `boolean`   |
| `ArrayList<E>` | `add(index: int, element: E)`                                 |          | `void`      |
| `ArrayList<E>` | `contains(o: Object)`                                         |          | `boolean`   |
| `ArrayList<E>` | `get(index: int)`                                             |          | `E`         |
| `ArrayList<E>` | `remove(index: int)`                                          |          | `E`         |
| `ArrayList<E>` | `remove(o: Object)`                                           |          | `boolean`   |
| `ArrayList<E>` | `size()`                                                      |          | `int`       |
| `Collections`  | `sort(list: List<T>`, `sort(list: List<T>, c: Comparator<T>)` | X        | `void`      |
| `List<E>`      | `of(elements: E...)`                                          | X        | `List<E>`   |

## Funktionale Schnittstellen

| Klasse          | Methode                 | Statisch | Rückgabetyp |
| --------------- | ----------------------- | -------- | ----------- |
| `Comparable<T>` | `compareTo(o: T)`       |          | `int`       |
| `Comparator<T>` | `compare(o1: T, o2: T)` |          | `int`       |
