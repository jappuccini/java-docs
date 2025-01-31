---
title: Die Java API
description: ''
sidebar_position: 140
tags: [java-api]
---

Die _Java API_ (Java Application Programming Interface) stellt eine umfangreiche
Bibliothek wichtiger Java-Klassen dar. Neben dem eigentlichen Quellcode stellt
die Java API auch detaillierte Informationen zu den Klassen (Paketzugehörigkeit,
Attribute, Methoden,…) als Javadoc bereit. Entwicklungsumgebungen wie Eclipse
bieten meist eine vollständige Integration der Java API an.

## Wichtige Klassen und Schnittstellen der Java API

| Thema                                                    | Klassen                                                                                                                                                                                                                                  |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Assoziativspeicher (Maps)](maps)                        | `Entry<K, V>`, `HashMap<K, V>`, `Map<K, V>`                                                                                                                                                                                              |
| [Aufzählungen (Enumerations)](enumerations)              | `Enumeration<E>`                                                                                                                                                                                                                         |
| [Ausnahmen (Exceptions)](exceptions)                     | `ArrayIndexOutOfBoundsException`, `Exception`, `NullPointerException`, `RunTimeException`                                                                                                                                                |
| [Dateien und Verzeichnisse](files)                       | `File`, `Scanner`                                                                                                                                                                                                                        |
| [Datenklassen (Records)](records)                        | `Record`                                                                                                                                                                                                                                 |
| [Datenströme](io-streams)                                | `BufferedInputStream`, `BufferedOutputStream`, `BufferedReader`, `BufferedWriter`, `FileInputStream`, `FileOutputStream`, `FileReader`, `FileWriter`, `ObjectInputStream`, `ObjectOutputStream`, `Serializable`, `System`                |
| [Datums- und Zeitangaben](dates-and-times)               | `LocalDate`, `LocalDateTime`, `LocalTime`                                                                                                                                                                                                |
| [Die Java Stream API](java-stream-api)                   | `BiConsumer`, `Collectors`, `Comparable<T>`, `Comparator<T>`, `Consumer<T>`, `DoubleConsumer`, `DoubleStream`, `Executable`, `Function<T, R>`, `IntStream`, `Predicate<T>`, `Stream<T>`, `ToDoubleFunction<T, R>`, `ToIntFunction<T, R>` |
| [Die Mutter aller Klassen](object)                       | `Object`                                                                                                                                                                                                                                 |
| [Java Collections Framework](java-collections-framework) | `ArrayList<E>`, `Arrays`, `HashSet<E>`, `LinkedList<E>`, `List<E>`, `Queue<E>`, `Set<E>`                                                                                                                                                 |
| [Komparatoren](comparators)                              | `Comparable<T>`, `Comparator<T>`, `Collections`                                                                                                                                                                                          |
| [Konsolenanwendungen](console-applications)              | `PrintStream`, `Scanner`, `System`                                                                                                                                                                                                       |
| [Listen](lists)                                          | `ArrayList<E>`, `Arrays`, `LinkedList<E>`, `List<E>`                                                                                                                                                                                     |
| [Mathematische Berechnungen](calculations)               | `Math`                                                                                                                                                                                                                                   |
| [Optionals](optionals)                                   | `Optional<T>`, `OptionalDouble`                                                                                                                                                                                                          |
| [Pseudozufallszahlen](pseudo-random-numbers)             | `Random`                                                                                                                                                                                                                                 |
| [Wrapper-Klassen](wrappers)                              | `Boolean`, `Double`, `Integer`                                                                                                                                                                                                           |
| [Zeichenketten (Strings)](strings)                       | `String`                                                                                                                                                                                                                                 |

## Die Javadoc

Die Javadoc ist ein Werkzeug zur Software-Dokumentation und erstellt aus den
öffentlichen Deklarationen von Klassen, Schnittstellen, Attributen und Methoden
sowie eventuell vorhandenen
[Dokumentationskommentaren](class-structure#kommentare-und-dokumentation)
HTML-Seiten. Um die Navigation innerhalb der Dokumentationsdateien zu
erleichtern, werden zusätzlich verschiedene Index- und Hilfsdateien generiert.
HTML-Tags in den Dokumentationskommentaren ermöglichen die Formatierung der
Dokumentation.

```java title="Computer.java (Auszug)" showLineNumbers
/**
 * Computer
 *
 * @author Hans Maier
 * @version 1.0
 *
 */
public class Computer {
   ...
   /**
    * Central Processing Unit
    */
   private Cpu cpu;

   /**
    * Returns the Central Processing Unit (CPU) of this Computer
    *
    * @return the Central Processing Unit
    */
   public Cpu getCpu() {
      return cpu;
   }

   /**
    * Sets the Central Processing Unit of this Computer with the incoming data
    *
    * @param powerInGhz Power of the CPU in GHz
    * @param numberOfCores Number of Cores
    */
   public void setCpu(double powerInGhz, int numberOfCores) {
      cpu = new Cpu(powerInGhz, numberOfCores);
   }
   ...
}
```
