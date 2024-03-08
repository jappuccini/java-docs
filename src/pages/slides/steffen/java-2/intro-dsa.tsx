import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';
import { NKR } from '../../../../components/Slides/nkr';

export default function IntroDsa(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Algorithmen und Datenstrukturen (DSA)</h2>
        </section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Intro</li>
            <li className="fragment">Set</li>
            <li className="fragment">Map</li>
            <li className="fragment">Hashing</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Intro</h2>
        </section>
        <section>
          <h2>Was ist ein Algorithmus?</h2>
          <p className="fragment">
            systematische Vorgehensweise zur Lösung eines Problems
          </p>
        </section>
        <section>
          <h2>Charakteristika</h2>
          <ul>
            <li
              tabIndex={0}
              data-tooltip="Das Verfahren muss in einem endlichen Text eindeutig beschreibbar sein."
            >
              Finitheit
            </li>
            <li
              tabIndex={0}
              data-tooltip="Jeder Schritt des Verfahrens muss tatsächlich ausführbar sein."
            >
              Ausführbarkeit
            </li>
            <li
              tabIndex={0}
              data-tooltip="Das Verfahren darf zu jedem Zeitpunkt nur endlich viel Speicherplatz benötigen. (Space Complexity)"
            >
              Dynamische Finitheit
            </li>
            <li
              tabIndex={0}
              data-tooltip="Das Verfahren darf nur endlich viele Schritte benötigen. (Time Complexity)"
            >
              Terminierung
            </li>
            <li
              tabIndex={0}
              data-tooltip="Der Algorithmus muss bei denselben Voraussetzungen das gleiche Ergebnis liefern."
            >
              Determiniertheit
            </li>
            <li
              tabIndex={0}
              data-tooltip="Die nächste anzuwendende Regel im Verfahren ist zu jedem Zeitpunkt eindeutig definiert."
            >
              Determinismus
            </li>
          </ul>
        </section>
        <section>
          <h2>Was ist eine Datenstruktur?</h2>
          <p className="fragment">
            spezifische Anordung von Daten zur effizienten Verwaltung eines
            Problems
          </p>
        </section>
        <section>
          <h2>Charakteristika</h2>
          <ul>
            <li
              tabIndex={0}
              data-tooltip="Die Größe wird zu Beginn einmalig festgelegt."
            >
              statisch
            </li>
            <li tabIndex={0} data-tooltip="Die Größe ist veränderbar.">
              dynamisch
            </li>
          </ul>
        </section>
        <section>
          <h2>Kann man Datenstrukturen und Algorithmen trennen?</h2>
          <p className="fragment">Nein nur die Kombination bringt etwas.</p>
          <p className="fragment">
            Was bringt ein Array ohne (über)schreiben und lesen?
          </p>
          <p className="fragment">Was bringt eine for-Schleife ohne Array?</p>
        </section>
        <section>
          <h2>Unsere Definition von DSA</h2>
          <p className="fragment">
            Ein Algorithmus (A) erzeugt, manipuliert und entfernt eine oder
            mehrere Datenstrukturen(DS) um ein spezifisches Problem effizient zu
            lösen.
          </p>
        </section>
      </section>
      <section>
        <section>
          <h2>Set</h2>
        </section>
        <section>
          <h2>Konzept</h2>
          <ul>
            <li className="fragment">Speichert Mengen</li>
            <li className="fragment">Vereinigung (Union)</li>
            <li className="fragment">Durchschnitt (Intersection)</li>
            <li className="fragment">Differenz (Difference)</li>
          </ul>
        </section>
        <section>
          <h2>HashSet</h2>
          <p>implementiert das Set interface</p>
        </section>
        <section>
          <h2>Demo - HashSet</h2>
          <ul>
            <li className="fragment">Mengen erstellen (1-4) und (2,3,5)</li>
            <li className="fragment">Vereinigung (Union)</li>
            <li className="fragment">Durchschnitt (Intersection)</li>
            <li className="fragment">Differenz (Difference)</li>
          </ul>
        </section>
        <section>
          <h2>Map</h2>
        </section>
        <section>
          <h2>Konzept</h2>
          <ul>
            <li className="fragment">
              Speichert Werte nach einem Schlüssel ab
            </li>
          </ul>
        </section>
        <section>
          <h2>HashMap</h2>
          <p>implementiert das Map interface</p>
        </section>
        <section>
          <h2>Demo - HashMap</h2>
          <ul>
            <li className="fragment">Map erstellen</li>
            <li className="fragment">Hinzufügen/Löschen</li>
            <li className="fragment">Quellcode HashSet (uses HashMap)</li>
          </ul>
        </section>
        <section>
          <h2>Map</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface Function&lt;T, R&gt; {\n' +
                  '  public R apply(T t);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface BiFunction&lt;T, U, R&gt; {\n' +
                  '  public R apply(T t, U u);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface UnaryOperator&lt;T&gt; {\n' +
                  '  public T apply(T t);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface BinaryOperator&lt;T&gt; {\n' +
                  '  public T apply(T t1, T t2);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">Code ausführen, der Daten zurückgibt.</p>
        </section>
        <section>
          <h2>Predicate</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface Predicate&lt;T&gt; {\n' +
                  '  public boolean test(T t);\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Code ausführen, der true oder false zurückgibt.
          </p>
        </section>
        <section>
          <h2>Supplier</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public interface Supplier&lt;T&gt; {\n' +
                  '  public T get();\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Code ausführen, der Daten vom Typ T zurückgibt.
          </p>
          <NKR />
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
        <section>
          <h2>Demo Lambda Funktionen Auslagern</h2>
          <ul>
            <li className="fragment">Attribut: minimumFirstName</li>
            <li className="fragment">Attribut: olderThan24Years</li>
            <li className="fragment">Attribut: toFullName</li>
            <li className="fragment">Methode: olderThanYears</li>
            <li className="fragment">Methode: fullNameIsLongerThan</li>
          </ul>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Methodenreferenzen</h2>
        </section>
        <section>
          <h2>Warum Methodenreferenzen?</h2>
          <p className="fragment">
            Mit Methodenreferenzen kann man noch weniger Code schreiben.
          </p>
          <p className="fragment">
            Hat ein Parameter die gleiche Signatur, wie eine Methode, kann diese
            Methode als Methodenreferenz übergeben werden.
          </p>
        </section>
        <section>
          <h2>Beispiel ArrayList</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;()\n' +
                  '    \n' +
                  '    // lambda funktion\n' +
                  '    names.forEach((name) -&gt System.out.println(name));\n' +
                  '    \n' +
                  '    // methodenreferenz\n' +
                  '    names.forEach(System.out::println);\n' +
                  ' }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Verwenden von Methodenreferenzen?</h2>
          <p className="fragment">
            Anstatt die Methode über einen Punkt aufzurufen, wird ein zweifacher
            Doppelpunkt verwendet.
          </p>
          <p className="fragment">
            Mit dem "new" nach dem zweifachen Doppelpunkt kann auch der
            Konstruktor einer Klasse referenziert werden.
          </p>
          <NKR />
        </section>
        <section>
          <h2>Demo Methodenreferenzen</h2>
          <ul>
            <li className="fragment">Methodensignatur Sysout</li>
            <li className="fragment">OneTimePrinter</li>
          </ul>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
        <section>
          <h2>Demo Composed Lambdas</h2>
          <NKR />
        </section>
      </section>
      <section>
        <section>
          <h2>Java Stream API</h2>
        </section>
        <section>
          <h2>Was is eine Stream Pipeline</h2>
          <pre>
            <code
              data-line-numbers="5-9|5|6-8|9"
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;()\n' +
                  '    \n' +
                  '    names.stream() // source\n' +
                  '      .filter(name -&gt; name.length > 4) //inter-\n' +
                  '      .map(name -&gt; name.toUpperCase()) //mediate\n' +
                  '      .limit(12)                      //operations\n' +
                  '      .forEach(System.out::println) // terminal operation\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h4>Charakteristika einer Stream Pipeline</h4>
          <ul>
            <li className="fragment">Intermediate Operations sind optional</li>
            <li className="fragment">Terminal Operation ist erforderlich</li>
            <li className="fragment">
              Terminal Operation führt die Pipeline aus
            </li>
            <li className="fragment">
              Pipeline kann nur einmal genutzt werden
            </li>
          </ul>
        </section>
        <section>
          <h2>Demo Stream API</h2>
          <ul>
            <li className="fragment">Intermediate Optional</li>
            <li className="fragment">
              Terminal erforderlich, sonst passiert nichts
            </li>
            <li className="fragment">Pipeline nur einmal Nutzbar</li>
            <li className="fragment">Intermediate Reihenfolge</li>
          </ul>
        </section>
        <section>
          <h2>Aufbau einer Pipeline</h2>
          <ul>
            <li className="fragment">Quelle</li>
            <li className="fragment">Intermediate Operations</li>
            <li className="fragment">Terminal Operations</li>
          </ul>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Quellen</h2>
        </section>
        <section>
          <h2>Erzeugen von Quellen I</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    // Collection.stream(); // interface\n' +
                  '    // &rarr; Klassen die Collection implementieren:\n' +
                  '    ArrayList&lt;Student&gt; students = new ArrayList&lt;&gt;();\n' +
                  '    students.stream();\n' +
                  '    \n' +
                  '    HashMap&lt;String, Student&gt; map = new HashMap&lt;&gt;();\n' +
                  '    map.keySet().stream();\n' +
                  '    map.entrySet().stream();\n' +
                  '    map.values().stream();\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Erzeugen von Quellen II</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    // Array in ein Stream konvertieren:\n' +
                  '    // Arrays.stream(T[])\n' +
                  '    Stream&lt;Integer&gt; num1 = Arrays.stream({ 1, 2, 3, 4 });\n' +
                  '    \n' +
                  '    int[] numArray = { 1, 2, 3, 4 };\n' +
                  '    Stream&lt;Integer&gt; num2 = Arrays.stream(numArray);\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Erzeugen von Quellen III</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    // Gleichartige Werte in ein Stream kovertieren:\n' +
                  '    // Stream.of(T...);\n' +
                  '    Stream&lt;Integer&gt; num1 = Stream.of(1, 2, 3, 4);\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Intermediate Operations</h2>
        </section>
        <section>
          <h2>Intermediate Operations</h2>
          <p>
            sind Methoden eines Streams, die als Rückgabewert einen Stream
            zurückgeben.
          </p>
          <Link to="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/Stream.html">
            Stream Klasse
          </Link>
        </section>
        <section>
          <h2>filter - Methode</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream&lt;T&gt; filter(Predicate&lt;? super T&gt; predicate)',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Der Parameter predicate muss das{' '}
            <Link to="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/function/Predicate.html">
              Predicate Interface
            </Link>{' '}
            implementieren.
          </p>
        </section>
        <section>
          <h2>filter - Verwendung</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .filter(number -> number > 3);\n' +
                  '      // nur 4 bleibt übrig\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>map - Methode</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  '&lt;R&gt; Stream&lt;R&gt; map(Function&lt;? super T,? extends R&gt; mapper)',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Der Parameter mapper muss das{' '}
            <Link to="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/function/Function.html">
              Function Interface
            </Link>{' '}
            implementieren.
          </p>
          <p className="fragment">
            Die Eingabe vom Typ T definiert der vorherige Stream. Der
            Rückgabetyp des mapper Parameters definiert den Rückgabetyp des
            Streams.
          </p>
        </section>
        <section>
          <h2>map - Verwendung</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .map(number -> number * 2);\n' +
                  '    // Rückgabetyp: Stream&lt;Integer&gt;\n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .map(number -> String.valueOf(number));\n' +
                  '    // Rückgabetyp: Stream&lt;String&gt;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>limit - Methode</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'Stream&lt;T&gt; limit(long maxSize)',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Es werden maximal "maxSize" Elemente des vorherigen Streams
            weitergegeben.
          </p>
        </section>
        <section>
          <h2>limit - Verwendung</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .limit(2);\n' +
                  '      // nur 1 & 2 werden weitergegeben\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>skip - Methode</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'Stream&lt;T&gt; skip(long n)',
              }}
            ></code>
          </pre>
          <p className="fragment">Es werden n-Elemente übersprungen.</p>
        </section>
        <section>
          <h2>skip - Verwendung</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .skip(2);\n' +
                  '      // nur 3 & 4 werden weitergegeben\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>sorted - Methode</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream&lt;T&gt; sorted(Comparator&lt;? super T&gt; comparator)',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Der Parameter comparator muss das{' '}
            <Link to="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html">
              Comparator Interface
            </Link>{' '}
            implementieren.
          </p>
        </section>
        <section>
          <h2>sorted - Verwendung</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Stream.of(4, 3, 2, 1)\n' +
                  '      .sorted((n1, n2) -> Integer.compare(n1, n2));\n' +
                  '      // 1, 2, 3, 4\n' +
                  '      // Sagt Bye Bye zu Collections.sort()\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>distinct - Methode</h2>
          <pre className="fragment">
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'Stream&lt;T&gt; distinct()',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Es werden nur einzigartige Werte im Stream beibehalten. Diese werden
            Mithilfe von .equals identifiziert.
          </p>
        </section>
        <section>
          <h2>distinct - Verwendung</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Stream.of(1, 2, 1, 4)\n' +
                  '      .distinct();\n' +
                  '      // nur 1, 2 & 4 werden weitergegeben\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Review von Stream Api Examples</h2>
          <ul>
            <li className="fragment">Student Example ohne Auslagerung</li>
            <li className="fragment">Number Example Limit und Reihenfolge</li>
          </ul>
        </section>
        <section>
          <h2>Von Stream zu Stream</h2>
          <p>
            Intermediate Operations werden auf einem Stream aufgerufen und geben
            immer einen Stream zurück.
          </p>
        </section>
        <section>
          <h2>Frag jetzt!</h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Terminal Operations</h2>
        </section>
        <section>
          <h2>Terminal Operations</h2>
          <ul>
            <li className="fragment">Matching und Suchen</li>
            <li className="fragment">Transformationen</li>
            <li className="fragment">Statistik</li>
            <li className="fragment">Verarbeitung</li>
          </ul>
        </section>
        <section>
          <h2>Matching</h2>
          <p>
            Mit Matching kann abgefragt werden ob bestimmte Elemente einer
            Bedingung entsprechen.
          </p>
        </section>
        <section>
          <h2>Matching - Methoden</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'boolean  allMatch(Predicate&lt;T&gt; predicate) // alle\n' +
                  'boolean noneMatch(Predicate&lt;T&gt; predicate) // keiner\n' +
                  'boolean  anyMatch(Predicate&lt;T&gt; predicate) // mindestens einer\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Matching - Verwendung</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .allMatch(number -> number > 3); // false\n' +
                  '    \n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .noneMatch(number -> number > 4); // true\n' +
                  '    \n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .anyMatch(number -> number > 2); // true\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Suchen</h2>
          <p>
            Mit findAny und findFirst wird das erste Element in einem Stream
            zurückgegeben.
          </p>
        </section>
        <section>
          <h2>Suchen - Methoden</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'Optional&lt;T&gt; findAny() // nicht deterministisch\n' +
                  'Optional&lt;T&gt; findFirst() // deterministisch\n',
              }}
            ></code>
          </pre>
          <p>Hauptsächlich wichtig bei parallelen Streams</p>
        </section>
        <section>
          <h2>Suchen - Verwendung</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .filter(number -> number > 1)\n' +
                  '      .findAny() // 2, 3 oder 4\n' +
                  '    \n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .filter(number -> number > 1)\n' +
                  '      .findFirst() // immer 2\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Transformationen</h2>
          <p>Die Ergebnismenge wird gesammelt.</p>
        </section>
        <section>
          <h2>Transformationen - Methoden</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'List&lt;T&gt; toList()\n' +
                  'T[] toArray()\n' +
                  '\n' +
                  'T reduce(T identity, BinaryOperator&lt;T&gt; accumulator)\n' +
                  '\n' +
                  'R collect(Collector&lt;T,A,R&gt; collector)\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Transformationen - Verwendung I </h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    List&lt;Integer&gt; nums = Stream.of(1, 2, 3, 4)\n' +
                  '      .filter(number -> number > 1)\n' +
                  '      .toList() // List&lt;Integer&gt;\n' +
                  '    \n' +
                  '    Object[] nums2 = Stream.of(1, 2, 3, 4)\n' +
                  '      .filter(number -> number > 1)\n' +
                  '      .toArray() // Object[]\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Transformationen - Verwendung II </h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .reduce(0, (a, b) -> a + b);  // int *NKR\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Transformationen - Verwendung III </h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    ArrayList&lt;Student&gt; students = getManyStudents()\n' +
                  '      .stream()\n' +
                  '      .collect(Collectors.toList());\n' +
                  '      // Collectors.toMap ist Klausurrelevant\n' +
                  '      // Collectors.groupingBy ist Klausurrelevant\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Demo</h2>
          <ul>
            <li className="fragment">
              <Link to="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/Collectors.html">
                Collectors Klasse
              </Link>
            </li>
            <li className="fragment">Collectors.toMap</li>
            <li className="fragment">Collectors.groupingBy</li>
          </ul>
        </section>
        <section>
          <h2>Statistik</h2>
          <p>
            Mit Statistik Operationen lassen sich Anzahl, Minimum, Maximum,
            Summe und Durchschnitt berechnen.
          </p>
        </section>
        <section>
          <h2>Statistik - Methoden</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'long count()\n' +
                  '\n' +
                  'Optional&lt;T&gt; min(Comparator&lt;T&gt;)\n' +
                  'Optional&lt;T&gt; max(Comparator&lt;T&gt;)\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Statistik - Verwendung I</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .count(); // 4\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Statistik - Verwendung II</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Optional&lt;Integer&gt; min = Stream.of(1, 2, 3, 4)\n' +
                  '      .min((n1, n2) -> Integer.compare(n1, n2));\n' +
                  '    \n' +
                  '    min.ifPresent(System.out::println); // 1\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Statistik - Verwendung III</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Optional&lt;Integer&gt; max = Stream.of(1, 2, 3, 4)\n' +
                  '      .max((n1, n2) -> Integer.compare(n1, n2));\n' +
                  '    \n' +
                  '    max.ifPresent(System.out::println); // 4\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Statistik Streams Erzeugen</h2>
          <p>
            Für die Methoden Durchschnitt und Summe werden spezifische Streams
            benötigt:
          </p>
          <ul>
            <li className="fragment">IntStream</li>
            <li className="fragment">LongStream</li>
            <li className="fragment">DoubleStream</li>
          </ul>
        </section>
        <section>
          <h2>Statistik Streams Erzeugen - Methoden</h2>
          <p>
            Um einen Statistik Stream zu erzeugen gibt es Intermediate
            Operations
          </p>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'DoubleStream mapToDouble(ToDoubleFunction&lt;T&gt; mapper)\n' +
                  'IntStream    mapToInt(ToIntFunction&lt;T&gt; mapper)\n' +
                  'LongStream   mapToLong(ToLongFunction&lt;T&gt; mapper)\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Statistik Streams Erzeugen - Verwenden</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    ArrayList&lt;Student&gt; students = getManyStudents();\n' +
                  '    IntStream studentAges = students.stream()\n' +
                  '      .mapToInt(student -> student.age());\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Statistik Streams - Methoden</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'long sum()\n' +
                  '                           \n' +
                  'OptionalDouble average()\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Statistik Streams - Verwendung I</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    IntStream manyNumbers = getManyNumbers();\n' +
                  '    long sum = manyNumbers.sum();\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Statistik - Verwendung II</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    IntStream manyNumbers = getManyNumbers();\n' +
                  '    manyNumbers.average()\n' +
                  '      .ifPresent(System.out::println);\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Verarbeitung</h2>
          <p>
            Mit forEach kann jedes einzelne Element nacheinander
            weiterverarbeitet werden.
          </p>
        </section>
        <section>
          <h2>Verarbeitung - Methoden</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html: 'void forEach(Consumer&lt;T&gt; consumer)\n',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>Verarbeitung - Verwendung</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Main {\n' +
                  '  public static void main(String[] args) {\n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .filter(number -> number > 1)\n' +
                  '      .forEach(System.out::println)\n' +
                  ' \n' +
                  '    Stream.of(1, 2, 3, 4)\n' +
                  '      .filter(number -> number > 1)\n' +
                  '      .forEach(n -> System.out.println(n));\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
        </section>
      </section>
      <section>
        <h2>Rest of the Day</h2>
        <ul>
          <li className="fragment">Lambda Aufgaben</li>
          <li className="fragment">Stream API Aufgaben</li>
        </ul>
      </section>
    </Slides>
  );
}
