"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8492"],{17467:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>p,assets:()=>d,toc:()=>o,frontMatter:()=>t});var i=JSON.parse('{"id":"additional-material/daniel/java1/wwibe224","title":"WWIBE224","description":"","source":"@site/docs/additional-material/daniel/java1/wwibe224.md","sourceDirName":"additional-material/daniel/java1","slug":"/additional-material/daniel/java1/wwibe224","permalink":"/java-docs/pr-preview/pr-224/additional-material/daniel/java1/wwibe224","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/daniel/java1/wwibe224.md","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"title":"WWIBE224","description":"","sidebar_position":40,"tags":[]},"sidebar":"additionalMaterialSidebar","previous":{"title":"Klausurergebnisse","permalink":"/java-docs/pr-preview/pr-224/additional-material/daniel/java1/exam-results"},"next":{"title":"Programmierung 2","permalink":"/java-docs/pr-preview/pr-224/additional-material/daniel/java2/"}}'),a=r("85893"),l=r("50065");let t={title:"WWIBE224",description:"",sidebar_position:40,tags:[]},s=void 0,d={},o=[{value:"Links",id:"links",level:2},{value:"Kill Team",id:"kill-team",level:2},{value:"Version 1 (Vorlesung 1 bis 3)",id:"version-1-vorlesung-1-bis-3",level:3},{value:"Version 2 (Vorlesung 4 und 5)",id:"version-2-vorlesung-4-und-5",level:3},{value:"Version 3 (Vorlesung 5 und 6)",id:"version-3-vorlesung-5-und-6",level:3}];function f(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/appenmaier/java_wwibe224",children:"GitHub Repository Demos"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/appenmaier/java_exercises",children:"GitHub Repository Musterl\xf6sungen \xdcbungsaufgaben"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/appenmaier/java_exam_exercises",children:"GitHub Repository Musterl\xf6sungen Klausuraufgaben"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://app.mural.co/t/programmierungwwibe2248240/m/programmierungwwibe2248240/1729834706630/301020393cfaff8bb3d89e41e78d79d332f429aa",children:"Abbildungen"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"kill-team",children:"Kill Team"}),"\n",(0,a.jsxs)(n.p,{children:["Im Rahmen der Vorlesungswiederholung soll Schritt f\xfcr Schritt eine abgespeckte\nVariante des Tabletop-Spiels\n",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.a,{href:"https://www.warhammer.com/en-GB/other-games-kill-team-LP",children:"Warhammer 40,000 Kill Team"})}),"\nentwickelt werden. Bei diesem Strategiespiel f\xfcr zwei Spieler k\xe4mpfen zwei\nsogenannten Kill Teams mit dem Ziel gegeneinander, entsprechende Missionsziele\nzu erf\xfcllen bzw. das gegnerische Team auszul\xf6schen."]}),"\n",(0,a.jsx)(n.h3,{id:"version-1-vorlesung-1-bis-3",children:"Version 1 (Vorlesung 1 bis 3)"}),"\n",(0,a.jsx)(n.p,{children:"Erstelle eine ausf\xfchrbare Klasse wie folgt:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"es sollen Datenobjekte f\xfcr alle Eigenschaften des abgebildeten ER-Modells f\xfcr\n2 Spieler, 2 K\xe4mpfer (je einer pro Spieler) und 8 W6-W\xfcrfel (je 4 pro Spieler)\ndeklariert werden"}),"\n",(0,a.jsx)(n.li,{children:"es soll m\xf6glich sein, den Datenobjekten f\xfcr die Eigenschaften der Spieler und\nK\xe4mpfer Werte \xfcber die Konsole zuzuweisen"}),"\n",(0,a.jsx)(n.li,{children:"es soll genau eine Runde umgesetzt werden"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"ER-Modell"})}),"\n",(0,a.jsx)(n.mermaid,{value:'erDiagram\n    Spieler ||--o{ "K\xe4mpfer" : hat\n    Spieler ||--|{ "W6-W\xfcrfel" : hat\n\n    Spieler {\n        String Name\n    }\n\n    "K\xe4mpfer" {\n        String Name\n        int LP\n    }\n\n    "W6-W\xfcrfel" {\n        int Wurfwert\n    }'}),"\n",(0,a.jsx)(n.p,{children:"LP = Lebenspunkte"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Ablauf einer Runde"})}),"\n",(0,a.jsx)(n.p,{children:"Zu Beginn der Runde greift zun\xe4chst der K\xe4mpfer des ersten Spielers den K\xe4mpfer\ndes zweiten Spielers mit einem einfachen Angriff an. Anschlie\xdfend greift der\nK\xe4mpfer des zweiten Spielers den K\xe4mpfer des ersten Spielers mit einem einfachen\nAngriff an."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Ablauf eines einfachen Angriffs und Ermittlung des Schadens"})}),"\n",(0,a.jsxs)(n.p,{children:["Der angreifende Spieler w\xfcrfelt mit 4 W6-W\xfcrfeln, der verteidigende Spieler\nw\xfcrfelt mit 3 W6-W\xfcrfeln. Anschlie\xdfend wird der Schaden berechnet und dem\nverteidigenden Spieler Lebenspunkte in H\xf6he des Schadens abgezogen. Der Schaden\nberechnet sich dabei gem\xe4\xdf der Formel ",(0,a.jsx)(n.em,{children:"Anzahl Treffer - Anzahl Blocks"}),'. Die\nAnzahl Treffer ergibt sich aus der Summe der Wurfwerte des angreifenden\nSpielers, die Anzahl Blocks aus der Summe der Wurfwerte des verteidigenden\nSpielers. Die Problematiken, dass ein verteidigender Spieler bei einem Angriff\n"geheilt" wird (Anzahl Treffer < Anzahl Blocks) und dass ein "toter" Spieler\nangreift (Schaden beim ersten Angriff >= LP), sollen aktuell noch ignoriert\nwerden.']}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Beispielhafte Konsolenausgabe"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"Spieler 1, Name: Hans\nSpieler 1, K\xe4mpfer 1, Name: Gregor\nSpieler 1, K\xe4mpfer 1, LP: 8\n\nSpieler 2, Name: Peter\nSpieler 2, K\xe4mpfer 1, Name: Bonekraka\nSpieler 2, K\xe4mpfer 1, LP: 10\n\n*-------*\n* Zug 1 *\n*-------*\nK\xe4mpfer von Hans: Gregor (8 LP)\nK\xe4mpfer von Peter: Bonekraka (10 LP)\n\nGregor greift Bonekraka an.\nGregor w\xfcrfelt 2, 2, 3 und 6.\nGregor erzielt 13 Treffer.\nBonekraka w\xfcrfelt 1, 4 und 5.\nBonekraka erzielt 10 Blocks.\nBonekraka erleidet 3 Schaden und hat noch 7 LP.\n\n*-------*\n* Zug 2 *\n*-------*\nK\xe4mpfer von Hans: Gregor (8 LP)\nK\xe4mpfer von Peter: Bonekraka (7 LP)\n\nBonekraka greift Gregor an.\nBonekraka w\xfcrfelt 1, 1, 3 und 5.\nBonekraka erzielt 10 Treffer.\nGregor w\xfcrfelt 2, 4 und 5.\nGregor erzielt 11 Blocks.\nGregor erleidet -1 Schaden und hat noch 9 LP.\n"})}),"\n",(0,a.jsx)(n.h3,{id:"version-2-vorlesung-4-und-5",children:"Version 2 (Vorlesung 4 und 5)"}),"\n",(0,a.jsx)(n.p,{children:"Passe die ausf\xfchrbare Klasse wie folgt an:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"es sollen zus\xe4tzliche Datenobjekte f\xfcr alle zus\xe4tzlichen Eigenschaften des\nabgebildeten ER-Modells f\xfcr 2 Spieler, 2 K\xe4mpfer (je einer pro Spieler), 2\nWaffen (je eine pro K\xe4mpfer) und 10 W6-W\xfcrfel (je 5 pro Spieler) deklariert\nwerden"}),"\n",(0,a.jsx)(n.li,{children:"es soll m\xf6glich sein, den neuen Datenobjekten Werte \xfcber die Konsole\nzuzuweisen (alternativ k\xf6nnen den Datenobjekten auch statisch Werte zugewiesen\nwerden)"}),"\n",(0,a.jsx)(n.li,{children:"es sollen mehrere Runden umgesetzt werden"}),"\n",(0,a.jsx)(n.li,{children:"das Spiel soll enden, sobald die Lebenspunkte eines der beiden K\xe4mpfer auf 0\noder unter 0 gesunken sind"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"ER-Modell"})}),"\n",(0,a.jsx)(n.mermaid,{value:'erDiagram\n    Spieler ||--o{ "K\xe4mpfer" : hat\n    "K\xe4mpfer" ||--|{ Waffe : hat\n    Spieler ||--|{ "W6-W\xfcrfel" : hat\n\n    Spieler {\n        String Name\n    }\n\n    "K\xe4mpfer" {\n        String Name\n        int LP\n        int VW\n        int RW\n    }\n\n    Waffe {\n        String Name\n        int AW\n        int BF_KG\n        int SW\n    }\n\n    "W6-W\xfcrfel" {\n        int Wurfwert\n    }'}),"\n",(0,a.jsx)(n.p,{children:"LP = Lebenspunkte, VW = Verteidigungswert, RW = R\xfcstungswurf, AW = Attackenwert,\nBF_KG = Ballistische Fertigkeit / Kampfgeschick, SW = Schadenswert"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Ablauf einer Runde"})}),"\n",(0,a.jsx)(n.p,{children:"Zu Beginn einer jeden Runde greift zun\xe4chst der K\xe4mpfer des ersten Spielers den\nK\xe4mpfer des zweiten Spielers mit einem erweiterten einfachen Angriff an. Sollte\nder K\xe4mpfer des zweiten Spielers diesen Angriff \xfcberleben, greift dieser\nanschlie\xdfend den K\xe4mpfer des ersten Spielers mit einem erweiterten einfachen\nAngriff an."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Ablauf eines erweiterten einfachen Angriffs und Ermittlung des Schadens"})}),"\n",(0,a.jsxs)(n.p,{children:["Der angreifende Spieler w\xfcrfelt mit der Anzahl AW seiner Waffe, der\nverteidigende Spieler w\xfcrfelt mit der Anzahl VW. Anschlie\xdfend wird der Schaden\nberechnet und dem verteidigenden Spieler Lebenspunkte in H\xf6he des Schadens\nabgezogen. Der Schaden berechnet sich dabei gem\xe4\xdf der Formel ",(0,a.jsx)(n.em,{children:"(Anzahl Treffer -\nAnzahl Blocks) x SW"}),". Die Anzahl Treffer ergibt sich aus der Summe der Wurfwerte\ndes angreifenden Spielers >= BF_KG, die Anzahl Blocks aus der Summe der\nWurfwerte des verteidigenden Spielers >= RW."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Beispielhafte Konsolenausgabe"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"Spieler 1, Name eingeben: Hans\nSpieler 1, K\xe4mpfer 1, Name eingeben: Gregor\nSpieler 1, K\xe4mpfer 1, LP eingeben: 8\nSpieler 1, K\xe4mpfer 1, VW eingeben: 3\nSpieler 1, K\xe4mpfer 1, RW eingeben: 5\nSpieler 1, K\xe4mpfer 1, Waffe 1, Name eingeben: Boltpistole\nSpieler 1, K\xe4mpfer 1, Waffe 1, AW eingeben: 4\nSpieler 1, K\xe4mpfer 1, Waffe 1, BF_KG eingeben: 3\nSpieler 1, K\xe4mpfer 1, Waffe 1, SW eingeben: 2\n\nSpieler 2, Name eingeben: Peter\nSpieler 2, K\xe4mpfer 1, Name eingeben: Bonekraka\nSpieler 2, K\xe4mpfer 1, LP eingeben: 10\nSpieler 2, K\xe4mpfer 1, VW eingeben: 3\nSpieler 2, K\xe4mpfer 1, RW eingeben: 5\nSpieler 2, K\xe4mpfer 1, Waffe 1, Name eingeben: Spalta\nSpieler 2, K\xe4mpfer 1, Waffe 1, AW eingeben: 4\nSpieler 2, K\xe4mpfer 1, Waffe 1, BF_KG eingeben: 4\nSpieler 2, K\xe4mpfer 1, Waffe 1, SW eingeben: 3\n\n*----------------*\n* Runde 1, Zug 1 *\n*----------------*\nK\xe4mpfer von Hans: Gregor (8 LP)\nK\xe4mpfer von Peter: Bonekraka (10 LP)\n\nGregor greift Bonekraka mit Boltpistole an.\nGregor w\xfcrfelt 6, 4, 3 und 2.\nGregor erzielt 3 Treffer.\nBonekraka w\xfcrfelt 4, 1 und 5.\nBonekraka erzielt 1 Blocks.\nBonekraka erleidet 4 Schaden und hat noch 6 LP.\n\n*----------------*\n* Runde 1, Zug 2 *\n*----------------*\nK\xe4mpfer von Hans: Gregor (8 LP)\nK\xe4mpfer von Peter: Bonekraka (6 LP)\n\nBonekraka greift Gregor mit Spalta an.\nBonekraka w\xfcrfelt 2, 4, 3 und 2.\nBonekraka erzielt 1 Treffer.\nGregor w\xfcrfelt 3, 5 und 5.\nGregor erzielt 2 Blocks.\nGregor erleidet 0 Schaden und hat noch 8 LP.\n\n*----------------*\n* Runde 2, Zug 1 *\n*----------------*\nK\xe4mpfer von Hans: Gregor (8 LP)\nK\xe4mpfer von Peter: Bonekraka (6 LP)\n\nGregor greift Bonekraka mit Boltpistole an.\nGregor w\xfcrfelt 1, 5, 5 und 3.\nGregor erzielt 3 Treffer.\nBonekraka w\xfcrfelt 5, 4 und 2.\nBonekraka erzielt 1 Blocks.\nBonekraka erleidet 4 Schaden und hat noch 2 LP.\n\n*----------------*\n* Runde 2, Zug 2 *\n*----------------*\nK\xe4mpfer von Hans: Gregor (8 LP)\nK\xe4mpfer von Peter: Bonekraka (2 LP)\n\nBonekraka greift Gregor mit Spalta an.\nBonekraka w\xfcrfelt 6, 4, 6 und 1.\nBonekraka erzielt 3 Treffer.\nGregor w\xfcrfelt 4, 2 und 4.\nGregor erzielt 0 Blocks.\nGregor erleidet 9 Schaden und stirbt.\n"})}),"\n",(0,a.jsx)(n.h3,{id:"version-3-vorlesung-5-und-6",children:"Version 3 (Vorlesung 5 und 6)"}),"\n",(0,a.jsx)(n.p,{children:'\xdcberf\xfchre den bisherigen imperativen Programmentwurf in einen objektorientierten\nProgrammentwurf. Erweitere zudem den objektorientierten Programmentwurf so, dass\nzu Beginn einer jeden Runde per "M\xfcnzwurf" dar\xfcber entschieden wird, welcher\nSpieler den ersten Angriff in der jeweiligen Runde ausf\xfchren darf.'})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return t}});var i=r(67294);let a={},l=i.createContext(a);function t(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);