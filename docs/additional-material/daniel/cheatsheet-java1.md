---
title: Cheatsheet Programmierung 1
description: ''
sidebar_position: 30
tags: []
---

## Java API

| Klasse          | Methode                                                                           | Rückgabetyp     |
| --------------- | --------------------------------------------------------------------------------- | --------------- |
| Aufzählung      | `valueOf(arg0: String)`                                                           | Aufzählung      |
| Aufzählung      | `values()`                                                                        | Aufzählung[]    |
| `Boolean`       | `valueOf(s: String)`, `valueOf(b: boolean)`                                       | `Boolean`       |
| `Double`        | `valueOf(s: String)`, `valueOf(d: double)`                                        | `Double`        |
| `Integer`       | `valueOf(s: String)`, `valueOf(i: int)`                                           | `Integer`       |
| `LocalDateTime` | `getDayOfMonth()`                                                                 | `int`           |
| `LocalDateTime` | `getDayOfYear()`                                                                  | `int`           |
| `LocalDateTime` | `getHour()`                                                                       | `int`           |
| `LocalDateTime` | `getMinute()`                                                                     | `int`           |
| `LocalDateTime` | `getMonthValue()`                                                                 | `int`           |
| `LocalDateTime` | `getSecond()`                                                                     | `int`           |
| `LocalDateTime` | `getYear()`                                                                       | `int`           |
| `LocalDateTime` | `now()`                                                                           | `LocalDateTime` |
| `LocalDateTime` | `of(year: int, month: int, dayOfMonth: int, hour: int, minute: int, second: int)` | `LocalDateTime` |
| `Object`        | `equals(object: Object)`                                                          | `boolean`       |
| `Object`        | `hashCode()`                                                                      | `int`           |
| `Object`        | `toString()`                                                                      | `String`        |
| `PrintStream`   | print-Methoden, println-Methoden                                                  | `void`          |
| `Random`        | `nextInt(bound: int)`                                                             | `int`           |
| `Scanner`       | `hasNextLine()`                                                                   | `boolean`       |
| `Scanner`       | `next()`                                                                          | `String`        |
| `Scanner`       | `nextBoolean()`                                                                   | `boolean`       |
| `Scanner`       | `nextDouble()`                                                                    | `double`        |
| `Scanner`       | `nextInt()`                                                                       | `int`           |
| `Scanner`       | `nextLine()`                                                                      | `String`        |
| `String`        | `charAt(index: int)`                                                              | `char`          |
| `String`        | `length()`                                                                        | `int`           |
| `String`        | `split(regex: String)`                                                            | `String[]`      |
| `String`        | `toLowerCase()`, `toUpperCase()`                                                  | `String`        |
| `System`        | `currentTimeMillis()`                                                             | `long`          |

## Java Collections Framework

| Klasse         | Methode                                 | Rückgabetyp |
| -------------- | --------------------------------------- | ----------- |
| `ArrayList<E>` | `add(e: E)`                             | `boolean`   |
| `ArrayList<E>` | `add(index: int, element: E)`           | `void`      |
| `ArrayList<E>` | `contains(o: Object)`                   | `boolean`   |
| `ArrayList<E>` | `get(index: int)`                       | `E`         |
| `ArrayList<E>` | `remove(index: int)`                    | `E`         |
| `ArrayList<E>` | `remove(o: Object)`                     | `boolean`   |
| `ArrayList<E>` | `size()`                                | `int`       |
| `Collections`  | `sort(list: List<T>, c: Comparator<T>)` | `void`      |
| `List<E>`      | `of(elements: E...)`                    | `List<E>`   |

## Funktionale Schnittstellen

| Klasse          | Methode                 | Rückgabetyp |
| --------------- | ----------------------- | ----------- |
| `Comparable<T>` | `compareTo(o: T)`       | `int`       |
| `Comparator<T>` | `compare(o1: T, o2: T)` | `int`       |
