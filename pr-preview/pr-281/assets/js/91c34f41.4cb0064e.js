"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1336"],{8736:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>t,metadata:()=>a,assets:()=>l,toc:()=>p,contentTitle:()=>i});var a=JSON.parse('{"id":"exercises/optionals/optionals02","title":"Optionals02","description":"","source":"@site/docs/exercises/optionals/optionals02.md","sourceDirName":"exercises/optionals","slug":"/exercises/optionals/optionals02","permalink":"/java-docs/pr-preview/pr-281/exercises/optionals/optionals02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/optionals/optionals02.md","tags":[],"version":"current","frontMatter":{"title":"Optionals02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Optionals01","permalink":"/java-docs/pr-preview/pr-281/exercises/optionals/optionals01"},"next":{"title":"Optionals03","permalink":"/java-docs/pr-preview/pr-281/exercises/optionals/optionals03"}}'),o=s("85893"),r=s("50065");let t={title:"Optionals02",description:""},i=void 0,l={},p=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Passe die Klasse ",(0,o.jsx)(n.code,{children:"TelephoneBook"})," aus \xdcbungsaufgabe ",(0,o.jsx)(n.a,{href:"../maps/maps01",children:"Maps01"}),"\nanhand des abgebildeten Klassendiagramms an"]}),"\n",(0,o.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,o.jsx)(n.a,{href:"../maps/maps01",children:"Maps01"})," so an,\ndass entweder die gefundenen Werte oder alternativ entsprechende Meldungen\nausgegeben werden"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,o.jsx)(n.mermaid,{value:"classDiagram\n    TelephoneBook o-- Person\n    TelephoneBook o-- TelephoneNumber\n\n    class Person {\n        <<record>>\n        name: String\n    }\n\n    class TelephoneNumber {\n        <<record>>\n        value: String\n    }\n\n    class TelephoneBook {\n        <<record>>\n        entries: Map~Person, TelephoneNumber~\n        +addEntry(person: Person, telephoneNumber: TelephoneNumber) void\n        +getTelephoneNumberByName(name: String) Optional~TelephoneNumber~\n    }"})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var a=s(67294);let o={},r=a.createContext(o);function t(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);