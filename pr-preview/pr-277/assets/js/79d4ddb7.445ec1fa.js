"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5278"],{36816:function(e,r,a){a.r(r),a.d(r,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>u});var n=JSON.parse('{"id":"exercises/class-diagrams/class-diagrams03","title":"ClassDiagrams03","description":"","source":"@site/docs/exercises/class-diagrams/class-diagrams03.mdx","sourceDirName":"exercises/class-diagrams","slug":"/exercises/class-diagrams/class-diagrams03","permalink":"/java-docs/pr-preview/pr-277/exercises/class-diagrams/class-diagrams03","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-diagrams/class-diagrams03.mdx","tags":[],"version":"current","frontMatter":{"title":"ClassDiagrams03","description":""},"sidebar":"exercisesSidebar","previous":{"title":"ClassDiagrams02","permalink":"/java-docs/pr-preview/pr-277/exercises/class-diagrams/class-diagrams02"},"next":{"title":"ClassDiagrams04","permalink":"/java-docs/pr-preview/pr-277/exercises/class-diagrams/class-diagrams04"}}'),s=a("85893"),t=a("50065"),i=a("17490");let l={title:"ClassDiagrams03",description:""},u=void 0,c={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>Creature</em>",id:"hinweise-zur-klasse-creature",level:2},{value:"Hinweise zur Klasse <em>CreatureGame</em>",id:"hinweise-zur-klasse-creaturegame",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let r={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Passe die Klasse ",(0,s.jsx)(r.code,{children:"Creature"})," aus \xdcbungsaufgabe ",(0,s.jsx)(r.a,{href:"../oo/oo06",children:"OO06"})," anhand des\nabgebildeten Klassendiagramms an und Erstelle die Klasse ",(0,s.jsx)(r.code,{children:"CreatureGame"})]}),"\n",(0,s.jsx)(r.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche einen Kampf zwischen zwei Kreaturen\nsimuliert"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(r.mermaid,{value:"classDiagram\n    CreatureGame o-- Creature\n\n    class CreatureGame {\n        -creature1: Creature #123;final#125;\n        -creature2: Creature #123;final#125;\n        -numberOfRounds: int\n        +CreatureGame(creature1: Creature, creature2: Creature)\n        +simulateFight() void\n        -move(creature1: Creature, creature2: Creature) boolean\n    }\n\n    class Creature {\n        -name: String #123;final#125;\n        -attackValue: int #123;final#125;\n        -hitpoints: int\n        +Creature(name: String, attackValue: int, hitpoints: int)\n        +attackCreature(creature: Creature) boolean\n        +getName() String\n        +getAttackValue() int\n        +getHitpoints() int\n        +setHitpoints(hitpoints: int) void\n        +toString() String\n    }"}),"\n",(0,s.jsxs)(r.h2,{id:"hinweise-zur-klasse-creature",children:["Hinweise zur Klasse ",(0,s.jsx)(r.em,{children:"Creature"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Passe die Methode ",(0,s.jsx)(r.code,{children:"boolean attack(creature: Creature)"})," so an, dass der\nR\xfcckgabewert ",(0,s.jsx)(r.code,{children:"true"})," ist, wenn die Lebenspunkte der angegriffenen Kreatur\nkleiner gleich Null sind, bzw. ",(0,s.jsx)(r.code,{children:"false"}),", wenn nicht"]}),"\n",(0,s.jsxs)(r.li,{children:["Die Methode ",(0,s.jsx)(r.code,{children:"String toString()"})," soll die Kreatur in der Form ",(0,s.jsx)(r.em,{children:"[Name]\n([Angriffswert] - [Lebenspunkte])"})," zur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"hinweise-zur-klasse-creaturegame",children:["Hinweise zur Klasse ",(0,s.jsx)(r.em,{children:"CreatureGame"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,s.jsxs)(r.li,{children:["Die Methode ",(0,s.jsx)(r.code,{children:"void simulateFight()"}),' soll die beiden Kreaturen sich so lange\ngegenseitig angreifen lassen, bis eine der Kreaturen "stirbt"']}),"\n",(0,s.jsxs)(r.li,{children:["Die Methode ",(0,s.jsx)(r.code,{children:"boolean move(creature1: Creature, creature2: Creature)"})," soll eine\nKreatur die andere angreifen lassen und den R\xfcckgabewert ",(0,s.jsx)(r.code,{children:"true"}),' liefern, wenn\ndie angegriffene Kreatur "stirbt", bzw. ',(0,s.jsx)(r.code,{children:"false"}),", wenn nicht"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-console",children:"Runde 1: Zombie (2 - 10), Vampir (4 - 6)\nZombie greift Vampir an und erzielt 2 Schaden\nVampir hat noch 4 Lebenspunkte\nVampir greift Zombie an und erzielt 4 Schaden\nZombie hat noch 6 Lebenspunkte\n\u2026\nRunde 3: Zombie (2 - 2), Vampir (4 - 2)\nZombie greift Vampir an und erzielt 2 Schaden\nVampir wurde vernichtet\n"})}),"\n",(0,s.jsx)(i.Z,{pullRequest:"38",branchSuffix:"class-diagrams/03"})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},97645:function(e,r,a){a.d(r,{Z:()=>t});var n=a("85893");a("67294");var s=a("67026");function t(e){let{children:r,hidden:a,className:t}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",t),hidden:a,children:r})}},58168:function(e,r,a){a.d(r,{Z:()=>x});var n=a("85893"),s=a("67294"),t=a("67026"),i=a("34718"),l=a("16550"),u=a("8714"),c=a("89207"),o=a("69413"),d=a("54510");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:r,tabValues:a}=e;return a.some(e=>e.value===r)}var p=a("6735");function g(e){let{className:r,block:a,selectedValue:s,selectValue:l,tabValues:u}=e,c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),d=e=>{let r=e.currentTarget,a=u[c.indexOf(r)].value;a!==s&&(o(r),l(a))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=c.indexOf(e.currentTarget)+1;r=c[a]??c[0];break}case"ArrowLeft":{let a=c.indexOf(e.currentTarget)-1;r=c[a]??c[c.length-1]}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},r),children:u.map(e=>{let{value:r,label:a,attributes:i}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...i,className:(0,t.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":s===r}),children:a??r},r)})})}function f(e){let{lazy:r,children:a,selectedValue:i}=e,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){let e=l.find(e=>e.props.value===i);return e?(0,s.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function b(e){let r=function(e){let{defaultValue:r,queryString:a=!1,groupId:n}=e,t=function(e){let{values:r,children:a}=e;return(0,s.useMemo)(()=>{let e=r??h(a).map(e=>{let{props:{value:r,label:a,attributes:n,default:s}}=e;return{value:r,label:a,attributes:n,default:s}});return!function(e){let r=(0,o.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,a])}(e),[i,p]=(0,s.useState)(()=>(function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let n=a.find(e=>e.default)??a[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:r,tabValues:t})),[g,f]=function(e){let{queryString:r=!1,groupId:a}=e,n=(0,l.k6)(),t=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,c._X)(t),(0,s.useCallback)(e=>{if(!t)return;let r=new URLSearchParams(n.location.search);r.set(t,e),n.replace({...n.location,search:r.toString()})},[t,n])]}({queryString:a,groupId:n}),[b,x]=function(e){let{groupId:r}=e,a=r?`docusaurus.tab.${r}`:null,[n,t]=(0,d.Nk)(a);return[n,(0,s.useCallback)(e=>{a&&t.set(e)},[a,t])]}({groupId:n}),v=(()=>{let e=g??b;return m({value:e,tabValues:t})?e:null})();return(0,u.Z)(()=>{v&&p(v)},[v]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!m({value:e,tabValues:t}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),x(e)},[f,x,t]),tabValues:t}}(e);return(0,n.jsxs)("div",{className:(0,t.Z)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(g,{...r,...e}),(0,n.jsx)(f,{...r,...e})]})}function x(e){let r=(0,p.Z)();return(0,n.jsx)(b,{...e,children:h(e.children)},String(r))}},17490:function(e,r,a){a.d(r,{Z:function(){return u}});var n=a(85893);a(67294);var s=a(58168),t=a(97645),i=a(53367),l=a(31705);function u(e){let{pullRequest:r,branchSuffix:a}=e;return(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(t.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,n.jsx)(l.Z,{language:"console",children:`git switch exercises/${a}`}),(0,n.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(t.Z,{value:"solution",label:"Solution",children:[(0,n.jsx)(l.Z,{language:"console",children:`git switch solutions/${a}`}),(0,n.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(t.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,n.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);