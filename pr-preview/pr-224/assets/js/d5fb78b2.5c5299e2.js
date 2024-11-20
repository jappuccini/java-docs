"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1107"],{98796:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"documentation/records","title":"Datenklassen (Records)","description":"","source":"@site/docs/documentation/records.md","sourceDirName":"documentation","slug":"/documentation/records","permalink":"/java-docs/pr-preview/pr-224/documentation/records","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/records.md","tags":[{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-224/tags/records"}],"version":"current","sidebarPosition":250,"frontMatter":{"title":"Datenklassen (Records)","description":"","sidebar_position":250,"tags":["records"]},"sidebar":"documentationSidebar","previous":{"title":"Ausnahmen (Exceptions)","permalink":"/java-docs/pr-preview/pr-224/documentation/exceptions"},"next":{"title":"Lombok","permalink":"/java-docs/pr-preview/pr-224/documentation/lombok"}}'),r=t("85893"),s=t("50065");let a={title:"Datenklassen (Records)",description:"",sidebar_position:250,tags:["records"]},o=void 0,d={},c=[];function l(e){let n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Datenklassen sind Klassen die lediglich der Kapselung unver\xe4nderlicher Daten\ndienen. Daher bestehen Datenklassen h\xe4ufig aus Boilerplate-Code. Unter\nBoilerplate-Code versteht man Anweisungbl\xf6cke, die an verschiedenen Stellen mehr\noder weniger identisch verwendet werden."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Student.java" showLineNumbers',children:'public final class Student {\n\n  public final int id;\n  public final String name;\n\n  public Student(int id, String name) {\n    this.id = id;\n    this.name = name;\n  }\n\n  public int id() {\n    return id;\n  }\n\n  public String name() {\n    return name;\n  }\n\n  @Override\n  public final int hashCode() {\n    return Objects.hash(id, name);\n  }\n\n  @Override\n  public final boolean equals(Object obj) {\n    if (this == obj) {\n      return true;\n    }\n    if (obj == null) {\n      return false;\n    }\n    if (getClass() != obj.getClass()) {\n      return false;\n    }\n    Student other = (Student) obj;\n    return id == other.id && Objects.equals(name, other.name);\n  }\n\n  @Override\n  public final String toString() {\n    return "Student [id=" + id + ", name=" + name + "]";\n  }\n\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Seit Java 16 bieten Records die M\xf6glichkeiten, Datenklassen einfach umzusetzen.\nRecords sind spezielle Klassen, die anhand der festgelegten Parameter\nentsprechende Konstruktoren, Getter sowie Implementierungen f\xfcr die Methoden\n",(0,r.jsx)(n.code,{children:"boolean equals(object: Object)"}),", ",(0,r.jsx)(n.code,{children:"int hashCode()"})," und ",(0,r.jsx)(n.code,{children:"String toString()"}),"\nerzeugen. Das Schl\xfcsselwort f\xfcr Records lautet ",(0,r.jsx)(n.code,{children:"record"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Student.java" showLineNumbers',children:"public record Student(int id, String name) {\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,r.jsxs)(n.p,{children:["Da Records von der Klasse ",(0,r.jsx)(n.code,{children:"Record"})," abgeleitet sind, k\xf6nnen sie nicht von einer\nweiteren Klasse abgeleitet werden. Allerdings k\xf6nnen Records, wie andere Klassen\nauch, beliebig viele ",(0,r.jsx)(n.a,{href:"interfaces",children:"Schnittstellen"})," implementieren."]})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var i=t(67294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);