"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["471"],{67375:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"documentation/array-lists","title":"Feldbasierte Listen (ArrayLists)","description":"","source":"@site/docs/documentation/array-lists.md","sourceDirName":"documentation","slug":"/documentation/array-lists","permalink":"/java-docs/pr-preview/pr-274/documentation/array-lists","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/array-lists.md","tags":[{"inline":true,"label":"collections","permalink":"/java-docs/pr-preview/pr-274/tags/collections"},{"inline":true,"label":"arrays","permalink":"/java-docs/pr-preview/pr-274/tags/arrays"},{"inline":true,"label":"lists","permalink":"/java-docs/pr-preview/pr-274/tags/lists"}],"version":"current","sidebarPosition":120,"frontMatter":{"title":"Feldbasierte Listen (ArrayLists)","description":"","sidebar_position":120,"tags":["collections","arrays","lists"]},"sidebar":"documentationSidebar","previous":{"title":"Felder (Arrays)","permalink":"/java-docs/pr-preview/pr-274/documentation/arrays"},"next":{"title":"Objektorientierte Programmierung","permalink":"/java-docs/pr-preview/pr-274/documentation/oo"}}'),s=t("85893"),a=t("50065");let i={title:"Feldbasierte Listen (ArrayLists)",description:"",sidebar_position:120,tags:["collections","arrays","lists"]},o=void 0,l={},c=[];function d(e){let n={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Um das Arbeiten mit Feldern zu erleichtern, stellt die Java API die Klasse\n",(0,s.jsx)(n.code,{children:"ArrayList<E>"})," zur Verf\xfcgung. Diese stellt eine ver\xe4nderbare Liste dynamischer\nGr\xf6\xdfe auf Basis eines Feldes dar und bietet hilfreiche Methoden zum Hinzuf\xfcgen,\n\xc4ndern, L\xf6schen und Lesen von Listelementen."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      ArrayList<String> names = new ArrayList<>();\n      names.add("Hans");\n      names.add("Peter");\n      names.add("Lisa");\n\n      System.out.println(names.size());\n      System.out.println(names.get(0));\n      names.set(0, "Max");\n      names.add("Heidi");\n      names.remove(0);\n   }\n\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(67294);let s={},a=r.createContext(s);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);