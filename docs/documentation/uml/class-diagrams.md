---
title: Klassendiagramme
description: ''
sidebar_position: 10
tags: [uml, class-diagrams]
---

Klassendiagramme sind ein Diagrammtyp der UML und gehören dort zum Bereich der Strukturdiagramme. Das Klassendiagramm dient zur leicht lesbaren Dokumentation des Aufbaus von Klassen und deren Beziehungen (Relationen). Klassendiagramme können Informationen zu 
den Attributen, den Methoden und weiteren Klassen-Bestandteilen enthalten.

![image](https://user-images.githubusercontent.com/47243617/209165477-023f634a-4413-4907-baa6-7667305fd459.png)

## Darstellung von Klassen
Klassen werden im Klassendiagramm als Rechteck mit verschiedenen Bereichen (Klassenname, Attribute, Methoden und weitere Klassen-Bestandteile) dargestellt:
- Der Klassenname wird zentriert, fett gedruckt und mit einem Großbuchstaben beginnend dargestellt
- Attribute werden nach dem Muster _[Sichtbarkeit]_ _[Attributname]: [Datentyp] = [Anfangswert]_ dargestellt
- Methoden nach dem Muster _[Sichtbarkeit]_ _[Methoden-Signatur]: [Datentyp des Rückgabewertes]_ dargestellt
- Statische Attribute und Methoden werden durch Unterstriche kenntlich gemacht
- Durch geschweifte Klammern können Attribute, Methoden und Klassen um zusätzliche Merkmale ergänzt werden
- Die Sichtbarkeit von Attributen und Methoden wird durch (farbige) Symbole dargestellt:
    - Die Sichtbarkeit `public` wird durch das Symbol **+** bzw. die Farbe **grün** dargestellt
    - Die Sichtbarkeit `protected` wird durch das Symbol **#** bzw. die Farbe **gelb** dargestellt
    - Die Sichtbarkeit `packaged` wird durch das Symbol **~** bzw. die Farbe **blau** dargestellt
    - Die Sichtbarkeit `private` wird durch das Symbol **-** bzw. die Farbe **rot** dargestellt

![image](https://user-images.githubusercontent.com/47243617/209165572-788980f2-51cd-4d99-929c-2b9b93af54e7.png)

## Darstellung von generischen Klassen
Die formalen Typparameter einer generischen Klassen werden in einem zusätzlichen Rechteck dargestellt.

![image](https://user-images.githubusercontent.com/47243617/209165618-d695a34b-92fb-4f4f-bd7a-d65b2768c112.png)

## Darstellung von Datenklassen
Datenklassen werden im Klassendiagramm durch den Stereotypen `record` kenntlich gemacht. Dieser impliziert, dass die Datenklasse einen entsprechenden Konstruktor, Getter zu allen Attributen sowie entsprechende Implementierungen für die Object-Methoden besitzt.

![image](https://user-images.githubusercontent.com/47243617/209165706-16c0ca58-fc0c-4b6a-b073-e9e9df59e084.png)

## Darstellung von Schnittstellen
Schnittstellen werden im Klassendiagramm durch den Stereotypen `interface` kenntlich gemacht. Dieser impliziert, dass alle Methoden der Schnittstelle abstrakt sind.

![image](https://user-images.githubusercontent.com/47243617/209165629-da42b8c4-763c-4fe2-a9fb-06654fda81f7.png)

## Darstellung von Aufzählungen
Aufzählungen werden im Klassendiagramm durch den Stereotypen `enumeration` kenntlich gemacht. Die Aufzählungskonstanten werden in einem zusätzlichen Bereich aufgeführt. Der Stereotyp impliziert, dass die Aufzählung einen privaten Konstruktor sowie ggbfs. passende Setter und Getter besitzt.

![image](https://user-images.githubusercontent.com/47243617/209165765-57054b0c-dc01-4270-99e6-436b8057ee16.png)

## Darstellung von lokalen Klassen
Lokale Klassen werden mit einem Kreuz hin zur Top-Level-Klasse kenntlich gemacht.

![image](https://user-images.githubusercontent.com/47243617/209165818-5833caf7-a1de-48c7-b650-103cf5ea7925.png)

## Darstellung von Ausnahmen
Ausnahmen werden im Klassendiagramm durch die Stereotypen `exception` kenntlich gemacht. Die Beziehung zwischen einer Ausnahme und der auslösenden Klasse wird als gestrichelte Linie sowie einem offenen Pfeil hin zur Ausnhame dargestellt.

![image](https://user-images.githubusercontent.com/47243617/209165865-b441372d-4330-4607-bf70-718949b92b42.png)

## Darstellung von Assoziationen
Assoziationen stellen allgemeine Relationen zwischen zwei Klassen dar, bei der eine Klasse eine andere Klasse verwendet. Assoziationen können in eine Richtung (unidirektional) und in beide Richtungen (bidirektional) vorliegen. 

Aggregationen und Kompositionen stellen spezielle Formen von Assoziationen dar, bei denen ein Objekt der einen Klasse Teil einer anderen Klasse ist. Im Gegensatz zu Aggregationen hängen bei Kompositionen die Teile von der Existenz des Ganzen ab. Aggregationen 
werden daher auch als ist-Teil-von-Relationen, Kompositionen als existenzabhängige ist-Teil-von-Relationen bezeichnet.

![image](https://user-images.githubusercontent.com/47243617/209120430-c8ce835a-436b-49b6-ba1b-eeb4b5d05735.png)

Assoziationen werden mit einem offenen Pfeil hin zur verwendeten Klasse dargestellt, Aggregationen mit einer nicht ausgefüllten Raute hin zur besitzenden Klasse und Kompositionen mit einer ausgefüllten Raute hin zur besitzenden Klasse.

![image](https://user-images.githubusercontent.com/47243617/209166000-d4f2a631-7502-4b7c-a0e9-f03e489c8e37.png)

:::note Hinweis
Assoziationen können gerichtet und ungerichtet dargestellt werden.
:::

## Darstellung von Vererbungs-und Realisierungs-Beziehungen
Vererbungs-Beziehungen werden mit einem geschlossenen Pfeil hin zur Oberklasse sowie einer durchgezogenen Linie dargestellt, Realisierungs-Beziehungen mit einem geschlossenen Pfeil hin zur Schnittstelle sowie einer gestrichelten Linie.

![image](https://user-images.githubusercontent.com/47243617/209166051-5ef3514c-e2b6-4c1d-bc8f-ad533f913ae9.png)

## Darstellung von Multiplizitäten
Die Multiplizität einer Beziehung legt fest, mit wie vielen Objekten der gegenüberliegenden Klasse ein Objekt in Beziehung stehen kann. Die Multiplizität wird als Intervall aus nicht-negativen ganzen Zahlen dargestellt und wird in der Form 
_[untere Schranke]..[obere Schranke]_ angegeben. Besitzen beide Schranken den gleichen Wert, muss nur eine der beiden Schranken angegeben werden. Eine nach oben unbeschränkte Schranke wird mit **\*** angegeben.
