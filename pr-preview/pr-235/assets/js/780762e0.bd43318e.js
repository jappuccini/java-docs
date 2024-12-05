"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9740"],{52802:function(e,n,i){i.r(n),i.d(n,{metadata:()=>a,contentTitle:()=>t,default:()=>d,assets:()=>o,toc:()=>u,frontMatter:()=>s});var a=JSON.parse('{"id":"additional-material/steffen/java-1/exam-preparation/2024","title":"2024","description":"","source":"@site/docs/additional-material/steffen/java-1/exam-preparation/2024.mdx","sourceDirName":"additional-material/steffen/java-1/exam-preparation","slug":"/additional-material/steffen/java-1/exam-preparation/2024","permalink":"/java-docs/pr-preview/pr-235/additional-material/steffen/java-1/exam-preparation/2024","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/steffen/java-1/exam-preparation/2024.mdx","tags":[],"version":"current","sidebarPosition":90,"frontMatter":{"title":"2024","description":"","sidebar_position":90,"tags":[]},"sidebar":"additionalMaterialSidebar","previous":{"title":"Klausurvorbereitung","permalink":"/java-docs/pr-preview/pr-235/additional-material/steffen/java-1/exam-preparation/"},"next":{"title":"2023","permalink":"/java-docs/pr-preview/pr-235/additional-material/steffen/java-1/exam-preparation/2023"}}'),l=i("85893"),r=i("50065");let s={title:2024,description:"",sidebar_position:90,tags:[]},t=void 0,o={},u=[{value:"Aufgabe 1",id:"aufgabe-1",level:2},{value:"Hinweise zur Klasse EngineType",id:"hinweise-zur-klasse-enginetype",level:3},{value:"Hinweise zur Klasse Vehicle",id:"hinweise-zur-klasse-vehicle",level:3},{value:"Hinweise zur Klasse Car",id:"hinweise-zur-klasse-car",level:3},{value:"Hinweise zur Klasse Truck",id:"hinweise-zur-klasse-truck",level:3},{value:"Hinweise zur Klasse ExamTask04",id:"hinweise-zur-klasse-examtask04",level:3},{value:"L\xf6sungen",id:"l\xf6sungen",level:3},{value:"EngineType",id:"enginetype",level:4},{value:"Vehicle",id:"vehicle",level:4},{value:"Car",id:"car",level:4},{value:"Truck",id:"truck",level:4},{value:"ExamTask01",id:"examtask01",level:4},{value:"Aufgabe 2",id:"aufgabe-2",level:2},{value:"Hinweise zur Klasse Human",id:"hinweise-zur-klasse-human",level:3},{value:"Hinweise zur Klasse SalaryComparator",id:"hinweise-zur-klasse-salarycomparator",level:3},{value:"Hinweise zur Klasse Company",id:"hinweise-zur-klasse-company",level:3},{value:"Hinweise zur Klasse ExamTask02",id:"hinweise-zur-klasse-examtask02",level:3},{value:"L\xf6sungen",id:"l\xf6sungen-1",level:3},{value:"Human",id:"human",level:4},{value:"SalaryComparator",id:"salarycomparator",level:4},{value:"Company",id:"company",level:4},{value:"ExamTask02",id:"examtask02",level:4},{value:"Aufgabe 3 (Probeklausur Moodle)",id:"aufgabe-3-probeklausur-moodle",level:2},{value:"Rentable",id:"rentable",level:3},{value:"NotRentableException",id:"notrentableexception",level:3},{value:"TooLowBudgetException",id:"toolowbudgetexception",level:3},{value:"Flat",id:"flat",level:3},{value:"House",id:"house",level:3},{value:"HouseFeeComparator",id:"housefeecomparator",level:3},{value:"Street",id:"street",level:3},{value:"ExamTask01",id:"examtask01-1",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"aufgabe-1",children:"Aufgabe 1"}),"\n",(0,l.jsxs)(n.p,{children:["Erstelle die Klassen ",(0,l.jsx)(n.strong,{children:"EngineType"})," (6 Punkte), ",(0,l.jsx)(n.strong,{children:"Vehicle"})," (4 Punkte), ",(0,l.jsx)(n.strong,{children:"Car"}),"\n(3 Punkte), ",(0,l.jsx)(n.strong,{children:"Truck"})," (4 Punkte) und ",(0,l.jsx)(n.strong,{children:"ExamTask01"})," (7 Punkte) anhand des\nabgebildeten Klassendiagramms."]}),"\n",(0,l.jsx)(n.mermaid,{value:"classDiagram\n  EngineType --o Vehicle\n  Car --|> Vehicle : extends\n  Truck --|> Vehicle : extends\n\n  class Vehicle {\n    <<abstract>>\n    -allVehicles: ArrayList~Vehicle~ &lcub; final &rcub; $\n    #engineType: EngineType &lcub; final &rcub;\n\n    Vehicle(engineType: EngineType)\n    +readyForUse() boolean &lcub; abstract &rcub;\n    +getAllVehicles() ArrayList~Vehicle~ $\n  }\n\n  class EngineType {\n    <<enumeration>>\n    ELECTRO = 'E'\n    HYDROGEN = 'H'\n    DIESEL = 'D'\n    PETROL = 'P'\n    -type: char\n\n    EngineType(type: char)\n    +getType() char\n    +canBeSustainable() boolean\n  }\n\n  class Car {\n    -fuelLevel int\n\n    +Car(engineType: EngineType, fuelLevel: int)\n    +readyForUse() boolean\n  }\n\n  class Truck {\n    -MAXIMUM_ALLOWED_WEIGHT int &lcub; final &rcub; = 7500$\n    -weight int\n\n    +Truck(engineType: EngineType, weight: int)\n    +readyForUse() boolean\n  }\n\n  class ExamTask01 {\n    +main(args: String[]) void$\n  }"}),"\n",(0,l.jsx)(n.h3,{id:"hinweise-zur-klasse-enginetype",children:"Hinweise zur Klasse EngineType"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Erstelle die vier Konstanten Elektro, Wasserstoff, Diesel und Benzin f\xfcr die\nArten eines Motors."}),"\n",(0,l.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren."}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.strong,{children:"getType"})," soll den Typ der Motorart zur\xfcckgeben."]}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.strong,{children:"canBeSustainable"})," soll true zur\xfcckgeben, wenn es ein Elektro-\noder Wasserstoffmotor ist."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hinweise-zur-klasse-vehicle",children:"Hinweise zur Klasse Vehicle"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Der Konstruktor soll engineType initialisieren und das erstellte Vehicle der\nArrayList allVehicles hinzuf\xfcgen."}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.strong,{children:"getAllVehicles"})," soll die Liste der erstellten Fahrzeuge\nzur\xfcckgeben."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hinweise-zur-klasse-car",children:"Hinweise zur Klasse Car"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren."}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.strong,{children:"readyForUse"})," soll true zur\xfcckgeben, wenn der Tank nicht leer\nist."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hinweise-zur-klasse-truck",children:"Hinweise zur Klasse Truck"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren."}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.strong,{children:"readyForUse"})," soll true zur\xfcckgeben, wenn das Gewicht des Trucks\ndas maximal erlaubte Gewicht nicht \xfcberschreitet."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hinweise-zur-klasse-examtask04",children:"Hinweise zur Klasse ExamTask04"}),"\n",(0,l.jsx)(n.p,{children:"Erzeuge ein Elektroauto mit leerem Akku und ein Benzinauto mit einem Tanklevel\nvon 50. Erzeuge ein Dieseltruck mit einem Gewicht von 6000 und ein\nWasserstofftruck der 1500 wiegt."}),"\n",(0,l.jsx)(n.p,{children:"\xdcberpr\xfcfe alle erzeugten Fahrzeuge mithilfe einer Schleife und ermittle die\nAnzahl der betriebsbereiten Autos. Gib die Anzahl in der Konsole aus."}),"\n",(0,l.jsx)(n.h3,{id:"l\xf6sungen",children:"L\xf6sungen"}),"\n",(0,l.jsx)(n.h4,{id:"enginetype",children:"EngineType"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public enum EngineType {\n    ELECTRO('E'),\n    HYDROGEN('H'),\n    DIESEL('D'),\n    PETROL('P');\n\n    private char type;\n\n    EngineType(char type) {\n        this.type = type;\n    }\n\n    public char getType() {\n        return type;\n    }\n\n    public boolean canBeSustainable() {\n        return this == EngineType.ELECTRO || this == EngineType.HYDROGEN;\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"vehicle",children:"Vehicle"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public abstract class Vehicle {\n    private final static ArrayList<Vehicle> allVehicles = new ArrayList<>();\n    protected final EngineType engineType;\n\n    Vehicle(EngineType engineType) {\n        this.engineType = engineType;\n        Vehicle.allVehicles.add(this);\n    }\n\n    public abstract boolean readyForUse();\n\n    public static ArrayList<Vehicle> getAllVehicles() {\n        return Vehicle.allVehicles;\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"car",children:"Car"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public class Car extends Vehicle {\n    private int fuelLevel;\n\n    public Car(EngineType engineType, int fuelLevel) {\n        super(engineType);\n        this.fuelLevel = fuelLevel;\n    }\n\n    public boolean readyForUse() {\n        return fuelLevel > 0;\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"truck",children:"Truck"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public class Truck extends Vehicle {\n    private final static int MAXIMUM_ALLOWED_WEIGHT = 7500;\n    private int weight;\n\n    public Truck(EngineType engineType, int weight) {\n        super(engineType);\n        this.weight = weight;\n    }\n\n    public boolean readyForUse() {\n        return weight <= Truck.MAXIMUM_ALLOWED_WEIGHT;\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"examtask01",children:"ExamTask01"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public class ExamTask01 {\n    public static void main(String[] args) {\n        new Car(EngineType.ELECTRO, 0);\n        new Car(EngineType.PETROL, 50);\n        new Truck(EngineType.DIESEL, 6000);\n        new Truck(EngineType.HYDROGEN, 1500);\n\n        int readyVehicles = 0;\n        for (Vehicle vehicle : Vehicle.getAllVehicles()) {\n            if (vehicle instanceof Car && vehicle.readyForUse()) {\n                readyVehicles++;\n            }\n        }\n\n        System.out.println(readyVehicles);\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"aufgabe-2",children:"Aufgabe 2"}),"\n",(0,l.jsxs)(n.p,{children:["Erstelle die Klassen ",(0,l.jsx)(n.strong,{children:"Human"})," (8 Punkte), ",(0,l.jsx)(n.strong,{children:"Company"})," (6.5 Punkte),\n",(0,l.jsx)(n.strong,{children:"SalaryComparator"})," (2.5 Punkte), ",(0,l.jsx)(n.strong,{children:"ExamTask02"})," (4 Punkte) anhand des\nabgebildeten Klassendiagramms."]}),"\n",(0,l.jsx)(n.mermaid,{value:"classDiagram\n  Human --o Company\n  Human ..> Comparable~Human~ : implements\n  SalaryComparator ..> Comparator~Human~ : implements\n  SalaryComparator -- Company\n\n  class Human {\n    +firstName: String &lcub; final &rcub;\n    +lastName: String &lcub; final &rcub;\n    +age: int &lcub; final &rcub;\n    +salary: int &lcub; final &rcub;\n\n    +Human(firstName: String, lastName: String, age: int, salary: int)\n    +compareTo(other: Human) int\n    +toString() String\n  }\n\n  class Company {\n    -employees: ArrayList~Human~ &lcub; final &rcub;\n\n    +Company()\n    +addEmployee(human: Human) void\n    +sortDefault() void\n    +sortBySalary() void\n    +printAllEmployees() void\n  }\n\n  class SalaryComparator {\n    +compare(h1: Human, h2: Human) int\n  }\n\n  class Comparator~Human~ {\n    compare(h1: Human, h2: Human) int\n  }\n\n  class Comparable~Human~ {\n    compareTo(other: Human) int\n  }\n\n  class ExamTask02 {\n    +main(args: String[]) void$\n  }"}),"\n",(0,l.jsx)(n.h3,{id:"hinweise-zur-klasse-human",children:"Hinweise zur Klasse Human"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Der Konstruktor soll alle Attribute initialisieren."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Die Methode ",(0,l.jsx)(n.strong,{children:"compareTo"})," soll die nat\xfcrliche Ordnung der Klasse Human\ndefinieren. Hierbei sollen die Menschen aufsteigend nach ihrem Alter sortiert\nwerden. Sind zwei Menschen gleich alt, sollen die Menschen absteigend nach dem\nGehalt sortiert werden."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Die Methode ",(0,l.jsx)(n.strong,{children:"toString"})," soll die Werte eines Objektes als String zur\xfcckgeben."]}),"\n",(0,l.jsx)(n.p,{children:'Bsp: "Human [Fullname=Steffen Merk] [age=28] [salary=1000]"'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hinweise-zur-klasse-salarycomparator",children:"Hinweise zur Klasse SalaryComparator"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Der SalaryComparator soll das Comparator Interface implementieren und Menschen\nabsteigend nach Gehalt sortieren."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hinweise-zur-klasse-company",children:"Hinweise zur Klasse Company"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Der Konstruktor soll alle Attribute initialisieren."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Die Methode ",(0,l.jsx)(n.strong,{children:"addEmployee"})," soll den eingehenden Menschen der Mitarbeiterliste\nhinzuf\xfcgen."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Die Methode ",(0,l.jsx)(n.strong,{children:"sortDefault"})," soll die Mitarbeiterliste der nat\xfcrlichen Ordnung\nnach sortieren."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Die Methode ",(0,l.jsx)(n.strong,{children:"sortBySalary"})," soll die Mitarbeiterliste absteigend nach Gehalt\nsortieren."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Die Methode ",(0,l.jsx)(n.strong,{children:"printAllEmployees"})," soll jeden Mitarbeiter in der Konsole\nausgeben."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hinweise-zur-klasse-examtask02",children:"Hinweise zur Klasse ExamTask02"}),"\n",(0,l.jsx)(n.p,{children:"Erzeuge eine Firma und f\xfcge dieser 2 Mitarbeiter hinzu. Der erste Mitarbeiter\nhei\xdft Steffen Merk, ist 24 Jahre alt und hat ein Gehalt von 1000. Die zweite\nMitarbeiterin hei\xdft Marianna, ist 28 Jahre alt und hat ein Gehalt von 2000."}),"\n",(0,l.jsx)(n.p,{children:"Sortiere die Mitarbeiter zuerst nach dem Gehalt und anschlie\xdfend nach der\nnat\xfcrlichen Ordnung. Gebe nach jeder Sortierung alle Mitarbeiter der Firma aus."}),"\n",(0,l.jsx)(n.h3,{id:"l\xf6sungen-1",children:"L\xf6sungen"}),"\n",(0,l.jsx)(n.h4,{id:"human",children:"Human"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'public class Human implements Comparable<Human> {\n    public final String firstName;\n    public final String lastName;\n    public final int age;\n    public final int salary;\n\n    public Human(String firstName, String lastName, int age, int salary) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n        this.age = age;\n        this.salary = salary;\n    }\n\n    public int compareTo(Human other) {\n        if (age > other.age) {\n            return 1;\n        } else if (age < other.age) {\n            return -1;\n        } else {\n            if (salary > other.salary) {\n                return -1;\n            } else if (salary < other.salary) {\n                return 1;\n            } else {\n                return 0;\n            }\n        }\n    }\n\n    public String toString() {\n        return "Human [Fullname=" + firstName + " " + lastName + "] [age=" + age + "] [salary=" + salary + "]";\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"salarycomparator",children:"SalaryComparator"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public class SalaryComparator implements Comparator<Human> {\n    public int compare(Human h1, Human h2) {\n        if (h1.salary > h2.salary) {\n            return -1;\n        } else if (h1.salary < h2.salary) {\n            return 1;\n        } else {\n            return 0;\n        }\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"company",children:"Company"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public class Company {\n    private final ArrayList<Human> employees;\n\n    public Company() {\n        employees = new ArrayList<>();\n    }\n\n    public void addEmployee(Human human) {\n        employees.add(human);\n    }\n\n    public void sortDefault() {\n        Collections.sort(employees);\n    }\n\n    public void sortSortBySalary() {\n        Collections.sort(employees, new SalaryComparator());\n    }\n\n    public void printAllEmployees() {\n        for (Human employee : employees) {\n            System.out.println(employee.toString());\n        }\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"examtask02",children:"ExamTask02"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'public class ExamTask02 {\n    public static void main(String[] args) {\n        Company c = new Company();\n        c.addEmployee(new Human("Steffen", "Merk", 24, 1000));\n        c.addEmployee(new Human("Marianna", "Maglio", 28, 2000));\n\n        c.sortSortBySalary();\n        c.printAllEmployees();\n        c.sortDefault();\n        c.printAllEmployees();\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"aufgabe-3-probeklausur-moodle",children:"Aufgabe 3 (Probeklausur Moodle)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(96794).Z+"",children:"Klausur"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(2601).Z+"",children:"Klassendiagramm"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(44773).Z+"",children:"API"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"rentable",children:"Rentable"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public interface Rentable { // 0.5\n  public void rent(Person person) throws NotRentableException, TooLowBudgetException; // 1.5\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"notrentableexception",children:"NotRentableException"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public class NotRentableException extends Exception { // 0.5\n  public NotRentableException() { // 0.5\n    super(); // 0.5\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"toolowbudgetexception",children:"TooLowBudgetException"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public class TooLowBudgetException extends Exception { // 0.5\n  final double missingMoney; // 0.25\n\n  public TooLowBudgetException(double missingMoney) { // 0.5\n    super(); // 0.5\n    this.missingMoney = missingMoney; // 0.25\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"flat",children:"Flat"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public class Flat implements Rentable { // 0.5\n\n  public double fee; // 0.25\n  private Person renter; // 0.25\n\n  public Flat(double fee) { // 0.5\n    this.fee = fee; // 0.25\n    this.renter = null; // 0.25\n  }\n\n  public boolean isFree() { // 0.5\n    return renter == null; // 0.5\n  }\n\n  public boolean isRentable() { // 0.5\n    return fee > 0; // 0.5\n  }\n\n  public void rent(Person person) throws NotRentableException, TooLowBudgetException { // 1.0\n    if (!isRentable() || !isFree()) { // 0.5\n      throw new NotRentableException(); // 0.5\n    } else if (fee > person.budget) { // 0.5\n      throw new TooLowBudgetException(fee - person.budget); // 0.5\n    } else {\n      this.renter = person; // 0.5\n    }\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"house",children:"House"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public class House implements Rentable, Comparable<House> { // 1.0\n  private final int number; // 0.25\n  public final double fee; // 0.25\n  private Person renter; // 0.25\n  public final ArrayList<Flat> flats; // 0.25\n\n  public House(int number, int numberOfFlats) { // 0.5\n    this(number, numberOfFlats, 0); // 0.5\n  }\n\n  public House(int number, int numberOfFlats, double fee) { // 0.5\n    this.number = number; // 0.25\n    this.fee = fee; // 0.25\n    this.flats = new ArrayList<>(); // 0.25\n    this.renter = null; // 0.25\n    double flatFee = 500; // 0.25\n    for (int i = 0; i < number; i++) { // 0.5\n      this.flats.add(new Flat(flatFee)); // 0.5\n      flatFee += 100; // 0.25\n    }\n  }\n\n  public int getNumber() { // 0.5\n    return number; // 0.5\n  }\n\n  public boolean isRentable() { // 0.5\n    return fee > 0 && renter == null; // 0.5\n  }\n\n  public void rent(Person person) throws NotRentableException, TooLowBudgetException { // 1.0\n    if (!isRentable()) { // 0.5\n      throw new NotRentableException(); // 1\n    } else if (fee > person.budget) { // 0.5\n      throw new TooLowBudgetException(fee - person.budget); // 1\n    } else {\n      this.renter = person; // 0.5\n    }\n  }\n\n  public int compareTo(House o) { // 0.5\n    if (number > o.getNumber()) { // 0.5\n      return 1; // 0.25\n    } else {\n      return -1; // 0.25\n    }\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"housefeecomparator",children:"HouseFeeComparator"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public class HouseFeeComparator implements Comparator<House> { // 0.5\n\n  public int compare(House h1, House h2) { // 0.5\n    if (h1.fee > h2.fee) { // 0.5\n      return 1; // 0.25\n    } else if (h1.fee < h2.fee) { // 0.5\n      return -1; // 0.25\n    } else {\n      return 0; // 0.25\n    }\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"street",children:"Street"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'public class Street { // 0.5\n  public final ArrayList<House> houses; // 0.25\n\n  public Street(int numberOfHouses) { // 0.5\n    this.houses = new ArrayList<>(); // 0.25\n    for (int i = 0; i < numberOfHouses; i++) { // 0.5\n      int houseNumber = i + 1; // 0.25\n      if (houseNumber % 2 == 0) { // 0.5\n        this.houses.add(new House(houseNumber, 5)); // 0.5\n      } else {\n        this.houses.add(new House(houseNumber, 0, 2000)); // 0.5\n      }\n    }\n  }\n\n  public void rentHouse(Person person) { // 0.5\n    for (House house : houses) { // 0.5\n      try { // 0.25\n        house.rent(person); // 0.5\n        break; // 0.25\n      } catch (Exception e) { // 0.5\n        if (e instanceof TooLowBudgetException l) { // 0.5\n          System.out.println("Es wird " + l.missingMoney + " mehr Geld gebraucht"); // 0.5\n        }\n        if (e instanceof NotRentableException) { // 0.5\n          System.out.println(\n              "Die Hausnummer " + house.getNumber() + " kann nicht gemietet werden."); // 0.5\n        }\n      }\n    }\n  }\n\n  public boolean rentFlat(Person person) { // 0.5\n    for (House house : houses) { // 0.5\n      for (int i = 0; i < house.flats.size(); i++) { // 0.5\n        Flat flat = house.flats.get(i); // 0.5\n        try { // 0.25\n          flat.rent(person); // 0.5\n          return true; // 0.5\n        } catch (TooLowBudgetException e) { // 0.5\n          System.out.println("Zu wenig Geld f\xfcr Wohnung. Geb\xfchr: " + flat.fee); // 0.5\n        } catch (NotRentableException e) { // 0.5\n          System.out.println("Wohnung " + (i + 1) + " nicht Mietbar."); // 0.5\n        }\n      }\n    }\n    return false; // 0.5\n  }\n\n  public void sortByFee() { // 0.5\n    Collections.sort(this.houses, new HouseFeeComparator()); // 0.5\n  }\n\n  public void sort() { // 0.5\n    Collections.sort(this.houses); // 0.5\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"examtask01-1",children:"ExamTask01"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public class ExamTask01 { // 0.5\n  public static void main(String[] args) { // 0.5\n    Street s = new Street(20); // 0.5\n    s.sortByFee(); // 0.5\n    Flat cheapestFlat = null; // 0.25\n    for (House h : s.houses) { // 0.5\n      for (Flat flat : h.flats) { // 0.5\n        if (cheapestFlat == null) { // 0.5\n          cheapestFlat = flat; // 0.25\n        } else if (flat.fee < cheapestFlat.fee) { // 0.5\n          cheapestFlat = flat; // 0.25\n        }\n      }\n    }\n    System.out.println(cheapestFlat.fee); // 0.5\n  }\n}\n"})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},44773:function(e,n,i){i.d(n,{Z:function(){return a}});let a=i.p+"assets/files/api-9020b57b859c4807636d5e0b7282b653.pdf"},2601:function(e,n,i){i.d(n,{Z:function(){return a}});let a=i.p+"assets/files/klassendiagramm-fd9bf7fb6fc4ecfaf53625f75ef236d8.pdf"},96794:function(e,n,i){i.d(n,{Z:function(){return a}});let a=i.p+"assets/files/klausur-c3e0cc6ceea3210ad2c1cff448877f0a.pdf"},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return s}});var a=i(67294);let l={},r=a.createContext(l);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);