"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4072"],{66942:function(n,e,a){a.r(e),a.d(e,{default:()=>u,frontMatter:()=>s,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"additional-material/steffen/java-2/exam-preparation/2023","title":"2023","description":"","source":"@site/docs/additional-material/steffen/java-2/exam-preparation/2023.md","sourceDirName":"additional-material/steffen/java-2/exam-preparation","slug":"/additional-material/steffen/java-2/exam-preparation/2023","permalink":"/java-docs/pr-preview/pr-274/additional-material/steffen/java-2/exam-preparation/2023","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/steffen/java-2/exam-preparation/2023.md","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"2023","description":"","sidebar_position":30,"tags":[]},"sidebar":"additionalMaterialSidebar","previous":{"title":"Klausurvorbereitung","permalink":"/java-docs/pr-preview/pr-274/additional-material/steffen/java-2/exam-preparation/"},"next":{"title":"2024","permalink":"/java-docs/pr-preview/pr-274/additional-material/steffen/java-2/exam-preparation/2024"}}'),r=a("85893"),t=a("50065");let s={title:2023,description:"",sidebar_position:30,tags:[]},l=void 0,o={},d=[{value:"Aufgabe Optionals",id:"aufgabe-optionals",level:2},{value:"Klassendiagramm",id:"klassendiagramm",level:3},{value:"Aufgabe Lambdafunktionen",id:"aufgabe-lambdafunktionen",level:2},{value:"Klassendiagramm",id:"klassendiagramm-1",level:3},{value:"Aufgabe Streams",id:"aufgabe-streams",level:2},{value:"Klassendiagramm",id:"klassendiagramm-2",level:3},{value:"Hinweise zur Klasse PhoneStore",id:"hinweise-zur-klasse-phonestore",level:2}];function c(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(89247).Z+"",children:"Cheatsheet Java II"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(71502).Z+"",children:"Altklausuren Java II"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Altklausuren 2022 Q3 - Klausur Java 2 Aufgabe 3"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'public class PlanetQueries {\n\n    public static ArrayList<Planet> planets = Planet.getPlantes();\n\n    public static void a() {\n        PlanetQueries.planets.stream()\n          .filter(p -> p.moons() > 5)\n          .forEach(p -> {\n              System.out.println(p.name() + ": " + p.moons());\n          });\n    }\n\n    public static OptionalDouble b() {\n        return PlanetQueries.planets.stream()\n          .filter(p -> p.type() == Type.GAS_PLANET)\n          .mapToDouble(p -> p.diameter())\n          .average();\n    }\n\n    public static List<Planet> c() {\n        return PlanetQueries.planets.stream()\n          .sorted((p1, p2) -> Double.compare(p2.mass(), p1.mass()))\n          .toList();\n    }\n\n    public static boolean d() {\n        return PlanetQueries.planets.stream()\n          .allMatch(p -> p.moons() > 0);\n    }\n\n    public static void e() {\n        Map<Type, List<Planet>> planetsMap = PlanetQueries.planets.stream()\n          .collect(Collectors.groupingBy(p -> p.type()));\n        planetsMap.entrySet()\n          .stream()\n          .forEach(entry -> {\n            System.out.println(entry.getKey() + ":" + entry.getValue());\n          });\n    }\n}\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"Altklausuren 2022 Q3 - Probeklausur Java 2 Klausur Aufgabe 3"}),"\n",(0,r.jsx)(e.li,{children:"Altklausuren 2023 Q1 - Wiederholklausur 2 Java 2 Klausur Aufgabe 3"}),"\n",(0,r.jsx)(e.li,{children:"Altklausuren 2023 Q1 - Wiederholklausur Java 2 Klausur Aufgabe 3"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"aufgabe-optionals",children:"Aufgabe Optionals"}),"\n",(0,r.jsx)(e.h3,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(e.mermaid,{value:"classDiagram\n  class Car {\n    +name String\n    +brand String\n    +addition Optional~String~\n    +Car(name String, brand String)\n    +Car(name String, brand String, addition String)\n    +toString() String\n  }"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Hinweise zu den Konstruktoren"})}),"\n",(0,r.jsx)(e.p,{children:"Die Konstruktoren sollen alle Attribute initialisieren."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Hinweise zur Methode toString"})}),"\n",(0,r.jsx)(e.p,{children:"Die Methode toString soll die Attribute brand, model und addition zur\xfcckgeben.\nDie Attribute sollen durch eine Leertaste getrennt sein. Falls addition keinen\nWert besitz, soll dieser ignoriert werden."}),"\n",(0,r.jsx)(e.p,{children:'Erstelle eine ausf\xfchrbare Klasse in der ein Auto mit der Marke "Mercedes", dem\nModell "CLA45" und dem Zusatz "AMG" initialisiert wird. Gib das Auto in der\nKonsole aus. Entferne den Zusatz von dem Auto und gebe das Auto erneut in der\nKonsole aus.'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'public class Car {\n    public String name;\n    public String brand;\n    public Optional<String> addition;\n\n    public Car(String name, String brand) {\n        this.name = name;\n        this.brand = brand;\n        this.addition = Optional.empty();\n    }\n\n    public Car(String name, String brand, String addition) {\n        this.name = name;\n        this.brand = brand;\n        this.addition = Optional.ofNullable(addition);\n    }\n\n    public String toString() {\n        if (addition.isPresent()) {\n            return brand + " " + name + addition.get();\n        } else {\n            return brand + " " + name;\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'public class Main {\n    public static void main(String[] args) {\n        Car benz = new Car("CLA45", "Mercedes", "AMG");\n        System.out.println(benz.toString());\n        benz.addition = Optional.empty();\n        System.out.println(benz.toString());\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"aufgabe-lambdafunktionen",children:"Aufgabe Lambdafunktionen"}),"\n",(0,r.jsx)(e.h3,{id:"klassendiagramm-1",children:"Klassendiagramm"}),"\n",(0,r.jsx)(e.mermaid,{value:"classDiagram\n  Helper -- Animal\n  Data -- Animal\n  Task2 -- Animal\n  Task2 -- Data\n  Task2 -- Helper\n\n  class Helper {\n      +isNewBorn UNKNOWN$\n      +toOutput UNKNOWN$\n      +isHigherThan(size: int)$ Predicate~Student~\n  }\n\n  class Animal {\n      <<record>>\n      +firstName String\n      +lastName String\n      +size int\n  }\n\n  class Data {\n      +getAnimals()$ Stream~Animal~\n  }\n\n  class Task2 {\n      +main(args: String[])$ void\n  }"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Hinweise zur Klasse Helper"})}),"\n",(0,r.jsx)(e.p,{children:"Im Klassendiagramm sind keine R\xfcckgabetypen f\xfcr die statischen Attribute\nangegeben. Gib f\xfcr jedes Attribut den geeigneten Typ an."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Das Attribut ",(0,r.jsx)(e.strong,{children:"isNewBorn"})," soll eine Lambdafunktion enthalten die ermittelt,\nob ein Tier j\xfcnger als 1 Jahr alt ist."]}),"\n",(0,r.jsxs)(e.li,{children:["Das Attribut ",(0,r.jsx)(e.strong,{children:"toOutput"}),' soll eine Lambdafunktion enthalten, die ein Tier in\nfolgenden String konvertiert: "firstName lastName ist size Zentimeter gro\xdf."']}),"\n",(0,r.jsxs)(e.li,{children:["Die Methode ",(0,r.jsx)(e.strong,{children:"isHigherThan"})," soll eine Lambdafunktion zur\xfcckgeben, die\nabh\xe4ngig vom Parameter size \xfcberpr\xfcft, ob ein Tier gr\xf6\xdfer als die angegebene\nGr\xf6\xdfe ist."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Hinweise zur Klasse Data"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Die Methode ",(0,r.jsx)(e.strong,{children:"getAnimals"})," soll einen Stream von einem einzelnen Tier mit den\nWerten deiner Wahl zur\xfcckgeben."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Hinweise zur Klasse Task2"})," ",(0,r.jsx)("br",{})," Verwende f\xfcr die nachfolgende Abfolge die\nMethoden der Klassen Data und Helper. Erzeuge einen Stream von Tieren und\nfiltere jene heraus, die Gr\xf6\xdfer als 50 Zentimeter sind. Gib anschlie\xdfend den\nvollen Namen und die Gr\xf6\xdfe der Tiere in der Konsole aus."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public record Animal(String firstName, String lastName, int age, int size) {}\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'public class Data {\n    public static Stream<Animal> getAnimals() {\n        return Stream.of(new Animal("Steffen", "Merk", 28, 170));\n    }\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'public class Helper {\n    public static Predicate<Animal> isNewBorn = animal -> animal.age() < 1;\n    public static Function<Animal, String> toOutput = animal -> animal.firstName()\n            + " " + animal.lastName() + " ist " + animal.size() + " Zentimeter gro\xdf";\n\n    public static Predicate<Animal> isHigherThan(int size) {\n        return animal -> animal.size() > size;\n    }\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public class Task2 {\n    public static void main(String[] args) {\n        Data.getAnimals()\n                .filter(Helper.isHigherThan(50))\n                .map(Helper.toOutput)\n                .forEach(System.out::println);\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"aufgabe-streams",children:"Aufgabe Streams"}),"\n",(0,r.jsx)(e.h3,{id:"klassendiagramm-2",children:"Klassendiagramm"}),"\n",(0,r.jsx)(e.mermaid,{value:"classDiagram\n  direction LR\n\n  ConnectionType -- Phone\n  Phone -- Data\n  Phone -- Brand\n  Phone -- PhoneStore\n\n  class ConnectionType {\n    <<enummeration>>\n    TYPC\n    THUNDERBOLT\n    MICRO\n    +isModern() boolean\n  }\n\n  class Phone {\n    <<record>>\n    +brand Brand\n    +connectionType ConnectionType\n    +cameras int\n    +batterySize int\n    +cpuPower int\n    +price double\n  }\n\n  class Data {\n    +gePhones()$ ArrayList~Phone~\n  }\n\n  class Brand {\n    <<enummeration>>\n    APPLE\n    SAMSUNG\n    HUAWEI\n  }\n\n  class PhoneStore {\n    -phones ArrayList~Phone~\n    +PhoneStore(phones: ArrayList~Phone~)\n    +q1() Phone~Car~\n    +q2() OptionalDouble\n    +q3(maxPrice: double) List~Phone~\n    +q4() Map~String&sbquo; Phone~\n    +q5() Map~String&sbquo; List~Phone~~\n  }"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public class PhoneStore {\n  private ArrayList<Phone> phones;\n\n  public PhoneStore(ArrayList<Phone> phones) {\n    this.phones = phones;\n  }\n\n  public List<Phone> q1() {\n    return phones.stream()\n        .filter(p -> p.brand() == Brand.HUAWEI)\n        .filter(p -> p.cameras() > 3)\n        .sorted((p1, p2) -> Integer.compare(p2.cpuPower(), p1.cpuPower()))\n        .limit(3)\n        .sorted((p1, p2) -> Double.compare(p2.price(), p1.price()))\n        .toList();\n  }\n\n  public OptionalDouble q2() {\n    return phones.stream()\n        .filter(p -> p.batterySize() > 2500)\n        .mapToInt(p -> p.cameras())\n        .average();\n  }\n\n  public List<Phone> q3(double maxPrice) {\n    return phones.stream()\n        .filter(p -> p.price() <= maxPrice)\n        .filter(p -> p.connectionType().isModern())\n        .filter(p -> p.cpuPower() < 2400)\n        .sorted((p1, p2) -> Double.compare(p1.price(), p2.price()))\n        .toList();\n  }\n\n  public Map<String, Phone> q4() {\n    return phones.stream()\n        .collect(Collectors.toMap(\n            p -> p.brand().name() + p.connectionType().name(),\n            p -> p));\n  }\n\n  public Map<ConnectionType, List<Phone>> q5() {\n    return phones.stream()\n        .collect(Collectors.groupingBy(p -> p.connectionType()));\n  }\n\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"hinweise-zur-klasse-phonestore",children:"Hinweise zur Klasse PhoneStore"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Der Konstruktor soll alle Attribute initialisieren."}),"\n",(0,r.jsxs)(e.li,{children:["Die Methode ",(0,r.jsx)(e.strong,{children:"q1"})," soll die drei Leistungsst\xe4rksten (CPU Power) Smart Phones\nder Marke Huawei, absteigend nach dem Preis zur\xfcckgeben, welche mehr als 3\nKameras haben."]}),"\n",(0,r.jsxs)(e.li,{children:["Die Methode ",(0,r.jsx)(e.strong,{children:"q2"})," soll die durchschnittliche Kameraanzahl aller Smart Phones\nzur\xfcckgeben, die einen Akku von 2500 oder mehr haben."]}),"\n",(0,r.jsxs)(e.li,{children:["Die Methode ",(0,r.jsx)(e.strong,{children:"q3"})," soll die Smart Phones aufsteigend nach Preis zur\xfcckgeben,\ndie den ",(0,r.jsx)(e.strong,{children:"maxPrice"})," nicht \xfcberschreiten, einen modernen Anschlusstyp haben\nund weniger als 2400 Leistung (CPU Power) haben."]}),"\n",(0,r.jsxs)(e.li,{children:["Die Methode ",(0,r.jsx)(e.strong,{children:"q4"})," soll eine Map zur\xfcckgeben. Der Schl\xfcssel soll aus dem\nMarkennamen und dem Anschlusstyp zusammengesetzt werden. Als Wert soll das\nAuto zur\xfcckgegeben werden."]}),"\n",(0,r.jsxs)(e.li,{children:["Die Methode ",(0,r.jsx)(e.strong,{children:"q5"})," soll eine Map zur\xfcckgeben, welche alle Smart Phones nach\nAnschlusstyp gruppiert."]}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},89247:function(n,e,a){a.d(e,{Z:function(){return i}});let i=a.p+"assets/files/java-cheat-sheet-1564904cc291264239f91a360bcde2f8.pdf"},71502:function(n,e,a){a.d(e,{Z:function(){return i}});let i=a.p+"assets/files/java-2-exams-514558cb2954dd1789ad951794f14583.zip"},50065:function(n,e,a){a.d(e,{Z:function(){return l},a:function(){return s}});var i=a(67294);let r={},t=i.createContext(r);function s(n){let e=i.useContext(t);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);