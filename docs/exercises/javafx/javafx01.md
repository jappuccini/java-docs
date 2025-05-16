---
title: JavaFX01
description: ''
---

Erstelle eine JavaFX-Anwendung zum Zeichnen beliebig vieler, unterschiedlich
großer und unterschiedlich farbiger Kreise anhand des abgebildeten
Klassendiagramms sowie des abgebildeten Szenegraphs.

## Klassendiagramm

```mermaid
classDiagram
   Initializable <|.. Controller
   class Controller {
      -canvas: Canvas #123;FXML#125;
      -model: Model
      +initialize(location: URL, resources: ResourceBundle) void
      +addCircle(actionEvent: ActionEvent) void #123;FXML#125;
   }
   class Initializable {
      <<interface>>
      +initialize(location: URL, resources: ResourceBundle) void
   }
```

## Szenegraph

```mermaid
flowchart LR
   vbox[**VBox**
   fx:controller=_Pfad_.Controller]
   canvas[**Canvas**
   fx:id=canvas
   width=500.0
   height=500.0]
   button[**Button**
   text=Kreis zeichnen
   onAction=#drawCircle]
   vbox --> canvas
   vbox --> button
```

## Allgemeine Hinweise

- Die Methode `GraphicsContext getGraphicsContext2D()` der Klasse `Canvas` gibt
  die Grafik einer Leinwand zurück
- Die Methoden `double getWidth()` und `double getHeight` der Klasse `Canvas`
  geben die Breite bzw. die Höhe einer Leinwand zurück
- Die Methode `void setFill(p: Paint)` der Klasse `GraphicsContext` setzt die
  Füllfarbe einer Grafik auf den eingehenden Wert
- Die Methoden `void fillRect(x: double, y: double, w: double, h: double)` und
  `void fillOval(x: double, y: double, w: double, h: double)` der Klasse
  `GraphicsContext` zeichnen ein ausgefülltes Rechteck bzw. ein ausgefülltes
  Oval mit den eingehenden Informationen und der aktuellen Füllfarbe auf die
  Grafik
- Der Konstruktor
  `Color(red: double, green: double, blue: double, opacity: double)` der Klasse
  `Color` ermöglicht das Erzeugen einer (durchsichtigen) Farbe

## Hinweise zur Klasse _Controller_

- Die Methode `void initialize(location: URL, resources: ResourceBundle)` soll
  die Leinwand weiß anmalen
- Die Methode `void drawCircle(actionEvent: ActionEvent)` soll einen Kreis mit
  einer zufälligen Größe und einer zufälligen Farbe auf eine zufällige Position
  der Leinwand zeichnen
