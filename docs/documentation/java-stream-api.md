---
title: Die Java Stream API
description: ''
sidebar_position: 300
tags: [java-stream-api]
---

Die Java Stream API stellt Klassen zum Erzeugen von und Arbeiten mit Strömen
(Streams) bereit. Ein Strom stellt eine Folge von Elementen dar, die das
Ausführen verketteter, intermediärer und terminaler Operationen auf diesen
Elementen nacheinander oder parallel ermöglicht. Die Daten, die durch die
Elemente des Stromes repräsentiert werden, werden dabei durch den Strom selbst
nicht verändert. Die Verarbeitung der Elemente erfolgt nach dem Prinzip der
Bedarfsauswertung (Lazy Evaluation). Neben endlichen Strömen stellt die Java
Stream API auch Methoden zum Erzeugen unendlicher Ströme bereit.

```mermaid
flowchart TD
    Strom1 -->|Filtern| Strom2
    Strom2 -->|Abbilden| Strom3
    Strom3 -->|Sortieren| Strom4

    subgraph Strom1
        hans[Hans, 18, m]
        peter[Peter, 27, m]
        lisa[Lisa, 43, w]
        heidi[Heidi, 19, w]
        maria[Maria, 17, w]
    end
    subgraph Strom2
        peter2[Peter, 27, m]
        heidi2[Heidi, 19, w]
        maria2[Maria, 17, w]
    end
    subgraph Strom3
        peter3[PETER]
        heidi3[HEIDI]
        maria3[MARIA]
    end
    subgraph Strom4
        heidi4[HEIDI]
        maria4[MARIA]
        peter4[PETER]
    end
```

:::note Hinweis

Ströme (Paket `java.util.stream`) haben nichts mit
[Datenströmen (IO-Streams)](io-streams) (Paket `java.io`) zu tun.

:::

## Erzeugen von Strömen

Ströme können unter anderem aus Feldern, Datensammlungen wie z.B. Listen und
Mengen sowie Einzelobjekten erzeugt werden.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      int[] array = {4, 8, 15, 16, 23, 42};
      IntStream integerStream = Arrays.stream(array);

      List<Integer> list = List.of(4, 8, 15, 16, 23, 42);
      Stream<Integer> integerStream2 = list.stream();

      Stream<Integer> integerStream3 = Stream.of(4, 8, 15, 16, 23, 42);
   }

}
```

:::note Hinweis

Die Zahlenfolge 4-8-15-16-23-42 spielt eine große Rolle in der Fernsehserie
_Lost_.

:::

Im Gegensatz zu "normalen" Strömen besitzen Objekte der Klassen `IntStreams`,
`DoubleStreams` und `LongStreams` Methoden zur Weiterverarbeitung ihrer
primitiver Werte.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      int[] array = {4, 8, 15, 16, 23, 42};
      IntStream integerStream = Arrays.stream(array);
      int sum = integerStream.sum();
   }

}
```

## Intermediäre Operationen

Intermediäre Operationen ermöglichen unter anderem das Filtern, Abbilden sowie
das Sortieren von Strömen und liefern als Ergebnis wiederum einen Strom.

| Operation     | Methode                                                    | Schnittstellen-Methode           |
| ------------- | ---------------------------------------------------------- | -------------------------------- |
| Filtern       | `Stream<T> filter(predicate: Predicate<T>)`                | `boolean test(t: T)`             |
| Abbilden      | `Stream<T> map(mapper: Function<T, R>)`                    | `R apply(t: T)`                  |
| Abbilden      | `DoubleStream mapToDouble(mapper: ToDoubleFunction<T, R>)` | `double applyAsDouble(value: T)` |
| Abbilden      | `IntStream mapToInt(mapper: ToIntFunction<T, R>)`          | `int applyAsInt(vaue: T)`        |
| Abbilden      | `LongStream mapToLong(mapper: ToLongFunction<T, R>)`       | `long applyAsLong(value: T)`     |
| Spähen        | `Stream<T> peek(consumer: Consumer<T>)`                    | `void accept(t: T)`              |
| Sortieren     | `Stream<T> sorted(comparator: Comparator<T>)`              | `int compare(o1: T, o2: T)`      |
| Unterscheiden | `Stream<T> distinct()`                                     | -                                |
| Begrenzen     | `Stream<T> limit(maxSize: long)`                           | -                                |
| Überspringen  | `Stream<T> skip(n: long)`                                  | -                                |

## Terminale Operationen

Terminale Operationen werden z.B. zum Prüfen, zum Aggregieren oder zum Sammeln
verwendet. Da terminale Operationen den Strom schließen, können auf ihnen keine
weiteren Operationen mehr ausgeführt werden.

| Operation   | Methode                                      | Schnittstellen-Methode      |
| ----------- | -------------------------------------------- | --------------------------- |
| Finden      | `Optional<T> findAny()`                      | -                           |
| Finden      | `Optional<T> findFirst()`                    | -                           |
| Prüfen      | `boolean allMatch(predicate: Predicate<T>)`  | `boolean test(t: T)`        |
| Prüfen      | `boolean anyMatch(predicate: Predicate<T>)`  | `boolean test(t: T)`        |
| Prüfen      | `boolean noneMatch(predicate: Predicate<T>)` | `boolean test(t: T)`        |
| Aggregieren | `Optional<T> min(comparator: Comparator<T>)` | `int compare(o1: T, o2: T)` |
| Aggregieren | `Optional<T> max(comparator: Comparator<T>)` | `int compare(o1: T, o2: T)` |
| Aggregieren | `long count()`                               | -                           |
| Sammeln     | `R collect(collector: Collector<T, A, R>)`   | -                           |
| Ausführen   | `void forEach(action: Consumer<T>)`          | `void accept(t: T)`         |

Zahlenströme (`IntStream`, `DoubleStream`, `LongStream`) besitzen die
zusätzlichen terminale Operationen `int|double|long sum()` und
`OptionalDouble average()`.

## Bedarfsauswertung (Lazy Evaluation)

Die Elemente in Strömen werden nur bei Bedarf ausgewertet. Intermediäre
Operationen werden also nur dann ausgeführt, wenn eine terminale Operation
vorhanden ist und bei verketteten Operationen werden für jedes Element die
einzelnen Operationen nacheinander ausgeführt.

In der main-Methode der Startklasse wird auf den Zahlenstrom 4-8-15-16-23-42
zunächst der Filter _Zahl > 15_ angewendet, anschließend der Filter _Zahl =
ganze Zahl_ und abschließend werden die verbliebenen Zahlen auf der Konsole
ausgegeben. Zum Nachvollziehen werden die Zahlen auch bei den beiden Filtern auf
der Konsole ausgegeben.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      Stream.of(4, 8, 15, 16, 23, 42).filter(i -> {
         System.out.println(i + ": filter 1");
         return i % 2 == 0;
      }).filter(i -> {
         System.out.println(i + ": filter 2");
         return i > 15;
      }).forEach(i -> System.out.println(i + ": forEach"));
   }

}
```

Ohne Bedarfsauswertung würden die verschiedenen Operationen für die jeweils
verbliebenen Elemente ausgeführt nacheinander werden. Die Ausgabe sähe wie folgt
aus:

```
 4: filter 1
 8: filter 1
 15: filter 1
 16: filter 1
 23: filter 1
 42: filter 1
 4: filter 2
 8: filter 2
 16: filter 2
 42: filter 2
 16: forEach
 42: forEach
```

Aufgrund der Bedarfsauswertung werden die verschiedenen Operationen aber für
jedes Element einzeln nacheinander ausgeführt. Dadurch ergibt sich folgende
Ausgabe:

```
4: filter 1
4: filter 2
8: filter 1
8: filter 2
15: filter 1
16: filter 1
16: filter 2
16: forEach
23: filter 1
42: filter 1
42: filter 2
42: forEach
```

## Unendliche Ströme

Die Java Stream API stellt drei Methoden zur Verfügung, mit deren Hilfe
(un)endliche Ströme erzeugt werden können:

- Die Methode `Stream<T> iterate(seed: T, f: UnaryOperator<T>)` generiert einen
  unendlichen Strom aus einem Startwert und einer Funktion, welche das nächste
  Element erstellt
- Die Methode
  `Stream<T> iterate(seed: T, hasNext: Predicat <T>, next: UnaryOperator<T>)`
  erweitert die "normale" iterate-Methode um eine Prädikatsfunktion zum Beenden
  des Stroms
- Die Methode `Stream<T> generate(s: Supplier<T>)` kann zum Beispiel zum
  Erzeugen unendlich vieler zufälliger Elemente genutzt werden

In der main-Methode der Startklasse werden drei (un)endliche Zahlenströme
erzeugt.

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      Stream.iterate(0, i -> ++i).limit(100).forEach(System.out::println);
      Stream.iterate(0, i -> i < 100, i -> ++i).forEach(System.out::println);
      Stream.generate(() -> new Random().nextInt(100)).limit(100).forEach(System.out::println);
   }

}
```

Die ersten beiden Zahlenströme geben die Zahlen von 0 bis 99 aus, der dritte
Zahlenstrom 100 Pseudozufallszahlen von 0 bis 99. Der erste und dritte
Zahlenstrom würden eigentlich unendliche viele (Pseudozufalls-)Zahlen erzeugen,
werden aber durch die Methode `Stream<T> limit(maxSize: long)` auf 100
(Pseudozufalls-)Zahlen begrenzt.
