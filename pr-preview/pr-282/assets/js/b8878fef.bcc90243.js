"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8387"],{8217:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>u,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"exercises/java-stream-api/java-stream-api01","title":"JavaStreamAPI01","description":"","source":"@site/docs/exercises/java-stream-api/java-stream-api01.mdx","sourceDirName":"exercises/java-stream-api","slug":"/exercises/java-stream-api/java-stream-api01","permalink":"/java-docs/pr-preview/pr-282/exercises/java-stream-api/java-stream-api01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-stream-api/java-stream-api01.mdx","tags":[],"version":"current","frontMatter":{"title":"JavaStreamAPI01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Die Java Stream API","permalink":"/java-docs/pr-preview/pr-282/exercises/java-stream-api/"},"next":{"title":"JavaStreamAPI02","permalink":"/java-docs/pr-preview/pr-282/exercises/java-stream-api/java-stream-api02"}}'),r=l("85893"),i=l("50065"),a=l("17490");let t={title:"JavaStreamAPI01",description:""},o=void 0,u={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>Console</em>",id:"hinweis-zur-klasse-console",level:2},{value:"Hinweise zur Klasse <em>ConsoleQueries</em>",id:"hinweise-zur-klasse-consolequeries",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Erstelle die Klasse ",(0,r.jsx)(n.code,{children:"ConsoleQueries"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,r.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche alle erstellten Abfragen ausf\xfchrt und\ndie Ergebnisse auf der Konsole ausgibt"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Console o-- Maker\n    ConsoleQueries o-- Console\n\n    class Maker {\n        <<enumeration>>\n        MICROSOFT\n        NINTENDO\n        SONY\n    }\n\n    class Console {\n        <<record>>\n        title: String\n        maker: Maker\n        lifespan: int\n        soldUnitsInMillions: double\n    }\n\n    class ConsoleQueries {\n        <<record>>\n        consoles: List~Console~\n        +getAllCurrentConsoleNames() List~String~\n        +getAllConsolesSortedByLifespan() List~Console~\n        +isAnyConsoleWithMoreThan150MillionSoldUnits() boolean\n        +isAllConsolesWithMoreThan50MillionSoldUnits() boolean\n        +getNumberOfConsolesFromNintendo() long\n        +getSoldUnitsInMillionsPerYearFromAllOutdatedConsoles() List~String~\n        +getAverageSoldUnitsInMillionsPerYearFromAllOutdatedConsoles() OptionalDouble\n        +getAllConsolesByMaker() Map~Maker&sbquo; List~Console~~\n        +getTotalSoldUnitsInMillionsPerMaker() Map~Maker, Double~\n    }"}),"\n",(0,r.jsxs)(n.h2,{id:"hinweis-zur-klasse-console",children:["Hinweis zur Klasse ",(0,r.jsx)(n.em,{children:"Console"})]}),"\n",(0,r.jsxs)(n.p,{children:["Konsolen, die aktuell noch verkauft werden, besitzen bei der Lebensspanne den\nWert ",(0,r.jsx)(n.code,{children:"-1"})," (Stand: 14.06.2023)"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-consolequeries",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"ConsoleQueries"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"List<String> getAllCurrentConsoleNames()"})," soll die Namen aller\nKonsolen, die aktuell noch verkauft werden zur\xfcckgeben (",(0,r.jsx)(n.em,{children:"Nintendo Switch,\nPlayStation 4, XBox One"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"List<Console> getAllConsolesSortedByLifespan()"})," soll alle\nKonsolen absteigend sortiert nach der Lebensspanne zur\xfcckgeben\n(",(0,r.jsx)(n.em,{children:"VideoGameConsole[title=Nintendo Wii, maker=NINTENDO, lifespan=13,\nsoldUnits=101.63]"}),",...)"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"boolean isAnyConsoleWithMoreThan150MillionSoldUnits()"})," soll die\nAntwort auf die Frage, ob es eine Konsole mit mehr als 150 Millionen\nverkauften Einheiten gibt, zur\xfcckgeben (",(0,r.jsx)(n.em,{children:"true"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"boolean isAllConsolesWithMoreThan50MillionSoldUnits()"})," soll die\nAntwort auf die Frage, ob von allen Konsolen mehr als 50 Millionen Einheiten\nverkauft wurden, zur\xfcckgeben (",(0,r.jsx)(n.em,{children:"false"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"long getNumberOfConsolesFromNintendo()"})," soll die Anzahl der\nKonsolen von Nintendo zur\xfcckgeben (",(0,r.jsx)(n.em,{children:"8"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode\n",(0,r.jsx)(n.code,{children:"List<String> getSoldUnitsInMillionsPerYearFromAllOutdatedConsoles()"})," soll die\nNamen aller Konsolen, die nicht mehr verkauft werden sowie die Anzahl\nverkaufter Einheiten pro Jahr in Millionen zur\xfcckgeben (",(0,r.jsx)(n.em,{children:"PlayStation 2\n(13.225)"}),",...)"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode\n",(0,r.jsx)(n.code,{children:"OptionalDouble getAverageSoldUnitsInMillionsPerYearFromAllOutdatedConsoles()"}),"\nsoll den Durchschnitt verkaufter Einheiten pro Jahr in Millionen aller\nKonsolen, die nicht mehr verkauft werden zur\xfcckgeben (",(0,r.jsx)(n.em,{children:"9.900365412365412"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"Map<Maker, List<Console>> getAllConsolesByMaker()"})," soll alle\nKonsolen gruppiert nach den Herstellern zur\xfcckgeben (",(0,r.jsx)(n.em,{children:"MICROSOFT:\n[VideoGameConsole[title=XBox 360, maker=MICROSOFT, lifespan=12,\nsoldUnitsInMillions=85.81]"}),",...],...)"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"Map<Maker, Double> getTotalSoldUnitsInMillionsPerMaker()"})," soll\ndie Anzahl verkaufter Einheiten pro Hersteller in Millionen zur\xfcckgeben\n(",(0,r.jsx)(n.em,{children:"MICROSOFT: 137.07"}),",...)"]}),"\n"]}),"\n",(0,r.jsx)(a.Z,{pullRequest:"71",branchSuffix:"stream-api/01"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},97645:function(e,n,l){l.d(n,{Z:()=>i});var s=l("85893");l("67294");var r=l("67026");function i(e){let{children:n,hidden:l,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",i),hidden:l,children:n})}},58168:function(e,n,l){l.d(n,{Z:()=>x});var s=l("85893"),r=l("67294"),i=l("67026"),a=l("34718"),t=l("16550"),o=l("8714"),u=l("89207"),d=l("69413"),c=l("54510");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:l}=e;return l.some(e=>e.value===n)}var p=l("6735");function f(e){let{className:n,block:l,selectedValue:r,selectValue:t,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=e=>{let n=e.currentTarget,l=o[u.indexOf(n)].value;l!==r&&(d(n),t(l))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let l=u.indexOf(e.currentTarget)+1;n=u[l]??u[0];break}case"ArrowLeft":{let l=u.indexOf(e.currentTarget)-1;n=u[l]??u[u.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},n),children:o.map(e=>{let{value:n,label:l,attributes:a}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{u.push(e)},onKeyDown:h,onClick:c,...a,className:(0,i.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":r===n}),children:l??n},n)})})}function v(e){let{lazy:n,children:l,selectedValue:a}=e,t=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){let e=t.find(e=>e.props.value===a);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:t.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:l=!1,groupId:s}=e,i=function(e){let{values:n,children:l}=e;return(0,r.useMemo)(()=>{let e=n??h(l).map(e=>{let{props:{value:n,label:l,attributes:s,default:r}}=e;return{value:n,label:l,attributes:s,default:r}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,l])}(e),[a,p]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:l}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=l.find(e=>e.default)??l[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:i})),[f,v]=function(e){let{queryString:n=!1,groupId:l}=e,s=(0,t.k6)(),i=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,u._X)(i),(0,r.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})},[i,s])]}({queryString:l,groupId:s}),[j,x]=function(e){let{groupId:n}=e,l=n?`docusaurus.tab.${n}`:null,[s,i]=(0,c.Nk)(l);return[s,(0,r.useCallback)(e=>{l&&i.set(e)},[l,i])]}({groupId:s}),b=(()=>{let e=f??j;return m({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{b&&p(b)},[b]),{selectedValue:a,selectValue:(0,r.useCallback)(e=>{if(!m({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),v(e),x(e)},[v,x,i]),tabValues:i}}(e);return(0,s.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(f,{...n,...e}),(0,s.jsx)(v,{...n,...e})]})}function x(e){let n=(0,p.Z)();return(0,s.jsx)(j,{...e,children:h(e.children)},String(n))}},17490:function(e,n,l){l.d(n,{Z:function(){return o}});var s=l(85893);l(67294);var r=l(58168),i=l(97645),a=l(53367),t=l(31705);function o(e){let{pullRequest:n,branchSuffix:l}=e;return(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(t.Z,{language:"console",children:`git switch exercises/${l}`}),(0,s.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${l}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(t.Z,{language:"console",children:`git switch solutions/${l}`}),(0,s.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${l}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);