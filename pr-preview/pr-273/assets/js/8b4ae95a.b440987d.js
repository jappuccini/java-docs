"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1178"],{77534:function(e,i,n){n.r(i),n.d(i,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>t});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/dice-games/dice-game-05","title":"W\xfcrfelspiel 5","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-05.md","sourceDirName":"exam-exercises/exam-exercises-java1/dice-games","slug":"/exam-exercises/exam-exercises-java1/dice-games/dice-game-05","permalink":"/java-docs/pr-preview/pr-273/exam-exercises/exam-exercises-java1/dice-games/dice-game-05","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-05.md","tags":[{"inline":true,"label":"console-applications","permalink":"/java-docs/pr-preview/pr-273/tags/console-applications"},{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-273/tags/oo"}],"version":"current","frontMatter":{"title":"W\xfcrfelspiel 5","description":"","tags":["console-applications","oo"]},"sidebar":"examExercisesSidebar","previous":{"title":"W\xfcrfelspiel 4","permalink":"/java-docs/pr-preview/pr-273/exam-exercises/exam-exercises-java1/dice-games/dice-game-04"},"next":{"title":"W\xfcrfelspiel 6","permalink":"/java-docs/pr-preview/pr-273/exam-exercises/exam-exercises-java1/dice-games/dice-game-06"}}'),a=n("85893"),l=n("50065");let r={title:"W\xfcrfelspiel 5",description:"",tags:["console-applications","oo"]},t=void 0,c={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Dice</em>",id:"hinweis-zur-klasse-dice",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function o(e){let i={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel."}),"\n",(0,a.jsx)(i.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(i.mermaid,{value:"classDiagram\n   MainClass o-- Player\n   MainClass o-- Dice\n   class MainClass {\n      -dice1: Dice$\n      -dice2: Dice$\n      -players: List~Player~$\n      -rounds: int$\n      +main(args: String[]) void$\n   }\n   class Player {\n      -score: int\n      +setScore(score: int) void\n   }\n   class Dice {\n      +rollTheDice() int\n   }"}),"\n",(0,a.jsx)(i.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(i.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,a.jsxs)(i.h2,{id:"hinweis-zur-klasse-dice",children:["Hinweis zur Klasse ",(0,a.jsx)(i.em,{children:"Dice"})]}),"\n",(0,a.jsxs)(i.p,{children:["Die Methode ",(0,a.jsx)(i.code,{children:"int rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit einen Wert zwischen 1 und 6 zur\xfcckgeben."]}),"\n",(0,a.jsx)(i.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,a.jsx)(i.p,{children:"Zwei Spieler sollen abwechselnd solange zwei W\xfcrfel werfen, bis einer der beiden\nSpieler 50 oder mehr Punkte besitzt."}),"\n",(0,a.jsx)(i.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-console",children:"| Runde | Spieler 1 | Spieler 2 |\n| ----- | --------- | --------- |\n|     1 |         8 |         2 |\n|     2 |        14 |         8 |\n|     3 |        20 |        10 |\n|     4 |        26 |        19 |\n|     5 |        35 |        29 |\n|     6 |        42 |        37 |\n|     7 |        48 |        45 |\n|     8 |        50 |        49 |\n"})})]})}function m(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return t},a:function(){return r}});var s=n(67294);let a={},l=s.createContext(a);function r(e){let i=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);