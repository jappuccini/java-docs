"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8707"],{53552:function(e,t,a){a.r(t),a.d(t,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>m,toc:()=>o,frontMatter:()=>r});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/activity-diagrams/cash-machine","title":"Geldautomat","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/activity-diagrams/cash-machine.md","sourceDirName":"exam-exercises/exam-exercises-java1/activity-diagrams","slug":"/exam-exercises/exam-exercises-java1/activity-diagrams/cash-machine","permalink":"/java-docs/pr-preview/pr-232/exam-exercises/exam-exercises-java1/activity-diagrams/cash-machine","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/activity-diagrams/cash-machine.md","tags":[{"inline":true,"label":"activity-diagrams","permalink":"/java-docs/pr-preview/pr-232/tags/activity-diagrams"}],"version":"current","frontMatter":{"title":"Geldautomat","description":"","tags":["activity-diagrams"]},"sidebar":"examExercisesSidebar","previous":{"title":"Aktivit\xe4tsdiagramme","permalink":"/java-docs/pr-preview/pr-232/exam-exercises/exam-exercises-java1/activity-diagrams/"},"next":{"title":"Rabattrechner","permalink":"/java-docs/pr-preview/pr-232/exam-exercises/exam-exercises-java1/activity-diagrams/discount-calculator"}}'),n=a("85893"),i=a("50065");let r={title:"Geldautomat",description:"",tags:["activity-diagrams"]},c=void 0,m={},o=[{value:"Aktivit\xe4tsdiagramm zur Klasse <em>CashMachine</em>",id:"aktivit\xe4tsdiagramm-zur-klasse-cashmachine",level:2}];function d(e){let t={code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Erstelle die ausf\xfchrbare Klasse ",(0,n.jsx)(t.code,{children:"CashMachine"})," anhand des abgebildeten\nAktivit\xe4tsdiagramms. Erstelle zum Testen eine Klasse, die die ben\xf6tigten\nMethoden zur Verf\xfcgung stellt."]}),"\n",(0,n.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-klasse-cashmachine",children:["Aktivit\xe4tsdiagramm zur Klasse ",(0,n.jsx)(t.em,{children:"CashMachine"})]}),"\n",(0,n.jsx)(t.mermaid,{value:'stateDiagram-v2\n    state "Ausgabe: Bitte Kontonummer eingeben" as state1\n    state "Eingabe: [Kontonummer]" as state2\n    state "Ausgabe: Bitte PIN eingeben" as state3\n    state "Eingabe: [PIN]" as state4\n    state "Ausf\xfchren: [Logindaten pr\xfcfen] mit [Kontonummer] und [PIN]" as state5\n    state "Ausgabe: Logindaten sind ung\xfcltig" as state6\n    state "Ausgabe: Bitte Auswahl treffen\n           1: Kontostand anzeigen\n           2: Geld abheben\n           3: Beenden" as state7\n    state "Eingabe: [Auswahl]" as state8\n    state "Ausf\xfchren: [Kontostand anzeigen]" as state9\n    state "Ausgabe: Bitte Betrag in Euro eingeben" as state10\n    state "Eingabe: [Betrag in Euro]" as state11\n    state "Ausf\xfchren: [Kontostand pr\xfcfen] mit [Betrag in Euro]" as state12\n    state "Ausf\xfchren: [Geld auszahlen]" as state13\n    state "Ausgabe: Kontostand ist zu niedrig" as state14\n\n    state if1 <<choice>>\n    state if2 <<choice>>\n    state if3 <<choice>>\n    state fork1 <<fork>>\n\n    state "Geldautomat" as main {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e state3\n        state3 --\x3e state4\n        state4 --\x3e state5\n        state5 --\x3e if1\n        if1 --\x3e state6: sonst\n        if1 --\x3e state7: Logindaten sind g\xfcltig\n        state6 --\x3e state1\n        state7 --\x3e state8\n        state8 --\x3e if2\n        if2 --\x3e state9: [Auswahl] = 1\n        if2 --\x3e state10: [Auswahl] = 2\n        if2 --\x3e [*]: [Auswahl] = 3\n        state9 --\x3e fork1\n        state10 --\x3e state11\n        state11 --\x3e state12\n        state12 --\x3e if3\n        if3 --\x3e state13: Auszahlung ist m\xf6glich\n        if3 --\x3e state14: sonst\n        state13 --\x3e fork1\n        state14 --\x3e fork1\n        fork1 --\x3e state7\n    }'})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return c},a:function(){return r}});var s=a(67294);let n={},i=s.createContext(n);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);