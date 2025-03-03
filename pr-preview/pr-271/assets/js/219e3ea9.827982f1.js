"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2531"],{60320:function(e,t,a){a.r(t),a.d(t,{default:()=>d,frontMatter:()=>r,metadata:()=>s,assets:()=>m,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/activity-diagrams/timestamp-converter","title":"Zeitstempel-Konvertierer","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/activity-diagrams/timestamp-converter.md","sourceDirName":"exam-exercises/exam-exercises-java1/activity-diagrams","slug":"/exam-exercises/exam-exercises-java1/activity-diagrams/timestamp-converter","permalink":"/java-docs/pr-preview/pr-271/exam-exercises/exam-exercises-java1/activity-diagrams/timestamp-converter","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/activity-diagrams/timestamp-converter.md","tags":[{"inline":true,"label":"activity-diagrams","permalink":"/java-docs/pr-preview/pr-271/tags/activity-diagrams"}],"version":"current","frontMatter":{"title":"Zeitstempel-Konvertierer","description":"","tags":["activity-diagrams"]},"sidebar":"examExercisesSidebar","previous":{"title":"Selectionsort","permalink":"/java-docs/pr-preview/pr-271/exam-exercises/exam-exercises-java1/activity-diagrams/selection-sort"},"next":{"title":"W\xfcrfelspiele","permalink":"/java-docs/pr-preview/pr-271/exam-exercises/exam-exercises-java1/dice-games/"}}'),n=a("85893"),i=a("50065");let r={title:"Zeitstempel-Konvertierer",description:"",tags:["activity-diagrams"]},o=void 0,m={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Aktivit\xe4tsdiagramm zur Methode <em>LocalDate convert(timestamp: long)</em>",id:"aktivit\xe4tsdiagramm-zur-methode-localdate-converttimestamp-long",level:2},{value:"Aktivit\xe4tsdiagramm zur Methode <em>void calculateYear()</em>",id:"aktivit\xe4tsdiagramm-zur-methode-void-calculateyear",level:2},{value:"Aktivit\xe4tsdiagramm zur Methode <em>void calculateMonth()</em>",id:"aktivit\xe4tsdiagramm-zur-methode-void-calculatemonth",level:2},{value:"Aktivit\xe4tsdiagramm zur Methode <em>void calculateDayOfMonth()</em>",id:"aktivit\xe4tsdiagramm-zur-methode-void-calculatedayofmonth",level:2}];function l(e){let t={code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Erstelle die Klasse ",(0,n.jsx)(t.code,{children:"TimestampConverter"})," anhand des abgebildeten\nKlassendiagramms sowie anhand der abgebildeten Aktivit\xe4tsdiagramme. Erstelle zum\nTesten eine ausf\xfchrbare Klasse."]}),"\n",(0,n.jsx)(t.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,n.jsx)(t.mermaid,{value:"classDiagram\n   class TimestampConverter {\n      -year: int$\n      -month: int$\n      -dayOfMonth: int$\n      -totalDays: int$\n      -extraDays: int$\n      -flag: int$\n      -daysOfMonth: int[] = #123;31,28,31,30,31,30,31,31,30,31,30,31#125;$\n      +convert(timestamp: long) LocalDate$\n      -calculateYear() void$\n      -calculateMonth() void$\n      -calculateDayOfMonth() void$\n   }"}),"\n",(0,n.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-methode-localdate-converttimestamp-long",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,n.jsx)(t.em,{children:"LocalDate convert(timestamp: long)"})]}),"\n",(0,n.jsx)(t.mermaid,{value:'stateDiagram-v2\n   state "[Tage Gesamt] = [Zeitstempel] / 86.400.000" as state1\n   state "Ausf\xfchren: [Jahr berechnen]" as state2\n   state "Ausf\xfchren: [Monat berechnen]" as state3\n   state "Ausf\xfchren: [Tag berechnen]" as state4\n   state "[Datum] erzeugen mit [Jahr], [Monat] und [Tag]" as state5\n   state "R\xfcckgabe: [Datum]" as state6\n   state "Zeitstempel konvertieren" as convert {\n      [*] --\x3e state1\n      state1 --\x3e state2\n      state2 --\x3e state3\n      state3 --\x3e state4\n      state4 --\x3e state5\n      state5 --\x3e state6\n      state6 --\x3e [*]\n   }'}),"\n",(0,n.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-methode-void-calculateyear",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,n.jsx)(t.em,{children:"void calculateYear()"})]}),"\n",(0,n.jsx)(t.mermaid,{value:'stateDiagram-v2\n   state "[Jahr] = 1970" as state1\n   state "Schleife beenden" as state2\n   state "[Tage Gesamt] = [Tage Gesamt] - 366" as state3\n   state "Schleife beenden" as state4\n   state "[Tage Gesamt] = [Tage Gesamt] - 365" as state5\n   state "[Jahr] inkrementieren" as state6\n   state "[Extratage] = [Tage Gesamt] + 1" as state7\n   state "[Kennzeichen] = 1" as state8\n   state if1 <<choice>>\n   state if2 <<choice>>\n   state if3 <<choice>>\n   state if4 <<choice>>\n   state if5 <<choice>>\n   state fork1 <<fork>>\n   state fork2 <<fork>>\n   state fork3 <<fork>>\n   state fork4 <<fork>>\n   state "Jahr berechnen" as calculateYear {\n      [*] --\x3e state1\n      state1 --\x3e if1\n      if1 --\x3e if2: true\n      if2 --\x3e if3: [Jahr] Modulo 400 = 0 oder ([Jahr] Modulo 4 = 0 und [Jahr] Modulo 100 != 0)\n      if3 --\x3e state2: [Tage Gesamt] < 366\n      if3 --\x3e fork1: sonst\n      state2 --\x3e fork1\n      fork1 --\x3e state3\n      if2 --\x3e if4: sonst\n      if4 --\x3e state4: [Tage Gesamt] < 365\n      if4 --\x3e fork2: sonst\n      state4 --\x3e fork2\n      fork2 --\x3e state5\n      state3 --\x3e fork3\n      state5 --\x3e fork3\n      fork3 --\x3e state6\n      state6 --\x3e if1\n      if1 --\x3e state7: sonst\n      state7 --\x3e if5\n      if5 --\x3e state8: [Jahr] Modulo 400 = 0 oder ([Jahr] Modulo 4 = 0 und [Jahr] Modulo 100 != 0)\n      if5 --\x3e fork4: sonst\n      state8 --\x3e fork4\n      fork4 --\x3e [*]\n   }'}),"\n",(0,n.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-methode-void-calculatemonth",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,n.jsx)(t.em,{children:"void calculateMonth()"})]}),"\n",(0,n.jsx)(t.mermaid,{value:'stateDiagram-v2\n   state "[Monat] = 0" as state1\n   state "[Z\xe4hler] = 0" as state2\n   state "Schleife beenden" as state3\n   state "[Monat] inkrementieren" as state4\n   state "[Extratage] = [Extratage] - 29" as state5\n   state "Schleife beenden" as state6\n   state "[Monat] inkrementieren" as state7\n   state "[Extratage] = [Extratage] - Element [Z\xe4hler] von Feld [Monatstage]" as state8\n   state "[Z\xe4hler] inkrementieren" as state9\n   state "Schleife beenden" as state10\n   state "[Monat] inkrementieren" as state11\n   state "[Extratage] = [Extratage] - Element [Z\xe4hler] von Feld [Monatstage]" as state12\n   state "[Z\xe4hler] inkrementieren" as state13\n   state "[Monat] inkrementieren" as state14\n   state if1 <<choice>>\n   state if2 <<choice>>\n   state if3 <<choice>>\n   state if4 <<choice>>\n   state if5 <<choice>>\n   state if6 <<choice>>\n   state if7 <<choice>>\n   state if8 <<choice>>\n   state fork1 <<fork>>\n   state fork2 <<fork>>\n   state fork3 <<fork>>\n   state fork4 <<fork>>\n   state fork5 <<fork>>\n   state fork6 <<fork>>\n   state "Monat berechnen" as calculateMonth {\n      [*] --\x3e state1\n      state1 --\x3e state2\n      state2 --\x3e if1\n      if1 --\x3e if2 : [Kennzeichen] = 1\n      if1 --\x3e if6 : sonst\n      if2 --\x3e if3 : true\n      if2 --\x3e fork5 : sonst\n      if3 --\x3e if4 : [Z\xe4hler] = 1\n      if3 --\x3e if5 : sonst\n      if4 --\x3e state3 : [Extratage] - 29 < 0\n      if4 --\x3e fork1 : sonst\n      state3 --\x3e fork1\n      fork1 --\x3e state4\n      state4 --\x3e state5\n      state5 --\x3e fork3\n      if5 --\x3e state6 : [Extratage] - Element [Z\xe4hler] von Feld [Monatstage] < 0\n      if5 --\x3e fork2 : sonst\n      state6 --\x3e fork2\n      fork2 --\x3e state7\n      state7 --\x3e state8\n      state8 --\x3e fork3\n      fork3 --\x3e state9\n      state9 --\x3e if2\n      if6 --\x3e if7 : true\n      if6 --\x3e fork5 : sonst\n      if7 --\x3e state10 : [Extratage] - Element [Z\xe4hler] von Feld [Monatstage] < 0\n      if7 --\x3e fork4 : sonst\n      state10 --\x3e fork4\n      fork4 --\x3e state11\n      state11 --\x3e state12\n      state12 --\x3e state13\n      state13 --\x3e if6\n      fork5 --\x3e if8\n      if8 --\x3e state14 : [Extratage] > 0\n      if8 --\x3e fork6\n      state14 --\x3e fork6\n      fork6 --\x3e [*]\n   }'}),"\n",(0,n.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-methode-void-calculatedayofmonth",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,n.jsx)(t.em,{children:"void calculateDayOfMonth()"})]}),"\n",(0,n.jsx)(t.mermaid,{value:'stateDiagram-v2\n   state "[Tag] = [Extratage]" as state1\n   state "[Tag] = 29" as state2\n   state "[Tag] = Element [Monat] - 1 von Feld [Monatstage]" as state3\n   state if1 <<choice>>\n   state fork1 <<fork>>\n   state "Tag berechnen" as calculateDayOfMonth {\n      [*] --\x3e if1\n      if1 --\x3e state1: [Extratage] > 0\n      if1 --\x3e state2: [Monat] = 2 und [Kennzeichen] = 1\n      if1 --\x3e state3: sonst\n      state1 --\x3e fork1\n      state2 --\x3e fork1\n      state3 --\x3e fork1\n      fork1 --\x3e [*]\n   }'})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return r}});var s=a(67294);let n={},i=s.createContext(n);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);