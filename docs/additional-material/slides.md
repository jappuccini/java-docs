---
title: Slides
description: ''
sidebar_position: 40
tags: []
---

## Steffen
- [Einleitung](/slides/steffen/intro)
- [Datentypen und Datenobjekte](/slides/steffen/datatypes-and-dataobjects)
- [Methoden und Operatoren](/slides/steffen/methods-and-operators)
- [Kontrollstrukturen und Arrays](/slides/steffen/if-and-switch)
- [Math, Random und Scanner](/slides/steffen/math-random-scanner)
- [Klassen und Objekte](/slides/steffen/classes-and-objects)
- [Konstruktor und static](/slides/steffen/constructor-and-static)
- [Java API, Enum, Klassendiagramm, Aktivitätsdiagramm](/slides/steffen/class-diagram-java-api-enum)
- [Vererbung](/slides/steffen/Inheritance)
- [Polymorphie](/slides/steffen/polymorphy)
- [Abstrakte und finale Klassen](/slides/steffen/abstract-and-final)
- [Interfaces](/slides/steffen/interfaces)
- [Exceptions](/slides/steffen/exceptions)

## Demos
Die Endergebnisse der Demos findet ihr in folgendem Branch:

```bash
git switch demos/steffen
```

## Klausurvorbereitung

### 08.03.2023
** Aufgaben in der Probeklausur 2202_Q4 **
* Aufgabe 1-a für die Methode a
* Aufgabe 1-b
* Aufgabe 2
* Aufgabe 5


### 14.03.2023

#### Aufgabe Array
<img style={{height: '200px'}} src='/java-docs/img/array_task.png'/>
<br/>

** Hinweise zur Methode split ** <br/>
Die Methode split soll ein Array vom Typ int so verarbeiten, dass ein neues Array erstellt wird, was alle Elemente des 
eingehenden Arrays bis zum angegebenen Index enthält. Das neu erstellte Array soll anschließend zurückgegeben werden. 	
Verwende keine ArrayList!
Bsp.: Der Parameter numbers enthält die Elemente 10, 8, 3, 22 & 1 der Parameter index ist gleich 2. Zurückgegeben 
werden soll ein neues Array, das die Elemente 10, 8 & 3 enthält. 

** Hinweise zur Methode main ** <br/>
In der Methode main soll ein Arrays erstellt werden, dass die Ganzzahlen 10, 8, 3, 22 & 1 enthält.
Erstelle mithilfe der Methode split ein neues Array, dass die ersten drei Elemente des ersten Arrays enthalten soll.
Gib mithilfe einer For-Schleife alle Elemente des neu erstellten Arrays aus. 

#### Aufgabe Exception
<img style={{height: '200px'}} src='/java-docs/img/exception_task.png'/>
<br/>


** Hinweise zur Klasse OverflowException **
* Der Konstruktor soll alle Attribute initialisieren. 
* Die Methode **getHigherThanCapacity** soll die zu viel hinzugefügte Flüssigkeit zurückgeben. 

** Hinweise zur Klasse Barrel**
* Der Konstruktor soll alle Attribute initialisieren. Das Fass ist Anfangs immer leer.
* Die Methode **addFluid** soll die OverflowException	auslösen, wenn die Summe der eingehenden 
Flüssigkeit und der im Fass befindenden Flüssigkeit die Kapazität überschreitet. Übergebe der Ausnahme 
den Wert, um wieviel die maximale Kapazität überschritten wurde. Wenn die maximale Kapazität nicht 
überschritten wird, soll die eingehende Flüssigkeit dem Fass hinzugefügt werden

** Zusatz in ausführbarer Klasse ** <br/>
Erstelle ein neues Fass, das die maximale Kapazität von 100 hat. Versuche anschließend das Fass auf 101 zu 
füllen und fange die Ausnahme ab. Gib in der Konsole aus, um wieviel die maximale Kapazität überschritten 
wurde.<br/>
** Beispiel Konsolenausgabe: ** <br/>
"Es wäre um 1 zu viel befüllt worden." 

### 21.03.2023
#### Aufgabe abstrakte Klasse, Enum
<img style={{height: '200px'}} src='/java-docs/img/class_task.png'/>
<br/>

** Hinweise zur Klasse EnergySource **
* Erstelle die zwei Konstanten Batterie und Steckdose für die Arten einer 
Energiequelle.
*	Der Konstruktor soll alle Attribute initialisieren.
*	Die Methode getType soll den Typ der Energiequelle zurückgeben.
*	Die Methode canBeUsedEverywhere soll true zurückgeben, wenn die Energiequelle
eine Batterie ist.

** Hinweise zur Klasse Phone **
*	Der Konstruktor soll alle Attribute initialisieren.

** Hinweise zur Klasse CablePhone **
*	Der Konstruktor soll alle Attribute initialisieren.
*	Die Methode readyForUse soll true zurückgeben, wenn das Kabeltelefon 
eingesteckt und eingeschalten ist.

** Hinweise zur Klasse SmartPhone **
*	Der Konstruktor soll alle Attribute initialisieren.
*	Die Methode readyForUse soll true zurückgeben, wenn die Energie des 
Smartphones die minimal erforderliche Energie überschreitet.

** Hinweise zur Klasse ExamTask04 ** <br/>
Erzeuge ein Kabeltelefon mit Akku und eines, dass an die Steckdose 
angeschlossen ist. Erzeuge ein leeres Smartphone und eines das halb voll ist.
Speichere alle erzeugten Fahrzeuge in einer ArrayList. Ermittle mithilfe einer 
Schleife die Anzahl der betriebsbereiten Telefone. Gib die Anzahl in der 
Konsole aus.

#### Aufgabe Comparator
<img style={{height: '200px'}} src='/java-docs/img/comparator_task.png'/>
<br/>

** Hinweise zur Klasse CarVendor **
*	Der Konstruktor soll alle Attribute initialisieren.
*	Die Methode sortByConstructionYear soll die Autos absteigend nach Baujahr 
sortieren.
*	Die Methode print soll das Baujahr aller Autos in der Konsole ausgeben.

** Hinweise zur Klasse ConstructionYearComparator **
* Der ConstructionYearComparator soll das Comparator Interface implementieren 
und Autos absteigend nach Baujahr sortieren.

