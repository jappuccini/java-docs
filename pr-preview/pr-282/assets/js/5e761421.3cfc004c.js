"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8162"],{74579:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"documentation/arrays","title":"Felder (Arrays)","description":"","source":"@site/docs/documentation/arrays.md","sourceDirName":"documentation","slug":"/documentation/arrays","permalink":"/java-docs/pr-preview/pr-282/documentation/arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/arrays.md","tags":[{"inline":true,"label":"arrays","permalink":"/java-docs/pr-preview/pr-282/tags/arrays"}],"version":"current","sidebarPosition":110,"frontMatter":{"title":"Felder (Arrays)","description":"","sidebar_position":110,"tags":["arrays"]},"sidebar":"documentationSidebar","previous":{"title":"Schleifen","permalink":"/java-docs/pr-preview/pr-282/documentation/loops"},"next":{"title":"Feldbasierte Listen (ArrayLists)","permalink":"/java-docs/pr-preview/pr-282/documentation/array-lists"}}'),t=i("85893"),a=i("50065");let s={title:"Felder (Arrays)",description:"",sidebar_position:110,tags:["arrays"]},l=void 0,d={},o=[{value:"Erzeugen von Feldern",id:"erzeugen-von-feldern",level:2},{value:"Zugriff auf Feldelemente",id:"zugriff-auf-feldelemente",level:2},{value:"Der Parameter <em>String[] args</em>",id:"der-parameter-string-args",level:2},{value:"Variable Argumentlisten (VarArgs)",id:"variable-argumentlisten-varargs",level:2}];function c(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Wenn eine gro\xdfe Menge an Daten verarbeitet werden soll, kann man auf spezielle\nDatenstruktur-Variablen, sogenannte ",(0,t.jsx)(n.em,{children:"Felder"})," (Arrays), zur\xfcckgreifen. Die\neinzelnen Speicherpl\xe4tze in einem Feld werden als Elemente bezeichnet, die \xfcber\neinen Index angesprochen werden k\xf6nnen."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"0"}),(0,t.jsx)(n.th,{children:"1"}),(0,t.jsx)(n.th,{children:"2"}),(0,t.jsx)(n.th,{children:"3"}),(0,t.jsx)(n.th,{children:"4"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hans"}),(0,t.jsx)(n.td,{children:"Peter"}),(0,t.jsx)(n.td,{children:"Lisa"}),(0,t.jsx)(n.td,{children:"Max"}),(0,t.jsx)(n.td,{children:"Heidi"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"erzeugen-von-feldern",children:"Erzeugen von Feldern"}),"\n",(0,t.jsxs)(n.p,{children:["Da es sich bei Feldern um Objekte handelt, m\xfcssen diese vor Verwendung erzeugt\nwerden. Bei der Erzeugung muss immer die L\xe4nge des Feldes (d.h. die Anzahl der\nElemente) angegeben werden. Jedes Feld verf\xfcgt \xfcber das Attribut ",(0,t.jsx)(n.code,{children:"length"}),",\nwelches die L\xe4nge des Feldes enth\xe4lt."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n   public static void main(String[] args) {\n      int[] ids = new int[5];\n      System.out.println(Arrays.toString(ids));\n      int[] ids2 = {4, 8, 15, 16, 23, 42};\n      System.out.println(Arrays.toString(ids2));\n   }\n\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsx)(n.p,{children:"Felder werden zwar mit Hilfe des new-Operators erzeugt, besitzen aber keinen\nKonstruktor."})}),"\n",(0,t.jsx)(n.h2,{id:"zugriff-auf-feldelemente",children:"Zugriff auf Feldelemente"}),"\n",(0,t.jsx)(n.p,{children:"Der Zugriff auf die Elemente eines Feldes erfolgt \xfcber die Angabe des\nentsprechenden Index."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n   public static void main(String[] args) {\n      int[] ids = {4, 8, 15, 16, 23, 42};\n\n      for (int i = 0; i < ids.length; i++) {\n         System.out.println(ids[i]);\n      }\n   }\n\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,t.jsx)(n.p,{children:"Der Index beginnt bei Java bei 0."})}),"\n",(0,t.jsxs)(n.h2,{id:"der-parameter-string-args",children:["Der Parameter ",(0,t.jsx)(n.em,{children:"String[] args"})]}),"\n",(0,t.jsxs)(n.p,{children:["Der Parameter ",(0,t.jsx)(n.code,{children:"String[] args"})," der main-Methode erm\xf6glicht es dem Anwender, der\nausf\xfchrbaren Klasse beim Aufruf Informationen mitzugeben."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      for (int i = 0; i < args.length; i++) {\n         System.out.println("args[" + i + "]: " + args[i]);\n      }\n   }\n\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"variable-argumentlisten-varargs",children:"Variable Argumentlisten (VarArgs)"}),"\n",(0,t.jsx)(n.p,{children:"Variable Argumentlisten (VarArgs) erm\xf6glichen die Definition von Methoden, denen\nbeliebig viele Werte eines Datentyps mitgegeben werden k\xf6nnen. Die\nParameterliste einer Methode kann allerdings nur eine variable Argumentliste\nbeinhalten und diese muss immer am Ende der Parameterliste stehen."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      printAll("Peter", "Lisa");\n      printAll("Heidi", "Franz", "Fritz");\n   }\n\n   public static void printAll(String... texts) {\n      for (int i = 0; i < texts.length; i++) {\n         System.out.println(texts[i]);\n      }\n   }\n\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsx)(n.p,{children:"Technisch gesehen handelt es sich bei einer variablen Argumentliste um ein Feld."})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return s}});var r=i(67294);let t={},a=r.createContext(t);function s(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);