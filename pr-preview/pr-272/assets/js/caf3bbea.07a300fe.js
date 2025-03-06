"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5882"],{59328:function(e,r,a){a.r(r),a.d(r,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>l,toc:()=>o,contentTitle:()=>c});var n=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/queries/characters","title":"Spielfiguren","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/queries/characters.md","sourceDirName":"exam-exercises/exam-exercises-java2/queries","slug":"/exam-exercises/exam-exercises-java2/queries/characters","permalink":"/java-docs/pr-preview/pr-272/exam-exercises/exam-exercises-java2/queries/characters","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/queries/characters.md","tags":[{"inline":true,"label":"interfaces","permalink":"/java-docs/pr-preview/pr-272/tags/interfaces"},{"inline":true,"label":"comparators","permalink":"/java-docs/pr-preview/pr-272/tags/comparators"},{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-272/tags/records"},{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-272/tags/maps"},{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-272/tags/optionals"},{"inline":true,"label":"java-stream-api","permalink":"/java-docs/pr-preview/pr-272/tags/java-stream-api"}],"version":"current","frontMatter":{"title":"Spielfiguren","description":"","tags":["interfaces","comparators","records","maps","optionals","java-stream-api"]},"sidebar":"examExercisesSidebar","previous":{"title":"Abfragen","permalink":"/java-docs/pr-preview/pr-272/exam-exercises/exam-exercises-java2/queries/"},"next":{"title":"St\xe4dte","permalink":"/java-docs/pr-preview/pr-272/exam-exercises/exam-exercises-java2/queries/cities"}}'),s=a("85893"),i=a("50065");let t={title:"Spielfiguren",description:"",tags:["interfaces","comparators","records","maps","optionals","java-stream-api"]},c=void 0,l={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>CharacterQueries</em>",id:"hinweise-zur-klasse-characterqueries",level:2}];function d(e){let r={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,s.jsx)(r.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(r.mermaid,{value:"classDiagram\n   Character o-- Race\n   Character o-- Profession\n   CharacterQueries --o Character\n   Comparable~T~ <|.. Character: implements\n   class Race {\n      <<enumeration>>\n      HUMAN, ORC, DWARF,...\n   }\n   class Profession {\n      <<enumeration>>\n      HUNTER, MAGE, WARRIOR,...\n   }\n   class Character {\n      <<record>>\n      name: String\n      race: Race\n      profession: Profession\n      level: int\n      experiencePoints: int\n      +compareTo(other: Character) int\n   }\n   class Comparable~T~ {\n      <<interface>>\n      +compareTo(other: T) int\n   }\n   class CharacterQueries {\n      <<record>>\n      characters: List~Character~\n      +getAnyOrcHunter() Optional~Character~\n      +getNumberOfCharactersByName(name: String) long\n      +getAverageExperiencePointsOfAllMages() OptionalDouble\n      +getUniqueCharacterNames() List~String~\n      +getCharactersByRace() Map~Race&sbquo; List~Character~~\n   }"}),"\n",(0,s.jsx)(r.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(r.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"hinweise-zur-klasse-characterqueries",children:["Hinweise zur Klasse ",(0,s.jsx)(r.em,{children:"CharacterQueries"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Die Methode ",(0,s.jsx)(r.code,{children:"Optional<Character> getAnyOrcHunter()"})," soll einen beliebigen\nOrk-J\xe4ger zur\xfcckgeben"]}),"\n",(0,s.jsxs)(r.li,{children:["Die Methode ",(0,s.jsx)(r.code,{children:"long getNumberOfCharactersByName(name: String)"})," soll die Anzahl\naller Spielfiguren zum eingehenden Namen zur\xfcckgeben"]}),"\n",(0,s.jsxs)(r.li,{children:["Die Methode ",(0,s.jsx)(r.code,{children:"OptionalDouble getAverageExperiencePointsOfAllMages()"})," soll die\ndurchschnittlichen Erfahrungspunkte aller Magier zur\xfcckgeben"]}),"\n",(0,s.jsxs)(r.li,{children:["Die Methode ",(0,s.jsx)(r.code,{children:"List<String> getUniqueCharacterNames()"})," soll die Namen aller\nSpielfiguren ohne Dopplungen absteigend sortiert zur\xfcckgeben"]}),"\n",(0,s.jsxs)(r.li,{children:["Die Methode ",(0,s.jsx)(r.code,{children:"Map<Race, List<Character>> getCharactersByRace()"})," soll alle\nSpielfiguren gruppiert nach der Rasse zur\xfcckgeben"]}),"\n"]})]})}function m(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,r,a){a.d(r,{Z:function(){return c},a:function(){return t}});var n=a(67294);let s={},i=n.createContext(s);function t(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);