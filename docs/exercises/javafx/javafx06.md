---
title: JavaFX06
description: ''
---

Erstelle eine JavaFX-Anwendung zum Anmelden anhand des abgebildeten
Klassendiagramms sowie der abgebildeten Szenegraphen.

## Klassendiagramm

```mermaid
classDiagram
    Initializable <|.. LoginController : implements
    Initializable <|.. UserController : implements
    LoginController o-- Model
    UserController o-- Model
    Model o-- User

    class User {
        <<record>>
        userName: String
        password: String
        firstname: String
        familyName: String
    }

    class Model {
        -instance: Model$
        -user: User
        -users: List~User~$
        -Model()
        +getInstance() Model$
        +setUser(userName: String, password: String) boolean
        +getUser() User
    }

    class LoginController {
        -userNameTextField: TextField #123;FXML#125;
        -passwordPasswordField: PasswordField #123;FXML#125;
        -model: Model
        +initialize(location: URL, resources: ResourceBundle) void
        +login(actionEvent: ActionEvent) void #123;FXML#125;
    }

    class UserController {
        -greetingsLabel: Label #123;FXML#125;
        -model: Model
        +initialize(location: URL, resources: ResourceBundle) void
    }

    class Initializable {
        <<interface>>
        +initialize(location: URL, resources: ResourceBundle) void
    }
```

## Szenegraph zur Szene _LoginView_

```mermaid
flowchart LR
	gridpane[GridPane\nfx:controller=Pfad.LoginController]
	label1[Label\ntext=Benutzername\nGridPane.columnIndex=0\nGridPane.rowIndex=0]
	label2[Label\ntext=Passwort\nGridPane.columnIndex=0\nGridPane.rowIndex=1]
	textfield1[TextField\nfx:id=userNameTextField\nGridPane.columnIndex=1\nGridPane.rowIndex=0]
	textfield2[TextField\nfx:id=passwordTextField\nGridPane.columnIndex=1\nGridPane.rowIndex=1]
	button[Button\ntext=Anmelden\nonAction=#login\nGridPane.columnIndex=0\nGridPane.rowIndex=2\nGridPane.columnSpan=2\nGridPane.halignment=CENTER]

    gridpane --> label1
    gridpane --> textfield1
    gridpane --> label2
    gridpane --> textfield2
    gridpane --> button
```

## Szenegraph zur Szene _UserView_

```mermaid
flowchart LR
	vbox[VBox\nfx:controller=Pfad.UserController]
	label[Label\nfx:id=greetingsLabel]

    vbox --> label
```

## Allgemeine Hinweise

- Der Konstruktor
  `Alert(alertType: AlertType, contentText: String, buttons: ButtonType...)` der
  Klasse `Alert` ermöglicht das Erzeugen eines Nachrichtendialoges
- Die Methode `void show()` der Klasse `Alert` zeigt den Nachrichtendialog an

## Hinweise zur Klasse _Model_

- Der Konstruktor soll die Beuntzerliste initialisieren und dieser einige
  Benutzern hinzufügen
- Die Methode `boolean setUser(userName: String, password: String)` soll den
  Benutzer festlegen und den Wert `true` zurückgeben. Für den Fall, dass zu den
  eingehenden Anmeldedaten kein Benutzer in der Benutzerliste ermittelt werden
  kann, soll der Wert `false` zurückgegeben werden

## Hinweise zur Klasse _LoginController_

- Die Methode `void initialize(location: URL, resources: ResourceBundle)` soll
  das Model initialisieren
- Die Methode `void login(actionEvent: ActionEvent)` soll anhand der
  eingegebenen Anmeldedaten den Benutzer festlegen und anschließend die View
  `UserView` anzeigen. Für den Fall, dass die Anmeldedaten ungültig sind, soll
  ein entsprechender Nachrichtendialog angezeigt werden

## Hinweis zur Klasse _UserController_

Die Methode `void initialize(location: URL, resources: ResourceBundle)` soll das
Model initialisieren und dem Begrüßungs-Ausgabfeld eine Zeichenkette in der Form
_Hallo [Benutzer].[Vorname] [Benutzer].[Nachname]_ zuweisen.
