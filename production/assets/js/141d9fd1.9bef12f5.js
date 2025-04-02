"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2575"],{4330:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/dice-games/dice-game-15","title":"W\xfcrfelspiel 15","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-15.md","sourceDirName":"exam-exercises/exam-exercises-java1/dice-games","slug":"/exam-exercises/exam-exercises-java1/dice-games/dice-game-15","permalink":"/java-docs/production/exam-exercises/exam-exercises-java1/dice-games/dice-game-15","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-15.md","tags":[{"inline":true,"label":"console-applications","permalink":"/java-docs/production/tags/console-applications"},{"inline":true,"label":"oo","permalink":"/java-docs/production/tags/oo"}],"version":"current","frontMatter":{"title":"W\xfcrfelspiel 15","description":"","tags":["console-applications","oo"]},"sidebar":"examExercisesSidebar","previous":{"title":"W\xfcrfelspiel 14","permalink":"/java-docs/production/exam-exercises/exam-exercises-java1/dice-games/dice-game-14"},"next":{"title":"Programmierung 2","permalink":"/java-docs/production/exam-exercises/exam-exercises-java2/"}}'),l=i("85893"),a=i("50065");let r={title:"W\xfcrfelspiel 15",description:"",tags:["console-applications","oo"]},t=void 0,d={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>Dice</em>",id:"hinweise-zur-klasse-dice",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel."}),"\n",(0,l.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,l.jsx)(n.mermaid,{value:"classDiagram\n   MainClass o-- Dice\n   MainClass o-- Player\n   class MainClass {\n      -player: Player$\n      -dices: List~Dice~$\n      -scanner: Scanner$\n      -rounds: int$\n      -points: int$\n      +main(args: String[]) void$\n   }\n   class Dice {\n      -value: int\n      +Dice()\n      +rollTheDice() void\n   }\n   class Player {\n      -name: String #123;final#125;\n      -points: int\n      +Player(name: String, points: int)\n      +setPoints(points: int) void\n   }"}),"\n",(0,l.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,l.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"hinweise-zur-klasse-dice",children:["Hinweise zur Klasse ",(0,l.jsx)(n.em,{children:"Dice"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Der Konstruktor soll den W\xfcrfel werfen"}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"void rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit dem W\xfcrfelwert einen Wert zwischen 1 und 6 zuweisen"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Das Spiel soll aus mehreren Runden bestehen"}),"\n",(0,l.jsx)(n.li,{children:"Zu Beginn des Spiels soll der Spieler seinen Namen, die Anzahl W\xfcrfel sowie\ndie Zielpunktzahl eingeben k\xf6nnen"}),"\n",(0,l.jsx)(n.li,{children:"In jeder Runde sollen zun\xe4chst alle W\xfcrfel geworfen werden"}),"\n",(0,l.jsx)(n.li,{children:"Anschlie\xdfend sollen die erzielten Wurfwerte in der jeweiligen Runde, die\ninsgesamt erzielten Punkte sowie die Punkte pro Wurf in der jeweiligen Runde\nausgegeben werden"}),"\n",(0,l.jsx)(n.li,{children:"Das Spiel soll enden, sobald die Zielpunktzahl erreicht ist"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-console",children:"Bitte gib Deinen Namen ein: Hans\nBitte gib die Anzahl W\xfcrfel ein: 3\nBitte gib die Zielpunktzahl ein: 50\n\nGespielte Runden: 1\nErzielte Punkte in dieser Runde: 8\nErzielte Punkte insgesamt: 8\nErzielte Punkte pro Wurf in dieser Runde: 2.6666666666666665\n\nGespielte Runden: 2\nErzielte Punkte in dieser Runde: 11\nErzielte Punkte insgesamt: 19\nErzielte Punkte pro Wurf in dieser Runde: 3.6666666666666665\n\nGespielte Runden: 3\nErzielte Punkte in dieser Runde: 13\nErzielte Punkte insgesamt: 32\nErzielte Punkte pro Wurf in dieser Runde: 4.333333333333333\n\nGespielte Runden: 4\nErzielte Punkte in dieser Runde: 8\nErzielte Punkte insgesamt: 40\nErzielte Punkte pro Wurf in dieser Runde: 2.6666666666666665\n\nGespielte Runden: 5\nErzielte Punkte in dieser Runde: 15\nErzielte Punkte insgesamt: 55\nErzielte Punkte pro Wurf in dieser Runde: 5.0\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return r}});var s=i(67294);let l={},a=s.createContext(l);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);