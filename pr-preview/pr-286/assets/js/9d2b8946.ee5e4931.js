"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9463"],{16672:function(e,r,n){n.r(r),n.d(r,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>u});var s=JSON.parse('{"id":"exercises/cases/cases03","title":"Cases03","description":"","source":"@site/docs/exercises/cases/cases03.mdx","sourceDirName":"exercises/cases","slug":"/exercises/cases/cases03","permalink":"/java-docs/pr-preview/pr-286/exercises/cases/cases03","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/cases/cases03.mdx","tags":[],"version":"current","frontMatter":{"title":"Cases03","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Cases02","permalink":"/java-docs/pr-preview/pr-286/exercises/cases/cases02"},"next":{"title":"Cases04","permalink":"/java-docs/pr-preview/pr-286/exercises/cases/cases04"}}'),t=n("85893"),a=n("50065"),l=n("17490");let i={title:"Cases03",description:""},u=void 0,o={},c=[{value:"Regelwerk",id:"regelwerk",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche den Vornamen, den Nachnamen, das Alter\nsowie das Geschlecht einer Person einliest und je nach Fall eine andere\nBegr\xfc\xdfungsformel anzeigt."}),"\n",(0,t.jsx)(r.h2,{id:"regelwerk",children:"Regelwerk"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:'"Hallo Herr Nachname" f\xfcr M\xe4nner ab 18'}),"\n",(0,t.jsx)(r.li,{children:'"Hallo Frau Nachname" f\xfcr Frauen ab 18'}),"\n",(0,t.jsx)(r.li,{children:'"Hallo Vorname" f\xfcr Kinder, Jugendliche unter 18 und Diverse'}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"Gib bitte den Vornamen ein: Peter\nGib bitte den Nachnamen ein: M\xfcller\nGib bitte das Alter ein: 60\nGib bitte das Geschlecht ein (m, w, d): m\nHallo Herr M\xfcller\n"})}),"\n",(0,t.jsx)(l.Z,{pullRequest:"9",branchSuffix:"cases/03"})]})}function p(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},97645:function(e,r,n){n.d(r,{Z:()=>a});var s=n("85893");n("67294");var t=n("67026");function a(e){let{children:r,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_Ymn6",a),hidden:n,children:r})}},58168:function(e,r,n){n.d(r,{Z:()=>x});var s=n("85893"),t=n("67294"),a=n("67026"),l=n("34718"),i=n("16550"),u=n("8714"),o=n("89207"),c=n("69413"),d=n("54510");function p(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var f=n("6735");function b(e){let{className:r,block:n,selectedValue:t,selectValue:i,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let r=e.currentTarget,n=u[o.indexOf(r)].value;n!==t&&(c(r),i(n))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1]}}r?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:u.map(e=>{let{value:r,label:n,attributes:l}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{o.push(e)},onKeyDown:p,onClick:d,...l,className:(0,a.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":t===r}),children:n??r},r)})})}function m(e){let{lazy:r,children:n,selectedValue:l}=e,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=i.find(e=>e.props.value===l);return e?(0,t.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==l}))})}function v(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:s}=e,a=function(e){let{values:r,children:n}=e;return(0,t.useMemo)(()=>{let e=r??p(n).map(e=>{let{props:{value:r,label:n,attributes:s,default:t}}=e;return{value:r,label:n,attributes:s,default:t}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[l,f]=(0,t.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:r,tabValues:a})),[b,m]=function(e){let{queryString:r=!1,groupId:n}=e,s=(0,i.k6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o._X)(a),(0,t.useCallback)(e=>{if(!a)return;let r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})},[a,s])]}({queryString:n,groupId:s}),[v,x]=function(e){let{groupId:r}=e,n=r?`docusaurus.tab.${r}`:null,[s,a]=(0,d.Nk)(n);return[s,(0,t.useCallback)(e=>{n&&a.set(e)},[n,a])]}({groupId:s}),g=(()=>{let e=b??v;return h({value:e,tabValues:a})?e:null})();return(0,u.Z)(()=>{g&&f(g)},[g]),{selectedValue:l,selectValue:(0,t.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),m(e),x(e)},[m,x,a]),tabValues:a}}(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(b,{...r,...e}),(0,s.jsx)(m,{...r,...e})]})}function x(e){let r=(0,f.Z)();return(0,s.jsx)(v,{...e,children:p(e.children)},String(r))}},17490:function(e,r,n){n.d(r,{Z:function(){return u}});var s=n(85893);n(67294);var t=n(58168),a=n(97645),l=n(53367),i=n(31705);function u(e){let{pullRequest:r,branchSuffix:n}=e;return(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(i.Z,{language:"console",children:`git switch exercises/${n}`}),(0,s.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(i.Z,{language:"console",children:`git switch solutions/${n}`}),(0,s.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);