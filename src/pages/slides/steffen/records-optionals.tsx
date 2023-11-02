import Slides from '../../../components/Slides';
import { defaultInitSlides } from '../../../components/Slides/initSlides';

export default function RecordsOptionals(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Records</li>
            <li className="fragment">Optionals</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Records</h2>
        </section>
        <section>
          <h2>Records</h2>
          <p className="fragment">
            Ein Record ist eine Datenklasse, deren Attribute nicht verändert
            werden können.
          </p>
          <p className="fragment">
            Eine Datenklasse hat somit finale Attribute und Getter.
          </p>
        </section>
        <section>
          <h2>Beispiel Datenklasse Dog I</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  ' final String name;\n' +
                  ' final int age;\n' +
                  '\n' +
                  ' public Dog(String name, int age) {\n' +
                  '  this.name = name;\n' +
                  '  this.age = age;\n' +
                  ' }\n' +
                  '\n' +
                  ' public String getName() {\n' +
                  '  return name;\n' +
                  ' }\n' +
                  '// ...\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Beispiel Datenklasse Dog II</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '// ...\n' +
                  ' public int getAge() {\n' +
                  '  return age;\n' +
                  ' }\n' +
                  '// weitere Methoden siehe Doku\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Beispiel Record Dog</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'public record Dog(String name, int age) {}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Record</h2>
          <p className="fragment">
            Da ein Record von der Record-Klasse erbt, kann nicht von einer
            anderen Klasse geerbt werden.
          </p>
          <p className="fragment">
            Ein Record kann jedoch weitere Methoden haben und beliebig viele
            Schnittstellen implementieren.
          </p>
        </section>
        <section>
          <h2>Record - Gratis Methoden</h2>
          <ul>
            <li className="fragment">Konstruktor</li>
            <li className="fragment">Getter</li>
            <li className="fragment">Equals</li>
            <li className="fragment">hashCode</li>
            <li className="fragment">toString</li>
          </ul>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">Cat Klasse</li>
            <li className="fragment">Dog Record</li>
            <li className="fragment">height - Attribut</li>
            <li className="fragment">isBig - Methode Record</li>
          </ul>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Optionals</h2>
        </section>
        <section>
          <h2>Optional - Klasse</h2>
          <p className="fragment">
            Mit Hilfe der Optional Klasse kann man NullPointerExceptions einfach
            behandeln.
          </p>
          <p className="fragment">Was sind NullPointerExceptions?</p>
        </section>
        <section>
          <h2>Null Pointer Exception I</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  ' public String name;\n' +
                  ' public Dog(String name) {\n' +
                  '  this.name = name;\n' +
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Null Pointer Exception II</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Dog doggo = new Dog(null);\n' +
                  '    doggo.name.equals("Bello"); // funktioniert nicht\n' +
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Optional als Lösung</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Dog {\n' +
                  ' public Optional&lt;String&gt; name;\n' +
                  ' public Dog(String name) {\n' +
                  '  this.name = Optional.ofNullable(name);\n' +
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Optional - Wrapper um den echten Wert</h2>
          <p className="fragment">
            Die Optional Klasse verpackt den echten Wert hinter Methoden.
          </p>
          <p className="fragment">
            Mithilfe von Methoden kann überprüft werden, ob ein Wert Null ist
            oder nicht.
          </p>
          <p className="fragment">
            Mit Lambdafunktionen kann abhängig von der Präsenz des Wertes
            unterschiedliche Logik ausgeführt werden.
          </p>
        </section>
        <section>
          <h2>Optional - Methoden I</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Optional&lt;String&gt; name = Name.createName();\n' +
                  '    if(name.isPresent()) {\n' +
                  '      System.out.println(name.get());\n' +
                  '    }\n' +
                  '    if(name.isEmpty()) {\n' +
                  '      System.out.println("No Name");\n' +
                  '    }\n' +
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Optional - Methoden II</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Optional&lt;String&gt; name = Name.createName();\n' +
                  '    name.ifPresent((value) -> System.out.println(value));\n' +
                  '    name.ifPresentOrElse(\n' +
                  '      (value) -> System.out.println(value),\n' +
                  '      () -> System.out.println("No Name")\n' +
                  '    );\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">Human Middlename</li>
            <li className="fragment">University Search Student</li>
          </ul>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
      </section>
      <section>
        <h2>Rest of the Day</h2>
        <ul>
          <li className="fragment">Wiederholung Java I</li>
          <li className="fragment">Innere Klassen</li>
        </ul>
      </section>
    </Slides>
  );
}
