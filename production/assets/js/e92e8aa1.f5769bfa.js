"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6824"],{32568:function(e,n,a){a.r(n),a.d(n,{default:()=>c,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>m,contentTitle:()=>t});var i=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/class-diagrams/player","title":"Spieler","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/class-diagrams/player.md","sourceDirName":"exam-exercises/exam-exercises-java1/class-diagrams","slug":"/exam-exercises/exam-exercises-java1/class-diagrams/player","permalink":"/java-docs/production/exam-exercises/exam-exercises-java1/class-diagrams/player","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/class-diagrams/player.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/production/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/production/tags/enumerations"},{"inline":true,"label":"io-streams","permalink":"/java-docs/production/tags/io-streams"}],"version":"current","frontMatter":{"title":"Spieler","description":"","tags":["oo","enumerations","io-streams"]},"sidebar":"examExercisesSidebar","previous":{"title":"Tiefgarage","permalink":"/java-docs/production/exam-exercises/exam-exercises-java1/class-diagrams/parking-garage"},"next":{"title":"Weihnachtsmann","permalink":"/java-docs/production/exam-exercises/exam-exercises-java1/class-diagrams/santa-claus"}}'),s=a("85893"),r=a("50065");let l={title:"Spieler",description:"",tags:["oo","enumerations","io-streams"]},t=void 0,o={},m=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Player</em>",id:"hinweis-zur-klasse-player",level:2},{value:"Hinweis zur Klasse <em>GameTokens</em>",id:"hinweis-zur-klasse-gametokens",level:2},{value:"Beispielhafter Aufbau der Spielfigurendatei",id:"beispielhafter-aufbau-der-spielfigurendatei",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n   Player o-- GameToken\n   GameToken o-- GameTokenColor\n   GameToken o-- GameTokenType\n   class Player {\n      -name: String #123;final#125;\n      -gameTokens: List~GameToken~ #123;final#125;\n      +GameToken(name: String, gameTokens: List~GameToken~)\n      +addGameToken(gameToken: GameToken) void\n   }\n   class GameToken {\n      -type: GameTokenType #123;final#125;\n      -color: GameTokenColor #123;final#125;\n      -value: int #123;final#125;\n      +GameToken(type: GameTokenType, color: GameTokenColor, value: int)\n   }\n   class GameTokenColor {\n      <<enumeration>>\n      RED, BLUE, GREEN, WHITE, BLACK,...\n   }\n   class GameTokenType {\n      <<enumeration>>\n      KNIGHT, PIRATE, VIKING,...\n   }\n   class GameTokens {\n      +getGameTokens(file: File) List~gameToken~$\n   }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-player",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"Player"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addGameToken(gameToken: gameToken)"})," soll den Spielfiguren die\neingehene Spielfigur hinzuf\xfcgen."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-gametokens",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"GameTokens"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"List<GameToken> getGameTokens(file: File)"})," soll alle Spielfiguren\nder eingehenden Datei in einer zuf\xe4lligen Reihenfolge zur\xfcckgeben."]}),"\n",(0,s.jsx)(n.h2,{id:"beispielhafter-aufbau-der-spielfigurendatei",children:"Beispielhafter Aufbau der Spielfigurendatei"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"KNIGHT;RED;3\nPIRATE;BLUE;2\nPIRATE;GREEN;4\nVIKING;WHITE;1\n"})})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return l}});var i=a(67294);let s={},r=i.createContext(s);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);