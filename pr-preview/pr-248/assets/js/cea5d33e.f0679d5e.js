"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["3722"],{61807:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/class-diagrams/gift-bag","title":"Geschenkesack","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/class-diagrams/gift-bag.md","sourceDirName":"exam-exercises/exam-exercises-java1/class-diagrams","slug":"/exam-exercises/exam-exercises-java1/class-diagrams/gift-bag","permalink":"/java-docs/pr-preview/pr-248/exam-exercises/exam-exercises-java1/class-diagrams/gift-bag","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/class-diagrams/gift-bag.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-248/tags/oo"}],"version":"current","frontMatter":{"title":"Geschenkesack","description":"","tags":["oo"]},"sidebar":"examExercisesSidebar","previous":{"title":"Fast Food","permalink":"/java-docs/pr-preview/pr-248/exam-exercises/exam-exercises-java1/class-diagrams/fast-food"},"next":{"title":"Tiefgarage","permalink":"/java-docs/pr-preview/pr-248/exam-exercises/exam-exercises-java1/class-diagrams/parking-garage"}}'),i=n("85893"),r=n("50065");let t={title:"Geschenkesack",description:"",tags:["oo"]},l=void 0,c={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>GiftBag</em>",id:"hinweise-zur-klasse-giftbag",level:2}];function o(e){let s={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,i.jsx)(s.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(s.mermaid,{value:"classDiagram\n    GiftBag o-- Present\n    Present o-- Person\n\n    class GiftBag {\n        -presents: List~Present~ #123;final#125;\n        +GiftBag()\n        +addPresent(present: Present) void\n        +getMostExpensivePresent() Present\n    }\n\n    class Present {\n        -description: String #123;final#125;\n        -priceInEuro: double #123;final#125;\n        -sender: Person #123;final#125;\n        -recipient: Person #123;final#125;\n        +Present(description: String, priceInEuro: double, sender: Person, recipient: Person)\n    }\n\n    class Person {\n        -name: String #123;final#125;\n        -age: int #123;final#125;\n        -gender: char #123;final#125;\n        +Player(name: String, age: int, gender: char )\n    }"}),"\n",(0,i.jsx)(s.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,i.jsx)(s.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,i.jsxs)(s.h2,{id:"hinweise-zur-klasse-giftbag",children:["Hinweise zur Klasse ",(0,i.jsx)(s.em,{children:"GiftBag"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Die Methode ",(0,i.jsx)(s.code,{children:"void addPresent(present: present)"})," soll der Geschenkeliste\n(",(0,i.jsx)(s.code,{children:"presents"}),") das eingehende Geschenk hinzuf\xfcgen"]}),"\n",(0,i.jsxs)(s.li,{children:["Die Methode ",(0,i.jsx)(s.code,{children:"Present getMostExpensivePresent()"})," soll das teuerste Geschenk\nzur\xfcckgeben"]}),"\n"]})]})}function m(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return t}});var a=n(67294);let i={},r=a.createContext(i);function t(e){let s=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);