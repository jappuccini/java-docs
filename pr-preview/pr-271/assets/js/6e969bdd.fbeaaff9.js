"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2629"],{12572:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>u,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"exercises/exceptions/exceptions02","title":"Exceptions02","description":"","source":"@site/docs/exercises/exceptions/exceptions02.mdx","sourceDirName":"exercises/exceptions","slug":"/exercises/exceptions/exceptions02","permalink":"/java-docs/pr-preview/pr-271/exercises/exceptions/exceptions02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/exceptions/exceptions02.mdx","tags":[],"version":"current","frontMatter":{"title":"Exceptions02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Exceptions01","permalink":"/java-docs/pr-preview/pr-271/exercises/exceptions/exceptions01"},"next":{"title":"Exceptions03","permalink":"/java-docs/pr-preview/pr-271/exercises/exceptions/exceptions03"}}'),r=t("85893"),s=t("50065"),l=t("17490");let a={title:"Exceptions02",description:""},o=void 0,u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>Barrel</em>",id:"hinweise-zur-klasse-barrel",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Erstelle die Ausnahmenklasse ",(0,r.jsx)(n.code,{children:"BarrelOverflowException"})]}),"\n",(0,r.jsxs)(n.li,{children:["Erstelle die Klasse ",(0,r.jsx)(n.code,{children:"Barrel"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,r.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche es dem Anwender erm\xf6glicht, ein Fass\nzu erzeugen und zu bef\xfcllen"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n\n    class Barrel {\n        -capacity: int\n        -fluidLevel: int\n        +Barrel(capacity: int)\n        +getCapacity() int\n        +getFluidLevel() int\n        +addFluid(value: int) void\n        +toString() String\n    }"}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-barrel",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"Barrel"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren. Jedes Fass soll dabei\nstandardm\xe4\xdfig leer sein"}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"int getCapacity()"})," soll die Kapazit\xe4t des Fasses zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"int getFluidLevel()"})," soll die aktuelle F\xfcllmenge des Fasses\nzur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void addFluid(value: int)"})," soll den F\xfcllstand um den eingehenden\nBetrag erh\xf6hen. Ist der eingehende Betrag h\xf6her als die verf\xfcgbare\nRestkapazit\xe4t, soll der F\xfcllstand auf die maximale F\xfcllmenge gesetzt und\nanschlie\xdfend die Ausnahme ",(0,r.jsx)(n.code,{children:"BarrelOverflowException"})," ausgel\xf6st werden. Ist der\neingehende Betrag kleiner oder gleich gro\xdf wie die verf\xfcgbare Restkapazit\xe4t,\nsoll der F\xfcllstand um die eingehende Menge erh\xf6ht werden."]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"String toString()"})," soll alle Attribute in der Form ",(0,r.jsx)(n.em,{children:"Barrel\n[capacity=[maximale F\xfcllmenge]] [fluidlevel=[F\xfcllstand]]"})," zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"Gib bitte die Kapazit\xe4t des Fasses ein: 100\nGib bitte die Menge der hinzuzuf\xfcgenden Fl\xfcssigkeit ein: 30\nF\xfcllstand: 30\nGib bitte die Menge der hinzuzuf\xfcgenden Fl\xfcssigkeit ein: 50\nF\xfcllstand: 80\nGib bitte die Menge der hinzuzuf\xfcgenden Fl\xfcssigkeit ein: 40\nF\xfcllstand: 100\nDas war der Tropfen, der das Fass zum \xdcberlaufen gebracht hat\n"})}),"\n",(0,r.jsx)(l.Z,{pullRequest:"50",branchSuffix:"exceptions/02"})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},97645:function(e,n,t){t.d(n,{Z:()=>s});var i=t("85893");t("67294");var r=t("67026");function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",s),hidden:t,children:n})}},58168:function(e,n,t){t.d(n,{Z:()=>b});var i=t("85893"),r=t("67294"),s=t("67026"),l=t("34718"),a=t("16550"),o=t("8714"),u=t("89207"),c=t("69413"),d=t("54510");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var x=t("6735");function m(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let n=e.currentTarget,t=o[u.indexOf(n)].value;t!==r&&(c(n),a(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...l,className:(0,s.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function g(e){let{lazy:n,children:t,selectedValue:l}=e,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=a.find(e=>e.props.value===l);return e?(0,r.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function f(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:i}=e,s=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,x]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=t.find(e=>e.default)??t[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:s})),[m,g]=function(e){let{queryString:n=!1,groupId:t}=e,i=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(s),(0,r.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})},[s,i])]}({queryString:t,groupId:i}),[f,b]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[i,s]=(0,d.Nk)(t);return[i,(0,r.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:i}),v=(()=>{let e=m??f;return p({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{v&&x(v)},[v]),{selectedValue:l,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);x(e),g(e),b(e)},[g,b,s]),tabValues:s}}(e);return(0,i.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,i.jsx)(m,{...n,...e}),(0,i.jsx)(g,{...n,...e})]})}function b(e){let n=(0,x.Z)();return(0,i.jsx)(f,{...e,children:h(e.children)},String(n))}},17490:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(85893);t(67294);var r=t(58168),s=t(97645),l=t(53367),a=t(31705);function o(e){let{pullRequest:n,branchSuffix:t}=e;return(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(a.Z,{language:"console",children:`git switch exercises/${t}`}),(0,i.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(a.Z,{language:"console",children:`git switch solutions/${t}`}),(0,i.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);