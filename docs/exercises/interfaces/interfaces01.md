---
title: Interfaces01
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Passe die Klasse `Rental` aus Übungsaufgabe
  [Abstract and Final 01](../abstract-and-final/abstract-and-final01.md) anhand des abgebildeten
  Klassendiagramms an und erstelle die Klasse `TravelAgency` sowie die
  Schnittstelle `Partner`
- Passe die ausführbare Klasse aus Übungsaufgabe
  [Abstract and Final 01](../abstract-and-final/abstract-and-final01.md)) so an, dass ein Reisebüro
  erzeugt wird, dass diesem die Autovermietung hinzugefügt wird und dass alle
  Attribute des Reisebüros ausgegeben werden

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209157029-141cc0aa-a425-4e36-a79b-34f6188fa223.png)

## Hinweise zur Klasse TravelAgency
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `void addPartner(partner: Partner)` soll dem Reisebüro einen Partner
  hinzufügen
- Die Methode `void print()` soll alle Attribute auf der Konsole ausgeben

## Konsolenausgabe

```console
Reisebüro Schmidt
Unsere Partner:
Fahrzeugvermietung Müller
Unsere Fahrzeuge:
Porsche 911 (Elektro, 2 Sitzplätze)
MAN TGX (Diesel, 20t)
Opel Zafira Life (Diesel, 7 Sitzplätze)
```

<Exercise pullRequest="46" branchSuffix="interfaces/01" />
