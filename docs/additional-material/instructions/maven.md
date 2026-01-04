---
title: Arbeiten mit Maven
description: ''
sidebar_position: 20
tags: [maven]
---

:::info Benötigte Tools

[JDK](https://www.oracle.com/java/technologies/downloads/) und
[Eclipse](https://www.eclipse.org/)

:::

## Maven-Projekt anlegen

- Starte Eclipse
- Führe die Funktion **File - New - Maven Project** aus
- Markiere die Option **Create a simple project (skip archetype selection)**,
  entmarkiere die Option **Use default Workspace location**, gib die
  nachfolgenden Informationen ein und betätige die Drucktaste **Next >**
  - Location: **[Pfad zu Deinem Projektordner]** (z.B. _C:\Users\Daniel
    Appenmaier\git\Java_)
- Gib die nachfolgenden Informationen ein und betätige die Drucktaste **Finish**
  - Group Id: **[Eine Domain].[Dein Name bzw. Deine Organisation in
    Kleinbuchstaben]** (z.B. _edu.appenmaier_)
  - Artifact Id: **[Der Name Deines Projekts in Kleinbuchstaben und ohne
    Leerzeichen]** (z.B. _java_)
  - Version: **0.0.1-SNAPSHOT**
  - Packaging: **jar**
  - Name: **[Der Name Deines Projekts]** (z.B. _Java_)
  - Description: **[Die Beschreibung Deines Projekts]** (z.B. _Java_)

## Java-Version und Codierung festlegen

- Starte Eclipse
- Navigiere in der View _Package Explorer_ zu Deinem Maven-Projekt
- Navigiere in Deinem Maven-Projekt zur Datei _pom.xml_ und öffne diese
- Füge den abgebildeten Quellcode ein, um die Java-Version sowie die Codierung
  festzulegen, speichere die Änderungen und schließe die Datei wieder

```xml title="pom.xml (Auszug)" showLineNumbers
   ...
   <properties>
      <!-- Java-Version -->
      <maven.compiler.release>[Deine installierte Java Version]</maven.compiler.release>
      <!-- Codierung -->
      <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
      <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
   </properties>
   ...
```

## JavaDoc erstellen

- Starte Eclipse
- Navigiere in der View _Package Explorer_ zu Deinem Maven-Projekt
- Navigiere in Deinem Maven-Projekt zur Datei _pom.xml_ und öffne diese
- Füge den abgebildeten Quellcode ein, um das JavaDoc-Plugin einzubinden,
  speichere die Änderungen und schließe die Datei wieder
- Führe die Funktion **Run - Run As - 1 Maven build...** aus
- Gib die nachfolgenden Informationen ein und betätige die Drucktaste **Run**
  - Goals: **clean package** (alternativ: **javadoc:javadoc**)

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

## Ausführbare JAR-Datei erstellen

- Starte Eclipse
- Navigiere in der View _Package Explorer_ zu Deinem Maven-Projekt
- Navigiere in Deinem Maven-Projekt zur Datei _pom.xml_ und öffne diese
- Füge den abgebildeten Quellcode ein, um das Shade-Plugin einzubinden,
  speichere die Änderungen und schließe die Datei wieder
- Führe die Funktion **Run - Run As - 1 Maven build...** aus
- Gib die nachfolgenden Informationen ein und betätige die Drucktaste **Run**
  - Goals: **clean package**

```xml title="pom.xml" showLineNumbers
   ...
   <build>
      <plugins>
         <!-- Shade -->
         <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-shade-plugin</artifactId>
            <version>[Version]]</version>
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
