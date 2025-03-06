"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2270"],{19855:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>l,metadata:()=>r,assets:()=>t,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/human-resources","title":"Personalverwaltung","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/human-resources.md","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/human-resources","permalink":"/java-docs/pr-preview/pr-272/exam-exercises/exam-exercises-java2/class-diagrams/human-resources","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/human-resources.md","tags":[{"inline":true,"label":"exceptions","permalink":"/java-docs/pr-preview/pr-272/tags/exceptions"},{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-272/tags/records"},{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-272/tags/maps"}],"version":"current","frontMatter":{"title":"Personalverwaltung","description":"","tags":["exceptions","records","maps"]},"sidebar":"examExercisesSidebar","previous":{"title":"Fantasy-Spiel","permalink":"/java-docs/pr-preview/pr-272/exam-exercises/exam-exercises-java2/class-diagrams/fantasy-game"},"next":{"title":"Stellenangebot","permalink":"/java-docs/pr-preview/pr-272/exam-exercises/exam-exercises-java2/class-diagrams/job-offer"}}'),a=n("85893"),i=n("50065");let l={title:"Personalverwaltung",description:"",tags:["exceptions","records","maps"]},o=void 0,t={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>HumanResources</em>",id:"hinweise-zur-klasse-humanresources",level:2}];function c(e){let s={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,a.jsx)(s.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(s.mermaid,{value:"classDiagram\n    HumanResources o-- Person\n    HumanResources o-- TelephoneNumber\n\n    class HumanResources {\n        <<record>>\n        telephoneBook: Map~TelephoneNumber, Person~\n        staff: List~Person~\n        +addTelephoneNumber(telephoneNumber: TelephoneNumber, person: Person) void\n        +addStaff(person: Person) void\n        +getTelephoneNumbersByPersonId(id: int) List~TelephoneNumber~\n    }\n\n    class Person {\n        <<record>>\n        id: int\n        name: String\n    }\n\n    class TelephoneNumber {\n        <<record>>\n        digits: int[*]\n    }"}),"\n",(0,a.jsx)(s.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(s.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,a.jsxs)(s.h2,{id:"hinweise-zur-klasse-humanresources",children:["Hinweise zur Klasse ",(0,a.jsx)(s.em,{children:"HumanResources"})]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Die Methode\n",(0,a.jsx)(s.code,{children:"void addTelephoneNumber(telephoneNumber: TelephoneNumber, person: Person)"}),"\nsoll dem Telefonbuch (",(0,a.jsx)(s.code,{children:"telephoneBook"}),") die eingehende Telefonnummer als\nSchl\xfcssel sowie die eingehende Person als Wert hinzuf\xfcgen"]}),"\n",(0,a.jsxs)(s.li,{children:["Die Methode ",(0,a.jsx)(s.code,{children:"void addStaff(person: Person)"})," soll der Personalliste (",(0,a.jsx)(s.code,{children:"staff"}),")\ndie eingehende Person hinzuf\xfcgen. F\xfcr den Fall, dass diese Person bereits in\nder Personalliste vorhanden ist, soll die Ausnahme ",(0,a.jsx)(s.code,{children:"DuplicateException"}),"\nausgel\xf6st werden"]}),"\n",(0,a.jsxs)(s.li,{children:["Die Methode ",(0,a.jsx)(s.code,{children:"List<TelephoneNumber> getTelephoneNumbersByPersonId(id: int)"}),"\nsoll alle Telefonnummern zur eingehenden Personennummer zur\xfcckgeben"]}),"\n"]})]})}function m(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return l}});var r=n(67294);let a={},i=r.createContext(a);function l(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);