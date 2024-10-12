---
title: Kurs
description: ''
tags: [oo, enumerations]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine
ausführbare Klasse.

## Klassendiagramm

```mermaid
classDiagram
    StudyCourse o-- Student
    StudyCourse o-- Lecture
    CourseOfStudies --o StudyCourse
    Student o-- MatriculationNumber

    class MatriculationNumber {
        -digits: int[] &#123final&#125
        +MatriculationNumber(digit1: int, digit2: int, digit3: int, digit4: int, digit5: int, digit6: int, digit7: int)
    }

    class Student {
        -matriculationNumber: MatriculationNumber &#123final&#125
        -name: String &#123final&#125
        +Student(matriculationNumber: int[7], name: String)
    }

    class Lecture {
        -code: String &#123final&#125
        -description: String &#123final&#125
        -creditPoints: int &#123final&#125
        +Lecture(code: String, description: String, creditPoints: int)
    }

    class StudyCourse {
        -description: String &#123final&#125
        -courseOfStudies: CourseOfStudies &#123final&#125
        -lectures: List~Lecture~ &#123final&#125
        -students: List~Student~ &#123final&#125
        +StudyCourse(description: String, courseOfStudies: CourseOfStudies)
        +addStudent(student: Student) void
        +addLecture(lecture: Lecture) void
        +getLectureWithMostCreditPoints() Lecture
    }

    class CourseOfStudies {
        <<enumeration>>
        WI = Wirtschaftsinformatik
        INF = Informatik
        BWL = BWL
        -description: String &#123final&#125
    }
```

## Allgemeine Hinweise

- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und
  Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die
  Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse _StudentCourse_

Die Methode `Lecture getLectureWithMostCreditPoints()` soll die Vorlesung mit
den meisten ECTS-Punkten zurückgeben.
