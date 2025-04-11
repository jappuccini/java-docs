"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["15"],{79048:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>u,contentTitle:()=>d});var t=JSON.parse('{"id":"documentation/maven","title":"Maven","description":"","source":"@site/docs/documentation/maven.md","sourceDirName":"documentation","slug":"/documentation/maven","permalink":"/java-docs/pr-preview/pr-289/documentation/maven","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/maven.md","tags":[{"inline":true,"label":"maven","permalink":"/java-docs/pr-preview/pr-289/tags/maven"}],"version":"current","sidebarPosition":252,"frontMatter":{"title":"Maven","description":"","sidebar_position":252,"tags":["maven"]},"sidebar":"documentationSidebar","previous":{"title":"Datenklassen (Records)","permalink":"/java-docs/pr-preview/pr-289/documentation/records"},"next":{"title":"Lombok","permalink":"/java-docs/pr-preview/pr-289/documentation/lombok"}}'),i=r("85893"),s=r("50065"),a=r("58168"),l=r("97645");let o={title:"Maven",description:"",sidebar_position:252,tags:["maven"]},d=void 0,c={},u=[{value:"Merkmale",id:"merkmale",level:2},{value:"Die Konfigurationsdatei <em>pom.xml</em>",id:"die-konfigurationsdatei-pomxml",level:2},{value:"Lebenszyklus-Phasen",id:"lebenszyklus-phasen",level:2},{value:"Hilfreiche Plugins und Bibliotheken",id:"hilfreiche-plugins-und-bibliotheken",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://maven.apache.org/",children:"Apache Maven (kurz Maven)"})," ist ein sogenanntes\nBuild-Automatisierungstool, welches haupts\xe4chlich f\xfcr Java-Projekte verwendet\nwird. Es hilft Entwicklern, den Build-Prozess eines Programmes zu vereinfachen\nund zu standardisieren. Maven verwendet hierzu eine Konfigurationsdatei namens\n",(0,i.jsx)(n.em,{children:"pom.xml"})," (Project Object Model)."]}),"\n",(0,i.jsx)(n.h2,{id:"merkmale",children:"Merkmale"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Automatisierung des Build-Prozesses: Maven automatisiert den Build-Prozess\n(Kompilieren, Testen, Verpacken und Bereitstellen)"}),"\n",(0,i.jsx)(n.li,{children:"Abh\xe4ngigkeitsmanagement: Maven verwaltet Projekt-Abh\xe4ngigkeiten wie externe\nBibliotheken und Frameworks automatisch"}),"\n",(0,i.jsx)(n.li,{children:"Standardisierte Projektstruktur: Maven f\xf6rdert eine standardisierte\nProjektstruktur, die es einfacher macht, Projekte zu verstehen und zu\nnavigieren"}),"\n",(0,i.jsx)(n.li,{children:"Plugins: Maven unterst\xfctzt eine Vielzahl von Plugins, die zus\xe4tzliche\nFunktionalit\xe4ten bieten (z.B. Code-Analyse, Berichterstellung und\nDokumentation)"}),"\n",(0,i.jsx)(n.li,{children:"Lebenszyklus-Management: Maven definiert einen standardisierten Lebenszyklus\nf\xfcr den Build-Prozess"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"die-konfigurationsdatei-pomxml",children:["Die Konfigurationsdatei ",(0,i.jsx)(n.em,{children:"pom.xml"})]}),"\n",(0,i.jsxs)(n.p,{children:["Die Konfigurationsdatei ",(0,i.jsx)(n.em,{children:"pom.xml"})," umfasst neben allen relevanten\nProjekt-Eigenschaften auch s\xe4mtliche Abh\xe4ngigkeiten sowie Plugins, die dadurch\nautomatisch von Maven verwaltet werden."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml" showLineNumbers',children:'<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0\n                             https://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>edu.jappuccini</groupId>\n  <artifactId>demo</artifactId>\n  <version>1.0.0-SNAPSHOT</version>\n\n  \x3c!-- Eigenschaften --\x3e\n  <properties>\n    \x3c!-- Java-Version --\x3e\n    <maven.compiler.source>21</maven.compiler.source>\n    <maven.compiler.target>21</maven.compiler.target>\n    \x3c!-- Encoding --\x3e\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n  </properties>\n\n  \x3c!-- Build Prozess --\x3e\n  <build>\n    \x3c!-- Plugins --\x3e\n    <plugins>\n      \x3c!-- Prettier --\x3e\n      <plugin>\n        <groupId>com.hubspot.maven.plugins</groupId>\n        <artifactId>prettier-maven-plugin</artifactId>\n        <version>0.16</version>\n        <executions>\n          <execution>\n            <id>default-compile</id>\n            <phase>compile</phase>\n            <goals>\n              <goal>write</goal>\n            </goals>\n          </execution>\n        </executions>\n      </plugin>\n    </plugins>\n  </build>\n\n  \x3c!-- Abh\xe4ngigkeiten --\x3e\n  <dependencies>\n    \x3c!-- JUnit 5 --\x3e\n    <dependency>\n      <groupId>org.junit.jupiter</groupId>\n      <artifactId>junit-jupiter-api</artifactId>\n      <version>5.11.3</version>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n\n</project>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"lebenszyklus-phasen",children:"Lebenszyklus-Phasen"}),"\n",(0,i.jsxs)(n.p,{children:["Maven kennt die drei Lebenszyklen ",(0,i.jsx)(n.code,{children:"clean"})," zum L\xf6schen aller Artefakte\nvergangener Builds, ",(0,i.jsx)(n.code,{children:"default"})," zum Erstellen des Projekts sowie ",(0,i.jsx)(n.code,{children:"site"})," zum\nErstellen einer Dokumentationsseite. Jeder Lebenszyklus durchl\xe4uft hierbei\nverschiedene Phasen. Durch Plugins k\xf6nnen diese um zus\xe4tzliche\nVerarbeitungsschritte erweitert werden. Nachfolgend dargestellt sind die\nwesentlichen Phasen des Default Lebenszyklus:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Phase"}),(0,i.jsx)(n.th,{children:"Beschreibung"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"validate"})}),(0,i.jsx)(n.td,{children:"Pr\xfcfen, ob die POM sowie die Projektstruktur vollst\xe4ndig, fehlerfrei und g\xfcltig sind"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"compile"})}),(0,i.jsx)(n.td,{children:"Kompilieren des Quellcodes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"test"})}),(0,i.jsx)(n.td,{children:"Ausf\xfchren der Komponententests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"package"})}),(0,i.jsx)(n.td,{children:"Verpacken des Projekts in z.B. ein Java Archiv (JAR)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"verify"})}),(0,i.jsx)(n.td,{children:"Ausf\xfchren von bereitgestellten Integrationstests"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"install"})}),(0,i.jsx)(n.td,{children:"Kopieren des Archivs ins lokale Maven-Repository"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"deploy"})}),(0,i.jsx)(n.td,{children:"Kopieren des Archivs in ein remote Maven-Repository"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"hilfreiche-plugins-und-bibliotheken",children:"Hilfreiche Plugins und Bibliotheken"}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(l.Z,{value:"a",label:"Prettier",default:!0,children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://prettier.io/",children:"Prettier"})," ist ein weit verbreiterter\nQuellcode-Formatierer, der eine einheitliche Quellcode-Formatierung f\xf6rdert.\nDurch die Einbindung des Goals ",(0,i.jsx)(n.code,{children:"write"})," in die Lebenszyklus-Phase ",(0,i.jsx)(n.code,{children:"compile"})," wird\nsichergestellt, dass der Quellcode bei jedem Kompiliervorgang automatisch\nformattiert wird."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml (Auszug)" showLineNumbers',children:"...\n\x3c!-- Prettier --\x3e\n<plugin>\n  <groupId>com.hubspot.maven.plugins</groupId>\n  <artifactId>prettier-maven-plugin</artifactId>\n  <version>0.16</version>\n  <executions>\n    <execution>\n      <id>default-compile</id>\n      <phase>compile</phase>\n      <goals>\n        <goal>write</goal>\n      </goals>\n    </execution>\n  </executions>\n</plugin>\n...\n"})})]}),(0,i.jsxs)(l.Z,{value:"b",label:"Checkstyle",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://maven.apache.org/plugins/maven-checkstyle-plugin/",children:"Checkstyle"})," ist ein\nTool zur Berichtserstellung \xfcber die Einhaltung von Codingstandards und gibt dem\nEntwickler dadurch wertvolle Hinweise zur Verbesserung der Softwarequalit\xe4t. Das\nGoal ",(0,i.jsx)(n.code,{children:"check"})," f\xfchrt eine Pr\xfcfung des Quellcodes aus und gibt der Ergebnisse auf\nder Konsole aus, das Goal ",(0,i.jsx)(n.code,{children:"checkstyle"})," erstellt aufbauend auf den Pr\xfcfungen eine\nBerichtsseite."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml (Auszug)" showLineNumbers',children:"...\n\x3c!-- Checkstyle --\x3e\n<plugin>\n  <groupId>org.apache.maven.plugins</groupId>\n  <artifactId>maven-checkstyle-plugin</artifactId>\n  <version>3.6.0</version>\n</plugin>\n...\n"})})]}),(0,i.jsxs)(l.Z,{value:"c",label:"Lombok",children:[(0,i.jsxs)(n.p,{children:["Lombok ist eine beliebte Bibliothek zur Generierung von repetitiven Methoden\n(siehe auch ",(0,i.jsx)(n.a,{href:"lombok",children:"Lombok"}),")."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml (Auszug)" showLineNumbers',children:"...\n\x3c!-- Lombok --\x3e\n<dependency>\n  <groupId>org.projectlombok</groupId>\n  <artifactId>lombok</artifactId>\n  <version>1.18.36</version>\n</dependency>\n...\n"})})]}),(0,i.jsxs)(l.Z,{value:"d",label:"SLF4J und Log4J",children:[(0,i.jsxs)(n.p,{children:["Simple Logging Facade for Java (SLF4J) ist eine beliebte\nJava-Protokollierungs-API, die es erm\xf6glicht, den Quellcode um Protokolle zu\nerweitern, die anschlie\xdfend an ein gew\xfcnschtes Protokoll-Framework (wie z.B.\nLog4J) weitergeleitet werden (siehe auch\n",(0,i.jsx)(n.a,{href:"slf4j",children:"Simple Logging Facade for Java (SLF4J)"}),")."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml (Auszug)" showLineNumbers',children:"...\n\x3c!-- SLF4J-API --\x3e\n<dependency>\n  <groupId>org.slf4j</groupId>\n  <artifactId>slf4j-api</artifactId>\n  <version>2.0.16</version>\n</dependency>\n\x3c!-- SLF4J-Implementierung --\x3e\n<dependency>\n  <groupId>org.slf4j</groupId>\n  <artifactId>slf4j-reload4j</artifactId>\n  <version>2.0.16</version>\n</dependency>\n...\n"})})]}),(0,i.jsxs)(l.Z,{value:"e",label:"JUnit 5",children:[(0,i.jsxs)(n.p,{children:["JUnit 5 ist ein weit verbreitetes Framework zur Erstellung von Komponententests\n(siehe auch ",(0,i.jsx)(n.a,{href:"unit-tests",children:"Komponententests (Unit Tests)"}),")."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml (Auszug)" showLineNumbers',children:"...\n\x3c!-- JUnit 5 --\x3e\n<dependency>\n  <groupId>org.junit.jupiter</groupId>\n  <artifactId>junit-jupiter-api</artifactId>\n  <version>5.11.3</version>\n  <scope>test</scope>\n</dependency>\n...\n"})})]}),(0,i.jsxs)(l.Z,{value:"f",label:"Mockito",children:[(0,i.jsxs)(n.p,{children:["Mockito ist ein beliebtes Framework f\xfcr das Erstellen von Mock-Objekten in Java,\ndas haupts\xe4chlich f\xfcr das Testen von Anwendungen verwendet wird (siehe auch\n",(0,i.jsx)(n.a,{href:"mockito",children:"Mockito"}),")."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml (Auszug)" showLineNumbers',children:"...\n\x3c!-- Mockito --\x3e\n<dependency>\n    <groupId>org.mockito</groupId>\n    <artifactId>mockito-core</artifactId>\n    <version>5.14.2</version>\n    <scope>test</scope>\n</dependency>\n...\n"})})]}),(0,i.jsxs)(l.Z,{value:"g",label:"JavaFX und Java FXML",children:[(0,i.jsxs)(n.p,{children:["JavaFX stellt (vor allem in Verbindung mit Java FXML) ein State-of-the-Art\nFramework f\xfcr das Erstellen von GUIs in Java dar (siehe auch ",(0,i.jsx)(n.a,{href:"javafx",children:"JavaFX"}),")."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml (Auszug)" showLineNumbers',children:"...\n\x3c!-- JavaFX --\x3e\n<dependency>\n    <groupId>org.openjfx</groupId>\n    <artifactId>javafx-controls</artifactId>\n    <version>23.0.1</version>\n</dependency>\n\x3c!-- Java FXML --\x3e\n<dependency>\n    <groupId>org.openjfx</groupId>\n    <artifactId>javafx-fxml</artifactId>\n    <version>23.0.1</version>\n</dependency>\n...\n"})})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,i.jsx)(n.p,{children:"Die angegebenen Versionen sind die jeweils aktuellsten Versionen zum Stand\nDezember 2024."})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},97645:function(e,n,r){r.d(n,{Z:()=>s});var t=r("85893");r("67294");var i=r("67026");function s(e){let{children:n,hidden:r,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",s),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>x});var t=r("85893"),i=r("67294"),s=r("67026"),a=r("34718"),l=r("16550"),o=r("8714"),d=r("89207"),c=r("69413"),u=r("54510");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("6735");function g(e){let{className:n,block:r,selectedValue:i,selectValue:l,tabValues:o}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{let n=e.currentTarget,r=o[d.indexOf(n)].value;r!==i&&(c(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{let r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:a}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{d.push(e)},onKeyDown:h,onClick:u,...a,className:(0,s.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":i===n}),children:r??n},n)})})}function v(e){let{lazy:n,children:r,selectedValue:a}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===a);return e?(0,i.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function f(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,s=function(e){let{values:n,children:r}=e;return(0,i.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[a,m]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:s})),[g,v]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d._X)(s),(0,i.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})},[s,t])]}({queryString:r,groupId:t}),[f,x]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,s]=(0,u.Nk)(r);return[t,(0,i.useCallback)(e=>{r&&s.set(e)},[r,s])]}({groupId:t}),j=(()=>{let e=g??f;return p({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{j&&m(j)},[j]),{selectedValue:a,selectValue:(0,i.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);m(e),v(e),x(e)},[v,x,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(g,{...n,...e}),(0,t.jsx)(v,{...n,...e})]})}function x(e){let n=(0,m.Z)();return(0,t.jsx)(f,{...e,children:h(e.children)},String(n))}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var t=r(67294);let i={},s=t.createContext(i);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);