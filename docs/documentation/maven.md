---
title: Maven
description: ''
sidebar_position: 252
tags: [maven]
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

[Apache Maven (kurz Maven)](https://maven.apache.org/) ist ein sogenanntes
Build-Automatisierungstool, welches hauptsächlich für Java-Projekte verwendet
wird. Es hilft Entwicklern, den Build-Prozess eines Programmes zu vereinfachen
und zu standardisieren. Maven verwendet hierzu eine Konfigurationsdatei namens
_pom.xml_ (Project Object Model).

## Merkmale

- Automatisierung des Build-Prozesses: Maven automatisiert den Build-Prozess
  (Kompilieren, Testen, Verpacken und Bereitstellen)
- Abhängigkeitsmanagement: Maven verwaltet Projekt-Abhängigkeiten wie externe
  Bibliotheken und Frameworks automatisch
- Standardisierte Projektstruktur: Maven fördert eine standardisierte
  Projektstruktur, die es einfacher macht, Projekte zu verstehen und zu
  navigieren
- Plugins: Maven unterstützt eine Vielzahl von Plugins, die zusätzliche
  Funktionalitäten bieten (z.B. Code-Analyse, Berichterstellung und
  Dokumentation)
- Lebenszyklus-Management: Maven definiert einen standardisierten Lebenszyklus
  für den Build-Prozess

## Die Konfigurationsdatei _pom.xml_

Die Konfigurationsdatei _pom.xml_ umfasst neben allen relevanten
Projekt-Eigenschaften auch sämtliche Abhängigkeiten sowie Plugins, die dadurch
automatisch von Maven verwaltet werden.

```xml title="pom.xml" showLineNumbers
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>edu.jappuccini</groupId>
  <artifactId>demo</artifactId>
  <version>1.0.0-SNAPSHOT</version>

  <!-- Eigenschaften -->
  <properties>
    <!-- Java-Version -->
    <maven.compiler.source>21</maven.compiler.source>
    <maven.compiler.target>21</maven.compiler.target>
    <!-- Encoding -->
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
  </properties>

  <!-- Build Prozess -->
  <build>
    <!-- Plugins -->
    <plugins>
      <!-- Prettier -->
      <plugin>
        <groupId>com.hubspot.maven.plugins</groupId>
        <artifactId>prettier-maven-plugin</artifactId>
        <version>0.16</version>
        <executions>
          <execution>
            <id>default-compile</id>
            <phase>compile</phase>
            <goals>
              <goal>write</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>

  <!-- Abhängigkeiten -->
  <dependencies>
    <!-- JUnit 5 -->
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter-api</artifactId>
      <version>5.11.3</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

</project>
```

## Lebenszyklus-Phasen

Maven kennt die drei Lebenszyklen `clean` zum Löschen aller Artefakte
vergangener Builds, `default` zum Erstellen des Projekts sowie `site` zum
Erstellen einer Dokumentationsseite. Jeder Lebenszyklus durchläuft hierbei
verschiedene Phasen. Durch Plugins können diese um zusätzliche
Verarbeitungsschritte erweitert werden. Nachfolgend dargestellt sind die
wesentlichen Phasen des Default Lebenszyklus:

| Phase      | Beschreibung                                                                         |
| ---------- | ------------------------------------------------------------------------------------ |
| `validate` | Prüfen, ob die POM sowie die Projektstruktur vollständig, fehlerfrei und gültig sind |
| `compile`  | Kompilieren des Quellcodes                                                           |
| `test`     | Ausführen der Komponententests                                                       |
| `package`  | Verpacken des Projekts in z.B. ein Java Archiv (JAR)                                 |
| `verify`   | Ausführen von bereitgestellten Integrationstests                                     |
| `install`  | Kopieren des Archivs ins lokale Maven-Repository                                     |
| `deploy`   | Kopieren des Archivs in ein remote Maven-Repository                                  |

## Hilfreiche Plugins und Bibliotheken

<Tabs>
  <TabItem value="a" label="Prettier" default>

[Prettier](https://prettier.io/) ist ein weit verbreiterter
Quellcode-Formatierer, der eine einheitliche Quellcode-Formatierung fördert.
Durch die Einbindung des Goals `write` in die Lebenszyklus-Phase `compile` wird
sichergestellt, dass der Quellcode bei jedem Kompiliervorgang automatisch
formattiert wird.

```xml title="pom.xml (Auszug)" showLineNumbers
...
<!-- Prettier -->
<plugin>
  <groupId>com.hubspot.maven.plugins</groupId>
  <artifactId>prettier-maven-plugin</artifactId>
  <version>0.16</version>
  <executions>
    <execution>
      <id>default-compile</id>
      <phase>compile</phase>
      <goals>
        <goal>write</goal>
      </goals>
    </execution>
  </executions>
</plugin>
...
```

  </TabItem>
  <TabItem value="b" label="Checkstyle">

[Checkstyle](https://maven.apache.org/plugins/maven-checkstyle-plugin/) ist ein
Tool zur Berichtserstellung über die Einhaltung von Codingstandards und gibt dem
Entwickler dadurch wertvolle Hinweise zur Verbesserung der Softwarequalität. Das
Goal `check` führt eine Prüfung des Quellcodes aus und gibt der Ergebnisse auf
der Konsole aus, das Goal `checkstyle` erstellt aufbauend auf den Prüfungen eine
Berichtsseite.

```xml title="pom.xml (Auszug)" showLineNumbers
...
<!-- Checkstyle -->
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-checkstyle-plugin</artifactId>
  <version>3.6.0</version>
</plugin>
...
```

  </TabItem>
  <TabItem value="c" label="Lombok">

Lombok ist eine beliebte Bibliothek zur Generierung von repetitiven Methoden
(siehe auch [Lombok](lombok)).

```xml title="pom.xml (Auszug)" showLineNumbers
...
<!-- Lombok -->
<dependency>
  <groupId>org.projectlombok</groupId>
  <artifactId>lombok</artifactId>
  <version>1.18.36</version>
</dependency>
...
```

  </TabItem>
  <TabItem value="d" label="SLF4J und Log4J">

Simple Logging Facade for Java (SLF4J) ist eine beliebte
Java-Protokollierungs-API, die es ermöglicht, den Quellcode um Protokolle zu
erweitern, die anschließend an ein gewünschtes Protokoll-Framework (wie z.B.
Log4J) weitergeleitet werden (siehe auch
[Simple Logging Facade for Java (SLF4J)](slf4j)).

```xml title="pom.xml (Auszug)" showLineNumbers
...
<!-- SLF4J-API -->
<dependency>
  <groupId>org.slf4j</groupId>
  <artifactId>slf4j-api</artifactId>
  <version>2.0.16</version>
</dependency>
<!-- SLF4J-Implementierung -->
<dependency>
  <groupId>org.slf4j</groupId>
  <artifactId>slf4j-reload4j</artifactId>
  <version>2.0.16</version>
</dependency>
...
```

  </TabItem>
  <TabItem value="e" label="JUnit 5">

JUnit 5 ist ein weit verbreitetes Framework zur Erstellung von Komponententests
(siehe auch [Komponententests (Unit Tests)](unit-tests)).

```xml title="pom.xml (Auszug)" showLineNumbers
...
<!-- JUnit 5 -->
<dependency>
  <groupId>org.junit.jupiter</groupId>
  <artifactId>junit-jupiter-api</artifactId>
  <version>5.11.3</version>
  <scope>test</scope>
</dependency>
...
```

  </TabItem>
  <TabItem value="f" label="Mockito">

Mockito ist ein beliebtes Framework für das Erstellen von Mock-Objekten in Java,
das hauptsächlich für das Testen von Anwendungen verwendet wird (siehe auch
[Mockito](mockito)).

```xml title="pom.xml (Auszug)" showLineNumbers
...
<!-- Mockito -->
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <version>5.14.2</version>
    <scope>test</scope>
</dependency>
...
```

  </TabItem>
  <TabItem value="g" label="JavaFX und Java FXML">

JavaFX stellt (vor allem in Verbindung mit Java FXML) ein State-of-the-Art
Framework für das Erstellen von GUIs in Java dar (siehe auch [JavaFX](javafx)).

```xml title="pom.xml (Auszug)" showLineNumbers
...
<!-- JavaFX -->
<dependency>
    <groupId>org.openjfx</groupId>
    <artifactId>javafx-controls</artifactId>
    <version>23.0.1</version>
</dependency>
<!-- Java FXML -->
<dependency>
    <groupId>org.openjfx</groupId>
    <artifactId>javafx-fxml</artifactId>
    <version>23.0.1</version>
</dependency>
...
```

  </TabItem>
</Tabs>

:::danger Hinweis

Die angegebenen Versionen sind die jeweils aktuellsten Versionen zum Stand
Dezember 2024.

:::
