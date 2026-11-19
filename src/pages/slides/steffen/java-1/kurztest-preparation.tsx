import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { NKR } from '../../../../components/Slides/nkr';

export default function MathRandomScanner(): React.JSX.Element {
  return (
    <Slides title="Kurztestvorbereitung">
      <section>
        <section className="cover">
          <p className="kicker">Grundlagen der Programmierung</p>
          <h1>Kurztestvorbereitung</h1>
          <p>
            Wiederholung, Rahmen des Kurztests und die Hilfsklassen Math, Random
            und Scanner für die gemeinsamen Aufgaben.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Kurztest</li>
            <li className="fragment">Hilfsklassen (Math, Random, Scanner)</li>
          </ul>
        </section>
      </section>

      <section data-topic="Wiederholung">
        <section className="divider">
          <p className="kicker">Rückblick</p>
          <h2>Wiederholung</h2>
          <p>
            Die Themen des Kurztests: Datentypen, Methoden, Operatoren,
            Kontrollstrukturen, Arrays und ArrayList.
          </p>
        </section>

        <section>
          <h2>Datentypen und Datenobjekte</h2>
          <pre style={{ fontSize: '20px' }}>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'int age = 42;\n' +
                  'double size = 1.85;\n' +
                  'String name = "Ada";\n' +
                  "char first = name.charAt(0); // 'A'\n" +
                  'int truncated = (int) 3.9;   // 3',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">
              8 primitive Datentypen; <code>int</code> und <code>double</code>{' '}
              sind die Standardtypen; <code>String</code> ist eine Klasse,{' '}
              <code>char</code> ist primitiv.
            </li>
            <li className="fragment">
              Datenobjekt = Deklaration + Initialisierung:{' '}
              <code>Typ name = wert;</code>
            </li>
            <li className="fragment">
              Cast <code>(int)</code> schneidet Nachkommastellen ab;{' '}
              <code>charAt(0)</code> liest ein Zeichen.
            </li>
          </ul>
        </section>

        <section>
          <h2>Methoden und Operatoren</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public static int add(int a, int b) {\n' +
                  '  return a + b;\n' +
                  '}\n' +
                  'int sum = add(1, 2); // 3',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">
              Methode = Rückgabetyp, Name, Parameter, Rumpf.
            </li>
            <li className="fragment">
              <code>return</code> gibt einen Wert zurück; <code>void</code> gibt
              nichts zurück.
            </li>
            <li className="fragment">
              Arithmetische, Vergleichs- und logische Operatoren.
            </li>
          </ul>
        </section>

        <section>
          <h2>Fallunterscheidungen</h2>
          <ul>
            <li className="fragment">
              <code>if</code> / <code>else if</code> / <code>else</code> für
              Bedingungen und Bereiche.
            </li>
            <li className="fragment">
              <code>switch</code> für viele konstante Fälle; <code>break</code>{' '}
              beendet den case.
            </li>
            <li className="fragment">
              Funktioniert mit <code>int</code>, <code>char</code>,{' '}
              <code>String</code> und <code>Enum</code>.
            </li>
          </ul>
          <div className="two-column">
            <div>
              <p className="code-caption">if / else</p>
              <pre style={{ fontSize: '18px', lineHeight: 1.4 }}>
                <code
                  className="language-java"
                  data-line-numbers
                  dangerouslySetInnerHTML={{
                    __html:
                      'if (age &gt;= 18) {\n' +
                      '  System.out.println("volljährig");\n' +
                      '} else {\n' +
                      '  System.out.println("minderjährig");\n' +
                      '}',
                  }}
                ></code>
              </pre>
            </div>
            <div>
              <p className="code-caption">switch</p>
              <pre style={{ fontSize: '18px', lineHeight: 1.4 }}>
                <code
                  className="language-java"
                  data-line-numbers
                  dangerouslySetInnerHTML={{
                    __html:
                      'switch (day) {\n' +
                      '  case 1:\n' +
                      '    System.out.println("Montag");\n' +
                      '    break;\n' +
                      '  default:\n' +
                      '    System.out.println("anderer Tag");\n' +
                      '    break;\n' +
                      '}',
                  }}
                ></code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2>Schleifen</h2>
          <pre style={{ fontSize: '18px' }}>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'for (int i = 0; i &lt; 5; i++) {\n' +
                  '  System.out.println(i);\n' +
                  '}\n' +
                  'for (int number : numbers) {\n' +
                  '  System.out.println(number);\n' +
                  '}',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">
              <code>while</code> prüft vor dem Durchlauf, <code>do-while</code>{' '}
              danach (mindestens einmal).
            </li>
            <li className="fragment">
              <code>for</code> mit Initialisierung, Bedingung, Update;{' '}
              <code>for-each</code> für Arrays und Collections.
            </li>
            <li className="fragment">
              <code>break</code> beendet die Schleife, <code>continue</code>{' '}
              überspringt den Rest.
            </li>
          </ul>
        </section>

        <section>
          <h2>Arrays und ArrayList</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'int[] numbers = {1, 2, 3};\n' +
                  'int first = numbers[0];\n' +
                  '\n' +
                  'ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;();\n' +
                  'list.add(42);\n' +
                  'int size = list.size();',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">
              Array: feste Länge, Zugriff über <code>[]</code>, Länge über{' '}
              <code>length</code>, Index ab 0.
            </li>
            <li className="fragment">
              ArrayList: dynamische Länge, <code>add()</code> /{' '}
              <code>get()</code> / <code>size()</code>;{' '}
              <code>ArrayList&lt;Integer&gt;</code> braucht Wrapper-Klassen.
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Kurztest">
        <section className="divider">
          <p className="kicker">Organisation</p>
          <h2>Kurztest</h2>
          <p>Rahmen und Aufgabentypen des Kurztests.</p>
        </section>

        <section>
          <h2>Rahmen</h2>
          <ul>
            <li className="fragment">22.01.2026</li>
            <li className="fragment">24 Minuten</li>
            <li className="fragment">3 Aufgaben</li>
            <li className="fragment">am PC</li>
            <li className="fragment">nur Moodle, kein zweiter Bildschirm</li>
            <li className="fragment">
              Aufgabe 3 ohne <code>ArrayList</code>
            </li>
          </ul>
          <div className="callout fragment" style={{ fontSize: '0.85em' }}>
            <p>
              <code>Math</code>, <code>Random</code> und <code>Scanner</code>{' '}
              sind nicht Teil des Kurztests und nicht klausurrelevant.
            </p>
          </div>
        </section>

        <section>
          <h2>Aufgabentypen</h2>
          <table>
            <thead>
              <tr>
                <th>Aufgabe</th>
                <th>Inhalt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Code lesen: Was passiert in welcher Zeile?</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Code lesen: Was gibt das Programm aus?</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Array-Aufgabe implementieren (ohne ArrayList)</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>

      <section data-topic="Hilfsklassen">
        <section className="divider">
          <p className="kicker">Java-API</p>
          <h2>Hilfsklassen*</h2>
          <p>Math, Random und Scanner für die gemeinsamen Aufgaben.</p>
          <NKR />
        </section>

        <section>
          <h2>Hilfsmethoden der Klasse Math</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'int distance = Math.abs(a - b);\n' +
                  'double power = Math.pow(2, 8); // 256.0\n' +
                  'double root = Math.sqrt(81);   // 9.0',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">
              Alle Methoden sind statisch: <code>Math.pow(...)</code> statt{' '}
              <code>new Math()</code>.
            </li>
          </ul>
        </section>

        <section>
          <h2>Zufallszahlen generieren</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Random random = new Random();\n' +
                  'int number = random.nextInt(100) + 1; // 1 bis 100\n' +
                  'double value = random.nextDouble();   // 0.0 bis &lt; 1.0\n' +
                  'boolean coin = random.nextBoolean();  // true oder false',
              }}
            ></code>
          </pre>
          <div className="callout fragment">
            <p>
              <code>nextInt(bound)</code> liefert 0 bis bound−1; mit{' '}
              <code>+ 1</code> wird daraus 1 bis bound.
            </p>
          </div>
          <p className="font-medium">
            Klasse aus <code>java.util</code>.
          </p>
        </section>

        <section>
          <h2>Demo: gh pr create</h2>
          <pre>
            <code
              className="language-bash"
              dangerouslySetInnerHTML={{
                __html: 'gh pr create',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">
              fragt Titel, Beschreibung und Zielbranch ab
            </li>
            <li className="fragment">das Programm reagiert auf die Eingaben</li>
          </ul>
        </section>

        <section>
          <h2>Konsoleneingaben verarbeiten</h2>
          <p>
            Java-Programme können das auch — mit <code>Scanner</code> aus{' '}
            <code>java.util</code>.
          </p>
          <pre style={{ fontSize: '20px' }}>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'Scanner sc = new Scanner(System.in);\n' +
                  'int number = sc.nextInt();',
              }}
            ></code>
          </pre>
          <table style={{ fontSize: '0.8em', lineHeight: 1.25 }}>
            <thead>
              <tr>
                <th>Methode</th>
                <th>Rückgabe</th>
                <th>Bedeutung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>
                  <code>nextInt()</code>
                </td>
                <td>
                  <code>int</code>
                </td>
                <td>nächste ganze Zahl</td>
              </tr>
              <tr className="fragment">
                <td>
                  <code>nextDouble()</code>
                </td>
                <td>
                  <code>double</code>
                </td>
                <td>nächste Gleitkommazahl</td>
              </tr>
              <tr className="fragment">
                <td>
                  <code>nextBoolean()</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>nächster Wahrheitswert</td>
              </tr>
              <tr className="fragment">
                <td>
                  <code>next()</code>
                </td>
                <td>
                  <code>String</code>
                </td>
                <td>nächstes Wort</td>
              </tr>
              <tr className="fragment">
                <td>
                  <code>nextLine()</code>
                </td>
                <td>
                  <code>String</code>
                </td>
                <td>nächste Zeile</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Achtung: nextInt() und nextLine()</h2>
          <p>
            Warum ist die erste <code>nextLine()</code>-Eingabe leer?
          </p>
          <table style={{ fontSize: '0.6em', lineHeight: 1.25 }}>
            <thead>
              <tr>
                <th>Aufruf</th>
                <th>Puffer vorher</th>
                <th>Rückgabe</th>
                <th>Puffer nachher</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>
                  <code>nextInt()</code>
                </td>
                <td>
                  <code>42⏎1⏎EIS⏎</code>
                </td>
                <td>
                  <code>42</code>
                </td>
                <td>
                  <code>⏎1⏎EIS⏎</code>
                </td>
              </tr>
              <tr className="fragment">
                <td>
                  <code>nextInt()</code>
                </td>
                <td>
                  <code>⏎1⏎EIS⏎</code>
                </td>
                <td>
                  <code>1</code>
                </td>
                <td>
                  <code>⏎EIS⏎</code>
                </td>
              </tr>
              <tr className="fragment">
                <td>
                  <code>nextLine()</code>
                </td>
                <td>
                  <code>⏎EIS⏎</code>
                </td>
                <td>
                  <code>""</code>
                </td>
                <td>
                  <code>EIS⏎</code>
                </td>
              </tr>
              <tr className="fragment">
                <td>
                  <code>nextLine()</code>
                </td>
                <td>
                  <code>EIS⏎</code>
                </td>
                <td>
                  <code>EIS</code>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p className="font-medium">⏎ = Zeilenumbruch</p>
          <div
            className="callout fragment"
            style={{ fontSize: '0.75em', lineHeight: 1.35 }}
          >
            <p>
              <code>nextInt()</code> liest den Zeilenumbruch nicht mit. Er
              bleibt im Puffer und wird vom nächsten <code>nextLine()</code> als
              leere Zeile gelesen.
            </p>
          </div>
          <p className="font-medium fragment" style={{ lineHeight: 1.3 }}>
            <strong>Vermeiden:</strong> nach <code>nextInt()</code> ein
            zusätzliches <code>nextLine()</code> aufrufen oder{' '}
            <code>nextLine()</code> konsequent verwenden und mit{' '}
            <code>Integer.parseInt(...)</code> umwandeln.
          </p>
        </section>
      </section>

      <section data-topic="Rest of the Day">
        <section>
          <h2>Rest of the Day</h2>
          <ul>
            <li className="fragment">
              <Link to="/exercises/console-applications/">
                Console Applications (alle)
              </Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/cases">Cases (alle, Cases 05 wichtig)</Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/loops">Loops (alle, 07/08 optional)</Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/arrays">Arrays (alle, 04/06 optional)</Link>
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
