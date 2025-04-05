"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2694"],{65280:function(e,n,r){r.r(n),r.d(n,{default:()=>g,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>u});var t=JSON.parse('{"id":"documentation/slf4j","title":"Simple Logging Facade for Java (SLF4J)","description":"","source":"@site/docs/documentation/slf4j.mdx","sourceDirName":"documentation","slug":"/documentation/slf4j","permalink":"/java-docs/pr-preview/pr-283/documentation/slf4j","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/slf4j.mdx","tags":[{"inline":true,"label":"slf4j","permalink":"/java-docs/pr-preview/pr-283/tags/slf-4-j"}],"version":"current","sidebarPosition":257,"frontMatter":{"title":"Simple Logging Facade for Java (SLF4J)","description":"","sidebar_position":257,"tags":["slf4j"]},"sidebar":"documentationSidebar","previous":{"title":"Lombok","permalink":"/java-docs/pr-preview/pr-283/documentation/lombok"},"next":{"title":"Innere Klassen (Inner Classes)","permalink":"/java-docs/pr-preview/pr-283/documentation/inner-classes"}}'),i=r("85893"),l=r("50065"),a=r("58168"),o=r("97645");let s={title:"Simple Logging Facade for Java (SLF4J)",description:"",sidebar_position:257,tags:["slf4j"]},u=void 0,c={},d=[{value:"Protokollierungs-Level",id:"protokollierungs-level",level:2},{value:"Protokollierungs-Implementierungen",id:"protokollierungs-implementierungen",level:2},{value:"Beispiel",id:"beispiel",level:2}];function h(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.slf4j.org/",children:"Simple Logging Facade for Java (SLF4J)"})," stellt eine\nexterne Java-Bibliothek dar, die das Protokollieren in Java-Anwendungen\nerm\xf6glicht. Protokollierung (Logging) ist ein wesentlicher Bestandteil der\nSoftwareentwicklung und -wartung und bietet zahlreiche Vorteile wie\nFehlerbehebung, \xdcberwachung, Audit, Compliance, Debugging, Leistungsanalyse\nsowie Benutzerunterst\xfctzung. Durch die effektive Nutzung von Protokollierung\nkann die Zuverl\xe4ssigkeit, Sicherheit und Leistung einer Anwendung erheblich\nverbessert werden."]}),"\n",(0,i.jsx)(n.h2,{id:"protokollierungs-level",children:"Protokollierungs-Level"}),"\n",(0,i.jsx)(n.p,{children:"SLF4J definiert verschiedene Protokollierungs-Level, die die Schwere oder\nWichtigkeit der zu protokollierenden Nachrichten angeben."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Level"}),(0,i.jsx)(n.th,{children:"Beschreibung"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TRACE"}),(0,i.jsx)(n.td,{children:"Sehr detaillierte Informationen f\xfcr die Fehlersuche (z.B. Methodenname)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DEBUG"}),(0,i.jsx)(n.td,{children:"Detaillierte Informationen f\xfcr den Entwickler (z.B. Variablenwert)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"INFO"}),(0,i.jsx)(n.td,{children:"Allgemeine Informationsmeldungen, die den normalen Betrieb der Anwendung beschreiben"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"WARN"}),(0,i.jsx)(n.td,{children:"Warnungen, die auf potenzielle Probleme hinweisen, die jedoch nicht sofort behoben werden m\xfcssen"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ERROR"}),(0,i.jsx)(n.td,{children:"Fehler, die den normalen Betrieb der Anwendung beeintr\xe4chtigen und ggbfs. den sofortigen Abbruch der Anwendung erfordern"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"protokollierungs-implementierungen",children:"Protokollierungs-Implementierungen"}),"\n",(0,i.jsxs)(n.p,{children:["Die Art der Speicherung von Protokollen in einer Anwendung, die SLF4J verwendet,\nh\xe4ngt von der konkreten Implementierung ab. SLF4J selbst ist dabei nur eine\nFassade und ben\xf6tigt eine konkrete Implementierung, um die tats\xe4chliche\nProtokollierung durchzuf\xfchren. Eine der am weitesten verbreiteten\nProtokollierungs-Bibliotheken f\xfcr Java ist\n",(0,i.jsx)(n.a,{href:"https://logging.apache.org/log4j/2.x/index.html",children:"Log4J"}),", welches die Ausgabe\nvon Protokollen auf der Konsole sowie in Protokoll-Dateien erm\xf6glicht."]}),"\n",(0,i.jsx)(n.h2,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsxs)(n.p,{children:["F\xfcr die Klasse ",(0,i.jsx)(n.code,{children:"MainClass"})," wird ein Logger initialisiert, mit dessen Hilfe\nverschiedene Nachrichten in der Datei ",(0,i.jsx)(n.em,{children:"logs/app.log"})," protokolliert werden."]}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(o.Z,{value:"a",label:"Startklasse",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Names.java" showLineNumbers',children:'public class Names {\n\n   private final static Logger logger = LoggerFactory.getLogger(Names.class);\n\n   public static List<String> getNames(File file) throws IOException {\n      List<String> names = new ArrayList<>();\n      logger.info("Name list has been initialized successfully");\n\n      if (!file.exists()) {\n         logger.error("File {} does not exist", file);\n         throw new IOException();\n      }\n\n      Scanner scanner = new Scanner(file);\n      logger.info("File Scanner has been initialized successfully");\n\n      while (scanner.hasNextLine()) {\n         String name = scanner.nextLine();\n         logger.debug(name);\n         names.add(name);\n      }\n      logger.info("{} names have been read", names.size());\n\n      scanner.close();\n      logger.info("File {} has been closed successfully", file);\n\n      return names;\n   }\n\n}\n'})})}),(0,i.jsx)(o.Z,{value:"b",label:"Log4J-Konfigurationsdatei",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",metastring:'title="log4j.properties" showLineNumbers',children:"log4j.rootLogger=debug, file, console\n\nlog4j.appender.file=org.apache.log4j.FileAppender\nlog4j.appender.file.file=logs/app.log\nlog4j.appender.file.layout=org.apache.log4j.PatternLayout\nlog4j.appender.file.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n\n\nlog4j.appender.console=org.apache.log4j.ConsoleAppender\nlog4j.appender.console.layout=org.apache.log4j.PatternLayout\nlog4j.appender.console.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n\n"})})})]})]})}function g(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},97645:function(e,n,r){r.d(n,{Z:()=>l});var t=r("85893");r("67294");var i=r("67026");function l(e){let{children:n,hidden:r,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",l),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>v});var t=r("85893"),i=r("67294"),l=r("67026"),a=r("34718"),o=r("16550"),s=r("8714"),u=r("89207"),c=r("69413"),d=r("54510");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function g(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var p=r("6735");function m(e){let{className:n,block:r,selectedValue:i,selectValue:o,tabValues:s}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{let n=e.currentTarget,r=s[u.indexOf(n)].value;r!==i&&(c(n),o(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},n),children:s.map(e=>{let{value:n,label:r,attributes:a}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...a,className:(0,l.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":i===n}),children:r??n},n)})})}function f(e){let{lazy:n,children:r,selectedValue:a}=e,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===a);return e?(0,i.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,l=function(e){let{values:n,children:r}=e;return(0,i.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[a,p]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:l})),[m,f]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(l),(0,i.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})},[l,t])]}({queryString:r,groupId:t}),[b,v]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,l]=(0,d.Nk)(r);return[t,(0,i.useCallback)(e=>{r&&l.set(e)},[r,l])]}({groupId:t}),j=(()=>{let e=m??b;return g({value:e,tabValues:l})?e:null})();return(0,s.Z)(()=>{j&&p(j)},[j]),{selectedValue:a,selectValue:(0,i.useCallback)(e=>{if(!g({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),v(e)},[f,v,l]),tabValues:l}}(e);return(0,t.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(m,{...n,...e}),(0,t.jsx)(f,{...n,...e})]})}function v(e){let n=(0,p.Z)();return(0,t.jsx)(b,{...e,children:h(e.children)},String(n))}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var t=r(67294);let i={},l=t.createContext(i);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);