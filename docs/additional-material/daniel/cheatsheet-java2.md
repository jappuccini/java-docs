---
title: Cheatsheet Java 2
description: ''
sidebar_position: 40
tags: []
---

## Java API

| Klasse           | Methode                                                             | Statisch | Rückgabetyp      |
| ---------------- | ------------------------------------------------------------------- | -------- | ---------------- |
| Aufzählung       | `valueOf(arg0: String)`                                             | X        | Aufzählung       |
| Aufzählung       | `values()`                                                          | X        | Aufzählung[]     |
| `Boolean`        | `valueOf(s: String)`, `valueOf(b: boolean)`                         | X        | `Boolean`        |
| `Double`         | `valueOf(s: String)`, `valueOf(d: double)`                          | X        | `Double`         |
| `Integer`        | `valueOf(s: String)`, `valueOf(i: int)`                             | X        | `Integer`        |
| `LocalDate`      | `getDayOfMonth()`, `getDayOfYear()`, `getMonthValue()`, `getYear()` |          | `int`            |
| `LocalDate`      | `now()`                                                             | X        | `LocalDate`      |
| `LocalDate`      | `of(year: int, month: int, dayOfMonth: int)`                        | X        | `LocalDate`      |
| `LocalTime`      | `getHour()`, `getMinute()`, `getSecond()`                           |          | `int`            |
| `LocalTime`      | `now()`                                                             | X        | `LocalTime`      |
| `LocalTime`      | `of(hour: int, minute: int, second: int)`                           | X        | `LocalTime`      |
| `Object`         | `equals(object: Object)`                                            |          | `boolean`        |
| `Object`         | `hashCode()`                                                        |          | `int`            |
| `Object`         | `toString()`                                                        |          | `String`         |
| `Optional<T>`    | `empty()`                                                           |          | `Optional<T>`    |
| `Optional<T>`    | `get()`                                                             |          | `T`              |
| `Optional<T>`    | `ifPresent(action: Consumer<T>)`                                    |          | `void`           |
| `Optional<T>`    | `ifPresentOrElse(action: Consumer<T>, emptyAction: Runnable)`       |          | `void`           |
| `Optional<T>`    | `isPresent()`                                                       |          | `boolean`        |
| `Optional<T>`    | `of(t: T), ofNullable(t: T)`                                        | X        | `Optional<T>`    |
| `Optional<T>`    | `orElse(other: T)`                                                  |          | `T`              |
| `OptionalDouble` | `empty()`                                                           | X        | `OptionalDouble` |
| `OptionalDouble` | `getAsDouble()`                                                     |          | `double`         |
| `OptionalDouble` | `ifPresent(action: DoubleConsumer)`                                 |          | `void`           |
| `OptionalDouble` | `ifPresentOrElse(action: DoubleConsumer, emptyAction: Runnable)`    |          | `void`           |
| `OptionalDouble` | `isPresent()`                                                       |          | `boolean`        |
| `OptionalDouble` | `of(value: double)`                                                 | X        | `OptionalDouble` |
| `OptionalDouble` | `orElse(other: double)`                                             |          | `double`         |
| `PrintStream`    | `print(obj: Object)`, `println()`, `println(x: Object)`             |          | `void`           |
| `Random`         | `nextInt(bound: int)`                                               |          | `int`            |
| `Scanner`        | `hasNextLine()`                                                     |          | `boolean`        |
| `Scanner`        | `next()`                                                            |          | `String`         |
| `Scanner`        | `nextBoolean()`                                                     |          | `boolean`        |
| `Scanner`        | `nextDouble()`                                                      |          | `double`         |
| `Scanner`        | `nextInt()`                                                         |          | `int`            |
| `Scanner`        | `nextLine()`                                                        |          | `String`         |
| `String`         | `charAt(index: int)`                                                |          | `char`           |
| `String`         | `length()`                                                          |          | `int`            |
| `String`         | `split(regex: String)`                                              |          | `String[]`       |
| `String`         | `toLowerCase()`, `toUpperCase()`                                    |          | `String`         |
| `System`         | `currentTimeMillis()`                                               | X        | `long`           |

## Java Collections Framework

| Klasse          | Methode                                                        | Statisch | Rückgabetyp        |
| --------------- | -------------------------------------------------------------- | -------- | ------------------ |
| `ArrayList<E>`  | `add(e: E)`                                                    |          | `boolean`          |
| `ArrayList<E>`  | `add(index: int, element: E)`                                  |          | `void`             |
| `ArrayList<E>`  | `contains(o: Object)`                                          |          | `boolean`          |
| `ArrayList<E>`  | `forEach(action: Consumer<T>)`                                 |          | `void`             |
| `ArrayList<E>`  | `get(index: int)`                                              |          | `E`                |
| `ArrayList<E>`  | `remove(index: int)`                                           |          | `E`                |
| `ArrayList<E>`  | `remove(o: Object)`                                            |          | `boolean`          |
| `ArrayList<E>`  | `size()`                                                       |          | `int`              |
| `Collections`   | `sort(list: List<T>)`, `sort(list: List<T>, c: Comparator<T>)` | X        | `void`             |
| `Entry<K, V>`   | `getKey()`                                                     |          | `K`                |
| `Entry<K, V>`   | `getValue()`                                                   |          | `V`                |
| `HashMap<K, V>` | `containsKey(key: Object)`, `containsValue(value: Object)`     |          | `boolean`          |
| `HashMap<K, V>` | `entrySet()`                                                   |          | `Set<Entry<K, V>>` |
| `HashMap<K, V>` | `forEach(action: BiConsumer<K, V>)`                            |          | `void`             |
| `HashMap<K, V>` | `get(key: Object)`                                             |          | `V`                |
| `HashMap<K, V>` | `keySet()`                                                     |          | `Set<K>`           |
| `HashMap<K, V>` | `put(key: K, value: V)`                                        |          | `V`                |
| `HashMap<K, V>` | `values()`                                                     |          | `Collection<V>`    |
| `List<E>`       | `of(elements: E...)`                                           | X        | `List<E>`          |

## Funktionale Schnittstellen

| Klasse                   | Methode                   | Statisch | Rückgabetyp |
| ------------------------ | ------------------------- | -------- | ----------- |
| `BiConsumer`             | `accept(t: T, u: U)`      |          | `void`      |
| `Comparable<T>`          | `compareTo(o: T)`         |          | `int`       |
| `Comparator<T>`          | `compare(o1: T, o2: T)`   |          | `int`       |
| `Consumer<T>`            | `accept(t: T)`            |          | `void`      |
| `DoubleConsumer`         | `accept(value: double)`   |          | `void`      |
| `Executable`             | `execute()`               |          | `void`      |
| `Function<T, R>`         | `apply(t: T)`             |          | `R`         |
| `Predicate<T>`           | `test(t: T)`              |          | `boolean`   |
| `ToDoubleFunction<T, R>` | `applyAsDouble(value: T)` |          | `double`    |
| `ToIntFunction<T, R>`    | `applyAsInt(value: T)`    |          | `int`       |

## Java Stream API

| Klasse         | Methode                                                                                                        | Statisch | Rückgabetyp                        |
| -------------- | -------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------- |
| `Collectors`   | `groupingBy(classifier: Function<T, K>)`                                                                       | X        | `Collector<T, ?, Map<K, List<T>>>` |
| `Collectors`   | `toMap(keyMapper: Function<T, K>, valueMapper: Function<T, U>)`                                                | X        | `Collector<T, ?, Map<K, U>`        |
| `DoubleStream` | `average()`                                                                                                    |          | `OptionalDouble`                   |
| `DoubleStream` | `sum()`                                                                                                        |          | `double`                           |
| `IntStream`    | `average()`                                                                                                    |          | `OptionalDouble`                   |
| `IntStream`    | `sum()`                                                                                                        |          | `int`                              |
| `Stream<T>`    | `allMatch(predicate: Predicate<T>)`, `anyMatch(predicate: Predicate<T>)`, `noneMatch(predicate: Predicate<T>)` |          | `boolean`                          |
| `Stream<T>`    | `collect(collector: Collector<T, A, R>)`                                                                       |          | `R`                                |
| `Stream<T>`    | `count()`                                                                                                      |          | `long`                             |
| `Stream<T>`    | `distinct()`                                                                                                   |          | `Stream<T>`                        |
| `Stream<T>`    | `filter(predicate: Predicate<T>)`                                                                              |          | `Stream<T>`                        |
| `Stream<T>`    | `findAny()`, `findFirst()`                                                                                     |          | `Optional<T>`                      |
| `Stream<T>`    | `forEach(action: Consumer<T>)`                                                                                 |          | `void`                             |
| `Stream<T>`    | `limit(maxSize: long)`                                                                                         |          | `Stream<T>`                        |
| `Stream<T>`    | `map(mapper: Function<T, R>)`                                                                                  |          | `Stream<R>`                        |
| `Stream<T>`    | `mapToDouble(mapper: ToDoubleFunction<T, R>)`                                                                  |          | `DoubleStream`                     |
| `Stream<T>`    | `mapToInt(mapper: ToIntFunction<T, R>)`                                                                        |          | `IntStream`                        |
| `Stream<T>`    | `max(comparator: Comparator<T>)`, `min(comparator: Comparator<T>)`                                             |          | `Optional<T>`                      |
| `Stream<T>`    | `skip(n: long)`                                                                                                |          | `Stream<T>`                        |
| `Stream<T>`    | `sorted()`, `sorted(comparator: Comparator<T>)`                                                                |          | `Stream<T>`                        |
| `Stream<T>`    | `toList()`                                                                                                     |          | `List<T>`                          |

## JUnit 5

| Klasse       | Methode                                                                                               | Statisch | Rückgabetyp |
| ------------ | ----------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `Assertions` | `assertEquals(expected: Object, actual: Object)`, `assertNotEquals(expected: Object, actual: Object)` | X        | `void`      |
| `Assertions` | `assertNull(actual: Object)`, `assertNotNull(actual: Object)`                                         | X        | `void`      |
| `Assertions` | `assertSame(expected: Object, actual: Object)`, `assertNotSame(expected: Object, actual: Object)`     | X        | `void`      |
| `Assertions` | `assertThrows(expectedType: Class<T>, executable: Executable)`                                        | X        | `T`         |
| `Assertions` | `assertTrue(condition: boolean)`, `assertFalse(condition: boolean)`                                   | X        | `void`      |
