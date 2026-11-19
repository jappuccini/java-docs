import Link from '@docusaurus/Link';
import ActivityDiagram from '@site/static/img/activity-diagram-example.svg';
import ClassDiagram from '@site/static/img/class-diagram-example.svg';
import ClassRelationships from '@site/static/img/class-relationships.svg';
import Slides from '../../../../components/Slides';
import { NKR } from '../../../../components/Slides/nkr';

function Diagram({
  source: Source,
  caption,
}: {
  source: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  caption: string;
}): React.JSX.Element {
  return (
    <div>
      <Source style={{ display: 'block', width: '100%', height: 'auto' }} />
      <p className="label">{caption}</p>
    </div>
  );
}

export default function JavaApiEnumUml(): React.JSX.Element {
  return (
    <Slides title="Java API, Enum und UML">
      <section>
        <section className="cover">
          <p className="kicker">Grundlagen der Programmierung</p>
          <h1>Java API, Enum und UML</h1>
          <p>
            final Modifier, Enumerationen und UML-Diagramme verstehen und
            anwenden.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Java API</li>
            <li className="fragment">final Modifier</li>
            <li className="fragment">Enumeration</li>
            <li className="fragment">UML-Diagramme</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>

      <section data-topic="Wiederholung">
        <section className="divider">
          <p className="kicker">Rückblick</p>
          <h2>Wiederholung</h2>
          <p>Klasse, Objekt, Modifier, Konstruktor und static im Überblick.</p>
        </section>

        <section>
          <h2>Klasse und Objekt</h2>
          <div className="two-column">
            <div>
              <h3>Klasse</h3>
              <ul>
                <li className="fragment">Bauplan für Objekte</li>
                <li className="fragment">definiert Attribute und Methoden</li>
              </ul>
            </div>
            <div>
              <h3>Objekt</h3>
              <ul>
                <li className="fragment">Instanz einer Klasse</li>
                <li className="fragment">konkrete Werte für Attribute</li>
                <li className="fragment">konkretes Verhalten der Methoden</li>
                <li className="fragment">
                  über eine Referenzvariable angesprochen
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Modifier</h2>
          <ul>
            <li className="fragment">
              <code>public</code> und <code>private</code> steuern den Zugriff.
            </li>
            <li className="fragment">
              Getter und Setter kontrollieren Attribute.
            </li>
            <li className="fragment">
              <code>this</code> unterscheidet Parameter und Attribut.
            </li>
            <li className="fragment">
              Überladen: gleicher Methodenname, andere Parameter.
            </li>
          </ul>
        </section>

        <section>
          <h2>Konstruktor</h2>
          <ul>
            <li className="fragment">initialisiert ein Objekt</li>
            <li className="fragment">trägt den Namen der Klasse</li>
            <li className="fragment">kann überladen werden</li>
            <li className="fragment">
              wird mit <code>new</code> aufgerufen
            </li>
          </ul>
        </section>

        <section>
          <h2>static</h2>
          <ul>
            <li className="fragment">gehört zur Klasse, nicht zum Objekt</li>
            <li className="fragment">
              Zugriff über den Klassennamen, z. B. <code>Math.PI</code>
            </li>
            <li className="fragment">
              statische Methoden haben keinen Zugriff auf Instanzattribute
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Java API">
        <section className="divider">
          <p className="kicker">Standardbibliothek</p>
          <h2>Java API</h2>
          <p>
            Die Java API ist eine Standardbibliothek mit fertigen Klassen und
            Methoden für häufige Programmieraufgaben.
          </p>
        </section>

        <section>
          <h2>Wrapper-Klassen</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public static void main(String[] args) {\n' +
                  '  Integer i = Integer.valueOf("631");\n' +
                  '  System.out.println(i); // 631\n' +
                  '  Boolean b = Boolean.logicalXor(true, false);\n' +
                  '  System.out.println(b); // true\n' +
                  "  Character c = Character.toUpperCase('m');\n" +
                  "  System.out.println(c); // 'M'\n" +
                  '}',
              }}
            ></code>
          </pre>
          <p className="font-medium">
            Wrapper-Klassen verpacken primitive Werte in Objekte.
          </p>
        </section>

        <section>
          <h2>Datums- und Zeitangaben</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers
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
          <p className="font-medium">
            <code>LocalDateTime</code> liefert Jahr, Monat und Tag der aktuellen
            Systemzeit.
          </p>
        </section>

        <section>
          <h2>Dateien lesen*</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public static void main(String[] args)\n' +
                  '    throws FileNotFoundException {\n' +
                  '  File file = new File("text.txt");\n' +
                  '  Scanner scanner = new Scanner(file);\n' +
                  '  while (scanner.hasNextLine()) {\n' +
                  '    String currentLine = scanner.nextLine();\n' +
                  '    System.out.println(currentLine);\n' +
                  '  }\n' +
                  '  scanner.close();\n' +
                  '}',
              }}
            ></code>
          </pre>
          <p className="font-medium">
            Der <code>Scanner</code> wird nach dem Lesen geschlossen.
          </p>
          <NKR />
        </section>
      </section>

      <section data-topic="final Modifier">
        <section className="divider">
          <p className="kicker">Modifier</p>
          <h2>final Modifier</h2>
          <p>Einmal initialisiert, lässt sich ein Wert nicht mehr ändern.</p>
        </section>

        <section>
          <h2>Wo kann final verwendet werden?</h2>
          <ul>
            <li className="fragment">Klassen (später)</li>
            <li className="fragment">Methoden (später)</li>
            <li className="fragment">Attribute</li>
            <li className="fragment">Variablen</li>
          </ul>
          <p className="font-medium">
            Klassen und Methoden folgen in der Einheit zu Vererbung.
          </p>
        </section>

        <section>
          <h2>Was bewirkt final?</h2>
          <ul>
            <li className="fragment">Zuweisung nur einmal möglich</li>
            <li className="fragment">bei Attributen nur im Konstruktor</li>
            <li className="fragment">danach keine Änderung mehr</li>
          </ul>
        </section>

        <section>
          <h2>Beispiel: finale Attribute</h2>
          <pre style={{ fontSize: '20px' }}>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public class Human {\n' +
                  '  private final char gender;\n' +
                  '\n' +
                  '  public Human(char gender) {\n' +
                  '    this.gender = gender; // erlaubt\n' +
                  '  }\n' +
                  '\n' +
                  '  public void setGender(char gender) {\n' +
                  '    this.gender = gender; // Kompilierungsfehler\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">
              <code>final</code> Attribute werden bei der Deklaration oder im
              Konstruktor initialisiert.
            </li>
            <li className="fragment">
              Eine erneute Zuweisung ist ein Kompilierungsfehler.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java1/finalmodifier">
              Demo: final Modifier
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              <code>gender</code> und <code>firstName</code> als{' '}
              <code>final</code> deklarieren.
            </li>
            <li className="fragment">
              Setter mit erneuter Zuweisung ergänzen und den Kompilierungsfehler
              zeigen.
            </li>
            <li className="fragment">
              Referenzvariable <code>Human</code> als <code>final</code>{' '}
              deklarieren und neu zuweisen.
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Enumeration">
        <section className="divider">
          <p className="kicker">Aufzählungen</p>
          <h2>Enumeration</h2>
          <p>Feste Mengen benannter Konstanten als eigener Typ.</p>
        </section>

        <section>
          <h2>Was ist eine Enumeration?</h2>
          <div className="callout">
            <span className="callout-title">Definition</span>
            <p>
              Eine Enumeration ist eine spezielle Klasse mit einer festen,
              endlichen Anzahl an Instanzen.
            </p>
          </div>
          <ul>
            <li className="fragment">
              Geschlecht: <code>MALE</code>, <code>FEMALE</code>,{' '}
              <code>DIVERSE</code>
            </li>
            <li className="fragment">
              Motorart: <code>BENZIN</code>, <code>DIESEL</code>,{' '}
              <code>ELEKTRO</code>
            </li>
            <li className="fragment">
              Genre: <code>ACTION</code>, <code>HORROR</code>,{' '}
              <code>ROMANZE</code>
            </li>
            <li className="fragment">
              Ampel: <code>ROT</code>, <code>GELB</code>, <code>GRUEN</code>
            </li>
          </ul>
        </section>

        <section>
          <h2>Von der Klasse zur Enumeration</h2>
          <ul>
            <li className="fragment">Welche Konstanten gibt es?</li>
            <li className="fragment">Welche Attribute haben sie?</li>
            <li className="fragment">Wie werden die Instanzen erzeugt?</li>
            <li className="fragment">
              Wie kann eine Instanz wiederverwendet werden?
            </li>
            <li className="fragment">
              Wie lassen sich weitere Instanzen verhindern?
            </li>
            <li className="fragment">
              Wie lässt sich eine Veränderung verhindern?
            </li>
          </ul>
        </section>

        <section>
          <h2>Geht das nicht einfacher?</h2>
          <ul>
            <li className="fragment">
              <code>enum</code> statt <code>class</code>
            </li>
            <li className="fragment">Konstanten kommagetrennt festlegen</li>
            <li className="fragment">
              Access Modifier am Konstruktor optional
            </li>
          </ul>
        </section>

        <section>
          <h2>Beispiel: enum Gender</h2>
          <pre style={{ fontSize: '20px' }}>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public enum Gender {\n' +
                  '  MALE("m"),\n' +
                  '  FEMALE("f"),\n' +
                  '  DIVERSE("d");\n' +
                  '\n' +
                  '  private final String label;\n' +
                  '\n' +
                  '  Gender(String label) {\n' +
                  '    this.label = label;\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">
              Der Konstruktor ist implizit <code>private</code>.
            </li>
            <li className="fragment">
              Die Konstanten sind die einzigen Instanzen.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java1/enums">
              Demo: Enumeration
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              <code>Human</code> mit <code>Gender</code>-Attribut
            </li>
            <li className="fragment">
              <code>switch</code> in <code>printGender()</code>
            </li>
            <li className="fragment">
              <code>values()</code> und <code>ordinal()</code>
            </li>
            <li className="fragment">
              <code>isBinary</code>
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Klassendiagramm">
        <section className="divider">
          <p className="kicker">UML</p>
          <h2>Klassendiagramm</h2>
          <p>Klassen, Attribute und Methoden grafisch dokumentieren.</p>
        </section>

        <section>
          <h2>Was sind Klassendiagramme?</h2>
          <ul>
            <li className="fragment">Diagrammtyp der UML</li>
            <li className="fragment">gehört zu den Strukturdiagrammen</li>
            <li className="fragment">
              visualisiert Klassen und ihre Beziehungen
            </li>
          </ul>
        </section>

        <section>
          <h2>Aufbau einer Klasse</h2>
          <Diagram source={ClassDiagram} caption="Beispiel: Klasse Person" />
        </section>

        <section>
          <h2>Access Modifier</h2>
          <table style={{ fontSize: '0.8em' }}>
            <thead>
              <tr>
                <th>Sichtbarkeit</th>
                <th>Symbol</th>
                <th>Bedeutung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>public</td>
                <td>
                  <code>+</code>
                </td>
                <td>von überall</td>
              </tr>
              <tr className="fragment">
                <td>private</td>
                <td>
                  <code>-</code>
                </td>
                <td>nur in der Klasse</td>
              </tr>
              <tr className="fragment">
                <td>protected</td>
                <td>
                  <code>#</code>
                </td>
                <td>Klasse und Unterklassen</td>
              </tr>
              <tr className="fragment">
                <td>packaged*</td>
                <td>
                  <code>~</code>
                </td>
                <td>nur im gleichen Paket</td>
              </tr>
            </tbody>
          </table>
          <div className="fragment">
            <NKR />
          </div>
        </section>

        <section>
          <h2>Attribute und Methoden</h2>
          <div className="two-column">
            <div>
              <h3>Attribute</h3>
              <ul>
                <li className="fragment">
                  <code>[Sichtbarkeit] name: Typ</code>
                </li>
                <li className="fragment">
                  <code>-name: String</code>
                </li>
                <li className="fragment">
                  <code>-age: int = 0</code>
                </li>
                <li className="fragment">
                  <code>-gender: char &#123;final&#125;</code>
                </li>
              </ul>
            </div>
            <div>
              <h3>Methoden</h3>
              <ul>
                <li className="fragment">
                  <code>[Sichtbarkeit] name(): Typ</code>
                </li>
                <li className="fragment">
                  <code>+name() String</code>
                </li>
                <li className="fragment">
                  <code>+setAge(age: int) void</code>
                </li>
                <li className="fragment">
                  <code>+getNumberOfPersons() int</code>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Weitere Modifier</h2>
          <ul>
            <li className="fragment">
              Unterstrichene Attribute und Methoden sind <code>static</code>.
            </li>
            <li className="fragment">
              <code>&#123;final&#125;</code> kennzeichnet finale Attribute und
              Methoden.
            </li>
            <li className="fragment">
              <code>&#123;abstract&#125;</code> kennzeichnet abstrakte Methoden.
            </li>
            <li className="fragment">
              Eigenschaften stehen in geschweiften Klammern.
            </li>
          </ul>
        </section>

        <section>
          <h2>Stereotypen</h2>
          <p>Stereotypen kennzeichnen spezielle Klassen im Klassendiagramm.</p>
          <table>
            <thead>
              <tr>
                <th>Stereotyp</th>
                <th>Bedeutung</th>
                <th>Behandlung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>
                  <code>&lt;&lt;enumeration&gt;&gt;</code>
                </td>
                <td>Aufzählung</td>
                <td>jetzt</td>
              </tr>
              <tr className="fragment">
                <td>
                  <code>&lt;&lt;interface&gt;&gt;</code>
                </td>
                <td>Schnittstelle</td>
                <td>später</td>
              </tr>
              <tr className="fragment">
                <td>
                  <code>&lt;&lt;abstract&gt;&gt;</code>
                </td>
                <td>abstrakte Klasse</td>
                <td>später</td>
              </tr>
              <tr className="fragment">
                <td>
                  <code>&lt;&lt;final&gt;&gt;</code>
                </td>
                <td>finale Klasse</td>
                <td>später</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>

      <section data-topic="Beziehungen zwischen Klassen">
        <section className="divider">
          <p className="kicker">UML</p>
          <h2>Beziehungen zwischen Klassen</h2>
          <p>Wie Klassen miteinander verbunden sind.</p>
        </section>

        <section>
          <h2>Beziehungen im Überblick</h2>
          <table>
            <thead>
              <tr>
                <th>Beziehung</th>
                <th>Notation</th>
                <th>Bedeutung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>Assoziation</td>
                <td>
                  <code>--&gt;</code>
                </td>
                <td>verwendet eine andere Klasse</td>
              </tr>
              <tr className="fragment">
                <td>Aggregation</td>
                <td>
                  <code>--o</code>
                </td>
                <td>Teil-Ganzes, Teile können allein existieren</td>
              </tr>
              <tr className="fragment">
                <td>Komposition*</td>
                <td>
                  <code>--*</code>
                </td>
                <td>Teil-Ganzes, Teile hängen vom Ganzen ab</td>
              </tr>
            </tbody>
          </table>
          <div className="fragment">
            <NKR />
          </div>
        </section>

        <section>
          <h2>Beispiele</h2>
          <Diagram
            source={ClassRelationships}
            caption="Assoziation, Aggregation und Komposition"
          />
        </section>
      </section>

      <section data-topic="Aktivitätsdiagramm">
        <section className="divider">
          <p className="kicker">UML</p>
          <h2>Aktivitätsdiagramm*</h2>
          <p>
            Abläufe mit Aktionen, Entscheidungen und Kontrollfluss modellieren.
          </p>
          <NKR />
        </section>

        <section>
          <h2>Was sind Aktivitätsdiagramme?</h2>
          <div className="two-column">
            <div>
              <ul>
                <li className="fragment">Diagrammtyp der UML</li>
                <li className="fragment">gehört zu den Verhaltensdiagrammen</li>
                <li className="fragment">
                  modelliert den Ablauf von Aktivitäten
                </li>
                <li className="fragment">Fokus auf Kontroll- und Datenfluss</li>
              </ul>
            </div>
            <Diagram
              source={ActivityDiagram}
              caption="Beispiel: Division mit Eingabeprüfung"
            />
          </div>
        </section>
      </section>

      <section data-topic="Zusammenfassung">
        <section className="divider">
          <p className="kicker">Abschluss</p>
          <h2>Zusammenfassung</h2>
          <p>Java API, final, Enumeration und UML im Rückblick.</p>
        </section>

        <section>
          <h2>Java API</h2>
          <ul>
            <li className="fragment">
              Standardbibliothek mit fertigen Klassen und Methoden
            </li>
            <li className="fragment">
              Wrapper-Klassen verpacken primitive Werte
            </li>
            <li className="fragment">
              <code>LocalDateTime</code> liefert Datum und Zeit
            </li>
            <li className="fragment">
              <code>File</code> und <code>Scanner</code> lesen Dateien
            </li>
          </ul>
        </section>

        <section>
          <h2>final</h2>
          <ul>
            <li className="fragment">
              Attribute und Variablen nur einmal zuweisbar
            </li>
            <li className="fragment">
              Attribute werden bei der Deklaration oder im Konstruktor
              initialisiert
            </li>
            <li className="fragment">
              Klassen und Methoden folgen in der Vererbungseinheit
            </li>
          </ul>
        </section>

        <section>
          <h2>Enumeration</h2>
          <ul>
            <li className="fragment">feste Menge benannter Konstanten</li>
            <li className="fragment">
              spezielle Klasse mit begrenzter Anzahl an Instanzen
            </li>
            <li className="fragment">
              Konstruktor ist implizit <code>private</code>
            </li>
            <li className="fragment">
              <code>values()</code> und <code>ordinal()</code> liefern alle
              Konstanten und ihre Position
            </li>
          </ul>
        </section>

        <section>
          <h2>Klassendiagramm</h2>
          <ul>
            <li className="fragment">
              zeigt Klassen mit Attributen und Methoden
            </li>
            <li className="fragment">
              <code>+ - # ~</code> stehen für die Access Modifier
            </li>
            <li className="fragment">
              <code>static</code> unterstrichen, <code>final</code> als{' '}
              <code>&#123;final&#125;</code>
            </li>
            <li className="fragment">
              Assoziation, Aggregation und Komposition beschreiben Beziehungen
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Rest of the Day">
        <section>
          <h2>Rest of the Day</h2>
          <ul>
            <li className="fragment">
              <Link to="/exercises/java-api">Java API</Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/enumerations">Enumerations</Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/class-diagrams">Class Diagrams</Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/activity-diagrams">
                Activity Diagrams (optional)
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
