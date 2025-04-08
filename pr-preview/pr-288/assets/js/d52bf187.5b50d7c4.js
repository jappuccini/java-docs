"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7647"],{17241:function(e,n,a){a.r(n),a.d(n,{default:()=>l,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>u,contentTitle:()=>s});var t=JSON.parse('{"id":"documentation/pseudo-random-numbers","title":"Pseudozufallszahlen","description":"","source":"@site/docs/documentation/pseudo-random-numbers.md","sourceDirName":"documentation","slug":"/documentation/pseudo-random-numbers","permalink":"/java-docs/pr-preview/pr-288/documentation/pseudo-random-numbers","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/pseudo-random-numbers.md","tags":[{"inline":true,"label":"java-api","permalink":"/java-docs/pr-preview/pr-288/tags/java-api"},{"inline":true,"label":"random","permalink":"/java-docs/pr-preview/pr-288/tags/random"}],"version":"current","sidebarPosition":80,"frontMatter":{"title":"Pseudozufallszahlen","description":"","sidebar_position":80,"tags":["java-api","random"]},"sidebar":"documentationSidebar","previous":{"title":"Mathematische Berechnungen","permalink":"/java-docs/pr-preview/pr-288/documentation/calculations"},"next":{"title":"Konsolenanwendungen","permalink":"/java-docs/pr-preview/pr-288/documentation/console-applications"}}'),o=a("85893"),r=a("50065");let i={title:"Pseudozufallszahlen",description:"",sidebar_position:80,tags:["java-api","random"]},s=void 0,d={},u=[];function c(e){let n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Die Klasse ",(0,o.jsx)(n.code,{children:"Random"})," erm\xf6glicht das Erzeugen von Pseudozufallszahlen.\nPseudozufallszahlen sind scheinbar zuf\xe4llige Zahlen, die aber auf Grund einer\nFormel berechnet werden."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n   public static void main(String[] args) {\n      Random random = new Random();\n      int randomNumber;\n\n      for (int i = 0; i < 100; i++) {\n         randomNumber = random.nextInt(100) + 1;\n         System.out.println(randomNumber);\n      }\n   }\n\n}\n"})})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return i}});var t=a(67294);let o={},r=t.createContext(o);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);