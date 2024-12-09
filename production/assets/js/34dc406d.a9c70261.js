"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5550"],{27104:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>o,default:()=>p,assets:()=>u,toc:()=>c,frontMatter:()=>a});var r=JSON.parse('{"id":"exercises/loops/loops03","title":"Loops03","description":"","source":"@site/docs/exercises/loops/loops03.mdx","sourceDirName":"exercises/loops","slug":"/exercises/loops/loops03","permalink":"/java-docs/production/exercises/loops/loops03","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/loops/loops03.mdx","tags":[],"version":"current","frontMatter":{"title":"Loops03","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Loops02","permalink":"/java-docs/production/exercises/loops/loops02"},"next":{"title":"Loops04","permalink":"/java-docs/production/exercises/loops/loops04"}}'),s=n("85893"),i=n("50065"),l=n("39661");let a={title:"Loops03",description:""},o=void 0,u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche eine eingegebene Zeichenkette auf\nH\xe4ufigkeit eines bestimmten Zeichens analysiert. Das Programm soll die absolute\nund relative H\xe4ufigkeit in Bezug auf die Gesamtl\xe4nge der Zeichenkette ausgeben."}),"\n",(0,s.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"Gib bitte eine Zeichenkette ein: Hallo Welt\nGib bitte das zu analysierende Zeichen ein: l\nAbsoluter Anteil: 3\nProzentualer Anteil: 30,00%\n"})}),"\n",(0,s.jsx)(t.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,s.jsxs)(t.p,{children:["Die Methode ",(0,s.jsx)(t.code,{children:"char charAt(index: int)"})," der Klasse ",(0,s.jsx)(t.code,{children:"String"})," gibt das Zeichen mit\ndem Index der eingehenden Zahl zur\xfcck."]}),"\n",(0,s.jsx)(l.Z,{pullRequest:"16",branchSuffix:"loops/03"})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5525:function(e,t,n){n.d(t,{Z:()=>l});var r=n("85893");n("67294");var s=n("67026");let i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i,l),hidden:n,children:t})}},47902:function(e,t,n){n.d(t,{Z:()=>j});var r=n("85893"),s=n("67294"),i=n("67026"),l=n("69599"),a=n("16550"),o=n("32000"),u=n("4520"),c=n("38341"),d=n("76009");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var f=n("7227");let b="tabList__CuJ",m="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let t=e.currentTarget,n=o[u.indexOf(t)].value;n!==s&&(c(t),a(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>u.push(e),onKeyDown:p,onClick:d,...l,className:(0,i.Z)("tabs__item",m,l?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function x(e){let{lazy:t,children:n,selectedValue:l}=e,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=a.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,i=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??p(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,f]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:i})),[b,m]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),l=(0,u._X)(i);return[l,(0,s.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})},[i,r])]}({queryString:n,groupId:r}),[v,x]=function(e){var t;let{groupId:n}=e;let r=(t=n)?`docusaurus.tab.${t}`:null,[i,l]=(0,d.Nk)(r);return[i,(0,s.useCallback)(e=>{if(!!r)l.set(e)},[r,l])]}({groupId:r}),g=(()=>{let e=b??v;return h({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{g&&f(g)},[g]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);f(e),m(e),x(e)},[m,x,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",b),children:[(0,r.jsx)(v,{...t,...e}),(0,r.jsx)(x,{...t,...e})]})}function j(e){let t=(0,f.Z)();return(0,r.jsx)(g,{...e,children:p(e.children)},String(t))}},39661:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(85893);n(67294);var s=n(47902),i=n(5525),l=n(83012),a=n(45056);function o(e){let{pullRequest:t,branchSuffix:n}=e;return(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,r.jsx)(a.Z,{language:"console",children:`git switch exercises/${n}`}),(0,r.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,r.jsx)(a.Z,{language:"console",children:`git switch solutions/${n}`}),(0,r.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,r.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);