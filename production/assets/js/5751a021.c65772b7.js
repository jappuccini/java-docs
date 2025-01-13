"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9239"],{49574:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>u,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"exercises/arrays/arrays05","title":"Arrays05","description":"","source":"@site/docs/exercises/arrays/arrays05.mdx","sourceDirName":"exercises/arrays","slug":"/exercises/arrays/arrays05","permalink":"/java-docs/production/exercises/arrays/arrays05","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays05.mdx","tags":[],"version":"current","frontMatter":{"title":"Arrays05","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Arrays04","permalink":"/java-docs/production/exercises/arrays/arrays04"},"next":{"title":"Arrays06","permalink":"/java-docs/production/exercises/arrays/arrays06"}}'),a=n("85893"),s=n("50065"),i=n("17490");let u={title:"Arrays05",description:""},l=void 0,o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche es erm\xf6glicht, Aufgaben zu einer Liste\nhinzuzuf\xfcgen, zu l\xf6schen und auf der Konsole auszugeben."}),"\n",(0,a.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-console",children:"Optionen\n1: Aufgabe hinzuf\xfcgen\n2: Aufgabe l\xf6schen\n3: Aufgaben ausgeben\n4: Beenden\n\nWas m\xf6chtest Du tun?: 1\nGib bitte die Aufgabenbeschreibung ein: W\xe4sche waschen\nWas m\xf6chtest Du tun?: 1\nGib bitte die Aufgabenbeschreibung ein: Hausaufgaben machen\nWas m\xf6chtest Du tun?: 3\n\nAufgaben\n0: W\xe4sche waschen\n1: Hausaufgaben machen\n\nWas m\xf6chtest Du tun?: 2\nGib bitte ein, welche Aufgabe gel\xf6scht werden soll: 0\nWas m\xf6chtest Du tun?: 3\n\nAufgaben\n0: Hausaufgaben machen\n\nWas m\xf6chtest Du tun?: 4\n"})}),"\n",(0,a.jsx)(i.Z,{pullRequest:"22",branchSuffix:"arrays/05"})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},97645:function(e,r,n){n.d(r,{Z:()=>s});var t=n("85893");n("67294");var a=n("67026");function s(e){let{children:r,hidden:n,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",s),hidden:n,children:r})}},58168:function(e,r,n){n.d(r,{Z:()=>v});var t=n("85893"),a=n("67294"),s=n("67026"),i=n("34718"),u=n("16550"),l=n("8714"),o=n("89207"),c=n("69413"),d=n("54510");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var f=n("6735");function b(e){let{className:r,block:n,selectedValue:a,selectValue:u,tabValues:l}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let r=e.currentTarget,n=l[o.indexOf(r)].value;n!==a&&(c(r),u(n))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},r),children:l.map(e=>{let{value:r,label:n,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...i,className:(0,s.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":a===r}),children:n??r},r)})})}function m(e){let{lazy:r,children:n,selectedValue:i}=e,u=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=u.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:u.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function g(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:t}=e,s=function(e){let{values:r,children:n}=e;return(0,a.useMemo)(()=>{let e=r??h(n).map(e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[i,f]=(0,a.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let t=n.find(e=>e.default)??n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:s})),[b,m]=function(e){let{queryString:r=!1,groupId:n}=e,t=(0,u.k6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o._X)(s),(0,a.useCallback)(e=>{if(!s)return;let r=new URLSearchParams(t.location.search);r.set(s,e),t.replace({...t.location,search:r.toString()})},[s,t])]}({queryString:n,groupId:t}),[g,v]=function(e){let{groupId:r}=e,n=r?`docusaurus.tab.${r}`:null,[t,s]=(0,d.Nk)(n);return[t,(0,a.useCallback)(e=>{n&&s.set(e)},[n,s])]}({groupId:t}),x=(()=>{let e=b??g;return p({value:e,tabValues:s})?e:null})();return(0,l.Z)(()=>{x&&f(x)},[x]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),m(e),v(e)},[m,v,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(b,{...r,...e}),(0,t.jsx)(m,{...r,...e})]})}function v(e){let r=(0,f.Z)();return(0,t.jsx)(g,{...e,children:h(e.children)},String(r))}},17490:function(e,r,n){n.d(r,{Z:function(){return l}});var t=n(85893);n(67294);var a=n(58168),s=n(97645),i=n(53367),u=n(31705);function l(e){let{pullRequest:r,branchSuffix:n}=e;return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(u.Z,{language:"console",children:`git switch exercises/${n}`}),(0,t.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(u.Z,{language:"console",children:`git switch solutions/${n}`}),(0,t.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);