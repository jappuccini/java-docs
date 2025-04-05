"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4841"],{73700:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"documentation/optionals","title":"Optionals","description":"","source":"@site/docs/documentation/optionals.md","sourceDirName":"documentation","slug":"/documentation/optionals","permalink":"/java-docs/pr-preview/pr-283/documentation/optionals","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/optionals.md","tags":[{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-283/tags/optionals"}],"version":"current","sidebarPosition":290,"frontMatter":{"title":"Optionals","description":"","sidebar_position":290,"tags":["optionals"]},"sidebar":"documentationSidebar","previous":{"title":"Assoziativspeicher (Maps)","permalink":"/java-docs/pr-preview/pr-283/documentation/maps"},"next":{"title":"Die Java Stream API","permalink":"/java-docs/pr-preview/pr-283/documentation/java-stream-api"}}'),a=t("85893"),r=t("50065");let s={title:"Optionals",description:"",sidebar_position:290,tags:["optionals"]},o=void 0,l={},c=[];function d(e){let n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Der Umgang mit null-Werten stellt in vielen Programmiersprachen eine gro\xdfe\nHerausforderung dar. Zur Vermeidung von Laufzeitfehlern (",(0,a.jsx)(n.code,{children:"NullPointerException"}),")\nm\xfcsste vor jedem Methodenaufruf eigentlich \xfcberpr\xfcft werden, ob ein g\xfcltiger\nWert vorliegt oder nicht."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n   private static List<String> names;\n\n   public static void main(String[] args) {\n      names = new ArrayList<>();\n      String name = getNameByInitial('H');\n      System.out.println(name.length()); // Laufzeitfehler\n   }\n\n   public static String getNameByInitial(char initial) {\n      String name = null;\n      for (String n : names) {\n         if (n.charAt(0) == initial) {\n            name = n;\n            break;\n         }\n      }\n      return name;\n   }\n\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Die Klasse ",(0,a.jsx)(n.code,{children:"Optional"})," erm\xf6glicht in Java eine komfortable M\xf6glichkeit, mit\nnull-Werten umzugehen. Das eigentliche Objekt wird dabei in einem Objekt der\nKlasse ",(0,a.jsx)(n.code,{children:"Optional"})," verpackt; der Zugriff auf das verpackte Objekt erfolgt \xfcber\nentsprechende Methoden. Dies stellt sicher, dass sich der Entwickler mit\nnull-Werten auseinander setzen muss."]}),"\n",(0,a.jsxs)(n.p,{children:["F\xfcr den Umgang mit null-Werten stellt die Klasse ",(0,a.jsx)(n.code,{children:"Optional"})," Methoden wie\n",(0,a.jsx)(n.code,{children:"T get()"}),", ",(0,a.jsx)(n.code,{children:"boolean isPresent()"})," und ",(0,a.jsx)(n.code,{children:"void ifPresent(consumer: Consumer<T>)"})," zur\nVerf\xfcgung. Zudem existieren Methoden wie ",(0,a.jsx)(n.code,{children:"void orElse(other: T)"}),", mit denen\nStandardwerte festgelegt werden k\xf6nnen."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n   private static List<String> names;\n\n   public static void main(String[] args) {\n      names = new ArrayList<>();\n      Optional<String> name = getNameByInitial('H');\n      name.ifPresent(n -> System.out.println(n.length()));\n   }\n\n   public static Optional<String> getNameByInitial(char initial) {\n      String name = null;\n      for (String n : names) {\n         if (n.charAt(0) == initial) {\n            name = n;\n            break;\n         }\n      }\n      return Optional.ofNullable(name);\n   }\n\n}\n"})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var i=t(67294);let a={},r=i.createContext(a);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);