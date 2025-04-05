"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6291"],{65467:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"additional-material/daniel/github-repos","title":"GitHub-Repositories","description":"","source":"@site/docs/additional-material/daniel/github-repos.md","sourceDirName":"additional-material/daniel","slug":"/additional-material/daniel/github-repos","permalink":"/java-docs/pr-preview/pr-278/additional-material/daniel/github-repos","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/daniel/github-repos.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"GitHub-Repositories","description":"","sidebar_position":10,"tags":[]},"sidebar":"additionalMaterialSidebar","previous":{"title":"Daniel","permalink":"/java-docs/pr-preview/pr-278/additional-material/daniel/"},"next":{"title":"Programmierung I (WI)","permalink":"/java-docs/pr-preview/pr-278/additional-material/daniel/coding1-wi/"}}'),r=i("85893"),l=i("50065");let d={title:"GitHub-Repositories",description:"",sidebar_position:10,tags:[]},t=void 0,a={},c=[{value:"Voraussetzungen",id:"voraussetzungen",level:2},{value:"Klonen eines remote Repositorys",id:"klonen-eines-remote-repositorys",level:2},{value:"Einbinden eines remote Repositorys",id:"einbinden-eines-remote-repositorys",level:2},{value:"Lombok einrichten (falls ben\xf6tigt)",id:"lombok-einrichten-falls-ben\xf6tigt",level:2},{value:"JavaFX einrichten (falls ben\xf6tigt)",id:"javafx-einrichten-falls-ben\xf6tigt",level:2},{value:"Scene Builder einrichten (falls ben\xf6tigt)",id:"scene-builder-einrichten-falls-ben\xf6tigt",level:2},{value:"JUnit 5 einrichten (falls ben\xf6tigt)",id:"junit-5-einrichten-falls-ben\xf6tigt",level:2},{value:"Aktualisieren eines lokalen Repositorys",id:"aktualisieren-eines-lokalen-repositorys",level:2},{value:"Ausf\xfchren von JavaFX-Anwendungen",id:"ausf\xfchren-von-javafx-anwendungen",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Diese Anleitung beschreibt das Arbeiten mit den nachfolgenden\nGitHub-Repositories. Diese enthalten s\xe4mtlichen relevanten Quellcode zu den\nVorlesungen ",(0,r.jsx)(n.em,{children:"Programmierung I (WI)"}),", ",(0,r.jsx)(n.em,{children:"Programmierung II (WI)"})," und ",(0,r.jsx)(n.em,{children:"Programmieren\n(INF)"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/appenmaier/java_exercises",children:"Musterl\xf6sungen \xdcbungsaufgaben"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/appenmaier/java_exam_exercises",children:"Musterl\xf6sungen Klausuraufgaben"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/appenmaier/java_apps",children:"Musterl\xf6sungen Apps"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/appenmaier/java_wwibe124",children:"Demos WWIBE124"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/appenmaier/java_wwibe224",children:"Demos WWIBE224"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/appenmaier/java_wwibe123",children:"Demos WWIBE123"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/appenmaier/java_wwibe223",children:"Demos WWIBE223"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/appenmaier/java_timtis23",children:"Demos TIM23 & TIS23"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/appenmaier/java_tittik23",children:"Demos TIT23 & TIK23"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,r.jsx)(n.p,{children:"Alle Angaben in dieser Anleitung beziehen sich auf Windows als Betriebssystem\nund Eclipse als IDE."})}),"\n",(0,r.jsx)(n.h2,{id:"voraussetzungen",children:"Voraussetzungen"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ein installiertes ",(0,r.jsx)(n.a,{href:"https://www.oracle.com/java/technologies/downloads/",children:"JDK"})]}),"\n",(0,r.jsxs)(n.li,{children:["Eine installierte ",(0,r.jsx)(n.a,{href:"https://www.eclipse.org/",children:"Eclipse IDE"})]}),"\n",(0,r.jsxs)(n.li,{children:["Ein installiertes ",(0,r.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"klonen-eines-remote-repositorys",children:"Klonen eines remote Repositorys"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Starte die Kommandozeile (z.B. Windows PowerShell)"}),"\n",(0,r.jsxs)(n.li,{children:["F\xfchre den Befehl\n",(0,r.jsx)(n.code,{children:'git clone https://github.com/appenmaier/[Der Name des remote Repositorys] "[Pfad zu Deinem lokalen Repository]"'}),"\naus, um das remote Repository zu klonen"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"einbinden-eines-remote-repositorys",children:"Einbinden eines remote Repositorys"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Starte Eclipse"}),"\n",(0,r.jsxs)(n.li,{children:["F\xfchre die Funktion\n",(0,r.jsx)(n.code,{children:"File - Import... - General - Projects from Folder or Archive"})," aus und\nbet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Next >"})]}),"\n",(0,r.jsxs)(n.li,{children:["Gib nachfolgende Informationen ein und bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Finish"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Import source: ",(0,r.jsx)(n.code,{children:"[Pfad zu Deinem lokalen Repository]"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"lombok-einrichten-falls-ben\xf6tigt",children:"Lombok einrichten (falls ben\xf6tigt)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Lade die Datei ",(0,r.jsx)(n.a,{href:"https://projectlombok.org/",children:"lombok.jar"})," herunter"]}),"\n",(0,r.jsxs)(n.li,{children:["F\xfchre die Datei ",(0,r.jsx)(n.code,{children:"lombok.jar"})," aus"]}),"\n",(0,r.jsxs)(n.li,{children:["Bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Install / Update"})]}),"\n",(0,r.jsxs)(n.li,{children:["Bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Quit Installer"})]}),"\n",(0,r.jsx)(n.li,{children:"Starte Eclipse"}),"\n",(0,r.jsxs)(n.li,{children:["Navigiere zu ",(0,r.jsx)(n.code,{children:"Window \u2013 Preferences \u2013 Java \u2013 Build Path \u2013 User Libraries"})]}),"\n",(0,r.jsxs)(n.li,{children:["Bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"New..."})]}),"\n",(0,r.jsxs)(n.li,{children:["Gib beim Feld ",(0,r.jsx)(n.code,{children:"User library name"})," den Wert ",(0,r.jsx)(n.code,{children:"Lombok"})," ein und bet\xe4tige die\nDrucktaste ",(0,r.jsx)(n.code,{children:"OK"})]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle den Eintrag ",(0,r.jsx)(n.code,{children:"Lombok"})," aus und bet\xe4tige die Drucktaste\n",(0,r.jsx)(n.code,{children:"Add External JARs..."})]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle die .jar-Datei des Ordners ",(0,r.jsx)(n.code,{children:"[Pfad zu Eclipse]\\lombok.jar"})," aus und\nbet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Open"})]}),"\n",(0,r.jsxs)(n.li,{children:["Bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Apply and Close"})]}),"\n",(0,r.jsx)(n.li,{children:"Navigiere im Package Explorer zu Deinem Projekt und w\xe4hle dieses aus"}),"\n",(0,r.jsxs)(n.li,{children:["Navigiere zu ",(0,r.jsx)(n.code,{children:"Project - Properties - Java Build Path"})," und w\xe4hle den Reiter\n",(0,r.jsx)(n.code,{children:"Libraries"})," aus"]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle den Eintrag ",(0,r.jsx)(n.code,{children:"Classpath"})," aus und bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Add Library..."})]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle die Option ",(0,r.jsx)(n.code,{children:"User Library"})," aus und bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Next >"})]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle die Option ",(0,r.jsx)(n.code,{children:"Lombok"})," aus und bet\xe4tige die Drucktase ",(0,r.jsx)(n.code,{children:"Finish"})]}),"\n",(0,r.jsxs)(n.li,{children:["Bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Apply and Close"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"javafx-einrichten-falls-ben\xf6tigt",children:"JavaFX einrichten (falls ben\xf6tigt)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Lade das ",(0,r.jsx)(n.a,{href:"https://gluonhq.com/products/javafx/",children:"JavaFX SDK"})," herunter"]}),"\n",(0,r.jsxs)(n.li,{children:["Entpacke die heruntergeladene Zip-Datei und kopiere den Unterordner\n",(0,r.jsx)(n.code,{children:"javafx-sdk-[JavaFX SDK Version]"})," der entpackten Zip-Datei in den Ordner\n",(0,r.jsx)(n.code,{children:"[Pfad zu Deinem JavaFX-Ordner]"})]}),"\n",(0,r.jsx)(n.li,{children:"Starte Eclipse"}),"\n",(0,r.jsxs)(n.li,{children:["Navigiere zu ",(0,r.jsx)(n.code,{children:"Window \u2013 Preferences \u2013 Java \u2013 Build Path \u2013 User Libraries"})]}),"\n",(0,r.jsxs)(n.li,{children:["Bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"New..."})]}),"\n",(0,r.jsxs)(n.li,{children:["Gib beim Feld ",(0,r.jsx)(n.code,{children:"User library name"})," den Wert ",(0,r.jsx)(n.code,{children:"JavaFX [JavaFX SDK Version]"})," ein\nund bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"OK"})]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle den Eintrag ",(0,r.jsx)(n.code,{children:"JavaFX [JavaFX SDK Version]"})," aus und bet\xe4tige die\nDrucktaste ",(0,r.jsx)(n.code,{children:"Add External JARs..."})]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle alle .jar-Dateien des Ordners\n",(0,r.jsx)(n.code,{children:"[Pfad zu Deinem JavaFX-Ordner]\\javafx-sdk-[JavaFX SDK Version]\\lib"})," aus und\nbet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Open"})]}),"\n",(0,r.jsxs)(n.li,{children:["F\xfchre f\xfcr jede .jar-Datei nachfolgende Schritte durch:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["W\xe4hle den Eintrag\n",(0,r.jsx)(n.code,{children:"JavaFX [JavaFX SDK Version] \u2013 <.jar-Datei> \u2013 Source attachment: (None)"})," aus\nund bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Edit..."})]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle die Option ",(0,r.jsx)(n.code,{children:"External location"})," aus"]}),"\n",(0,r.jsxs)(n.li,{children:["Gib beim Feld ",(0,r.jsx)(n.code,{children:"Path"})," den Wert\n",(0,r.jsx)(n.code,{children:"[Pfad zu Deinem JavaFX-Ordner]\\javafx-sdk-[JavaFX SDK Version]\\lib\\src.zip"}),"\nein und bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"OK"})]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle den Eintrag\n",(0,r.jsx)(n.code,{children:"JavaFX [JavaFX SDK Version] \u2013 <.jar-Datei> \u2013 Javadoc location: (None)"})," aus\nund bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Edit..."})]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle die Option ",(0,r.jsx)(n.code,{children:"Javadoc URL"})," aus"]}),"\n",(0,r.jsxs)(n.li,{children:["Gib beim Feld ",(0,r.jsx)(n.code,{children:"Javadoc location path"})," den Wert\n",(0,r.jsx)(n.code,{children:"https://openjfx.io/javadoc/[JavaFX SDK Version]/"})," ein und bet\xe4tige die\nDrucktaste ",(0,r.jsx)(n.code,{children:"OK"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Apply and Close"})]}),"\n",(0,r.jsx)(n.li,{children:"Navigiere im Package Explorer zu Deinem Projekt und w\xe4hle dieses aus"}),"\n",(0,r.jsxs)(n.li,{children:["Navigiere zu ",(0,r.jsx)(n.code,{children:"Project - Properties - Java Build Path"})," und w\xe4hle den Reiter\n",(0,r.jsx)(n.code,{children:"Libraries"})," aus"]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle die Option ",(0,r.jsx)(n.code,{children:"Classpath"})," aus und bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Add Library..."})]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle die Option ",(0,r.jsx)(n.code,{children:"User Library"})," aus und bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Next >"})]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle die Option ",(0,r.jsx)(n.code,{children:"JavaFX [JavaFX Version]"})," aus und bet\xe4tige die Drucktase\n",(0,r.jsx)(n.code,{children:"Finish"})]}),"\n",(0,r.jsxs)(n.li,{children:["Bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Apply and Close"})]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Anleitungen f\xfcr andere g\xe4ngige Entwicklungsumgebungen k\xf6nnen der\n",(0,r.jsx)(n.a,{href:"https://openjfx.io/openjfx-docs/#introduction",children:"JavaFX Homepage"})," entnommen\nwerden."]})}),"\n",(0,r.jsx)(n.h2,{id:"scene-builder-einrichten-falls-ben\xf6tigt",children:"Scene Builder einrichten (falls ben\xf6tigt)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Installiere den ",(0,r.jsx)(n.a,{href:"https://gluonhq.com/products/scene-builder/",children:"Scene Builder"})]}),"\n",(0,r.jsxs)(n.li,{children:["Installiere das Eclipse-Plugin\n",(0,r.jsx)(n.a,{href:"http://download.eclipse.org/efxclipse/updates-released/",children:"e(fx)clipse"})]}),"\n",(0,r.jsx)(n.li,{children:"Starte Eclipse"}),"\n",(0,r.jsxs)(n.li,{children:["Navigiere zu ",(0,r.jsx)(n.code,{children:"Window \u2013 Preferences \u2013 JavaFX"})]}),"\n",(0,r.jsxs)(n.li,{children:["Gib beim Feld ",(0,r.jsx)(n.code,{children:"SceneBuilder executable"})," den Wert\n",(0,r.jsx)(n.code,{children:"[Pfad zur SceneBuilder.exe]\\SceneBuilder.exe"})," ein und bet\xe4tige die Drucktaste\n",(0,r.jsx)(n.code,{children:"Apply and Close"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"junit-5-einrichten-falls-ben\xf6tigt",children:"JUnit 5 einrichten (falls ben\xf6tigt)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Starte Eclipse"}),"\n",(0,r.jsx)(n.li,{children:"Navigiere im Package Explorer zu Deinem Projekt und w\xe4hle dieses aus"}),"\n",(0,r.jsxs)(n.li,{children:["Navigiere zu ",(0,r.jsx)(n.code,{children:"Project - Properties - Java Build Path"})," und w\xe4hle den Reiter\n",(0,r.jsx)(n.code,{children:"Libraries"})," aus"]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle die Option ",(0,r.jsx)(n.code,{children:"Classpath"})," aus und bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Add Library..."})]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle den Eintrag ",(0,r.jsx)(n.code,{children:"JUnit"})," aus und bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Next >"})]}),"\n",(0,r.jsxs)(n.li,{children:["Gib nachfolgende Informationen ein und bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Finish"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["JUnit library Version: ",(0,r.jsx)(n.code,{children:"JUnit 5"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Apply and Close"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"aktualisieren-eines-lokalen-repositorys",children:"Aktualisieren eines lokalen Repositorys"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Starte die Kommandozeile (z.B. Windows PowerShell)"}),"\n",(0,r.jsxs)(n.li,{children:["F\xfchre den Befehl ",(0,r.jsx)(n.code,{children:'cd "[Pfad zu Deinem lokalen Repository]"'})," aus, um zum\nArbeitsbereich Deines lokalen Repositorys zu wechseln"]}),"\n",(0,r.jsxs)(n.li,{children:["F\xfchre den Befehl ",(0,r.jsx)(n.code,{children:"git pull"})," aus, um den Arbeitsbereich zu aktualisieren"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ausf\xfchren-von-javafx-anwendungen",children:"Ausf\xfchren von JavaFX-Anwendungen"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Variante A"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Starte Eclipse"}),"\n",(0,r.jsxs)(n.li,{children:["Navigiere im Package Explorer zur gew\xfcnschten JavaFX-Anwendung und w\xe4hle die\nKlasse ",(0,r.jsx)(n.code,{children:"App"})," aus"]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle die Option ",(0,r.jsx)(n.code,{children:"Run \u2013 Run Configurations"})," aus"]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle die Option ",(0,r.jsx)(n.code,{children:"Java Application"})," aus und bet\xe4tige die Drucktaste\n",(0,r.jsx)(n.code,{children:"New launch configuration"})]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle den Reiter ",(0,r.jsx)(n.code,{children:"Arguments"})," aus"]}),"\n",(0,r.jsxs)(n.li,{children:["Gib beim Feld ",(0,r.jsx)(n.code,{children:"VM arguments"})," den Wert\n",(0,r.jsx)(n.code,{children:'--module-path "[Pfad zu Deinem JavaFX-Ordner]\\javafx-sdk-[JavaFX SDK Version]\\lib" --add-modules=javafx.controls,javafx.fxml'}),"\nein und bet\xe4tige die Drucktaste ",(0,r.jsx)(n.code,{children:"Run"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Variante"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Starte Eclipse"}),"\n",(0,r.jsxs)(n.li,{children:["Navigiere im Package Explorer zur gew\xfcnschten JavaFX-Anwendung und w\xe4hle die\nKlasse ",(0,r.jsx)(n.code,{children:"MainClass"})," aus"]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hle die Option ",(0,r.jsx)(n.code,{children:"Run As - 1 Java Application"})," aus"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return d}});var s=i(67294);let r={},l=s.createContext(r);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);