import Link from '@docusaurus/Link';
import InterpolationSearchFormula from '@site/static/img/interpolation-search-formula.svg';
import Slides from '../../../../components/Slides';

export default function SearchAlgo(): React.JSX.Element {
  return (
    <Slides title="Suchalgorithmen">
      <section>
        <section className="cover">
          <p className="kicker">Fortgeschrittene Programmierung</p>
          <h1>Suchalgorithmen</h1>
          <p>
            Lineare, binäre und Interpolationssuche verstehen und ihre Kosten
            einordnen.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Grundlagen</li>
            <li className="fragment">Lineare Suche</li>
            <li className="fragment">Binäre Suche</li>
            <li className="fragment">Interpolationssuche</li>
            <li className="fragment">Vergleich</li>
            <li className="fragment">Two Crystal Balls Problem</li>
          </ul>
        </section>
      </section>

      <section data-topic="Grundlagen">
        <section className="divider">
          <p className="kicker">Einführung</p>
          <h2>Grundlagen</h2>
          <p>Was Suchen bedeutet und wo Suchalgorithmen eingesetzt werden.</p>
        </section>

        <section>
          <h2>Was ist Suchen?</h2>
          <p className="fragment">
            Das Auffinden eines bestimmten Elements innerhalb einer
            Datensammlung.
          </p>
        </section>

        <section>
          <h2>Zielelement und Suchraum</h2>
          <ul>
            <li
              tabIndex={0}
              data-tooltip="Element, das innerhalb einer Datensammlung gesucht wird, z. B. ein Wert oder Eintrag."
            >
              Zielelement
            </li>
            <li tabIndex={0} data-tooltip="Datensammlung, die durchsucht wird.">
              Suchraum
            </li>
          </ul>
        </section>

        <section>
          <h2>Anwendungen von Suchalgorithmen</h2>
          <ul>
            <li tabIndex={0} data-tooltip="Google, Bing usw.">
              Suchmaschinen
            </li>
            <li tabIndex={0} data-tooltip="PostgreSQL, MongoDB usw.">
              Datenbanksysteme
            </li>
            <li tabIndex={0} data-tooltip="Amazon, Zalando usw.">
              E-Commerce
            </li>
            <li tabIndex={0} data-tooltip="Bild- und Spracherkennung">
              Musteranalyse
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Lineare Suche">
        <section className="divider">
          <p className="kicker">Suchalgorithmen</p>
          <h2>Lineare Suche</h2>
          <p>Jedes Element prüfen, bis das Zielelement gefunden ist.</p>
        </section>

        <section>
          <h2>Funktionsweise</h2>
          <p>
            Die lineare Suche beginnt an einem Ende des Suchraums und durchläuft
            jedes Element, bis das Zielelement gefunden wird.
          </p>
        </section>

        <section>
          <h2>Vorgehen</h2>
          <ul>
            <li className="fragment">
              Jedes Element kann mit dem Suchkriterium übereinstimmen und wird
              überprüft.
            </li>
            <li
              data-tooltip="oder das Element selbst &rarr; kommt darauf an"
              tabIndex={0}
              className="fragment"
            >
              Wenn das Zielelement gefunden wurde, wird der Index des
              Zielelements zurückgegeben.
            </li>
            <li
              data-tooltip="oder null oder eine Exception &rarr; kommt darauf an"
              tabIndex={0}
              className="fragment"
            >
              Wenn das Zielelement nicht gefunden wurde, wird -1 zurückgegeben.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/search/examples/LinearSearch.java">
              Demo: Lineare Suche
            </Link>
          </h2>
        </section>

        <section>
          <h2>Performance</h2>
          <ul>
            <li className="fragment">Zeitkomplexität: O(N)</li>
            <li className="fragment">Speicherkomplexität: O(1)</li>
          </ul>
        </section>

        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li className="fragment">Unabhängig von Sortierung einsetzbar</li>
            <li className="fragment">Kein weiterer Speicherbedarf</li>
            <li className="fragment">Geeignet für kleine Datenmengen</li>
          </ul>
        </section>
      </section>

      <section data-topic="Binäre Suche">
        <section className="divider">
          <p className="kicker">Suchalgorithmen</p>
          <h2>Binäre Suche</h2>
          <p>Den Suchraum halbieren, bis das Zielelement gefunden ist.</p>
        </section>

        <section>
          <h2>Funktionsweise</h2>
          <p className="fragment">
            Die binäre Suche setzt einen sortierten Suchraum voraus, was die
            Suche erheblich vereinfacht.
          </p>
          <p
            className="fragment"
            data-tooltip="Suchraum: { 1, 2, 3, 4, 5, 6 } Zielelement: 6, Element: 4"
            tabIndex={0}
          >
            Wird ein Element innerhalb des Suchraums mit dem Zielelement
            verglichen, kann abgeleitet werden, ob das Zielelement vor oder nach
            dem Element sein muss.
          </p>
        </section>

        <section>
          <h2>Vorgehen</h2>
          <ol>
            <li className="fragment">Mitte des aktuellen Suchraums finden</li>
            <li className="fragment">
              Wenn das Element in der Mitte dem Suchkriterium entspricht &rarr;
              Index zurückgeben.
            </li>
            <li className="fragment">
              Wenn das Element in der Mitte größer als das Suchkriterium ist
              &rarr; in der ersten Hälfte weitersuchen.
            </li>
            <li className="fragment">
              Wenn das Element in der Mitte kleiner als das Suchkriterium ist
              &rarr; in der zweiten Hälfte weitersuchen.
            </li>
            <li className="fragment">
              Wenn das Zielelement nicht gefunden wurde &rarr; -1 zurückgeben.
            </li>
          </ol>
        </section>

        <section>
          <h2>Begriffe: low, high und middle</h2>
          <ul>
            <li className="fragment">
              high = Index des oberen Endes des Suchraums
            </li>
            <li className="fragment">
              low = Index des unteren Endes des Suchraums
            </li>
            <li className="fragment">middle = Index der Mitte des Suchraums</li>
            <li
              tabIndex={0}
              className="fragment"
              data-tooltip="Suchraum: { 1, 2, 3, 4, 5 }, high: 4, low: 0, middle: 2"
            >
              Beispiel
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/search/examples/BinarySearch.java">
              Demo: Binäre Suche
            </Link>
          </h2>
          <ul>
            <li className="fragment">low/high/middle</li>
            <li className="fragment">gefunden/größer/kleiner</li>
            <li className="fragment">while-Bedingung/nicht gefunden</li>
          </ul>
        </section>
      </section>

      <section data-topic="Interpolationssuche">
        <section className="divider">
          <p className="kicker">Suchalgorithmen</p>
          <h2>Interpolationssuche</h2>
          <p>Den Teilungspunkt mit linearer Interpolation schätzen.</p>
        </section>

        <section>
          <h2>Funktionsweise</h2>
          <p className="fragment">
            Die Interpolationssuche setzt einen sortierten und möglichst
            gleichverteilten Suchraum voraus.
          </p>
          <p
            className="fragment"
            data-tooltip="Beispiel: Telefonbuch A–Z"
            tabIndex={0}
          >
            Bei einer Gleichverteilung der Daten kann der Suchraum mit der
            linearen Interpolation besser eingeschränkt werden.
          </p>
        </section>

        <section>
          <h2>Vorgehen</h2>
          <ol>
            <li className="fragment">
              Einen besseren Teilungspunkt des Suchraums finden (lineare
              Interpolation)
            </li>
            <li className="fragment">Rest wie bei der binären Suche</li>
          </ol>
        </section>

        <section>
          <h2>Lineare Interpolation</h2>
          <ul>
            <li className="fragment">
              Formel der linearen Interpolation
              <InterpolationSearchFormula
                style={{
                  display: 'block',
                  width: '100%',
                  maxWidth: '1000px',
                  height: 'auto',
                }}
              />
            </li>
            <li className="fragment">
              <Link href="https://www.youtube.com/watch?v=KYiIGZYrb9M&list=PLLTAHuUj-zHi-ozmbFAl461N1eOUyjrlS">
                Herleitung (Video)
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/search/examples/InterpolationSearch.java">
              Demo: Interpolationssuche
            </Link>
          </h2>
          <ul>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Wie in der Formel"
            >
              Teilungspunkt anpassen
            </li>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Was passiert außerhalb der Grenzen?"
            >
              while-Bedingung anpassen
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Vergleich">
        <section className="divider">
          <p className="kicker">Einordnung</p>
          <h2>Vergleich</h2>
          <p>Wann welcher Suchalgorithmus passt.</p>
        </section>

        <section>
          <h2>Lineare, binäre und Interpolationssuche im Vergleich</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Lineare Suche</th>
                <th>Binäre Suche</th>
                <th>Interpolationssuche</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <th scope="row">Sortierung</th>
                <td>irrelevant</td>
                <td>notwendig</td>
                <td>notwendig, möglichst gleichverteilt</td>
              </tr>
              <tr className="fragment">
                <th scope="row">Zeit (Worst Case)</th>
                <td>O(N)</td>
                <td>O(log N)</td>
                <td>O(N)</td>
              </tr>
            </tbody>
          </table>
          <p className="fragment foot-note">Abhängig vom Anwendungsfall.</p>
        </section>
      </section>

      <section data-topic="Two Crystal Balls Problem">
        <section className="divider">
          <p className="kicker">Ausblick</p>
          <h2>Two Crystal Balls Problem</h2>
          <p>Ein Beispiel für O(√n) mit zwei identischen Kugeln.</p>
        </section>

        <section>
          <h2>Das Problem</h2>
          <p>
            Zwei identische Kugeln, ein Gebäude mit 100 Stockwerken. Ab
            Stockwerk f bricht eine Kugel — und ab jedem höheren Stockwerk
            ebenfalls.
          </p>
          <p className="fragment">
            Gesucht: das niedrigste Stockwerk f mit möglichst wenigen Würfen im
            Worst Case.
          </p>
          <div className="callout fragment">
            <span className="callout-title">Beispiel</span>
            <p>f = 37: Die Kugel bricht ab 37, also auch ab 38, 39, …</p>
          </div>
        </section>

        <section>
          <p className="kicker">Diskussion</p>
          <h2>Was ist eure Idee?</h2>
          <p>
            Zwei Kugeln, 100 Stockwerke: Wie findet ihr f mit möglichst wenigen
            Würfen im Worst Case?
          </p>
        </section>

        <section>
          <h2>Lösungsidee: O(√n)</h2>
          <ul>
            <li className="fragment">Sprungweite √n = 10 Stockwerke.</li>
            <li className="fragment">
              Erste Kugel: 10, 20, 30 … bis sie bricht.
            </li>
            <li className="fragment">
              Zweite Kugel: vorheriges Intervall linear von unten durchsuchen.
            </li>
            <li className="fragment">
              Worst Case der √n-Strategie: 10 Sprünge + 9 Prüfungen = höchstens
              19 Würfe &rarr; O(√n).
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
