---
title: Datenklassen (Records)
description: ''
sidebar_position: 250
tags: [records]
---

Datenklassen sind Klassen, die ausschließlich der Kapselung unveränderlicher
Daten dienen. Sie bestehen häufig aus viel _Boilerplate-Code_ — also
Codeabschnitten, die an verschiedenen Stellen nahezu identisch wiederkehren
(Konstruktor, Getter, `equals`, `hashCode`, `toString`).

```java title="Student.java" showLineNumbers
public final class Student {

   public final int id;
   public final String name;

   public Student(int id, String name) {
      this.id = id;
      this.name = name;
   }

   public int id() {
      return id;
   }

   public String name() {
      return name;
   }

   @Override
   public final int hashCode() {
      return Objects.hash(id, name);
   }

   @Override
   public final boolean equals(Object obj) {
      if (this == obj) {
         return true;
      }
      if (obj == null) {
         return false;
      }
      if (getClass() != obj.getClass()) {
         return false;
      }
      Student other = (Student) obj;
      return id == other.id && Objects.equals(name, other.name);
   }

   @Override
   public final String toString() {
      return "Student [id=" + id + ", name=" + name + "]";
   }

}
```

Seit Java 16 bieten _Records_ eine kompakte Möglichkeit, Datenklassen zu
definieren. Ein Record erzeugt anhand der deklarierten Parameter automatisch
einen Konstruktor, Getter sowie Implementierungen für `equals`, `hashCode` und
`toString`. Das Schlüsselwort dafür lautet `record`.

```java title="Student.java" showLineNumbers
public record Student(int id, String name) {}
```

:::info

Da Records von der Klasse `Record` abgeleitet sind, können sie nicht von einer
weiteren Klasse abgeleitet werden. Allerdings können Records, wie andere Klassen
auch, beliebig viele [Schnittstellen](interfaces) implementieren.

:::
