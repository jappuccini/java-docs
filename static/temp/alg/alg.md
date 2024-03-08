# Algorithms and data structures

Was sind Bestandteile der Vorlesung?

Suchen, Sortieren,

Bewerten von Algorithmen (Worst, Average, Best Case)

## Suchen von Elementen

### Wir suchen eine Zahl im Array

- lineare suche prämisse: sortierte Liste von Zahlen
- binäre Suche
- interpolations suche

Wichtig: Optimierung geht nur wenn man Einschränkungen macht/Annahmen trifft.
Die verbesserte Suche kann nur durchgeführt werden, wenn das Array sortiert
vorliegt. Ohne diese Einschränkung kann der Algorithmus kein Ergebnis liefern.

End of Day: Two crystal balls

## Bewerten eines Algorithmus

- Es gibt den Best Case, Average Case und den Worst Case. In dieser Vorlesung
  ist nur der Worst Case relevant.
- Wie bewertet man einen Algorithmus?
- Big O oder Landau Notation Rule of 3: Drop the Constanst Worst Case idk

## Iteration und Rekursion

### Iteration

Iteration ist schon bekannt. While, do-while, for, foreach schleifen Die Abbruch
bediengugn musss innerhalb der schleife manipuliert werden

### Rekursion

Die Rekursion anderes konzept, weit aus komplexer als erwartet.

1. Pre Recursion
2. Rekursion
3. After Rekursion

Wichtig bei der Rekursion man geht erst ganz nach Unten und von der untersten
Ecke wieder ganz nach Oben -> Beispiel The Primagen mit der Tabelle

### Implementierung von Binärsuche rekursiv und iterativ

## Sortieren

Wir kennen das Sortieren auf einer abstracten even -> Comparator/Comparable

Bubblesort P Insert Sort SelectionSort MergeSort Quicksort - P

2 implemenieren-können aufgaben für alles

## Hashing?

### Datenstruktur

Array -- P List --> P LinkedList - Single Linked List - Double Linked List P
Queues --> FIFO - LIFO - P Stack --> P Trees --> Binary Tree --> KD tree -->
Heap -> Goil Outlook Trie Graph Set --> HashSet Map --> HashMap

# Inhalte

## Daniel

Was sind Algorithmen Iteration & Rekursion Bewertung von Algorithemn (Time and
Space Complexity) Big(o) Landau DS: Array, LinkedList, Queue, Stack, Tree,
Binärbaumo

Suchen: Linear Binäre Suche Interpolations Suche

Sortieren: Bubblesort InsertSort SelectionSort MergeSort Quicksort

Hashing

Collections: Collection List ArrayList LinkedList Tree Set Queue PriorityQueue
Iterator Map

## Primagen

BigO Arrays Linear Search BinarySearch Two Crystal Balls Problem

BubbleSort LinkedList DoubleLinkedList Queue Stack Arrays vs LinkedList
ArrayList Rekursion --> Base Case & Recursive Case Quick Sort Double Linked List
Tree --> Tree Traversal Breadth First Search Depth First: Find, Insert, Delete,
Search Heap Tries Graphs Maps LRU

## Steffen

Vorschlag: So viel wie möglich Oberflächlist example: Set, Map Konzept mit
Hashing und Equals Example mit Performance im Vergleich zur List --> Set has &
add & remove --> Stream Api && Map Set && Has vs stream api

Selber Implementieren: Linear Search Big O BinarySearch Outlook und Explanation
Interpolation Search, Two Chrystal Balls Problem

Rekursion & Iteration Sortieren Linear mit Bubble und QuickSort Sortieren
Rekursiv mit MergeSort

List im Detail implementieren Double Linked List Queue Stack

Tree nur Binary Tree BreathFirst DepthFist Insert Outlook Other Trees && Trie &&
Graphen
