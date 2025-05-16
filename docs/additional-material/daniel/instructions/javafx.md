---
title: Arbeiten mit JavaFX
description: ''
sidebar_position: 40
tags: []
---

:::danger Benötigte Tools

[JDK](https://www.oracle.com/java/technologies/downloads/),
[Eclipse](https://www.eclipse.org/),
[Scene Builder](https://gluonhq.com/products/scene-builder/) und Eclipse-Plugin
[e(fx)clipse](http://download.eclipse.org/efxclipse/updates-released/)

:::

## Scene Builder mit Eclipse verbinden

- Starte Eclipse
- Navigiere zu **Window – Preferences – JavaFX**
- Gib beim Feld **SceneBuilder executable** den Wert **[Der Pfad zur
  SceneBuilder.exe]\SceneBuilder.exe** ein und betätige die Drucktaste **Apply
  and Close** (z.B. _C:\Programme\Scene Builder\SceneBuilder.exe_)

## JavaFX-Anwendung ausführen

**Variante A: Via ausführbarer JavaFX-Anwendung**

- Starte Eclipse
- Navigiere in der View _Package Explorer_ zu Deinem Maven-Projekt
- Implementiere in Deinem Maven-Projekt eine ausführbare JavaFX-Anwendung (siehe
  Quellcode)
- Navigiere in Deinem Maven-Projekt zur Datei _pom.xml_ und öffne diese
- Füge den abgebildeten Quellcode ein, um das JavaFX-Maven-Plugin einzubinden,
  speichere die Änderungen und schließe die Datei wieder
- Wähle die Option **Run - Run As - 3 Maven build...** aus
- Gib die nachfolgenden Informationen ein und betätige die Drucktaste **Run**
  - Goals: **javafx:run**

```java title="App.java" showLineNumbers
public class App extends Application {

   public static void main(String[] args) {
      launch(args);
   }

   @Override
   public void start(Stage primaryStage) {
      primaryStage.show();
   }

}
```

```xml title="pom.xml (Auszug)" showLineNumbers
   ...
         <plugin>
            <groupId>org.openjfx</groupId>
            <artifactId>javafx-maven-plugin</artifactId>
            <version>[Version]</version>
            <configuration>
               <mainClass>[Startklasse]</mainClass>
            </configuration>
         </plugin>
   ...
```

**Variante B: Via separater Startklasse**

- Starte Eclipse
- Navigiere in der View _Package Explorer_ zu Deinem Maven-Projekt
- Implementiere in Deinem Maven-Projekt eine JavaFX-Anwendung (siehe Quellcode)
- Implementiere in Deinem Maven-Projekt eine Startklasse (siehe Quellcode)
- Navigiere in Deinem Maven-Projekt zur erstellten Startklasse und wähle die
  Option `Run As - 1 Java Application` aus

```java title="App.java" showLineNumbers
public class App extends Application {

   @Override
   public void start(Stage primaryStage) {
      primaryStage.show();
   }

}
```

```java title="MainClass.java" showLineNumbers
public class MainClass {

   public static void main(String[] args) {
      Application.launch(App.class, args);
   }

}
```
