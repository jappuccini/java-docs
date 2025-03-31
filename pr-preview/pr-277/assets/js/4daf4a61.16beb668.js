"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9590"],{18745:function(e,a,s){s.r(a),s.d(a,{default:()=>m,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/fantasy-game","title":"Fantasy-Spiel","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/fantasy-game.md","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/fantasy-game","permalink":"/java-docs/pr-preview/pr-277/exam-exercises/exam-exercises-java2/class-diagrams/fantasy-game","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/fantasy-game.md","tags":[{"inline":true,"label":"interfaces","permalink":"/java-docs/pr-preview/pr-277/tags/interfaces"},{"inline":true,"label":"comparators","permalink":"/java-docs/pr-preview/pr-277/tags/comparators"},{"inline":true,"label":"exceptions","permalink":"/java-docs/pr-preview/pr-277/tags/exceptions"},{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-277/tags/records"},{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-277/tags/maps"},{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-277/tags/optionals"}],"version":"current","frontMatter":{"title":"Fantasy-Spiel","description":"","tags":["interfaces","comparators","exceptions","records","maps","optionals"]},"sidebar":"examExercisesSidebar","previous":{"title":"W\xf6rterbuch","permalink":"/java-docs/pr-preview/pr-277/exam-exercises/exam-exercises-java2/class-diagrams/dictionary"},"next":{"title":"Personalverwaltung","permalink":"/java-docs/pr-preview/pr-277/exam-exercises/exam-exercises-java2/class-diagrams/human-resources"}}'),r=s("85893"),t=s("50065");let i={title:"Fantasy-Spiel",description:"",tags:["interfaces","comparators","exceptions","records","maps","optionals"]},l=void 0,c={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Character</em>",id:"hinweis-zur-klasse-character",level:2},{value:"Hinweise zur Klasse <em>Game</em>",id:"hinweise-zur-klasse-game",level:2}];function d(e){let a={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,r.jsx)(a.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(a.mermaid,{value:"classDiagram\n    Character o-- Race\n    Character o-- Profession\n    Game o-- Character\n    Game o-- Status\n    Comparable~T~ <|.. Character: implements\n    class Status {\n        <<enumeration>>\n        STUN, BLEED, DISORIENTED\n    }\n    class Race {\n        <<enumeration>>\n        HUMAN, ORC, DWARF,...\n    }\n    class Profession {\n        <<enumeration>>\n        HUNTER, MAGE, WARRIOR,...\n    }\n    class Character {\n        <<record>>\n        name: String\n        race: Race\n        profession: Profession\n        level: int\n        experiencePoints: int\n        +compareTo(other: Character) int\n    }\n    class Game {\n        <<record>>\n        characters: Map~Character, Status~\n        +setStatus(character: Character, newStatus: Status) Status\n        +getCharacterByStatus(status: Status) Optional~Character~\n    }\n    class Comparable~T~ {\n        <<interface>>\n        +compareTo(other: T) int\n    }"}),"\n",(0,r.jsx)(a.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(a.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,r.jsxs)(a.h2,{id:"hinweis-zur-klasse-character",children:["Hinweis zur Klasse ",(0,r.jsx)(a.em,{children:"Character"})]}),"\n",(0,r.jsxs)(a.p,{children:["Die Methode ",(0,r.jsx)(a.code,{children:"int compareTo(other: Character)"})," soll so implementiert werden, dass\nSpielfiguren absteigend nach ihrem Level und bei gleichem Level absteigend nach\nihren Erfahrungspunkten sortiert werden k\xf6nnen."]}),"\n",(0,r.jsxs)(a.h2,{id:"hinweise-zur-klasse-game",children:["Hinweise zur Klasse ",(0,r.jsx)(a.em,{children:"Game"})]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Die Schl\xfcssel-Werte-Paare des Assoziativspeichers ",(0,r.jsx)(a.code,{children:"characters"})," beinhalten als\nSchl\xfcssel eine Spielfigur sowie als Wert deren Status"]}),"\n",(0,r.jsxs)(a.li,{children:["Die Methode ",(0,r.jsx)(a.code,{children:"Status setStatus(character: Character, newStatus: Status)"})," soll\nden Status der eingehenden Spielfigur auf den eingehenden Wert setzen und den\nalten Status zur\xfcckgeben. F\xfcr den Fall, dass der neue Status dem alten Status\nentspricht, soll die Ausnahme ",(0,r.jsx)(a.code,{children:"InvalidStatusException"})," ausgel\xf6st werden"]}),"\n",(0,r.jsxs)(a.li,{children:["Die Methode ",(0,r.jsx)(a.code,{children:"Optional<Character> getCharacterByStatus(status: Status)"})," soll\neine Spielfigur zum eingehenden Status zur\xfcckgeben"]}),"\n"]})]})}function m(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,a,s){s.d(a,{Z:function(){return l},a:function(){return i}});var n=s(67294);let r={},t=n.createContext(r);function i(e){let a=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);