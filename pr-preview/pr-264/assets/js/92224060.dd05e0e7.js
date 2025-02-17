"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6903"],{2233:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"documentation/java","title":"Die Programmiersprache Java","description":"","source":"@site/docs/documentation/java.md","sourceDirName":"documentation","slug":"/documentation/java","permalink":"/java-docs/pr-preview/pr-264/documentation/java","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/java.md","tags":[{"inline":true,"label":"java","permalink":"/java-docs/pr-preview/pr-264/tags/java"}],"version":"current","sidebarPosition":14,"frontMatter":{"title":"Die Programmiersprache Java","description":"","sidebar_position":14,"tags":["java"]},"sidebar":"documentationSidebar","previous":{"title":"Git","permalink":"/java-docs/pr-preview/pr-264/documentation/git"},"next":{"title":"Softwaredesign","permalink":"/java-docs/pr-preview/pr-264/documentation/design"}}'),t=i("85893"),a=i("50065");let s={title:"Die Programmiersprache Java",description:"",sidebar_position:14,tags:["java"]},l=void 0,o={},d=[{value:"Die Geschichte von Java",id:"die-geschichte-von-java",level:2},{value:"JDK und JRE",id:"jdk-und-jre",level:2},{value:"Entwicklung von Java-Programmen",id:"entwicklung-von-java-programmen",level:2},{value:"Programmierstil (Code Style)",id:"programmierstil-code-style",level:2}];function c(e){let n={a:"a",admonition:"admonition",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Die Programmiersprache Java geh\xf6rt zu den problemorientierten\nProgrammiersprachen und ist daher einfacher zu erlernen und einfacher zu\nverstehen als maschinenorientierte Programmiersprachen. Bei der Entwicklung von\nJava verfolgte man das Ziel, eine einfache, objektorientierte, robuste,\narchitekturneutrale und parallelisierbare Programmiersprache zu entwickeln. Java\nwurde haupts\xe4chlich von C und C++ beeinflusst, ist allerdings im Gegensatz zu C\nund C++ nicht darauf ausgelegt, m\xf6glichst leistungsf\xe4hige Programme zu erzeugen,\nsondern m\xf6glichst sichere und fehlerfreie Programme."}),"\n",(0,t.jsx)(n.h2,{id:"die-geschichte-von-java",children:"Die Geschichte von Java"}),"\n",(0,t.jsxs)(n.p,{children:["Anfang der 90er begannen bei der Firma Sun Microsystems unter Federf\xfchrung des\nChefentwicklers James Gosling die Arbeiten an einem Projekt mit dem Codenamen\n",(0,t.jsx)(n.em,{children:"The Green Project"})," mit dem Ziel, eine vollst\xe4ndige Betriebssystemumgebung f\xfcr\nunterschiedliche Zwecke (interaktives Kabelfernsehen, intelligente\nKaffeemaschinen etc.) zu entwickeln. Die daraus entstehende Programmiersprache\nsollte urspr\xfcnglich den Namen ",(0,t.jsx)(n.em,{children:"Oak"})," (Object Application Kernel) tragen, wurde\naber schlie\xdflich im Mai 1995 unter dem Namen ",(0,t.jsx)(n.em,{children:"Java"})," ver\xf6ffentlicht. Der gro\xdfe\nDurchbruch von Java kam 1996 durch eine Kooperation mit der Firma Netscape\nzustande, die eine Integration von Java-Applets mit Hilfe von JavaScript in den\nBrowser Netscape Navigator 2.0 erm\xf6glichte. Weitere wichtige Meilensteine in der\nGeschichte von Java waren die Ver\xf6ffentlichungen der Google-Entwicklungsumgebung\nAndroid 2008 sowie des Computerspiels Minecraft 2009."]}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsx)(n.p,{children:"Java war der Name der beliebtesten Kaffeesorte der Entwickler."})}),"\n",(0,t.jsx)(n.h2,{id:"jdk-und-jre",children:"JDK und JRE"}),"\n",(0,t.jsxs)(n.p,{children:["Das JDK (Java Development Kit) stellt die wichtigste Komponente zum\nProgrammieren von Java-Programmen dar. Es enth\xe4lt neben dem Compiler und\nDebugger weitere wichtige Werkzeuge sowie umfangreiche Bibliotheken (siehe\n",(0,t.jsx)(n.a,{href:"java-api",children:"Die Java API"}),"). Die JRE (Java Runtime Environment) enth\xe4lt den\nInterpreter (die ",(0,t.jsx)(n.em,{children:"Java Virtual Machine"}),") und wird zum Ausf\xfchren von\nJava-Applikationen ben\xf6tigt. Seit September 2017 wird alle sechs Monate eine\nneue JDK-Version ver\xf6ffentlicht (i.d.R. Mitte M\xe4rz und Mitte September eines\nJahres). Diese Versionen werden von Oracle nur bis zum Erscheinen der jeweils\nn\xe4chsten Version unterst\xfctzt. Eine Ausnahme bilden hier die LTS-Versionen\n(long-term-support-releases). Die aktuellen LTS-Versionen sind 8, 11, 17 und 21.\nDie Neuerungen einer Version werden durch sogenannte JEPs (JDK Enhancement\nProposals) festgelegt. Weitere Informationen zu den verschiedenen JDK-Versionen\nk\xf6nnen auf der offziellen ",(0,t.jsx)(n.a,{href:"https://jdk.java.net/",children:"JDK-Seite"})," gefunden werden."]}),"\n",(0,t.jsx)(n.h2,{id:"entwicklung-von-java-programmen",children:"Entwicklung von Java-Programmen"}),"\n",(0,t.jsxs)(n.p,{children:["Zur Entwicklung von Java-Programmen wird neben dem ",(0,t.jsx)(n.em,{children:"Java Development Kit"})," (JDK)\nnur ein einfacher Texteditor ben\xf6tigt. Das Kompilieren und Ausf\xfchren der Klassen\nerfolgt dann \xfcber die Kommandozeile (Command Line Interface, kurz CLI).\nAlternativ kann auch eine Entwicklungsumgebung (Integrated Development\nEnvironment, kurz IDE) verwendet werden. Diese bieten in der Regel zus\xe4tzliche\nKomfortfunktionen wie Syntaxhighlighting, Autovervollst\xe4ndigung,\nVorschlagslisten etc. und vereinfachen so die Entwicklung von Programmen. Die am\nweitesten verbreiteten Entwicklungsumgebungen im Java-Umfeld sind dabei\n",(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/idea/",children:"IntelliJ IDEA"})," und\n",(0,t.jsx)(n.a,{href:"https://www.eclipse.org/",children:"Eclipse IDE"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"programmierstil-code-style",children:"Programmierstil (Code Style)"}),"\n",(0,t.jsx)(n.p,{children:"Als Programmierstil (Code Style) bezeichnet man alle Regeln und Richtlinien, die\nEntwickler befolgen sollten, um sicherzustellen, dass ihr Quellcode konsistent,\ngut lesbar und leicht wartbar ist. Ein einheitlicher Programmierstil erleichtert\nso auch die Zusammenarbeit in Teams, da er die Verst\xe4ndlichkeit und Wartbarkeit\ndes Codes verbessert."}),"\n",(0,t.jsx)(n.p,{children:"Ein Programmierstil legt unter anderem Regeln und Richtlinien f\xfcr nachfolgende\nAspekte fest:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Namenskonventionen"}),"\n",(0,t.jsx)(n.li,{children:"Klammersetzung"}),"\n",(0,t.jsx)(n.li,{children:"Leerzeichen"}),"\n",(0,t.jsx)(n.li,{children:"Leerzeilen"}),"\n",(0,t.jsx)(n.li,{children:"Einr\xfcckung"}),"\n",(0,t.jsx)(n.li,{children:"Zeilenl\xe4nge und Zeilenumbr\xfcche"}),"\n",(0,t.jsx)(n.li,{children:"Kommentare und Dokumentation"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Zu den bekanntesten Programmierstilen in Java geh\xf6ren die offiziellen\n",(0,t.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/javase/codeconventions-introduction.html",children:"Code Conventions for the Java Programming Language"}),"\nvon Oracle sowie der\n",(0,t.jsx)(n.a,{href:"https://google.github.io/styleguide/javaguide.html",children:"Google Java Style"})," von\nGoogle. Zudem existiert mit\n",(0,t.jsx)(n.a,{href:"https://github.com/jhipster/prettier-java",children:"Prettier Java"})," eine Erweiterung f\xfcr\nden weit verbreiteten Code Formatierer ",(0,t.jsx)(n.a,{href:"https://prettier.io/",children:"Prettier"}),". Neben\nvielen Gemeinsamkeiten wie dem Verzicht auf Tabulatorsp\xfcrunge zur Einr\xfcckung,\nden Regeln zu Leerzeichen sowie zur Klammersetzung unterscheiden sich die\ngenannten Programmierstile aber auch in Regeln wie der Anzahl der Leerzeichen\nzur Einr\xfcckung, der festgelegten Zeilenl\xe4nge sowie dem Umgang mit\nZeilenumbr\xfcchen bei funktionalen Aufrufen."]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return s}});var r=i(67294);let t={},a=r.createContext(t);function s(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);