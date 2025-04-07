"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9906"],{73724:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>u,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"exercises/cases/cases06","title":"Cases06","description":"","source":"@site/docs/exercises/cases/cases06.mdx","sourceDirName":"exercises/cases","slug":"/exercises/cases/cases06","permalink":"/java-docs/pr-preview/pr-286/exercises/cases/cases06","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/cases/cases06.mdx","tags":[],"version":"current","frontMatter":{"title":"Cases06","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Cases05","permalink":"/java-docs/pr-preview/pr-286/exercises/cases/cases05"},"next":{"title":"Schleifen","permalink":"/java-docs/pr-preview/pr-286/exercises/loops/"}}'),t=n("85893"),a=n("50065"),i=n("17490");let l={title:"Cases06",description:""},c=void 0,u={},o=[{value:"Regelwerk",id:"regelwerk",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche je nach eingegebenem Nachnamen und\nGeschlecht eine andere Begr\xfc\xdfungsformel angezeigt."}),"\n",(0,t.jsx)(r.h2,{id:"regelwerk",children:"Regelwerk"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:'"Hallo Herr Nachname" f\xfcr M\xe4nner'}),"\n",(0,t.jsx)(r.li,{children:'"Hallo Frau Nachname" f\xfcr Frauen'}),"\n",(0,t.jsx)(r.li,{children:'"Hallo Nachname" f\xfcr Diverse'}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-console",children:"Gib bitte den Nachnamen ein: Schmidt\nGib bitte das Geschlecht ein (m, w, d): m\nHallo Herr Schmidt\n"})}),"\n",(0,t.jsx)(r.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,t.jsx)(r.p,{children:"Verwende f\xfcr die L\xf6sung eine switch-case-Verzweigung."}),"\n",(0,t.jsx)(i.Z,{pullRequest:"11",branchSuffix:"cases/06"})]})}function h(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},97645:function(e,r,n){n.d(r,{Z:()=>a});var s=n("85893");n("67294");var t=n("67026");function a(e){let{children:r,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_Ymn6",a),hidden:n,children:r})}},58168:function(e,r,n){n.d(r,{Z:()=>x});var s=n("85893"),t=n("67294"),a=n("67026"),i=n("34718"),l=n("16550"),c=n("8714"),u=n("89207"),o=n("69413"),d=n("54510");function h(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var f=n("6735");function m(e){let{className:r,block:n,selectedValue:t,selectValue:l,tabValues:c}=e,u=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),d=e=>{let r=e.currentTarget,n=c[u.indexOf(r)].value;n!==t&&(o(r),l(n))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=u.indexOf(e.currentTarget)+1;r=u[n]??u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;r=u[n]??u[u.length-1]}}r?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:c.map(e=>{let{value:r,label:n,attributes:i}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...i,className:(0,a.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":t===r}),children:n??r},r)})})}function v(e){let{lazy:r,children:n,selectedValue:i}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=l.find(e=>e.props.value===i);return e?(0,t.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function b(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:s}=e,a=function(e){let{values:r,children:n}=e;return(0,t.useMemo)(()=>{let e=r??h(n).map(e=>{let{props:{value:r,label:n,attributes:s,default:t}}=e;return{value:r,label:n,attributes:s,default:t}});return!function(e){let r=(0,o.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[i,f]=(0,t.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:r,tabValues:a})),[m,v]=function(e){let{queryString:r=!1,groupId:n}=e,s=(0,l.k6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,u._X)(a),(0,t.useCallback)(e=>{if(!a)return;let r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})},[a,s])]}({queryString:n,groupId:s}),[b,x]=function(e){let{groupId:r}=e,n=r?`docusaurus.tab.${r}`:null,[s,a]=(0,d.Nk)(n);return[s,(0,t.useCallback)(e=>{n&&a.set(e)},[n,a])]}({groupId:s}),g=(()=>{let e=m??b;return p({value:e,tabValues:a})?e:null})();return(0,c.Z)(()=>{g&&f(g)},[g]),{selectedValue:i,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),v(e),x(e)},[v,x,a]),tabValues:a}}(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(m,{...r,...e}),(0,s.jsx)(v,{...r,...e})]})}function x(e){let r=(0,f.Z)();return(0,s.jsx)(b,{...e,children:h(e.children)},String(r))}},17490:function(e,r,n){n.d(r,{Z:function(){return c}});var s=n(85893);n(67294);var t=n(58168),a=n(97645),i=n(53367),l=n(31705);function c(e){let{pullRequest:r,branchSuffix:n}=e;return(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(l.Z,{language:"console",children:`git switch exercises/${n}`}),(0,s.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(l.Z,{language:"console",children:`git switch solutions/${n}`}),(0,s.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);