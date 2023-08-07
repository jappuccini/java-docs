---
title: Stellenangebot
description: ''
tags: [inheritance, polymorphy, exceptions, records, io-streams]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://github.com/jappuccini/java-docs/assets/47243617/ec340eee-89de-4afe-ae4a-b9a1660e912c)

## Allgemeine Hinweise
- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse Applicant
Die Methode `void addApplicationDocument(applicationDocument: ApplicationDocument)` soll den Bewerbungsunterlagen (`applicationDocuments`) das eingehende Dokument hinzufügen.

## Hinweis zur Klasse JobOffer
Die Methode `void addApplicant(applicant: Applicant)` soll der Bewerberliste (`applicants`) den eingehenden Bewerber hinzufügen.

## Hinweis zur Klasse JobOfferReader
Die statische Methode `ArrayList<JobOffer> getJobOffers(file: File)` soll die Stellenangebote der eingehenden Datei zurückgeben. Die Ausnahme `FileNotFoundException` soll dabei weitergeleitet werden.

## Beispielhafter Auszug aus einer Stellenangebotsdatei

```
285;Senior Developer Java
392;Associate Consultant SAP
430;Expert Developer Java
```
