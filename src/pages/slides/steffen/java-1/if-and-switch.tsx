import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { NKR } from '../../../../components/Slides/nkr';

export default function IfAndSwitch(): React.JSX.Element {
  return (
    <Slides title="Kontrollstrukturen und Arrays">
      <section>
        <section className="cover">
          <p className="kicker">Grundlagen der Programmierung</p>
          <h1>Kontrollstrukturen und Arrays</h1>
          <p>
            Verzweigungen, Schleifen und Arrays in Java verstehen und anwenden.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Verzweigungen und Fallunterscheidungen</li>
            <li className="fragment">Schleifen</li>
            <li className="fragment">Arrays</li>
            <li className="fragment">Variable Argumentlisten</li>
          </ul>
        </section>
      </section>

      <section data-topic="Wiederholung">
        <section className="divider">
          <p className="kicker">Rückblick</p>
          <h2>Wiederholung</h2>
          <p>Datentypen, Datenobjekte, Methoden und Operatoren auffrischen.</p>
        </section>

        <section>
          <h2>Datentypen</h2>
          <ul className="fragment">
            <li>Wahrheitswerte (boolean)</li>
            <li>Zeichen (char)</li>
            <li>Ganzzahlen (byte, short, int, long)</li>
            <li>Gleitkommazahlen (float, double)</li>
            <li>Zeichenketten (String)</li>
          </ul>
        </section>

        <section>
          <h2>Datenobjekte</h2>
          <ul>
            <li className="fragment">
              Platzhalter, um Werte zwischenzuspeichern
            </li>
            <li className="fragment">Datentyp Bezeichner = Wert;</li>
            <pre className="fragment">
              <code
                className="language-java"
                dangerouslySetInnerHTML={{
                  __html: 'String myName = "Steffen";',
                }}
              ></code>
            </pre>
            <li className="fragment">auch Variable genannt</li>
          </ul>
        </section>

        <section>
          <h2>Methoden</h2>
          <ul>
            <li className="fragment">Rückgabetyp (primitiv, komplex, void)</li>
            <li className="fragment">Bezeichner</li>
            <li className="fragment">Parameter</li>
            <li className="fragment">Methodenrumpf</li>
            <pre className="fragment">
              <code
                className="language-java"
                dangerouslySetInnerHTML={{
                  __html:
                    'public static int add(int a, int b) {\n' +
                    '    return a + b;\n' +
                    '}\n',
                }}
              ></code>
            </pre>
            <li className="fragment">Wiederverwendung und Lesbarkeit</li>
          </ul>
        </section>

        <section>
          <h2>Operatoren</h2>
          <ul>
            <li className="fragment">
              Arithmetische Operatoren (+, -, *, /, %, ++, --)
            </li>
            <li className="fragment">Vergleichsoperatoren (==, !=, etc.)</li>
            <li className="fragment">Logische Operatoren (&&, ||, !)</li>
            <li className="fragment">Bitweise Operatoren (&, |, ^, ~)</li>
          </ul>
        </section>
      </section>

      <section data-topic="Verzweigungen">
        <section className="divider">
          <p className="kicker">Kontrollstrukturen</p>
          <h2>Verzweigungen</h2>
          <p>Code abhängig von einer Bedingung ausführen.</p>
        </section>

        <section>
          <h2>Beispiele für Verzweigungen</h2>
          <ul>
            <li className="fragment">
              wenn unter 16 Jahre alt, dann kein Alkohol
            </li>
            <li className="fragment">
              wenn Warenkorb leer, dann Hinweis anzeigen
            </li>
            <li className="fragment">
              wenn PIN falsch, dann keine Bargeldausgabe
            </li>
          </ul>
        </section>

        <section>
          <h2>if-Anweisung</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'if (bedingung) {\n' + '  // Quellcode\n' + '}',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">if Schlüsselwort</li>
            <li className="fragment">Bedingung</li>
            <li className="fragment">Code Block</li>
          </ul>
          <p className="fragment">Bedingung ist ein boolean-Ausdruck.</p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/controlflow/If.java">
              Demo: if-Anweisung
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              wenn unter 16 Jahre alt, dann kein Alkohol
            </li>
            <li className="fragment">
              wenn Warenkorb leer, dann Hinweis anzeigen
            </li>
          </ul>
        </section>

        <section>
          <h2>else-Zweig</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'else {\n' + '  // Quellcode\n' + '}',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">else Schlüsselwort</li>
            <li className="fragment">Code Block</li>
          </ul>
          <p className="fragment">Der else-Zweig ist optional.</p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/controlflow/If.java">
              Demo: if-else
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              wenn unter 16 Jahre alt, dann kein Alkohol, ansonsten Alkohol
            </li>
            <li className="fragment">
              wenn Warenkorb leer, dann Hinweis anzeigen, ansonsten
              Bestellübersicht
            </li>
          </ul>
        </section>

        <section>
          <h2>else-if-Zweig</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'else if (bedingung) {\n' + '  // Quellcode\n' + '}',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">else if Schlüsselwort</li>
            <li className="fragment">Bedingung</li>
            <li className="fragment">Code Block</li>
          </ul>
          <p className="fragment">
            Ein else gehört immer zum unmittelbar vorhergehenden if.
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/controlflow/If.java">
              Demo: if-else-if
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              wenn unter 16 Jahre alt, dann kein Alkohol, wenn unter 18 Jahre
              alt, dann Bier, ansonsten jeden Alkohol
            </li>
            <li className="fragment">
              wenn Warenkorb unter 50 €, dann Versandkosten, wenn unter 100 €,
              dann Rabatt, ansonsten kostenloser Versand
            </li>
          </ul>
        </section>

        <section>
          <h2>Verschachtelte Verzweigungen</h2>
          <div className="two-column">
            <div>
              <p className="fragment">
                Die Einrückung zeigt, welches else zu welchem if gehört.
              </p>
              <p className="fragment">
                Mit Verschachtelungen können jegliche Fälle abgedeckt werden.
              </p>
            </div>
            <div>
              <pre>
                <code
                  className="language-java"
                  data-line-numbers
                  dangerouslySetInnerHTML={{
                    __html:
                      'if (bedingung) {\n' +
                      '  if (bedingung) {\n' +
                      '    if (bedingung) {\n' +
                      '      // Quellcode\n' +
                      '    } else if (bedingung) {\n' +
                      '      // Quellcode\n' +
                      '    } else {\n' +
                      '      // Quellcode\n' +
                      '    }\n' +
                      '  }\n' +
                      '}',
                  }}
                ></code>
              </pre>
            </div>
          </div>
        </section>
      </section>

      <section data-topic="Fallunterscheidungen">
        <section className="divider">
          <p className="kicker">Kontrollstrukturen</p>
          <h2>Fallunterscheidungen</h2>
          <p>Viele feste Fälle übersichtlich mit switch behandeln.</p>
        </section>

        <section>
          <h2>switch-Anweisung</h2>
          <div className="two-column">
            <div>
              <ul>
                <li className="fragment">switch Schlüsselwort</li>
                <li className="fragment">Zu prüfendes Datenobjekt</li>
                <li className="fragment">Code Block</li>
                <li className="fragment">case Schlüsselwort mit Wert</li>
                <li className="fragment">Code Block</li>
                <li
                  tabIndex={0}
                  data-tooltip="Ohne break wird der nächste case-Block ebenfalls ausgeführt."
                  className="fragment"
                >
                  break Schlüsselwort
                </li>
              </ul>
            </div>
            <div>
              <pre>
                <code
                  className="language-java"
                  data-line-numbers
                  dangerouslySetInnerHTML={{
                    __html:
                      'switch (datenobjekt) {\n' +
                      '  case 1:\n' +
                      '    // Quellcode\n' +
                      '    break;\n' +
                      '  case 2:\n' +
                      '    // Quellcode\n' +
                      '    break;\n' +
                      '  default:\n' +
                      '    // Quellcode\n' +
                      '    break;\n' +
                      '}',
                  }}
                ></code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/controlflow/Switch.java">
              Demo: Switch-Anweisung
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              wenn "r", "R", dann rot, wenn "g", "G", dann grün, ansonsten
              unbekannt
            </li>
          </ul>
          <p className="fragment">
            switch funktioniert mit int (auch byte und short), char, String und
            Enum.
          </p>
        </section>

        <section>
          <h2>switch vs. if-else-if</h2>
          <ul>
            <li className="fragment">
              switch ist bei vielen konstanten Fällen übersichtlicher.
            </li>
            <li className="fragment">
              if-else-if kann Bereiche und komplexe Bedingungen prüfen.
            </li>
            <li className="fragment">
              case-Werte müssen Konstanten sein (keine Methodenaufrufe).
            </li>
            <li className="fragment">
              Mehrere case-Werte können denselben Codeblock nutzen.
            </li>
          </ul>
        </section>

        <section>
          <h2>Switch Expression*</h2>
          <ul>
            <li className="fragment">Seit Java 14</li>
            <li className="fragment">liefert einen Wert</li>
            <li className="fragment">
              <Link to="https://docs.oracle.com/en/java/javase/21/language/switch-expressions-and-statements.html">
                Dokumentation Switch Expression
              </Link>
            </li>
          </ul>
          <pre>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'String color = "r";\n' +
                  'String colorText = switch (color) {\n' +
                  '  case "r", "R" -> "rot";\n' +
                  '  case "g", "G" -> "grün";\n' +
                  '  default -> "unbekannt";\n' +
                  '};',
              }}
            ></code>
          </pre>
          <NKR />
        </section>
      </section>

      <section data-topic="Bedingte Zuweisungen">
        <section className="divider">
          <p className="kicker">Kontrollstrukturen</p>
          <h2>Bedingte Zuweisungen*</h2>
          <p>Einen Wert in einer Zeile von einer Bedingung abhängig machen.</p>
          <NKR />
        </section>

        <section>
          <h2>Ternary Operator</h2>
          <ul>
            <li className="fragment">Kurzform für eine bedingte Zuweisung.</li>
            <li className="fragment">Nur für einfache Ausdrücke verwenden.</li>
          </ul>
        </section>

        <section>
          <h2>Beispiel Ternary Operator</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers="2-8|10"
              dangerouslySetInnerHTML={{
                __html:
                  'public static void main(String[] args) {\n' +
                  '  String output;\n' +
                  '  int availableCash = 300;\n' +
                  '  if (availableCash > 0) {\n' +
                  '    output = "Patte fließt";\n' +
                  '  } else {\n' +
                  '    output = "Pleite";\n' +
                  '  }\n' +
                  '\n' +
                  '  output = availableCash > 0 ? "Patte fließt" : "Pleite";\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/controlflow/TernaryOperator.java">
              Demo: Ternary Operator
            </Link>
          </h2>
          <ul>
            <li className="fragment">getTitle mit if-else</li>
            <li className="fragment">getTitle mit Ternary Operator</li>
          </ul>
        </section>
      </section>

      <section data-topic="while und do-while">
        <section className="divider">
          <p className="kicker">Schleifen</p>
          <h2>while und do-while</h2>
          <p>Code wiederholt ausführen, solange eine Bedingung erfüllt ist.</p>
        </section>

        <section>
          <h2>Warum Schleifen?</h2>
          <p>Schleifen wiederholen Code und verarbeiten Listen.</p>
          <ul>
            <li className="fragment">
              Durchschnittsnote aus einer Liste von Klausuren berechnen
            </li>
            <li className="fragment">
              Summe der Artikel im Warenkorb berechnen
            </li>
            <li className="fragment">
              Solange kein Film mit Bewertung 4+ gefunden ist, zum nächsten Film
              gehen
            </li>
          </ul>
        </section>

        <section>
          <h2>Arten von Schleifen</h2>
          <ul>
            <li className="fragment">while-Schleife</li>
            <li className="fragment">do-while-Schleife</li>
            <li className="fragment">for-Schleife</li>
            <li className="fragment">for-each-Schleife</li>
          </ul>
        </section>

        <section>
          <h2>while-Schleife</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'while (bedingung) {\n' + '  // Quellcode\n' + '}',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">while Schlüsselwort</li>
            <li className="fragment">Bedingung</li>
            <li className="fragment">Code Block</li>
          </ul>
          <p className="fragment">
            Die Bedingung wird vor jedem Durchlauf geprüft.
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/controlflow/Loops.java">
              Demo: while-Schleife
            </Link>
          </h2>
          <ul>
            <li className="fragment">Zahlen von 0 bis 4 ausgeben.</li>
          </ul>
        </section>

        <section>
          <h2>do-while-Schleife</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'do {\n' + '  // Quellcode\n' + '} while (bedingung);',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">do Schlüsselwort</li>
            <li className="fragment">Code Block</li>
            <li className="fragment">while Schlüsselwort</li>
            <li className="fragment">Bedingung</li>
          </ul>
          <p className="fragment">
            Der Code Block wird mindestens einmal ausgeführt.
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/controlflow/Loops.java">
              Demo: do-while-Schleife
            </Link>
          </h2>
          <ul>
            <li className="fragment">Zahlen von 0 bis 4 ausgeben.</li>
          </ul>
        </section>
      </section>

      <section data-topic="for und for-each">
        <section className="divider">
          <p className="kicker">Schleifen</p>
          <h2>for und for-each</h2>
          <p>
            Mit einer Zählschleife oder elementweise durch eine Sammlung
            iterieren.
          </p>
        </section>

        <section>
          <h2>for-Schleife</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'for (int i = 0; i &lt; 5; i++) {\n' +
                  '  // Quellcode\n' +
                  '}',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">
              Initialisierung (einmal vor der Schleife)
            </li>
            <li className="fragment">Bedingung (vor jedem Durchlauf)</li>
            <li className="fragment">Update (nach jedem Durchlauf)</li>
            <li className="fragment">Code Block</li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/controlflow/Loops.java">
              Demo: for-Schleife
            </Link>
          </h2>
          <ul>
            <li className="fragment">Zahlen von 0 bis 4 ausgeben.</li>
          </ul>
        </section>

        <section>
          <h2>for-each-Schleife</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'int[] numbers = { 0, 1, 2, 3, 4 };\n' +
                  'for (int number : numbers) {\n' +
                  '  // Quellcode\n' +
                  '}',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">for Schlüsselwort</li>
            <li className="fragment">Typ des einzelnen Elements</li>
            <li className="fragment">Bezeichner für das aktuelle Element</li>
            <li
              tabIndex={0}
              data-tooltip="Das Beispiel nutzt bereits ein Array; die Details folgen im Arrays-Kapitel."
              className="fragment"
            >
              Array oder Collection, das durchlaufen wird
            </li>
            <li className="fragment">
              Durchläuft alle Elemente von vorne nach hinten.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/controlflow/Loops.java">
              Demo: for-each-Schleife
            </Link>
          </h2>
          <ul>
            <li className="fragment">Zahlen von 0 bis 4 ausgeben.</li>
          </ul>
        </section>
      </section>

      <section data-topic="Schleifensteuerung">
        <section className="divider">
          <p className="kicker">Schleifen</p>
          <h2>Schleifensteuerung</h2>
          <p>
            Schleifen vorzeitig beenden oder den aktuellen Durchlauf
            überspringen.
          </p>
        </section>

        <section>
          <h2>break</h2>
          <p>
            beendet die <strong>aktuelle</strong> Schleife sofort.
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/controlflow/Loops.java">
              Demo: break in while(true)
            </Link>
          </h2>
          <ul>
            <li className="fragment">
              Beende die Schleife, sobald die Zahl durch 2 teilbar ist.
            </li>
          </ul>
        </section>

        <section>
          <h2>continue</h2>
          <p>
            überspringt den <strong>Rest</strong> des aktuellen Durchlaufs und
            setzt mit dem nächsten fort.
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java1/controlflow/Loops.java">
              Demo: continue in for-each
            </Link>
          </h2>
          <ul>
            <li className="fragment">Überspringe alle ungeraden Zahlen.</li>
          </ul>
        </section>
      </section>

      <section data-topic="Arrays">
        <section className="divider">
          <p className="kicker">Datenstrukturen</p>
          <h2>Arrays</h2>
          <p>
            Mehrere Werte desselben Typs in einer festen Reihenfolge speichern.
          </p>
        </section>

        <section>
          <h2>Eigenschaften eines Arrays</h2>
          <ul>
            <li className="fragment">
              speichert mehrere Datenobjekte eines gleichen Typs
            </li>
            <li className="fragment">
              speichert eine definierte Anzahl an Datenobjekten
            </li>
          </ul>
        </section>

        <section>
          <h2>Beispiele</h2>
          <ul>
            <li className="fragment">
              die Namen von mir, meiner Freundin und meines besten Freundes
            </li>
            <li className="fragment">
              die Noten von mir, meiner Freundin und meines besten Freundes
            </li>
          </ul>
        </section>

        <section>
          <h2>Array deklarieren</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html: 'int[] numbers = { 0, 1, 2, 3, 4 };',
              }}
            ></code>
          </pre>
          <ul>
            <li className="fragment">Datentyp der zu speichernden Elemente</li>
            <li className="fragment">eckige Klammern []</li>
            <li className="fragment">Bezeichner</li>
            <li className="fragment">Zuweisungsoperator =</li>
            <li className="fragment">
              Elemente kommagetrennt in geschweiften Klammern
            </li>
          </ul>
          <p className="fragment">Das Array hat eine feste Länge von 5.</p>
        </section>

        <section>
          <h2>Daten lesen</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'int[] numbers = { 0, 1, 2, 3, 4 };\n' +
                  'int dasVierteElement = numbers[3];',
              }}
            ></code>
          </pre>
          <p className="fragment">Der Index beginnt bei 0.</p>
        </section>

        <section>
          <h2>Daten speichern</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'int[] numbers = { 0, 1, 2, 3, 4 };\n' + 'numbers[3] = 9;',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Array initialisieren</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'int[] numbers = new int[4];          // 0, 0, 0, 0\n' +
                  'Integer[] integers = new Integer[4]; // null, null, null, null',
              }}
            ></code>
          </pre>
          <p
            className="fragment"
            tabIndex={0}
            data-tooltip="Was null bedeutet und wie man damit umgeht, klären wir später."
          >
            Wrapper-Klassen haben den Standardwert <code>null</code>.
          </p>
        </section>

        <section>
          <h2>Länge ermitteln</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'int[] numbers = { 0, 1, 2, 3, 4 };\n' +
                  'int size = numbers.length; // size ist 5\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Array vergrößern</h2>
          <ul>
            <li className="fragment">Größe des neuen Arrays ermitteln</li>
            <li className="fragment">neues Array mit neuer Größe erstellen</li>
            <li className="fragment">
              mit einer Schleife die Elemente aus dem alten Array kopieren
            </li>
          </ul>
        </section>

        <section>
          <h2>Element einfügen</h2>
          <ul>
            <li className="fragment">Größe des neuen Arrays ermitteln</li>
            <li className="fragment">neues Array mit neuer Größe erstellen</li>
            <li className="fragment">
              mit einer Schleife die Elemente vor der neuen Stelle aus dem alten
              Array kopieren
            </li>
            <li className="fragment">neues Element hinzufügen</li>
            <li className="fragment">
              mit einer Schleife die Elemente nach der neuen Stelle aus dem
              alten Array kopieren
            </li>
          </ul>
        </section>

        <section>
          <h2>Was sind jetzt die args in der main Methode?</h2>
          <p>
            Die Kommandozeilenargumente werden als String-Array an die
            main-Methode übergeben.
          </p>
          <pre>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public static void main(String[] args) {\n' +
                  '  for (String arg : args) {\n' +
                  '    System.out.println(arg);\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
          <p className="fragment">Kommandozeile in Action</p>
        </section>
      </section>

      <section data-topic="ArrayList">
        <section className="divider">
          <p className="kicker">Datenstrukturen</p>
          <h2>ArrayList</h2>
          <p>Eine Liste mit dynamischer Länge und Hilfsmethoden nutzen.</p>
        </section>

        <section>
          <h2>ArrayList-Methoden</h2>
          <ul>
            <li className="fragment">
              <code>add(element)</code> – neues Element hinzufügen
            </li>
            <li className="fragment">
              <code>add(index, element)</code> – an bestimmter Stelle einfügen
            </li>
            <li className="fragment">
              <code>clear()</code> – komplette Liste leeren
            </li>
            <li className="fragment">
              <code>contains(element)</code> – prüfen, ob ein Element enthalten
              ist
            </li>
            <li className="fragment">...</li>
          </ul>
        </section>

        <section>
          <h2>Warum Integer statt int?</h2>
          <p>
            Eine ArrayList speichert Objekte. Deshalb braucht sie
            Wrapper-Klassen: <code>ArrayList&lt;Integer&gt;</code> ist erlaubt,{' '}
            <code>ArrayList&lt;int&gt;</code> nicht.
          </p>
          <table>
            <thead>
              <tr>
                <th>Primitivtyp</th>
                <th>Wrapper</th>
                <th>Primitivtyp</th>
                <th>Wrapper</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>boolean</td>
                <td>Boolean</td>
                <td>int</td>
                <td>Integer</td>
              </tr>
              <tr>
                <td>char</td>
                <td>Character</td>
                <td>long</td>
                <td>Long</td>
              </tr>
              <tr>
                <td>byte</td>
                <td>Byte</td>
                <td>float</td>
                <td>Float</td>
              </tr>
              <tr>
                <td>short</td>
                <td>Short</td>
                <td>double</td>
                <td>Double</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>ArrayList deklarieren</h2>
          <pre>
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'ArrayList&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();\n' +
                  'numbers.add(42);             // int → Integer (Autoboxing)\n' +
                  'int first = numbers.get(0);  // Integer → int (Unboxing)\n' +
                  '// Java wandelt automatisch um.',
              }}
            ></code>
          </pre>
          <p className="fragment">
            <code>&lt;Integer&gt;</code> sind Generics &rarr; Java 2
          </p>
          <p className="fragment">
            <code>new</code> erzeugt ein Objekt; Details folgen bei Klassen und
            Objekten.
          </p>
        </section>

        <section>
          <h2>Länge einer ArrayList ermitteln</h2>
          <pre className="fragment">
            <code
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'ArrayList&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();\n' +
                  'int size = numbers.size(); // size ist 0\n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java1/arrays">
              Demo: Array und ArrayList
            </Link>
          </h2>
          <ul>
            <li className="fragment">3 Namen (literal)</li>
            <li className="fragment">Länge ausgeben</li>
            <li className="fragment">Marianna überschreiben</li>
            <li className="fragment">Alle Namen ausgeben</li>
            <li className="fragment">3 Noten Array erstellen (new)</li>
          </ul>
        </section>
      </section>

      <section data-topic="Variable Argumentlisten">
        <section className="divider">
          <p className="kicker">Methoden</p>
          <h2>Variable Argumentlisten*</h2>
          <p>
            Methoden mit beliebig vielen Argumenten eines Typs aufrufen; auch
            VarArgs genannt.
          </p>
          <NKR />
        </section>

        <section>
          <h2>Variable Argumentlisten</h2>
          <p>
            Damit eine Methode eine variable Anzahl von Argumenten eines
            gleichen Datentyps verarbeiten kann, muss ein Parameter als variable
            Argumentliste definiert werden.
          </p>
        </section>

        <section>
          <h2>VarArgs verwenden</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers="1-5|2|3|4"
              dangerouslySetInnerHTML={{
                __html:
                  'public static void main(String[] args) {\n' +
                  '  int twoParameters   = Example.sum(1, 2);\n' +
                  '  int threeParameters = Example.sum(1, 2, 3);\n' +
                  '  int fourParameters  = Example.sum(1, 2, 3, 4);\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>VarArgs implementieren</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers="|1-2|3-7"
              dangerouslySetInnerHTML={{
                __html:
                  'public static int sum(int... numbers) {\n' +
                  '  // numbers ist ein Array\n' +
                  '  int sum = 0;\n' +
                  '  for (int number : numbers) {\n' +
                  '    sum = sum + number;\n' +
                  '  }\n' +
                  '  return sum;\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Regeln für VarArgs</h2>
          <ul>
            <li className="fragment">
              Der VarArgs-Parameter steht am Ende der Parameterliste.
            </li>
            <li className="fragment">
              Es gibt höchstens einen VarArgs-Parameter pro Methode.
            </li>
            <li className="fragment">
              Intern ist der VarArgs-Parameter ein Array.
            </li>
            <li className="fragment">
              Beim Aufruf werden die Argumente kommagetrennt übergeben.
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
