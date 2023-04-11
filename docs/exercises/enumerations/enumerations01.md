---
title: Enumerations01
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Erstelle die Aufzählung `Engine` mit Hilfe der abgebildeten Informationen
- Passe die Klasse `Vehicle` aus Übungsaufgabe [OO07](../oo/oo07.md) mit
  Hilfe der abgebildeten Informationen an
- Passe die ausführbare Klasse aus Übungsaufgabe [OO07](../oo/oo07.md) so an,
  dass sie fehlerfrei ausgeführt werden kann

## Aufzählungskonstanten der Klasse Engine

| Konstante | Werte     |
| --------- | --------- |
| _DIESEL_  | _Diesel_  |
| _PETROL_  | _Benzin_  |
| _GAS_     | _Autogas_ |
| _ELECTRO_ | _Elektro_ |

## Attribute der Klasse Engine

| Attribut      | Datentyp | Sichtbarkeit | Level            |
| ------------- | -------- | ------------ | ---------------- |
| _description_ | _String_ | _private_    | _nicht-statisch_ |

## Methoden der Klasse Engine

| Methode                       | Rückgabewert | Sichtbarkeit | Level            | Beschreibung                        |
| ----------------------------- | ------------ | ------------ | ---------------- | ----------------------------------- |
| _Engine(description: String)_ | _void_       | _private_    | _nicht-statisch_ | _Festlegen der Motorenbeschreibung_ |
| _getDescription()_            | _String_     | _public_     | _nicht-statisch_ | _Rückgabe der Motorenbeschreibung_  |

## Attribute der Klasse Vehicle

| Attribut         | Datentyp | Sichtbarkeit | Level            |
| ---------------- | -------- | ------------ | ---------------- |
| make             | String   | private      | nicht-statisch   |
| model            | String   | private      | nicht-statisch   |
| _engine_         | _Engine_ | _private_    | _nicht-statisch_ |
| speed            | double   | private      | nicht-statisch   |
| numberOfVehicles | int      | private      | statisch         |

## Methoden der Klasse Vehicle

| Methode                                                | Rückgabewert | Sichtbarkeit | Level            | Beschreibung                                            |
| ------------------------------------------------------ | ------------ | ------------ | ---------------- | ------------------------------------------------------- |
| _Vehicle(make: String, model: String, engine: Engine)_ | void         | public       | nicht-statisch   | _Festlegen des Herstellers, des Modells und des Motors_ |
| getMake()                                              | String       | public       | nicht-statisch   | Rückgabe des Herstellers                                |
| getModel()                                             | String       | public       | nicht-statisch   | Rückgabe des Modells                                    |
| _getEngine()_                                          | _Engine_     | _public_     | _nicht-statisch_ | _Rückgabe des Motors_                                   |
| getSpeed()                                             | double       | public       | nicht-statisch   | Rückgabe der Geschwindigkeit                            |
| accelerate(value: int)                                 | void         | public       | nicht-statisch   | Erhöhung der Geschwindigkeit um den eingehenden Wert    |
| brake(value: int)                                      | void         | public       | nicht-statisch   | Reduzierung der Geschwindigkeit um den eingehenden Wert |
| print()                                                | void         | public       | nicht-statisch   | _Ausgabe: Hersteller Modell (Motorenbeschreibung)_      |
| getNumberOfVehicles()                                  | int          | public       | statisch         | Rückgabe der Anzahl Fahrzeuge                           |

<Exercise pullRequest="34" branchSuffix="enums/01" />
