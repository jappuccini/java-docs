"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5472"],{70731:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>t,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/class-diagrams/cookie-jar","title":"Pl\xe4tzchendose","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/class-diagrams/cookie-jar.md","sourceDirName":"exam-exercises/exam-exercises-java1/class-diagrams","slug":"/exam-exercises/exam-exercises-java1/class-diagrams/cookie-jar","permalink":"/java-docs/pr-preview/pr-252/exam-exercises/exam-exercises-java1/class-diagrams/cookie-jar","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/class-diagrams/cookie-jar.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-252/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-252/tags/enumerations"},{"inline":true,"label":"inheritance","permalink":"/java-docs/pr-preview/pr-252/tags/inheritance"},{"inline":true,"label":"polymorphism","permalink":"/java-docs/pr-preview/pr-252/tags/polymorphism"},{"inline":true,"label":"io-streams","permalink":"/java-docs/pr-preview/pr-252/tags/io-streams"}],"version":"current","frontMatter":{"title":"Pl\xe4tzchendose","description":"","tags":["oo","enumerations","inheritance","polymorphism","io-streams"]},"sidebar":"examExercisesSidebar","previous":{"title":"Weihnachtsbaum","permalink":"/java-docs/pr-preview/pr-252/exam-exercises/exam-exercises-java1/class-diagrams/christmas-tree"},"next":{"title":"Kreatur","permalink":"/java-docs/pr-preview/pr-252/exam-exercises/exam-exercises-java1/class-diagrams/creature"}}'),r=n("85893"),a=n("50065");let t={title:"Pl\xe4tzchendose",description:"",tags:["oo","enumerations","inheritance","polymorphism","io-streams"]},l=void 0,d={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Cookie</em>",id:"hinweis-zur-klasse-cookie",level:2},{value:"Hinweis zur Klasse <em>StuffedCookie</em>",id:"hinweis-zur-klasse-stuffedcookie",level:2},{value:"Hinweis zur Klasse <em>Recipe</em>",id:"hinweis-zur-klasse-recipe",level:2},{value:"Hinweise zur Klasse <em>CookieJar</em>",id:"hinweise-zur-klasse-cookiejar",level:2},{value:"Hinweis zur Klasse <em>IngredientsReader</em>",id:"hinweis-zur-klasse-ingredientsreader",level:2},{value:"Beispielhafter Aufbau der Zutatendatei",id:"beispielhafter-aufbau-der-zutatendatei",level:2}];function c(e){let i={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,r.jsx)(i.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(i.mermaid,{value:"classDiagram\n    CookieJar o-- Cookie\n    Cookie <|-- StuffedCookie : extends\n    Cookie o-- Recipe\n    StuffedCookie o-- Recipe\n    Recipe o-- Ingredient\n\n    class CookieJar {\n        -cookies: List~Cookie~ #123;final#125;\n        +CookieJar()\n        +addCookie(cookie: Cookie) void\n        +getStuffedCookie() StuffedCookie\n        +getCookieByName(name: String) Cookie\n    }\n\n    class Cookie {\n        -name: String #123;final#125;\n        -dough: Recipe #123;final#125;\n        +Cookie(name: String, dough: Recipe)\n        +getIngredients() List~Ingredient~\n    }\n\n    class StuffedCookie {\n        -jam: Recipe #123;final#125;\n        +StuffedCookie(name: String, dough: Recipe, jam: Recipe)\n        +getIngredients() List~Ingredient~\n    }\n\n    class Recipe {\n        -name: String #123;final#125;\n        -ingredients: List~Ingredient~ #123;final#125;\n        +Recipe(name: String)\n        +addIngredient(ingredient: Ingredient) void\n    }\n\n    class Ingredient {\n        -name: String #123;final#125;\n        +Ingredient(name: String)\n    }\n\n    class IngredientsReader {\n        +readIngredients(file: File) List~Ingredient~\n    }"}),"\n",(0,r.jsx)(i.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(i.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n",(0,r.jsx)(i.li,{}),"\n"]}),"\n",(0,r.jsxs)(i.h2,{id:"hinweis-zur-klasse-cookie",children:["Hinweis zur Klasse ",(0,r.jsx)(i.em,{children:"Cookie"})]}),"\n",(0,r.jsxs)(i.p,{children:["Die Methode ",(0,r.jsx)(i.code,{children:"List<Ingredient> getIngredients()"})," soll alle Zutaten des Teigs\nzur\xfcckgeben."]}),"\n",(0,r.jsxs)(i.h2,{id:"hinweis-zur-klasse-stuffedcookie",children:["Hinweis zur Klasse ",(0,r.jsx)(i.em,{children:"StuffedCookie"})]}),"\n",(0,r.jsxs)(i.p,{children:["Die Methode ",(0,r.jsx)(i.code,{children:"List<Ingredient> getIngredients()"})," soll alle Zutaten des Teigs\nsowie der F\xfcllung zur\xfcckgeben."]}),"\n",(0,r.jsxs)(i.h2,{id:"hinweis-zur-klasse-recipe",children:["Hinweis zur Klasse ",(0,r.jsx)(i.em,{children:"Recipe"})]}),"\n",(0,r.jsxs)(i.p,{children:["Die Methode ",(0,r.jsx)(i.code,{children:"void addIngredient(ingredient: Ingredient)"})," soll dem Rezept die\neingehende Zutat hinzuf\xfcgen."]}),"\n",(0,r.jsxs)(i.h2,{id:"hinweise-zur-klasse-cookiejar",children:["Hinweise zur Klasse ",(0,r.jsx)(i.em,{children:"CookieJar"})]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Die Methode ",(0,r.jsx)(i.code,{children:"void addCookie(cookie: Cookie)"})," soll der Pl\xe4tzchendose das\neingehende Pl\xe4tzchen hinzuf\xfcgen"]}),"\n",(0,r.jsxs)(i.li,{children:["Die Methode ",(0,r.jsx)(i.code,{children:"StuffedCookie getStuffedCookie()"})," soll ein beliebiges gef\xfclltes\nPl\xe4tzchen der Pl\xe4tzchendose zur\xfcckgeben"]}),"\n",(0,r.jsxs)(i.li,{children:["Die Methode ",(0,r.jsx)(i.code,{children:"Cookie getCookieByName(name: String)"})," soll ein Pl\xe4tzchen der\nPl\xe4tzchendose zum eingehenden Namen zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(i.h2,{id:"hinweis-zur-klasse-ingredientsreader",children:["Hinweis zur Klasse ",(0,r.jsx)(i.em,{children:"IngredientsReader"})]}),"\n",(0,r.jsxs)(i.p,{children:["Die Methode ",(0,r.jsx)(i.code,{children:"List<Ingredient> readIngredients()"})," soll alle Zutaten der\neingehenden Datei auslesen und zur\xfcckgeben."]}),"\n",(0,r.jsx)(i.h2,{id:"beispielhafter-aufbau-der-zutatendatei",children:"Beispielhafter Aufbau der Zutatendatei"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"200g Butter\n300g Mehl\n1 Prise Salz\n100g gemahlene Mandeln\n150g Zucker\n1 Pck. Vanillezucker\n2 Eier\n"})})]})}function u(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return t}});var s=n(67294);let r={},a=s.createContext(r);function t(e){let i=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);