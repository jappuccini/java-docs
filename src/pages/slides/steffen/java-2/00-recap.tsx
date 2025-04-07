import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function Recap(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Klausurnachbesprechung</li>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Fortgeschrittene Programmierung</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Klausurnachbesprechung</h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
        </section>
        <section>
          <h2>Datentypen</h2>
        </section>
        <section>
          <h2>Primitive Datentypen</h2>
          <ul>
            <li className="fragment">boolean</li>
            <li className="fragment">
              byte, short, <b>int</b>, long
            </li>
            <li className="fragment">
              float, <b>double</b>
            </li>
            <li className="fragment">char</li>
          </ul>
        </section>
        <section>
          <h2>Komplexe Datentypen</h2>
          <ul>
            <li className="fragment">String</li>
            <li className="fragment">jede Klasse</li>
          </ul>
          <p className="fragment">
            Tipp: Primitive Datentypen haben keine Methoden
          </p>
        </section>
        <section>
          <h2>Methoden</h2>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Calculator {\n' +
                  '\n' +
                  '  public static int add(int x, int y) {\n' +
                  '    return x + y;\n' +
                  '  }\n' +
                  '\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <span className="fragment fade-in-then-out">Rückgabetyp</span>
          <span className="fragment fade-in-then-out">Bezeichner</span>
          <span className="fragment fade-in-then-out">Parameter</span>
          <span className="fragment fade-in-then-out">Methodenrumpf</span>
        </section>
        <section>
          <h2>Operatoren</h2>
        </section>
        <section>
          <h2>Arithmetische Operatoren</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '//...\n' +
                  '  public static void main(String[] args) {\n' +
                  '    int a = 3;\n' +
                  '    int b = 2;\n' +
                  '    int addition = a + b; // 5;\n' +
                  '    int subtraktion = a - b; // 1;\n' +
                  '    int multiplikation = a * b; // 6;\n' +
                  '    int division = a / b; // 1, nicht 1.5! Warum?;\n' +
                  '    int restwert = a % b; // 1;\n' +
                  '  }\n' +
                  '//...\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Arithmetische Operatoren II</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '//...\n' +
                  '  public static void main(String[] args) {\n' +
                  '    int a = 3;\n' +
                  '    System.out.println(a++); // Log: 3, Wert: 4\n' +
                  '    System.out.println(++a); // Log: 5, Wert: 5\n' +
                  '    System.out.println(--a); // Log: 4, Wert: 4\n' +
                  '    System.out.println(a--); // Log: 4, Wert: 3\n' +
                  '  }\n' +
                  '//...\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Vergleichsoperatoren</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '//...\n' +
                  '  public static void main(String[] args) {\n' +
                  '    boolean result;\n' +
                  '    result = 3 == 2; // false \n' +
                  '    result = 3 != 2; // true \n' +
                  '    result = 3 &gt; 2; // true \n' +
                  '    result = 2 &gt;= 2; // true \n' +
                  '    result = 2 &lt; 2; // false \n' +
                  '    result = 2 &lt;= 2; // true \n' +
                  '  }\n' +
                  '//...\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Logische Operatoren I - AND</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '//...\n' +
                  '  public static void main(String[] args) {\n' +
                  '    boolean t = true;\n' +
                  '    boolean f = false;\n' +
                  '    boolean result;\n' +
                  '\n' +
                  '    result = t && f; // false \n' +
                  '    result = t && t; // true \n' +
                  '    result = f && t; // false \n' +
                  '    result = f && f; // false \n' +
                  '  }\n' +
                  '//...\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Logische Operatoren II - OR</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '//...\n' +
                  '  public static void main(String[] args) {\n' +
                  '    boolean t = true;\n' +
                  '    boolean f = false;\n' +
                  '    boolean result;\n' +
                  '\n' +
                  '    result = f || t; // true \n' +
                  '    result = t || f; // true \n' +
                  '    result = f || f; // false \n' +
                  '    result = t || t; // true \n' +
                  '  }\n' +
                  '//...\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Logische Operatoren III - NOT</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '//...\n' +
                  '  public static void main(String[] args) {\n' +
                  '    boolean t = true;\n' +
                  '    boolean f = false;\n' +
                  '    boolean result;\n' +
                  '\n' +
                  '    result = !f; // true \n' +
                  '    result = !t; // false \n' +
                  '  }\n' +
                  '//...\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Kontrollstrukturen</h2>
        </section>
        <section>
          <h2>if</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '//...\n' +
                  '  public static void main(String[] args) {\n' +
                  '    int age = 18;\n' +
                  '\n' +
                  '    if(age >= 18) {\n' +
                  '      // Ich krieg alles, was ich will\n' +
                  '    } else if(age >= 16) {\n' +
                  '      // Ich krieg Bier, Wein, Most &lt;3 und Sekt \n' +
                  '    } else  {\n' +
                  '      // Ich krieg Coca Zero\n' +
                  '    } \n' +
                  '  }\n' +
                  '//...\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>switch</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '  public static void greet(char gender) {\n' +
                  '    switch(gender) {\n' +
                  "      case 'm':\n" +
                  "      case 'M':\n" +
                  '        // falls man ein Mann ist\n' +
                  '        break; \n' +
                  "      case 'F':\n" +
                  '        // falls man eine Frau ist\n' +
                  '        break; \n' +
                  '      default :\n' +
                  '        // falls man divers ist\n' +
                  '        break; \n' +
                  '    }\n' +
                  '  }\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>while-Schleife</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '  public static boolean exists(String brand) {\n' +
                  '    String[] cars = { "BMW", "Audi", "Benz" }; \n' +
                  '    boolean found = false; \n' +
                  '    int i = 0; \n' +
                  '    while(!found && i &lt; cars.length) {\n' +
                  '      String car = cars[i];\n' +
                  '      if(car.equals(brand)) {\n' +
                  '        found = true;\n' +
                  '      } else {\n' +
                  '        i++;\n' +
                  '      }\n' +
                  '    }\n' +
                  '    return found; \n' +
                  '  }\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>do-while-Schleife</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '  public static boolean exists(String brand) {\n' +
                  '    String[] cars = { "BMW", "Audi", "Benz" }; \n' +
                  '    boolean found = false; \n' +
                  '    int i = 0; \n' +
                  '    do {\n' +
                  '      String car = cars[i];\n' +
                  '      if(car.equals(brand)) {\n' +
                  '        found = true;\n' +
                  '      } else {\n' +
                  '        i++;\n' +
                  '      }\n' +
                  '    }\n' +
                  '    while(!found && i &lt; cars.length)\n' +
                  '    return found; \n' +
                  '  }\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>for-Schleife</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '  public static boolean exists(String brand) {\n' +
                  '    String[] cars = { "BMW", "Audi", "Benz" } \n' +
                  '    for (int i = 0; i &lt; cars.length; i++) {\n' +
                  '      String car = cars[i];\n' +
                  '      if(car.equals(brand)) {\n' +
                  '        return true;\n' +
                  '      }\n' +
                  '    }\n' +
                  '    return false; \n' +
                  '  }\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>for-each-Schleife</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '  public static boolean exists(String brand) {\n' +
                  '    String[] cars = { "BMW", "Audi", "Benz" } \n' +
                  '    for (String car : cars) {\n' +
                  '      if(car.equals(brand)) {\n' +
                  '        return true;\n' +
                  '      }\n' +
                  '    }\n' +
                  '    return false; \n' +
                  '  }\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>break und continue</h2>
          <ul>
            <li className="fragment">break beendet die komplette Schleife</li>
            <li className="fragment">
              continue überspringt den restlichen Code
            </li>
          </ul>
        </section>
        <section>
          <h2>Arrays</h2>
        </section>
        <section>
          <h2>Array</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '  public static void example() {\n' +
                  '    String[] cars = { "BMW", "Audi", "Benz" };\n' +
                  '    String car;\n' +
                  '    car = cars[0]; // lesen aus dem Array\n' +
                  "    cars[2] = 'Alfa'; // speichern in ein Array\n" +
                  '    String[] twoCars = new String[2]; // Array ohne Inhalt\n' +
                  '    int amountOfItems = twoCars.length;\n' +
                  '  }\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>ArrayList</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '  public static void example() {\n' +
                  '    ArrayList&lt;String&gt; cars = new ArrayList&lt;&gt;();\n' +
                  "    cars.add('BMW');\n" +
                  "    cars.add('Audi');\n" +
                  "    cars.add('Benz');\n" +
                  '    String car;\n' +
                  '    car = cars.get(0); // lesen aus der Liste\n' +
                  "    cars.set(2,'Alfa'); // speichern in der Liste\n" +
                  '    int amountOfItems = cars.size();\n' +
                  '    cars.remove(1); // löschen aus der Liste\n' +
                  '  }\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Klassen und Objekte</h2>
        </section>
        <section>
          <h2>Klassen</h2>
          <span className="fragment">
            Eine Klasse beschreibt gleichartige Objekte durch
          </span>
          <ul>
            <li className="fragment">Attribute</li>
            <li className="fragment">Methoden</li>
          </ul>
        </section>
        <section>
          <h2>Beispiel Klasse</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Human {\n' +
                  '  public String firstName;\n' +
                  '  public String lastName;\n' +
                  ' \n' +
                  '  public String getFullName() {\n' +
                  '    return firstName + lastName;\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Objekte</h2>
          <span className="fragment">
            Ein Objekt ist eine mögliche Ausprägung einer Klasse
          </span>
          <ul>
            <li className="fragment">konkreter Wert für ein Attribut</li>
            <li className="fragment">konkretes Verhalten einer Methode</li>
          </ul>
        </section>
        <section>
          <h2>Beispiel Objekt</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '  Human steffen = new Human();\n' +
                  '  steffen.firstName = "Steffen";\n' +
                  '  steffen.lastName = "Merk";\n' +
                  '  String fullName = steffen.getFullName();\n' +
                  '',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Konstruktor</h2>
          <ul>
            <li className="fragment">
              beschreibt die Initialisierung eines Objektes
            </li>
            <li className="fragment">Konstruktoren können Überladen werden</li>
          </ul>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Car {\n' +
                  '  private String color;\n' +
                  '  private char engineType;\n' +
                  '\n' +
                  '  public Car(String color) {\n' +
                  '    this.color = color;\n' +
                  "    this.engineType = 'b';\n" +
                  '  }\n' +
                  '\n' +
                  '  public Car(String color, char engineType) {\n' +
                  '    this.color = color;\n' +
                  '    this.engineType = engineType;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Konstruktor II</h2>
          <ul>
            <li className="fragment">
              Konstruktoren können andere Konstruktoren verwenden
            </li>
          </ul>
        </section>
        <section>
          <pre>
            <code
              className="java"
              data-line-numbers="|5-7"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Car {\n' +
                  '  private String color;\n' +
                  '  private char engineType;\n' +
                  '\n' +
                  '  public Car(String color) {\n' +
                  "    this(color, 'b')\n" +
                  '  }\n' +
                  '\n' +
                  '  public Car(String color, char engineType) {\n' +
                  '    this.color = color;\n' +
                  '    this.engineType = engineType;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Vererbung</h2>
        </section>
        <section>
          <h2>Vererbung</h2>
          <p>
            Durch <b>Generalisierung</b> werden gemeinsame Attribute und
            Methoden von mehreren Klassen in eine weitere Klasse ausgelagert.
          </p>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  '  public String name;\n' +
                  '  public Dog(String name) {\n' +
                  '    this.name = name;\n' +
                  '  }\n' +
                  '  // more Dog specific methods\n' +
                  '}\n' +
                  'public class Cat {\n' +
                  '  public String name;\n' +
                  '  public Cat(String name) {\n' +
                  '    this.name = name;\n' +
                  '  }\n' +
                  '  // more Cat specific methods\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Animal {\n' +
                  '  public String name;\n' +
                  '  public Animal(String name) {\n' +
                  '    this.name = name;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog extends Animal {\n' +
                  '  public Dog(String name) {\n' +
                  '    super(name);\n' +
                  '  }\n' +
                  '}\n' +
                  '\n' +
                  'public class Cat extends Animal {\n' +
                  '  public Cat(String name) {\n' +
                  '    super(name);\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Schlüsselwörter zur Vererbung</h2>
          <ul>
            <li className="fragment">extends</li>
            <li className="fragment">super</li>
          </ul>
        </section>
        <section>
          <h2>Polymorphie</h2>
        </section>
        <section>
          <h2>Polymorphie</h2>
          <p className="fragment">
            Eine Referenzvariable, die vom Typ einer generalisierten Klasse ist,
            kann mehrere (poly) Formen annehmen (Unterklassen).
          </p>
          <p className="fragment">
            Eine Referenzvariable vom Typ Animal kann eine Katze oder ein Hund
            sein.
          </p>
        </section>
        <section>
          <h2>Upcast</h2>
          <p className="fragment">
            Der Referenzvariable einer Oberklasse wird eine Referenzvariable
            einer Unterklasse zugewiesen.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Animal animal01 = new Cat();\n' +
                  'Animal animal02 = new Dog();\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <p>
            Ist eine Referenzvariable vom Typ einer generalisierten Klasse,
            können nur die Methoden der generalisierten Klasse verwendet werden.
          </p>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Animal animal01 = new Dog();\n' +
                  "animal01.name = 'Bello'; // funktioniert\n" +
                  'animal01.bark(); // funktioniert nicht \n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Downcast</h2>
          <p className="fragment">
            Der Referenzvariable einer Oberklasse wird eine Referenzvariable
            einer Unterklasse zugewiesen.
          </p>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Animal animal01 = new Dog();\n' +
                  'Dog dog01 = (Dog) animal01;\n' +
                  'dog01.bark(); // funktioniert\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>instanceof operator</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Animal animal01 = new Dog();\n' +
                  'if (animal01 instanceof Dog) {\n ' +
                  '  // hundespezifischer Quellcode\n' +
                  '   Dog bello = (Dog) animal01;\n' +
                  '   bello.bark();\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Modifier</h2>
        </section>
        <section>
          <h2>Public Modifier - Klasse</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'public class Dog {\n' + '  //...\n' + '}\n',
              }}
            ></code>
          </pre>
          <p>Klasse kann überall im Projekt verwendet werden.</p>
        </section>
        <section>
          <h2>Kein Modifier - Klasse</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'class Dog {\n' + '  //...\n' + '}\n',
              }}
            ></code>
          </pre>
          <p>Klasse kann nur im selben Paket verwendet werden.</p>
        </section>
        <section>
          <h2>Abstract Modifier - Klasse</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'public abstract class Dog {\n' + '  //...\n' + '}\n',
              }}
            ></code>
          </pre>
          <p>Ein Objekt dieser Klasse kann nicht instanziiert werden.</p>
        </section>
        <section>
          <h2>Final Modifier - Klasse</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'public final class Dog {\n' + '  //...\n' + '}\n',
              }}
            ></code>
          </pre>
          <p>Von dieser Klasse kann nicht geerbt werden.</p>
        </section>
        <section>
          <h2>Public Modifier - Attribut</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  '  public String name;\n' +
                  '  //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p>Das Attribut kann immer geändert werden.</p>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Dog bello = new Dog();\n' +
                  'bello.name = "Steffen"; // funktioniert\n' +
                  '\n' +
                  'public class MonsterDog extends Dog {\n' +
                  ' //...\n' +
                  ' public void setName(String name) {\n' +
                  '   this.name = name; // funktioniert\n' +
                  ' }\n' +
                  ' //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Private Modifier - Attribut</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  '  private String name;\n' +
                  '  //...\n' +
                  '  public void setName(String name) {\n' +
                  '    this.name = name; // funktioniert\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p>Das Attribut kann innerhalb der Klasse geändert werden.</p>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Dog bello = new Dog();\n' +
                  'bello.name = "Steffen"; // funktioniert nicht\n' +
                  '\n' +
                  'public class MonsterDog extends Dog {\n' +
                  ' //...\n' +
                  ' public void setName(String name) {\n' +
                  '   this.name = name; // funktioniert nicht\n' +
                  ' }\n' +
                  ' //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Protected Modifier - Attribut</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  '  protected String name;\n' +
                  '  //...\n' +
                  '  public void setName(String name) {\n' +
                  '    this.name = name; // funktioniert\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p>
            Das Attribut kann innerhalb der Klasse und von allen erbenden
            Klassen geändert werden.
          </p>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Dog bello = new Dog();\n' +
                  'bello.name = "Steffen"; // funktioniert nicht\n' +
                  '\n' +
                  'public class MonsterDog extends Dog {\n' +
                  ' //...\n' +
                  ' public void setName(String name) {\n' +
                  '   this.name = name; // funktioniert\n' +
                  ' }\n' +
                  ' //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Final Modifier - Attribut</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  '  public final String name;\n' +
                  '  //...\n' +
                  '  public Dog(String name) {\n' +
                  '    this.name = name; // funktioniert\n' +
                  '  }\n' +
                  '\n' +
                  '  public void setName(String name) {\n' +
                  '    this.name = name; // funktioniert nicht\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p>Das Attribut kann nur im Konstruktor geändert werden.</p>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Dog bello = new Dog("Marianna");\n' +
                  'bello.name = "Steffen"; // funktioniert nicht\n' +
                  '\n' +
                  'public class MonsterDog extends Dog {\n' +
                  ' //...\n' +
                  ' public void setName(String name) {\n' +
                  '   this.name = name; // funktioniert nicht\n' +
                  ' }\n' +
                  ' //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Static Modifier - Attribut</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  '  public static boolean hasHat = false;\n' +
                  '  //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p>Das Attribut gehört zu der Klasse und nicht zu einem Objekt.</p>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Dog bello = new Dog();\n' +
                  'bello.hasHat = true; // funktioniert nicht\n' +
                  'Dog.hasHat = true; // funktioniert\n' +
                  '\n' +
                  'public class MonsterDog extends Dog {\n' +
                  ' //...\n' +
                  ' public void setHat(boolean hasHat) {\n' +
                  '   this.hasHat = hasHat; // funktioniert nicht\n' +
                  '   Dog.hasHat = hasHat; // funktioniert\n' +
                  ' }\n' +
                  ' //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Public Modifier - Methode</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  '  public void bark() {\n' +
                  '    //...\n' +
                  '  }\n' +
                  '  //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p>Die Methode kann immer verwendet werden.</p>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Dog bello = new Dog();\n' +
                  'bello.bark(); // funktioniert\n' +
                  '\n' +
                  'public class MonsterDog extends Dog {\n' +
                  ' //...\n' +
                  ' public void attack() {\n' +
                  '   this.bark(); // funktioniert\n' +
                  ' }\n' +
                  ' //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Private Modifier - Methode</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  '  private void bark() {\n' +
                  '    //...\n' +
                  '  }\n' +
                  '  //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p>Die Methode kann innerhalb der Klasse verwendet werden.</p>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Dog bello = new Dog();\n' +
                  'bello.bark(); // funktioniert nicht\n' +
                  '\n' +
                  'public class MonsterDog extends Dog {\n' +
                  ' //...\n' +
                  ' public void attack() {\n' +
                  '   this.bark(); // funktioniert nicht\n' +
                  ' }\n' +
                  ' //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Protected Modifier - Methode</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  '  protected void bark() {\n' +
                  '    //...\n' +
                  '  }\n' +
                  '  //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p>
            Das Attribut kann innerhalb der Klasse und von allen erbenden
            Klassen verwendet werden.
          </p>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Dog bello = new Dog();\n' +
                  'bello.bark(); // funktioniert nicht\n' +
                  '\n' +
                  'public class MonsterDog extends Dog {\n' +
                  ' //...\n' +
                  ' public void attack() {\n' +
                  '   this.bark(); // funktioniert\n' +
                  ' }\n' +
                  ' //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Final Modifier - Methode</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  '  public final void bark() {\n' +
                  '    //...\n' +
                  '  }\n' +
                  '  //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p>Die Methode kann nicht überschrieben werden.</p>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class MonsterDog extends Dog {\n' +
                  ' //...\n' +
                  ' public void bark() { // funktioniert nicht \n' +
                  '   //...\n' +
                  ' }\n' +
                  ' //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Static Modifier - Methode</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  '  public static hasHat = true;\n' +
                  '  public static isCool = true;\n' +
                  '  public static boolean isCoolAndHasHat() {\n' +
                  '    return Dog.isCool && Dog.hasHat;\n' +
                  '  }\n' +
                  '  //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p>
            Die Methode gehört zu der Klasse und nicht zu einem Objekt. Es kann
            nur auf statische Attribute zugegriffen werden.
          </p>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Dog bello = new Dog();\n' +
                  'bello.isCoolAndHasHat(); // funktioniert nicht\n' +
                  'Dog.isCoolAndHasHat(); // funktioniert\n' +
                  '\n' +
                  'public class MonsterDog extends Dog {\n' +
                  ' //...\n' +
                  ' public void attack() {\n' +
                  '   this.isCoolAndHasHat(); // funktioniert nicht\n' +
                  '   Dog.isCoolAndHasHat(); // funktioniert\n' +
                  ' }\n' +
                  ' //...\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Abstract Modifier - Methode</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public abstract class Animal {\n' +
                  '  //...\n' +
                  '  public abstract void makeSound();\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p>
            Die Methode muss von der erbenden Klasse implementiert werden.
            Abstrakte Methoden können nur in abstrakten Klassen definiert
            werden.
          </p>
        </section>
        <section>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class MonsterDog extends Dog {\n' +
                  ' // funktioniert nicht, makeSound muss implementiert werden\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Enumeration</h2>
        </section>
        <section>
          <h2>Enumeration</h2>
          <p>
            Eine Enumeration ist eine Klasse mit Attributen und Methoden. Sie
            definiert zusätzlich alle möglichen Ausprägungen dieser Klasse.
          </p>
        </section>
        <section>
          <h2>Enumeration implementieren</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public enum Gender {\n' +
                  ' MALE("Mann"),\n' +
                  ' FEMALE("Frau"),\n' +
                  ' DIVERS("Divers");\n' +
                  ' \n' +
                  ' public final String text;\n' +
                  ' \n' +
                  ' Gender(String text) {\n' +
                  '   this.text = text;\n' +
                  ' }\n' +
                  ' \n' +
                  ' public boolean isBinary() {\n' +
                  '   return this == Gender.MALE || this == Gender.FEMALE;\n' +
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Enumeration als Typ verwenden</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Human {\n' +
                  ' public final Gender gender;\n' +
                  ' \n' +
                  ' public Human(Gender gender) {\n' +
                  '   this.gender = gender;\n' +
                  ' }\n' +
                  ' public doSomethingBinaryRelated() {\n' +
                  '   if(this.gender.isBinary())\n' +
                  '   //...\n' +
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Enumeration als Wert setzen</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'Human steffen = new Human(Gender.MALE);\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Interfaces</h2>
        </section>
        <section>
          <h2>Interfaces</h2>
          <p>Definieren Methoden unabhängig von der Vererbungshierarchie.</p>
          <p className="fragment">
            Dient als Schnittstelle zwischen Ersteller und Verwender einer
            Funktionalität.
          </p>
        </section>
        <section>
          <h2>Interface (Ersteller)</h2>
          <pre>
            <code
              data-line-numbers="1-3|6|7,11"
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface Item {\n' +
                  '  public String getName(); \n' +
                  '}\n' +
                  '\n' +
                  'public class ShoppingList {\n' +
                  '  ArrayList&lt;Item&gt; items = new ArrayList&lt;&gt;();\n' +
                  '  public void add(Item item) {\n' +
                  '    this.items.add(item);\n' +
                  '  }\n' +
                  '  public void print() {\n' +
                  '    for(Item item : items) {\n' +
                  '      System.out.println(item.getName();\n' +
                  '    }\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Interface (Verwender) I</h2>
          <pre>
            <code
              data-line-numbers="1|10-12"
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Human implements Item {\n' +
                  '  public final String firstName;\n' +
                  '  public final String lastName;\n' +
                  '  \n' +
                  '  public Human(String firstName, String lastName) {\n' +
                  '    this.firstName = firstName;\n' +
                  '    this.lastName = lastName;\n' +
                  '  }\n' +
                  '  \n' +
                  '  public String getName() {\n' +
                  '    return firstName + " " + lastName;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Interface (Verwender) II </h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'ShoppingList shoppingList = new ShoppingList();\n' +
                  'Human steffen = new Human("Steffen", "Merk");\n' +
                  'shoppingList.add(steffen);\n' +
                  'shoppingList.print(); // "Steffen Merk"\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Comparator</h2>
        </section>
        <section>
          <h2>Comparator</h2>
          <p className="fragment">
            Definiert wie eine Liste von Elementen sortiert wird.
          </p>
          <p className="fragment">
            Vergleicht immer zwei Elemente miteinander, bei dem angegeben wird,
            wo das erste Element im Vergleich zum zweiten Element positioniert
            wird (Zahlenstrahl).
          </p>
        </section>
        <section>
          <h2>Comparator implementieren</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class AgeAscComparator implements Comparator&lt;Human&gt; {\n' +
                  '  \n' +
                  '  public int compare(Human h1, Human h2) {\n' +
                  '    if(h1.getAge() > h2.getAge()) {\n' +
                  '     return 1;\n' +
                  '    } else if (h1.getAge() &lt; h2.getAge()) {\n' +
                  '      return -1;\n' +
                  '    } else {\n' +
                  '      return 0;\n' +
                  '    } \n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Comparator verwenden</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'ArrayList&lt;Human&gt; developers = new ArrayList&lt;&gt;();\n' +
                  'developers.add(new Human(28));\n' +
                  'developers.add(new Human(24));\n' +
                  'Collections.sort(developers, new AgeAscComparator());\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Exceptions</h2>
        </section>
        <section>
          <h2>Exceptions</h2>
          <p className="fragment">
            Sind Fehler, die während der Ausführung des Programms auftreten
            können und dienen zur Kommunikation.
          </p>
          <p className="fragment">
            Fehler können mitgeteilt (throws) und verarbeitet werden (catch).
          </p>
        </section>
        <section>
          <h2>Exception implementieren</h2>
          <pre>
            <code
              data-line-numbers="1-9|1|6"
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class TooYoungException extends Exception {\n' +
                  '  \n' +
                  '  public final int yearsTillAllowed;\n' +
                  '  \n' +
                  '  public TooYoungException(int yearsTillAllowed) {\n' +
                  '    super();\n' +
                  '    this.yearsTillAllowed = yearsTillAllowed;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Exception auslösen</h2>
          <pre>
            <code
              data-line-numbers="1-9|4|6"
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class ShoppingList {\n' +
                  '  Human buyer;\n' +
                  '  //...\n' +
                  '  public addItem(Item item) throws TooYoungException {\n' +
                  '    if(item.isAlcohol() && this.buyer.getAge() &lt; 21) {\n' +
                  '      throw new TooYoungException(21 - buyer.getAge());\n' +
                  '    }\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Exception behandeln</h2>
          <pre>
            <code
              data-line-numbers="1-13|5-7|7-9|9-11"
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    ShoppingList sl = new ShoppingList();\n' +
                  '    Beer corona = new Beer();\n' +
                  '    try {\n' +
                  '      sl.add(corona);\n' +
                  '    } catch (TooYoungException e) {\n' +
                  '      System.out.println("Du bist" + e.yearsTillAllowed + "zu jung");\n' +
                  '    } finally {\n' +
                  '      System.out.println("Einkauf beendet. (Immer)");\n' +
                  '    }\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Klassendiagramme (Doku)</h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Organisatorsiches</h2>
        </section>
        <section>
          <h2>Fortgeschrittene Programmierung</h2>
          <ul>
            <li className="fragment">Algorithmen und Datenstrukturen</li>
            <li className="fragment">Generische Programmierung</li>
            <li className="fragment">Funktionale Programmierung</li>
          </ul>
        </section>
        <section>
          <h2>Prüfungsleistungen</h2>
          <ul>
            <li className="fragment">Projektbericht (50 Punkte)</li>
            <li className="fragment">Klausur am PC (50 Punkte)</li>
          </ul>
        </section>
        <section>
          <h2>Abgabetermine in Moodle</h2>
          <ul>
            <li className="fragment">30.04.2024 - Problemstellung und Daten</li>
            <li className="fragment">30.05.2025 - Projektbericht</li>
          </ul>
        </section>
        <section>
          <h2>Projektbericht - Problem</h2>
          <ul>
            <li className="fragment">findet ein Problem (im Unternehmen)</li>
            <li className="fragment">(er)findet dazu Daten</li>
            <li className="fragment">mindestens eine Verknüpfung</li>
            <li className="fragment">
              keine doppelten Themen (Selbstorganisiert)
            </li>
          </ul>
        </section>
        <section>
          <h2>Projektbericht - Abgabe I</h2>
          <ul>
            <li className="fragment">Problembeschreibung (.txt)</li>
            <li className="fragment">20 Datensätze mit Überschrift (.csv)</li>
            <li className="fragment">Abgabe in Moodle 30.04 23:59</li>
          </ul>
        </section>
        <section>
          <h2>Projektbericht - Abgabe II</h2>
          <ul>
            <li className="fragment">Erklärung am 28.04</li>
            <li className="fragment">Abgabe in Moodle 30.05 23:59</li>
          </ul>
        </section>
        <section>
          <h2>Klausur am PC</h2>
          <ul>
            <li className="fragment">Ablauf wie Klausur</li>
            <li className="fragment">VSCode anstatt Notepad++</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Rest of the day</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Entwicklungsumgebung einrichten</li>
            <li className="fragment">Individuelle Klausureinsicht</li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
