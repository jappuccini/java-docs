"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2549"],{82457:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/dice-games/dice-game-09","title":"W\xfcrfelspiel 9","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-09.md","sourceDirName":"exam-exercises/exam-exercises-java1/dice-games","slug":"/exam-exercises/exam-exercises-java1/dice-games/dice-game-09","permalink":"/java-docs/pr-preview/pr-287/exam-exercises/exam-exercises-java1/dice-games/dice-game-09","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-09.md","tags":[{"inline":true,"label":"console-applications","permalink":"/java-docs/pr-preview/pr-287/tags/console-applications"},{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-287/tags/oo"}],"version":"current","frontMatter":{"title":"W\xfcrfelspiel 9","description":"","tags":["console-applications","oo"]},"sidebar":"examExercisesSidebar","previous":{"title":"W\xfcrfelspiel 8","permalink":"/java-docs/pr-preview/pr-287/exam-exercises/exam-exercises-java1/dice-games/dice-game-08"},"next":{"title":"W\xfcrfelspiel 10","permalink":"/java-docs/pr-preview/pr-287/exam-exercises/exam-exercises-java1/dice-games/dice-game-10"}}'),r=i("85893"),a=i("50065");let l={title:"W\xfcrfelspiel 9",description:"",tags:["console-applications","oo"]},t=void 0,o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>ColourDice</em>",id:"hinweis-zur-klasse-colourdice",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel."}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n   MainClass o-- Player\n   MainClass o-- ColourDice\n   class MainClass {\n      -scanner: Scanner$\n      -player1: Player$\n      -player2: Player$\n      -rounds: int$\n      -dice: ColourDice$\n      +main(args: String[]) void$\n   }\n   class Player {\n      -name: String #123;final#125;\n      -points: int\n      +Player(name: String)\n      +setPoints(points: int) void\n   }\n   class ColourDice {\n      +rollTheDice() Colour\n   }\n   class Colour {\n      <<enumeration>>\n      CLUBS = Kreuz, 1\n      SPADE = Pik, 2\n      HEARTS = Herz, 3\n      DIAMONDS = Karo, 4\n      -description: String #123;final#125;\n      -priority: int #123;final#125;\n   }"}),"\n",(0,r.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweis-zur-klasse-colourdice",children:["Hinweis zur Klasse ",(0,r.jsx)(n.em,{children:"ColourDice"})]}),"\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"Colour rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit eine Farbe (Kreuz, Pik, Herz oder Karo) zur\xfcckgeben."]}),"\n",(0,r.jsx)(n.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Das Spiel soll aus mehreren Runden bestehen"}),"\n",(0,r.jsx)(n.li,{children:"Zu Beginn des Spiels sollen beide Spieler ihre Namen sowie die Anzahl Runden\neingeben k\xf6nnen"}),"\n",(0,r.jsx)(n.li,{children:"Zu Beginn jeder Runde sollen beide Spieler abwechselnd den W\xfcrfel werfen"}),"\n",(0,r.jsx)(n.li,{children:"Anschlie\xdfend soll der Spieler, dessen gew\xfcrfelte Farbe den niedrigeren\nPriorit\xe4twert besitzt, einen Punkt bekommen"}),"\n",(0,r.jsx)(n.li,{children:"Erw\xfcrfeln beide Spieler die gleiche Farbe, soll keiner der Spieler einen Punkt\nbekommen"}),"\n",(0,r.jsx)(n.li,{children:"Am Ende des Spiels sollen die Punkte beider Spieler ausgegeben werden"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"Bitte den Namen von Spieler 1 eingeben: Hans\nBitte den Namen von Spieler 2 eingeben: Peter\nBitte die Anzahl Runden eingeben: 3\n\nRunde: 1\nHans w\xfcrfelt Pik\nPeter w\xfcrfelt Herz\nHans erzielt einen Punkt\n\nRunde: 2\nHans w\xfcrfelt Kreuz\nPeter w\xfcrfelt Kreuz\nKeiner erzielt einen Punkt\n\nRunde: 3\nHans w\xfcrfelt Herz\nPeter w\xfcrfelt Kreuz\nPeter erzielt einen Punkt\n\nPunktzahl Hans: 1\nPunktzahl Peter: 1\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return l}});var s=i(67294);let r={},a=s.createContext(r);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);