"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7596"],{96253:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>t,metadata:()=>a,assets:()=>d,toc:()=>o,contentTitle:()=>l});var a=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/player","title":"Kartenspieler","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/player.md","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/player","permalink":"/java-docs/pr-preview/pr-264/exam-exercises/exam-exercises-java2/class-diagrams/player","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/player.md","tags":[{"inline":true,"label":"exceptions","permalink":"/java-docs/pr-preview/pr-264/tags/exceptions"},{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-264/tags/records"},{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-264/tags/maps"},{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-264/tags/optionals"}],"version":"current","frontMatter":{"title":"Kartenspieler","description":"","tags":["exceptions","records","maps","optionals"]},"sidebar":"examExercisesSidebar","previous":{"title":"Bibliothek","permalink":"/java-docs/pr-preview/pr-264/exam-exercises/exam-exercises-java2/class-diagrams/library"},"next":{"title":"Einkaufsportal","permalink":"/java-docs/pr-preview/pr-264/exam-exercises/exam-exercises-java2/class-diagrams/shopping-portal"}}'),i=s("85893"),r=s("50065");let t={title:"Kartenspieler",description:"",tags:["exceptions","records","maps","optionals"]},l=void 0,d={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Player</em>",id:"hinweis-zur-klasse-player",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n\n    Player o-- Card\n\n    class Card {\n        <<record>>\n        description: String\n        costs: int\n        power: int\n    }\n\n    class Player {\n        -name: String #123;final#125;\n        -handCards: List~Card~ #123;final#125;\n        -playedCards: Map~Card, Integer~ #123;final#125;\n        -actionPoints: int\n        +Player(name: String, handCards: List~Card~, playedCards: Map~Card, Integer~)\n        +getActionPoints() int\n        +getHandCards() List~Card~\n        +getName() String\n        +getPlayedCards() Map~Card, Integer~\n        +getMostPowerfulCardByRow(row: int) Optional~Card~\n        +playCard(card: Card, row: int) void\n        +setActionPoints(int: actionPoints) void\n    }"}),"\n",(0,i.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,i.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweis-zur-klasse-player",children:["Hinweis zur Klasse ",(0,i.jsx)(n.em,{children:"Player"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Die Schl\xfcssel-Werte-Paare des Assoziativspeichers beinhalten als Schl\xfcssel die\nausgespielten Karten des Spielers sowie als Wert deren Reihe"}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void playCard(card: Card, row: int)"})," soll die eingehende Karte\nausspielen. Beim Ausspielen einer Karte soll diese aus den Handkarten entfernt\nund den ausgespielten Karten hinzugef\xfcgt werden. Zudem sollen die\nAktionspunkte des Spielers um die Kosten der Karte reduziert werden. F\xfcr den\nFall, dass die Karte nicht Teil der Handkarten ist, soll die Ausnahme\n",(0,i.jsx)(n.code,{children:"CardNotFoundException"})," ausgel\xf6st werden und f\xfcr den Fall, dass die\nAktionspunkte des Spielers nicht ausreichen, die Ausnahme\n",(0,i.jsx)(n.code,{children:"NotEnoughActionPointsException"})]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"Optional<Card> getMostPowerfulCardByRow(row: int)"})," soll die\nst\xe4rkste ausgespielte Karte der eingehenden Reihe zur\xfcckgeben"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var a=s(67294);let i={},r=a.createContext(i);function t(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);