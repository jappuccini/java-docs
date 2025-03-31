"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9210"],{16356:function(e,n,o){o.r(n),o.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"exercises/optionals/optionals01","title":"Optionals01","description":"","source":"@site/docs/exercises/optionals/optionals01.md","sourceDirName":"exercises/optionals","slug":"/exercises/optionals/optionals01","permalink":"/java-docs/pr-preview/pr-277/exercises/optionals/optionals01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/optionals/optionals01.md","tags":[],"version":"current","frontMatter":{"title":"Optionals01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Optionals","permalink":"/java-docs/pr-preview/pr-277/exercises/optionals/"},"next":{"title":"Optionals02","permalink":"/java-docs/pr-preview/pr-277/exercises/optionals/optionals02"}}'),t=o("85893"),a=o("50065");let i={title:"Optionals01",description:""},r=void 0,l={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Passe die Klasse ",(0,t.jsx)(n.code,{children:"BookCollection"})," aus \xdcbungsaufgabe ",(0,t.jsx)(n.a,{href:"../maps/maps02",children:"Maps02"}),"\nanhand des abgebildeten Klassendiagramms an"]}),"\n",(0,t.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,t.jsx)(n.a,{href:"../maps/maps02",children:"Maps02"})," so an,\ndass entweder die gefundenen Werte oder alternativ entsprechende Meldungen\nausgegeben werden"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,t.jsx)(n.mermaid,{value:"classDiagram\n    BookCollection o-- Author\n    BookCollection o-- Book\n\n    class Author {\n        <<record>>\n        name: String\n    }\n\n    class Book {\n        <<record>>\n        title: String\n    }\n\n    class BookCollection {\n        <<record>>\n        collection Map~Author&sbquo; List~Book~~\n        +addAuthor(author: Author) void\n        +addBook(author: Author, book: Book) void\n        +getMostDiligentAuthor() Optional~Author~\n        +getBookByTitle(title: String) Optional~Book~\n    }"})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return i}});var s=o(67294);let t={},a=s.createContext(t);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);