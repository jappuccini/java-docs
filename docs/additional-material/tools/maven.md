---
title: Maven
description: ''
sidebar_position: 20
tags: [maven]
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

[Apache Maven (kurz Maven)](https://maven.apache.org/) ist ein
Build-Automatisierungstool für Java-Projekte. Es vereinfacht und standardisiert
den Build-Prozess über eine zentrale Konfigurationsdatei namens _pom.xml_
(Project Object Model).

## Merkmale

Maven zeichnet sich durch folgende Eigenschaften aus:

- Automatisierung des Build-Prozesses: Kompilieren, Testen, Verpacken und
  Bereitstellen
- Abhängigkeitsmanagement: externe Bibliotheken und Frameworks werden
  automatisch verwaltet
- Standardisierte Projektstruktur: erleichtert das Verstehen und Navigieren in
  Projekten
- Plugins: erweitern Maven um zusätzliche Funktionen wie Code-Analyse,
  Berichterstellung und Dokumentation
- Lebenszyklus-Management: definierter, standardisierter Ablauf des
  Build-Prozesses

## Lebenszyklus-Phasen

Maven kennt drei Lebenszyklen: `clean` löscht alle Artefakte vergangener Builds,
`default` erstellt das Projekt, und `site` generiert eine Dokumentationsseite.
Jeder Lebenszyklus durchläuft dabei mehrere Phasen, die sich durch Plugins um
zusätzliche Schritte erweitern lassen. Die folgende Tabelle zeigt die
wesentlichen Phasen des Default-Lebenszyklus.

| Phase      | Beschreibung                                                                         |
| ---------- | ------------------------------------------------------------------------------------ |
| `validate` | Prüfen, ob die POM sowie die Projektstruktur vollständig, fehlerfrei und gültig sind |
| `compile`  | Kompilieren des Quellcodes                                                           |
| `test`     | Ausführen der Komponententests                                                       |
| `package`  | Verpacken des Projekts in z.B. ein Java Archiv (JAR)                                 |
| `verify`   | Ausführen von bereitgestellten Integrationstests                                     |
| `install`  | Kopieren des Archivs ins lokale Maven-Repository                                     |
| `deploy`   | Kopieren des Archivs in ein remote Maven-Repository                                  |

## Das Projektmodell

Das Projektmodell enthält neben allgemeinen Projekt-Angaben wie `groupId`,
`artifactId` und `version` auch alle Abhängigkeiten zu externen Bibliotheken.
Zusätzlich lässt sich hier der Build-Prozess konfigurieren und durch Plugins
erweitern.

```xml title="pom.xml" showLineNumbers
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             https://maven.apache.org/xsd/maven-4.0.0.xsd">
   <modelVersion>4.0.0</modelVersion>
   <groupId>edu.jappuccini</groupId>
   <artifactId>demos</artifactId>
   <version>1.0.0</version>

   <properties>
      <!-- Java-Version -->
      <maven.compiler.release>[Version]</maven.compiler.release>
      <!-- Codierung -->
      <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
      <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
   </properties>

</project>
```

## Hilfreiche Plugins

Maven-Plugins erweitern den Build-Prozess um zusätzliche Funktionen. Die
folgenden Plugins sind für Java-Projekte besonders nützlich.

<Tabs>
  <TabItem value="a" label="JavaDoc" default>

[JavaDoc](https://maven.apache.org/plugins/maven-javadoc-plugin/) nutzt das
integrierte JavaDoc Tool zur Generierung einer JavaDoc. Durch die Einbindung des
Goals `javadoc` in die Lebenszyklus-Phase `package` wird sichergestellt, dass
die JavaDoc bei jedem Verpacken erstellt wird.

```xml title="pom.xml (Auszug)" showLineNumbers
   ...
   <build>
      <plugins>
         <!-- JavaDoc -->
         <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-javadoc-plugin</artifactId>
            <version>[Version]</version>
            <executions>
               <execution>
                  <phase>package</phase>
                  <goals>
                     <goal>javadoc</goal>
                  </goals>
               </execution>
            </executions>
         </plugin>
      </plugins>
   </build>
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
   <build>
      <plugins>
         <!-- Checkstyle -->
         <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-checkstyle-plugin</artifactId>
            <version>[Version]</version>
         </plugin>
      </plugins>
   </build>
   ...
```

  </TabItem>
  <TabItem value="c" label="Prettier">

[Prettier](https://prettier.io/) ist ein weit verbreiteter
Quellcode-Formatierer, der eine einheitliche Formatierung fördert. Durch die
Einbindung des Goals `write` in die Lebenszyklus-Phase `compile` wird
sichergestellt, dass der Quellcode bei jedem Kompiliervorgang automatisch
formatiert wird.

```xml title="pom.xml (Auszug)" showLineNumbers
   ...
   <build>
      <plugins>
         <!-- Prettier -->
         <plugin>
            <groupId>com.hubspot.maven.plugins</groupId>
            <artifactId>prettier-maven-plugin</artifactId>
            <version>[Version]</version>
            <executions>
               <execution>
                  <phase>compile</phase>
                  <goals>
                     <goal>write</goal>
                  </goals>
               </execution>
           </executions>
         </plugin>
      </plugins>
   </build>
   ...
```

:::info

Aktuell kann Prettier nicht in Kombination mit Datenklassen (Records) verwendet
werden.

:::

  </TabItem>
  <TabItem value="d" label="Shade">

[Shade](https://maven.apache.org/plugins/maven-shade-plugin/) ermöglicht das
Verpacken eines Maven-Artefakts in eine sogenannte Über-JAR, die neben den
Klassen des Artefakts auch alle abhängigen Klassen enthält. Durch die Einbindung
des Goals `shade` in die Lebenszyklus-Phase `package` wird sichergestellt, dass
die Über-JAR bei jedem Verpacken erstellt wird.

```xml title="pom.xml (Auszug)" showLineNumbers
   ...
   <build>
      <plugins>
         <!-- Shade -->
         <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-shade-plugin</artifactId>
            <version>[Version]</version>
            <executions>
               <execution>
                  <phase>package</phase>
                  <goals>
                     <goal>shade</goal>
                  </goals>
                  <configuration>
                     <shadedArtifactAttached>true</shadedArtifactAttached>
                     <transformers>
                        <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                           <mainClass>[Startklasse]</mainClass>
                        </transformer>
                     </transformers>
                  </configuration>
               </execution>
            </executions>
         </plugin>
      </plugins>
   </build>
   ...
```

  </TabItem>
</Tabs>

## Hilfreiche Bibliotheken und Frameworks

Die folgende Auswahl an Bibliotheken und Frameworks wird häufig in
Java-Projekten eingesetzt und lässt sich einfach als Maven-Abhängigkeit
einbinden.

<Tabs>
  <TabItem value="a" label="Lombok" default>

Lombok ist eine beliebte Bibliothek zur automatischen Generierung von
Boilerplate-Code wie Getter, Setter und Konstruktoren (siehe auch
[Lombok](../../documentation/lombok)).

```xml title="pom.xml (Auszug)" showLineNumbers
   ...
   <dependencies>
      <!-- Lombok -->
      <dependency>
         <groupId>org.projectlombok</groupId>
         <artifactId>lombok</artifactId>
         <version>[Version]</version>
      </dependency>
   </dependencies>
   ...
```

  </TabItem>
  <TabItem value="b" label="SLF4J und Log4J">

SLF4J (Simple Logging Facade for Java) ist eine Protokollierungs-API, die den
Quellcode von der konkreten Protokoll-Implementierung entkoppelt. Die
eigentlichen Protokollmeldungen werden an ein Framework wie Log4J weitergeleitet
(siehe auch [SLF4J](../../documentation/slf4j)).

```xml title="pom.xml (Auszug)" showLineNumbers
   ...
   <dependencies>
      <!-- SLF4J-API -->
      <dependency>
         <groupId>org.slf4j</groupId>
         <artifactId>slf4j-api</artifactId>
         <version>[Version]</version>
      </dependency>
      <!-- SLF4J-Implementierung -->
      <dependency>
         <groupId>org.slf4j</groupId>
         <artifactId>slf4j-reload4j</artifactId>
         <version>[Version]</version>
      </dependency>
   </dependencies>
   ...
```

  </TabItem>
  <TabItem value="c" label="JUnit 5">

JUnit 5 ist ein weit verbreitetes Framework zur Erstellung von Komponententests
(siehe auch [Komponententests (Unit Tests)](../../documentation/unit-tests)).

```xml title="pom.xml (Auszug)" showLineNumbers
   ...
   <dependencies>
      <!-- JUnit 5 -->
      <dependency>
         <groupId>org.junit.jupiter</groupId>
         <artifactId>junit-jupiter-api</artifactId>
         <version>[Version]</version>
         <scope>test</scope>
      </dependency>
   </dependencies>
   ...
```

  </TabItem>
  <TabItem value="d" label="Mockito">

Mockito ist ein beliebtes Framework für das Erstellen von Mock-Objekten in Java,
das hauptsächlich für das Testen von Anwendungen verwendet wird (siehe auch
[Mockito](../../documentation/mockito)).

```xml title="pom.xml (Auszug)" showLineNumbers
   ...
   <dependencies>
      <!-- Mockito -->
      <dependency>
         <groupId>org.mockito</groupId>
         <artifactId>mockito-core</artifactId>
         <version>[Version]</version>
         <scope>test</scope>
      </dependency>
   </dependencies>
   ...
```

  </TabItem>
  <TabItem value="e" label="JavaFX und Java FXML">

JavaFX ist ein Framework für grafische Benutzeroberflächen in Java. In
Verbindung mit Java FXML lassen sich Layout und Logik sauber trennen (siehe auch
[JavaFX](../../documentation/javafx)).

```xml title="pom.xml (Auszug)" showLineNumbers
   ...
   <dependencies>
      <!-- JavaFX -->
      <dependency>
         <groupId>org.openjfx</groupId>
         <artifactId>javafx-controls</artifactId>
         <version>[Version]</version>
      </dependency>
      <!-- Java FXML -->
      <dependency>
         <groupId>org.openjfx</groupId>
         <artifactId>javafx-fxml</artifactId>
         <version>[Version]</version>
      </dependency>
   </dependencies>
   ...
```

  </TabItem>
</Tabs>

:::info

Verfügbare Versionen können dem
[Maven Central Repository](https://central.sonatype.com/) entnommen werden.

:::
