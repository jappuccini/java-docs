---
title: JavaFX05
description: ''
---

Erstelle eine JavaFX-Anwendung zum Durchführen einfacher Berechnungen anhand des
abgebildeten Klassendiagramms sowie des abgebildeten Szenegraphs.

## Klassendiagramm

```mermaid
classDiagram
    Initializable <|.. Controller : implements
    Controller o-- Model
    Model o-- Calculator
    Model ..> InvalidInputException : throws

    class Calculator {
        +add(a: double, b: double) double
        +subtract(a: double, b: double) double
        +multiply(a: double, b: double) double
        +divide(a: double, b: double) double
    }

    class Model {
        -instance: Model$
        -calculator: Calculator
        -Model()
        +getInstance() Model$
        +calculate(input: String) String
    }

    class Controller {
        -inputTextField: TextField #123;FXML#125;
        -outputLabel: Label #123;FXML#125;
        -model: Model
        +initialize(location: URL, resources: ResourceBundle) void
        +calculate(actionEvent: ActionEvent) void #123;FXML#125;
    }

    class Initializable {
        <<interface>>
        +initialize(location: URL, resources: ResourceBundle) void
    }

    class InvalidInputException {
    		<<exception>>
    }
```

## Szenegraph

```mermaid
flowchart LR
	vbox[VBox\nfx:controller=Pfad.Controller]
	textfield[TextField\nfx:id=inputTextField]
	button[Button\ntext=Berechnen\nonAction=#calculate]
	label[Label\nfx:id=outputLabel]

    vbox --> textfield
    vbox --> button
    vbox --> label
```

## Allgemeine Hinweise

- Der Konstruktor
  `Alert(alertType: AlertType, contentText: String, buttons: ButtonType...)` der
  Klasse `Alert` ermöglicht das Erzeugen eines Nachrichtendialoges
- Die Methode `void show()` der Klasse `Alert` zeigt den Nachrichtendialog an

## Hinweise zur Klasse _Calculator_

- Die Methode `double add(a: double, b: double)` soll die Summe der eingehenden
  Zahlen zurückgeben
- Die Methode `double subtract(a: double, b: double)` soll die Differenz der
  eingehenden Zahlen zurückgeben
- Die Methode `double multiply(a: double, b: double)` soll das Produkt der
  eingehenden Zahlen zurückgeben
- Die Methode `double divide(a: double, b: double)` soll den Quotienten der
  eingehenden Zahlen zurückgeben

## Hinweise zur Klasse _Model_

- Der Konstruktor soll den Taschenrechner initialisieren
- Die Methode `String calculate(input: String)` soll die eingehende Zeichenkette
  in zwei Kommazahlen sowie einen Operator umwandeln, anschließend die
  entsprechende Berechnung durchführen und schließlich das Ergebnis der
  Berechnung zurückgeben. Für den Fall, dass die eingehende Zeichenkette den
  Wert `null` hat oder dass die Eingabe nicht dem Format _Kommazahl +|-|\*|/
  Kommazahl_ entspricht, soll die Ausnahme `InvalidInputException` ausgelöst
  werden

## Hinweise zur Klasse _Controller_

- Die Methode `void initialize(location: URL, resources: ResourceBundle)` soll
  das Model initialisieren
- Die Methode `void calculate(actionEvent: ActionEvent)` soll anhand der Eingabe
  das Ergebnis berechnen und dieses dem Ausgabe-Ausgabefeld zuweisen. Für den
  Fall, dass die Eingabe ungültig ist, soll ein entsprechender Nachrichtendialog
  angezeigt werden
