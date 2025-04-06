"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8256"],{36455:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>t});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/dice-games/dice-game-01","title":"W\xfcrfelspiel 1","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-01.md","sourceDirName":"exam-exercises/exam-exercises-java1/dice-games","slug":"/exam-exercises/exam-exercises-java1/dice-games/dice-game-01","permalink":"/java-docs/pr-preview/pr-285/exam-exercises/exam-exercises-java1/dice-games/dice-game-01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-01.md","tags":[{"inline":true,"label":"console-applications","permalink":"/java-docs/pr-preview/pr-285/tags/console-applications"},{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-285/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-285/tags/enumerations"}],"version":"current","frontMatter":{"title":"W\xfcrfelspiel 1","description":"","tags":["console-applications","oo","enumerations"]},"sidebar":"examExercisesSidebar","previous":{"title":"W\xfcrfelspiele","permalink":"/java-docs/pr-preview/pr-285/exam-exercises/exam-exercises-java1/dice-games/"},"next":{"title":"W\xfcrfelspiel 2","permalink":"/java-docs/pr-preview/pr-285/exam-exercises/exam-exercises-java1/dice-games/dice-game-02"}}'),a=i("85893"),l=i("50065");let r={title:"W\xfcrfelspiel 1",description:"",tags:["console-applications","oo","enumerations"]},t=void 0,d={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>WeaponDice</em>",id:"hinweise-zur-klasse-weapondice",level:2},{value:"Hinweis zur Klasse <em>Player</em>",id:"hinweis-zur-klasse-player",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel."}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n   WeaponDice o-- Weapon\n   MainClass o-- Player\n   MainClass o-- WeaponDice\n   class MainClass {\n      -player1: Player$\n      -player2: Player$\n      -scanner: Scanner$\n      -weaponDice: WeaponDice$\n      +main(args: String[]) void$\n   }\n   class Player {\n      -name: String #123;final#125;\n      -points: int\n      +Player(name: String, points: int)\n      +reducePoints(value: int) void\n   }\n   class WeaponDice {\n      -weapon: Weapon\n      +WeaponDice()\n      +rollTheDice() void\n   }\n   class Weapon {\n      <<enumeration>>\n      SWORD = Schwert, 4\n      SPEAR = Speer, 2\n      AXE = Axt, 3\n      CLUB = Keule, 1\n      -description: String #123;final#125;\n      -power: int #123;final#125;\n   }"}),"\n",(0,a.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweise-zur-klasse-weapondice",children:["Hinweise zur Klasse ",(0,a.jsx)(n.em,{children:"WeaponDice"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Der Konstruktor soll den W\xfcrfel werfen"}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit dem Waffen-Symbol einen Wert zuweisen"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweis-zur-klasse-player",children:["Hinweis zur Klasse ",(0,a.jsx)(n.em,{children:"Player"})]}),"\n",(0,a.jsxs)(n.p,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void reducePoints(points: int)"})," soll die Punkte des Spielers um die\neingehenden Punkte reduzieren."]}),"\n",(0,a.jsx)(n.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Zu Beginn des Spiels sollen die Spieler ihre Namen eingeben k\xf6nnen"}),"\n",(0,a.jsx)(n.li,{children:"Jeder Spieler soll zu Beginn des Spiels 10 Punkte besitzen"}),"\n",(0,a.jsx)(n.li,{children:"Zu Beginn jeder Runde soll der aktuelle Punktestand f\xfcr beide Spieler\nausgegeben werden"}),"\n",(0,a.jsx)(n.li,{children:"Anschlie\xdfend sollen beide Spieler abwechselnd den W\xfcrfel werfen"}),"\n",(0,a.jsx)(n.li,{children:"Der Spieler mit dem niedrigeren Wurfwert (St\xe4rke des gew\xfcrfelten\nWaffensymbols) soll Punkte in H\xf6he der Differenz der beiden Wurfwerte\nverlieren"}),"\n",(0,a.jsx)(n.li,{children:"Das Spiel soll Enden, sobald ein Spieler keine Punkte mehr besitzt"}),"\n",(0,a.jsx)(n.li,{children:"Am Ende soll der Gewinner des Spiels ausgegeben werden"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"Spieler 1, gib bitte Deinen Namen ein: Lisa\nSpieler 2, gib bitte Deinen Namen ein: Hans\n\nPunkte Lisa: 10\nPunkte Hans: 10\nWaffen-Symbol Lisa: Schwert\nWaffen-Symbol Hans: Speer\nPunkte Hans: 8\n...\nPunkte Lisa: 1\nPunkte Hans: 5\nWaffen-Symbol Lisa: Keule\nWaffen-Symbol Hans: Speer\nPunkte Lisa: 0\n\nHans gewinnt\n"})})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return r}});var s=i(67294);let a={},l=s.createContext(a);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);