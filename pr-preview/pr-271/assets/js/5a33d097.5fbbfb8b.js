"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5058"],{4396:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>t});var i=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/class-diagrams/santa-claus","title":"Weihnachtsmann","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/class-diagrams/santa-claus.md","sourceDirName":"exam-exercises/exam-exercises-java1/class-diagrams","slug":"/exam-exercises/exam-exercises-java1/class-diagrams/santa-claus","permalink":"/java-docs/pr-preview/pr-271/exam-exercises/exam-exercises-java1/class-diagrams/santa-claus","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/class-diagrams/santa-claus.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-271/tags/oo"},{"inline":true,"label":"inheritance","permalink":"/java-docs/pr-preview/pr-271/tags/inheritance"},{"inline":true,"label":"polymorphism","permalink":"/java-docs/pr-preview/pr-271/tags/polymorphism"}],"version":"current","frontMatter":{"title":"Weihnachtsmann","description":"","tags":["oo","inheritance","polymorphism"]},"sidebar":"examExercisesSidebar","previous":{"title":"Spieler","permalink":"/java-docs/pr-preview/pr-271/exam-exercises/exam-exercises-java1/class-diagrams/player"},"next":{"title":"Geometrische Form","permalink":"/java-docs/pr-preview/pr-271/exam-exercises/exam-exercises-java1/class-diagrams/shape"}}'),a=n("85893"),r=n("50065");let l={title:"Weihnachtsmann",description:"",tags:["oo","inheritance","polymorphism"]},t=void 0,c={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>Present</em>",id:"hinweise-zur-klasse-present",level:2},{value:"Hinweis zur Klasse <em>Book</em>",id:"hinweis-zur-klasse-book",level:2},{value:"Hinweise zur Klasse <em>SantaClaus</em>",id:"hinweise-zur-klasse-santaclaus",level:2}];function d(e){let s={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,a.jsx)(s.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(s.mermaid,{value:"classDiagram\n   Wrappable <|.. Present: implements\n   Present <|-- Toy: extends\n   Present <|-- Book: extends\n   SantaClaus o-- Present\n   class Wrappable {\n      <<interface>>\n      getDescription() String\n      wrap() void\n      unwrap() void\n   }\n   class Present {\n      <<abstract>>\n      -isWrapped: boolean\n      +wrap() void\n      +unwrap() void\n   }\n   class Book {\n      -title: String #123;final#125;\n      -author: String #123;final#125;\n      +Book(title: String, author: String)\n      +getDescription() String\n   }\n   class Toy {\n      -description: String #123;final#125;\n      -priceInEuro: double #123;final#125;\n      +Toy(description: String, priceInEuro: double)\n   }\n   class SantaClaus {\n      -presents: List~Present~ #123;final#125;\n      +SantaClaus()\n      +addPresent(present: Present) void\n      +wrapAllPresents() void\n      +getNumberOfToys() int\n   }"}),"\n",(0,a.jsx)(s.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(s.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,a.jsxs)(s.h2,{id:"hinweise-zur-klasse-present",children:["Hinweise zur Klasse ",(0,a.jsx)(s.em,{children:"Present"})]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Die Methode ",(0,a.jsx)(s.code,{children:"void wrap()"})," soll das Geschenk einpacken"]}),"\n",(0,a.jsxs)(s.li,{children:["Die Methode ",(0,a.jsx)(s.code,{children:"void unwrap()"})," soll das Geschenk auspacken"]}),"\n"]}),"\n",(0,a.jsxs)(s.h2,{id:"hinweis-zur-klasse-book",children:["Hinweis zur Klasse ",(0,a.jsx)(s.em,{children:"Book"})]}),"\n",(0,a.jsxs)(s.p,{children:["Die Methode ",(0,a.jsx)(s.code,{children:"String getDescription()"})," soll die Beschreibung in der Form ",(0,a.jsx)(s.em,{children:"[Titel]\n[Autor]"})," zur\xfcckgeben"]}),"\n",(0,a.jsxs)(s.h2,{id:"hinweise-zur-klasse-santaclaus",children:["Hinweise zur Klasse ",(0,a.jsx)(s.em,{children:"SantaClaus"})]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Die Methode ",(0,a.jsx)(s.code,{children:"void addPresent(present: Present)"})," soll der Geschenkeliste das\neingehende Geschenk hinzuf\xfcgen"]}),"\n",(0,a.jsxs)(s.li,{children:["Die Methode ",(0,a.jsx)(s.code,{children:"int getNumberOfToys()"})," soll die Anzahl Spielzeuge in der\nGeschenkeliste zur\xfcckgeben"]}),"\n",(0,a.jsxs)(s.li,{children:["Die Methode ",(0,a.jsx)(s.code,{children:"void wrapAllPresents()"})," soll alle Geschenke der Geschenkeliste\neinpacken"]}),"\n"]})]})}function m(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return l}});var i=n(67294);let a={},r=i.createContext(a);function l(e){let s=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);