---
title: Videosammlung
description: ''
tags: [inheritance, polymorphy, exceptions, records, optionals, io-streams]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm

```mermaid
classDiagram
    VideoCollection o-- Video
    Video <|-- BluRay
    Video <|-- VHS
    Video o-- Movie
    Movie o-- Genre

    class VideoCollection {
        <<record>>
        -videos List~Video~
        +addVideo(video Video) void
        +importVideos(file File) void
        +getVideoByMovieTitle(title String) Optional~Video~
    }

    class Video {
        <<abstract>>
        -movie Movie
        +Video(movie Movie)
    }

    class VHS {
        -isRewritable boolean
        +VHS(movie Movie, isRewritable boolean)
    }

    class BluRay {
        -capacityInGB double
        +BluRay(movie Movie, capacityInGB double)
    }

    class Movie {
        <<record>>
        -title String
        -genre Genre
        -publishingYear short
    }

    class Genre {
        <<enumeration>>
        SCIFI = Science Fiction
        HORROR = Horror
        ACTION = Action
        COMEDY = Komödie
        -description String
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse VideoCollection

- Die Methode `void addVideo(video: Video)` soll der Videoliste (`videos`) das eingehende Video hinzufügen
- Die Methode `void importVideos(file: File)` soll der Videoliste (`videos`) die Videos der eingehenden Datei hinzufügen. Die Ausnahme `FileNotFoundException` soll dabei weitergeleitet werden
- Die Methode `Optional<Video> getVideoByTitle(title: String)` soll das Video zum eingehenden Titel als Optional zurückgeben

## Beispielhafter Aufbau der Videodatei

```
The Matrix;SCIFI;1999;VHS;false
Evil Dead;HORROR;1981;BLURAY;25
```
