---
title: Reise
description: ''
tags: [oo, inheritance, polymorphism, abstract, interfaces]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
   AbstractBooking <|-- Flight : extends
   AbstractBooking <|-- Accommodation : extends
   Booking <|.. AbstractBooking : implements
   Travel o-- Booking
   class Booking {
      <<interface>>
      +getPriceInEuro() double
      +getBookingDate() LocalDate
   }
   class AbstractBooking {
      <<abstract>>
      -priceInEuro: double #123;final#125;
      -bookingDate: LocalDate #123;final#125;
      +AbstractBooking(priceInEuro: double)
   }
   class Flight {
      -flightId: String #123;final#125;
      -flightDate: LocalDate #123;final#125;
      +Flight(flightId: String, flightDate: LocalDate, priceInEuro: double)
   }
   class Accommodation {
      -name: String #123;final#125;
      -city: String #123;final#125;
      +Accommodation(name: String, city: String, priceInEuro: double)
   }
   class Travel {
      -description: String #123;final#125;
      -start: LocalDate #123;final#125;
      -end: LocalDate #123;final#125;
      -bookings: List~Booking~ #123;final#125;
      +Travel(description: String, start: LocalDate, end: LocalDate)
      +addBooking(booking: Booking) boolean
      +getTotalTravelCostsInEuro() double
   }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse _AbstractBooking_

Der Konstruktor soll den Preis mit dem eingehenden Wert initialisieren und das
Buchungsdatum auf das aktuelle Datum setzen.

## Hinweise zur Klasse _Travel_

- Die Methode `void booking: Booking)` soll den Buchungen die eingehende Buchung
  hinzufügen
- Die Methode `double getTotalTravelCostsInEuro()` soll die Gesamtkosten aller
  Buchungen der Reise in Euro zurückgeben
- Die Methode `List<Flight> getFlights()` soll alle Flüge der Reise zurückgeben
