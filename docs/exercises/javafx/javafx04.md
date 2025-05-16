---
title: JavaFX04
description: ''
---

Erstelle eine JavaFX-Anwendung zum Ein- und Ausschalten einer farbigen LED
anhand des abgebildeten Klassendiagramms sowie des abgebildeten Szenegraphs.

## Klassendiagramm

```mermaid
classDiagram
   Initializable <|.. Controller : implements
   Controller o-- Model
   Model o-- LED
   class LED {
      -color: color
      -isShining: boolean
      +Light()
      +getColor() Color
      +isShining() boolean
      +switchOn() void
      +switchOff() void
      +switchColor() void
   }
   class Model {
      -instance: Model$
      -led: LED
      -Model()
      +getInstance() Model$
      +getLED() LED
   }
   class Controller {
      -layer1: Circle #123;FXML#125;
      -layer2: Circle #123;FXML#125;
      -layer3: Circle #123;FXML#125;
      -layer4: Circle #123;FXML#125;
      -model: Model
      +initialize(location: URL, resources: ResourceBundle) void
      +switchOn(actionEvent: ActionEvent) void #123;FXML#125;
      +switchOff(actionEvent: ActionEvent) void #123;FXML#125;
      +switchColor(actionEvent: ActionEvent) void #123;FXML#125;
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
   group[**Group**]
   circle1[**Circle**
   fx:id=layer1
   radius=25]
   circle2[**Circle**
   fx:id=layer2
   radius=50]
   circle3[**Circle**
   fx:id=layer3
   radius=75]
   circle4[**Circle**
   fx:id=layer4
   radius=100]
   hbox[**HBox**]
   button1[**Button**
   text=Einschalten
   onAction=#switchOn]
   button2[**Button**
   text=Ausschalten
   onAction=#switchOff]
   button3[**Button**
   text=Farbe wechseln
   onAction=#switchColor]
   vbox --> group
   vbox --> hbox
   group --> circle1
   group --> circle2
   group --> circle3
   group --> circle4
   hbox --> button1
   hbox --> button2
   hbox --> button3
```

## Allgemeine Hinweise

- Die Klasse `AnimationTimer` repräsentiert einen Zeitmesser
- Die Methode `void start()` der Klasse `AnimationTimer` startet den Zeitmesser
- Der Konstruktor
  `Color(red: double, green: double, blue: double, opacity: double)` der Klasse
  `Color` ermöglicht das Erzeugen einer (durchsichtigen) Farbe

## Hinweise zur Klasse _LED_

- Der Konstruktor soll die LED auf die Farbe Rot setzen
- Die Methode `void switchOn()` soll das Attribut `isShining` auf den Wert
  _true_ setzen
- Die Methode `void switchOff()` soll das Attribut `isShining` auf den Wert
  _false_ setzen
- Die Methode `void switchColor()` soll die Farbe der LED von Rot auf Grün bzw.
  von Grün auf Blau bzw. von Blau auf Rot wechseln

## Hinweis zur Klasse _Model_

Der Konstruktor soll die LED initialisieren

## Hinweise zur Klasse _Controller_

- Die Methode `void initialize(location: URL, resources: ResourceBundle)` soll
  das Model initialisieren und kontinuierlich prüfen, ob die LED leuchtet. Für
  den Fall, dass die LED leuchtet, sollen alle 4 Ebenen in der Farbe der LED mit
  aufsteigender Durchsichtigkeit (0%, 25%, 50%, 75%) angezeigt werden und für
  den Fall, dass die LED nicht leuchtet, soll aussschließlich die erste Ebene in
  der Farbe der LED angezeigt werden
- Die Methode `void switchOn(actionEvent: ActionEvent)` soll die LED einschalten
- Die Methode `void switchOff(actionEvent: ActionEvent)` soll die LED
  ausschalten
- Die Methode `void switchColor(actionEvent: ActionEvent)` soll die Farbe der
  LED wechseln
