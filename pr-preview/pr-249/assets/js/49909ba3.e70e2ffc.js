"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7928"],{92489:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>u,contentTitle:()=>c});var t=JSON.parse('{"id":"documentation/cases","title":"Verzweigungen","description":"","source":"@site/docs/documentation/cases.md","sourceDirName":"documentation","slug":"/documentation/cases","permalink":"/java-docs/pr-preview/pr-249/documentation/cases","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/cases.md","tags":[{"inline":true,"label":"control-structures","permalink":"/java-docs/pr-preview/pr-249/tags/control-structures"},{"inline":true,"label":"cases","permalink":"/java-docs/pr-preview/pr-249/tags/cases"}],"version":"current","sidebarPosition":95,"frontMatter":{"title":"Verzweigungen","description":"","sidebar_position":95,"tags":["control-structures","cases"]},"sidebar":"documentationSidebar","previous":{"title":"Konsolenanwendungen","permalink":"/java-docs/pr-preview/pr-249/documentation/console-applications"},"next":{"title":"Schleifen","permalink":"/java-docs/pr-preview/pr-249/documentation/loops"}}'),s=i("85893"),r=i("50065");let a={title:"Verzweigungen",description:"",sidebar_position:95,tags:["control-structures","cases"]},c=void 0,l={},u=[{value:"Einfache Verzweigungen",id:"einfache-verzweigungen",level:2},{value:"Kaskadierte Verzweigungen",id:"kaskadierte-verzweigungen",level:2},{value:"Bedingte Zuweisungen",id:"bedingte-zuweisungen",level:2},{value:"Mehrfachverzweigungen",id:"mehrfachverzweigungen",level:2}];function o(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Mit Hilfe von Verzweigungen k\xf6nnen unterschiedliche Anweisungsbl\xf6cke ausgef\xfchrt\nwerden. Verzweigungen sind - genau wie Schleifen - wesentliche Bestandteile der\nProgrammierung un werden auch als ",(0,s.jsx)(n.em,{children:"Kontrollstrukturen"})," bezeichnet."]}),"\n",(0,s.jsx)(n.h2,{id:"einfache-verzweigungen",children:"Einfache Verzweigungen"}),"\n",(0,s.jsxs)(n.p,{children:["Die if-Verzweigung ist eine Anweisung, die abh\xe4ngig von einer Bedingung zwischen\nunterschiedlichen Anweisungsbl\xf6cken ausw\xe4hlt: Ist die Bedingung wahr, wird der\nAnweisungsblock direkt nach der Bedingung ausgef\xfchrt, ansonsten wird der\nAnweisungsblock nach ",(0,s.jsx)(n.code,{children:"else"})," ausgef\xfchrt."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n   public static void main(String[] args) {\n      int a = 3, b = 4, c;\n\n      if (a > b) {\n         c = a - b;\n      } else {\n         c = b - a;\n      }\n\n      System.out.println(c);\n   }\n\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,s.jsx)(n.p,{children:"Der else-Zweig ist optional, kann also weggelassen werden."})}),"\n",(0,s.jsx)(n.h2,{id:"kaskadierte-verzweigungen",children:"Kaskadierte Verzweigungen"}),"\n",(0,s.jsx)(n.p,{children:"Mehrfachverzweigungen k\xf6nnen mit Hilfe einer if-else-if-Leiter abgebildet\nwerden. Die if-else-if-Leiter verschachtelt mehrere if-Anweisungen zu einer\nsogenannten kaskadierten Verzweigung."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      int amount = 6;\n\n      if (amount >= 10) {\n         System.out.println("viel");\n      } else if (amount == 0) {\n         System.out.println("nichts");\n      } else if (amount > 0 && amount <= 5) {\n         System.out.println("wenig");\n      } else if (amount < 0) {\n         System.out.println("nicht definiert");\n      } else {\n         System.out.println("irgendwas zwischen wenig und viel");\n      }\n   }\n\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"bedingte-zuweisungen",children:"Bedingte Zuweisungen"}),"\n",(0,s.jsx)(n.p,{children:"Wird eine if-Verzweigung f\xfcr eine Wertzuweisung verwendet, spricht man von einer\nbedingten Zuweisung. Zus\xe4tzlich zur ausf\xfchrlichen Schreibweise existiert f\xfcr\nbedingte Zuweisungen auch eine Kurzschreibweise."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n   public static void main(String[] args) {\n      int x = 1;\n      int y = 2;\n      int z;\n\n      /* ausf\xfchrliche Schreibweise */\n      if (x > y) {\n         z = 3;\n      } else {\n         z = 4;\n      }\n      System.out.println(z);\n\n      /* Kurzschreibweise */\n      z = (x > y) ? 3 : 4;\n      System.out.println(z);\n   }\n\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,s.jsx)(n.p,{children:"Die Kurzschreibweise sollte verantwortungsvoll verwendet werden, da die\nLesbarkeit dadurch eventuell erschwert wird."})}),"\n",(0,s.jsx)(n.h2,{id:"mehrfachverzweigungen",children:"Mehrfachverzweigungen"}),"\n",(0,s.jsxs)(n.p,{children:["Mehrfachverzweigungen k\xf6nnen entweder mit Hilfe von if-else-if-Leitern oder mit\nHilfe der switch-case-Anweisung realisiert werden. Tritt ein Fall ein, werden\nalle Anweisungen bis zum n\xe4chsten ",(0,s.jsx)(n.code,{children:"break"})," ausgef\xfchrt. Durch Weglassen von\n",(0,s.jsx)(n.code,{children:"break"})," k\xf6nnen unterschiedliche F\xe4lle gleich behandelt werden. Der default-Block\nwird immer dann ausgef\xfchrt, wenn keiner der aufgef\xfchrten F\xe4lle eintritt."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      String color = "r";\n      switch (color) {\n         case "r":\n         case "R":\n            System.out.println("rot");\n            break;\n         case "g":\n         case "G":\n            System.out.println("gr\xfcn");\n            break;\n         case "b":\n         case "B":\n            System.out.println("blau");\n            break;\n         default:\n            break;\n      }\n   }\n\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Seit Java 14 beheben Switch-Ausdr\xfccke einige Ungereimtheiten der klassischen\nswitch-case-Anweisung und erm\xf6glichen eine elegantere Syntax."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      String color = "r";\n\n      String colorText = switch (color) {\n         case "r", "R" -> "rot";\n         case "g", "G" -> "gr\xfcn";\n         case "b", "B" -> "blau";\n         default       -> "";\n      };\n\n      System.out.println(colorText);\n   }\n\n}\n'})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return a}});var t=i(67294);let s={},r=t.createContext(s);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);