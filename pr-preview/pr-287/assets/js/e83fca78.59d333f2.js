"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2419"],{72596:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/dice-games/dice-game-11","title":"W\xfcrfelspiel 11","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-11.md","sourceDirName":"exam-exercises/exam-exercises-java1/dice-games","slug":"/exam-exercises/exam-exercises-java1/dice-games/dice-game-11","permalink":"/java-docs/pr-preview/pr-287/exam-exercises/exam-exercises-java1/dice-games/dice-game-11","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/dice-games/dice-game-11.md","tags":[{"inline":true,"label":"console-applications","permalink":"/java-docs/pr-preview/pr-287/tags/console-applications"},{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-287/tags/oo"}],"version":"current","frontMatter":{"title":"W\xfcrfelspiel 11","description":"","tags":["console-applications","oo"]},"sidebar":"examExercisesSidebar","previous":{"title":"W\xfcrfelspiel 10","permalink":"/java-docs/pr-preview/pr-287/exam-exercises/exam-exercises-java1/dice-games/dice-game-10"},"next":{"title":"W\xfcrfelspiel 12","permalink":"/java-docs/pr-preview/pr-287/exam-exercises/exam-exercises-java1/dice-games/dice-game-12"}}'),s=i("85893"),a=i("50065");let l={title:"W\xfcrfelspiel 11",description:"",tags:["console-applications","oo"]},t=void 0,d={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>StringDice</em>",id:"hinweis-zur-klasse-stringdice",level:2},{value:"Spielablauf",id:"spielablauf",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Orientiere Dich bei der\nKonsolenausgabe am abgebildeten Beispiel."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n   MainClass o-- StringDice\n   class MainClass {\n      -scanner: Scanner$\n      -name1: String$\n      -name2: String$\n      -points1: int$\n      -points2: int$\n      -dice: StringDice$\n      +main(args: String[]) void$\n   }\n   class StringDice {\n      +rollTheDice() String\n   }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-stringdice",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"StringDice"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"String rollTheDice()"})," soll eine zuf\xe4llige 5-stellige Zeichenkette\nzur\xfcckgeben."]}),"\n",(0,s.jsx)(n.h2,{id:"spielablauf",children:"Spielablauf"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Das Spiel soll aus mehreren Runden bestehen"}),"\n",(0,s.jsx)(n.li,{children:"Zu Beginn des Spiel sollen die beiden Spieler ihre Namen sowie die\nerforderlichen Punkte eingeben k\xf6nnen"}),"\n",(0,s.jsx)(n.li,{children:"Zu Beginn jeder Runde sollen die Spieler abwechselnd den W\xfcrfel werden. Der\nSpieler mit dem h\xf6heren Wurfwert soll einen Punkt bekommen. F\xfcr den Fall, dass\nbeide Spieler den gleichen Wurfwert erzielen, soll keiner einen Punkt\nbekommen. Als Wurfwert soll der Hashwert der geworfenen Zeichenkette verwendet\nwerden"}),"\n",(0,s.jsx)(n.li,{children:"Das Spiel soll enden, sobald ein Spieler die erforderliche Punktzahl erreicht\nhat"}),"\n",(0,s.jsx)(n.li,{children:"Am Ende sollen die Punktzahlen beider Spieler ausgegeben werden"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'Gib bitte den Namen von Spieler 1 ein: Hans\nGib bitte den Namen von Spieler 2 ein: Peter\nGib bitte die erforderlichen Punkte ein: 3\n\nHans w\xfcrfelt "vraad", der Hashwert betr\xe4gt 112467976\nPeter w\xfcrfelt "mtstk", der Hashwert betr\xe4gt 104233763\nHans bekommt einen Punkt\n\nHans w\xfcrfelt "txhyd", der Hashwert betr\xe4gt 110807151\nPeter w\xfcrfelt "czjlq", der Hashwert betr\xe4gt 95168408\nHans bekommt einen Punkt\n\nHans w\xfcrfelt "elqst", der Hashwert betr\xe4gt 96605323\nPeter w\xfcrfelt "jmkni", der Hashwert betr\xe4gt 101246787\nPeter bekommt einen Punkt\n\nHans w\xfcrfelt "qzylh", der Hashwert betr\xe4gt 108112108\nPeter w\xfcrfelt "kpuas", der Hashwert betr\xe4gt 102268898\nHans bekommt einen Punkt\n\nHans: 3\nPeter: 1\n'})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return l}});var r=i(67294);let s={},a=r.createContext(s);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);