"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4966"],{5561:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>t});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/dice-games/dice-game-13","title":"W\xfcrfelspiel 13","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-13.md","sourceDirName":"exam-exercises/exam-exercises-java1/dice-games","slug":"/exam-exercises/exam-exercises-java1/dice-games/dice-game-13","permalink":"/java-docs/pr-preview/pr-271/exam-exercises/exam-exercises-java1/dice-games/dice-game-13","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-13.md","tags":[{"inline":true,"label":"console-applications","permalink":"/java-docs/pr-preview/pr-271/tags/console-applications"},{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-271/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-271/tags/enumerations"}],"version":"current","frontMatter":{"title":"W\xfcrfelspiel 13","description":"","tags":["console-applications","oo","enumerations"]},"sidebar":"examExercisesSidebar","previous":{"title":"W\xfcrfelspiel 12","permalink":"/java-docs/pr-preview/pr-271/exam-exercises/exam-exercises-java1/dice-games/dice-game-12"},"next":{"title":"W\xfcrfelspiel 14","permalink":"/java-docs/pr-preview/pr-271/exam-exercises/exam-exercises-java1/dice-games/dice-game-14"}}'),a=i("85893"),r=i("50065");let l={title:"W\xfcrfelspiel 13",description:"",tags:["console-applications","oo","enumerations"]},t=void 0,c={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>ChristmasDice</em>",id:"hinweise-zur-klasse-christmasdice",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel."}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n   MainClass o-- ChristmasDice\n   ChristmasDice o-- ChristmasSymbol\n   class MainClass {\n      -scanner: Scanner$\n      -dice: ChristmasDice$\n      -rounds: int$\n      -points: int$\n      +main(args: String[]) void$\n   }\n   class ChristmasDice {\n      -value: ChristmasSymbol\n      +ChristmasDice()\n      +rollTheDice() void\n   }\n   class ChristmasSymbol {\n      <<enumeration>>\n      STAR = Stern\n      TREE = Weihnachtsbaum\n      CANDLE = Kerze\n      -description: String #123;final#125;\n   }"}),"\n",(0,a.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweise-zur-klasse-christmasdice",children:["Hinweise zur Klasse ",(0,a.jsx)(n.em,{children:"ChristmasDice"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Der Konstruktor soll den W\xfcrfel werfen"}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit dem Weihnachts-Symbol einen Wert (Stern, Weihnachtsbaum\noder Kerze) zuweisen"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Das Spiel soll aus mehreren Runden bestehen"}),"\n",(0,a.jsx)(n.li,{children:"Zu Beginn des Spiel soll der Spieler die Anzahl Runden eingeben k\xf6nnen"}),"\n",(0,a.jsx)(n.li,{children:"Zu Beginn einer jeden Runde soll der W\xfcrfel geworfen werden"}),"\n",(0,a.jsx)(n.li,{children:"Nach dem Wurf soll der Spieler eingeben, welches Weihnachts-Symbol geworfen\nwurde. Liegt er richtig, erh\xe4lt er einen Punkt"}),"\n",(0,a.jsx)(n.li,{children:"Am Ende des Spiels sollen die Anzahl Runden, die Punkte sowie die\nTrefferwahrscheinlichkeit in Prozent ausgegeben werden"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"Wie viele Runden m\xf6chtest Du spielen?: 3\n\nRunde 1:\nRate, welches Symbol gew\xfcrfelt wurde (1-Stern, 2-Baum, 3-Kerze): 2\nFalsch, Du erh\xe4lst leider keinen Punkt\n\nRunde 2:\nRate, welches Symbol gew\xfcrfelt wurde (1-Stern, 2-Baum, 3-Kerze): 1\nFalsch, Du erh\xe4lst leider keinen Punkt\n\nRunde 3:\nRate, welches Symbol gew\xfcrfelt wurde (1-Stern, 2-Baum, 3-Kerze): 1\nRichtig, Du erh\xe4lst einen Punkt\n\nErgebnis\nAnzahl Runden: 3\nDeine Punkte: 1\nDeine Trefferquote 33.333333333333336%\n"})})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return l}});var s=i(67294);let a={},r=s.createContext(a);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);