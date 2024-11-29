"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2267"],{82597:function(e,t,a){a.r(t),a.d(t,{metadata:()=>s,contentTitle:()=>o,default:()=>m,assets:()=>u,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"exercises/activity-diagrams/activity-diagrams01","title":"ActivityDiagrams01","description":"","source":"@site/docs/exercises/activity-diagrams/activity-diagrams01.mdx","sourceDirName":"exercises/activity-diagrams","slug":"/exercises/activity-diagrams/activity-diagrams01","permalink":"/java-docs/production/exercises/activity-diagrams/activity-diagrams01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/activity-diagrams/activity-diagrams01.mdx","tags":[],"version":"current","frontMatter":{"title":"ActivityDiagrams01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Aktivit\xe4tsdiagramme","permalink":"/java-docs/production/exercises/activity-diagrams/"},"next":{"title":"Polymorphie","permalink":"/java-docs/production/exercises/polymorphy/"}}'),i=a("85893"),n=a("50065"),r=a("39661");let l={title:"ActivityDiagrams01",description:""},o=void 0,u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Aktivit\xe4tsdiagramm zur Methode <em>void main(args: String[])</em>",id:"aktivit\xe4tsdiagramm-zur-methode-void-mainargs-string",level:2},{value:"Aktivit\xe4tsdiagramm zur Methode <em>void play()</em>",id:"aktivit\xe4tsdiagramm-zur-methode-void-play",level:2},{value:"Aktivit\xe4tsdiagramm zur Methode <em>boolean move(name: String)</em>",id:"aktivit\xe4tsdiagramm-zur-methode-boolean-movename-string",level:2}];function d(e){let t={code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Erstelle die Klasse ",(0,i.jsx)(t.code,{children:"MainClass"})," anhand des abgebildeten Klassendiagramms sowie\nden abgebildeten Aktivit\xe4tsdiagrammen."]}),"\n",(0,i.jsx)(t.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(t.mermaid,{value:"classDiagram\n    class MainClass {\n        -scanner: Scanner$\n        -randomNumber: int$\n        +main(args: String[])$ void\n        +play()$ void\n        +move(name: String)$ boolean\n    }"}),"\n",(0,i.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-methode-void-mainargs-string",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,i.jsx)(t.em,{children:"void main(args: String[])"})]}),"\n",(0,i.jsx)(t.mermaid,{value:'stateDiagram-v2\n    state "Konsoleneingabe initialisieren" as state1\n    state "[Zufallszahl] erzeugen" as state2\n    state "Ausf\xfchren: [Spielen]" as state3\n\n    state "Ratespiel" as main {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e state3\n        state3 --\x3e [*]\n    }'}),"\n",(0,i.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-methode-void-play",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,i.jsx)(t.em,{children:"void play()"})]}),"\n",(0,i.jsx)(t.mermaid,{value:'stateDiagram-v2\n    state "Ausgabe: Spieler 1, Name eingeben" as state1\n    state "Eingabe: [Name 1]" as state2\n    state "Ausgabe: Spieler 2, Name eingeben" as state3\n    state "Eingabe: [Name 2]" as state4\n    state "Ausf\xfchren: [Zug] mit [Name 1]" as state5\n    state "Ausf\xfchren: [Zug] mit [Name 2]" as state6\n\n    state if1 <<choice>>\n    state if2 <<choice>>\n    state fork1 <<fork>>\n\n    state "Spielen" as play {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e state3\n        state3 --\x3e state4\n        state4 --\x3e state5\n        state5 --\x3e if1\n        if1 --\x3e fork1: sonst\n        if1 --\x3e state6: R\xfcckgabe = true\n        state6 --\x3e if2\n        if2 --\x3e state5: R\xfcckgabe = true\n        if2 --\x3e fork1: sonst\n        fork1 --\x3e [*]\n    }'}),"\n",(0,i.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-methode-boolean-movename-string",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,i.jsx)(t.em,{children:"boolean move(name: String)"})]}),"\n",(0,i.jsx)(t.mermaid,{value:'stateDiagram-v2\n    state "Ausgabe: [Name], Tipp eingeben" as state1\n    state "Eingabe: [Tipp]" as state2\n    state "Ausgabe: Richtig, das war die gesuchte Zahl" as state3\n    state "R\xfcckgabe: true" as state4\n    state "Ausgabe: Die gesuchte Zahl ist kleiner" as state5\n    state "Ausgabe: Die gesuchte Zahl ist gr\xf6\xdfer" as state6\n    state "R\xfcckgabe: false" as state7\n\n    state if1 <<choice>>\n    state fork1 <<fork>>\n    state fork2 <<fork>>\n\n    state "Zug" as move {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e if1\n        if1 --\x3e state3: sonst\n        if1 --\x3e state5: [Tipp] > [Zufallszahl]\n        if1 --\x3e state6: [Tipp] < [Zufallszahl]\n        state3 --\x3e state4\n        state4 --\x3e fork2\n        state5 --\x3e fork1\n        state6 --\x3e fork1\n        fork1 --\x3e state7\n        state7 --\x3e fork2\n        fork2 --\x3e [*]\n    }'}),"\n",(0,i.jsx)(r.Z,{pullRequest:"35",branchSuffix:"activity-diagrams/01"})]})}function m(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5525:function(e,t,a){a.d(t,{Z:()=>r});var s=a("85893");a("67294");var i=a("67026");let n="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(n,r),hidden:a,children:t})}},47902:function(e,t,a){a.d(t,{Z:()=>j});var s=a("85893"),i=a("67294"),n=a("67026"),r=a("69599"),l=a("16550"),o=a("32000"),u=a("4520"),c=a("38341"),d=a("76009");function m(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function g(e){let{value:t,tabValues:a}=e;return a.some(e=>e.value===t)}var h=a("7227");let v="tabList__CuJ",p="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{let t=e.currentTarget,a=o[u.indexOf(t)].value;a!==i&&(c(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{let a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:o.map(e=>{let{value:t,label:a,attributes:r}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>u.push(e),onKeyDown:m,onClick:d,...r,className:(0,n.Z)("tabs__item",p,r?.className,{"tabs__item--active":i===t}),children:a??t},t)})})}function b(e){let{lazy:t,children:a,selectedValue:r}=e,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===r);return e?(0,i.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function x(e){let t=function(e){let{defaultValue:t,queryString:a=!1,groupId:s}=e,n=function(e){let{values:t,children:a}=e;return(0,i.useMemo)(()=>{let e=t??m(a).map(e=>{let{props:{value:t,label:a,attributes:s,default:i}}=e;return{value:t,label:a,attributes:s,default:i}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,a])}(e),[r,h]=(0,i.useState)(()=>(function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let s=a.find(e=>e.default)??a[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:t,tabValues:n})),[v,p]=function(e){let{queryString:t=!1,groupId:a}=e,s=(0,l.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a}),r=(0,u._X)(n);return[r,(0,i.useCallback)(e=>{if(!n)return;let t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})},[n,s])]}({queryString:a,groupId:s}),[f,b]=function(e){var t;let{groupId:a}=e;let s=(t=a)?`docusaurus.tab.${t}`:null,[n,r]=(0,d.Nk)(s);return[n,(0,i.useCallback)(e=>{if(!!s)r.set(e)},[s,r])]}({groupId:s}),x=(()=>{let e=v??f;return g({value:e,tabValues:n})?e:null})();return(0,o.Z)(()=>{x&&h(x)},[x]),{selectedValue:r,selectValue:(0,i.useCallback)(e=>{if(!g({value:e,tabValues:n}))throw Error(`Can't select invalid tab value=${e}`);h(e),p(e),b(e)},[p,b,n]),tabValues:n}}(e);return(0,s.jsxs)("div",{className:(0,n.Z)("tabs-container",v),children:[(0,s.jsx)(f,{...t,...e}),(0,s.jsx)(b,{...t,...e})]})}function j(e){let t=(0,h.Z)();return(0,s.jsx)(x,{...e,children:m(e.children)},String(t))}},39661:function(e,t,a){a.d(t,{Z:function(){return o}});var s=a(85893);a(67294);var i=a(47902),n=a(5525),r=a(83012),l=a(45056);function o(e){let{pullRequest:t,branchSuffix:a}=e;return(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(l.Z,{language:"console",children:`git switch exercises/${a}`}),(0,s.jsx)(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(l.Z,{language:"console",children:`git switch solutions/${a}`}),(0,s.jsx)(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(r.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);