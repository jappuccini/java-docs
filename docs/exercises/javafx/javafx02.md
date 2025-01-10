---
title: JavaFX02
description: ''
---

Erstelle eine JavaFX-Anwendung zum Würfeln anhand des abgebildeten
Klassendiagramms sowie des abgebildeten Szenegraphs.

## Klassendiagramm

```mermaid
classDiagram
    Initializable <|.. Controller : implements
    Controller o-- Model
    Model o-- Dice

    class Dice {
        -value: int
        -image: Image
        +Dice()
        +rollTheDice() void
        +getValue() int
        +getImage() Image
    }

    class Model {
        -instance: Model$
        -dice: Dice
        -Model()
        +getInstance() Model$
        +rollTheDice() void
        +getDiceValue() int
        +getDiceImage() Image
    }

    class Controller {
        -diceImageView: ImageView #123;FXML#125;
        -model: Model
        +initialize(location: URL, resources: ResourceBundle) void
        +rollTheDice(actionEvent: ActionEvent) void #123;FXML#125;
    }

    class Initializable {
        <<interface>>
        +initialize(location: URL, resources: ResourceBundle) void
    }
```

## Szenegraph

```mermaid
flowchart LR
	vbox[VBox
	     fx:controller=Pfad.Controller]
	imageview[ImageView
	          fx:id=diceImageView]
	button[Button
	       text=Würfeln
	       onAction=#rollTheDice]

    vbox --> imageview
    vbox --> button
```

## Allgemeiner Hinweis

Der Konstruktor `Image(url: String)` der Klasse `Image` ermöglicht das Erzeugen
eines Grafik-Objektes.

## Hinweise zur Klasse _Dice_

- Der Konstruktor soll den Würfel werfen
- Die Methode `void rollTheDice()` soll den Würfelwert auf einen zufälligen Wert
  zwischen 1 und 6 setzen und dem Würfelbild eine entsprechende Grafik zuweisen

## Hinweise zur Klasse _Model_

- Der Konstruktor soll den Würfel initialisieren
- Die Methode `void rollTheDice()` soll den Würfel werfen

## Hinweise zur Klasse _Controller_

- Die Methode `void initialize(location: URL, resources: ResourceBundle)` soll
  das Model initialisieren, den Würfel werfen und dem Würfelbilderrahmen ein
  entsprechendes Würfelbild zuweisen
- Die Methode `void rollTheDice(actionEvent: ActionEvent)` soll den Würfel
  werfen und dem Würfelbilderrahmen ein entsprechendes Würfelbild zuweisen
