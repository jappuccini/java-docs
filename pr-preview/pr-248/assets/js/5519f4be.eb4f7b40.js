"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["845"],{2123:function(e,a,n){n.r(a),n.d(a,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>u});var r=JSON.parse('{"id":"exercises/java-api/java-api01","title":"JavaAPI01","description":"","source":"@site/docs/exercises/java-api/java-api01.mdx","sourceDirName":"exercises/java-api","slug":"/exercises/java-api/java-api01","permalink":"/java-docs/pr-preview/pr-248/exercises/java-api/java-api01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-api/java-api01.mdx","tags":[],"version":"current","frontMatter":{"title":"JavaAPI01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Die Java API","permalink":"/java-docs/pr-preview/pr-248/exercises/java-api/"},"next":{"title":"JavaAPI02","permalink":"/java-docs/pr-preview/pr-248/exercises/java-api/java-api02"}}'),t=n("85893"),i=n("50065"),s=n("17490");let l={title:"JavaAPI01",description:""},u=void 0,o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){let a={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche den Sinus von 0.0 bis 1.0 in\nZehnerschritten tabellarisch auf der Konsole ausgibt."}),"\n",(0,t.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-console",children:"x = 0.0, sin(x) = 0.0\nx = 0.1, sin(x) = 0.1\nx = 0.2, sin(x) = 0.2\nx = 0.3, sin(x) = 0.3\nx = 0.4, sin(x) = 0.4\nx = 0.5, sin(x) = 0.5\nx = 0.6, sin(x) = 0.6\nx = 0.7, sin(x) = 0.6\nx = 0.8, sin(x) = 0.7\nx = 0.9, sin(x) = 0.8\nx = 1.0, sin(x) = 0.8\n"})}),"\n",(0,t.jsx)(a.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,t.jsxs)(a.p,{children:["Die Klasse ",(0,t.jsx)(a.code,{children:"Math"})," stellt f\xfcr die Sinus-Berechnung eine passende Methode zur\nVerf\xfcgung."]}),"\n",(0,t.jsx)(s.Z,{pullRequest:"30",branchSuffix:"java-api/01"})]})}function p(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},97645:function(e,a,n){n.d(a,{Z:()=>i});var r=n("85893");n("67294");var t=n("67026");function i(e){let{children:a,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_Ymn6",i),hidden:n,children:a})}},58168:function(e,a,n){n.d(a,{Z:()=>j});var r=n("85893"),t=n("67294"),i=n("67026"),s=n("34718"),l=n("16550"),u=n("8714"),o=n("89207"),c=n("69413"),d=n("54510");function p(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:a,tabValues:n}=e;return n.some(e=>e.value===a)}var v=n("6735");function x(e){let{className:a,block:n,selectedValue:t,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let a=e.currentTarget,n=u[o.indexOf(a)].value;n!==t&&(c(a),l(n))},p=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1]}}a?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},a),children:u.map(e=>{let{value:a,label:n,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>{o.push(e)},onKeyDown:p,onClick:d,...s,className:(0,i.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":t===a}),children:n??a},a)})})}function f(e){let{lazy:a,children:n,selectedValue:s}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){let e=l.find(e=>e.props.value===s);return e?(0,t.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==s}))})}function b(e){let a=function(e){let{defaultValue:a,queryString:n=!1,groupId:r}=e,i=function(e){let{values:a,children:n}=e;return(0,t.useMemo)(()=>{let e=a??p(n).map(e=>{let{props:{value:a,label:n,attributes:r,default:t}}=e;return{value:a,label:n,attributes:r,default:t}});return!function(e){let a=(0,c.lx)(e,(e,a)=>e.value===a.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[a,n])}(e),[s,v]=(0,t.useState)(()=>(function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:a,tabValues:i})),[x,f]=function(e){let{queryString:a=!1,groupId:n}=e,r=(0,l.k6)(),i=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o._X)(i),(0,t.useCallback)(e=>{if(!i)return;let a=new URLSearchParams(r.location.search);a.set(i,e),r.replace({...r.location,search:a.toString()})},[i,r])]}({queryString:n,groupId:r}),[b,j]=function(e){let{groupId:a}=e,n=a?`docusaurus.tab.${a}`:null,[r,i]=(0,d.Nk)(n);return[r,(0,t.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:r}),m=(()=>{let e=x??b;return h({value:e,tabValues:i})?e:null})();return(0,u.Z)(()=>{m&&v(m)},[m]),{selectedValue:s,selectValue:(0,t.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);v(e),f(e),j(e)},[f,j,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(x,{...a,...e}),(0,r.jsx)(f,{...a,...e})]})}function j(e){let a=(0,v.Z)();return(0,r.jsx)(b,{...e,children:p(e.children)},String(a))}},17490:function(e,a,n){n.d(a,{Z:function(){return u}});var r=n(85893);n(67294);var t=n(58168),i=n(97645),s=n(53367),l=n(31705);function u(e){let{pullRequest:a,branchSuffix:n}=e;return(0,r.jsxs)(t.Z,{children:[(0,r.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch exercises/${n}`}),(0,r.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch solutions/${n}`}),(0,r.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,r.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);