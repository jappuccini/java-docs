import Link from '@docusaurus/Link';
import BigOComplexity from '@site/static/img/big-o-complexity.svg';
import Slides from '../../../../components/Slides';

const captionStyle = { margin: '0.4em 0' };

export default function IntroDsa(): React.JSX.Element {
  return (
    <Slides title="Algorithmen und Datenstrukturen">
      <section>
        <section className="cover">
          <p className="kicker">Fortgeschrittene Programmierung</p>
          <h1>Algorithmen und Datenstrukturen</h1>
          <p>
            Algorithmen und Datenstrukturen unterscheiden und ihr Wachstum mit
            Big-O einordnen.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Grundlagen</li>
            <li className="fragment">Problemfelder</li>
            <li className="fragment">Erwartungen an DSA</li>
            <li className="fragment">Landau-Notation</li>
            <li className="fragment">Big-O bestimmen</li>
          </ul>
        </section>
      </section>

      <section data-topic="Grundlagen">
        <section className="divider">
          <p className="kicker">Einführung</p>
          <h2>Grundlagen</h2>
          <p>
            Was Algorithmen und Datenstrukturen sind und warum sie
            zusammengehören.
          </p>
        </section>

        <section>
          <h2>Was ist ein Algorithmus?</h2>
          <p className="fragment">
            systematische Vorgehensweise zur Lösung eines Problems
          </p>
        </section>

        <section>
          <h2>Charakteristika von Algorithmen</h2>
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
              Terminiertheit
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
            spezifische Anordnung von Daten, um sie effizient zu verwalten und
            auf sie zuzugreifen
          </p>
        </section>

        <section>
          <h2>Charakteristika von Datenstrukturen</h2>
          <table>
            <thead>
              <tr>
                <th>Charakteristikum</th>
                <th>Ausprägung</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>Größe</td>
                <td>statisch / dynamisch</td>
                <td>Array / ArrayList</td>
              </tr>
              <tr className="fragment">
                <td>Anordnung</td>
                <td>linear / nicht-linear</td>
                <td>List / Tree</td>
              </tr>
              <tr className="fragment">
                <td>Zugriff</td>
                <td>direkt / sequenziell</td>
                <td>Array / LinkedList</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Kann man Datenstrukturen und Algorithmen trennen?</h2>
          <p className="fragment">Nein — nur die Kombination bringt etwas.</p>
          <p className="fragment">
            Was bringt ein Array, wenn niemand es liest oder schreibt?
          </p>
          <p className="fragment">
            Was bringt ein Sortieralgorithmus ohne Daten?
          </p>
        </section>

        <section>
          <h2>Unsere Definition von DSA</h2>
          <div className="callout">
            <p>
              Ein Algorithmus (A) erzeugt, manipuliert und entfernt eine oder
              mehrere Datenstrukturen (DS), um ein spezifisches Problem
              effizient zu lösen.
            </p>
          </div>
        </section>
      </section>

      <section data-topic="Problemfelder">
        <section className="divider">
          <p className="kicker">Motivation</p>
          <h2>Problemfelder</h2>
          <p>
            Welche Probleme Algorithmen und Datenstrukturen lösen und wo ihre
            Grenzen liegen.
          </p>
        </section>

        <section>
          <h2>Prozessprobleme</h2>
          <ul>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Element in einer Datensammlung finden"
            >
              Suche
            </li>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Datensammlung in eine Reihenfolge bringen"
            >
              Sortierung
            </li>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Daten filtern, transformieren oder aggregieren"
            >
              Verarbeitung
            </li>
          </ul>
        </section>

        <section>
          <h2>Technische Probleme</h2>
          <ul>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Wie viele Schritte braucht der Algorithmus?"
            >
              Zeitkomplexität
            </li>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Wie viel Speicher braucht der Algorithmus?"
            >
              Speicherkomplexität
            </li>
          </ul>
        </section>

        <section>
          <h2>Optimum</h2>
          <p className="fragment">
            Ein Optimum lässt sich nur für ein Problemfeld und ein technisches
            Problem finden.
          </p>
          <p className="fragment">
            Es gibt keinen allgemeinen Algorithmus, der jedes Problem
            gleichzeitig in kürzester Zeit und mit minimalem Speicher löst.
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/intro/examples">
              Demo: Performance von Suche und Verarbeitung
            </Link>
          </h2>
          <ul>
            <li className="fragment">Erstellen: HashMap und ArrayList</li>
            <li className="fragment">Suchen: HashMap und ArrayList</li>
            <li className="fragment">Löschen: HashMap und ArrayList</li>
          </ul>
        </section>
      </section>

      <section data-topic="Erwartungen an DSA">
        <section className="divider">
          <p className="kicker">Einordnung</p>
          <h2>Erwartungen an DSA</h2>
          <p>Was dieses Modul abdeckt und was es bewusst auslässt.</p>
        </section>

        <section>
          <h2>Inhalte</h2>
          <ul>
            <li className="fragment">
              Grundlegende praktische Datenstrukturen
            </li>
            <li className="fragment">Worst-Case-Szenario</li>
            <li className="fragment">keine Beweise</li>
            <li className="fragment">Einstieg in das Themengebiet</li>
          </ul>
        </section>
      </section>

      <section data-topic="Landau-Notation">
        <section className="divider">
          <p className="kicker">Komplexität</p>
          <h2>Landau-Notation</h2>
          <p>Wachstum von Algorithmen unabhängig von Hardware vergleichen.</p>
        </section>

        <section>
          <h2>Landau-Notation und Big-O</h2>
          <div className="callout">
            <p>
              Die Landau-Notation umfasst mehrere Schranken (O, Ω, Θ). Wir
              verwenden Big-O als obere Schranke und beschreiben damit den Worst
              Case — deshalb ist der Worst Case unser Standard.
            </p>
          </div>
          <p className="fragment">
            Big-O kategorisiert Algorithmen nach Speicher- und
            Zeitanforderungen.
          </p>
          <p className="fragment">
            Big-O ist keine exakte Messung, sondern beschreibt das Wachstum.
          </p>
        </section>

        <section>
          <h2>Warum Big-O nutzen?</h2>
          <p>
            Wenn wir wissen, welche Stärken und Schwächen ein Algorithmus hat,
            können wir den besten Algorithmus für unser Problem nutzen.
          </p>
          <p>
            So lassen sich Algorithmen unabhängig von Hardware und
            Programmiersprache vergleichen.
          </p>
        </section>

        <section>
          <h2>Was ist Big-O?</h2>
          <div className="callout">
            <p>
              Big-O gibt an, wie ein Algorithmus in Abhängigkeit von der
              Eingabegröße <b>N</b> wächst — in Bezug auf Laufzeit und Speicher.
            </p>
          </div>
        </section>

        <section>
          <h2>Wachstum im Vergleich</h2>
          <BigOComplexity
            style={{
              display: 'block',
              width: 'auto',
              maxWidth: '100%',
              height: '420px',
              margin: '0 auto',
            }}
          />
          <p className="label" style={{ textAlign: 'center' }}>
            Wachstum der Komplexitätsklassen (N bis 100)
          </p>
        </section>
      </section>

      <section data-topic="Big-O bestimmen">
        <section className="divider">
          <p className="kicker">Komplexität</p>
          <h2>Big-O bestimmen</h2>
          <p>Big-O aus Code ableiten und Konstanten richtig einordnen.</p>
        </section>

        <section>
          <h2>Lineares Wachstum</h2>
          <p>O(N)</p>
          <ul>
            <li className="fragment">
              10 Elemente entspricht 10 Zeiteinheiten
            </li>
            <li className="fragment">
              20 Elemente entspricht 20 Zeiteinheiten
            </li>
          </ul>
        </section>

        <section>
          <h2>Beispiel: O(N)</h2>
          <pre style={{ fontSize: '18px', lineHeight: 1.4 }}>
            <code
              data-line-numbers
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class SalarySum {\n' +
                  '  public static int sum(int[] department) {\n' +
                  '    int sum = 0;\n' +
                  '    for (int i = 0; i &lt; department.length; i++) {\n' +
                  '      sum += department[i];\n' +
                  '    }\n' +
                  '    return sum;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment font-medium" style={captionStyle}>
            Summe der Gehälter einer Abteilung.
          </p>
          <p className="fragment font-medium" style={captionStyle}>
            N Gehälter → N Schritte.
          </p>
          <p className="fragment font-medium" style={captionStyle}>
            N = Anzahl der Einträge pro Ebene.
          </p>
        </section>

        <section>
          <h2>Beispiel: O(N²)</h2>
          <pre style={{ fontSize: '18px', lineHeight: 1.4 }}>
            <code
              data-line-numbers
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class SalarySum {\n' +
                  '  public static int sum(int[][] company) {\n' +
                  '    int sum = 0;\n' +
                  '    for (int i = 0; i &lt; company.length; i++) {\n' +
                  '      for (int j = 0; j &lt; company[i].length; j++) {\n' +
                  '        sum += company[i][j];\n' +
                  '      }\n' +
                  '    }\n' +
                  '    return sum;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment font-medium" style={captionStyle}>
            Summe der Gehälter aller Abteilungen eines Unternehmens.
          </p>
          <p className="fragment font-medium" style={captionStyle}>
            N Abteilungen mit je N Gehältern → N × N Schritte.
          </p>
        </section>

        <section>
          <h2>Beispiel: O(N³)</h2>
          <pre style={{ fontSize: '18px', lineHeight: 1.4 }}>
            <code
              data-line-numbers
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class SalarySum {\n' +
                  '  public static int sum(int[][][] group) {\n' +
                  '    int sum = 0;\n' +
                  '    for (int i = 0; i &lt; group.length; i++) {\n' +
                  '      for (int j = 0; j &lt; group[i].length; j++) {\n' +
                  '        for (int k = 0; k &lt; group[i][j].length; k++) {\n' +
                  '          sum += group[i][j][k];\n' +
                  '        }\n' +
                  '      }\n' +
                  '    }\n' +
                  '    return sum;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment font-medium" style={captionStyle}>
            Summe der Gehälter aller Unternehmen eines Konzerns.
          </p>
          <p className="fragment font-medium" style={captionStyle}>
            N Unternehmen mit je N Abteilungen und je N Gehältern → N × N × N
            Schritte.
          </p>
        </section>

        <section>
          <h2>Big-O von zwei Schleifen?</h2>
          <pre style={{ fontSize: '18px', lineHeight: 1.4 }}>
            <code
              data-line-numbers
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class SalarySum {\n' +
                  '  public static int sum(int[] department) {\n' +
                  '    int sum = 0;\n' +
                  '    for (int i = 0; i &lt; department.length; i++) {\n' +
                  '      sum += department[i];\n' +
                  '    }\n' +
                  '    for (int i = 0; i &lt; department.length; i++) {\n' +
                  '      sum += department[i];\n' +
                  '    }\n' +
                  '    return sum;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment font-medium" style={captionStyle}>
            O(2N) = O(N)
          </p>
        </section>

        <section>
          <h2>Warum Konstanten ignoriert werden</h2>
          <table>
            <thead>
              <tr>
                <th>N</th>
                <th>O(10N)</th>
                <th>O(N²)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>1</td>
                <td>10</td>
                <td>1</td>
              </tr>
              <tr className="fragment">
                <td>5</td>
                <td>50</td>
                <td>25</td>
              </tr>
              <tr className="fragment">
                <td>100</td>
                <td>1000</td>
                <td>10.000</td>
              </tr>
              <tr className="fragment">
                <td>1000</td>
                <td>10.000</td>
                <td>1.000.000</td>
              </tr>
              <tr className="fragment">
                <td>10.000</td>
                <td>100.000</td>
                <td>100.000.000</td>
              </tr>
            </tbody>
          </table>
          <p className="fragment">Konstanten können ignoriert werden.</p>
        </section>

        <section>
          <h2>Big-O mit Early Return?</h2>
          <pre style={{ fontSize: '18px', lineHeight: 1.4 }}>
            <code
              data-line-numbers
              className="language-java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class SalarySum {\n' +
                  '  public static int sum(int[] department) {\n' +
                  '    int sum = 0;\n' +
                  '    for (int i = 0; i &lt; department.length; i++) {\n' +
                  '      if (sum &gt; 9876) {\n' +
                  '        return sum;\n' +
                  '      }\n' +
                  '      sum += department[i];\n' +
                  '    }\n' +
                  '    return sum;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment font-medium" style={captionStyle}>
            Best Case O(1), Worst Case O(N)
          </p>
          <p className="fragment font-medium" style={captionStyle}>
            Der Worst Case ist unser Standard.
          </p>
        </section>

        <section>
          <h2>Unsere Regeln</h2>
          <ul>
            <li>Das Wachstum hängt von der Eingabegröße ab.</li>
            <li>Konstanten werden ignoriert.</li>
            <li>Der Worst Case ist unser Standard.</li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
