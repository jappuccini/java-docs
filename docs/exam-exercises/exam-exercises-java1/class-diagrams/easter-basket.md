---
title: Osterkorb
description: ''
tags: [oo, abstract-and-final, polymorphism, io-streams]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
    EasterBasket o-- Egg
    Egg <|-- ConfectioneryEgg : extends
    Egg <|-- ChickenEgg : extends
    ConfectioneryEgg o-- Material

    class EasterBasket {
        -eggs: List~Egg~ #123;final#125;
        +EasterBasket()
        +addEgg(egg: Egg) void
        +getConfectioneryEggs() List~ConfectioneryEgg~
        +getTotalWeightInG() double
    }

    class Egg {
        <<abstract>>
        -color: String #123;final#125;
        +Egg(color: String)
        +getWeightInG() double*
    }

    class ConfectioneryEgg {
        -shellMaterial: Material
        -shellMaterialUnits: int
        -fillingMaterial: Material
        -fillingMaterialUnits: int
        +ConfectioneryEgg(color: String)
        +setFilling(material: Material, units: int) void
        +setShell(material: Material, units: int) void
        +getWeightInG() double
    }

    class ChickenEgg {
        -weightInG: double #123;final#125;
        +ChickenEgg(color: String, weightInG: double)
        +getWeightInG() double
    }

    class Material {
        -name: String #123;final#125;
        -weightPerUnitInG: double #123;final#125;
        +Material(name: String, weightPerUnitInG: double)
    }

    class MaterialReader {
        +readMaterials(file: File)$ List~Material~
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Object-Methoden
  dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse _ConfectioneryEgg_

- Der Konstruktor soll die Farbe des Genusseis initialisieren
- Die Methode `void setFilling(material: Material, units: int)` soll das
  Material sowie die Einheiten der Füllung initialisieren
- Die Methode `void setShell(material: Material, units: int)` soll das Material
  sowie die Einheiten der Hülle initialisieren
- Die Methode `double getWeightInG()` soll das Gewicht des Genusseis gemäß der
  Formel _(Gewicht pro Einheit der Hülle × Einheiten der Hülle) + (Gewicht pro
  Einheit der Füllung × Einheiten der Füllung)_ berechnen und zurückgeben

## Hinweise zur Klasse _EasterBasket_

- Die Methode `void addEgg(egg: Egg)` soll der Eierliste das eingehende Ei
  hinzufügen
- Die Methode `List<ConfectioneryEgg> getConfectioneryEggs()` soll alle
  Genusseier zurückgeben
- Die Methode `double getTotalWeightInG()` soll das Gesamtgewicht aller Eier
  zurückgeben

## Hinweis zur Klasse _MaterialReader_

Die statische Methode `List<Material> readMaterials(file: File)` soll alle
Materialien der eingehenden Datei zurückgeben.

## Beispielhafter Aufbau der Materialdatei

```
Schokolade;2
Haselnusscreme;1
Marzipan;3
Fruchtsirup;0.5
```
