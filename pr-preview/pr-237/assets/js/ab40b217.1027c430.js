"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2587"],{95645:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>t,default:()=>m,assets:()=>c,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/dice-games/dice-game-02","title":"W\xfcrfelspiel 2","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-02.md","sourceDirName":"exam-exercises/exam-exercises-java1/dice-games","slug":"/exam-exercises/exam-exercises-java1/dice-games/dice-game-02","permalink":"/java-docs/pr-preview/pr-237/exam-exercises/exam-exercises-java1/dice-games/dice-game-02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-02.md","tags":[{"inline":true,"label":"console-applications","permalink":"/java-docs/pr-preview/pr-237/tags/console-applications"},{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-237/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-237/tags/enumerations"}],"version":"current","frontMatter":{"title":"W\xfcrfelspiel 2","description":"","tags":["console-applications","oo","enumerations"]},"sidebar":"examExercisesSidebar","previous":{"title":"W\xfcrfelspiel 1","permalink":"/java-docs/pr-preview/pr-237/exam-exercises/exam-exercises-java1/dice-games/dice-game-01"},"next":{"title":"W\xfcrfelspiel 3","permalink":"/java-docs/pr-preview/pr-237/exam-exercises/exam-exercises-java1/dice-games/dice-game-03"}}'),a=i("85893"),l=i("50065");let r={title:"W\xfcrfelspiel 2",description:"",tags:["console-applications","oo","enumerations"]},t=void 0,c={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Dice</em>",id:"hinweis-zur-klasse-dice",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel."}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n    MainClass o-- Dice\n\n    class MainClass {\n        -scanner: Scanner$\n        -dices: List~Dice~$\n        -points: int$\n        -rounds: int$\n        +main(args: String[]) void$\n    }\n\n    class Dice {\n        +rollTheDice() ShapeSymbol\n    }\n\n    class ShapeSymbol {\n        <<enumeration>>\n        CIRCLE = 0\n        SQUARE = 4\n        TRIANGLE = 3\n        -corners: int #123;final#125;\n    }"}),"\n",(0,a.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweis-zur-klasse-dice",children:["Hinweis zur Klasse ",(0,a.jsx)(n.em,{children:"Dice"})]}),"\n",(0,a.jsxs)(n.p,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"ShapeSymbol rollTheDice()"})," soll mit einer gleichverteilten\nWahrscheinlichkeit ein Formensymbol zur\xfcckgeben."]}),"\n",(0,a.jsx)(n.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Das Spiel soll aus mehreren Runden bestehen"}),"\n",(0,a.jsx)(n.li,{children:"Zu Beginn einer jeden Runde sollen 5 W\xfcrfel geworfen werden"}),"\n",(0,a.jsxs)(n.li,{children:["Nach dem Wurf soll der Spieler eingeben, ob die Anzahl Ecken (",(0,a.jsx)(n.code,{children:"corners"}),") aller\nW\xfcrfel h\xf6her als 12 ist oder nicht. Liegt der Spieler mit seiner Einsch\xe4tzung\nrichtig, bekommt er einen Punkt"]}),"\n",(0,a.jsx)(n.li,{children:"Am Ende einer Runde soll der Spieler eingeben, ob er eine weitere Runde\nspielen m\xf6chte"}),"\n",(0,a.jsx)(n.li,{children:"Am Ende des Spiels soll die Anzahl der gespielten Runden sowie die Punktzahl\nausgegeben werden"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"Ist die Anzahl Ecken h\xf6her als 12 (Ja, Nein)?: Nein\nRichtig (10)\nM\xf6chtest Du eine weitere Runde spielen (Ja, Nein)?: Ja\n\nIst die Anzahl Ecken h\xf6her als 12 (Ja, Nein)?: Ja\nFalsch (6)\nM\xf6chtest Du eine weitere Runde spielen (Ja, Nein)?: Ja\n\nIst die Anzahl Ecken h\xf6her als 12 (Ja, Nein)?: Nein\nFalsch (16)\nM\xf6chtest Du eine weitere Runde spielen (Ja, Nein)?: Nein\n\nGespielte Runden: 3\nErzielte Punkte: 1\n"})})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return r}});var s=i(67294);let a={},l=s.createContext(a);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);