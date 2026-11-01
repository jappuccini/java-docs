import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { NKR } from '@site/src/components/Slides/nkr';

export default function StreamApi(): React.JSX.Element {
  return (
    <Slides title="Stream API">
      <section>
        <section className="cover">
          <p className="kicker">Fortgeschrittene Programmierung</p>
          <h1>Stream API</h1>
          <p>
            Elemente filtern, transformieren und aggregieren — Streams als
            funktionale Pipelines nutzen.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Von Collections zu Streams</li>
            <li className="fragment">Stream-Pipelines</li>
            <li className="fragment">Quellen</li>
            <li className="fragment">Intermediäre Operationen</li>
            <li className="fragment">Terminale Operationen</li>
          </ul>
        </section>
      </section>

      <section data-topic="Von Collections zu Streams">
        <section className="divider">
          <p className="kicker">Grundlagen</p>
          <h2>Von Collections zu Streams</h2>
          <p>
            Collections speichern Daten, Streams verarbeiten sie — und machen
            Abfragen deklarativ.
          </p>
        </section>

        <section>
          <h2>Collections</h2>
          <ul>
            <li className="fragment">ArrayList&lt;Student&gt;</li>
            <li className="fragment">ArrayList&lt;Car&gt;</li>
            <li className="fragment">ArrayList&lt;Animal&gt;</li>
          </ul>
          <p className="fragment">
            Collections bieten direkten Zugriff auf ihre Elemente, um sie zu
            verwalten.
          </p>
        </section>

        <section>
          <h2>Anwendungsfälle</h2>
          <ul>
            <li>Daten abfragen &rarr; Name des ältesten Studenten</li>
            <li>Daten ändern &rarr; Preis eines Produkts erhöhen</li>
          </ul>
        </section>

        <section>
          <h2>Definition</h2>
          <div className="callout">
            <p>
              Ein Stream ist eine Sequenz von Elementen, auf der funktionale
              Operationen verkettet werden. Er speichert keine Daten, sondern
              beschreibt deren Verarbeitung.
            </p>
          </div>
          <p className="fragment font-medium">
            Nicht zu verwechseln mit IO-Streams (<code>java.io</code>).
          </p>
        </section>

        <section>
          <h2>Streams vs. Collections</h2>
          <div className="two-column">
            <div>
              <h3>Collections</h3>
              <ul>
                <li className="fragment">speichern Elemente</li>
                <li className="fragment">direkter Zugriff</li>
                <li className="fragment">veränderbar</li>
                <li className="fragment">mehrfach nutzbar</li>
              </ul>
            </div>
            <div>
              <h3>Streams</h3>
              <ul>
                <li className="fragment">verarbeiten Elemente</li>
                <li className="fragment">kein direkter Zugriff</li>
                <li className="fragment">verändern die Quelle nicht</li>
                <li className="fragment">lazy und einmalig</li>
                <li className="fragment">parallel möglich</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/streamapi/intro">
              Demo: Einstieg in die Stream API
            </Link>
          </h2>
          <ul>
            <li className="fragment">Anzahl der Studenten</li>
            <li className="fragment">älter als 24</li>
            <li className="fragment">Vorname mit mindestens 4 Zeichen</li>
            <li className="fragment">
              vollständiger Name mit mehr als 10 Zeichen
            </li>
            <li className="fragment">dieselben Abfragen als Stream-Pipeline</li>
          </ul>
        </section>
      </section>

      <section data-topic="Stream-Pipelines">
        <section className="divider">
          <p className="kicker">Streams</p>
          <h2>Stream-Pipelines</h2>
          <p>
            Quelle, intermediäre und terminale Operationen — eine Pipeline
            beschreibt die Verarbeitung deklarativ.
          </p>
        </section>

        <section>
          <h2>Aufbau einer Pipeline</h2>
          <table>
            <thead>
              <tr>
                <th>Teil</th>
                <th>Aufgabe</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quelle</td>
                <td>liefert die Elemente</td>
                <td>
                  <code>list.stream()</code>
                </td>
              </tr>
              <tr>
                <td>Intermediäre Operationen</td>
                <td>optional, transformieren den Stream</td>
                <td>
                  <code>filter</code>, <code>map</code>, <code>sorted</code>
                </td>
              </tr>
              <tr>
                <td>Terminale Operation</td>
                <td>erforderlich, liefert das Ergebnis</td>
                <td>
                  <code>forEach</code>, <code>collect</code>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Pipeline im Code</h2>
          <pre>
            <code
              data-line-numbers="3-7|3|4-6|7"
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'List&lt;String&gt; names = List.of("Hans", "Peter", "Lisa", "Stefan", "Anna", "Michael");\n' +
                  '\n' +
                  'names.stream()                          // Quelle\n' +
                  '  .filter(name -&gt; name.length() &gt; 4)    // intermediär\n' +
                  '  .map(name -&gt; name.toUpperCase())      // intermediär\n' +
                  '  .limit(2)                             // intermediär\n' +
                  '  .forEach(System.out::println);        // terminal\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Charakteristika einer Pipeline</h2>
          <ul>
            <li className="fragment">
              Intermediäre Operationen sind optional.
            </li>
            <li className="fragment">
              Eine terminale Operation ist erforderlich.
            </li>
            <li className="fragment">
              Erst die terminale Operation führt die Pipeline aus (lazy).
            </li>
            <li className="fragment">
              Eine Pipeline kann nur einmal ausgeführt werden.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/streamapi/pipeline">
              Demo: Pipeline und Lazy Evaluation
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              Intermediäre Operationen sind optional.
            </li>
            <li className="fragment">
              Ohne terminale Operation passiert nichts.
            </li>
            <li className="fragment">Eine Pipeline ist nur einmal nutzbar.</li>
            <li className="fragment">
              Die Reihenfolge der intermediären Operationen ist relevant.
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Quellen">
        <section className="divider">
          <p className="kicker">Streams erzeugen</p>
          <h2>Quellen</h2>
          <p>
            Collections, Arrays und einzelne Werte als Quelle für eine Pipeline.
          </p>
        </section>

        <section>
          <h2>Quellen aus Collections</h2>
          <pre className="fragment">
            <code
              data-line-numbers
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  '// Jede Collection kann eine Quelle sein\n' +
                  'ArrayList&lt;Student&gt; students = new ArrayList&lt;&gt;();\n' +
                  'students.stream();\n' +
                  '\n' +
                  '// Map: Schlüssel, Einträge oder Werte\n' +
                  'HashMap&lt;String, Student&gt; map = new HashMap&lt;&gt;();\n' +
                  'map.keySet().stream();\n' +
                  'map.entrySet().stream();\n' +
                  'map.values().stream();\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Quellen aus Arrays</h2>
          <pre className="fragment">
            <code
              data-line-numbers="2|5-6|9"
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  '// Objekt-Array\n' +
                  'Stream&lt;Integer&gt; num1 = Arrays.stream(new Integer[] { 1, 2, 3, 4 });\n' +
                  '\n' +
                  '// int[] &rarr; Stream&lt;Integer&gt;\n' +
                  'int[] numArray = { 1, 2, 3, 4 };\n' +
                  'Stream&lt;Integer&gt; num2 = Arrays.stream(numArray).boxed();\n' +
                  '\n' +
                  '// int[] &rarr; IntStream\n' +
                  'IntStream num3 = Arrays.stream(new int[] { 1, 2, 3, 4 });\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Quellen aus Werten</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream&lt;Integer&gt; numbers = Stream.of(1, 2, 3, 4);\n' +
                  'Stream&lt;String&gt; names = Stream.of("Hans", "Peter", "Lisa");\n',
              }}
            ></code>
          </pre>
        </section>
      </section>

      <section data-topic="Intermediäre Operationen">
        <section className="divider">
          <p className="kicker">Streams</p>
          <h2>Intermediäre Operationen</h2>
          <p>Methoden, die einen Stream in einen neuen Stream überführen.</p>
        </section>

        <section>
          <h2>Definition</h2>
          <div className="callout">
            <p>
              Intermediäre Operationen sind Methoden eines Streams, die als
              Rückgabewert einen Stream zurückgeben. Sie werden erst ausgeführt,
              wenn eine terminale Operation folgt. Sie verändern die Quelle
              nicht.
            </p>
          </div>
          <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html">
            Stream Klasse
          </Link>
        </section>
      </section>

      <section data-topic="Filtern und Abbilden">
        <section className="divider">
          <p className="kicker">Intermediäre Operationen</p>
          <h2>Filtern und Abbilden</h2>
          <p>
            <code>filter</code> wählt Elemente aus, <code>map</code>{' '}
            transformiert sie.
          </p>
        </section>

        <section>
          <h2>filter - Methode</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'Stream&lt;T&gt; filter(Predicate&lt;T&gt; predicate)',
              }}
            ></code>
          </pre>
          <p className="fragment">
            <code>filter</code> erwartet ein{' '}
            <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Predicate.html">
              Predicate
            </Link>
            . Behält Elemente, für die das Prädikat <code>true</code> liefert.
          </p>
          <p className="fragment font-medium">
            Die Java-API verwendet hier Wildcards; zur Lesbarkeit sind sie in
            diesem Deck weggelassen.
          </p>
        </section>

        <section>
          <h2>filter - Verwendung</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream.of(1, 2, 3, 4)\n' +
                  '  .filter(number -&gt; number &gt; 3)\n' +
                  '  .forEach(System.out::println); // 4\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>map - Methode</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  '&lt;R&gt; Stream&lt;R&gt; map(Function&lt;T, R&gt; mapper)',
              }}
            ></code>
          </pre>
          <p className="fragment">
            <code>map</code> erwartet eine{' '}
            <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Function.html">
              Function
            </Link>
            . Den Eingabetyp <code>T</code> legt der vorherige Stream fest; der
            Rückgabetyp des Mappers bestimmt den Rückgabetyp des neuen Streams.
          </p>
        </section>

        <section>
          <h2>map - Verwendung</h2>
          <pre>
            <code
              data-line-numbers
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream.of(1, 2, 3, 4)\n' +
                  '  .map(number -&gt; number * 2)\n' +
                  '  .forEach(System.out::println); // 2, 4, 6, 8\n' +
                  '\n' +
                  'Stream.of(1, 2, 3, 4)\n' +
                  '  .map(number -&gt; String.valueOf(number))\n' +
                  '  .forEach(System.out::println); // "1", "2", "3", "4"\n',
              }}
            ></code>
          </pre>
        </section>
      </section>

      <section data-topic="Begrenzen, Sortieren und Duplikate">
        <section className="divider">
          <p className="kicker">Intermediäre Operationen</p>
          <h2>Begrenzen, Sortieren und Duplikate</h2>
          <p>
            <code>limit</code> und <code>skip</code> begrenzen den Stream,{' '}
            <code>sorted</code> sortiert ihn, <code>distinct</code> entfernt
            Duplikate.
          </p>
        </section>

        <section>
          <h2>limit - Methode</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'Stream&lt;T&gt; limit(long maxSize)',
              }}
            ></code>
          </pre>
          <p className="fragment">
            <code>limit</code> begrenzt den Stream auf die ersten{' '}
            <code>maxSize</code> Elemente.
          </p>
        </section>

        <section>
          <h2>limit - Verwendung</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream.of(1, 2, 3, 4)\n' +
                  '  .limit(2)\n' +
                  '  .forEach(System.out::println); // 1, 2\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>skip - Methode</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'Stream&lt;T&gt; skip(long n)',
              }}
            ></code>
          </pre>
          <p className="fragment">
            <code>skip</code> überspringt die ersten <code>n</code> Elemente.
          </p>
        </section>

        <section>
          <h2>skip - Verwendung</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream.of(1, 2, 3, 4)\n' +
                  '  .skip(2)\n' +
                  '  .forEach(System.out::println); // 3, 4\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>sorted - Methode</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream&lt;T&gt; sorted(Comparator&lt;T&gt; comparator)',
              }}
            ></code>
          </pre>
          <p className="fragment">
            <code>sorted</code> erwartet einen{' '}
            <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html">
              Comparator
            </Link>
            .
          </p>
          <p className="fragment font-medium">
            <code>sorted()</code> ohne Comparator sortiert nach der natürlichen
            Reihenfolge (<code>Comparable</code>).
          </p>
        </section>

        <section>
          <h2>sorted - Verwendung</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream.of(4, 3, 2, 1)\n' +
                  '  .sorted((n1, n2) -&gt; Integer.compare(n1, n2))\n' +
                  '  .forEach(System.out::println); // 1, 2, 3, 4\n',
              }}
            ></code>
          </pre>
          <p className="fragment font-medium">
            Für Streams übernimmt <code>sorted</code> die Aufgabe von{' '}
            <code>Collections.sort()</code>.
          </p>
        </section>

        <section>
          <h2>distinct - Methode</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'Stream&lt;T&gt; distinct()',
              }}
            ></code>
          </pre>
          <p className="fragment">
            <code>distinct</code> entfernt Duplikate. Welche Elemente gleich
            sind, entscheidet <code>equals()</code>.
          </p>
        </section>

        <section>
          <h2>distinct - Verwendung</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream.of(1, 2, 1, 4)\n' +
                  '  .distinct()\n' +
                  '  .forEach(System.out::println); // 1, 2, 4\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/streamapi/review">
              Demo: Lambdas auslagern
            </Link>
          </h2>
          <ul>
            <li className="fragment">Review der Stream-API-Beispiele</li>
            <li className="fragment">
              Attribute: <code>minimumFirstName</code>,{' '}
              <code>olderThan24Years</code>, <code>toFullName</code>
            </li>
            <li className="fragment">
              Methoden: <code>olderThanYears</code>,{' '}
              <code>fullNameIsLongerThan</code>
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Terminale Operationen">
        <section className="divider">
          <p className="kicker">Streams</p>
          <h2>Terminale Operationen</h2>
          <p>
            Sie führen die Pipeline aus, liefern ein Ergebnis und schließen den
            Stream ab.
          </p>
        </section>

        <section>
          <h2>Überblick</h2>
          <ul>
            <li className="fragment">Prüfen und Finden</li>
            <li className="fragment">Sammeln und Reduzieren</li>
            <li className="fragment">Statistik</li>
            <li className="fragment">Zahlenströme</li>
            <li className="fragment">Ausführen</li>
          </ul>
        </section>
      </section>

      <section data-topic="Prüfen und Finden">
        <section className="divider">
          <p className="kicker">Terminale Operationen</p>
          <h2>Prüfen und Finden</h2>
          <p>
            <code>allMatch</code>, <code>anyMatch</code> und{' '}
            <code>noneMatch</code> prüfen Bedingungen; <code>findFirst</code>{' '}
            und <code>findAny</code> liefern ein Element.
          </p>
        </section>

        <section>
          <h2>Prüfen - Methoden</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'boolean allMatch(Predicate&lt;T&gt; predicate)   // alle müssen passen\n' +
                  'boolean noneMatch(Predicate&lt;T&gt; predicate)  // keiner darf passen\n' +
                  'boolean anyMatch(Predicate&lt;T&gt; predicate)   // mindestens einer muss passen\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Prüfen - Verwendung</h2>
          <pre>
            <code
              data-line-numbers
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream.of(1, 2, 3, 4)\n' +
                  '  .allMatch(number -&gt; number &gt; 3); // false\n' +
                  '\n' +
                  'Stream.of(1, 2, 3, 4)\n' +
                  '  .noneMatch(number -&gt; number &gt; 4); // true\n' +
                  '\n' +
                  'Stream.of(1, 2, 3, 4)\n' +
                  '  .anyMatch(number -&gt; number &gt; 2); // true\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Finden</h2>
          <p>
            <code>findFirst</code> liefert das erste Element,{' '}
            <code>findAny</code> irgendein Element. Der Unterschied ist vor
            allem bei parallelen Streams relevant.
          </p>
        </section>

        <section>
          <h2>Finden - Methoden</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Optional&lt;T&gt; findAny()   // nicht deterministisch\n' +
                  'Optional&lt;T&gt; findFirst() // deterministisch\n',
              }}
            ></code>
          </pre>
          <p className="fragment font-medium">
            Der Unterschied ist vor allem bei parallelen Streams relevant.
          </p>
        </section>

        <section>
          <h2>Finden - Verwendung</h2>
          <pre>
            <code
              data-line-numbers
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream.of(1, 2, 3, 4)\n' +
                  '  .filter(number -&gt; number &gt; 1)\n' +
                  '  .findAny(); // irgendein Element, z. B. 2\n' +
                  '\n' +
                  'Stream.of(1, 2, 3, 4)\n' +
                  '  .filter(number -&gt; number &gt; 1)\n' +
                  '  .findFirst(); // immer 2\n',
              }}
            ></code>
          </pre>
        </section>
      </section>

      <section data-topic="Sammeln und Reduzieren">
        <section className="divider">
          <p className="kicker">Terminale Operationen</p>
          <h2>Sammeln und Reduzieren</h2>
          <p>
            Der Stream wird in eine Collection, ein Array oder einen einzelnen
            Wert überführt.
          </p>
        </section>

        <section>
          <h2>Methoden</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'List&lt;T&gt; toList()\n' +
                  'Object[] toArray()\n' +
                  '\n' +
                  'T reduce(T identity, BinaryOperator&lt;T&gt; accumulator)\n' +
                  '\n' +
                  'R collect(Collector&lt;T, A, R&gt; collector)\n',
              }}
            ></code>
          </pre>
          <p className="fragment font-medium">
            <code>Stream.toList()</code> (Java 16+) und{' '}
            <code>collect(Collectors.toList())</code> liefern beide eine Liste.
          </p>
        </section>

        <section>
          <h2>toList und toArray</h2>
          <pre>
            <code
              data-line-numbers
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'List&lt;Integer&gt; nums = Stream.of(1, 2, 3, 4)\n' +
                  '  .filter(number -&gt; number &gt; 1)\n' +
                  '  .toList(); // List&lt;Integer&gt;\n' +
                  '\n' +
                  'Object[] nums2 = Stream.of(1, 2, 3, 4)\n' +
                  '  .filter(number -&gt; number &gt; 1)\n' +
                  '  .toArray(); // Object[]\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>reduce*</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream.of(1, 2, 3, 4)\n' +
                  '  .reduce(0, (a, b) -&gt; a + b); // 10\n',
              }}
            ></code>
          </pre>
          <NKR />
        </section>

        <section>
          <h2>collect</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  '// Collectors.toMap und Collectors.groupingBy sind klausurrelevant\n' +
                  'List&lt;Student&gt; students = getManyStudents().stream()\n' +
                  '  .collect(Collectors.toList());\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/streamapi/collectors">
              Demo: Collectors
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              <Link to="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html">
                <code>Collectors</code>-Klasse
              </Link>
            </li>
            <li className="fragment">
              <code>toMap</code>
            </li>
            <li className="fragment">
              <code>groupingBy</code>
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Statistik">
        <section className="divider">
          <p className="kicker">Terminale Operationen</p>
          <h2>Statistik</h2>
          <p>
            <code>count</code>, <code>min</code> und <code>max</code> fassen
            einen Stream zu einem Kennwert zusammen.
          </p>
        </section>

        <section>
          <h2>Methoden</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'long count()\n' +
                  '\n' +
                  'Optional&lt;T&gt; min(Comparator&lt;T&gt; comparator)\n' +
                  'Optional&lt;T&gt; max(Comparator&lt;T&gt; comparator)\n',
              }}
            ></code>
          </pre>
          <p className="fragment font-medium">
            <code>min</code> und <code>max</code> liefern ein{' '}
            <code>Optional</code>, weil der Stream leer sein kann.
          </p>
        </section>

        <section>
          <h2>count</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'Stream.of(1, 2, 3, 4)\n' + '  .count(); // 4\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>min</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Optional&lt;Integer&gt; min = Stream.of(1, 2, 3, 4)\n' +
                  '  .min((n1, n2) -&gt; Integer.compare(n1, n2));\n' +
                  '\n' +
                  'min.ifPresent(System.out::println); // 1\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>max</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Optional&lt;Integer&gt; max = Stream.of(1, 2, 3, 4)\n' +
                  '  .max((n1, n2) -&gt; Integer.compare(n1, n2));\n' +
                  '\n' +
                  'max.ifPresent(System.out::println); // 4\n',
              }}
            ></code>
          </pre>
        </section>
      </section>

      <section data-topic="Zahlenströme">
        <section className="divider">
          <p className="kicker">Terminale Operationen</p>
          <h2>Zahlenströme</h2>
          <p>
            <code>IntStream</code>, <code>LongStream</code> und{' '}
            <code>DoubleStream</code> bieten <code>sum</code> und{' '}
            <code>average</code>.
          </p>
        </section>

        <section>
          <h2>Zahlenströme erzeugen</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'IntStream mapToInt(ToIntFunction&lt;T&gt; mapper)\n' +
                  'LongStream mapToLong(ToLongFunction&lt;T&gt; mapper)\n' +
                  'DoubleStream mapToDouble(ToDoubleFunction&lt;T&gt; mapper)\n',
              }}
            ></code>
          </pre>
          <p>
            <code>mapToInt</code>, <code>mapToLong</code> und{' '}
            <code>mapToDouble</code> wandeln einen <code>Stream&lt;T&gt;</code>{' '}
            in einen Zahlenstrom um.
          </p>
        </section>

        <section>
          <h2>Beispiel: mapToInt</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'ArrayList&lt;Student&gt; students = getManyStudents();\n' +
                  'IntStream studentAges = students.stream()\n' +
                  '  .mapToInt(student -&gt; student.age());\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>sum und average</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'int sum()      // IntStream\n' +
                  'long sum()     // LongStream\n' +
                  'double sum()   // DoubleStream\n' +
                  '\n' +
                  'OptionalDouble average()\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>sum</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'IntStream manyNumbers = getManyNumbers();\n' +
                  'int sum = manyNumbers.sum();\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>average</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'IntStream manyNumbers = getManyNumbers();\n' +
                  'manyNumbers.average()\n' +
                  '  .ifPresent(System.out::println);\n',
              }}
            ></code>
          </pre>
        </section>
      </section>

      <section data-topic="Ausführen">
        <section className="divider">
          <p className="kicker">Terminale Operationen</p>
          <h2>Ausführen</h2>
          <p>
            <code>forEach</code> führt eine Aktion für jedes Element aus.
          </p>
        </section>

        <section>
          <h2>forEach</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'void forEach(Consumer&lt;T&gt; consumer)',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>forEach - Verwendung</h2>
          <pre>
            <code
              data-line-numbers
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Stream.of(1, 2, 3, 4)\n' +
                  '  .filter(number -&gt; number &gt; 1)\n' +
                  '  .forEach(System.out::println); // 2, 3, 4\n' +
                  '\n' +
                  'Stream.of(1, 2, 3, 4)\n' +
                  '  .filter(number -&gt; number &gt; 1)\n' +
                  '  .forEach(n -&gt; System.out.println(n)); // 2, 3, 4\n',
              }}
            ></code>
          </pre>
          <p className="fragment font-medium">
            Bei parallelen Streams ist die Reihenfolge von <code>forEach</code>{' '}
            nicht garantiert.
          </p>
        </section>
      </section>

      <section data-topic="Rest of the Day">
        <section>
          <h2>Rest of the Day</h2>
          <ul>
            <li className="fragment">
              <Link to="/exercises/java-stream-api/">Stream API Aufgaben</Link>
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
