"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7709"],{49303:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>t});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/dice-games/dice-game-12","title":"W\xfcrfelspiel 12","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-12.md","sourceDirName":"exam-exercises/exam-exercises-java1/dice-games","slug":"/exam-exercises/exam-exercises-java1/dice-games/dice-game-12","permalink":"/java-docs/pr-preview/pr-274/exam-exercises/exam-exercises-java1/dice-games/dice-game-12","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-12.md","tags":[{"inline":true,"label":"console-applications","permalink":"/java-docs/pr-preview/pr-274/tags/console-applications"},{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-274/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-274/tags/enumerations"}],"version":"current","frontMatter":{"title":"W\xfcrfelspiel 12","description":"","tags":["console-applications","oo","enumerations"]},"sidebar":"examExercisesSidebar","previous":{"title":"W\xfcrfelspiel 11","permalink":"/java-docs/pr-preview/pr-274/exam-exercises/exam-exercises-java1/dice-games/dice-game-11"},"next":{"title":"W\xfcrfelspiel 13","permalink":"/java-docs/pr-preview/pr-274/exam-exercises/exam-exercises-java1/dice-games/dice-game-13"}}'),a=i("85893"),l=i("50065");let r={title:"W\xfcrfelspiel 12",description:"",tags:["console-applications","oo","enumerations"]},t=void 0,c={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>SymbolDice</em>",id:"hinweis-zur-klasse-symboldice",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel."}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n   MainClass o-- SymbolDice\n   MainClass o-- Player\n   class MainClass {\n      -dice1: SymbolDice$\n      -dice2: SymbolDice$\n      -player1: Player$\n      -player2: Player$\n      -scanner: Scanner$\n      +main(args: String[]) void$\n   }\n   class SymbolDice {\n      +rollTheDice() Symbol\n   }\n   class Symbol {\n      <<enumeration>>\n      SCISSORS\n      ROCK\n      PAPER\n   }\n   class Player {\n      -name: String #123;final#125;\n      -int: points\n      +Player(name: String)\n      +increasePoints(value: int) void\n   }"}),"\n",(0,a.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweis-zur-klasse-symboldice",children:["Hinweis zur Klasse ",(0,a.jsx)(n.em,{children:"SymbolDice"})]}),"\n",(0,a.jsxs)(n.p,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"Symbol rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit ein Symbol (Schere, Stein oder Papier) zur\xfcckgeben."]}),"\n",(0,a.jsx)(n.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Das Spiel soll aus 5 Runden bestehen"}),"\n",(0,a.jsx)(n.li,{children:"Zu Beginn des Spiel sollen die beiden Spieler ihre Namen eingeben k\xf6nnen"}),"\n",(0,a.jsx)(n.li,{children:"Zu Beginn jeder Runde sollen die Spieler abwechselnd den W\xfcrfel werden. Der\nSpieler mit dem besseren Wurfwert soll einen Punkt bekommen. F\xfcr den Fall,\ndass beide Spieler den gleichen Wurfwert erzielen, soll keiner einen Punkt\nbekommen. F\xfcr den Wurfwert soll gelten: Schere schl\xe4gt Papier, Papier schl\xe4gt\nStein, Stein schl\xe4gt Schere"}),"\n",(0,a.jsx)(n.li,{children:"Am Ende soll der Gewinner ausgegeben werden"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"Spieler 1, bitte gib Deinen Namen ein: Hans\nSpieler 2, bitte gib Deinen Namen ein: Peter\n\nHans w\xfcrfelt SCISSORS, Peter w\xfcrfelt ROCK\nPunkt f\xfcr Peter\n\nHans w\xfcrfelt SCISSORS, Peter w\xfcrfelt PAPER\nPunkt f\xfcr Hans\n\nHans w\xfcrfelt ROCK, Peter w\xfcrfelt PAPER\nPunkt f\xfcr Peter\n\nHans w\xfcrfelt SCISSORS, Peter w\xfcrfelt ROCK\nPunkt f\xfcr Peter\n\nHans w\xfcrfelt ROCK, Peter w\xfcrfelt ROCK\nKeiner bekommt einen Punkt\n\nPeter gewinnt\n"})})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return r}});var s=i(67294);let a={},l=s.createContext(a);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);