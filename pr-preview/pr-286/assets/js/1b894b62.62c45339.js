"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8582"],{43250:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>t});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/dice-games/dice-game-03","title":"W\xfcrfelspiel 3","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-03.md","sourceDirName":"exam-exercises/exam-exercises-java1/dice-games","slug":"/exam-exercises/exam-exercises-java1/dice-games/dice-game-03","permalink":"/java-docs/pr-preview/pr-286/exam-exercises/exam-exercises-java1/dice-games/dice-game-03","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-03.md","tags":[{"inline":true,"label":"console-applications","permalink":"/java-docs/pr-preview/pr-286/tags/console-applications"},{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-286/tags/oo"}],"version":"current","frontMatter":{"title":"W\xfcrfelspiel 3","description":"","tags":["console-applications","oo"]},"sidebar":"examExercisesSidebar","previous":{"title":"W\xfcrfelspiel 2","permalink":"/java-docs/pr-preview/pr-286/exam-exercises/exam-exercises-java1/dice-games/dice-game-02"},"next":{"title":"W\xfcrfelspiel 4","permalink":"/java-docs/pr-preview/pr-286/exam-exercises/exam-exercises-java1/dice-games/dice-game-04"}}'),l=i("85893"),a=i("50065");let r={title:"W\xfcrfelspiel 3",description:"",tags:["console-applications","oo"]},t=void 0,c={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Dice</em>",id:"hinweis-zur-klasse-dice",level:2},{value:"Hinweis zur Klasse <em>Player</em>",id:"hinweis-zur-klasse-player",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel."}),"\n",(0,l.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,l.jsx)(n.mermaid,{value:"classDiagram\n   MainClass o-- Player\n   Player o-- Dice\n   class MainClass {\n      -player1: Player$\n      -player2: Player$\n      -scanner: Scanner$\n      +main(args: String[]) void$\n   }\n   class Player {\n      -name: String #123;final#125;\n      -dice: Dice #123;final#125;\n      -healthPoints: int\n      +Player(name: String)\n      +rollTheDice() int\n      +reduceHealthPoints(points: int) void\n   }\n   class Dice {\n      +rollTheDice() int\n   }"}),"\n",(0,l.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,l.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"hinweis-zur-klasse-dice",children:["Hinweis zur Klasse ",(0,l.jsx)(n.em,{children:"Dice"})]}),"\n",(0,l.jsxs)(n.p,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"int rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit einen Wert zwischen 1 und 6 zur\xfcckgeben."]}),"\n",(0,l.jsxs)(n.h2,{id:"hinweis-zur-klasse-player",children:["Hinweis zur Klasse ",(0,l.jsx)(n.em,{children:"Player"})]}),"\n",(0,l.jsx)(n.p,{children:"Der Konstruktor soll alle Attribute initialisieren und die Lebenspunkte auf den\nWert 10 setzen."}),"\n",(0,l.jsx)(n.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Zu Beginn des Spiels sollen die Spieler ihre Namen eingeben k\xf6nnen"}),"\n",(0,l.jsx)(n.li,{children:"Beide Spieler sollen zu Beginn des Spiels 10 Lebenspunkte besitzen"}),"\n",(0,l.jsx)(n.li,{children:"Zu Beginn einer jeder Runde soll der aktuelle Punktestand ausgegeben werden"}),"\n",(0,l.jsx)(n.li,{children:"Anschlie\xdfend sollen beide Spieler ihre W\xfcrfel werfen"}),"\n",(0,l.jsx)(n.li,{children:"Der Spieler mit dem niedrigeren Wurfwert soll einen Lebenspunkt verlieren, bei\nGleichstand soll keiner der Spieler einen Lebenspunkt verlieren"}),"\n",(0,l.jsx)(n.li,{children:"Das Spiel soll Enden, sobald ein Spieler keine Lebenspunkte mehr besitzt"}),"\n",(0,l.jsx)(n.li,{children:"Am Ende soll der Gewinner des Spiels ausgegeben werden"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-console",children:"Spieler 1, gib bitte Deinen Namen ein: Hans\nSpieler 2, gib bitte Deinen Namen ein: Peter\n\nHans hat 10 Lebenspunkte\nPeter hat 10 Lebenspunkte\nHans w\xfcrfelt eine 6\nPeter w\xfcrfelt eine 6\n...\nHans hat 4 Lebenspunkte\nPeter hat 1 Lebenspunkte\nHans w\xfcrfelt eine 5\nPeter w\xfcrfelt eine 1\nPeter verliert einen Punkt\n\nHans gewinnt\n"})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return r}});var s=i(67294);let l={},a=s.createContext(l);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);