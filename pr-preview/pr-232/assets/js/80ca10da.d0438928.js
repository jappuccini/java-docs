"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7165"],{4918:function(e,n,i){i.r(n),i.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>p,assets:()=>o,toc:()=>c,frontMatter:()=>t});var a=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/job-offer","title":"Stellenangebot","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/job-offer.md","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/job-offer","permalink":"/java-docs/pr-preview/pr-232/exam-exercises/exam-exercises-java2/class-diagrams/job-offer","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/job-offer.md","tags":[{"inline":true,"label":"inheritance","permalink":"/java-docs/pr-preview/pr-232/tags/inheritance"},{"inline":true,"label":"polymorphism","permalink":"/java-docs/pr-preview/pr-232/tags/polymorphism"},{"inline":true,"label":"exceptions","permalink":"/java-docs/pr-preview/pr-232/tags/exceptions"},{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-232/tags/records"},{"inline":true,"label":"io-streams","permalink":"/java-docs/pr-preview/pr-232/tags/io-streams"}],"version":"current","frontMatter":{"title":"Stellenangebot","description":"","tags":["inheritance","polymorphism","exceptions","records","io-streams"]},"sidebar":"examExercisesSidebar","previous":{"title":"Personalverwaltung","permalink":"/java-docs/pr-preview/pr-232/exam-exercises/exam-exercises-java2/class-diagrams/human-resources"},"next":{"title":"Lego-Baustein","permalink":"/java-docs/pr-preview/pr-232/exam-exercises/exam-exercises-java2/class-diagrams/lego-brick"}}'),s=i("85893"),r=i("50065");let t={title:"Stellenangebot",description:"",tags:["inheritance","polymorphism","exceptions","records","io-streams"]},l=void 0,o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Applicant</em>",id:"hinweis-zur-klasse-applicant",level:2},{value:"Hinweis zur Klasse <em>JobOffer</em>",id:"hinweis-zur-klasse-joboffer",level:2},{value:"Hinweis zur Klasse <em>JobOfferReader</em>",id:"hinweis-zur-klasse-jobofferreader",level:2},{value:"Beispielhafter Aufbau der Stellenangebotsdatei",id:"beispielhafter-aufbau-der-stellenangebotsdatei",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Person <|-- Recruiter : extends\n    Person <|-- Applicant : extends\n    JobOffer o-- Recruiter\n    Applicant --o JobOffer\n    Applicant o-- ApplicationDocument\n\n    class JobOffer {\n        <<record>>\n        id: int\n        title: String\n        recruiter: Recruiter\n        applicants: List~Applicant~\n        +addApplicant(applicant: Applicant) void\n    }\n\n    class Person {\n        <<abstract>>\n        -name: String #123;final#125;\n        -birthdateTimeStamp: long #123;final#125;\n        +Person(name: String, birthdateTimeStamp: long)\n    }\n\n    class Applicant {\n        -applicantId: int #123;final#125;\n        -applicationDocuments: List~ApplicationDocument~ #123;final#125;\n        +Applicant(name: String, birthdateTimeStamp: long, applicantId: int)\n        +addApplicationDocument(applicationDocument: ApplicationDocument) void\n    }\n\n    class Recruiter {\n        +Recruiter(name String, birthdateTimeStamp long)\n    }\n\n    class ApplicationDocument {\n        <<record>>\n        description: String\n        type: String\n        document: File\n    }\n\n    class JobOfferReader {\n        +getJobOffers(file File)$ List~JobOffer~\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-applicant",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"Applicant"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode\n",(0,s.jsx)(n.code,{children:"void addApplicationDocument(applicationDocument: ApplicationDocument)"})," soll den\nBewerbungsunterlagen (",(0,s.jsx)(n.code,{children:"applicationDocuments"}),") das eingehende Dokument\nhinzuf\xfcgen."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-joboffer",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"JobOffer"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addApplicant(applicant: Applicant)"})," soll der Bewerberliste\n(",(0,s.jsx)(n.code,{children:"applicants"}),") den eingehenden Bewerber hinzuf\xfcgen."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-jobofferreader",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"JobOfferReader"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die statische Methode ",(0,s.jsx)(n.code,{children:"List<JobOffer> getJobOffers(file: File)"})," soll die\nStellenangebote der eingehenden Datei zur\xfcckgeben. Die Ausnahme\n",(0,s.jsx)(n.code,{children:"FileNotFoundException"})," soll dabei weitergeleitet werden."]}),"\n",(0,s.jsx)(n.h2,{id:"beispielhafter-aufbau-der-stellenangebotsdatei",children:"Beispielhafter Aufbau der Stellenangebotsdatei"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"285;Senior Developer Java\n392;Associate Consultant SAP\n430;Expert Developer Java\n"})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return t}});var a=i(67294);let s={},r=a.createContext(s);function t(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);