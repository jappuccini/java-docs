"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9280"],{1467:function(e,n,s){s.r(n),s.d(n,{default:()=>c,frontMatter:()=>t,metadata:()=>a,assets:()=>o,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/class-diagrams/weather-station","title":"Wetterstation","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/class-diagrams/weather-station.md","sourceDirName":"exam-exercises/exam-exercises-java1/class-diagrams","slug":"/exam-exercises/exam-exercises-java1/class-diagrams/weather-station","permalink":"/java-docs/pr-preview/pr-274/exam-exercises/exam-exercises-java1/class-diagrams/weather-station","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/class-diagrams/weather-station.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-274/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-274/tags/enumerations"},{"inline":true,"label":"io-streams","permalink":"/java-docs/pr-preview/pr-274/tags/io-streams"}],"version":"current","frontMatter":{"title":"Wetterstation","description":"","tags":["oo","enumerations","io-streams"]},"sidebar":"examExercisesSidebar","previous":{"title":"Kurs","permalink":"/java-docs/pr-preview/pr-274/exam-exercises/exam-exercises-java1/class-diagrams/student-course"},"next":{"title":"Zoo","permalink":"/java-docs/pr-preview/pr-274/exam-exercises/exam-exercises-java1/class-diagrams/zoo"}}'),r=s("85893"),i=s("50065");let t={title:"Wetterstation",description:"",tags:["oo","enumerations","io-streams"]},l=void 0,o={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>WeatherStation</em>",id:"hinweise-zur-klasse-weatherstation",level:2},{value:"Hinweis zur Klasse <em>ValueHelper</em>",id:"hinweis-zur-klasse-valuehelper",level:2},{value:"Beispielhafter Aufbau der Messwertedatei",id:"beispielhafter-aufbau-der-messwertedatei",level:2}];function u(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n   WeatherStation o-- MeasurementValue\n   MeasurementValue o-- Sensor\n   class WeatherStation {\n      -id: int #123;final#125;\n      -location: String #123;final#125;\n      -measurementValues: List~MeasurementValue~ #123;final#125;\n      -counter: int$\n      +WeatherStation(location: String)\n      +addMeasurementValue(measurementValue: MeasurementValue) void\n      +getAverageValueBySensor(sensor: Sensor, start: long, end: long) double\n   }\n   class MeasurementValue {\n      -timestamp: long #123;final#125;\n      -value: double #123;final#125;\n      -sensor: Sensor #123;final#125;\n      +MeasurementValue(timestamp: long, value: double, sensor: Sensor)\n   }\n   class Sensor {\n      <<enumeration>>\n      TEMPERATURE = Temperatur, \xb0C\n      HUMIDITY = Luftfeuchtigkeit, %\n      AIRPRESSURE = Luftdruck, hPa\n      PRECIPITATION = Niederschlag, mm\n      -description: String\n      -unitOfMeasure: String\n   }\n   class ValueHelper {\n      +getValues(file: File) List~MeasurementValue~$\n   }"}),"\n",(0,r.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-weatherstation",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"WeatherStation"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Der Konstruktor soll den Z\xe4hler inkrementieren, den Standort sowie die\nMesswerte initialisieren und der ID den Wert des Z\xe4hlers zuweisen"}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void addMeasurementValue(measurementValue: MeasurementValue)"}),"\nsoll den Messwerten den eingehenden Messwert hinzuf\xfcgen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"String toString()"})," soll die Wetterstation in der Form ",(0,r.jsx)(n.em,{children:"[ID],\n[Standort]: [Messwerte]"})," zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode\n",(0,r.jsx)(n.code,{children:"double getAverageValueBySensor(sensor: Sensor, start: long, end: long)"})," soll\nden Durchschnittswert aller Messwerte, die innerhalb der eingehenden\nZeitstempel liegen und zum eingehenden Sensor geh\xf6ren, zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweis-zur-klasse-valuehelper",children:["Hinweis zur Klasse ",(0,r.jsx)(n.em,{children:"ValueHelper"})]}),"\n",(0,r.jsxs)(n.p,{children:["Die statische Methode ",(0,r.jsx)(n.code,{children:"List<MeasurementValue> getValues(file: File)"})," soll alle\nMesswerte der eingehenden Datei zur\xfcckgeben."]}),"\n",(0,r.jsx)(n.h2,{id:"beispielhafter-aufbau-der-messwertedatei",children:"Beispielhafter Aufbau der Messwertedatei"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"1732702614139;25.4;TEMPERATURE\n1732702614139;66.21;HUMIDITY\n1732702614139;1013.66;AIRPRESSURE\n1732702614139;0;PRECIPITATION\n1732789072901;19.7;TEMPERATURE\n1732789072901;33.89;HUMIDITY\n1732789072901;1040.12;AIRPRESSURE\n1732789072901;0;PRECIPITATION\n"})})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var a=s(67294);let r={},i=a.createContext(r);function t(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);