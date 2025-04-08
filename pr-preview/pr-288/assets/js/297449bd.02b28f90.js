"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2197"],{95760:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>d});var r=JSON.parse('{"id":"documentation/git","title":"Git","description":"","source":"@site/docs/documentation/git.mdx","sourceDirName":"documentation","slug":"/documentation/git","permalink":"/java-docs/pr-preview/pr-288/documentation/git","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/git.mdx","tags":[{"inline":true,"label":"git","permalink":"/java-docs/pr-preview/pr-288/tags/git"}],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Git","description":"","sidebar_position":12,"tags":["git"]},"sidebar":"documentationSidebar","previous":{"title":"Programmieren","permalink":"/java-docs/pr-preview/pr-288/documentation/coding"},"next":{"title":"Die Programmiersprache Java","permalink":"/java-docs/pr-preview/pr-288/documentation/java"}}'),i=t("85893"),s=t("50065"),l=t("58168"),a=t("97645");let o={title:"Git",description:"",sidebar_position:12,tags:["git"]},d=void 0,c={},h=[{value:"Git Workflows",id:"git-workflows",level:2},{value:"Git Befehle",id:"git-befehle",level:2}];function u(e){let n={a:"a",code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Git stellt eine Software zur Verwaltung von Dateien mit integrierter\nVersionskontrolle dar, dessen Entwicklung unter Anderem von Linus Torvald (dem\nErfinder von Linux) initiiert wurde. Die Versionskontrolle von Git erm\xf6glicht\nden Zugriff auf \xe4ltere Entwicklungsst\xe4nde, ohne dabei den aktuellen Stand zu\nverlieren. Zudem unterst\xfctzt Git die Verwaltung von verteilten Dateien an\nverschiedenen Aufbewahrungsorten. Diese Aufbewahrungsorte werden als\n",(0,i.jsx)(n.em,{children:"Repositorys"})," bezeichnet. Man unterscheidet dabei zwischen lokalen Repositorys\nund remote Repositorys. Onlinedienste wie GitHub basieren auf Git und stellen\ndem Anwender Speicherplatz f\xfcr remote Repositorys zur Verf\xfcgung."]}),"\n",(0,i.jsx)(n.h2,{id:"git-workflows",children:"Git Workflows"}),"\n",(0,i.jsx)(n.p,{children:"Aufgrund der Flexibilit\xe4t von Git gibt es keine standardisierten Prozesse f\xfcr\ndas Arbeiten mit Git. Ein Git Workflow stellt eine Anleitung zur Verwendung von\nGit dar, die eine konsistente und produktive Arbeitsweise erm\xf6glichen soll. F\xfcr\neine effiziente und fehlerfreie Arbeitsweise sollten daher alle Mitgleider eines\nTeams die gleichen Git Workflows verwenden."}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n   participant Arbeitsbereich\n   participant Staging Area\n   participant Lokales Repository\n   participant Remote Repository\n   note over Arbeitsbereich,Remote Repository: Lokales Repository erstellen\n   Remote Repository ->> Arbeitsbereich: git clone\n   Lokales Repository ->> Arbeitsbereich: git init\n   note over Arbeitsbereich,Remote Repository: \xc4nderungen vornehmen\n   Arbeitsbereich ->> Staging Area: git add\n   activate Staging Area\n   Staging Area ->> Lokales Repository: git commit\n   activate Lokales Repository\n   Staging Area --\x3e Arbeitsbereich: git diff\n   Staging Area ->> Arbeitsbereich: git reset\n   deactivate Staging Area\n   Lokales Repository --\x3e Arbeitsbereich: git diff\n   Lokales Repository ->> Arbeitsbereich: git reset\n   deactivate Lokales Repository\n   note over Arbeitsbereich,Remote Repository: \xc4nderungen synchronisieren\n   Remote Repository ->> Lokales Repository: git fetch\n   activate Lokales Repository\n   Lokales Repository ->> Arbeitsbereich: git merge\n   deactivate Lokales Repository\n   Remote Repository ->> Arbeitsbereich: git pull\n   Lokales Repository ->> Remote Repository: git push"}),"\n",(0,i.jsx)(n.h2,{id:"git-befehle",children:"Git Befehle"}),"\n",(0,i.jsxs)(n.p,{children:["Git bietet einen Vielzahl an verschiedenen Kommandozeilen-Befehlen um mit Git zu\narbeiten. Eine ausf\xfchrliche Dokumentation der einzelnen Befehle samt der\ndazugeh\xf6rigen Optionen k\xf6nnen auf der offiziellen\n",(0,i.jsx)(n.a,{href:"https://git-scm.com/docs",children:"Git-Homepage"})," gefunden werden. Zudem kann mit dem\nBefehl ",(0,i.jsx)(n.code,{children:"git --help"})," direkt in der Kommandozeile eine Kurzversion der\nDokumentation ausgegeben werden."]}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(a.Z,{value:"a",label:"Git einrichten",default:!0,children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Git-Befehl"}),(0,i.jsx)(n.th,{children:"Beschreibung"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git config --global user.name"})}),(0,i.jsx)(n.td,{children:"Benutzername ausgeben"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'git config --global user.name "[Benutzername]"'})}),(0,i.jsx)(n.td,{children:"Benutzername festlegen"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git config --global user.email"})}),(0,i.jsx)(n.td,{children:"E-Mail-Adresse ausgeben"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'git config --global user.email "[E-Mail-Adresse]"'})}),(0,i.jsx)(n.td,{children:"E-Mail-Adresse festlegen"})]})]})]})}),(0,i.jsx)(a.Z,{value:"b",label:"Lokales Repository erstellen",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Git-Befehl"}),(0,i.jsx)(n.th,{children:"Beschreibung"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git clone [Remote Repository]"})}),(0,i.jsx)(n.td,{children:"Remote Repository klonen"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git init [Lokales Repository]"})}),(0,i.jsx)(n.td,{children:"Lokales Repository erstellen"})]})]})]})}),(0,i.jsx)(a.Z,{value:"c",label:"\xc4nderungen versionieren",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Git-Befehl"}),(0,i.jsx)(n.th,{children:"Beschreibung"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git status"})}),(0,i.jsx)(n.td,{children:"Neue und ge\xe4nderte Dateien ausgeben"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git diff"})}),(0,i.jsx)(n.td,{children:"Noch nicht indizierte \xc4nderungen ausgeben"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git add [Datei]"})}),(0,i.jsx)(n.td,{children:"Datei f\xfcr die Versionierung indizieren"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git diff --staged"})}),(0,i.jsx)(n.td,{children:"\xc4nderungen zwischen dem indizierten und dem aktuellen Stand ausgeben"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git reset [Datei]"})}),(0,i.jsx)(n.td,{children:"Datei vom Index nehmen"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'git commit -m "[Nachricht]"'})}),(0,i.jsx)(n.td,{children:"Alle indizierten Dateien versionieren"})]})]})]})}),(0,i.jsx)(a.Z,{value:"d",label:"\xc4nderungen gruppieren",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Git-Befehl"}),(0,i.jsx)(n.th,{children:"Beschreibung"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git branch"})}),(0,i.jsx)(n.td,{children:"Alle Branches ausgeben"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git branch [Branch]"})}),(0,i.jsx)(n.td,{children:"Branch erstellen"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git switch [Branch]"})}),(0,i.jsx)(n.td,{children:"Branch wechseln und Arbeitsbereich aktualisieren"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git merge [Branch]"})}),(0,i.jsx)(n.td,{children:"Branches zusammenf\xfchren"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git branch -d [Branch]"})}),(0,i.jsx)(n.td,{children:"Branch l\xf6schen"})]})]})]})}),(0,i.jsx)(a.Z,{value:"e",label:"\xc4nderungen synchronisieren",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Git-Befehl"}),(0,i.jsx)(n.th,{children:"Beschreibung"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git fetch [Remote Repository]"})}),(0,i.jsx)(n.td,{children:"Versionshistorie vom remote Repository laden"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git merge [Remote Repository]/[Remote Branch]"})}),(0,i.jsx)(n.td,{children:"Branches zusammenf\xfchren"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git pull"})}),(0,i.jsx)(n.td,{children:"git fetch + git merge"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"git push [Remote Repository] [Branch]"})}),(0,i.jsx)(n.td,{children:"Versionshistorie ins remote Repository schieben"})]})]})]})})]})]})}function x(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},97645:function(e,n,t){t.d(n,{Z:()=>s});var r=t("85893");t("67294");var i=t("67026");function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",s),hidden:t,children:n})}},58168:function(e,n,t){t.d(n,{Z:()=>f});var r=t("85893"),i=t("67294"),s=t("67026"),l=t("34718"),a=t("16550"),o=t("8714"),d=t("89207"),c=t("69413"),h=t("54510");function u(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function x(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var g=t("6735");function j(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),h=e=>{let n=e.currentTarget,t=o[d.indexOf(n)].value;t!==i&&(c(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{let t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{d.push(e)},onKeyDown:u,onClick:h,...l,className:(0,s.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":i===n}),children:t??n},n)})})}function m(e){let{lazy:n,children:t,selectedValue:l}=e,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=a.find(e=>e.props.value===l);return e?(0,i.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function p(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,s=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=n??u(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,g]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:s})),[j,m]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(s),(0,i.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})},[s,r])]}({queryString:t,groupId:r}),[p,f]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,s]=(0,h.Nk)(t);return[r,(0,i.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:r}),b=(()=>{let e=j??p;return x({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{b&&g(b)},[b]),{selectedValue:l,selectValue:(0,i.useCallback)(e=>{if(!x({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);g(e),m(e),f(e)},[m,f,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(j,{...n,...e}),(0,r.jsx)(m,{...n,...e})]})}function f(e){let n=(0,g.Z)();return(0,r.jsx)(p,{...e,children:u(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(67294);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);