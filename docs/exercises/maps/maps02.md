---
title: Maps02
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Erstelle die Klassen `Author`, `Book`, `BookCollection` und `DuplicateKeyException` anhand des abgebildeten Klassendiagramms
- Erstelle eine ausführbare Klasse, welche eine Büchersammlung mit mehreren Autoren und Büchern erzeugt und den fleißigsten Autoren auf der Konsole ausgibt

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/235862924-f3721a33-9fcd-49e7-8181-5ffb1a70ea87.png)

## Hinweise zur Klasse BookCollection
- Die Methode `void addAuthor(author: Author)` soll den eingehenden Autor der Büchersammlung hinzufügen. Für den Fall, dass der Autor bereits in der Büchersammlung
vorhanden ist, soll die Ausnahme `DuplicateKeyException` ausgelöst werden
- Die Methode `void addBook(author: Author, book: Book)` soll das eingehende Buch der Büchersammlung hinzufügen
- Die Methode `Author getMostDiligentAuthor()` soll den Autoren mit den meisten Büchern in der Büchersammlung zurückgeben
- Die Methode `Book getBookByTitle(title: String)` soll das Buch zum eingehenden Buchtitel zurückgeben

<Exercise pullRequest="66" branchSuffix="maps/02" />
