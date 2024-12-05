"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8766"],{34071:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"exercises/optionals/optionals03","title":"Optionals03","description":"","source":"@site/docs/exercises/optionals/optionals03.md","sourceDirName":"exercises/optionals","slug":"/exercises/optionals/optionals03","permalink":"/java-docs/pr-preview/pr-235/exercises/optionals/optionals03","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/optionals/optionals03.md","tags":[],"version":"current","frontMatter":{"title":"Optionals03","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Optionals02","permalink":"/java-docs/pr-preview/pr-235/exercises/optionals/optionals02"},"next":{"title":"Die Java Stream API","permalink":"/java-docs/pr-preview/pr-235/exercises/java-stream-api/"}}'),a=s("85893"),i=s("50065");let r={title:"Optionals03",description:""},o=void 0,l={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Passe die Klasse ",(0,a.jsx)(n.code,{children:"Crate"})," aus \xdcbungsaufgabe\n",(0,a.jsx)(n.a,{href:"../generics/generics02",children:"Generics02"})," anhand des abgebildeten Klassendiagramms\nan"]}),"\n",(0,a.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,a.jsx)(n.a,{href:"../generics/generics02",children:"Generics02"})," so an, dass entweder die gefundenen Werte\noder alternativ entsprechende Meldungen ausgegeben werden"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n    Bottle <|-- BeerBottle : extends\n    Bottle <|-- WineBottle : extends\n\n    class Crate~T extends Bottle~ {\n        -box1: T\n        -box2: T\n        -box3: T\n        -box4: T\n        -box5: T\n        -box6: T\n        +insertBottle(bottle: T, box: int) void\n        +takeBottle(box: int) Optional~T~\n    }\n\n    class Bottle {\n        <<abstract>>\n    }\n\n    class BeerBottle {\n        +chugALug() void\n    }\n\n    class WineBottle {\n\n    }"})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return r}});var t=s(67294);let a={},i=t.createContext(a);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);