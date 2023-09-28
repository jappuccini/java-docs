---
title: Datenklassen (Records)
description: ''
sidebar_position: 250
tags: []
---

Datenklassen sind Klassen die lediglich der Kapselung unveränderlicher Daten dienen. Daher bestehen Datenklassen häufig aus Boilerplate-Code. Unter Boilerplate-Code versteht man Anweisungblöcke, die an verschiedenen Stellen mehr oder weniger identisch verwendet
werden.

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

Seit Java 16 bieten Records die Möglichkeiten, Datenklassen einfach umzusetzen. Records sind spezielle Klassen, die anhand der festgelegten Parameter entsprechende Konstruktoren, Getter sowie Implementierungen für die Methoden `boolean equals(object: Object)`,
`int hashCode()` und `String toString()` erzeugen. Das Schlüsselwort für Records lautet `record`.

```java title="Student.java" showLineNumbers
public record Student(int id, String name) {
}
```

:::danger Hinweis

Da Records von der Klasse `Record` abgeleitet sind, können sie nicht von einer weiteren Klasse abgeleitet werden. Allerdings können Records, wie andere Klassen auch, beliebig viele [Schnittstellen](interfaces.md) implementieren.

:::
