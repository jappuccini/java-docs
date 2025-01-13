"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7405"],{79109:function(e,i,n){n.r(i),n.d(i,{default:()=>d,frontMatter:()=>o,metadata:()=>a,assets:()=>c,toc:()=>l,contentTitle:()=>t});var a=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/lego-brick","title":"Lego-Baustein","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/lego-brick.md","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/lego-brick","permalink":"/java-docs/production/exam-exercises/exam-exercises-java2/class-diagrams/lego-brick","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/lego-brick.md","tags":[{"inline":true,"label":"inheritance","permalink":"/java-docs/production/tags/inheritance"},{"inline":true,"label":"polymorphism","permalink":"/java-docs/production/tags/polymorphism"},{"inline":true,"label":"interfaces","permalink":"/java-docs/production/tags/interfaces"},{"inline":true,"label":"comparators","permalink":"/java-docs/production/tags/comparators"}],"version":"current","frontMatter":{"title":"Lego-Baustein","description":"","tags":["inheritance","polymorphism","interfaces","comparators"]},"sidebar":"examExercisesSidebar","previous":{"title":"Stellenangebot","permalink":"/java-docs/production/exam-exercises/exam-exercises-java2/class-diagrams/job-offer"},"next":{"title":"Bibliothek","permalink":"/java-docs/production/exam-exercises/exam-exercises-java2/class-diagrams/library"}}'),r=n("85893"),s=n("50065");let o={title:"Lego-Baustein",description:"",tags:["inheritance","polymorphism","interfaces","comparators"]},t=void 0,c={},l=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>LegoBrickVolumeComparator</em>",id:"hinweis-zur-klasse-legobrickvolumecomparator",level:2}];function m(e){let i={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,r.jsx)(i.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(i.mermaid,{value:"classDiagram\n    Lego <|-- LegoBrick : extends\n    LegoBrick <|-- LegoBrick2x2x2 : extends\n    LegoBrick <|-- LegoBrick4x2x1 : extends\n    Comparator~LegoBrick~ <|.. LegoBrickVolumeComparator : implements\n\n    class Lego {\n        <<abstract>>\n        -id: int #123;final#125;\n        +Lego(id: int)\n    }\n\n    class LegoBrick {\n        <<abstract>>\n        -dimensions: int[3] #123;final#125;\n        -color: String #123;final#125;\n        +LegoBrick(id: int, dimensions: int[3], color: String)\n    }\n\n    class LegoBrick2x2x2 {\n        +LegoBrick2x2x2(id: int, color: String)\n    }\n\n    class LegoBrick4x2x1 {\n        +LegoBrick4x2x1(id: int, color: String)\n    }\n\n    class Comparator~LegoBrick~ {\n        <<interface>>\n        +compare(o1: LegoBrick, o2: LegoBrick) int\n    }\n\n    class LegoBrickVolumeComparator {\n        +compare(legoBrick1: LegoBrick, legoBrick2: LegoBrick) int\n    }"}),"\n",(0,r.jsx)(i.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(i.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,r.jsxs)(i.h2,{id:"hinweis-zur-klasse-legobrickvolumecomparator",children:["Hinweis zur Klasse ",(0,r.jsx)(i.em,{children:"LegoBrickVolumeComparator"})]}),"\n",(0,r.jsxs)(i.p,{children:["Die Methode ",(0,r.jsx)(i.code,{children:"int compare(legoBrick1: LegoBrick, legoBrick2: LegoBrick)"})," soll so\nimplementiert werden, dass damit Lego-Bausteine aufsteigend nach ihrem Volumen\nsortiert werden k\xf6nnen."]})]})}function d(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return t},a:function(){return o}});var a=n(67294);let r={},s=a.createContext(r);function o(e){let i=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);