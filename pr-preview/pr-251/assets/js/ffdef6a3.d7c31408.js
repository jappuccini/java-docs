"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4319"],{59366:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>t});var i=JSON.parse('{"id":"exercises/git/git05","title":"Git05","description":"","source":"@site/docs/exercises/git/git05.mdx","sourceDirName":"exercises/git","slug":"/exercises/git/git05","permalink":"/java-docs/pr-preview/pr-251/exercises/git/git05","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/git/git05.mdx","tags":[],"version":"current","frontMatter":{"title":"Git05","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Git04","permalink":"/java-docs/pr-preview/pr-251/exercises/git/git04"},"next":{"title":"Aufbau einer Java-Klasse","permalink":"/java-docs/pr-preview/pr-251/exercises/class-structure/"}}'),a=s("85893"),l=s("50065");let r={title:"Git05",description:""},t=void 0,d={},o=[{value:"Quellcode",id:"quellcode",level:2},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Erstelle ein HelloWorld-Programm","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Erstelle das Verzeichnis ",(0,a.jsx)(n.em,{children:"[Pfad/Der Name Deines ersten lokalen\nRepositorys]/demos"})]}),"\n",(0,a.jsxs)(n.li,{children:["Erstelle im eben erstellten Verzeichnis die Quellcode-Datei ",(0,a.jsx)(n.em,{children:"MainClass.java"})]}),"\n",(0,a.jsx)(n.li,{children:"\xd6ffne die eben erstellte Datei, f\xfcge den abgebildeten Quellcode ein,\nspeichere die \xc4nderungen und schlie\xdfe die Datei wieder"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Kompiliere das HelloWorld-Programm und f\xfchre es aus","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Starte die Kommandozeile (z.B. Windows PowerShell)"}),"\n",(0,a.jsxs)(n.li,{children:["F\xfchre den Befehl ",(0,a.jsx)(n.code,{children:'cd "[Pfad/Der Name Deines ersten lokalen Repositorys]"'}),"\naus, um zum Arbeitsbereich Deines ersten lokalen Repositorys zu wechseln"]}),"\n",(0,a.jsxs)(n.li,{children:["F\xfchre den Befehl ",(0,a.jsx)(n.code,{children:"javac demos/MainClass.java"})," aus, um die Quellcode-Datei\n",(0,a.jsx)(n.em,{children:"MainClass.java"})," zu kompilieren"]}),"\n",(0,a.jsxs)(n.li,{children:["F\xfchre den Befehl ",(0,a.jsx)(n.code,{children:"java demos.MainClass"})," aus, um die Bytecode-Datei\n",(0,a.jsx)(n.em,{children:"MainClass.class"})," auszuf\xfchren"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Aktualisiere Dein remote Repository","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["F\xfchre den Befehl ",(0,a.jsx)(n.code,{children:"git add demos/MainClass.java"})," aus, um das erstellte\nHelloWorld-Programm zu indizieren"]}),"\n",(0,a.jsxs)(n.li,{children:["F\xfchre den Befehl ",(0,a.jsx)(n.code,{children:'git commit -m "Add MainClass.java"'})," aus, um das indizierte\nHelloWorld-Programm zu versionieren"]}),"\n",(0,a.jsxs)(n.li,{children:["F\xfchre den Befehl ",(0,a.jsx)(n.code,{children:"git push"})," aus, um das remote Repository zu aktualisieren"]}),"\n",(0,a.jsx)(n.li,{children:"Gib Deine Anmeldedaten f\xfcr GitHub ein, um Dich zu authentifizieren"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Aktualisiere Dein zweites lokales Repository","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["F\xfchre den Befehl ",(0,a.jsx)(n.code,{children:'cd "[Pfad/Der Name Deines zweiten lokalen Repositorys]"'}),"\naus, um zum Arbeitsbereich Deines zweiten lokalen Repositorys zu wechseln"]}),"\n",(0,a.jsxs)(n.li,{children:["F\xfchre den Befehl ",(0,a.jsx)(n.code,{children:"git pull"})," aus, um den Arbeitsbereich zu aktualisieren"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"quellcode",children:"Quellcode"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'package demos;\n\npublic class MainClass {\n\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:'PS C:\\Users\\Schmid> cd "C:/Users/Schmid/git/JavaA"\nPS C:\\Users\\Schmid\\git\\JavaA> javac demos/MainClass.java\nPS C:\\Users\\Schmid\\git\\JavaA> java demos.MainClass\nHello World\nPS C:\\Users\\Schmid\\git\\JavaA> git add demos/MainClass.java\nPS C:\\Users\\Schmid\\git\\JavaA> git commit -m "Add MainClass.java"\n[main 26a0b8f] Add MainClass.java\n 1 file changed, 8 insertions(+)\n create mode 100644 demos/MainClass.java\nPS C:\\Users\\Schmid\\git\\JavaA> git push\nEnumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nDelta compression using up to 8 threads\nCompressing objects: 100% (3/3), done.\nWriting objects: 100% (4/4), 453 bytes | 453.00 KiB/s, done.\nTotal 4 (delta 0), reused 0 (delta 0), pack-reused 0\nTo https://github.com/schmid/Java\n   862fc37..26a0b8f  main -> main\nPS C:\\Users\\Schmid\\git\\JavaA> cd "C:/Users/Schmid/git/JavaB"\nPS C:\\Users\\Schmid\\git\\JavaB> git pull\nremote: Enumerating objects: 5, done.\nremote: Counting objects: 100% (5/5), done.\nremote: Compressing objects: 100% (3/3), done.\nremote: Total 4 (delta 0), reused 4 (delta 0), pack-reused 0\nUnpacking objects: 100% (4/4), 433 bytes | 61.00 KiB/s, done.\nFrom https://github.com/schmid/Java\n   862fc37..26a0b8f  main       -> origin/main\nUpdating 862fc37..26a0b8f\nFast-forward\n demos/MainClass.java | 8 ++++++++\n 1 file changed, 8 insertions(+)\n create mode 100644 demos/MainClass.java\nPS C:\\Users\\Schmid\\git\\JavaB>\n'})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return r}});var i=s(67294);let a={},l=i.createContext(a);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);