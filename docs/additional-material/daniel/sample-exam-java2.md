---
title: Musterklausur Java 2
description: ''
sidebar_position: 20
tags: []
---

## Hinweise zur Klausur

- Die in dieser Klausur verwendeten Personenbezeichnungen beziehen sich – sofern
  nicht anders kenntlich gemacht – auf alle Geschlechter
- Pakete und Klassenimporte müssen nicht angegeben werden
- Es kann davon ausgegangen werden, dass sämtliche Klassen entsprechende
  Implementierungen der Object-Methoden besitzen
- Der Stereotyp `enumeration` impliziert, dass die Aufzählung einen passenden
  Konstruktor sowie gegebenenfalls passende Getter für alle Attribute besitzt
- Der Stereotyp `record` impliziert, dass die Datenklasse einen passenden
  Konstruktor, Getter zu allen Attributen sowie entsprechende Implementierungen
  der Object-Methoden besitzt
- So nicht anders angegeben sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie in der Vorlesung gezeigt implementiert werden
- Annotationen der Lombok-Bibliothek dürfen verwendet werden
- Die Konsolenausgaben-Methoden der Klasse `PrintStream` dürfen sinnvoll gekürzt
  geschrieben werden (zum Beispiel _syso("Hello World")_ statt
  _System.out.println("Hello World")_)
- Methoden- und Attributsbezeichner dürfen sinnvoll gekürzt geschrieben werden
  (zum Beispiel _getLWMCP()_ statt _getLectureWithMostCreditPoints()_)

## Aufgabe 1 (16 Punkte)

Erstelle die Klasse `SuperLeague<T extends SuperHuman>` anhand des abgebildeten
Klassendiagrams.

### Klassendiagramm

```mermaid
classDiagram
    SuperHuman <|-- Villain : extends
    SuperHuman <|-- Hero : extends
    Universe --o SuperHuman
    SuperLeague~T extends SuperHuman~ o-- Universe

    class SuperHuman {
        <<abstract>>
        -name: String &#123final&#125
        -universe: Universe &#123final&#125
        -power: int &#123final&#125
        +SuperHuman(name: String, universe: Universe, power: int)
        +name() String
        +universe() Universe
        +power() int
    }

    class Villain {
        +Villain(name: String, universe: Universe, power: int)
    }

    class Hero {
        +Hero(name: String, universe: Universe, power: int)
    }

    class Universe {
        <<enumeration>>
        MARVEL
        DC
    }

    class SuperLeague~T extends SuperHuman~ {
        <<record>>
        name: String
        universe: Universe
        members: Map~T, Boolean~
        +addSuperHuman(t: T) void
        +getMostPowerfulSuperHuman() Optional~T~
        +getAllAvailableSuperHumans() List~T~
        +sendSuperHumanOnMission(t: T) void
    }
```

### Hinweise zur Klasse _SuperLeague_

- Die Schlüssel-Werte-Paare des Assoziativspeichers beinhalten als Schlüssel die
  Übermenschen der Liga sowie als Wert deren Verfügbarkeit
- Die Methode `Optional<T> getMostPowerfulSuperHuman()` soll den stärksten
  Übermenschen der Liga zurückgeben
- Die Methode `void addSuperHuman(t: T)` soll der Liga den eingehenden
  Übermenschen als verfügbares Mitglied hinzufügen. Für den Fall, dass das
  Universum des eingehenden Übermenschen nicht dem Universum der Liga
  entspricht, soll die Ausnahme `WrongUniverseException` ausgelöst werden
- Die Methode `List<T> getAllAvailableSuperHumans()` soll alle verfügbaren
  Übermenschen der Liga zurückgeben
- Die Methode `void sendSuperHumanOnMission(t: T)` soll die Verfügbarkeit des
  eingehenden Übermenschen auf _nicht verfügbar_ setzen

### Musterlösung

```java title="SuperLeage.java" showLineNumbers
public record SuperLeague<T extends SuperHuman>
  (String name, Universe universe, Map<T, Boolean> members) { // 1

  public Optional<T> getMostPowerfulSuperHuman() { // 0,5
    T mostPowerfulSuperHuman = null; // 0,5
    int power = 0; // 0,5
    for (T t : members.keySet()) { // 1
      if (t.power() > power) { // 0,5
        power = t.power(); // 0,5
        mostPowerfulSuperHuman = t; // 0,5
      }
    }
    return Optional.ofNullable(mostPowerfulSuperHuman); // 1
  }

  public void addSuperHuman(T t) throws WrongUniverseException { // 1
    if (!t.universe().equals(universe)) { // 1
      throw new WrongUniverseException(); // 1
    }

    members.put(t, true); // 1
  }

  public List<T> getAllAvailableSuperHumans() { // 0,5
    List<T> allAvailableSuperHumans = new ArrayList<>(); // 0,5
    for (Entry<T, Boolean> entry : members.entrySet()) { // 1
      if (entry.getValue().equals(true)) { // 1
        allAvailableSuperHumans.add(entry.getKey()); // 1
      }
    }
    return allAvailableSuperHumans; // 0,5
  }

  public void sendSuperHumanOnMission(T t) { // 0,5
    members.put(t, false); // 1
  }

}
```

## Aufgabe 2 (14 Punkte)

Erstelle die JUnit-5-Testklasse `SuperLeagueTest` anhand des abgebildeten
Klassendiagramms.

### Klassendiagramm

```mermaid
classDiagram
    SuperLeagueTest o-- Hero
    SuperLeagueTest o-- SuperLeague
    SuperHuman <|-- Villain : extends
    SuperHuman <|-- Hero : extends
    Universe --o SuperHuman
    SuperLeague~T extends SuperHuman~ o-- Universe

    class SuperHuman {
        <<abstract>>
        -name: String &#123final&#125
        -universe: Universe &#123final&#125
        -power: int &#123final&#125
        +SuperHuman(name: String, universe: Universe, power: int)
        +name() String
        +universe() Universe
        +power() int
    }

    class Villain {
        +Villain(name: String, universe: Universe, power: int)
    }

    class Hero {
        +Hero(name: String, universe: Universe, power: int)
    }

    class Universe {
        <<enumeration>>
        MARVEL
        DC
    }

    class SuperLeague~T extends SuperHuman~ {
        <<record>>
        name: String
        universe: Universe
        members: Map~T, Boolean~
        +addSuperHuman(t: T) void
        +getMostPowerfulSuperHuman() Optional~T~
        +getAllAvailableSuperHumans() List~T~
        +sendSuperHumanOnMission(t: T) void
    }

    class SuperLeagueTest {
        <<test>>
        -avengers: SuperLeague~Hero~
        -superman: Hero
        -ironman: Hero
        -spiderman: Hero
        +setUp() void
        +testAddSuperHuman() void
        +testGetAllAvailableSuperHumans() void
        +testGetMostPowerfulSuperHuman() void
    }
```

### Hinweise zur Klasse _SuperLeagueTest_

- Die Lebenszyklus-Methode `void setUp()` soll den Superhelden _Superman_ (Name:
  Superman, Universum: DC, Stärke: 10), den Superhelden _Iron Man_ (Name: Iron
  Man, Universum: MARVEL, Stärke: 7), den Superhelden _Spider-Man_ (Name:
  Spider-Man, Universum: MARVEL, Stärke: 8) sowie die Superheldenliga _Avengers_
  (Name: Avengers, Universum: MARVEL) erstellen und den entsprechenden
  Attributen zuweisen, die Superhelden _Iron Man_ und _Spider-Man_ der
  Superheldenliga _Avengers_ als verfügbare Superhelden hinzugefügen und den
  Superheld _Spider-Man_ auf eine Mission schicken
- Die Testmethode `void testAddSuperHuman()` soll prüfen, ob beim Aufruf der
  Methode `void addSuperHuman(t: T)` mit dem Superhelden _Superman_ die Ausnahme
  `WrongUniverseException` ausgelöst wird
- Die Testmethode `void testGetAllAvailableSuperHumans()` soll prüfen, ob beim
  Aufruf der Methode `List<T> getAllAvailableSuperHumans()` eine Liste der Größe
  1 zurückgegeben wird
- Die Testmethode `void testGetMostPowerfulSuperHuman()` soll prüfen, ob beim
  Aufruf der Methode `Optional<T> getMostPowerfulSuperHuman()` der Superheld
  _Spider-Man_ als Optional zurückgegeben wird

### Musterlösung

```java title="SuperLeagueTest.java" showLineNumbers
public class SuperLeagueTest { // 0,5

  private SuperLeague<Hero> avengers; // 0,25
  private Hero superman; // 0,25
  private Hero ironman; // 0,25
  private Hero spiderman; // 0,25

  @BeforeEach // 0,25
  void setUp() throws WrongUniverseException { // 0,75
    superman = new Hero("Superman", Universe.DC, 10); // 1
    ironman = new Hero("Iron Man", Universe.MARVEL, 7); // 1
    spiderman = new Hero("Spider-Man", Universe.MARVEL, 8); // 1
    avengers = new SuperLeague<>("Avengers", Universe.MARVEL, new HashMap<>()); // 1
    avengers.addSuperHuman(ironman); // 1
    avengers.addSuperHuman(spiderman); // 1
    avengers.sendSuperHumanOnMission(spiderman); // 0,5
  }

  @Test // 0,25
  void testAddSuperHuman() { // 0,25
    assertThrows(WrongUniverseException.class, () -> avengers.addSuperHuman(superman)); // 1
  }

  @Test // 0,25
  void testGetAllAvailableSuperHumans() { // 0,25
    assertEquals(1, avengers.getAllAvailableSuperHumans().size()); // 1
  }

  @Test // 0,25
  void testGetMostPowerfulSuperHuman() { // 0,25
    assertEquals(spiderman, avengers.getMostPowerfulSuperHuman().get()); // 1,5
  }

}
```

## Aufgabe 3 (22 Punkte)

Erstelle die Klasse `SingleQueries` anhand des abgebildeten Klassendiagramms.

### Klassendiagramm

```mermaid
classDiagram
    Single o-- Artist
    Artist o-- Country
    SingleQueries o-- Single

    class Single {
        <<record>>
        name: String
        artist: Artist
        salesInMillions: int
        publishingYear: String
    }

    class Artist {
        <<record>>
        name: String
        country: Country
        birthdate: LocalDate
        isAlive: boolean
    }

    class Country {
        <<enumeration>>
        BRB
        CHN
        FRA
        GBR
        ITA
        PRI
        USA
    }

    class SingleQueries {
        <<record>>
        singles: List~Single~
        +printAllSinglesWithMoreThan25MillionSalesPerCountry() void
        +printAverageBirthYearOfAllDeceasedArtists() void
        +isAnySingleFromChinaWithMoreThan10MillionSales() boolean
        +getTop3SinglesOfThisCenturyBySalesInMillions() List~String~
        +getAllSinglesFromEdSheeran() List~Single~
    }
```

### Hinweise zur Klasse _SingleQueries_

- Die Methode `void printAllSinglesWithMoreThan25MillionSalesPerCountry()` soll
  alle Singles, die sich mehr als 25 Millionen mal verkauft haben, gruppiert
  nach dem Land in der Form _Artist.country: [Single, Single,...]_ ausgeben
- Die Methode `void printAverageBirthYearOfAllDeceasedArtists()` soll das
  durchschnittliche Geburtsjahr aller verstorbenen Künstler bzw. aller
  verstorbenen Künstlerinnen ausgeben. Für den Fall, dass es keinen verstorbenen
  Künstler bzw. keine verstorbene Künstlerin gibt, soll der Wert -1 ausgegeben
  werden
- Die Methode `boolean isAnySingleFromChinaWithMoreThan10MillionSales()` soll
  zurückgeben, ob es eine Single eines Künstlers bzw. einer Künstlerin aus China
  gibt, welches sich mehr als 10 Millionen Mal verkauft hat
- Die Methode `List<String> getTop3SinglesOfThisCenturyBySalesInMillions()` soll
  die 3 am häufigsten verkauften Singles des jetzigen Jahrtausends sortiert nach
  der Anzahl Verkäufe in Millionen in der Form _Single.name: Artist.name,
  Single.salesInMillions Millionen_ zurückgeben
- Die Methode `List<Single> getAllSinglesFromEdSheeran()` soll alle Singles des
  Künstlers Ed Sheeran (Land: Großbritannien, Geburtstag: 17.02.1991, Status:
  lebendig) zurückgeben

### Musterlösung

```java title="SingleQueries" showLineNumbers
public record SingleQueries(List<Single> singles) { // 1

  public void a() { // 0,5
    Map<Country, List<Single>> tmp = singles.stream() // 1
      .filter(a -> a.salesInMillions() > 25) // 0,5
      .collect(Collectors.groupingBy(a -> a.artist().country())); // 1

    tmp.forEach((c, sl) -> System.out.println(c + ": " + sl); // 1
    }
  }

  public void b() { // 0,5
    OptionalDouble tmp = singles.stream() // 1
      .map(a -> a.artist()) // 0,5
      .distinct() // 0,5
      .filter(a -> !a.isAlive()) // 0,5
      .mapToInt(a -> a.birthdate().getYear()) // 1
      .average(); // 0,5

    tmp.ifPresentOrElse(System.out::println, () -> System.out.println(-1)); // 1
  }

  public boolean c() { // 0,5
    return singles.stream() // 1
      .anyMatch(a -> a.salesInMillions() > 10 // 0,5
        && a.artist().country().equals(Country.CHN)); // 1
  }

  public List<String> d() { // 0,5
    return singles.stream() // 1
      .filter(a -> a.publishingYear().compareTo("2000") > 0) // 1
      .sorted((a1, a2) -> Integer.valueOf(a2.salesInMillions()).compareTo(a1.salesInMillions())) // 1
      .map(a -> a.name() + ": " + a.artist().name() + ", " + a.salesInMillions() + " Millionen") // 1
      .limit(3) // 0,5
      .toList(); // 0,5
  }

  public List<Single> e() { // 0,5
    return singles.stream() // 1
      .filter(a -> a.artist().equals(
        new Artist("Ed Sheeran", Country.GBR, LocalDate.of(1991, 2, 17), true))) // 1
      .toList(); // 0,5
  }

}
```
