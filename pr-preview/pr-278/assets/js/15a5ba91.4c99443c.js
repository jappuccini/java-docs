"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6959"],{49350:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>l,assets:()=>t,toc:()=>c,contentTitle:()=>d});var l=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/dice-games/dice-game-10","title":"W\xfcrfelspiel 10","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-10.md","sourceDirName":"exam-exercises/exam-exercises-java1/dice-games","slug":"/exam-exercises/exam-exercises-java1/dice-games/dice-game-10","permalink":"/java-docs/pr-preview/pr-278/exam-exercises/exam-exercises-java1/dice-games/dice-game-10","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-10.md","tags":[{"inline":true,"label":"console-applications","permalink":"/java-docs/pr-preview/pr-278/tags/console-applications"},{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-278/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-278/tags/enumerations"}],"version":"current","frontMatter":{"title":"W\xfcrfelspiel 10","description":"","tags":["console-applications","oo","enumerations"]},"sidebar":"examExercisesSidebar","previous":{"title":"W\xfcrfelspiel 9","permalink":"/java-docs/pr-preview/pr-278/exam-exercises/exam-exercises-java1/dice-games/dice-game-09"},"next":{"title":"W\xfcrfelspiel 11","permalink":"/java-docs/pr-preview/pr-278/exam-exercises/exam-exercises-java1/dice-games/dice-game-11"}}'),s=i("85893"),r=i("50065");let a={title:"W\xfcrfelspiel 10",description:"",tags:["console-applications","oo","enumerations"]},d=void 0,t={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>SymbolDice</em>",id:"hinweise-zur-klasse-symboldice",level:2},{value:"Hinweis zur Klasse <em>Player</em>",id:"hinweis-zur-klasse-player",level:2},{value:"Hinweise zur Klasse <em>Game</em>",id:"hinweise-zur-klasse-game",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Ablauf eines Spielzugs",id:"ablauf-eines-spielzugs",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel. Erstelle zum Testen eine ausf\xfchrbare\nKlasse."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n   Game o-- Player\n   Game o-- SymbolDice\n   class Game {\n      -player1: Player\n      -player2: Player\n      -dices: List~SymbolDice~\n      -rounds: int\n      +Game(name1: String, name2: String, numberOfDices: int)\n      +play() void\n      -move(attacker: Player, defender: Player) void\n      -rollTheDices() void\n      -getNumberOfSymbols(symbol: Symbol) int\n   }\n   class Player {\n      -name: String #123;final#125;\n      -points: int\n      +Player(name: String)\n      +setPoints(points: int) void\n   }\n   class SymbolDice {\n      -symbol: Symbol\n      +SymbolDice()\n      +rollTheDice() void\n   }\n   class Symbol {\n      <<enumeration>>\n      SWORD = Schwert\n      SHIELD = Schild\n      -description: String #123;final#125;\n   }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-symboldice",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"SymbolDice"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll den W\xfcrfel werfen"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit dem Symbol einen Wert (Schwert, Schild) zuweisen"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-player",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"Player"})]}),"\n",(0,s.jsx)(n.p,{children:"Der Konstruktor soll den Namen mit dem eingehenden Namen und die Punkte mit dem\nWert 10 initialisieren."}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-game",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Game"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll die Spieler mit Hilfe der eingehenden Namen\ninitialisieren und die W\xfcrfelliste mit Hilfe der eingehenden Anzahl W\xfcrfel\ninitialisieren"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void play()"})," soll den Spielablauf abbilden"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void move(attacker: Player, defender: Player)"})," soll einen\nSpielzug abbilden"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void rollTheDices()"})," soll alle W\xfcrfel werfen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"int getNumberOfSymbols(symbol: Symbol)"})," soll die Anzahl der\nW\xfcrfel zum eingehenden Symbol zur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Das Spiel soll aus mehreren Runden bestehen"}),"\n",(0,s.jsx)(n.li,{children:"In jeder Runde sollen beide Spieler abwechselnd jeweils einen Spielzug\ndurchf\xfchren k\xf6nnen"}),"\n",(0,s.jsx)(n.li,{children:"Das Spiel soll enden, sobald ein Spieler 0 Punkte hat"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ablauf-eines-spielzugs",children:"Ablauf eines Spielzugs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Zu Beginn eines Spielzugs sollen beide Spieler abwechselnd alle W\xfcrfen werfen"}),"\n",(0,s.jsx)(n.li,{children:"Anschlie\xdfend sollen f\xfcr den angreifenden Spieler die Anzahl geworfener\nSchwerter und f\xfcr der verteidigende Spieler die Anzahl geworfener Schilde\nermittelt werden"}),"\n",(0,s.jsxs)(n.li,{children:["Anschlie\xdfend soll der Schaden gem\xe4\xdf der Formel ",(0,s.jsx)(n.em,{children:"Anzahl Schwerter - Anzahl\nSchilde"})," berechnet werden"]}),"\n",(0,s.jsx)(n.li,{children:"Anschlie\xdfend sollen dem verteidigenden Spieler Punkte in H\xf6he des Schadens\nabgezogen werden, wobei der Wert 0 nicht unterschritten werden soll"}),"\n",(0,s.jsx)(n.li,{children:"Am Ende des Spielzugs soll ausgegeben werden, wie viel Schaden der\nverteidigenden Spieler erlitten hat, und wie viele Punkte der verteidigende\nSpieler noch besitzt"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Runde 1\nHans w\xfcrfelt 5 Schwerter\nPeter w\xfcrfelt 0 Schilde\nPeter erleidet 5 Schaden und besitzt noch 5 Punkte\n\nPeter w\xfcrfelt 0 Schwerter\nHans w\xfcrfelt 5 Schilde\nHans erleidet 0 Schaden und besitzt noch 10 Punkte\n...\nRunde 6\nHans w\xfcrfelt 3 Schwerter\nPeter w\xfcrfelt 2 Schilde\nPeter erleidet 1 Schaden und besitzt keine Punkte mehr\n"})})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return a}});var l=i(67294);let s={},r=l.createContext(s);function a(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);