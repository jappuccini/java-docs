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
  <TabItem value="abstractclasses" label="abstrakte Klassen" default>

  Abstrakte Klassen können nicht instanziiert werden.

  </TabItem>
  <TabItem value="abstractmethods" label="abstrakte Methoden">

  Abstrakte Methoden werden in abstrakten Klassen definiert, besitzen dort keinen Methodenrumpf und müssen in den abgeleiteten Klassen der abstrakten Klasse überschrieben werden.

  </TabItem>
  <TabItem value="finalclasses" label="finale Klassen">

  Finale Klassen können nicht abgeleitet werden.
  
  </TabItem>
  </TabItem>
  <TabItem value="finalmethods" label="finale Methoden">

  Finale Methoden können nicht überschrieben werden.
  
  </TabItem>
</Tabs>
