"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1531"],{9934:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"documentation/classes","title":"Klassen","description":"","source":"@site/docs/documentation/classes.md","sourceDirName":"documentation","slug":"/documentation/classes","permalink":"/java-docs/pr-preview/pr-248/documentation/classes","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/classes.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-248/tags/oo"}],"version":"current","sidebarPosition":131,"frontMatter":{"title":"Klassen","description":"","sidebar_position":131,"tags":["oo"]},"sidebar":"documentationSidebar","previous":{"title":"Objektorientierte Programmierung","permalink":"/java-docs/pr-preview/pr-248/documentation/oo"},"next":{"title":"Referenzen und Objekte","permalink":"/java-docs/pr-preview/pr-248/documentation/references-and-objects"}}'),r=t("85893"),s=t("50065");let d={title:"Klassen",description:"",sidebar_position:131,tags:["oo"]},a=void 0,o={},l=[{value:"Sichtbarkeit von Klassen, Attributen und Methoden",id:"sichtbarkeit-von-klassen-attributen-und-methoden",level:2},{value:"Definition von Attributen",id:"definition-von-attributen",level:2},{value:"Definition und Implementierung von Methoden",id:"definition-und-implementierung-von-methoden",level:2},{value:"Definition \xfcberladener Methoden",id:"definition-\xfcberladener-methoden",level:2},{value:"Definition von Konstruktoren",id:"definition-von-konstruktoren",level:2},{value:"Definition statischer Attribute und Methoden",id:"definition-statischer-attribute-und-methoden",level:2}];function u(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Klassen legen die Eigenschafen (Attribute) sowie das Verhalten (Methoden) von\nObjekten fest und stellen damit quasi Baupl\xe4ne f\xfcr Objekte dar."}),"\n",(0,r.jsx)(n.h2,{id:"sichtbarkeit-von-klassen-attributen-und-methoden",children:"Sichtbarkeit von Klassen, Attributen und Methoden"}),"\n",(0,r.jsx)(n.p,{children:"Um die Sichtbarkeit von Klassen, Attributen und Methoden zu definieren,\nexistieren verschiedene Zugriffsrechte. Die Sichtbarkeit bestimmt, von welchem\nOrt aus Klassen, Attribute und Methoden verwendet bzw. aufgerufen werden d\xfcrfen."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Zugriffsrecht"}),(0,r.jsx)(n.th,{children:"Zugriff aus gleicher Klasse"}),(0,r.jsx)(n.th,{children:"Zugriff von einer Klasse aus dem gleichen Paket"}),(0,r.jsx)(n.th,{children:"Zugriff von einer Unterklasse"}),(0,r.jsx)(n.th,{children:"Zugriff von einer beliebigen Klasse"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"public"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"ja"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"protected"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"nein"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"package"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"nein"}),(0,r.jsx)(n.td,{children:"nein"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"private"}),(0,r.jsx)(n.td,{children:"ja"}),(0,r.jsx)(n.td,{children:"nein"}),(0,r.jsx)(n.td,{children:"nein"}),(0,r.jsx)(n.td,{children:"nein"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"definition-von-attributen",children:"Definition von Attributen"}),"\n",(0,r.jsxs)(n.p,{children:["Die Attribute einer Klasse sind Datenobjekte und werdern daher analog zu\nVariablen und Konstanten definiert. Das Schl\xfcsselwort ",(0,r.jsx)(n.code,{children:"final"})," erlaubt die\nDefinition von unver\xe4nderlichen Attributen, also Attributen, deren Wert nicht\nge\xe4ndert werden kann. Die Initialisierung dieser unver\xe4nderlichen Attribute\nerfolgt durch ",(0,r.jsx)(n.a,{href:"classes#definition-von-konstruktoren",children:"Konstruktoren"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java (Auszug)" showLineNumbers',children:"public class Computer {\n   ...\n   private final String description;\n   private Cpu cpu;\n   private int memoryInGb;\n   ...\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Die Selbstreferenz ",(0,r.jsx)(n.code,{children:"this"})," verweist innerhalb einer Klasse auf das eigene Objekt\n(siehe auch ",(0,r.jsx)(n.a,{href:"references-and-objects",children:"Referenzen und Objekte"}),")."]})}),"\n",(0,r.jsx)(n.h2,{id:"definition-und-implementierung-von-methoden",children:"Definition und Implementierung von Methoden"}),"\n",(0,r.jsxs)(n.p,{children:["Methoden sind in der Programmierung eine Verallgemeinerung von mathematischen\nFunktionen. Eine Methode besteht aus einem Methodennamen, einer Liste von\nEingabeparameter (optional), einem R\xfcckgabewert (optional) sowie dem\nMethodenrumpf. Die Kombination aus Methodenname und den Datentypen der\nParameterliste bezeichent man als ",(0,r.jsx)(n.em,{children:"Signatur einer Methode"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Methoden k\xf6nnen entweder genau einen R\xfcckgabewert oder keinen R\xfcckgabewert\nbesitzen. Methoden mit genau einem R\xfcckgabewert m\xfcssen vor dem Methodennamen den\nDatentyp des R\xfcckgabewerts angeben und am Ende des Methodenrumpfes immer die\nAnweisung ",(0,r.jsx)(n.code,{children:"return"})," besitzen, Methoden ohne R\xfcckgabewert m\xfcssen dies mit dem\nSchl\xfcsselwort ",(0,r.jsx)(n.code,{children:"void"})," kenntlich machen."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java (Auszug)" showLineNumbers',children:"public class Computer {\n   ...\n   public Cpu getCpu() {\n      return cpu;\n   }\n\n   public String getDescription() {\n      return description;\n   }\n\n   public int getMemoryInGb() {\n      return memoryInGb;\n   }\n\n   public void setCpu(Cpu cpu) {\n      this.cpu = cpu;\n   }\n\n   public void setMemoryInGb(int memoryInGb) {\n      this.memoryInGb = memoryInGb;\n   }\n   ...\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"definition-\xfcberladener-methoden",children:"Definition \xfcberladener Methoden"}),"\n",(0,r.jsx)(n.p,{children:"Gleichnamige Methoden mit unterschiedlichen Parameterlisten einer Klasse werden\nals \xfcberladene Methoden bezeichnet. Man spricht in diesem Zusammenhang auch von\nstatischer Polymorphie, da der Aufruf gleichnamiger Methoden unterschiedliche\nErgebnisse liefern kann."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java (Auszug)" showLineNumbers',children:"public class Computer {\n   ...\n   public void setCpu(Cpu cpu) {\n      this.cpu = cpu;\n   }\n\n   public void setCpu(double powerInGhz, int numberOfCores) {\n      cpu = new Cpu(powerInGhz, numberOfCores);\n   }\n   ...\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,r.jsx)(n.p,{children:"\xdcberladene Methoden k\xf6nnen keine unterschiedlichen R\xfcckgabewerte besitzen."})}),"\n",(0,r.jsx)(n.h2,{id:"definition-von-konstruktoren",children:"Definition von Konstruktoren"}),"\n",(0,r.jsx)(n.p,{children:"Bei Konstruktoren handelt es sich um spezielle Methoden, die zur Initialisierung\neines Objekts verwendet werden. Konstruktoren hei\xdfen wie ihre Klasse und k\xf6nnen\neine beliebige Anzahl an Parametern haben. Allerdings kann f\xfcr Konstruktoren\nkein R\xfcckgabewert festgelegt werden, da diese implizit die Referenz auf das\nObjekt zur\xfcckgeben."}),"\n",(0,r.jsx)(n.p,{children:"Im Gegensatz zu z.B. C++ existieren in Java keine Destruktoren, die nicht mehr\nben\xf6tigte Objekte aus dem Speicher entfernen. Stattdessen l\xe4uft im Hintergrund\nder sogenannte Garbage Collector, der nicht mehr ben\xf6tigte Objekte (also\nObjekte, die nicht mehr \xfcber eine Referenzvariable angesprochen werden k\xf6nnen)\nl\xf6scht."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java (Auszug)" showLineNumbers',children:"public class Computer {\n   ...\n   public Computer(String description) {\n      this.description = description;\n   }\n\n   public Computer(String description, Cpu cpu, int memoryInGb) {\n      this(description);\n      this.cpu = cpu;\n      this.memoryInGb = memoryInGb;\n   }\n   ...\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Auch Konstruktoren k\xf6nnen \xfcberladen werden, das hei\xdft eine Klasse kann \xfcber\nmehrere Konstruktoren verf\xfcgen. Der Aufruf eines Konstruktors innerhalb eines\nanderen Konstruktors erfolgt dabei \xfcber die Selbstreferenz ",(0,r.jsx)(n.code,{children:"this"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"definition-statischer-attribute-und-methoden",children:"Definition statischer Attribute und Methoden"}),"\n",(0,r.jsx)(n.p,{children:'Neben "normalen" Attributen und Methoden kann eine Klasse auch statische\nAttribute und statische Methoden besitzen. Im Gegensatz zu "normalen" Attributen\nexistieren statische Attribute nur einmal pro Klasse und besitzen daher f\xfcr alle\nObjekte dieser Klasse dieselben Werte. Innerhalb einer statischen Methode kann\nnur auf die statischen Attribute der Klasse zugegriffen werden.'}),"\n",(0,r.jsxs)(n.p,{children:["Bei der Deklaration von statischen Attributen und statischen Methoden kommt das\nSchl\xfcsselwort ",(0,r.jsx)(n.code,{children:"static"})," zum Einsatz. F\xfcr den Zugriff auf ein statisches Attribut\nbzw. den Aufruf einer statischen Methode wird keine Instanziierung ben\xf6tigt,\nd.h. der der Zugriff bzw. Aufruf erfolgt \xfcber den Klassennamen."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java (Auszug)" showLineNumbers',children:"public class Computer {\n   ...\n   private static int numberOfComputers;\n\n   public Computer(String description) {\n      this.description = description;\n      numberOfComputers++;\n   }\n\n   public static int getNumberOfComputers() {\n      return numberOfComputers;\n   }\n   ...\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsx)(n.p,{children:'"Normale" Attribute und Methoden werden auch als Instanzattribute bzw.\nInstanzmethoden bezeichnet, statische Attribute und Methoden auch\nKlassenattribute bzw. Klassenmethoden.'})})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var i=t(67294);let r={},s=i.createContext(r);function d(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);