# Einstieg Objektorientierung

## Was sind Beispiele fuer Objekte
- Beispiele Sammeln z.B. Studenten, Auto

### Studenten
  - Attribute: height, eyeColor, firstName, LastName, age
  - Methoden: trinken, essen, laufen, schlafen, getFullName


### Autos
  - Attribute: ps, farbe, maximalgeschwindigkeit, marke
  - Methoden: anmachen, beschleunigen, bremsen


  - Demo die Klassen Student und Car


## Was sind Klassen
  - Beschreiben welche Attribute und Methoden JEDES Objekt hat. 
  - Attribute und Methoden sammeln fuer Studenten
  - Attribute und Methoden sammeln fuer Autos


## Was sind Objekte?
  - Objekte sind spezifische Auspraegungen von Klassen
  - Mit spezifischen Auspraegungen sind Attribute gemeint
  - Jedes Objekt hat zwar die gleichen Methodennamen, aber trotzdem ein anderes Verhalten

## Demo Objekte
  - Objekt erzeugen, attribut lesen, attribut schreiben
  - Demo Steffen, Marianna und Mirco
  - Demo Audi A3, Fiat 500, BMW 335i
  - Demo unterschied Referenzvariable und variable
  - Demo what is null?


## Was sind modifier?
  - Es gibt public, private, protected(spaeter bei vererbung), package (vllt)
  - Tabelle Daniel
  - Warum public?
    - zugriff von aussen um functionalitaet zu verwenden
  - Warum private?
    - Kommunikation an Verwender was ausfuehrbar ist und was nicht.
    - Organisation von Code
    - Hide implementation details, protect against modification (Beispiel Auto)
    - private by default
  - Warum package? NKR
    - Brain Dead in Non Framework Entwicklung
  - Warum protected? (Erst mit Vererbung Sinnvoll)
    - Klassen, welche Oberklassen erweitern koennen die Methoden von der Oberklasse verwenden.


## Demo make all attributes of car/student private
  - setter methode
  - getter methode
  - wtf is 'this'?
  - uberladen von methoden.

Aufgabe 01;


## Was ist ein Constructor ()
  - initialisierung des objects;
  - wann wir der constructor ausgefuerht? --> new
  - wie kann ich den constructor erstellen?
  - wie kann ich unterschiedliche constructoren erstellen?
Demo new Human(fristName, lastName) ohne Setter

Aufgabe 02
bis
Aufgabe 06

## Was ist das schluesselwort static
  - static attribute --> nur einmal pro klasse
  - static methode --> nur einmal pro Klasse
  - zugriff auf attribute nur mit KlassName.Attribut
  - in static method kann nur auf statische attribute der Klasse zugegriffen werden.
  - alles verstaendlich in public static void main
  - Objektorientierung kompliziert bei nicht realen Objekten, z.B. Main, db connection

Aufgabe 07


# Java API
Wrapper Klassen Integer, Boolean etc. /Methoden NKR
LocalDateTime /NKR
File /NKR

# Enumerations
Was sind Enumerations?
Aufzaehlungen fester Laenge.
Beispiel Gender
 - Demo selber enum erstellen und dannach enum Feature von Java verwenden. 
 - Enum beispiel mit getFullName() Zusatz BEFORE AFTER BETWEEN
 - Auch dumme Enums moeglich

#  Klassendiagramm
## Darstellung von Klassen
## Darstellung von Enumerations

# Activitaetsdiagramm
## Darstellung von Ablaeufen
NKR


# Vererbung
 - extends
 - protected
 - super
 - override


# Polymorphie
 - upcast
 - downcast

# Abstrakte Klassen und Methoden
Was sind Abstrakte Klassen?
- keine Instanz davon
- muss abgeleited werden um instanziiert zu werden
- kann vorgefertigte Methoden und attribute enthalten
Warum? Teilen von Funktionalitaet macht aber kein Sinn eine Instanz davon zu haben.
Beispiel Animal

Darstellung von Abstrakten Klassen

Was sind Abstrakte Methoden?
- definiert methodenname, parameter und rueckgabetyp
- muss in abgeleiteter klasse implementiert werden
Warum? erzwingen von zu implementierender Funktionalitaet.
Beispiel Animal -> Lateininscher Name

# Finale Klassen und Methoden
Was sind Finale Klassen?
 - Klassen die nicht abgeleited werden koennen.
Warum?
 - neue Funktionalitaet in der Klasse nicht modifizierbar zu machen

Was sind finale methoden?
 - Methoden die nicht ueberschrieben werden koennen
Warum erzwingen, dass das Verhalten der Methode nicht modifiziert werden kann.

-------------------------------------------------------------

# Interfaces

Was sind Interfaces?
 reales Beispiel:
  USB Typ C Interface
  mehrere Klassen implementieren dieses Interface

  SamsungGalaxyS22
  HuaweiP20
  LadesteckerAnker
  LadesteckerNokia

Reales Beispiel Warenkorb
 - Will den Preis per Unit
 - Anzahl

Warum abstract class nicht geeignet?


# Komparatoren


# Exceptions

## Scope of variables
## Loops03 bug?

# Contributior
Goldfisch666
Nqin1
Goldfisch Java API03
