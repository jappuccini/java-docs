"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2229"],{9966:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>c,assets:()=>d,toc:()=>l,frontMatter:()=>a});var r=JSON.parse('{"id":"documentation/oo","title":"Objektorientierte Programmierung","description":"","source":"@site/docs/documentation/oo.md","sourceDirName":"documentation","slug":"/documentation/oo","permalink":"/java-docs/pr-preview/pr-237/documentation/oo","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/oo.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-237/tags/oo"}],"version":"current","sidebarPosition":130,"frontMatter":{"title":"Objektorientierte Programmierung","description":"","sidebar_position":130,"tags":["oo"]},"sidebar":"documentationSidebar","previous":{"title":"Feldbasierte Listen (ArrayLists)","permalink":"/java-docs/pr-preview/pr-237/documentation/array-lists"},"next":{"title":"Klassen","permalink":"/java-docs/pr-preview/pr-237/documentation/classes"}}'),i=t("85893"),s=t("50065");let a={title:"Objektorientierte Programmierung",description:"",sidebar_position:130,tags:["oo"]},o=void 0,d={},l=[{value:"Datenkapselung",id:"datenkapselung",level:2},{value:"Abstraktion",id:"abstraktion",level:2}];function u(e){let n={em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Die reale Welt besteht aus Objekten mit individuellen Eigenschaften und\nindividuellem Verhalten. F\xfcr ein einfacheres Verst\xe4ndnis werden Objekte\nkategorisiert, also zu sinnhaften Einheiten verbunden. In der objektorientierten\nProgrammierung werden Beobachtungen aus der realen Welt zum Konzept der\nObjektorientierung zusammengefasst:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Eine Kategorie von \xe4hnlichen Objekten bezeichnet man als ",(0,i.jsx)(n.em,{children:"Klasse"})]}),"\n",(0,i.jsxs)(n.li,{children:["Konkrete Auspr\xe4gungen bzw. Instanzen einer Klasse werden wiederum als\n",(0,i.jsx)(n.em,{children:"Objekte"})," bezeichnet"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Eigenschaften von Objekten werden als ",(0,i.jsx)(n.em,{children:"Attribute"})," das Verhalten als\n",(0,i.jsx)(n.em,{children:"Methoden"})," bezeichnet"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"datenkapselung",children:"Datenkapselung"}),"\n",(0,i.jsx)(n.p,{children:"Ein wesentlicher Grundsatz der Objektorientierung ist, dass Attribute durch\nMethoden gekapselt werden. Datenkapselung bedeutet, dass auf Attribute nicht\ndirekt zugegriffen werden kann, sondern nur indirekt \xfcber Methoden. Typische\nMethoden zum Lesen und Schreiben von Attributen sind die sogenannten Getter bzw.\nSetter (auch Set- und Get-Methoden bzw. Accessors genannt)."}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart LR\n    subgraph Klasse\n        direction LR\n        subgraph privater Bereich\n            attribut1((Attribut 1))\n            attribut2((Attribut 2))\n        end\n        subgraph \xf6ffentlicher Bereich\n            setter1(Setter f\xfcr Attribut 1) -.-> attribut1\n            setter2(Setter f\xfcr Attribut 2) -.-> attribut2\n        end\n        subgraph \xf6ffentlicher Bereich\n            attribut1 -.-> getter1(Getter f\xfcr Attribut 1)\n            attribut2 -.-> getter2(Getter f\xfcr Attribut 2)\n        end\n    end"}),"\n",(0,i.jsx)(n.h2,{id:"abstraktion",children:"Abstraktion"}),"\n",(0,i.jsx)(n.p,{children:"Abstraktion bedeutet das Zerlegen von komplexen Systeme in kleinere,\n\xfcberschaubare Einheiten, indem der Fokus auf die wesentlichen Eigenschaften und\ndas wesentliche Verhalten gesetzt und unwichtige Details ausgeblendet werden.\nDies bringt einige Vorteile wie bessere Wiederverwendbarkeit, bessere\nWartbarkeit sowie bessere Lesbarkeit mit sich. In der Objektorientierten\nProgrammierung erfolgt die Abstraktion durch den Einsatz von (abstrakten)\nKlassen bzw. Schnittstellen (Interfaces)."}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart LR\n    a[**Mainboard**: Hersteller, Modell, UPE, Format, Chipsatz,...\n      **CPU**: Hersteller, Modell, Sockel, UPE, Kerne, L1-Cache,...\n      **Arbeitsspeicher**: Hersteller, Modell, UPE, Speichergr\xf6\xdfe, Speichergeschwindigkeit,...\n      **Geh\xe4use**: Hersteller, Modell, UPE,...\n      **...**]\n    subgraph Klassen\n        computer(**Computer**\n                 cpu: CPU\n                 memoryInGB: int)\n        cpu(**CPU**\n            powerInGHz: double\n            numberOfCores: int)\n    end\n    a --\x3e Klassen"})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var r=t(67294);let i={},s=r.createContext(i);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);