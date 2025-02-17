"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["444"],{89467:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>a,assets:()=>u,toc:()=>o,contentTitle:()=>c});var a=JSON.parse('{"id":"exercises/class-diagrams/class-diagrams02","title":"ClassDiagrams02","description":"","source":"@site/docs/exercises/class-diagrams/class-diagrams02.mdx","sourceDirName":"exercises/class-diagrams","slug":"/exercises/class-diagrams/class-diagrams02","permalink":"/java-docs/pr-preview/pr-264/exercises/class-diagrams/class-diagrams02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-diagrams/class-diagrams02.mdx","tags":[],"version":"current","frontMatter":{"title":"ClassDiagrams02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"ClassDiagrams01","permalink":"/java-docs/pr-preview/pr-264/exercises/class-diagrams/class-diagrams01"},"next":{"title":"ClassDiagrams03","permalink":"/java-docs/pr-preview/pr-264/exercises/class-diagrams/class-diagrams03"}}'),r=s("85893"),i=s("50065"),l=s("17490");let t={title:"ClassDiagrams02",description:""},c=void 0,u={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>Player</em>",id:"hinweis-zur-klasse-player",level:2},{value:"Hinweise zur Klasse <em>DiceGame</em>",id:"hinweise-zur-klasse-dicegame",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Passe die Klasse ",(0,r.jsx)(n.code,{children:"Player"})," aus \xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"class-diagrams01",children:"ClassDiagrams01"})," anhand des abgebildeten Klassendiagramms\nan und erstelle die Klasse ",(0,r.jsx)(n.code,{children:"DiceGame"})]}),"\n",(0,r.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche beliebig vielen Spielern erm\xf6glicht,\nabwechselnd mit 3 W\xfcrfeln zu w\xfcrfeln. F\xfcr jedes gew\xfcrfelte Auge bekommt der\njeweilige Spieler einen Punkt. Ziel des Spieles ist es, so nah wie m\xf6glich an\n50 Punkte heranzukommen, ohne allerdings die 50 Punkte zu \xfcberschreiten"}),"\n",(0,r.jsx)(n.li,{children:"Ein Spieler kann entscheiden ob er w\xfcrfeln m\xf6chte oder nicht. Entscheidet sich\nein Spieler nicht mehr zu w\xfcrfeln, kann er in der gesamten Runde nicht mehr\nw\xfcrfeln."}),"\n",(0,r.jsx)(n.li,{children:"Wenn nur noch ein Spieler \xfcbrig bleibt, der nicht \xfcber 50 Punkte ist, hat\ndieser automatisch gewonnen."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    DiceGame o-- Dice\n    DiceGame o-- Player\n    DiceCup --o DiceGame\n\n    class Player {\n        -name: String\n        -score: int\n        -isActive: boolean\n\n        +Player(name: String)\n        +getName() String\n        +getScore() int\n        +setScore(int: score) void\n        +isActive() boolean\n        +setActive(isActive: boolean) void\n    }\n\n    class Dice {\n        -id: int\n        -value: int\n        +Dice(id: int)\n        +getId() int\n        +getValue() int\n        +rollTheDice() void\n    }\n\n    class DiceCup {\n        +rollTheDices(dices: ArrayList~Dice~) void\n        +rollTheDices(dices: Dice[]) void\n    }\n\n    class DiceGame {\n        -diceCup: DiceCup\n        -dices: ArrayList~Dice~\n        -players: ArrayList~Player~\n        -scanner: Scanner\n        -numberOfActivePlayers: int\n        +DiceGame(players: ArrayList~Player~)\n        +start() void\n        +move(player: Player) void\n    }"}),"\n",(0,r.jsxs)(n.h2,{id:"hinweis-zur-klasse-player",children:["Hinweis zur Klasse ",(0,r.jsx)(n.em,{children:"Player"})]}),"\n",(0,r.jsx)(n.p,{children:"Passe den Konstruktor so an, dass auch weiterhin alle Attribute initialisiert\nwerden."}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-dicegame",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"DiceGame"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void start()"})," soll die Spieler abwechselnd einen Spielzug machen\nlassen und am Ende den Sieger und den Verlierer des Spiels auf der Konsole\nausgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void move(player: Player)"})," soll es dem Spieler erm\xf6glichen zu\nw\xfcrfeln, bzw. seinen Spielzug zu beenden"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"Hans hat aktuell 0 Punkte\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nHans hat 8 Punkte\nHans hat insgesamt 8 Punkte\n\u2026\nHans hat aktuell 43 Punkte\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: false\nLisa hat aktuell 41 Punkte\nLisa, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nLisa hat 10 Punkte\nLisa hat insgesamt 51 Punkte\nLisa hat verloren\nDer Sieger hei\xdft Hans und hat 43 Punkte\n"})}),"\n",(0,r.jsx)(l.Z,{pullRequest:"37",branchSuffix:"class-diagrams/02"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},97645:function(e,n,s){s.d(n,{Z:()=>i});var a=s("85893");s("67294");var r=s("67026");function i(e){let{children:n,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",i),hidden:s,children:n})}},58168:function(e,n,s){s.d(n,{Z:()=>b});var a=s("85893"),r=s("67294"),i=s("67026"),l=s("34718"),t=s("16550"),c=s("8714"),u=s("89207"),o=s("69413"),d=s("54510");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:s}=e;return s.some(e=>e.value===n)}var p=s("6735");function g(e){let{className:n,block:s,selectedValue:r,selectValue:t,tabValues:c}=e,u=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),d=e=>{let n=e.currentTarget,s=c[u.indexOf(n)].value;s!==r&&(o(n),t(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let s=u.indexOf(e.currentTarget)+1;n=u[s]??u[0];break}case"ArrowLeft":{let s=u.indexOf(e.currentTarget)-1;n=u[s]??u[u.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:c.map(e=>{let{value:n,label:s,attributes:l}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...l,className:(0,i.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":r===n}),children:s??n},n)})})}function f(e){let{lazy:n,children:s,selectedValue:l}=e,t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){let e=t.find(e=>e.props.value===l);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:t.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:a}=e,i=function(e){let{values:n,children:s}=e;return(0,r.useMemo)(()=>{let e=n??h(s).map(e=>{let{props:{value:n,label:s,attributes:a,default:r}}=e;return{value:n,label:s,attributes:a,default:r}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[l,p]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=s.find(e=>e.default)??s[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:i})),[g,f]=function(e){let{queryString:n=!1,groupId:s}=e,a=(0,t.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,u._X)(i),(0,r.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})},[i,a])]}({queryString:s,groupId:a}),[v,b]=function(e){let{groupId:n}=e,s=n?`docusaurus.tab.${n}`:null,[a,i]=(0,d.Nk)(s);return[a,(0,r.useCallback)(e=>{s&&i.set(e)},[s,i])]}({groupId:a}),x=(()=>{let e=g??v;return m({value:e,tabValues:i})?e:null})();return(0,c.Z)(()=>{x&&p(x)},[x]),{selectedValue:l,selectValue:(0,r.useCallback)(e=>{if(!m({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),b(e)},[f,b,i]),tabValues:i}}(e);return(0,a.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(g,{...n,...e}),(0,a.jsx)(f,{...n,...e})]})}function b(e){let n=(0,p.Z)();return(0,a.jsx)(v,{...e,children:h(e.children)},String(n))}},17490:function(e,n,s){s.d(n,{Z:function(){return c}});var a=s(85893);s(67294);var r=s(58168),i=s(97645),l=s(53367),t=s(31705);function c(e){let{pullRequest:n,branchSuffix:s}=e;return(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(t.Z,{language:"console",children:`git switch exercises/${s}`}),(0,a.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,a.jsx)(t.Z,{language:"console",children:`git switch solutions/${s}`}),(0,a.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);