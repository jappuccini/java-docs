"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9596"],{38370:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/dice-games/dice-game-14","title":"W\xfcrfelspiel 14","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-14.md","sourceDirName":"exam-exercises/exam-exercises-java1/dice-games","slug":"/exam-exercises/exam-exercises-java1/dice-games/dice-game-14","permalink":"/java-docs/pr-preview/pr-284/exam-exercises/exam-exercises-java1/dice-games/dice-game-14","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-14.md","tags":[{"inline":true,"label":"console-applications","permalink":"/java-docs/pr-preview/pr-284/tags/console-applications"},{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-284/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-284/tags/enumerations"}],"version":"current","frontMatter":{"title":"W\xfcrfelspiel 14","description":"","tags":["console-applications","oo","enumerations"]},"sidebar":"examExercisesSidebar","previous":{"title":"W\xfcrfelspiel 13","permalink":"/java-docs/pr-preview/pr-284/exam-exercises/exam-exercises-java1/dice-games/dice-game-13"},"next":{"title":"W\xfcrfelspiel 15","permalink":"/java-docs/pr-preview/pr-284/exam-exercises/exam-exercises-java1/dice-games/dice-game-15"}}'),l=i("85893"),s=i("50065");let a={title:"W\xfcrfelspiel 14",description:"",tags:["console-applications","oo","enumerations"]},t=void 0,o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>ColorDice</em>",id:"hinweise-zur-klasse-colordice",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel."}),"\n",(0,l.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,l.jsx)(n.mermaid,{value:"classDiagram\n   MainClass o-- ColorDice\n   ColorDice o-- Color\n   class MainClass {\n      -dices: ColorDice[]$\n      -winningPoints: int$\n      -currentPoints: int$\n      -rounds: int$\n      -scanner: Scanner$\n      +main(args: String[]) void$\n   }\n   class ColorDice {\n      -color: Color\n      -value: int\n      +ColorDice()\n      +rollTheDice() void\n   }\n   class Color {\n      <<enumeration>>\n      RED\n      GREEN\n      BLUE\n   }"}),"\n",(0,l.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,l.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"hinweise-zur-klasse-colordice",children:["Hinweise zur Klasse ",(0,l.jsx)(n.em,{children:"ColorDice"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Der Konstruktor soll den W\xfcrfel werfen"}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"void rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit der Farbe einen Wert (Rot, Gr\xfcn oder Blau) und ebenfalls\nmit einer gleichverteilten Wahrscheinlichkeit dem W\xfcrfelwert einen Wert\nzwischen 1 und 4 zuweisen"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Das Spiel soll aus mehreren Runden bestehen"}),"\n",(0,l.jsx)(n.li,{children:"Zu Beginn des Spiels soll der Spieler die notwendige Gewinnpunkte eingeben\nk\xf6nnen"}),"\n",(0,l.jsx)(n.li,{children:"Zu Beginn einer jeden Runde soll der Spieler eine Farbe eingeben k\xf6nnen"}),"\n",(0,l.jsx)(n.li,{children:"Anschlie\xdfend sollen alle 5 W\xfcrfel geworfen und die Summe aller Wurfwerte je\nFarbe ermittelt werden"}),"\n",(0,l.jsx)(n.li,{children:"Hat der Spieler eine der Farben mit dem h\xf6chsten Gesamt-Wurfwert eingegeben,\nsoll der Spieler einen Punkt bekommen"}),"\n",(0,l.jsx)(n.li,{children:"Das Spiel soll enden, sobald der Spiele die notwendigen Gewinnpunkte erreicht\nhat"}),"\n",(0,l.jsx)(n.li,{children:"Am Ende des Spiels soll die Anzahl gespielter Runden ausgegeben werden"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-console",children:"Bitte Gewinnpunkte eingeben: 3\n\nBitte Farbe (Rot, Gr\xfcn oder Blau) eingeben: Blau\nWurfwerte Rot: 7\nWurfwerte Gr\xfcn: 3\nWurfwerte Blau: 0\nLeider falsch, Du bekommst leider keinen Punkt\n\nBitte Farbe (Rot, Gr\xfcn oder Blau) eingeben: Rot\nWurfwerte Rot: 5\nWurfwerte Gr\xfcn: 2\nWurfwerte Blau: 3\nRichtig, Du bekommst einen Punkt\n\nBitte Farbe (Rot, Gr\xfcn oder Blau) eingeben: Blau\nWurfwerte Rot: 2\nWurfwerte Gr\xfcn: 4\nWurfwerte Blau: 3\nLeider falsch, Du bekommst leider keinen Punkt\n\nBitte Farbe (Rot, Gr\xfcn oder Blau) eingeben: Blau\nWurfwerte Rot: 3\nWurfwerte Gr\xfcn: 2\nWurfwerte Blau: 3\nRichtig, Du bekommst einen Punkt\n\nBitte Farbe (Rot, Gr\xfcn oder Blau) eingeben: Gr\xfcn\nWurfwerte Rot: 4\nWurfwerte Gr\xfcn: 5\nWurfwerte Blau: 3\nRichtig, Du bekommst einen Punkt\n\nDu hast 5 Runden ben\xf6tigt\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return a}});var r=i(67294);let l={},s=r.createContext(l);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);