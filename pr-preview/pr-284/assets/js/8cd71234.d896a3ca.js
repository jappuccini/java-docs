"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["3223"],{43801:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>a,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"documentation/design","title":"Softwaredesign","description":"","source":"@site/docs/documentation/design.md","sourceDirName":"documentation","slug":"/documentation/design","permalink":"/java-docs/pr-preview/pr-284/documentation/design","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/design.md","tags":[{"inline":true,"label":"design","permalink":"/java-docs/pr-preview/pr-284/tags/design"}],"version":"current","sidebarPosition":15,"frontMatter":{"title":"Softwaredesign","description":"","sidebar_position":15,"tags":["design"]},"sidebar":"documentationSidebar","previous":{"title":"Die Programmiersprache Java","permalink":"/java-docs/pr-preview/pr-284/documentation/java"},"next":{"title":"Aufbau einer Java-Klasse","permalink":"/java-docs/pr-preview/pr-284/documentation/class-structure"}}'),r=t("85893"),s=t("50065");let a={title:"Softwaredesign",description:"",sidebar_position:15,tags:["design"]},l=void 0,o={},d=[{value:"Entwurfsmuster",id:"entwurfsmuster",level:2},{value:"Gestaltungsprinzipien",id:"gestaltungsprinzipien",level:2}];function u(e){let n={em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Als Teilprozess der Softwareentwicklumg umfasst das Softwaredesign die\nDatenmodellierung, den Entwurf der Softwarearchitektur sowie das Festlegen\nben\xf6tigter Komponenten, Datentypen und Algorithmen. Bei der Datenmodellierung\nwerden alle relevanten Objekte der Anwendung inklusive ihrer Eigenschaften und\nBeziehungen zueinander dargestellt; die Softwarearchitektur beschreibt alle\nrelevanten Komponenten und deren Interaktionen. Bei der Gestaltung von Software\nkommen h\xe4ufig Entwurfsmuster zur L\xf6sung wiederkehrender Probleme zum Einsatz.\nZudem soll durch Beachtung von Gestaltungsprinzipien eine hohe Softwarequalit\xe4t\nsichergestellt werden."}),"\n",(0,r.jsx)(n.h2,{id:"entwurfsmuster",children:"Entwurfsmuster"}),"\n",(0,r.jsxs)(n.p,{children:["Entwurfsmuster (Design Patterns) sind L\xf6sungsans\xe4tze f\xfcr wiederkehrende Probleme\nder Softwareentwicklung und sollen dabei helfen, Programmierfehler zu vermeiden,\nProgrammentw\xfcrfe wiederverwendbar und m\xf6glichst effizient zu gestalten. Sie\nk\xf6nnen u.a. in Erzeugungsmuster (z.B. Einzelst\xfcck (Singleton)), Strukturmuster\n(z.B. Adapter) und Verhaltensmuster (z.B. Beobachter (Observer)) unterteilt\nwerden. Der Begriff Entwurfsmuster wurde ma\xdfgeblich durch das 1994 erschienene\nBuch ",(0,r.jsx)(n.em,{children:"Design Patterns \u2013 Elements of Reusable Object-Oriented Software"})," von\nRichard Helm, Ralph Johnson und John Vlissides (auch bekannt als ",(0,r.jsx)(n.em,{children:"Gang of Four"}),")\ngepr\xe4gt."]}),"\n",(0,r.jsx)(n.h2,{id:"gestaltungsprinzipien",children:"Gestaltungsprinzipien"}),"\n",(0,r.jsxs)(n.p,{children:["Unter Gestaltungsprinzipien (Design Principles) versteht man Richtlinien, welche\neine hohe Softwarequalit\xe4t sicherstellen sollen. Neben einfachen\nGestaltungsprinzipen wie ",(0,r.jsx)(n.em,{children:"DRY"})," (Don\xb4t Repeat Yourself), ",(0,r.jsx)(n.em,{children:"KISS"})," (Keep It Simple,\nStupid) und ",(0,r.jsx)(n.em,{children:"YAGNI"})," (You Ain\xb4t Gonna Need It) sind in der objektorientierten\nProgrammierung vor allem die SOLID-Prinzipen von Bedeutung. Hinter dem Akronym\nSOLID verbergen sich 5 Gestaltungsprinzipien:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Single Responsibility Principle"}),": jede Klasse sollte genau eine Verantwortung\nbesitzen"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Open Closed Principle"}),": Software-Einheiten sollten offen f\xfcr Erweiterungen,\naber geschlossen f\xfcr Modifikationen sein"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Liscov Substitution Principle"}),": Objekte von Unterklassen sollten sich so\nVerhalten wie Objekte der dazugeh\xf6rigen Oberklasse"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Interface Segregation Principle"}),": Klassen sollten nur Methoden implementieren\nm\xfcssen, die sie auch verwenden"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Dependency Inversion Principle"}),": Abh\xe4ngigkeiten sollten immer von den\nkonkreten zu den abstrakten Modulen verlaufen"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Das Akronym SOLID geht auf den Softwareentwickler Robert C. Martin zur\xfcck, der\nunter anderem auch an der Entwicklung des Agilen Manifests beteiligt war. Dieses\nwurde 2001 verfasst und umfasst die vier wesentlichen Leits\xe4tze der agilen\nSoftwareentwicklung."})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(67294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);