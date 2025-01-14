"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4129"],{76933:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/queries/cities","title":"St\xe4dte","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/queries/cities.md","sourceDirName":"exam-exercises/exam-exercises-java2/queries","slug":"/exam-exercises/exam-exercises-java2/queries/cities","permalink":"/java-docs/pr-preview/pr-249/exam-exercises/exam-exercises-java2/queries/cities","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/queries/cities.md","tags":[{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-249/tags/records"},{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-249/tags/maps"},{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-249/tags/optionals"},{"inline":true,"label":"java-stream-api","permalink":"/java-docs/pr-preview/pr-249/tags/java-stream-api"}],"version":"current","frontMatter":{"title":"St\xe4dte","description":"","tags":["records","maps","optionals","java-stream-api"]},"sidebar":"examExercisesSidebar","previous":{"title":"Abfragen","permalink":"/java-docs/pr-preview/pr-249/exam-exercises/exam-exercises-java2/queries/"},"next":{"title":"Messdaten","permalink":"/java-docs/pr-preview/pr-249/exam-exercises/exam-exercises-java2/queries/measurement-data"}}'),r=i("85893"),t=i("50065");let a={title:"St\xe4dte",description:"",tags:["records","maps","optionals","java-stream-api"]},l=void 0,o={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>CityQueries</em>",id:"hinweise-zur-klasse-cityqueries",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n\n    City o-- Major\n    Major o-- Gender\n    CityQueries o-- City\n    City o-- GeoLocation\n\n    class City {\n        <<record>>\n        name: String\n        areaInKm2: double\n        inhabitants: int\n        geoLocation: GeoLocation\n        major: Major\n        pointsOfInterest: List~String~\n    }\n\n    class GeoLocation {\n        <<enumeration>>\n        EUROPE, ASIA,...\n    }\n\n    class Gender {\n        <<enumeration>>\n        MALE, FEMALE, INTERSEX\n    }\n\n    class Major {\n        <<record>>\n        name: String\n        gender: Gender\n    }\n\n    class CityQueries {\n        <<record>>\n        cities: List~City~\n        +getAllMajorsByGender() Map~Gender&sbquo; List~Major~~\n        +getAllNamesFromCitiesInEuropeWithMoreThan1MioInhabitants() List~String~\n        +getNameOfMajorByNameOfCity(nameOfCity: String) Optional~String~\n        +getTotalAreaInKm2OfAllCitiesWithFemaleMajors() double\n        +printCityWithMostPointsOfInterest() void\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-cityqueries",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"CityQueries"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"Map<Gender, List<Major>> getAllMajorsByGender()"})," soll alle\nB\xfcrgermeister gruppiert nach Geschlecht zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode\n",(0,r.jsx)(n.code,{children:"List<String> getAllNamesFromCitiesInEuropeWithMoreThan1MioInhabitants()"})," soll\ndie Namen aller europ\xe4ischen St\xe4dte mit mehr als 1 Million Einwohner\nzur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"Optional<String> getNameOfMajorByNameOfCity(nameOfCity: String)"}),"\nsoll den Namen des B\xfcrgermeisters zum eingehenden Stadtnamen zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"double getTotalAreaInKm2OfAllCitiesWithFemaleMajors()"})," soll die\ngesamte Fl\xe4che in km2 aller St\xe4dte mit weiblichen B\xfcrgermeistern zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void printCityWithMostPointsOfInterest()"})," soll die Stadt mit den\nmeisten Sehensw\xfcrdigkeiten in der Form ",(0,r.jsx)(n.em,{children:"Stadtname (Anzahl Sehensw\xfcrdigkeiten)"}),"\nausgeben"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return a}});var s=i(67294);let r={},t=s.createContext(r);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);