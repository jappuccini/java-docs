"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7501"],{90956:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>c,assets:()=>o,toc:()=>l,frontMatter:()=>t});var r=JSON.parse('{"id":"documentation/lambdas","title":"Lambda-Ausdr\xfccke (Lambdas)","description":"","source":"@site/docs/documentation/lambdas.md","sourceDirName":"documentation","slug":"/documentation/lambdas","permalink":"/java-docs/pr-preview/pr-232/documentation/lambdas","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/lambdas.md","tags":[{"inline":true,"label":"inner-classes","permalink":"/java-docs/pr-preview/pr-232/tags/inner-classes"},{"inline":true,"label":"lambdas","permalink":"/java-docs/pr-preview/pr-232/tags/lambdas"}],"version":"current","sidebarPosition":265,"frontMatter":{"title":"Lambda-Ausdr\xfccke (Lambdas)","description":"","sidebar_position":265,"tags":["inner-classes","lambdas"]},"sidebar":"documentationSidebar","previous":{"title":"Innere Klassen (Inner Classes)","permalink":"/java-docs/pr-preview/pr-232/documentation/inner-classes"},"next":{"title":"Generische Programmierung","permalink":"/java-docs/pr-preview/pr-232/documentation/generics"}}'),s=a("85893"),i=a("50065");let t={title:"Lambda-Ausdr\xfccke (Lambdas)",description:"",sidebar_position:265,tags:["inner-classes","lambdas"]},d=void 0,o={},l=[{value:"Implementierung von Lambda-Ausdr\xfccken",id:"implementierung-von-lambda-ausdr\xfccken",level:2},{value:"Syntaxvarianten",id:"syntaxvarianten",level:2},{value:"Methodenreferenzen",id:"methodenreferenzen",level:2}];function m(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Lambda-Ausdr\xfccke sind anonyme Funktionen, die nur \xfcber ihre Referenz\nangesprochen werden k\xf6nnen."}),"\n",(0,s.jsx)(n.h2,{id:"implementierung-von-lambda-ausdr\xfccken",children:"Implementierung von Lambda-Ausdr\xfccken"}),"\n",(0,s.jsxs)(n.p,{children:["Die Methodenparameter sowie der Methodenk\xf6rper werden bei einem Lambda-Ausdruck\ngetrennt vom Pfeiloperator ",(0,s.jsx)(n.code,{children:"->"})," notiert."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    List<String> names = new ArrayList<>();\n    names.add("Hans");\n    names.add("Peter");\n    names.add("Lisa");\n\n    Collections.sort(names, (n1, n2) -> n2.compareTo(n1));\n    names.forEach(n -> System.out.println(n));\n  }\n\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,s.jsx)(n.p,{children:"Voraussetzung f\xfcr den Einsatz eines Lambda-Ausdrucks ist eine funktionale\nSchnittstelle, also eine Schnittstelle, die \xfcber genau eine Methode verf\xfcgt."})}),"\n",(0,s.jsx)(n.h2,{id:"syntaxvarianten",children:"Syntaxvarianten"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bei keinem oder mehreren Methodenparametern m\xfcssen diese in runden Klammern\nangegeben werden, bei genau einem Methodenparameter k\xf6nnen die runden Klammern\nweggelassen werden"}),"\n",(0,s.jsx)(n.li,{children:"Besteht der Methodenk\xf6rper aus mehreren Anweisungen, m\xfcssen diese in\ngeschweiften Klammern angegeben werden, bei genau einer Anweisung k\xf6nnen die\ngeschweiften Klammern weggelassen werden"}),"\n",(0,s.jsxs)(n.li,{children:["Besteht der Methodenk\xf6rper aus genau einer Anweisung, kann das Semikolon am\nAnweisungsende weggelassen werden, ist die Anweisung eine return-Anweisung,\nkann auch das ",(0,s.jsx)(n.code,{children:"return"})," weggelassen werden"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"methodenreferenzen",children:"Methodenreferenzen"}),"\n",(0,s.jsx)(n.p,{children:"Lambda-Ausdr\xfccke, die nur aus dem Aufruf einer Methode bestehen, k\xf6nnen als\nMethodenreferenz dargestellt werden. Bei einer Methodenreferenz wird die Klasse\nbzw. die Referenz auf der linken Seite mit Hilfe zweier Doppelpunkte vom\nMethodennamen auf der recht Seite getrennt."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    List<Integer> numbers = new ArrayList<>();\n    numbers.add(256);\n    numbers.add(314);\n    numbers.add(127);\n\n    numbers.stream().map(n -> n.byteValue()).forEach(b -> System.out.println(b)); // Lambda-Ausdruck\n    numbers.stream().map(Integer::byteValue).forEach(System.out::println); // Methodenreferenz\n  }\n\n}\n"})})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return t}});var r=a(67294);let s={},i=r.createContext(s);function t(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);