"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7406"],{57765:function(e,l,n){n.r(l),n.d(l,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>u,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"exercises/java-stream-api/java-stream-api02","title":"JavaStreamAPI02","description":"","source":"@site/docs/exercises/java-stream-api/java-stream-api02.mdx","sourceDirName":"exercises/java-stream-api","slug":"/exercises/java-stream-api/java-stream-api02","permalink":"/java-docs/pr-preview/pr-275/exercises/java-stream-api/java-stream-api02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-stream-api/java-stream-api02.mdx","tags":[],"version":"current","frontMatter":{"title":"JavaStreamAPI02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"JavaStreamAPI01","permalink":"/java-docs/pr-preview/pr-275/exercises/java-stream-api/java-stream-api01"},"next":{"title":"Komponententests (Unit-Tests)","permalink":"/java-docs/pr-preview/pr-275/exercises/unit-tests/"}}'),a=n("85893"),r=n("50065"),s=n("17490");let i={title:"JavaStreamAPI02",description:""},o=void 0,u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>FootballerQueries</em>",id:"hinweise-zur-klasse-footballerqueries",level:2}];function d(e){let l={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:["Erstelle die Klassen ",(0,a.jsx)(l.code,{children:"FootballClub"}),", ",(0,a.jsx)(l.code,{children:"Position"}),", ",(0,a.jsx)(l.code,{children:"Footballer"})," und\n",(0,a.jsx)(l.code,{children:"FootballerQueries"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,a.jsx)(l.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche alle erstellten Abfragen ausf\xfchrt und\ndie Ergebnisse auf der Konsole ausgibt"}),"\n"]}),"\n",(0,a.jsx)(l.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(l.mermaid,{value:"classDiagram\n    Footballer o-- Position\n    Footballer o-- FootballClub\n    FootballerQueries o-- Footballer\n\n    class Position {\n        <<enumeration>>\n        GOALKEEPER\n        DEFENDER\n        MIDFIELDER\n        STRIKER\n    }\n\n    class Footballer {\n        <<record>>\n        name: String\n        position: Position\n        birthdate: LocalDate\n        sizeInCm: int\n        footballClub: FootballClub\n        numberOfGames: int\n        numberOfGoals: int\n    }\n\n    class FootballClub {\n        <<record>>\n        name: String\n        positionInAllTimeTable: int\n        pointsInAllTimeTable: int\n    }\n\n    class FootballerQueries {\n        <<record>>\n        footballers: List~Footballer~\n        +getTotalOfAllGoalsByMidfielders() int\n        +getNameOfVfLWolfsburgFootballerWithMostPlayedGames() Optional~String~\n        +getAllFootballClubs() List~FootballClub~\n        +isFootballerWithSizeInCmLT170AndNumberOfGoalsBT0() boolean\n        +getAllFootballersByBirthyear() Map~Integer&sbquo; List~Footballer~~\n        +getAverageNumberOfPointsFromAllBundesligaFootballClubs() OptionalDouble\n    }"}),"\n",(0,a.jsxs)(l.h2,{id:"hinweise-zur-klasse-footballerqueries",children:["Hinweise zur Klasse ",(0,a.jsx)(l.em,{children:"FootballerQueries"})]}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:["Mannschaften, die nicht der ewigen Tabelle der Bundesliga vertreten sind,\nbesitzen sowohl f\xfcr die Position als auch die Punktzahl den Wert ",(0,a.jsx)(l.code,{children:"-1"})]}),"\n",(0,a.jsxs)(l.li,{children:["Die Methode ",(0,a.jsx)(l.code,{children:"int getTotalOfAllGoalsByMidfielders()"})," soll die Summe aller\ngeschossener Tore von Mittelfeldspielerinnen zur\xfcckgeben"]}),"\n",(0,a.jsxs)(l.li,{children:["Die Methode\n",(0,a.jsx)(l.code,{children:"Optional<String> getNameOfVfLWolfsburgFootballerWithMostPlayedGames()"})," soll\nden Namen der Spielerin vom VfL Wolfsburg mit den meisten Spielen zur\xfcckgeben"]}),"\n",(0,a.jsxs)(l.li,{children:["Die Methode ",(0,a.jsx)(l.code,{children:"List<FootballClub> getAllFootballClubs()"})," soll alle Vereine\nzur\xfcckgeben"]}),"\n",(0,a.jsxs)(l.li,{children:["Die Methode ",(0,a.jsx)(l.code,{children:"boolean isFootballerWithSizeInCmLT170AndNumbreOfGoalsBT0()"})," soll\ndie Antwort auf die Frage, ob es eine Spielerin gibt, die kleiner als 170cm\nist und mindestens ein Tor geschossen hat, zur\xfcckgeben"]}),"\n",(0,a.jsxs)(l.li,{children:["Die Methode ",(0,a.jsx)(l.code,{children:"Map<Integer, List<Footballer>> getAllFootballersByBirthyear()"}),"\nsoll alle Spielerinnen gruppiert nach ihrem Geburtsjahr zur\xfcckgeben"]}),"\n",(0,a.jsxs)(l.li,{children:["Die Methode\n",(0,a.jsx)(l.code,{children:"OptionalDouble getAverageNumberOfPointsFromAllBundesligaFootballClubs()"})," soll\ndie durchschnittliche Punktzahl aller Bundesligamannschaften in der Ewigen\nTabelle zur\xfcckgeben"]}),"\n"]}),"\n",(0,a.jsx)(s.Z,{pullRequest:"72",branchSuffix:"stream-api/02"})]})}function h(e={}){let{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},97645:function(e,l,n){n.d(l,{Z:()=>r});var t=n("85893");n("67294");var a=n("67026");function r(e){let{children:l,hidden:n,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",r),hidden:n,children:l})}},58168:function(e,l,n){n.d(l,{Z:()=>v});var t=n("85893"),a=n("67294"),r=n("67026"),s=n("34718"),i=n("16550"),o=n("8714"),u=n("89207"),c=n("69413"),d=n("54510");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function b(e){let{value:l,tabValues:n}=e;return n.some(e=>e.value===l)}var m=n("6735");function p(e){let{className:l,block:n,selectedValue:a,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let l=e.currentTarget,n=o[u.indexOf(l)].value;n!==a&&(c(l),i(n))},h=e=>{let l=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=u.indexOf(e.currentTarget)+1;l=u[n]??u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;l=u[n]??u[u.length-1]}}l?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},l),children:o.map(e=>{let{value:l,label:n,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===l?0:-1,"aria-selected":a===l,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...s,className:(0,r.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":a===l}),children:n??l},l)})})}function f(e){let{lazy:l,children:n,selectedValue:s}=e,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(l){let e=i.find(e=>e.props.value===s);return e?(0,a.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,l)=>(0,a.cloneElement)(e,{key:l,hidden:e.props.value!==s}))})}function g(e){let l=function(e){let{defaultValue:l,queryString:n=!1,groupId:t}=e,r=function(e){let{values:l,children:n}=e;return(0,a.useMemo)(()=>{let e=l??h(n).map(e=>{let{props:{value:l,label:n,attributes:t,default:a}}=e;return{value:l,label:n,attributes:t,default:a}});return!function(e){let l=(0,c.lx)(e,(e,l)=>e.value===l.value);if(l.length>0)throw Error(`Docusaurus error: Duplicate values "${l.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[l,n])}(e),[s,m]=(0,a.useState)(()=>(function(e){let{defaultValue:l,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!b({value:l,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}let t=n.find(e=>e.default)??n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:l,tabValues:r})),[p,f]=function(e){let{queryString:l=!1,groupId:n}=e,t=(0,i.k6)(),r=function(e){let{queryString:l=!1,groupId:n}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:l,groupId:n});return[(0,u._X)(r),(0,a.useCallback)(e=>{if(!r)return;let l=new URLSearchParams(t.location.search);l.set(r,e),t.replace({...t.location,search:l.toString()})},[r,t])]}({queryString:n,groupId:t}),[g,v]=function(e){let{groupId:l}=e,n=l?`docusaurus.tab.${l}`:null,[t,r]=(0,d.Nk)(n);return[t,(0,a.useCallback)(e=>{n&&r.set(e)},[n,r])]}({groupId:t}),j=(()=>{let e=p??g;return b({value:e,tabValues:r})?e:null})();return(0,o.Z)(()=>{j&&m(j)},[j]),{selectedValue:s,selectValue:(0,a.useCallback)(e=>{if(!b({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),v(e)},[f,v,r]),tabValues:r}}(e);return(0,t.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(p,{...l,...e}),(0,t.jsx)(f,{...l,...e})]})}function v(e){let l=(0,m.Z)();return(0,t.jsx)(g,{...e,children:h(e.children)},String(l))}},17490:function(e,l,n){n.d(l,{Z:function(){return o}});var t=n(85893);n(67294);var a=n(58168),r=n(97645),s=n(53367),i=n(31705);function o(e){let{pullRequest:l,branchSuffix:n}=e;return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(r.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(i.Z,{language:"console",children:`git switch exercises/${n}`}),(0,t.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(r.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(i.Z,{language:"console",children:`git switch solutions/${n}`}),(0,t.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(r.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${l}/files?diff=split`,children:["PR#",l]})]})]})}}}]);