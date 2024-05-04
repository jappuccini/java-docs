import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function IntroDsa(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Intro</li>
            <li className="fragment">Problemfelder</li>
            <li className="fragment">Erwartungen an DSA</li>
            <li className="fragment">Landau-Notation</li>
            <li className="fragment">Fallbeispiel Problem</li>
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
          <h2>Problemfelder</h2>
        </section>
        <section>
          <h2>Prozessprobleme</h2>
          <ul>
            <li className="fragment">Suche</li>
            <li className="fragment">Sortierung</li>
            <li className="fragment">Verarbeitung</li>
          </ul>
        </section>
        <section>
          <h2>Technische Probleme</h2>
          <ul>
            <li className="fragment">Zeitkomplexität</li>
            <li className="fragment">Speicherkomplexität</li>
          </ul>
        </section>
        <section>
          <h2>Optimum</h2>
          <p className="fragment">
            Das Optimum kann nur für ein Problemfeld für ein technisches Problem
            gefunden werden.
          </p>
          <p className="fragment">
            Es existiert kein Allgemeiner Algorithmus, der jedes Problem in der
            kürzesten Zeit mit der geringsten Speichermenge löst.
          </p>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/intro">
              Demo - Performance von Suche und Verarbeitung
            </Link>
          </h2>
          <ul>
            <li className="fragment">Erstellen einer HashMap & ArrayList</li>
            <li className="fragment">Suchen in einer HashMap & ArrayList</li>
            <li className="fragment">Löschen in einer HashMap & ArrayList</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Erwartungen an DSA</h2>
        </section>
        <section>
          <h2>Inhalte</h2>
          <ul>
            <li className="fragment">
              Grundlegende Praktikable Datenstrukturen
            </li>
            <li className="fragment">Worst Case Szenario</li>
            <li className="fragment">keine Beweise</li>
            <li data-tooltip="IMHO!" tabIndex={0} className="fragment">
              kaum Coding (von euch, da Projektbericht)
            </li>
            <li className="fragment">Einstieg in das Themengebiet</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Landaunotation</h2>
          <p className="foot-note">wird auch Big-O Notation genannt</p>
        </section>
        <section>
          <h2>Landaunotation (Big-O)</h2>
          <p className="fragment">
            wird verwendet um Algorithmen in Bezug auf Speicher- und
            Zeitanforderungen zu kategorisieren.
          </p>
          <p className="fragment">
            ist keine exakte Messung, sondern soll das Wachstum des Algorithmus
            generalisieren.
          </p>
        </section>
        <section>
          <h2>Warum brauchen Big-O?</h2>
          <p>
            Wenn wir wissen, welche Stärken und Schwächen ein Algorithmus hat,
            können wie den besten Algorithmus für unser Problem nutzen.
          </p>
          <p className="foot-note">Ich benutz immer Big-O zum erklären</p>
        </section>
        <section>
          <h2>Was ist Big-O?</h2>
          <p>
            gibt an in welchem Verhältnis ein Algorithmus abhängig vom{' '}
            <b>input</b> in Bezug auf Laufzeit und Speicher wächst
          </p>
        </section>
        <section>
          <h2>Beispiel für Big-O</h2>
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
          <h2>Beispiel für Big-O</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class BigO {\n' +
                  '  // O(N)\n' +
                  '  public static void method(int[] n) {\n' +
                  '    int sum = 0;\n' +
                  '    for(int i = 0; i &gt; n.length; i++) {\n' +
                  '      sum += n[i];\n' +
                  '    }\n' +
                  '    return sum;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">Jahresgehalt eines Mitarbeiters</p>
        </section>
        <section
          data-background-size="contain"
          data-background-image={
            require('@site/static/img/big-o-complexity.png').default
          }
        ></section>
        <section>
          <h2>Beispiel für Big-O</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class BigO {\n' +
                  '  // O(N&sup2;)\n' +
                  '  public static void method(int[] n) {\n' +
                  '    int sum = 0;\n' +
                  '    for(int i = 0; i &gt; n.length; i++) {\n' +
                  '      for(int j = 0; j &gt; n.length; j++) {\n' +
                  '        sum += n[j];\n' +
                  '      }\n' +
                  '    }\n' +
                  '    return sum;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Jahresgehalt jedes Mitarbeiters einer Abteilung
          </p>
        </section>
        <section>
          <h2>Beispiel für Big-O</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class BigO {\n' +
                  '  // O(N&sup3;)\n' +
                  '  public static void method(int[] n) {\n' +
                  '    int sum = 0;\n' +
                  '    for(int i = 0; i &gt; n.length; i++) {\n' +
                  '      for(int j = 0; j &gt; n.length; j++) {\n' +
                  '        for(int k = 0; k &gt; n.length; k++) {\n' +
                  '          sum += n[k];\n' +
                  '        }\n' +
                  '      }\n' +
                  '    }\n' +
                  '    return sum;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">
            Jahresgehalt jedes Mitarbeiters jeder Abteilung
          </p>
        </section>
        <section>
          <h2>Big-O von diesem Code?</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class BigO {\n' +
                  '  public static void method(int[] n) {\n' +
                  '    int sum = 0;\n' +
                  '    for(int i = 0; i &gt; n.length; i++) {\n' +
                  '      sum += n[i];\n' +
                  '    }\n' +
                  '    for(int i = 0; i &gt; n.length; i++) {\n' +
                  '      sum += n[i];\n' +
                  '    }\n' +
                  '    return sum;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">praktisch: O(2N) &rarr; O(N)</p>
        </section>
        <section>
          <h2>Warum O(N) anstatt O(2N)</h2>
          <table>
            <thead>
              <tr>
                <th>N</th>
                <th>O(10N)</th>
                <th>O(N&sup2;)</th>
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
          <h2>Big-O von diesem Code?</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class BigO {\n' +
                  '  public static void method(int[] n) {\n' +
                  '    int sum = 0;\n' +
                  '    for(int i = 0; i &gt; n.length; i++) {\n' +
                  '      if(sum > 9876) {\n' +
                  '        return sum;\n' +
                  '      }\n' +
                  '      sum += n[i];\n' +
                  '    }\n' +
                  '    return sum;\n' +
                  '  }\n' +
                  '}\n',
              }}
            ></code>
          </pre>
          <p className="fragment">O(N) &rarr; Worst-Case-Szenario</p>
        </section>
        <section>
          <h2>Unsere Regeln</h2>
          <ul>
            <li>Wachstum ist abhängig vom Input</li>
            <li>Konstanten werden ignoriert</li>
            <li>Worst-Case ist unser default</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Fallbeispiel Problem</h2>
      </section>
    </Slides>
  );
}
