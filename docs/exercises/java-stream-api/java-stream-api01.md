---
title: JavaStreamAPI01
description: ''
---

- Erstelle die Klasse `VideoGameConsoles` anhand des abgebildeten Quellcodes
- Erstelle eine ausführbare Klasse, welche mit Hilfe der Java Stream API folgende Informationen auf der Konsole ausgibt:
    - die Namen aller Konsolen, die aktuell noch verkauft werden (_PlayStation 4, Nintendo Switch, XBox One_)
    - alle Konsolen absteigend sortiert nach der Lebensspanne (_VideoGameConsole\[title=Nintendo Wii, maker=NINTENDO, lifespan=13, soldUnits=101.63]_...)
    - die Antwort auf die Frage, ob es eine Konsole mit mehr als 150 Millionen verkauften Einheiten gibt (_true_)
    - die Antwort auf die Frage, ob von allen Konsolen mehr als 50 Millionen Einheiten verkauft wurden (_false_)
    - die Anzahl der Konsolen von Nintendo (_8_)
    - die Namen aller Konsolen, die nicht mehr verkauft werden sowie die Anzahl verkaufter Einheiten pro Jahr in Millionen (_PlayStation 2 (13.225)_...)
    - der Durchschnitt verkaufter Einheiten pro Jahr in Millionen aller Konsolen, die nicht mehr verkauft werden (_OptionalDouble\[9.900365412365412]_)
    - alle Konsolen gruppiert nach den Herstellern (_{NINTENDO=\[VideoGameConsole\[title=Nintendo DS, maker=NINTENDO, lifespan=10, soldUnits=154.02],_..._}_)
    - die Anzahl verkaufter Einheiten pro Hersteller in Millionen (_NINTENDO: 752.05_)

## Quellcode
```java title="VideoGameConsoles.java" showLineNumbers
public class VideoGameConsoles {

  private final static VideoGameConsole PS2 =
      new VideoGameConsole("PlayStation 2", Maker.SONY, 12, 158.70);
  private final static VideoGameConsole DS =
      new VideoGameConsole("Nintendo DS", Maker.NINTENDO, 10, 154.02);
  private final static VideoGameConsole GB =
      new VideoGameConsole("GameBoy", Maker.NINTENDO, 10, 118.69);
  private final static VideoGameConsole PS4 =
      new VideoGameConsole("PlayStation 4", Maker.SONY, -1, 116.93);
  private final static VideoGameConsole NS =
      new VideoGameConsole("Nintendo Switch", Maker.NINTENDO, -1, 109.25);
  private final static VideoGameConsole PSX =
      new VideoGameConsole("PlayStation", Maker.SONY, 9, 102.49);
  private final static VideoGameConsole WII =
      new VideoGameConsole("Nintendo Wii", Maker.NINTENDO, 13, 101.63);
  private final static VideoGameConsole PS3 =
      new VideoGameConsole("PlayStation 3", Maker.SONY, 11, 87.40);
  private final static VideoGameConsole X360 =
      new VideoGameConsole("XBox 360", Maker.MICROSOFT, 12, 85.81);
  private final static VideoGameConsole GBA =
      new VideoGameConsole("GameBoy Advance", Maker.NINTENDO, 7, 81.51);
  private final static VideoGameConsole PSP =
      new VideoGameConsole("PlayStation Portable", Maker.SONY, 9, 80.79);
  private final static VideoGameConsole TDS =
      new VideoGameConsole("Nintendo 3DS", Maker.NINTENDO, 8, 75.94);
  private final static VideoGameConsole NES =
      new VideoGameConsole("Nintendo Entertainment System", Maker.NINTENDO, 9, 61.91);
  private final static VideoGameConsole XONE =
      new VideoGameConsole("XBox One", Maker.MICROSOFT, -1, 50.53);
  private final static VideoGameConsole SNES =
      new VideoGameConsole("Super Nintendo Entertainment System", Maker.NINTENDO, 7, 49.10);

  public static record VideoGameConsole(String title, Maker maker, int lifespan, double soldUnits) {

  }

  public static enum Maker {
    NINTENDO, SEGA, SONY, MICROSOFT;
  }

  public static ArrayList<VideoGameConsole> getVideoGameConsoles() {
    ArrayList<VideoGameConsole> videoGameConsoles = new ArrayList<>();
    videoGameConsoles.add(PS2);
    videoGameConsoles.add(DS);
    videoGameConsoles.add(GB);
    videoGameConsoles.add(PS4);
    videoGameConsoles.add(NS);
    videoGameConsoles.add(PSX);
    videoGameConsoles.add(WII);
    videoGameConsoles.add(PS3);
    videoGameConsoles.add(X360);
    videoGameConsoles.add(GBA);
    videoGameConsoles.add(PSP);
    videoGameConsoles.add(TDS);
    videoGameConsoles.add(NES);
    videoGameConsoles.add(XONE);
    videoGameConsoles.add(SNES);
    return videoGameConsoles;
  }

}
```

## Hinweis zur Klasse VideoGameConsole
Konsolen, die aktuell noch verkauft werden, besitzen bei der Lebensspanne den Wert `-1`.
