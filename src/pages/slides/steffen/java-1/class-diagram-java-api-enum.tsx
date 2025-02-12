import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { NKR } from '../../../../components/Slides/nkr';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function KlassdiagramJavaAPIEnum(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Java API</li>
            <li className="fragment">final Modifier</li>
            <li className="fragment">Enumeration</li>
            <li className="fragment">Klassendiagramm</li>
            <li className="fragment">Aktivitätsdiagramm</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
        </section>
        <section>
          <h2>Klasse</h2>
          <ul>
            <li className="fragment">Abstraktion von Objekten</li>
            <li className="fragment">definiert durch Methoden und Attribute</li>
          </ul>
        </section>
        <section>
          <h2>Objekt</h2>
          <ul>
            <li className="fragment">Instanz einer Klasse</li>
            <li className="fragment">Verhalten abhängig von der Instanz</li>
            <li className="fragment">ist eine Referenzvariable</li>
            <li className="fragment">hat den default Wert null</li>
          </ul>
        </section>
        <section>
          <h2>Modifiers</h2>
          <ul>
            <li className="fragment">public & private</li>
            <li className="fragment">Getter und Setter</li>
            <li className="fragment">this</li>
            <li className="fragment">Überladen von Methoden</li>
            <li className="fragment">Konstruktor</li>
            <li className="fragment">static</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Java API</h2>
        </section>
        <section>
          <h2>Wrapper Klassen</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public static void main(String[] args) {\n' +
                  '  Integer i = Integer.valueOf("631");\n' +
                  '  System.out.println(i) // 631;\n' +
                  '  Boolean b = Boolean.logicalXor(true, false);\n' +
                  '  System.out.println(b) // true\n' +
                  "  Character c = Character.toUpperCase('m');\n" +
                  "  System.out.println(c) // 'M'\n" +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Datums- und Zeitangaben</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public static void main(String[] args) {\n' +
                  '  LocalDateTime now = LocalDateTime.now();\n' +
                  '  System.out.println("Jahr: " + now.getYear());\n' +
                  '  System.out.println("Monat: " + now.getMonth());\n' +
                  '  System.out.println("Tag: " + now.getDayOfMonth());\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Dateien lesen*</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public static void main(String[] args) {\n' +
                  '  File file = new File("text.txt");\n' +
                  '  Scanner scanner = new Scanner(file);\n' +
                  '  while(scanner.hasNextLine()) {\n' +
                  '    String currentLine = scanner.nextLine();\n' +
                  '    System.out.println(currentLine);\n' +
                  '  }\n' +
                  '  scanner.close();\n' +
                  '}',
              }}
            ></code>
          </pre>
          <NKR />
        </section>
      </section>
      <section>
        <section>
          <h2>final Modifier</h2>
        </section>
        <section>
          <h2>Kann angewendet werden auf</h2>
          <ul>
            <li className="fragment">Klassen (wird später behandelt)</li>
            <li className="fragment">Methoden (wird später behandelt)</li>
            <li className="fragment">Attribute</li>
            <li className="fragment">Variablen</li>
          </ul>
        </section>
        <section>
          <h2>Was bewirkt der final modifier?</h2>
          <ul>
            <li className="fragment">Zuweisung nur einmal möglich</li>
            <li className="fragment">bei Attributen nur im Konstruktor</li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/finalmodifier">
              Demo - final Modifier
            </Link>
          </h2>
          <ul>
            <li className="fragment">char gender</li>
            <li className="fragment">String firstName</li>
            <li className="fragment">Reference variable Human</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Enumeration</h2>
        </section>
        <section>
          <h2>Was ist eine Enumeration?</h2>
          <p className="fragment">Gruppe von Konstanten</p>
          <ul>
            <li className="fragment">Geschlecht (Male, Female, Divers)</li>
            <li className="fragment">Motorart (Benzin, Diesel, Elektro)</li>
            <li className="fragment">Genre (Action, Horror, Romanze)</li>
            <li className="fragment">USK (0, 6, 12, 16, 18)</li>
          </ul>
        </section>
        <section>
          <h2>Enumeration implementieren</h2>
          <ul>
            <li className="fragment">Welche Geschlechter?</li>
            <li className="fragment">Welche Attribute?</li>
            <li className="fragment">
              Wie kann immer das <b>eine</b> Geschlecht verwendet werden?
            </li>
            <li className="fragment">
              Wie keine weiteren Geschlechtinstanzen zulassen?
            </li>
            <li className="fragment">
              Wie die Manipulation existierender Geschlechtsinstanzen
              verhindern?
            </li>
          </ul>
        </section>
        <section>
          <h2>Geht das nicht einfacher?</h2>
          <ul>
            <li className="fragment">enum anstatt class</li>
            <li className="fragment">Konstanten kommagetrennt festlegen</li>
            <li className="fragment">access modifier Konstruktor optional</li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/enums">
              Demo - Enumeration
            </Link>
          </h2>
          <ul>
            <li className="fragment">Human with Gender property</li>
            <li className="fragment">switch - printGender</li>
            <li className="fragment">isBinary</li>
            <li className="fragment">values & ordinal</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Klassendiagramm</h2>
        </section>
        <section>
          <h2>Was sind Klassendiagramme?</h2>
          <ul>
            <li className="fragment">Diagrammtyp der UML</li>
            <li className="fragment">visualisiert Klassen</li>
            <li className="fragment">und deren Beziehungen</li>
          </ul>
        </section>
        <section>
          <img
            height={'400px'}
            src={require('@site/static/img/class-diagram-example.png').default}
          />
        </section>
        <section>
          <h2>Bereiche</h2>
          <ul>
            <li className="fragment">Klassenname</li>
            <li className="fragment">Attribute</li>
            <li className="fragment">Methoden</li>
          </ul>
        </section>
        <section>
          <h2>Access Modifier</h2>
          <ul>
            <li className="fragment">
              <strong>+</strong> entspricht public
            </li>
            <li className="fragment">
              <strong>-</strong> entspricht private
            </li>
            <li className="fragment">
              <strong>#</strong> entspricht protected
            </li>
            <li className="fragment">
              <strong>~</strong> entspricht packaged *
            </li>
          </ul>
          <div className="fragment">
            <NKR />
          </div>
        </section>
        <section>
          <h2>andere Modifier</h2>
          <ul>
            <li className="fragment">
              unterstrichene Attribute und Methoden sind static
            </li>
            <li className="fragment">
              weitere Merkmale durch geschweifte Klammern{' '}
            </li>
          </ul>
        </section>
        <section>
          <h2>Methoden</h2>
          <ul>
            <li className="fragment">
              Modifier - Bezeichner - Parameter - Rückgabetyp
            </li>
          </ul>
        </section>
        <section>
          <h2>Attribute</h2>
          <ul>
            <li className="fragment">
              Modifier - Bezeichner - Rückgabetyp - Anfangswert
            </li>
          </ul>
        </section>
        <section>
          <h2>Stereotypen</h2>
          <ul>
            <li className="fragment"> &lt;&lt; enum &gt;&gt;</li>
            <li className="fragment"> &lt;&lt; interface &gt;&gt;</li>
            <li className="fragment"> &lt;&lt; exception &gt;&gt;</li>
          </ul>
        </section>
        <section>
          <h2>Beziehungen zwischen Klassen</h2>
          <ul>
            <li className="fragment">Assoziation</li>
            <li className="fragment">Aggregation</li>
            <li className="fragment">Kompositon*</li>
          </ul>
          <div className="fragment">
            <NKR />
          </div>
        </section>
      </section>
      <section>
        <section>
          <h2>Aktivitätsdiagramm*</h2>
          <NKR />
        </section>
        <section>
          <h2>Was sind Aktivitätsdiagramme?</h2>
          <ul>
            <li className="fragment">Diagrammtyp der UML</li>
            <li className="fragment">visualisiert Verhalten</li>
          </ul>
        </section>
        <section>
          <img
            height={'400px'}
            src={
              require('@site/static/img/activity-diagram-example.png').default
            }
          />
        </section>
      </section>
      <section>
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li className="fragment">Java API</li>
            <li className="fragment">final modifier</li>
            <li className="fragment">Enumerations</li>
            <li className="fragment">Klassendiagramme</li>
            <li className="fragment">Aktivitätsdiagramme</li>
          </ul>
        </section>
        <section>
          <h2>Rest of the day</h2>
          <ul>
            <li className="fragment">
              <Link to="/exercises/java-api">Java API</Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/enumerations">Enumerations</Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/activity-diagrams">Activity Diagrams</Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/class-diagrams">Class Diagrams</Link>
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
