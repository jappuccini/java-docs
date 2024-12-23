"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["471"],{45010:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"documentation/array-lists","title":"Feldbasierte Listen (ArrayLists)","description":"","source":"@site/docs/documentation/array-lists.md","sourceDirName":"documentation","slug":"/documentation/array-lists","permalink":"/java-docs/pr-preview/pr-239/documentation/array-lists","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/array-lists.md","tags":[{"inline":true,"label":"collections","permalink":"/java-docs/pr-preview/pr-239/tags/collections"},{"inline":true,"label":"arrays","permalink":"/java-docs/pr-preview/pr-239/tags/arrays"},{"inline":true,"label":"lists","permalink":"/java-docs/pr-preview/pr-239/tags/lists"}],"version":"current","sidebarPosition":120,"frontMatter":{"title":"Feldbasierte Listen (ArrayLists)","description":"","sidebar_position":120,"tags":["collections","arrays","lists"]},"sidebar":"documentationSidebar","previous":{"title":"Felder (Arrays)","permalink":"/java-docs/pr-preview/pr-239/documentation/arrays"},"next":{"title":"Objektorientierte Programmierung","permalink":"/java-docs/pr-preview/pr-239/documentation/oo"}}'),r=n("85893"),s=n("50065");let a={title:"Feldbasierte Listen (ArrayLists)",description:"",sidebar_position:120,tags:["collections","arrays","lists"]},o=void 0,l={},c=[];function d(e){let t={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Um das Arbeiten mit Feldern zu erleichtern, stellt die Java API die Klasse\n",(0,r.jsx)(t.code,{children:"ArrayList<E>"})," zur Verf\xfcgung. Diese stellt eine ver\xe4nderbare Liste dynamischer\nGr\xf6\xdfe auf Basis eines Feldes dar und bietet hilfreiche Methoden zum Hinzuf\xfcgen,\n\xc4ndern, L\xf6schen und Lesen von Listelementen."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    List<String> list = new ArrayList<>();\n    list.add("Hans");\n    list.add("Peter");\n    list.add("Lisa");\n\n    System.out.println(list.size());\n    System.out.println(list.get(0));\n    list.set(0, "Max");\n    list.add("Heidi");\n    list.remove(0);\n  }\n\n}\n'})})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var i=n(67294);let r={},s=i.createContext(r);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);