---
title: Cheatsheet Programmierung 2
description: ''
sidebar_position: 50
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

## Java Collections Framework

| Klasse          | Methode                                                    | Rückgabetyp        |
| --------------- | ---------------------------------------------------------- | ------------------ |
| `ArrayList<E>`  | `add(e: E)`                                                | `boolean`          |
| `ArrayList<E>`  | `add(index: int, element: E)`                              | `void`             |
| `ArrayList<E>`  | `contains(o: Object)`                                      | `boolean`          |
| `ArrayList<E>`  | `forEach(action: Consumer<T>)`                             | `void`             |
| `ArrayList<E>`  | `get(index: int)`                                          | `E`                |
| `ArrayList<E>`  | `remove(index: int)`                                       | `E`                |
| `ArrayList<E>`  | `remove(o: Object)`                                        | `boolean`          |
| `ArrayList<E>`  | `size()`                                                   | `int`              |
| `Collections`   | `sort(list: List<T>, c: Comparator<T>)`                    | `void`             |
| `Entry<K, V>`   | `getKey()`                                                 | `K`                |
| `Entry<K, V>`   | `getValue()`                                               | `V`                |
| `HashMap<K, V>` | `containsKey(key: Object)`, `containsValue(value: Object)` | `boolean`          |
| `HashMap<K, V>` | `entrySet()`                                               | `Set<Entry<K, V>>` |
| `HashMap<K, V>` | `forEach(action: BiConsumer<K, V>)`                        | `void`             |
| `HashMap<K, V>` | `get(key: Object)`                                         | `V`                |
| `HashMap<K, V>` | `keySet()`                                                 | `Set<K>`           |
| `HashMap<K, V>` | `put(key: K, value: V)`                                    | `V`                |
| `HashMap<K, V>` | `values()`                                                 | `Collection<V>`    |
| `List<E>`       | `of(elements: E...)`                                       | `List<E>`          |
