---
title: Kurs
description: ''
tags: [oo, enumerations]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
    StudyCourse o-- Student
    StudyCourse o-- Lecture
    StudyCourse o-- CourseOfStudies
    Student o-- MatriculationNumber

    class MatriculationNumber {
        -digits int[]
        +MatriculationNumber(digit1 int, digit2 int, digit3 int, digit4 int, digit5 int, digit6 int, digit7 int)
    }

    class Student {
        -matriculationNumber MatriculationNumber
        -name String
        +Student(matriculationNumber int[7], name String)
    }

    class Lecture {
        -code String
        -description String
        -creditPoints int
        +Lecture(code String, description String, creditPoints int)
    }

    class StudyCourse {
        -description String
        -courseOfStudies CourseOfStudies
        -lectures ArrayList~Lecture~
        -students ArrayList~Student~
        +StudyCourse(description String, courseOfStudies CourseOfStudies)
        +addStudent(student Student) void
        +addLecture(lecture Lecture) void
        +getLectureWithMostCreditPoints() Lecture
    }

    class CourseOfStudies {
        <<enumeration>>
        WI = Wirtschaftsinformatik
        INF = Informatik
        BWL = BWL
        -description String
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse StudentCourse

Die Methode `Lecture getLectureWithMostCreditPoints()` soll die Vorlesung mit den meisten ECTS-Punkten zurückgeben.
