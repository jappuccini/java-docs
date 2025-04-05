"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["939"],{6763:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>t});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/dice-games/dice-game-07","title":"W\xfcrfelspiel 7","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-07.md","sourceDirName":"exam-exercises/exam-exercises-java1/dice-games","slug":"/exam-exercises/exam-exercises-java1/dice-games/dice-game-07","permalink":"/java-docs/pr-preview/pr-284/exam-exercises/exam-exercises-java1/dice-games/dice-game-07","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-07.md","tags":[{"inline":true,"label":"console-applications","permalink":"/java-docs/pr-preview/pr-284/tags/console-applications"},{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-284/tags/oo"}],"version":"current","frontMatter":{"title":"W\xfcrfelspiel 7","description":"","tags":["console-applications","oo"]},"sidebar":"examExercisesSidebar","previous":{"title":"W\xfcrfelspiel 6","permalink":"/java-docs/pr-preview/pr-284/exam-exercises/exam-exercises-java1/dice-games/dice-game-06"},"next":{"title":"W\xfcrfelspiel 8","permalink":"/java-docs/pr-preview/pr-284/exam-exercises/exam-exercises-java1/dice-games/dice-game-08"}}'),a=i("85893"),l=i("50065");let r={title:"W\xfcrfelspiel 7",description:"",tags:["console-applications","oo"]},t=void 0,c={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Dice</em>",id:"hinweis-zur-klasse-dice",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel."}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n   MainClass o-- Dice\n   class MainClass {\n      -dices: List~Dice~$\n      -scanner: Scanner$\n      -rounds: int$\n      -points: int$\n      +main(args: String[]) void$\n   }\n   class Dice {\n      +rollTheDice() int\n   }"}),"\n",(0,a.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweis-zur-klasse-dice",children:["Hinweis zur Klasse ",(0,a.jsx)(n.em,{children:"Dice"})]}),"\n",(0,a.jsxs)(n.p,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"int rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit einen Wert zwischen 1 und 6 zur\xfcckgeben."]}),"\n",(0,a.jsx)(n.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Das Spiel soll aus beliebig vielen Runden bestehen"}),"\n",(0,a.jsx)(n.li,{children:"Zu Beginn jeder Runde sollen alle W\xfcrfen geworfen werden"}),"\n",(0,a.jsx)(n.li,{children:"Anschlie\xdfend soll der Spieler eingeben k\xf6nnen, ob der Wurfwert aller W\xfcrfel\ngr\xf6\xdfer 17 ist"}),"\n",(0,a.jsx)(n.li,{children:"F\xfcr einen richtigen Tipp soll der Spieler einen Punkt bekommen"}),"\n",(0,a.jsx)(n.li,{children:"Am Ende des Spiels soll die Anzahl der Runden sowie die Anzahl Punkte\nausgegeben werden"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"Wurf groesser 17?: false\nRichtig, der Wurf war 15\nNochmal?: true\n\nWurf groesser 17?: true\nFalsch, der Wurf war 14\nNochmal?: false\n\nRunden: 2 Punkte: 1\n"})})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return r}});var s=i(67294);let a={},l=s.createContext(a);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);