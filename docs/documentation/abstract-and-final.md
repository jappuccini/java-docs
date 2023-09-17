---
title: Abstrakte und finale Klassen und Methoden
description: ''
sidebar_position: 200
tags: [abstract-and-final]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Mit Hilfe der Schlüsselwörter `abstract` und `final` kann die Verwendung von Klassen vorgegeben bzw. eingeschänkt werden.

<Tabs>
  <TabItem value="abstractclasses" label="Abstrakte Klassen" default>

  Abstrakte Klassen können nicht instanziiert werden.

  ```java title="Person.java" showLineNumbers
  public abstract class Person { }
  ```

  ```java title="MainClass.java" showLineNumbers
  public class MainClass {

    public static void main(String[] args) {
      Person person = new Person(); // Kompilierungsfehler
    }

  }
  ```

  </TabItem>
  <TabItem value="abstractmethods" label="Abstrakte Methoden">

  Abstrakte Methoden werden in abstrakten Klassen definiert, besitzen dort keinen Methodenrumpf und müssen in den abgeleiteten Klassen der abstrakten Klasse
  überschrieben werden.

  ```java title="Person.java" showLineNumbers
  public class Person {

    public abstract print();

  }
  ```

  ```java title="Student.java" showLineNumbers
  public class Student extends Person {

    public print() { }

  }
  ```

  </TabItem>
  <TabItem value="finalclasses" label="Finale Klassen">

  Finale Klassen können nicht abgeleitet werden.

  ```java title="Person.java" showLineNumbers
  public final class Person { }
  ```

  ```java title="Student.java" showLineNumbers
  public class Student extends Person { } // Kompilierungsfehler
  ```
  
  </TabItem>
  <TabItem value="finalmethods" label="Finale Methoden">

  Finale Methoden können nicht überschrieben werden.

  ```java title="Person.java" showLineNumbers
  public class Person {

    private String name;
  
    public Person(String name) {
      this.name = name;
    }
    public final name() {
      return name;
    }

  }
  ```

  ```java title="Student.java" showLineNumbers
  public class Student extends Person {

    public name() { } // Kompilierungsfehler

  }
  ```
  
  </TabItem>
</Tabs>
