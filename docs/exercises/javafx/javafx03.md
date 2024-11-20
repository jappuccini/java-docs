---
title: JavaFX03
description: ''
---

Erstelle eine JavaFX-Anwendung zum Berechnen von Zinsen anhand des abgebildeten
Klassendiagramms sowie des abgebildeten Szenegraphs.

## Klassendiagramm

```mermaid
classDiagram
    Initializable <|.. Controller : implements
    Controller o-- Model

    class Model {
        -instance: Model$
        -Model()
        +getInstance() Model$
        +getInterest(initialCapital: double, interestRate: double, runningTime: int) double
    }

    class Controller {
        -initialCapitalTextField: TextField #123;FXML#125;
        -interestRateTexField: TextField #123;FXML#125;
        -runningTimeTextField: TextField #123;FXML#125;
        -interestLabel: Label #123;FXML#125;
        -model: Model
        +initialize(location: URL, resources: ResourceBundle) void
        +calculateInterest(actionEvent: ActionEvent) void #123;FXML#125;
    }

    class Initializable {
        <<interface>>
        +initialize(location: URL, resources: ResourceBundle) void
    }
```

## Szenegraph

```mermaid
flowchart LR
	gridpane[GridPane\nfx:controller=Pfad.Controller]
	label1[Label\ntext=Anfangskapital\nGridPane.columnIndex=0\nGridPane.rowIndex=0]
	label2[Label\ntext=Zinssatz\nGridPane.columnIndex=0\nGridPane.rowIndex=1]
	label3[Label\ntext=Laufzeit\nGridPane.columnIndex=0\nGridPane.rowIndex=2]
	label4[Label\ntext=Zinsen\nGridPane.columnIndex=0\nGridPane.rowIndex=3]
	label5[Label\nfx:id=interestLabel\nGridPane.columnIndex=1\nGridPane.rowIndex=3]
	textfield1[TextField\nfx:id=initialCapitalTextField\nGridPane.columnIndex=1\nGridPane.rowIndex=0]
	textfield2[TextField\nfx:id=interestRateTextField\nGridPane.columnIndex=1\nGridPane.rowIndex=1]
	textfield3[TextField\nfx:id=runningTimeTextField\nGridPane.columnIndex=1\nGridPane.rowIndex=2]
	button[Button\ntext=Zinsen berechnen\nonAction=#calculateInterest\nGridPane.columnIndex=0\nGridPane.rowIndex=4\nGridPane.columnSpan=2\nGridPane.halignment=CENTER]

    gridpane --> label1
    gridpane --> textfield1
    gridpane --> label2
    gridpane --> textfield2
    gridpane --> label3
    gridpane --> textfield3
    gridpane --> label4
    gridpane --> label5
    gridpane --> button
```

## Allgemeine Hinweise

- Der Konstruktor
  `Alert(alertType: AlertType, contentText: String, buttons: ButtonType...)` der
  Klasse `Alert` ermöglicht das Erzeugen eines Nachrichtendialoges
- Die Methode `void show()` der Klasse `Alert` zeigt den Nachrichtendialog an

## Hinweis zur Klasse _Model_

Die Methode
`double getInterest(initialCapital: double, interestRate: double, runningTime: int)`
soll die Zinsen zu den eingehenden Informationen berechnen und zurückgeben.

## Hinweise zur Klasse _Controller_

- Die Methode `void initialize(location: URL, resources: ResourceBundle)` soll
  das Model initialisieren
- Die Methode `void calculateInterest(actionEvent: ActionEvent)` soll zu den
  eingegebenen Informationen die Zinsen berechnen und diese dem
  Zinsen-Ausgabenfeld zuweisen. Für den Fall, dass die eingegebenen
  Informationen nicht konvertiert werden können, soll ein entsprechender
  Nachrichtendialog angezeigt werden und für den Fall, dass die eingegebenen
  Werte kleiner gleich Null sind, soll ebenfalls ein entsprechender
  Nachrichtendialog angezeigt werden
