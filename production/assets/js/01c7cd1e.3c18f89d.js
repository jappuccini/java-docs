"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1382"],{81246:function(e,a,t){t.r(a),t.d(a,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>u,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"exercises/java-api/java-api04","title":"JavaAPI04","description":"","source":"@site/docs/exercises/java-api/java-api04.mdx","sourceDirName":"exercises/java-api","slug":"/exercises/java-api/java-api04","permalink":"/java-docs/production/exercises/java-api/java-api04","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-api/java-api04.mdx","tags":[],"version":"current","frontMatter":{"title":"JavaAPI04","description":""},"sidebar":"exercisesSidebar","previous":{"title":"JavaAPI03","permalink":"/java-docs/production/exercises/java-api/java-api03"},"next":{"title":"Aufz\xe4hlungen (Enumerations)","permalink":"/java-docs/production/exercises/enumerations/"}}'),n=t("85893"),i=t("50065"),s=t("17490");let l={title:"JavaAPI04",description:""},o=void 0,u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){let a={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche den vorzeichenfreien Dezimalwert einer\neingegebenen negativen short-Zahl (-1 bis -32.768) berechnet und ausgibt."}),"\n",(0,n.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:"Gib bitte einen Wert zwischen -1 und -32.768 ein: -2854\nErgebnis: Der vorzeichenfreie Dezimalwert betr\xe4gt 62682\n"})}),"\n",(0,n.jsx)(a.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,n.jsxs)(a.p,{children:["Die Klasse ",(0,n.jsx)(a.code,{children:"Short"})," stellt f\xfcr die R\xfcckgabe des vorzeichenfreien Dezimalwerts\neine passende Methode zur Verf\xfcgung."]}),"\n",(0,n.jsx)(s.Z,{pullRequest:"33",branchSuffix:"java-api/04"})]})}function p(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},97645:function(e,a,t){t.d(a,{Z:()=>i});var r=t("85893");t("67294");var n=t("67026");function i(e){let{children:a,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_Ymn6",i),hidden:t,children:a})}},58168:function(e,a,t){t.d(a,{Z:()=>j});var r=t("85893"),n=t("67294"),i=t("67026"),s=t("34718"),l=t("16550"),o=t("8714"),u=t("89207"),c=t("69413"),d=t("54510");function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:a,tabValues:t}=e;return t.some(e=>e.value===a)}var f=t("6735");function v(e){let{className:a,block:t,selectedValue:n,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let a=e.currentTarget,t=o[u.indexOf(a)].value;t!==n&&(c(a),l(t))},p=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1]}}a?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},a),children:o.map(e=>{let{value:a,label:t,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...s,className:(0,i.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":n===a}),children:t??a},a)})})}function b(e){let{lazy:a,children:t,selectedValue:s}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){let e=l.find(e=>e.props.value===s);return e?(0,n.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==s}))})}function m(e){let a=function(e){let{defaultValue:a,queryString:t=!1,groupId:r}=e,i=function(e){let{values:a,children:t}=e;return(0,n.useMemo)(()=>{let e=a??p(t).map(e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}});return!function(e){let a=(0,c.lx)(e,(e,a)=>e.value===a.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[a,t])}(e),[s,f]=(0,n.useState)(()=>(function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:a,tabValues:i})),[v,b]=function(e){let{queryString:a=!1,groupId:t}=e,r=(0,l.k6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u._X)(i),(0,n.useCallback)(e=>{if(!i)return;let a=new URLSearchParams(r.location.search);a.set(i,e),r.replace({...r.location,search:a.toString()})},[i,r])]}({queryString:t,groupId:r}),[m,j]=function(e){let{groupId:a}=e,t=a?`docusaurus.tab.${a}`:null,[r,i]=(0,d.Nk)(t);return[r,(0,n.useCallback)(e=>{t&&i.set(e)},[t,i])]}({groupId:r}),g=(()=>{let e=v??m;return h({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{g&&f(g)},[g]),{selectedValue:s,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),j(e)},[b,j,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(v,{...a,...e}),(0,r.jsx)(b,{...a,...e})]})}function j(e){let a=(0,f.Z)();return(0,r.jsx)(m,{...e,children:p(e.children)},String(a))}},17490:function(e,a,t){t.d(a,{Z:function(){return o}});var r=t(85893);t(67294);var n=t(58168),i=t(97645),s=t(53367),l=t(31705);function o(e){let{pullRequest:a,branchSuffix:t}=e;return(0,r.jsxs)(n.Z,{children:[(0,r.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch exercises/${t}`}),(0,r.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch solutions/${t}`}),(0,r.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,r.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);