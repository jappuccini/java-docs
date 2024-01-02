---
title: Steffen
description: ''
sidebar_position: 30
tags: []
---

## Java I

- [Einleitung 18.01.](/slides/steffen/intro)
- [Datentypen und Datenobjekte 18.01.](/slides/steffen/datatypes-and-dataobjects)
- [Methoden und Operatoren 19.01.](/slides/steffen/methods-and-operators)
- [Kontrollstrukturen und Arrays 01.02.](/slides/steffen/if-and-switch)
- [Math, Random und Scanner 02.02.](/slides/steffen/math-random-scanner)
- Kurztest 08.02. 
- [Klassen und Objekte 08.02.](/slides/steffen/classes-and-objects)
- [Konstruktor und static 09.02.](/slides/steffen/constructor-and-static)
- [Java API, Enum, Klassendiagramm, Aktivitätsdiagramm 15.02. & 16.02.](/slides/steffen/class-diagram-java-api-enum)
- [Vererbung 21.02. & 23.02.](/slides/steffen/Inheritance)
- [Polymorphie 21.02. & 23.02.](/slides/steffen/polymorphy)
- [Abstrakte und finale Klassen 21.02. & 23.02.](/slides/steffen/abstract-and-final)
- [Interfaces 29.02.](/slides/steffen/interfaces)
- [Exceptions 01.02.](/slides/steffen/exceptions)
- Klausurvorbereitung 07.03. & 08.03.
- Klausur 15.03.


## Java II

- [Wiederholung und Klausurbesprechung 10.08.23](/slides/steffen/recap)
- [Innere Klassen und Lambda Funktionen 17.08.23](/slides/steffen/lambda)
- [Records und Optionals 18.08.23](/slides/steffen/records-optionals)
- [Generics und Maps 24.08.23](/slides/steffen/generics-maps)
- [Stream API 31.08.23 & 01.09.23](/slides/steffen/stream-api)
- Probeklausur 07.09.23
- Probeklausur 14.09.23

## Demos

Die Endergebnisse der Demos findet ihr in folgendem Branch:

```bash
git switch demos/steffen
```

## Klausurvorbereitung Java II

[Cheatsheet Java II](/pdf/java-cheat-sheet.pdf)

1. Altklausuren 2022 Q3 - Klausur Java 2 Aufgabe 3

```java
public class PlanetQueries {

    public static ArrayList<Planet> planets = Planet.getPlantes();

    public static void a() {
        PlanetQueries.planets.stream()
          .filter(p -> p.moons() > 5)
          .forEach(p -> {
              System.out.println(p.name() + ": " + p.moons());
          });
    }

    public static OptionalDouble b() {
        return PlanetQueries.planets.stream()
          .filter(p -> p.type() == Type.GAS_PLANET)
          .mapToDouble(p -> p.diameter())
          .average();
    }

    public static List<Planet> c() {
        return PlanetQueries.planets.stream()
          .sorted((p1, p2) -> Double.compare(p2.mass(), p1.mass()))
          .toList();
    }

    public static boolean d() {
        return PlanetQueries.planets.stream()
          .allMatch(p -> p.moons() > 0);
    }

    public static void e() {
        Map<Type, List<Planet>> planetsMap = PlanetQueries.planets.stream()
          .collect(Collectors.groupingBy(p -> p.type()));
        planetsMap.entrySet()
          .stream()
          .forEach(entry -> {
            System.out.println(entry.getKey() + ":" + entry.getValue());
          });
    }
}
```

2. Altklausuren 2022 Q3 - Probeklausur Java 2 Klausur Aufgabe 3
3. Altklausuren 2023 Q1 - Wiederholklausur 2 Java 2 Klausur Aufgabe 3
4. Altklausuren 2023 Q1 - Wiederholklausur Java 2 Klausur Aufgabe 3

## Aufgabe Optionals

### Klassendiagramm

```mermaid
classDiagram
  class Car {
    +name String
    +brand String
    +addition Optional~String~
    +Car(name String, brand String)
    +Car(name String, brand String, addition String)
    +toString() String
  }
```

** Hinweise zu den Konstruktoren** <br/> Die Konstruktoren sollen alle Attribute
initialisieren.

** Hinweise zur Methode toString ** <br/> Die Methode toString soll die
Attribute brand, model und addition zurückgeben. Die Attribute sollen durch eine
Leertaste getrennt sein. Falls addition keinen Wert besitz, soll dieser
ignoriert werden.

Erstelle eine ausführbare Klasse in der ein Auto mit der Marke "Mercedes", dem
Modell "CLA45" und dem Zusatz "AMG" initialisiert wird. Gib das Auto in der
Konsole aus. Entferne den Zusatz von dem Auto und gebe das Auto erneut in der
Konsole aus.

```java
public class Car {
    public String name;
    public String brand;
    public Optional<String> addition;

    public Car(String name, String brand) {
        this.name = name;
        this.brand = brand;
        this.addition = Optional.empty();
    }

    public Car(String name, String brand, String addition) {
        this.name = name;
        this.brand = brand;
        this.addition = Optional.ofNullable(addition);
    }

    public String toString() {
        if (addition.isPresent()) {
            return brand + " " + name + addition.get();
        } else {
            return brand + " " + name;
        }
    }
}
```

```java
public class Main {
    public static void main(String[] args) {
        Car benz = new Car("CLA45", "Mercedes", "AMG");
        System.out.println(benz.toString());
        benz.addition = Optional.empty();
        System.out.println(benz.toString());
    }
}
```

## Aufgabe Lambdafunktionen

### Klassendiagramm

```mermaid
classDiagram
  Helper -- Animal
  Data -- Animal
  Task2 -- Animal
  Task2 -- Data
  Task2 -- Helper

  class Helper {
      +isNewBorn UNKNOWN$
      +toOutput UNKNOWN$
      +isHigherThan(size: int)$ Predicate~Student~
  }

  class Animal {
      <<record>>
      +firstName String
      +lastName String
      +size int
  }

  class Data {
      +getAnimals()$ Stream~Animal~
  }

  class Task2 {
      +main(args: String[])$ void
  }
```

** Hinweise zur Klasse Helper** <br/> Im Klassendiagramm sind keine
Rückgabetypen für die statischen Attribute angegeben. Gib für jedes Attribut den
geeigneten Typ an.

- Das Attribut **isNewBorn** soll eine Lambdafunktion enthalten die ermittelt,
  ob ein Tier jünger als 1 Jahr alt ist.
- Das Attribut **toOutput** soll eine Lambdafunktion enthalten, die ein Tier in
  folgenden String konvertiert: "firstName lastName ist size Zentimeter groß."
- Die Methode **isHigherThan** soll eine Lambdafunktion zurückgeben, die
  abhängig vom Parameter size überprüft, ob ein Tier größer als die angegebene
  Größe ist.

**Hinweise zur Klasse Data** <br/>

- Die Methode **getAnimals** soll einen Stream von einem einzelnen Tier mit den
  Werten deiner Wahl zurückgeben.

**Hinweise zur Klasse Task2** <br/> Verwende für die nachfolgende Abfolge die
Methoden der Klassen Data und Helper. Erzeuge einen Stream von Tieren und
filtere jene heraus, die Größer als 50 Zentimeter sind. Gib anschließend den
vollen Namen und die Größe der Tiere in der Konsole aus.

```java
public record Animal(String firstName, String lastName, int age, int size) {}
```

```java
public class Data {
    public static Stream<Animal> getAnimals() {
        return Stream.of(new Animal("Steffen", "Merk", 28, 170));
    }
}
```

```java
public class Helper {
    public static Predicate<Animal> isNewBorn = animal -> animal.age() < 1;
    public static Function<Animal, String> toOutput = animal -> animal.firstName()
            + " " + animal.lastName() + " ist " + animal.size() + " Zentimeter groß";

    public static Predicate<Animal> isHigherThan(int size) {
        return animal -> animal.size() > size;
    }
}
```

```java
public class Task2 {
    public static void main(String[] args) {
        Data.getAnimals()
                .filter(Helper.isHigherThan(50))
                .map(Helper.toOutput)
                .forEach(System.out::println);
    }
}
```

## Aufgabe Streams

### Klassendiagramm

```mermaid
classDiagram
  direction LR

  ConnectionType -- Phone
  Phone -- Data
  Phone -- Brand
  Phone -- PhoneStore

  class ConnectionType {
    <<enummeration>>
    TYPC
    THUNDERBOLT
    MICRO
    +isModern() boolean
  }

  class Phone {
    <<record>>
    +brand Brand
    +connectionType ConnectionType
    +cameras int
    +batterySize int
    +cpuPower int
    +price double
  }

  class Data {
    +gePhones()$ ArrayList~Phone~
  }

  class Brand {
    <<enummeration>>
    APPLE
    SAMSUNG
    HUAWEI
  }

  class PhoneStore {
    -phones ArrayList~Phone~
    +PhoneStore(phones: ArrayList~Phone~)
    +q1() Phone~Car~
    +q2() OptionalDouble
    +q3(maxPrice: double) List~Phone~
    +q4() Map~String&sbquo; Phone~
    +q5() Map~String&sbquo; List~Phone~~
  }
```

```java
public class PhoneStore {
  private ArrayList<Phone> phones;

  public PhoneStore(ArrayList<Phone> phones) {
    this.phones = phones;
  }

  public List<Phone> q1() {
    return phones.stream()
        .filter(p -> p.brand() == Brand.HUAWEI)
        .filter(p -> p.cameras() > 3)
        .sorted((p1, p2) -> Integer.compare(p2.cpuPower(), p1.cpuPower()))
        .limit(3)
        .sorted((p1, p2) -> Double.compare(p2.price(), p1.price()))
        .toList();
  }

  public OptionalDouble q2() {
    return phones.stream()
        .filter(p -> p.batterySize() > 2500)
        .mapToInt(p -> p.cameras())
        .average();
  }

  public List<Phone> q3(double maxPrice) {
    return phones.stream()
        .filter(p -> p.price() <= maxPrice)
        .filter(p -> p.connectionType().isModern())
        .filter(p -> p.cpuPower() < 2400)
        .sorted((p1, p2) -> Double.compare(p1.price(), p2.price()))
        .toList();
  }

  public Map<String, Phone> q4() {
    return phones.stream()
        .collect(Collectors.toMap(
            p -> p.brand().name() + p.connectionType().name(),
            p -> p));
  }

  public Map<ConnectionType, List<Phone>> q5() {
    return phones.stream()
        .collect(Collectors.groupingBy(p -> p.connectionType()));
  }

}
```

## Hinweise zur Klasse PhoneStore

- Der Konstruktor soll alle Attribute initialisieren.
- Die Methode **q1** soll die drei Leistungsstärksten (CPU Power) Smart Phones
  der Marke Huawei, absteigend nach dem Preis zurückgeben, welche mehr als 3
  Kameras haben.
- Die Methode **q2** soll die durchschnittliche Kameraanzahl aller Smart Phones
  zurückgeben, die einen Akku von 2500 oder mehr haben.
- Die Methode **q3** soll die Smart Phones aufsteigend nach Preis zurückgeben,
  die den **maxPrice** nicht überschreiten, einen modernen Anschlusstyp haben
  und weniger als 2400 Leistung (CPU Power) haben.
- Die Methode **q4** soll eine Map zurückgeben. Der Schlüssel soll aus dem
  Markennamen und dem Anschlusstyp zusammengesetzt werden. Als Wert soll das
  Auto zurückgegeben werden.
- Die Methode **q5** soll eine Map zurückgeben, welche alle Smart Phones nach
  Anschlusstyp gruppiert.

## Klausurvorbereitung Java I

### 08.03.2023

** Aufgaben in der Probeklausur 2202_Q4 **

- Aufgabe 1-a für die Methode a
- Aufgabe 1-b
- Aufgabe 2
- Aufgabe 5

### 14.03.2023

#### Aufgabe Array

```mermaid
classDiagram
  class ExamTask {
    +main(args: String[])$ void
    +split(numbers: int[], index: int)$ void
  }
```

** Hinweise zur Methode split ** <br/> Die Methode split soll ein Array vom Typ
int so verarbeiten, dass ein neues Array erstellt wird, was alle Elemente des
eingehenden Arrays bis zum angegebenen Index enthält. Das neu erstellte Array
soll anschließend zurückgegeben werden. Verwende keine ArrayList! Bsp.: Der
Parameter numbers enthält die Elemente 10, 8, 3, 22 & 1 der Parameter index ist
gleich 2. Zurückgegeben werden soll ein neues Array, das die Elemente 10, 8 & 3
enthält.

** Hinweise zur Methode main ** <br/> In der Methode main soll ein Arrays
erstellt werden, dass die Ganzzahlen 10, 8, 3, 22 & 1 enthält. Erstelle mithilfe
der Methode split ein neues Array, dass die ersten drei Elemente des ersten
Arrays enthalten soll. Gib mithilfe einer For-Schleife alle Elemente des neu
erstellten Arrays aus.

#### Aufgabe Exception

```mermaid
classDiagram
  direction LR

  Barrel -- OverflowException

  class Barrel {
    -capacity int
    -fluidLevel int
    +Barrel(capacity: int)
    +addFluid(value: int) void
  }

  class OverflowException {
    <<Exception>>
    -higherThanCapacity int &lcub; final &rcub;
    +OverflowException(higherThanCapacity: int)
    +getHigherThanCapacity() int
  }
```

** Hinweise zur Klasse OverflowException **

- Der Konstruktor soll alle Attribute initialisieren.
- Die Methode **getHigherThanCapacity** soll die zu viel hinzugefügte
  Flüssigkeit zurückgeben.

** Hinweise zur Klasse Barrel**

- Der Konstruktor soll alle Attribute initialisieren. Das Fass ist Anfangs immer
  leer.
- Die Methode **addFluid** soll die OverflowException auslösen, wenn die Summe
  der eingehenden Flüssigkeit und der im Fass befindenden Flüssigkeit die
  Kapazität überschreitet. Übergebe der Ausnahme den Wert, um wieviel die
  maximale Kapazität überschritten wurde. Wenn die maximale Kapazität nicht
  überschritten wird, soll die eingehende Flüssigkeit dem Fass hinzugefügt
  werden

** Zusatz in ausführbarer Klasse ** <br/> Erstelle ein neues Fass, das die
maximale Kapazität von 100 hat. Versuche anschließend das Fass auf 101 zu füllen
und fange die Ausnahme ab. Gib in der Konsole aus, um wieviel die maximale
Kapazität überschritten wurde.<br/> ** Beispiel Konsolenausgabe: ** <br/> "Es
wäre um 1 zu viel befüllt worden."

### 21.03.2023

#### Aufgabe abstrakte Klasse, Enum

```mermaid
classDiagram

  EnergySource --o Phone
  CablePhone --> Phone
  SmartPhone --> Phone

  class EnergySource {
    <<enumeration>>
    BATTERY('B')
    POWER_PLUG('P')
    -type char
    EnergySource(type: char)
    +getType() char
    +canBeUsedEverywhere() boolean
  }

  class Phone {
    <<abstract>>
    #energySource EnergySource &lcub; final &rcub;
    +Phone(energySource: EnergySource)
    +readyForUse()* boolean
  }

  class CablePhone {
    -pluggedIn boolean
    -poweredOn boolean
    +CablePhone(energySource: EnergySource, pluggedIn: boolean, poweredOn: boolean)
    +readyForUse(): boolean
  }

  class SmartPhone {
    -MINIMUM_POWER int$
    -power int
    +SmartPhone(energySource: EnergySource, power: int)
    +readyForUse(): boolean
  }

  class ExamTask04 {
    +main(args: String[])$ void
  }
```

** Hinweise zur Klasse EnergySource **

- Erstelle die zwei Konstanten Batterie und Steckdose für die Arten einer
  Energiequelle.
- Der Konstruktor soll alle Attribute initialisieren.
- Die Methode getType soll den Typ der Energiequelle zurückgeben.
- Die Methode canBeUsedEverywhere soll true zurückgeben, wenn die Energiequelle
  eine Batterie ist.

** Hinweise zur Klasse Phone **

- Der Konstruktor soll alle Attribute initialisieren.

** Hinweise zur Klasse CablePhone **

- Der Konstruktor soll alle Attribute initialisieren.
- Die Methode readyForUse soll true zurückgeben, wenn das Kabeltelefon
  eingesteckt und eingeschalten ist.

** Hinweise zur Klasse SmartPhone **

- Die minimale Energie soll 200 betragen.
- Der Konstruktor soll alle Attribute initialisieren.
- Die Methode readyForUse soll true zurückgeben, wenn die Energie des
  Smartphones die minimal erforderliche Energie überschreitet.

** Hinweise zur Klasse ExamTask04 ** <br/> Erzeuge ein Kabeltelefon mit Akku und
eines, dass an die Steckdose angeschlossen ist. Erzeuge ein leeres Smartphone
und eines das halb voll ist. Speichere alle erzeugten Fahrzeuge in einer
ArrayList. Ermittle mithilfe einer Schleife die Anzahl der betriebsbereiten
Telefone. Gib die Anzahl in der Konsole aus.

#### Aufgabe Comparator

```mermaid
classDiagram
  direction LR

  Comparator~Car~ <.. ConstructionYearComparator
  CarVendor --  ConstructionYearComparator
  CarVendor o--  Car

  class Comparator~Car~ {
    <<interface>>
    +compare(c1: Car, c2: Car) int
  }

  class ConstructionYearComparator {
    +compare(c1: Car, c2: Car) int
  }

  class CarVendor {
    -cars ArrayList~Car~
    +CarVendor()
    +sortByConstructionYear() void
    +print() void
  }

  class Car {
    <<interface>>
    +getConstructionYear() int
  }
```

** Hinweise zur Klasse CarVendor **

- Der Konstruktor soll alle Attribute initialisieren.
- Die Methode sortByConstructionYear soll die Autos absteigend nach Baujahr
  sortieren.
- Die Methode print soll das Baujahr aller Autos in der Konsole ausgeben.

** Hinweise zur Klasse ConstructionYearComparator **

- Der ConstructionYearComparator soll das Comparator Interface implementieren
  und Autos absteigend nach Baujahr sortieren.
