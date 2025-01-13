"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6967"],{43020:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/queries/planets","title":"Planeten","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/queries/planets.md","sourceDirName":"exam-exercises/exam-exercises-java2/queries","slug":"/exam-exercises/exam-exercises-java2/queries/planets","permalink":"/java-docs/pr-preview/pr-248/exam-exercises/exam-exercises-java2/queries/planets","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/queries/planets.md","tags":[{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-248/tags/records"},{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-248/tags/maps"},{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-248/tags/optionals"},{"inline":true,"label":"java-stream-api","permalink":"/java-docs/pr-preview/pr-248/tags/java-stream-api"}],"version":"current","frontMatter":{"title":"Planeten","description":"","tags":["records","maps","optionals","java-stream-api"]},"sidebar":"examExercisesSidebar","previous":{"title":"Smartphone-Shop","permalink":"/java-docs/pr-preview/pr-248/exam-exercises/exam-exercises-java2/queries/phone-store"},"next":{"title":"Panzer","permalink":"/java-docs/pr-preview/pr-248/exam-exercises/exam-exercises-java2/queries/tanks"}}'),r=a("85893"),i=a("50065");let t={title:"Planeten",description:"",tags:["records","maps","optionals","java-stream-api"]},l=void 0,c={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2}];function d(e){let n={h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um"}),"\n",(0,r.jsxs)(n.li,{children:["Erstelle eine ausf\xfchrbare Klasse, welche mit Hilfe der Java Stream API\nfolgende Informationen auf der Konsole ausgibt:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"alle Planeten mit mehr als 5 Monden"}),"\n",(0,r.jsx)(n.li,{children:"den durchschnittlichen Durchmesser aller Gasplaneten"}),"\n",(0,r.jsx)(n.li,{children:"alle Planeten absteigend sortiert nach der Masse"}),"\n",(0,r.jsx)(n.li,{children:"die Antwort auf die Frage, ob alle Planeten mindestens einen Mond besitzen"}),"\n",(0,r.jsx)(n.li,{children:"alle Planeten gruppiert nach ihrem Typ"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Planet o-- Type\n\n    class Planet {\n        <<record>>\n        name: String\n        diameterInKm: double\n        massInE24Kg: double\n        moons: int\n        type: Type\n    }\n\n    class Type {\n        <<enumeration>>\n        GAS_PLANET\n        TERRESTRIAL_PLANET\n        DWARF_PLANET\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return t}});var s=a(67294);let r={},i=s.createContext(r);function t(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);