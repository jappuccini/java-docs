"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5733"],{17384:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>c,assets:()=>d,toc:()=>u,frontMatter:()=>r});var i=JSON.parse('{"id":"additional-material/daniel/java1/sample-exam","title":"Musterklausur","description":"","source":"@site/docs/additional-material/daniel/java1/sample-exam.md","sourceDirName":"additional-material/daniel/java1","slug":"/additional-material/daniel/java1/sample-exam","permalink":"/java-docs/pr-preview/pr-239/additional-material/daniel/java1/sample-exam","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/daniel/java1/sample-exam.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Musterklausur","description":"","sidebar_position":10,"tags":[]},"sidebar":"additionalMaterialSidebar","previous":{"title":"Programmierung 1","permalink":"/java-docs/pr-preview/pr-239/additional-material/daniel/java1/"},"next":{"title":"Klausurergebnisse","permalink":"/java-docs/pr-preview/pr-239/additional-material/daniel/java1/exam-results"}}'),s=t("85893"),a=t("50065");let r={title:"Musterklausur",description:"",sidebar_position:10,tags:[]},l=void 0,d={},u=[{value:"Hinweise zur Klausur",id:"hinweise-zur-klausur",level:2},{value:"Aufgabe 1 (26 Punkte)",id:"aufgabe-1-26-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm",level:3},{value:"Hinweise zur Klasse <em>Class</em>",id:"hinweise-zur-klasse-class",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:3},{value:"Aufgabe 2 (24 Punkte)",id:"aufgabe-2-24-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm-1",level:3},{value:"Aktivit\xe4tsdiagramm zur Methode <em>void main(args: String[])</em>",id:"aktivit\xe4tsdiagramm-zur-methode-void-mainargs-string",level:3},{value:"Aktivit\xe4tsdiagramm zur Methode <em>void textToPin(text: String)</em>",id:"aktivit\xe4tsdiagramm-zur-methode-void-texttopintext-string",level:3},{value:"Aktivit\xe4tsdiagramm zur Methode <em>boolean checkPinLength()</em>",id:"aktivit\xe4tsdiagramm-zur-methode-boolean-checkpinlength",level:3},{value:"Aktivit\xe4tsdiagramm zur Methode <em>boolean checkPinValue()</em>",id:"aktivit\xe4tsdiagramm-zur-methode-boolean-checkpinvalue",level:3},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung-1",level:3},{value:"Aufgabe 3 (29 Punkte)",id:"aufgabe-3-29-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm-2",level:3},{value:"Hinweise zur Klasse <em>Player</em>",id:"hinweise-zur-klasse-player",level:3},{value:"Beispielhafte Konsolenausgabe",id:"beispielhafte-konsolenausgabe-1",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung-2",level:3},{value:"Aufgabe 4 (23 Punkte)",id:"aufgabe-4-23-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm-3",level:3},{value:"Hinweise zur Klasse <em>StuffedCookie</em>",id:"hinweise-zur-klasse-stuffedcookie",level:3},{value:"Hinweise zur Klasse <em>CookieJar</em>",id:"hinweise-zur-klasse-cookiejar",level:3},{value:"Hinweis zur Klasse <em>IngredientsReader</em>",id:"hinweis-zur-klasse-ingredientsreader",level:3},{value:"Beispielhafter Aufbau der Zutatendatei",id:"beispielhafter-aufbau-der-zutatendatei",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung-3",level:3}];function o(e){let n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"hinweise-zur-klausur",children:"Hinweise zur Klausur"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die in dieser Klausur verwendeten Personenbezeichnungen beziehen sich \u2013 sofern\nnicht anders kenntlich gemacht \u2013 auf alle Geschlechter"}),"\n",(0,s.jsx)(n.li,{children:"Pakete und Klassenimporte m\xfcssen nicht angegeben werden"}),"\n",(0,s.jsx)(n.li,{children:"Es kann davon ausgegangen werden, dass s\xe4mtliche Klassen entsprechende\nImplementierungen der Object-Methoden besitzen"}),"\n",(0,s.jsxs)(n.li,{children:["Der Stereotyp ",(0,s.jsx)(n.code,{children:"enumeration"})," impliziert, dass die Aufz\xe4hlung einen passenden\nKonstruktor sowie gegebenenfalls passende Getter f\xfcr alle Attribute besitzt"]}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie in der Vorlesung gezeigt implementiert werden"}),"\n",(0,s.jsxs)(n.li,{children:["Die Konsolenausgaben-Methoden der Klasse ",(0,s.jsx)(n.code,{children:"PrintStream"})," d\xfcrfen sinnvoll gek\xfcrzt\ngeschrieben werden (zum Beispiel ",(0,s.jsx)(n.em,{children:'syso("Hello World")'})," statt\n",(0,s.jsx)(n.em,{children:'System.out.println("Hello World")'}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Methoden- und Attributsbezeichner d\xfcrfen sinnvoll gek\xfcrzt geschrieben werden\n(zum Beispiel ",(0,s.jsx)(n.em,{children:"getLWMCP()"})," statt ",(0,s.jsx)(n.em,{children:"getLectureWithMostCreditPoints()"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-1-26-punkte",children:"Aufgabe 1 (26 Punkte)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Erstelle die Klasse ",(0,s.jsx)(n.code,{children:"Class"})," anhand des abgebildeten Klassendiagramms (18\nPunkte)"]}),"\n",(0,s.jsxs)(n.li,{children:["Erstelle die ausf\xfchrbare Klasse ",(0,s.jsx)(n.code,{children:"ExamTask01"})," wie folgt (8 Punkte): Erstelle\neinen Kurs mit 2 Studierenden und 2 Vorlesungen und gib anschlie\xdfend den Kurs\nsowie die Vorlesung mit den meisten Creditpoints auf der Konsole aus"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Class o-- Lecture\n    Class o-- Student\n    CourseOfStudies --o Class\n\n    class Class {\n        -description: String #123;final#125;\n        -courseOfStudies: CourseOfStudies #123;final#125;\n        -lectures: List~Lecture~ #123;final#125;\n        -students: List~Student~ #123;final#125;\n        +Class(description: String, courseOfStudies: CourseOfStudies)\n        +description() String\n        +courseOfStudies() CourseOfStudies\n        +lectures() List~Lecture~\n        +students() List~Student~\n        +addLecture(lecture: Lecture) void\n        +addStudent(student: Student) void\n        +getLectureWithMostCreditPoints() Lecture\n        +toString() String\n    }\n\n    class Student {\n        -matriculationNumber: String #123;final#125;\n        -name: String #123;final#125;\n        +Student(matriculationNumber: String, name: String)\n        +matriculationNumber() String\n        +name() String\n        +toString() String\n    }\n\n    class Lecture {\n        -description: String #123;final#125;\n        -creditPoints: int #123;final#125;\n        +Lecture(description: String, creditPoints: int)\n        +description() String\n        +creditPoints() int\n        +toString() String\n    }\n\n    class CourseOfStudies {\n        <<enumeration>>\n        WI = Wirtschaftsinformatik\n        INF = Informatik\n        BWL = Betriebswirtschaftslehre\n        -description: String #123;final#125;\n    }\n\n    class ExamTask01 {\n        +main(args: String[])$ void\n    }"}),"\n",(0,s.jsxs)(n.h3,{id:"hinweise-zur-klasse-class",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Class"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren (2,5 Punkte)"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addStudent(student Student)"})," soll der Studierendenliste\n(",(0,s.jsx)(n.code,{children:"students"}),") den eingehenden Studierenden hinzuf\xfcgen (1 Punkt)"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addLecture(lecture Lecture)"})," soll der Vorlesungsliste\n(",(0,s.jsx)(n.code,{children:"lectures"}),") die eingehende Vorlesung hinzuf\xfcgen (1 Punkt)"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"Lecture getLectureWithMostCreditPoints()"})," soll die Vorlesung mit\nden meisten Creditpoints zur\xfcckgeben (5 Punkte)"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"String toString()"})," soll den Kurs in der Form ",(0,s.jsx)(n.em,{children:"Class\n[description=[Beschreibung des Kurses], courseOfStudies=[Beschreibung des\nStudiengangs], lectures=[Vorlesungen], students=[Studierende]]"}),"\nzur\xfcckgeben (2 Punkte)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"musterl\xf6sung",children:"Musterl\xf6sung"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Class.java" showLineNumbers',children:'public class Class { // 0,5\n\n  private final String description; // 0,5\n  private final CourseOfStudies courseOfStudies; // 0,5\n  private final List<Lecture> lectures; // 0,5\n  private final List<Student> students; // 0,5\n\n  public Class(String description, CourseOfStudies courseOfStudies) { // 0,5\n    this.description = description; // 0,5\n    this.courseOfStudies = courseOfStudies; // 0,5\n    lectures = new ArrayList<>(); // 0,5\n    students = new ArrayList<>(); // 0,5\n  } // 2,5\n\n  public String description() { // 0,5\n    return description; // 0,5\n  } // 1\n\n  public CourseOfStudies courseOfStudies() { // 0,5\n    return courseOfStudies; // 0,5\n  } // 1\n\n  public List<Lecture> lectures() { // 0,5\n    return lectures; // 0,5\n  } // 1\n\n  public List<Student> students() { // 0,5\n    return students; // 0,5\n  } // 1\n\n  public void addLecture(Lecture lecture) { // 0,5\n    lectures.add(lecture); // 0,5\n  } // 1\n\n  public void addStudent(Student student) { // 0,5\n    students.add(student); // 0,5\n  } // 1\n\n  public Lecture getLectureWithMostCreditPoints() { // 0,5\n    Lecture lecture = null; // 0,5\n    int mostCreditPoints = 0; // 0,5\n    for (Lecture l : lectures) { // 1\n      if (l.creditPoints() > mostCreditPoints) { // 1\n        lecture = l; // 0,5\n        mostCreditPoints = l.creditPoints(); // 0,5\n      }\n    }\n    return lecture; // 0,5\n  } // 5\n\n  public String toString() { // 0,5\n    return "Class [description=" + description + ", courseOfStudies=" + courseOfStudies.description()\n      + ", lectures=" + lectures + ", students=" + students + "]"; // 1,5\n  } // 2\n\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="ExamTask01.java" showLineNumbers',children:'public class ExamTask01 { // 0,5\n\n  public static void main(String[] args) { // 0,5\n\n    Class wwibe224 = new Class("WWIBE224", CourseOfStudies.WI); // 1\n    wwibe224.addStudent(new Student("8271625", "Hans Maier")); // 1\n    wwibe224.addStudent(new Student("9102934", "Peter M\xfcller")); // 1\n    wwibe224.addLecture(new Lecture("Mathe", 5)); // 1\n    wwibe224.addLecture(new Lecture("Programmierung", 10)); // 1\n\n    System.out.println(wwibe224); // 1\n    System.out.println("Vorlesung mit den meisten ECTS-Punkten: "\n     + wwibe224.getLectureWithMostCreditPoints()); // 1\n\n  } // 7,5\n\n} // 8\n'})}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-2-24-punkte",children:"Aufgabe 2 (24 Punkte)"}),"\n",(0,s.jsxs)(n.p,{children:["Erstelle die Klasse ",(0,s.jsx)(n.code,{children:"ExamTask02"})," anhand des abgebildeten Klassendiagramms sowie\nanhand der abgebildeten Aktivit\xe4tsdiagramme."]}),"\n",(0,s.jsx)(n.h3,{id:"klassendiagramm-1",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    class ExamTask02 {\n        -pin: int[]$\n        +main(args: String[]) void$\n        +textToPin(text: String) void$\n        +checkPinLength() boolean$\n        +checkPinValue() boolean$\n    }"}),"\n",(0,s.jsxs)(n.h3,{id:"aktivit\xe4tsdiagramm-zur-methode-void-mainargs-string",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,s.jsx)(n.em,{children:"void main(args: String[])"})]}),"\n",(0,s.jsx)(n.mermaid,{value:'stateDiagram-v2\n    state "Ausgabe: Bitte PIN eingeben" as state1\n    state "Eingabe: [Zeichenkette]" as state2\n    state "Ausf\xfchren: [Zeichenkette in Zahlenfeld umwandeln] mit [Zeichenkette]" as state3\n    state "Ausf\xfchren: [L\xe4nge des Zahlenfeldes pr\xfcfen]" as state4\n    state "Ausgabe: L\xe4nge der PIN ist ung\xfcltig" as state5\n    state "Ausf\xfchren: [Zahlenwert des Zahlenfeldes pr\xfcfen]" as state6\n    state "Ausgabe: Zahlenwert der PIN ist ung\xfcltig" as state7\n    state "Ausgabe: PIN ist g\xfcltig" as state8\n\n    state if1 <<choice>>\n    state if2 <<choice>>\n    state fork1 <<fork>>\n\n    state "PIN-Test" as main {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e state3\n        state3 --\x3e state4\n        state4 --\x3e if1\n        if1 --\x3e state6: R\xfcckgabe = true\n        if1 --\x3e state5: sonst\n        state6 --\x3e if2\n        if2 --\x3e state7: sonst\n        if2 --\x3e state8: R\xfcckgabe = true\n        state5 --\x3e fork1\n        state7 --\x3e fork1\n        state8 --\x3e fork1\n        fork1 --\x3e [*]\n    }'}),"\n",(0,s.jsxs)(n.h3,{id:"aktivit\xe4tsdiagramm-zur-methode-void-texttopintext-string",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,s.jsx)(n.em,{children:"void textToPin(text: String)"})]}),"\n",(0,s.jsx)(n.mermaid,{value:'stateDiagram-v2\n    state "[L\xe4nge der Zeichenkette] ermitteln" as state1\n    state "[L\xe4nge des Zahlenfeldes] = [L\xe4nge der Zeichenkette]" as state2\n    state "[Z\xe4hlvariable] = 0" as state3\n    state "[Aktuelles Zeichen der Zeichenkette] ermitteln" as state4\n    state "[Zahlenwert] von [Aktuelles Zeichen der Zeichenkette] ermitteln" as state5\n    state "[Zahlenwert] dem [Zahlenfeld] hinzuf\xfcgen" as state6\n    state "[Z\xe4hlvariable] inkrementieren" as state7\n    state stateif <<choice>>\n\n    state "Zeichenkette in Zahlenfeld umwandeln" as textToPin {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e state3\n        state3 --\x3e stateif\n        stateif --\x3e state4: [Z\xe4hlvariable] < [L\xe4nge des Zahlenfeldes]\n        stateif --\x3e [*]: sonst\n        state4 --\x3e state5\n        state5 --\x3e state6\n        state6 --\x3e state7\n        state7 --\x3e stateif\n    }'}),"\n",(0,s.jsxs)(n.h3,{id:"aktivit\xe4tsdiagramm-zur-methode-boolean-checkpinlength",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,s.jsx)(n.em,{children:"boolean checkPinLength()"})]}),"\n",(0,s.jsx)(n.mermaid,{value:'stateDiagram-v2\n    state "[L\xe4nge des Zahlenfeldes] ermitteln" as state1\n    state "R\xfcckgabe: true" as state2\n    state "R\xfcckgabe: false" as state3\n\n    state if1 <<choice>>\n    state fork1 <<fork>>\n\n    state "L\xe4nge des Zahlenfeldes pr\xfcfen" as checkPinLength {\n        [*] --\x3e state1\n        state1 --\x3e if1\n        if1 --\x3e state2: sonst\n        if1 --\x3e state3: [L\xe4nge des Zahlenfeldes] < 4 oder > 8\n        state3 --\x3e fork1\n        state2 --\x3e fork1\n        fork1 --\x3e [*]\n    }'}),"\n",(0,s.jsxs)(n.h3,{id:"aktivit\xe4tsdiagramm-zur-methode-boolean-checkpinvalue",children:["Aktivit\xe4tsdiagramm zur Methode ",(0,s.jsx)(n.em,{children:"boolean checkPinValue()"})]}),"\n",(0,s.jsx)(n.mermaid,{value:'stateDiagram-v2\n    state "[L\xe4nge des Zahlenfeldes] ermitteln" as state1\n    state "[Zahlenwert] = 0" as state2\n    state "[Z\xe4hlvariable] = 0" as state3\n    state "[Zahlenwert] = [Zahlenwert] + [Aktuelle Ziffer]" as state4\n    state "[Z\xe4hlvariable] inkrementieren" as state5\n    state "R\xfcckgabe: false" as state6\n    state "R\xfcckgabe: true" as state7\n\n    state if1 <<choice>>\n    state if2 <<choice>>\n    state fork <<fork>>\n\n    state "Zahlenwert des Zahlenfeldes pr\xfcfen" as checkPinValue {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e state3\n        state3 --\x3e if1\n        if1 --\x3e state4: [Z\xe4hlvariable] < [L\xe4nge des Zahlenfeldes]\n        state4 --\x3e state5\n        state5 --\x3e if1\n        if1 --\x3e if2: sonst\n        if2 --\x3e state6: [Zahlenwert] ungerade\n        if2 --\x3e state7: sonst\n        state6 --\x3e fork\n        state7 --\x3e fork\n        fork --\x3e [*]\n    }'}),"\n",(0,s.jsx)(n.h3,{id:"beispielhafte-konsolenausgabe",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Bitte PIN eingeben: 387\nL\xe4nge der PIN ist ung\xfcltig\nBitte PIN eingeben: 3871\nZahlenwert der PIN ist ung\xfcltig\nBitte PIN eingeben: 3872\nPIN ist g\xfcltig\n"})}),"\n",(0,s.jsx)(n.h3,{id:"musterl\xf6sung-1",children:"Musterl\xf6sung"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="ExamTask02.java" showLineNumbers',children:'public class ExamTask02 { // 0,5\n\n  private static int[] pin; // 0,5\n\n  public static void main(String[] args) { // 0,5\n    @SuppressWarnings("resource")\n    Scanner sc = new Scanner(System.in); // 1\n\n    System.out.print("Bitte PIN eingeben: "); // 0,5\n    String text = sc.next(); // 1\n    textToPin(text); // 0,5\n    if (!checkPinLength()) { // 1\n      System.out.println("L\xe4nge der PIN ist ung\xfcltig"); // 0,5\n    } else if (!checkPinValue()) { // 1\n      System.out.println("Zahlenwert der PIN ist ung\xfcltig"); // 0,5\n    } else { // 0,5\n      System.out.println("PIN ist g\xfcltig"); // 0,5\n    }\n  } // 7,5\n\n  private static boolean checkPinLength() { // 0,5\n    int length = pin.length; // 0,5\n    if (length < 4 || length > 8) { // 1\n      return false; // 0,5\n    }\n    return true; // 0,5\n  } // 3\n\n  private static boolean checkPinValue() { // 0,5\n    int length = pin.length; // 0,5\n    int total = 0; // 0,5\n    int i = 0; // 0,5\n    while (i < length) { // 1\n      int value = pin[i]; // 0,5\n      total += value; // 0,5\n      i++; // 0,5\n    }\n    if (total % 2 != 0) { // 1\n      return false; // 0,5\n    }\n    return true; // 0,5\n  } // 6,5\n\n  private static void textToPin(String text) { // 0,5\n    int length = text.length(); // 0,5\n    pin = new int[length]; // 1\n    int i = 0; // 0,5\n    while (i < length) { // 1\n      char c = text.charAt(i); // 1\n      pin[i] = Integer.valueOf(c); // 1\n      i++; // 0,5\n    }\n  } // 6\n\n} // 24\n'})}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-3-29-punkte",children:"Aufgabe 3 (29 Punkte)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Erstelle die Klasse ",(0,s.jsx)(n.code,{children:"Player"})," (9 Punkte) anhand des abgebildeten\nKlassendiagramms"]}),"\n",(0,s.jsxs)(n.li,{children:["Erstelle die ausf\xfchrbare Klasse ",(0,s.jsx)(n.code,{children:"ExamTask03"})," wie folgt (20 Punkte):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Zu Beginn des Spiels sollen die Spieler ihre Namen eingeben k\xf6nnen"}),"\n",(0,s.jsx)(n.li,{children:"Zu Beginn einer jeder Runde soll der aktuelle Punktestand ausgegeben werden"}),"\n",(0,s.jsx)(n.li,{children:"Anschlie\xdfend sollen beide Spieler ihre W\xfcrfel werfen"}),"\n",(0,s.jsx)(n.li,{children:"Der Spieler mit dem niedrigeren Wurfwert soll einen Lebenspunkt verlieren,\nbei Gleichstand soll keiner der Spieler einen Lebenspunkt verlieren"}),"\n",(0,s.jsx)(n.li,{children:"Das Spiel soll Enden, sobald ein Spieler keine Lebenspunkte mehr besitzt"}),"\n",(0,s.jsx)(n.li,{children:"Am Ende soll der Gewinner des Spiels ausgegeben werden"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"klassendiagramm-2",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    ExamTask03 o-- Player\n    Player o-- Dice\n\n    class ExamTask03 {\n        -player1: Player$\n        -player2: Player$\n        -scanner: Scanner$\n        +main(args: String[])$ void\n    }\n\n    class Player {\n        -name: String #123;final#125;\n        -healthPoints: int\n        -dice: Dice #123;final#125;\n        +Player(name: String)\n        +name() String\n        +getHealthPoints() int\n        +reduceHealthPoints() void\n        +rollTheDice() int\n    }\n\n    class Dice {\n        -value: int\n        +getValue() int\n        +rollTheDice() void\n    }"}),"\n",(0,s.jsxs)(n.h3,{id:"hinweise-zur-klasse-player",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Player"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Der Konstruktor soll den Namen (",(0,s.jsx)(n.code,{children:"name"}),") mit dem eingehenden Namen belegen, die\nLebenspunkte des Spielers (",(0,s.jsx)(n.code,{children:"healthPoints"}),") auf den Wert 10 setzen sowie den\nW\xfcrfel (",(0,s.jsx)(n.code,{children:"dice"}),") initialisieren (2 Punkte)"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"int rollTheDice()"})," soll den W\xfcrfel des Spielers werfen und den\nW\xfcrfelwert zur\xfcckgeben (2 Punkte)"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void reduceHealthPoints()"})," soll die Lebenspunkte des Spielers\n(",(0,s.jsx)(n.code,{children:"healthPoints"}),") um 1 reduzieren (1 Punkt)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"beispielhafte-konsolenausgabe-1",children:"Beispielhafte Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Spieler 1, gib bitte Deinen Namen ein: Hans\nSpieler 2, gib bitte Deinen Namen ein: Peter\n\nHans hat 10 Lebenspunkte\nPeter hat 10 Lebenspunkte\nHans w\xfcrfelt eine 6\nPeter w\xfcrfelt eine 6\n\u2026\nHans hat 4 Lebenspunkte\nPeter hat 1 Lebenspunkte\nHans w\xfcrfelt eine 5\nPeter w\xfcrfelt eine 1\nPeter verliert einen Punkt\n\nHans gewinnt\n"})}),"\n",(0,s.jsx)(n.h3,{id:"musterl\xf6sung-2",children:"Musterl\xf6sung"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Player.java" showLineNumbers',children:"public class Player { // 0,5\n\n  private final String name; // 0,5\n  private int healthPoints; // 0,5\n  private final Dice dice; // 0,5\n\n  public Player(String name) { // 0,5\n    this.name = name; // 0,5\n    healthPoints = 10; // 0,5\n    dice = new Dice(); // 0,5\n  } // 2\n\n  public String name() { // 0,5\n    return name; // 0,5\n  } // 1\n\n  public int getHealthPoints() { // 0,5\n    return healthPoints; // 0,5\n  } // 1\n\n  public int rollTheDice() { // 0,5\n    dice.rollTheDice(); // 0,5\n    return dice.getValue(); // 1\n  } // 2\n\n  public void reduceHealthPoints() { // 0,5\n    healthPoints--; // 0,5\n  } // 1\n\n} // 9\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="ExamTask04.java" showLineNumbers',children:'public class ExamTask03 { // 0,5\n\n  private static Player player1; // 0,5\n  private static Player player2; // 0,5\n  private static Scanner scanner; // 0,5\n\n  public static void main(String[] args) { // 0,5\n\n    scanner = new Scanner(System.in); // 1\n\n    System.out.print("Spieler 1, gib bitte Deinen Namen ein: "); // 0,5\n    String name1 = scanner.nextLine(); // 1\n    player1 = new Player(name1); // 0,5\n\n    System.out.print("Spieler 2, gib bitte Deinen Namen ein: "); // 0,5\n    String name2 = scanner.nextLine(); // 1\n    player2 = new Player(name2); // 0,5\n\n    System.out.println();\n\n    while (player1.getHealthPoints() > 0 && player2.getHealthPoints() > 0) { // 1\n      System.out.println(player1.name() + " hat " + player1.getHealthPoints() + " Lebenspunkte"); // 1\n      System.out.println(player2.name() + " hat " + player2.getHealthPoints() + " Lebenspunkte"); // 1\n      int value1 = player1.rollTheDice(); // 1\n      System.out.println(player1.name() + " w\xfcrfelt eine " + value1); // 0,5\n      int value2 = player2.rollTheDice(); // 1\n      System.out.println(player2.name() + " w\xfcrfelt eine " + value2); // 0,5\n      if (value1 > value2) { // 1\n        player2.reduceHealthPoints(); // 0,5\n        System.out.println(player2.name() + " verliert einen Punkt"); // 0,5\n      } else if (value2 > value1) { // 1\n        player1.reduceHealthPoints(); // 0,5\n        System.out.println(player1.name() + " verliert einen Punkt"); // 0,5\n      }\n      System.out.println();\n    }\n\n    if (player1.getHealthPoints() > player2.getHealthPoints()) { // 1\n      System.out.println(player1.name() + " gewinnt"); // 0,5\n    } else { // 0,5\n      System.out.println(player2.name() + " gewinnt"); // 0,5\n    }\n\n  } // 18\n\n} // 20\n'})}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-4-23-punkte",children:"Aufgabe 4 (23 Punkte)"}),"\n",(0,s.jsxs)(n.p,{children:["Erstelle die Klassen ",(0,s.jsx)(n.code,{children:"StuffedCookie"})," (9 Punkte), ",(0,s.jsx)(n.code,{children:"CookieJar"})," (8 Punkte) und\n",(0,s.jsx)(n.code,{children:"IngredientsReader"})," (6 Punkte) anhand des abgebildeten Klassendiagramms."]}),"\n",(0,s.jsx)(n.h3,{id:"klassendiagramm-3",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    CookieJar o-- Cookie\n    Cookie <|-- StuffedCookie : extends\n    Cookie o-- Recipe\n    StuffedCookie o-- Recipe\n    Recipe o-- Ingredient\n\n    class CookieJar {\n        -cookies: List~Cookie~ #123;final#125;\n        +CookieJar()\n        +addCookie(cookie: Cookie) void\n        +getStuffedCookie() StuffedCookie\n    }\n\n    class Cookie {\n        -name: String #123;final#125;\n        -dough: Recipe #123;final#125;\n        +Cookie(name: String, dough: Recipe)\n        +getIngredients() List~Ingredient~\n    }\n\n    class StuffedCookie {\n        -jam: Recipe #123;final#125;\n        +StuffedCookie(name: String, dough: Recipe, jam: Recipe)\n        +getIngredients() List~Ingredient~\n    }\n\n    class Recipe {\n        -name: String #123;final#125;\n        -ingredients: List~Ingredient~ #123;final#125;\n        +Recipe(name: String)\n        +addIngredient(ingredient: Ingredient) void\n    }\n\n    class Ingredient {\n        -name: String #123;final#125;\n        +Ingredient(name: String)\n    }\n\n    class IngredientsReader {\n        +readIngredients(file: File)$ List~Ingredient~\n    }"}),"\n",(0,s.jsxs)(n.h3,{id:"hinweise-zur-klasse-stuffedcookie",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"StuffedCookie"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren (2 Punkte)"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"List<Ingredient> getIngredients()"})," soll alle Zutaten zur\xfcckgeben.\nDoppelte Zutaten sollen dabei nur einmal zur\xfcckgegeben werden (5,5 Punkte)"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"hinweise-zur-klasse-cookiejar",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"CookieJar"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren (1 Punkt)"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addCookie(cookie Cookie)"})," soll der Pl\xe4tzchenbox ein\nPl\xe4tzchen hinzuf\xfcgen (1 Punkt)"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"StuffedCookie getStuffedCookie()"})," soll ein gef\xfclltes Pl\xe4tzchen\nzur\xfcckgeben und aus der Pl\xe4tzchenbox entfernen. F\xfcr den Fall, dass kein\ngef\xfclltes Pl\xe4tzchen vorhanden ist, soll der Wert ",(0,s.jsx)(n.code,{children:"null"})," zur\xfcckgegeben werden\n(5 Punkte)"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"hinweis-zur-klasse-ingredientsreader",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"IngredientsReader"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die statische Methode ",(0,s.jsx)(n.code,{children:"List<Ingredient> readIngredients()"})," soll alle Zutaten der\neingehenden Zutatendatei lesen und zur\xfcckgeben (5,5 Punkte)."]}),"\n",(0,s.jsx)(n.h3,{id:"beispielhafter-aufbau-der-zutatendatei",children:"Beispielhafter Aufbau der Zutatendatei"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Mehl\nZucker\n...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"musterl\xf6sung-3",children:"Musterl\xf6sung"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="StuffedCookie.java" showLineNumbers',children:"public class StuffedCookie extends Cookie { // 1\n\n  private final Recipe jam; // 0,5\n\n  public StuffedCookie(String name, Recipe dough, Recipe jam) { // 0,5\n    super(name, dough); // 1\n    this.jam = jam; // 0,5\n  } // 2\n\n  public List<Ingredient> getIngredients() { // 0,5\n    List<Ingredient> ingredients = super.getIngredients(); // 1\n    for (Ingredient i : jam.ingredients()) { // 1,5\n      if (ingredients.contains(i)) { // 1\n        continue; // 0,5\n      }\n      ingredients.add(i); // 0,5\n    }\n    return ingredients; // 0,5\n  } // 5,5\n\n} // 9\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="CookieJar.java" showLineNumbers',children:"public class CookieJar { // 0,5\n\n  private final List<Cookie> cookies; // 0,5\n\n  public CookieJar() { // 0,5\n    cookies = new ArrayList<>(); // 0,5\n  } // 1\n\n  public void addCookie(Cookie cookie) { // 0,5\n    cookies.add(cookie); // 0,5\n  } // 1\n\n  public StuffedCookie getStuffedCookie() { // 0,5\n    StuffedCookie stuffedCookie; // 0,5\n    for (Cookie c : cookies) { // 1\n      if (c instanceof StuffedCookie s) { // 1\n        cookies.remove(s); // 1\n        stuffedCookie = s; // 0,5\n      }\n    }\n    return stuffedCookie; // 0,5\n  } // 5\n\n} // 8\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="IngredientsReader.java" showLineNumbers',children:"public class IngredientsReader { // 0,5\n\n  public static List<Ingredient> readIngredients(File file) throws FileNotFoundException { // 0,5\n    Scanner sc = new Scanner(file); // 1\n    List<Ingredient> ingredients = new ArrayList<>(); // 0,5\n\n    while (sc.hasNextLine()) { // 1\n      String line = sc.nextLine(); // 0,5\n      Ingredient i = new Ingredient(line); // 0,5\n      ingredients.add(i); // 0,5\n    }\n\n    sc.close(); // 0,5\n    return ingredients; // 0,5\n  } // 5,5\n\n} // 6\n"})})]})}function c(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(67294);let s={},a=i.createContext(s);function r(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);