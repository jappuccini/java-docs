---
title: DataObjects02
description: ''
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?

## Coding

```java
int a = 101;
int b = 0b101;
int c = 0x101;
int d = 0xAFFE;
int e = 128;
byte f = (byte) e;
double g = 9.87654321;
int h = (int) g;

System.out.println("a: " + a);
System.out.println("b: " + b);
System.out.println("c: " + c);
System.out.println("d: " + d);
System.out.println("f: " + f);
System.out.println("h: " + h);
```

<Tabs>
  <TabItem value="a" label="a" default>

```console
a: 101
```

  </TabItem>
  <TabItem value="b" label="0b101">

| 4   | 2   | 1   |       |
| --- | --- | --- | ----- |
| 1   | 0   | 1   | **5** |

```console
b: 5
```

  </TabItem>
  <TabItem value="c" label="0x101">

| 4096 | 256 | 16  |  1  |         |
| :--: | :-: | :-: | :-: | ------- |
|      |  1  |  0  |  1  | **257** |

```console
c: 257
```

  </TabItem>
  <TabItem value="d" label="0xAFFE">

| 4096 | 256 | 16  |  1  |            |
| :--: | :-: | :-: | :-: | ---------- |
|  10  | 15  | 15  | 14  | **45.054** |

```console
d: 45054
```

  </TabItem>
  <TabItem value="f" label="f">

|     | 128 | 64  | 32  | 16  |  8  |  4  |  2  |  1  |      |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :--: |
| 128 |  1  |  0  |  0  |  0  |  0  |  0  |  0  |  0  |      |
|  ~  |  0  |  1  |  1  |  1  |  1  |  1  |  1  |  1  |      |
|  +  |  1  |  1  |  1  |  1  |  1  |  1  |  1  |  1  |      |
|     |  1  |  0  |  0  |  0  |  0  |  0  |  0  |  0  | -128 |

```console
f: -128
```

  </TabItem>
  <TabItem value="h" label="h">

```console
h: 9
```

  </TabItem>
</Tabs>
