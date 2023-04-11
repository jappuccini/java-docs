---
title: Cases05
description: ''
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?

## Coding

```java
int a = 5;
int b = 5;
boolean c = true;
boolean d = true;
boolean e;
int f = 5;
int g = 3;
int h = 2;
int i = 4;
int j = 0;

e = c && (a > 2 ? (b == (a = a * 2)) : d);
j += ((h < ((f - g == 3) ? 3 : 2)) && (i < 5)) ? 1 : 2;

System.out.println("a: " + a);
System.out.println("b: " + b);
System.out.println("c: " + c);
System.out.println("d: " + d);
System.out.println("e: " + e);
System.out.println("f: " + f);
System.out.println("g: " + g);
System.out.println("h: " + h);
System.out.println("i: " + i);
System.out.println("j: " + j);
```

## Lösung

<Tabs>
  <TabItem value="a" label="a" default>

```console
a: 10
```

  </TabItem>
  <TabItem value="b" label="b">

```console
b: 5
```

  </TabItem>
  <TabItem value="c" label="c">

```console
c: true
```

  </TabItem>
  <TabItem value="d" label="d">

```console
d: true
```

  </TabItem>
  <TabItem value="e" label="e">

```console
e: false
```

  </TabItem>
  <TabItem value="f" label="f">

```console
f: 5
```

  </TabItem>
  <TabItem value="g" label="g">

```console
g: 3
```

  </TabItem>
  <TabItem value="h" label="h">

```console
h: 2
```

  </TabItem>
  <TabItem value="i" label="i">

```console
i: 4
```

  </TabItem>
  <TabItem value="j" label="j">

```console
j: 2
```

  </TabItem>
</Tabs>
