"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9854"],{22865:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>l,assets:()=>u,toc:()=>o,frontMatter:()=>a});var t=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/class-diagrams/student-course","title":"Kurs","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/class-diagrams/student-course.md","sourceDirName":"exam-exercises/exam-exercises-java1/class-diagrams","slug":"/exam-exercises/exam-exercises-java1/class-diagrams/student-course","permalink":"/java-docs/pr-preview/pr-237/exam-exercises/exam-exercises-java1/class-diagrams/student-course","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/class-diagrams/student-course.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-237/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-237/tags/enumerations"}],"version":"current","frontMatter":{"title":"Kurs","description":"","tags":["oo","enumerations"]},"sidebar":"examExercisesSidebar","previous":{"title":"Geometrische Form","permalink":"/java-docs/pr-preview/pr-237/exam-exercises/exam-exercises-java1/class-diagrams/shape"},"next":{"title":"Zoo","permalink":"/java-docs/pr-preview/pr-237/exam-exercises/exam-exercises-java1/class-diagrams/zoo"}}'),s=i("85893"),r=i("50065");let a={title:"Kurs",description:"",tags:["oo","enumerations"]},d=void 0,u={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>StudentCourse</em>",id:"hinweis-zur-klasse-studentcourse",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    StudyCourse o-- Student\n    StudyCourse o-- Lecture\n    CourseOfStudies --o StudyCourse\n    Student o-- MatriculationNumber\n\n    class MatriculationNumber {\n        -digits: int[] #123;final#125;\n        +MatriculationNumber(digit1: int, digit2: int, digit3: int, digit4: int, digit5: int, digit6: int, digit7: int)\n    }\n\n    class Student {\n        -matriculationNumber: MatriculationNumber #123;final#125;\n        -name: String #123;final#125;\n        +Student(matriculationNumber: int[7], name: String)\n    }\n\n    class Lecture {\n        -code: String #123;final#125;\n        -description: String #123;final#125;\n        -creditPoints: int #123;final#125;\n        +Lecture(code: String, description: String, creditPoints: int)\n    }\n\n    class StudyCourse {\n        -description: String #123;final#125;\n        -courseOfStudies: CourseOfStudies #123;final#125;\n        -lectures: List~Lecture~ #123;final#125;\n        -students: List~Student~ #123;final#125;\n        +StudyCourse(description: String, courseOfStudies: CourseOfStudies)\n        +addStudent(student: Student) void\n        +addLecture(lecture: Lecture) void\n        +getLectureWithMostCreditPoints() Lecture\n    }\n\n    class CourseOfStudies {\n        <<enumeration>>\n        WI = Wirtschaftsinformatik\n        INF = Informatik\n        BWL = BWL\n        -description: String #123;final#125;\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-studentcourse",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"StudentCourse"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"Lecture getLectureWithMostCreditPoints()"})," soll die Vorlesung mit\nden meisten ECTS-Punkten zur\xfcckgeben."]})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return a}});var t=i(67294);let s={},r=t.createContext(s);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);