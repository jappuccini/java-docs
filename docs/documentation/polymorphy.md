---
title: (Dynamische) Polymorphie
description: ''
sidebar_position: 180
tags: [polymorphy]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Unter (dynamischer) Polymorphie (griechisch für Vielgestaltigkeit) versteht man, dass eine Referenzvariable zur Laufzeit durch Typumwandlung Referenzen auf Objekte unterschiedlicher Klassen besitzen kann und dass dadurch unterschiedliche Methodenimplementierungen aufgerufen
werden können. Man spricht in diesem Zusammenhang auch vom _statischen Datentyp einer Referenzvariablen_ (der zur Designzeit festgelegt wird) und vom _dynamischen Datentyp einer Referenzvariablen_ (der zur Laufzeit zugewiesen wird). Der statische Typ legt
fest, welche Methoden aufgerufen werden können, der dynamische, welche Methodenimplementierung aufgerufen wird. Die Typumwandlung von der abgeleiteten Unterklasse zur Oberklasse bezeichnet man als _Upcast_, die Rückumwandlung als _Downcast_.

## Upcast

Beim Upcast wird die Objektreferenz der Unterklasse in eine Objektreferenz der Oberklasse umgewandelt.

<Tabs>
  <TabItem value="superClass" label="Oberklasse" default>

```java title="SuperClass.java" showLineNumbers
public class SuperClass {
}
```

  </TabItem>
  <TabItem value="subClass" label="Unterklasse" default>

```java title="SubClass.java" showLineNumbers
public class SubClass extends SuperClass {
}
```

  </TabItem>
  <TabItem value="mainClass" label="Startklasse" default>

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    SuperClass superClass;
    SubClass subClass = new SubClass();
    superClass = subClass; // Upcast
  }

}
```

  </TabItem>
</Tabs>

## Downcast

Beim Downcast wird die Objektreferenz der Oberklasse in eine Objektreferenz der Unterklasse umgewandelt. Im Gegensatz zum Upcast muss bei einem Downcast der Typ explizit angegeben werden. Der Downcast einer nicht zuweisungskompatiblen Referenz führt zu einer
`ClassCastException`.

<Tabs>
  <TabItem value="superClass" label="Oberklasse" default>

```java title="SuperClass.java" showLineNumbers
public class SuperClass {
}
```

  </TabItem>
  <TabItem value="subClass" label="Unterklasse" default>

```java title="SubClass.java" showLineNumbers
public class SubClass extends SuperClass {
}
```

  </TabItem>
  <TabItem value="mainClass" label="Startklasse" default>

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    SuperClass superClass;
    SubClass subClass = new SubClass();
    superClass = subClass; // Upcast
    subClass = (SubClass) superClass; // Downcast
  }

}
```

  </TabItem>
</Tabs>

## Der instanceof-Operator

Mit dem Operator `instanceof` kann zur Laufzeit geprüft werden, ob eine Objektreferenz zuweisungskompatibel zu einer Klasse ist. Eine Objektreferenz ist dann zuweisungskompatibel zu einer Klasse, wenn die Klasse des referenzierten Objektes in einer
Vererbungsbeziehung zur Klasse steht.

<Tabs>
  <TabItem value="superClass" label="Oberklasse" default>

```java title="SuperClass.java" showLineNumbers
public class SuperClass {
}
```

  </TabItem>
  <TabItem value="subClass" label="Unterklasse" default>

```java title="SubClass.java" showLineNumbers
public class SubClass extends SuperClass {
}
```

  </TabItem>
  <TabItem value="mainClass" label="Startklasse" default>

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    SuperClass superClass;
    SubClass subClass = new SubClass();
    superClass = subClass; // Upcast
    if (superClass instanceof SubClass) {
      subClass = (SubClass) superClass; // Downcast
    }
  }

}
```

  </TabItem>
</Tabs>

Seit Java 16 ermöglicht der Mustervergleich bei `instanceof` das Vermeiden notwendiger Typumwandlungen und sorgt gleichzeitig für eine sicherere Programmierung.

<Tabs>
  <TabItem value="superClass" label="Oberklasse" default>

```java title="SuperClass.java" showLineNumbers
public class SuperClass {
}
```

  </TabItem>
  <TabItem value="subClass" label="Unterklasse" default>

```java title="SubClass.java" showLineNumbers
public class SubClass extends SuperClass {
}
```

  </TabItem>
  <TabItem value="mainClass" label="Startklasse" default>

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    SuperClass superClass;
    SubClass subClass = new SubClass();
    superClass = subClass; // Upcast
    if (superClass instanceof SubClass s) { // Downcast
    }
  }

}
```

  </TabItem>
</Tabs>
