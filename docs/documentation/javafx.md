---
title: JavaFX-Anwendungen
description: ''
sidebar_position: 330
tags: []
---

JavaFX stellt ein Framework zur Entwicklung plattformübergreifender grafischer Benutzeroberflächen dar. Eine grafische Benutzeroberfläche oder auch _GUI_ (Graphical User Interface) hat die Aufgabe, Programme mittels grafischer Bildschirmelemente bedienbar zu 
machen:
- Controls wie Eingabefelder, Drucktasten und Ausgabefelder ermöglichen die Interaktion mit der Anwendung
- Container wie Horizontalboxen und Bereichscontainer ermöglichen die strukturierte Darstellung und Verwaltung anderer Bildschirmelemente:
- Dialoge wie Nachrichtendialoge und Dateiauswahl-Dialoge stellen vordefinierte Oberflächen dar, mit deren Hilfe wiederkehrende Anwendungsfälle abgedeckt werden können

![image](https://user-images.githubusercontent.com/47243617/209136694-f18f83af-8390-4503-b18c-71c59c3eb3c1.png)

## Aufbau einer JavaFX-Anwendung
Eine JavaFX-Anwendung besteht aus einer oder mehreren Bühnen (Stages), die beliebig vielen Szenen (Scenes) enthalten können, wobei jede Szene wiederum beliebig viele Bildschirmelemente (Nodes) enthalten kann:
- Die Bühne stellt den Rahmen für den tatsächlichen Inhalt bereit
- Eine Szene verwaltet den sogenannten _Szenegraphen_ der den sichtbaren Teil einer grafischen Benutzeroberfläche repräsentiert
- Ein Bildschirmelement ist Teil des Szenegraphen und kann entweder zur Strukturierung (_Container_) oder zur Interaktion (_Control_) genutzt werden

![image](https://user-images.githubusercontent.com/47243617/209136757-192b49ef-5547-4c11-bb24-1aec9fe4e895.png)

## Der Szenegraph
Der Szenegraph verwaltet die einzelnen Bildschirmelemente einer Szene. Die Elemente eines Graphen werden als Knoten, der Ursprung des Graphen als Wurzel-Knoten 
bezeichnet.

![image](https://user-images.githubusercontent.com/47243617/209136774-4d61fc1b-3875-4289-b310-c69c47302f4a.png)

::: note Hinweis
Beim Szenegraphen ist der Wurzel-Knoten vom Typ `Parent`.
:::

## Lebenszyklus einer JavaFX-Anwendung
JavaFX-Anwendungen sind Unterklassen der Klasse `Application`, die die verschiedenen Lebenszyklus-Methoden bereitstellt:
- Die Methode `void launch(args: String[])` speichert die Parameter, erzeugt ein Objekt der eigenen Klasse und ruft die weiteren Lebenszyklus-Methoden auf
- Die Methode `void init()` kann genutzt werden, um z.B. die Aufrufparameter auszulesen
- Die Methode `void start(primaryStage: Stage)` bekommt eine Bühne übergeben und wird dazu verwendet, die Bühne zu gestalten und die erste Szene aufzurufen
- Die Methode `void stop()` wird aufgerufen, bevor der Prozess gestoppt wird und kann genutzt werden, um Aufräumarbeiten durchzuführen

## Aufbau einer Szene
Der Aufbau einer Szene erfolgt deklarativ mit Hilfe von FXML-Dokumenten. FXML stellt eine auf XML-basierende Sprache dar und ermöglicht eine klare Trennung zwischen Layout und Code:
1. Die Main-Klasse ruft den FXML-Loader auf
2. Der FXML-Loader überführt das FXML-Dokument in einen Szenegraphen
3. Der FXML-Loader instanziiert den Controller und ruft die (optionale) initialize-Methode auf

![image](https://user-images.githubusercontent.com/47243617/209136908-9cf06991-9816-402e-a832-bf4b5682ffe2.png)

:::note Hinweis
_XML_ (Extensible Markup Language) stellt eine Auszeichnungssprache zur Beschreibung strukturierter Daten dar.
:::

## Definition von FXML-Dokumenten
Die einzelnen Bildschirmelemente der Szene werden in einem FXML-Dokument als geschachtelte Elemente dargestellt.

```xml title="View.fxml" showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.geometry.Insets?>
<?import javafx.scene.control.Button?>
<?import javafx.scene.control.Label?>
<?import javafx.scene.control.TextField?>
<?import javafx.scene.layout.VBox?>

<VBox spacing="5.0" xmlns:fx="http://javafx.com/fxml/1">
  <children>
    <Button text="Drucktaste" />
    <Label text="Ausgabefeld" />
    <TextField promptText="Eingabefeld" />
  </children>
  <padding>
    <Insets bottom="25.0" left="25.0" right="25.0" top="25.0" />
  </padding>
</VBox>
```

## Verwenden von FXML-Dokumenten
Die statische Methode `Parent load(location: URL)` der Klasse `FXMLLoader` überführt das angegebene FXML-Dokument in einen Szenegraphen und gibt den dazugehörigen Wurzelknoten vom Typ `Parent` zurück, mit dessen Hilfe anschließend die Szene erstellt werden kann.

```java title="MainClass.java" showLineNumbers
public class MainClass extends Application {

  public void start(Stage primaryStage) throws IOException {
    Parent root = FXMLLoader.load(getClass().getResource("View.fxml"));
    Scene scene = new Scene(root);
    primaryStage.setTitle("Aufbau einer Szene");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

}
```

## Initialisieren einer Szene
Die Methode `void initialize(location: URL, resources: ResourceBundle)` der Schnittstelle `Initializable` wird vom FXML-Loader vor Anzeige der dazugehörigen Szene aufgerufen und ermöglicht es, die Szene dynamisch anzupassen.

```java title="Controller.java" showLineNumbers
public class Controller implements Initializable {

  @FXML
  private Label label;

  public void initialize(URL location, ResourceBundle resources) {
    Random random = new Random();
    int randomNumber = random.nextInt(100);
    label.setText(String.valueOf(randomNumber));
  }

}
```

## Ereignisbehandlung
Ereignisse sind Nachrichten, die über das System weitergeleitet werden. Auf grafischen Benutzeroberflächen werden Ereignisse z.B. durch das Betätigen einer Drucktaste ausgelöst. In Java wird die Ereignisbehandlung durch das Delegationsmodell festgelegt:
1. Empfänger können sich beim Sender für ein Ereignis registrieren
2. Der Sender löst das Ereignis aus und übergibt das erzeugte Ereignis-Objekt an alle registrierten Empfänger
3. Die Empfänger nehmen das Ereignis-Objekt entgegen und haben dadurch die Möglichkeit, auf das Ereignis zu reagieren

![image](https://user-images.githubusercontent.com/47243617/209137051-486a30c8-2887-4276-bd5e-3f8e89b0074c.png)

## JavaFX Ereignisse
JavaFX stellt verschiedene Ereignisse bereit, die auf unterschiedliche Art und Weise ausgelöst werden:
- Ein `ActionEvent` wird bei verschiedenen Interaktionen mit den Controls ausgelöst, z.B. durch das Betätigen einer Drucktaste
- Ein `MouseEvent` wird bei verschiedenen Maus-Aktivitäten ausgelöst, z.B. durch das Betätigen einer Maustaste
- Ein `KeyEvent` wird durch Tastatureingaben ausgelöst
- Ein `WindowEvent` wird ausgelöst, wenn sich der Zustand eines Fensters ändert

## Ereignisbehandlung nach dem MVC-Entwurfsmuster
Die Ereignisbehandlung in JavaFX kann nach dem [MVC-Entwurfsmuster](design/design-patterns.md) umgesetzt werden. Hierbei übernimmt eine Klasse (Controller) die Ereignisbehandlung für ein konkretes FXML-Dokument (View). Im FXML-Dokument wird über die 
Eigenschaft `fx:controller` die verantwortliche Klasse für die Ereignisbehandlung festgelegt. Den zu behandelnden Ereignissen kann über die Eigenschaft `onAction` eine Behandlermethode der Ereignisbehandler-Klasse zugewiesen werden. Um in der 
Ereignisbehandler-Klasse auf die jeweiligen Elemente des FXML-Dokuments zugreifen zu können, müssen diesen über die Eigenschaft `fx:id` entsprechende Ids zugewiesen werden.

```xml title="View.fxml" showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.geometry.Insets?>
<?import javafx.scene.control.Button?>
<?import javafx.scene.control.TextField?>
<?import javafx.scene.layout.VBox?>

<VBox spacing="5.0" xmlns:fx="http://javafx.com/fxml/1" fx:controller="Controller">
  <children>
    <TextField fx:id="inputTextField" promptText="Eingabe" />
    <Button text="Eingabe ausgeben" onAction="printInput"/>
  </children>
  <padding>
    <Insets bottom="25.0" left="25.0" right="25.0" top="25.0" />
  </padding>
</VBox>
```

In der Ereignisbehandler-Klasse werden die Behandlermethoden implementiert. Diese müssen zwingend den Parameter `ActionEvent` besitzen, mit dessen Hilfe auf das ausgelöste Ereignis zugegriffen werden kann. Das Verknüpfen von Attributen der 
Ereignisbehandler-Klasse mit den Elementen des FXML-Dokuments erfolgt über die Annotation `@FXML` und der Namensgleichheit zwischen dem Attribut der Ereignisbehandler-Klasse und dem Wert der Eigenschaft `fx:id` des entsprechenden Elements des FXML-Dokuments.

```java title="Controller.java" showLineNumbers
public class Controller {

  @FXML
  private TextField inputTextField;

  public void printInput(ActionEvent actionEvent) {
    String input = inputTextField.getText();
    System.out.println(input);
  }

}
```

## Wechsel zwischen Szenen
Der Wechsel von Szenen erfolgt über die Methode `void setScene(value: Scene)` der Klasse `Window`. Die Methode `Object getSource()` der Klasse `ActionEvent` gibt das Bildschirmelement zurück, welches das Ereignis ausgelöst hat; die Methode `Window getWindow()` der 
Klasse `Scene` die Bühne, auf der die aktuelle Szene aufgeführt wird.

```java title="Controller.java" showLineNumbers
public class Controller {

  public void goToOutput(ActionEvent actionEvent) throws IOException {
    Parent root = FXMLLoader.load(getClass().getResource("View.fxml"));
    Scene scene = new Scene(root);
    Node node = (Node) actionEvent.getSource();
    Stage stage = (Stage) node.getScene().getWindow();
    stage.setScene(scene);
    stage.show();
  }

}
```

## Kommunikation zwischen Szenen
Da die verschiedenen Ereignisbehandler-Klassen in einer JavaFX-Anwendung nur lose miteiander gekoppelt sind, wird zur Kommunikation zwischen Szenen eine eindeutige Model-Klasse benötigt. Dies kann über das 
[Einzelstück-Entwurfsmuster (Singleton-Pattern)](design/design-patterns.md) erreicht werden.

Die Klasse `Model` umfasst neben der Einzelstück-Implementierung das Attribut `input` sowie die dazugehörige set- und get-Methode.

```java title="Model.java" showLineNumbers
public class Model {

  private static Model instance;
  private String input;

  private Model() {}

  public static Model getInstance() {
    if (instance == null) {
      instance = new Model();
    }
    return instance;
  }

  public void setInput(String input) {
    this.input = input;
  }

  public String getInput() {
    return input;
  }

}
```

In der Methode `void initialize(location: URL, resources: ResourceBundle)` der Klasse `InputController` wird das Attribut `model` initialisiert; in der Methode `void goToOutput(actionEvent: ActionEvent)` wird zunächst die Eingabe in der Model-Klasse gespeichert und anschließend zur View `Output`
gewechselt.

```java title="InputController.java" showLineNumbers
public class InputController implements Initializable {

  @FXML
  private TextField inputTextField;

  private Model model;

  public void initialize(URL location, ResourceBundle resources) {
    model = Model.getInstance();
  }

  public void goToOutput(ActionEvent actionEvent) throws IOException {
    String input = inputTextField.getText();
    model.setInput(input);

    Parent root = FXMLLoader.load(getClass().getResource("OutputView.fxml"));
    Scene scene = new Scene(root);
    Node node = (Node) actionEvent.getSource();
    Stage stage = (Stage) node.getScene().getWindow();
    stage.setScene(scene);
    stage.show();
  }

}
```

In der Methode `void initialize(location: URL, resources: ResourceBundle)` der Klasse `OuputController` wird zunächst das Attribut `model` initialisiert, anschließend die Eingabe aus dem Model ausgelesen und abschließend die Eingabe dem Ausgabefeld zugewiesen.

```java title="OutputController.java" showLineNumbers
public class OutputController implements Initializable {

  @FXML
  private Label inputLabel;

  private Model model;

  public void initialize(URL location, ResourceBundle resources) {
    model = Model.getInstance();
    String input = model.getInput();
    inputLabel.setText(input);
  }

}
```
