---
title: Bäume
description: ''
sidebar_position: 350
tags: [trees]
---

Bäume sind abstrakte Datenstrukturen zum Darstellen von hierarchischen
Strukturen. Sie bestehen i.d.R. aus beliebig vielen Elementen (Knoten), sowie
Verbindungen zwischen den Elementen (Kanten). Den Ursprungsknoten bezeichnet man
als _Wurzelknoten_, untergeordnete Knoten als _Kindknoten_, übergeordnete Knoten
als _Elternknoten_ und Kinder ohne weitere untergeordnete Knoten als
_Blattknoten_. Bäume sind im Prinzip Erweiterungen von Listen: in einer Liste
hat ein Knoten maximal einen Nachfolger, in einem Baum kann ein Knoten mehrere
Nachfolger besitzen.

```mermaid
flowchart
    node1 --Kante---> node2
    node1 --Kante---> node3
    node3 --Kante---> node4
    node3 --Kante---> node5

    size[Höhe: 2]

    node1(Wurzelknoten\nTiefe: 0, Grad: 2)
    node2(Blattknoten\nTiefe: 1, Grad: 0)
    node3(Kindknoten/Elternknoten\nTiefe: 1, Grad: 2)
    node4(Blattknoten\nTiefe: 2, Grad: 0)
    node5(Blattknoten\nTiefe: 2, Grad: 0)
```

:::note Hinweis

Unter der Tiefe eines Knotens versteht man die Länge des Pfades vom Knoten bis
zum Wurzelknoten, unter der Höhe eines Baumes die maximale Tiefe eines seiner
Knoten und unter dem Grad eines Knotens die Anzahl seiner Kindknoten.

:::

## Binärbäume

Bei Binärbäumen darf jeder Knoten maximal zwei Nachfolger besitzen. Besitzen
alle inneren Knoten eines Binärbaumes den Grad 2, spricht man von einem _vollen
Binärbaum_, besitzen alle Blätter eines vollen Binärbaum die gleiche Tiefe,
spricht man von einem _vollständigen Binärbaum_.

```mermaid
flowchart TD
    node1 --> node2
    node1 --> node3
    node2 --> node4
    node2 --> node5
    node3 --> node6
    node3 --> node7

    subgraph vollständiger Binärbaum
        node1( )
        node2( )
        node3( )
        node4( )
        node5( )
        node6( )
        node7( )
    end

    node8 --> node9
    node8 --> node10
    node10 --> node11
    node10 --> node12

    subgraph voller Binärbaum
        node8( )
        node9( )
        node10( )
        node11( )
        node12( )
    end

    node13 --> node14
    node13 --> node15
    node15 --> node16

    subgraph Binärbaum
        node13( )
        node14( )
        node15( )
        node16( )
    end
```

## Traversierung von Bäumen

Unter der Traversierung eines Baumes versteht man das Durchlaufen aller Elemente
eines Baumes. Im Gegensatz zu Listen, wo es genau eine natürliche Ordnung für
den Durchlauf der Elemente gibt (von vorne nach hinten), existieren bei Bäumen
mehrere sinnvolle Reihenfolgen:

- Beim Tiefendurchlauf wird ausgehend vom Wurzelknoten zunächst der linke
  Teilbaum mit Tiefendurchlauf besucht, anschließend der rechte Teilbaum
- Beim Breitendurchlauf werden die Knoten nach der Breite des Baumes geordnet
  besucht

```mermaid
flowchart TD
    node1 --> node2
    node1 --> node3
    node2 --> node4
    node2 --> node5
    node3 --> node6
    node3 --> node7
    node5 --> node8
    node5 --> node9

    node1(0)
    node2(1)
    node3(2)
    node4(3)
    node5(4)
    node6(5)
    node7(6)
    node8(7)
    node9(8)

    depth[Tiefendurchlauf: 0, 1, 3, 4, 7, 8, 2, 5, 6
    Breitendurchlauf: 0, 1, 2, 3, 4, 5, 6, 7, 8]
```
