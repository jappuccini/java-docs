"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["3055"],{7771:function(e,r,t){t.r(r),t.d(r,{default:()=>p,frontMatter:()=>l,metadata:()=>n,assets:()=>u,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"exercises/arrays/arrays01","title":"Arrays01","description":"","source":"@site/docs/exercises/arrays/arrays01.mdx","sourceDirName":"exercises/arrays","slug":"/exercises/arrays/arrays01","permalink":"/java-docs/production/exercises/arrays/arrays01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays01.mdx","tags":[],"version":"current","frontMatter":{"title":"Arrays01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Felder (Arrays)","permalink":"/java-docs/production/exercises/arrays/"},"next":{"title":"Arrays02","permalink":"/java-docs/production/exercises/arrays/arrays02"}}'),a=t("85893"),s=t("50065"),i=t("17490");let l={title:"Arrays01",description:""},o=void 0,u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche alle Zweierpotenzen von 0 bis 15\nberechnet, in einem Feld speichert und anschlie\xdfend auf dem Bildschirm ausgibt."}),"\n",(0,a.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-console",children:"Zweierpotenzen:\n1\n2\n4\n8\n16\n32\n64\n128\n...\n"})}),"\n",(0,a.jsx)(r.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,a.jsxs)(r.p,{children:["Die statische Methode ",(0,a.jsx)(r.code,{children:"double pow(a: double, b: double)"})," der Klasse ",(0,a.jsx)(r.code,{children:"Math"})," gibt\nden Potenzwert zur eingehenden Basis und dem eingehenden Exponenten zur\xfcck."]}),"\n",(0,a.jsx)(i.Z,{pullRequest:"18",branchSuffix:"arrays/01"})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},97645:function(e,r,t){t.d(r,{Z:()=>s});var n=t("85893");t("67294");var a=t("67026");function s(e){let{children:r,hidden:t,className:s}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",s),hidden:t,children:r})}},58168:function(e,r,t){t.d(r,{Z:()=>x});var n=t("85893"),a=t("67294"),s=t("67026"),i=t("34718"),l=t("16550"),o=t("8714"),u=t("89207"),c=t("69413"),d=t("54510");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var f=t("6735");function b(e){let{className:r,block:t,selectedValue:a,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let r=e.currentTarget,t=o[u.indexOf(r)].value;t!==a&&(c(r),l(t))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1]}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r),children:o.map(e=>{let{value:r,label:t,attributes:i}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...i,className:(0,s.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":a===r}),children:t??r},r)})})}function m(e){let{lazy:r,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=l.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function v(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:n}=e,s=function(e){let{values:r,children:t}=e;return(0,a.useMemo)(()=>{let e=r??p(t).map(e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[i,f]=(0,a.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let n=t.find(e=>e.default)??t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:r,tabValues:s})),[b,m]=function(e){let{queryString:r=!1,groupId:t}=e,n=(0,l.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u._X)(s),(0,a.useCallback)(e=>{if(!s)return;let r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})},[s,n])]}({queryString:t,groupId:n}),[v,x]=function(e){let{groupId:r}=e,t=r?`docusaurus.tab.${r}`:null,[n,s]=(0,d.Nk)(t);return[n,(0,a.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:n}),g=(()=>{let e=b??v;return h({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{g&&f(g)},[g]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),m(e),x(e)},[m,x,s]),tabValues:s}}(e);return(0,n.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(b,{...r,...e}),(0,n.jsx)(m,{...r,...e})]})}function x(e){let r=(0,f.Z)();return(0,n.jsx)(v,{...e,children:p(e.children)},String(r))}},17490:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(85893);t(67294);var a=t(58168),s=t(97645),i=t(53367),l=t(31705);function o(e){let{pullRequest:r,branchSuffix:t}=e;return(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,n.jsx)(l.Z,{language:"console",children:`git switch exercises/${t}`}),(0,n.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,n.jsx)(l.Z,{language:"console",children:`git switch solutions/${t}`}),(0,n.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,n.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);