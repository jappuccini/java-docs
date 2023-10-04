---
title: Messdaten
description: ''
tags: [records, maps, optionals, java-stream-api]
---

- Erstelle die Klasse `MeasurementData` anhand des abgebildeten Quellcodes
- Erstelle eine ausführbare Klasse, welche mit Hilfe der Java Stream API folgende Informationen auf der Konsole ausgibt:
  - alle Messdaten aus einem bestimmtem Jahr der Kategorie F absteigend sortiert nach dem Prozentsatz
  - der Durchschnitts-Prozentsatz aller Messdaten der Kategorie X
  - alle Messdaten, bei denen die Temperatur im Sommer (Juni - August) bei mindestens 30° lag
  - die Antwort auf die Frage, ob es einen Messdatensatz aus Deutschland, datiert nach dem 1. Januar eines bestimmten Jahres, mit einem Prozentsatz von mindestens 50% gibt
  - die durchschnittliche Temperatur gruppiert nach Ländern
  - die Anzahl aller Messdaten gruppiert nach den Prozentsatzbereichen (0-10, 10-20,…)

## Quellcode

```java
public record MeasurementData(String country, LocalDate date, double temperature, int percentage,
    char category) {

  private final static int NUMBER_OF_ENTRIES = 100;
  private final static int MAX_DAYS = 2000;
  private final static int MAX_TEMPERATURE = 40;
  private final static int MAX_PERCENTAGE = 101;
  private final static List<String> COUNTRIES =
      List.of("USA", "Brasilien", "Deutschland", "Japan", "Indien");
  private final static List<Character> CATEGORIES = List.of('D', 'X', 'F');

  public static ArrayList<MeasurementData> getMeasurementData() {
    ArrayList<MeasurementData> measurementData = new ArrayList<>();

    Random rnd = new Random();
    LocalDate now = LocalDate.now();

    for (int i = 0; i < NUMBER_OF_ENTRIES; i++) {
      LocalDate date = now.minusDays(rnd.nextInt(MAX_DAYS));
      double temperature = rnd.nextDouble(MAX_TEMPERATURE);
      int percentage = rnd.nextInt(MAX_PERCENTAGE);
      String country = COUNTRIES.get(rnd.nextInt(COUNTRIES.size()));
      char category = CATEGORIES.get(rnd.nextInt(CATEGORIES.size()));
      measurementData.add(new MeasurementData(country, date, temperature, percentage, category));
    }

    return measurementData;
  }

}
```
