"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6938"],{93646:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>o});var a=JSON.parse('{"id":"documentation/dates-and-times","title":"Datums- und Zeitangaben","description":"","source":"@site/docs/documentation/dates-and-times.md","sourceDirName":"documentation","slug":"/documentation/dates-and-times","permalink":"/java-docs/production/documentation/dates-and-times","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/dates-and-times.md","tags":[{"inline":true,"label":"java-api","permalink":"/java-docs/production/tags/java-api"},{"inline":true,"label":"dates-and-times","permalink":"/java-docs/production/tags/dates-and-times"}],"version":"current","sidebarPosition":142,"frontMatter":{"title":"Datums- und Zeitangaben","description":"","sidebar_position":142,"tags":["java-api","dates-and-times"]},"sidebar":"documentationSidebar","previous":{"title":"Wrapper-Klassen","permalink":"/java-docs/production/documentation/wrappers"},"next":{"title":"Dateien und Verzeichnisse","permalink":"/java-docs/production/documentation/files"}}'),i=t("85893"),s=t("50065");let o={title:"Datums- und Zeitangaben",description:"",sidebar_position:142,tags:["java-api","dates-and-times"]},r=void 0,d={},l=[];function c(e){let n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Die Klasse ",(0,i.jsx)(n.code,{children:"LocalDateTime"})," liefert alle relevanten Informationen zum fast\nweltweit verwendeten Kalendersystem ISO-8601 (gregorianischer Kalender)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    LocalDateTime now = LocalDateTime.now();\n\n    System.out.println("Jahr: " + now.getYear());\n    System.out.println("Monat: " + now.getMonth());\n    System.out.println("Tag: " + now.getDayOfMonth());\n  }\n\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Neben den print-Methoden des Standard-Ausgabestroms ",(0,i.jsx)(n.code,{children:"System.out"})," besitzt die\nKlasse ",(0,i.jsx)(n.code,{children:"System"})," auch die Methode ",(0,i.jsx)(n.code,{children:"long currentTimeMillis()"}),", die die Differenz\nin Millisekunden zwischen der aktuellen Systemzeit und dem Nullpunkt zur\xfcckgibt."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    long timeInMilliseconds = System.currentTimeMillis();\n    System.out.println(timeInMilliseconds);\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsx)(n.p,{children:"Der festgelegte Nullpunkt ist der 1. Januar 1970, 0 Uhr."})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var a=t(67294);let i={},s=a.createContext(i);function o(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);