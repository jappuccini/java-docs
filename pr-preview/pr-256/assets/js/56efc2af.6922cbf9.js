"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7576"],{16234:function(e,i,s){s.r(i),s.d(i,{default:()=>m,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>t});var n=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/class-diagrams/zoo","title":"Zoo","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/class-diagrams/zoo.md","sourceDirName":"exam-exercises/exam-exercises-java1/class-diagrams","slug":"/exam-exercises/exam-exercises-java1/class-diagrams/zoo","permalink":"/java-docs/pr-preview/pr-256/exam-exercises/exam-exercises-java1/class-diagrams/zoo","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/class-diagrams/zoo.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-256/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-256/tags/enumerations"},{"inline":true,"label":"inheritance","permalink":"/java-docs/pr-preview/pr-256/tags/inheritance"},{"inline":true,"label":"polymorphism","permalink":"/java-docs/pr-preview/pr-256/tags/polymorphism"}],"version":"current","frontMatter":{"title":"Zoo","description":"","tags":["oo","enumerations","inheritance","polymorphism"]},"sidebar":"examExercisesSidebar","previous":{"title":"Kurs","permalink":"/java-docs/pr-preview/pr-256/exam-exercises/exam-exercises-java1/class-diagrams/student-course"},"next":{"title":"Aktivit\xe4tsdiagramme","permalink":"/java-docs/pr-preview/pr-256/exam-exercises/exam-exercises-java1/activity-diagrams/"}}'),a=s("85893"),r=s("50065");let l={title:"Zoo",description:"",tags:["oo","enumerations","inheritance","polymorphism"]},t=void 0,o={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Bird</em>",id:"hinweis-zur-klasse-bird",level:2},{value:"Hinweis zur Klasse <em>Fish</em>",id:"hinweis-zur-klasse-fish",level:2},{value:"Hinweise zur Klasse <em>Zoo</em>",id:"hinweise-zur-klasse-zoo",level:2}];function c(e){let i={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,a.jsx)(i.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(i.mermaid,{value:"classDiagram\n    Zoo o-- Animal\n    Animal <|-- Bird : extends\n    Animal <|-- Fish : extends\n\n    class Zoo {\n        -name: String #123;final#125;\n        -animals: List~Animal~ #123;final#125;\n        +Zoo(name: String, animals: List~Animal~)\n        +addAnimal(animal: Animal) void\n        +getBiggestAnimal() Animal\n        +getFishesByColor(color: String) List~Fish~\n    }\n\n    class Animal {\n        -description: String #123;final#125;\n        -sizeInM: double #123;final#125;\n        -weigthInKg: double #123;final#125;\n        +Animal(description: String, sizeInM: double, weigthInKg: double)\n    }\n\n    class Bird {\n        +Bird(description: String, sizeInM: double, weigthInKg: double)\n        +fly() void\n    }\n\n    class Fish {\n        +Fish(description: String, sizeInM: double, weigthInKg: double)\n        +swim() void\n    }"}),"\n",(0,a.jsx)(i.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(i.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,a.jsxs)(i.h2,{id:"hinweis-zur-klasse-bird",children:["Hinweis zur Klasse ",(0,a.jsx)(i.em,{children:"Bird"})]}),"\n",(0,a.jsxs)(i.p,{children:["Die Methode ",(0,a.jsx)(i.code,{children:"void fly()"})," soll die Zeichenkette ",(0,a.jsx)(i.em,{children:"flatter, flatter"})," ausgeben."]}),"\n",(0,a.jsxs)(i.h2,{id:"hinweis-zur-klasse-fish",children:["Hinweis zur Klasse ",(0,a.jsx)(i.em,{children:"Fish"})]}),"\n",(0,a.jsxs)(i.p,{children:["Die Methode ",(0,a.jsx)(i.code,{children:"void swim()"})," soll die Zeichenkette ",(0,a.jsx)(i.em,{children:"schwimm, schwimm"})," ausgeben."]}),"\n",(0,a.jsxs)(i.h2,{id:"hinweise-zur-klasse-zoo",children:["Hinweise zur Klasse ",(0,a.jsx)(i.em,{children:"Zoo"})]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Die Methode ",(0,a.jsx)(i.code,{children:"void addAnimal(animal: Animal)"})," soll dem Zoo das eingehende Tier\nhinzuf\xfcgen"]}),"\n",(0,a.jsxs)(i.li,{children:["Die Methode ",(0,a.jsx)(i.code,{children:"Animal getBiggestAnimal()"})," soll das gr\xf6\xdfte Tier des Zoos\nzur\xfcckgeben"]}),"\n",(0,a.jsxs)(i.li,{children:["Die Methode ",(0,a.jsx)(i.code,{children:"List<Fish> getFishesByColor(color: String)"})," soll alle Fische des\nZoos zur eingehenden Farbe zur\xfcckgeben"]}),"\n"]})]})}function m(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,i,s){s.d(i,{Z:function(){return t},a:function(){return l}});var n=s(67294);let a={},r=n.createContext(a);function l(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);