---
title: JavaStreamAPI02
description: ''
---

- Erstelle die Klassen `FootballClub`, `Position`, `Footballer` und `Footballers` anhand des abgebildeten Quellcodes sowie des abgebildeten Klassendiagramms
- Erstelle eine ausführbare Klasse, welche alle erstellten Abfragen ausführt und die Ergebnisse auf der Konsole ausgibt

## Quellcode
```java title="Footballers.java" showLineNumbers
public class Footballers {

  public static ArrayList<Footballer> getFootballers() {
    FootballClub vflWolfsburg = new FootballClub("VfL Wolfsburg", 3, 1145);
    FootballClub eintrachtFrankfurt = new FootballClub("Eintracht Frankfurt", 1, 1500);
    FootballClub chelseaFC = new FootballClub("Chelsea FC", -1, -1);
    FootballClub olympiqueLyon = new FootballClub("Olympique Lyon", -1, -1);
    FootballClub bayernMuenchen = new FootballClub("Bayern Muenchen", 4, 1058);

    ArrayList<Footballer> footballers = new ArrayList<>();

    footballers.add(new Footballer("Merle Frohms", Position.GOALKEEPER, LocalDate.of(1995, 1, 28),
        173, vflWolfsburg, 41, 0));
    footballers.add(new Footballer("Svenja Huth", Position.MIDFIELDER, LocalDate.of(1991, 1, 25),
        163, vflWolfsburg, 81, 14));
    footballers.add(new Footballer("Kathrin Hendrich", Position.DEFENDER, LocalDate.of(1992, 4, 6),
        174, vflWolfsburg, 59, 5));
    footballers.add(new Footballer("Sara Doorsoun", Position.DEFENDER, LocalDate.of(1991, 11, 17),
        170, eintrachtFrankfurt, 46, 1));
    footballers.add(new Footballer("Felicitas Rauch", Position.DEFENDER, LocalDate.of(1996, 4, 30),
        170, vflWolfsburg, 34, 4));
    footballers.add(new Footballer("Melanie Leupolz", Position.MIDFIELDER,
        LocalDate.of(1994, 4, 14), 173, chelseaFC, 79, 13));
    footballers.add(new Footballer("Sara Daebritz", Position.MIDFIELDER, LocalDate.of(1995, 2, 15),
        171, olympiqueLyon, 98, 17));
    footballers.add(new Footballer("Lina Magull", Position.MIDFIELDER, LocalDate.of(1994, 8, 15),
        164, bayernMuenchen, 73, 22));
    footballers.add(new Footballer("Jule Brand", Position.MIDFIELDER, LocalDate.of(2002, 10, 16),
        177, vflWolfsburg, 33, 7));
    footballers.add(new Footballer("Klara Buehl", Position.STRIKER, LocalDate.of(2000, 12, 7), 173,
        bayernMuenchen, 36, 15));
    footballers.add(new Footballer("Alexandra Popp", Position.STRIKER, LocalDate.of(1991, 4, 6),
        174, vflWolfsburg, 129, 64));

    return footballers;
  }

}
```
## Klassendiagramm
![image](https://github.com/jappuccini/java-docs/assets/47243617/37183812-cac7-470b-8cc9-724a28e7c948)

## Hinweise zur Klasse FootballerQueries
- Mannschaften, die nicht der ewigen Tabelle der Bundesliga vertreten sind, besitzen sowohl für die Position als auch die Punktzahl den Wert `-1`
- Die Methode `int getTotalOfAllGoalsByMidfielders()` soll die Summe aller geschossener Tore von Mittelfeldspielerinnen zurückgeben
- Die Methode `Optional<Footballer> getNameOfVfLWolfsburgFootballerWithMostPlayedGames()` soll den Namen der Spielerin vom VfL Wolfsburg mit den meisten Spielen zurückgeben
- Die Methode `List<FootballClub> getNameOfAllFootballClubs()` soll die Namen aller Vereine zurückgeben
- Die Methode `boolean isFootballerWithSizeInCmLT170AndNumbreOfGoalsBT0()` soll die Antwort auf die Frage, ob es eine Spielerin gibt, die kleiner als 170cm ist und mindestens ein Tor geschossen hat, zurückgeben
- Die Methode `Map<Integer, List<Footballer>> getAllFootballersByBirthyear()` soll alle Spielerinnen gruppiert nach ihrem Geburtsjahr zurückgeben
- Die Methode `OptionalDouble getAverageNumberOfPointsFromAllBundesligaFootballClubs()` soll die durchschnittliche Punktzahl aller Bundesligamannschaften in der Ewigen Tabelle zurückgeben
