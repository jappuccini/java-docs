"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["3954"],{78567:function(e,a,r){r.r(a),r.d(a,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>t,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/class-diagrams/cards-dealer","title":"Kartenausteiler","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/class-diagrams/cards-dealer.md","sourceDirName":"exam-exercises/exam-exercises-java1/class-diagrams","slug":"/exam-exercises/exam-exercises-java1/class-diagrams/cards-dealer","permalink":"/java-docs/pr-preview/pr-273/exam-exercises/exam-exercises-java1/class-diagrams/cards-dealer","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/class-diagrams/cards-dealer.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-273/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-273/tags/enumerations"},{"inline":true,"label":"io-streams","permalink":"/java-docs/pr-preview/pr-273/tags/io-streams"}],"version":"current","frontMatter":{"title":"Kartenausteiler","description":"","tags":["oo","enumerations","io-streams"]},"sidebar":"examExercisesSidebar","previous":{"title":"Klassendiagramme","permalink":"/java-docs/pr-preview/pr-273/exam-exercises/exam-exercises-java1/class-diagrams/"},"next":{"title":"Kassensystem","permalink":"/java-docs/pr-preview/pr-273/exam-exercises/exam-exercises-java1/class-diagrams/cashier-system"}}'),n=r("85893"),i=r("50065");let l={title:"Kartenausteiler",description:"",tags:["oo","enumerations","io-streams"]},d=void 0,t={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>Player</em>",id:"hinweise-zur-klasse-player",level:2},{value:"Hinweis zur Klasse <em>CardsDealer</em>",id:"hinweis-zur-klasse-cardsdealer",level:2},{value:"Hinweis zur Klasse <em>CardsReader</em>",id:"hinweis-zur-klasse-cardsreader",level:2},{value:"Beispielhafter Aufbau der Kartendatei",id:"beispielhafter-aufbau-der-kartendatei",level:2}];function o(e){let a={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,n.jsx)(a.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,n.jsx)(a.mermaid,{value:"classDiagram\n    CardDealer o-- Player\n    CardDealer o-- Card\n    Player o-- Card\n\n    class Player {\n        -cards: List~Card~ #123;final#125;\n        +Player()\n        +addCard(card: Card) void\n        +getCardWithHighestValue() Card\n        +getCardsByColour(colour: String) List~Card~\n    }\n\n    class CardDealer {\n        -deck: List~Card~ #123;final#125;\n        -player1: Player #123;final#125;\n        -player2: Player #123;final#125;\n        +CardsDealer(deck: List~Card~, player1: Player, player2: Player )\n        +dealCards(amount: int) void\n    }\n\n    class Card {\n        -colour: String #123;final#125;\n        -value: int #123;final#125;\n        +Card(colour: String, value: int)\n    }\n\n    class CardsReader {\n        +getCards(file: File) List~Card~\n    }"}),"\n",(0,n.jsx)(a.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,n.jsx)(a.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,n.jsxs)(a.h2,{id:"hinweise-zur-klasse-player",children:["Hinweise zur Klasse ",(0,n.jsx)(a.em,{children:"Player"})]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Die Methode ",(0,n.jsx)(a.code,{children:"void addCard(card: Card)"})," soll dem Spieler die eingehende Karte\nhinzuf\xfcgen"]}),"\n",(0,n.jsxs)(a.li,{children:["Die Methode ",(0,n.jsx)(a.code,{children:"List<Card> getCardsByColour(colour: String)"})," soll alle Karten des\nSpielers zur eingehenden Farbe zur\xfcckgeben"]}),"\n",(0,n.jsxs)(a.li,{children:["Die Methode ",(0,n.jsx)(a.code,{children:"Card getCardWithHighestValue()"})," soll die Karte des Spielers mit\ndem h\xf6chsten Wert zur\xfcckgeben"]}),"\n"]}),"\n",(0,n.jsxs)(a.h2,{id:"hinweis-zur-klasse-cardsdealer",children:["Hinweis zur Klasse ",(0,n.jsx)(a.em,{children:"CardsDealer"})]}),"\n",(0,n.jsxs)(a.p,{children:["Die Methode ",(0,n.jsx)(a.code,{children:"void dealCards(amount: int)"})," soll den beiden Spielern die\neingehende Anzahl an zuf\xe4lligen Karten des Decks austeilen"]}),"\n",(0,n.jsxs)(a.h2,{id:"hinweis-zur-klasse-cardsreader",children:["Hinweis zur Klasse ",(0,n.jsx)(a.em,{children:"CardsReader"})]}),"\n",(0,n.jsxs)(a.p,{children:["Die Methode ",(0,n.jsx)(a.code,{children:"List<Card> getCards(file: File)"})," soll alle Karten der eingehenden\nDatei zur\xfcckgeben."]}),"\n",(0,n.jsx)(a.h2,{id:"beispielhafter-aufbau-der-kartendatei",children:"Beispielhafter Aufbau der Kartendatei"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Karo;1\nKaro;2\nKaro;3\nKaro;4\nKaro;5\nHerz;1\nHerz;2\nHerz;3\nHerz;4\nHerz;5\nPik;1\nPik;2\nPik;3\nPik;4\nPik;5\nKreuz;1\nKreuz;2\nKreuz;3\nKreuz;4\nKreuz;5\n"})})]})}function u(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,a,r){r.d(a,{Z:function(){return d},a:function(){return l}});var s=r(67294);let n={},i=s.createContext(n);function l(e){let a=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);