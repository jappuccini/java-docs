"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["649"],{19434:function(e,a,t){t.r(a),t.d(a,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>u});var r=JSON.parse('{"id":"exercises/java-api/java-api02","title":"JavaAPI02","description":"","source":"@site/docs/exercises/java-api/java-api02.mdx","sourceDirName":"exercises/java-api","slug":"/exercises/java-api/java-api02","permalink":"/java-docs/pr-preview/pr-282/exercises/java-api/java-api02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-api/java-api02.mdx","tags":[],"version":"current","frontMatter":{"title":"JavaAPI02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"JavaAPI01","permalink":"/java-docs/pr-preview/pr-282/exercises/java-api/java-api01"},"next":{"title":"JavaAPI03","permalink":"/java-docs/pr-preview/pr-282/exercises/java-api/java-api03"}}'),n=t("85893"),i=t("50065"),s=t("17490");let l={title:"JavaAPI02",description:""},u=void 0,o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){let a={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Erstelle eine ausf\xfchrbare Klasse zum L\xf6sen einer quadratischen Gleichung mit\nHilfe der Mitternachtsformel."}),"\n",(0,n.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:"Gib bitte einen Wert f\xfcr a ein: 6\nGib bitte einen Wert f\xfcr b ein: 8\nGib bitte einen Wert f\xfcr c ein: 2\nx1 = -0.3\nx2 = -1.0\n"})}),"\n",(0,n.jsx)(a.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,n.jsxs)(a.p,{children:["Die Klasse ",(0,n.jsx)(a.code,{children:"Math"})," stellt f\xfcr die Wurzel-Berechnung sowie die Potenz-Berechnung\npassende Methoden zur Verf\xfcgung."]}),"\n",(0,n.jsx)(s.Z,{pullRequest:"31",branchSuffix:"java-api/02"})]})}function p(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},97645:function(e,a,t){t.d(a,{Z:()=>i});var r=t("85893");t("67294");var n=t("67026");function i(e){let{children:a,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_Ymn6",i),hidden:t,children:a})}},58168:function(e,a,t){t.d(a,{Z:()=>m});var r=t("85893"),n=t("67294"),i=t("67026"),s=t("34718"),l=t("16550"),u=t("8714"),o=t("89207"),c=t("69413"),d=t("54510");function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:a,tabValues:t}=e;return t.some(e=>e.value===a)}var v=t("6735");function f(e){let{className:a,block:t,selectedValue:n,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let a=e.currentTarget,t=u[o.indexOf(a)].value;t!==n&&(c(a),l(t))},p=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;a=o[t]??o[0];break}case"ArrowLeft":{let t=o.indexOf(e.currentTarget)-1;a=o[t]??o[o.length-1]}}a?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},a),children:u.map(e=>{let{value:a,label:t,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>{o.push(e)},onKeyDown:p,onClick:d,...s,className:(0,i.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":n===a}),children:t??a},a)})})}function b(e){let{lazy:a,children:t,selectedValue:s}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){let e=l.find(e=>e.props.value===s);return e?(0,n.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==s}))})}function j(e){let a=function(e){let{defaultValue:a,queryString:t=!1,groupId:r}=e,i=function(e){let{values:a,children:t}=e;return(0,n.useMemo)(()=>{let e=a??p(t).map(e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}});return!function(e){let a=(0,c.lx)(e,(e,a)=>e.value===a.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[a,t])}(e),[s,v]=(0,n.useState)(()=>(function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:a,tabValues:i})),[f,b]=function(e){let{queryString:a=!1,groupId:t}=e,r=(0,l.k6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o._X)(i),(0,n.useCallback)(e=>{if(!i)return;let a=new URLSearchParams(r.location.search);a.set(i,e),r.replace({...r.location,search:a.toString()})},[i,r])]}({queryString:t,groupId:r}),[j,m]=function(e){let{groupId:a}=e,t=a?`docusaurus.tab.${a}`:null,[r,i]=(0,d.Nk)(t);return[r,(0,n.useCallback)(e=>{t&&i.set(e)},[t,i])]}({groupId:r}),x=(()=>{let e=f??j;return h({value:e,tabValues:i})?e:null})();return(0,u.Z)(()=>{x&&v(x)},[x]),{selectedValue:s,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);v(e),b(e),m(e)},[b,m,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(f,{...a,...e}),(0,r.jsx)(b,{...a,...e})]})}function m(e){let a=(0,v.Z)();return(0,r.jsx)(j,{...e,children:p(e.children)},String(a))}},17490:function(e,a,t){t.d(a,{Z:function(){return u}});var r=t(85893);t(67294);var n=t(58168),i=t(97645),s=t(53367),l=t(31705);function u(e){let{pullRequest:a,branchSuffix:t}=e;return(0,r.jsxs)(n.Z,{children:[(0,r.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch exercises/${t}`}),(0,r.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch solutions/${t}`}),(0,r.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,r.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);