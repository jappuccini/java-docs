import Link from '@docusaurus/Link';
import InterpolationSearchFormula from '@site/static/img/interpolation-search-formula.svg';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function SearchAlgo(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Suchalgorithmen</h2>
        </section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Intro</li>
            <li className="fragment">Lineare Suche</li>
            <li className="fragment">Binärsuche</li>
            <li className="fragment">Interpolationssuche</li>
            <li className="fragment">Two Chrystal Balls Problem</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Intro</h2>
        </section>
        <section>
          <h2>Was ist Suchen?</h2>
          <p className="fragment">
            Auffinden eines bestimmten Elements innerhalb einer Datensammlung
          </p>
        </section>
        <section>
          <h2>Begriffe</h2>
          <ul>
            <li
              tabIndex={0}
              data-tooltip="Element das innerhalbe einer Datensammlung gesucht wird, z.B. Wert, Eintrag etc."
            >
              Zielelement
            </li>
            <li
              tabIndex={0}
              data-tooltip="Datensammlung welche durchsucht wird."
            >
              Suchraum
            </li>
          </ul>
        </section>
        <section>
          <h2>Anwendungen von Suchalgorithmen</h2>
          <ul>
            <li tabIndex={0} data-tooltip="Google, Bing, etc.">
              Suchmaschinen
            </li>
            <li tabIndex={0} data-tooltip="PostgreSQL, MongoDb, etc.">
              Datenbanksysteme
            </li>
            <li tabIndex={0} data-tooltip="Amazon, Zalando, etc.">
              E-Commerce
            </li>
            <li tabIndex={0} data-tooltip="Bild- und Spracherkennung">
              Musteranalyse
            </li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Lineare Suche</h2>
        </section>
        <section>
          <h2>Funktionsweise</h2>
          <p>
            Die lineare Suche beginnt an einem Ende des Suchraumes und
            durchläuft jedes Element, bis das Zielelement gefunden wird.
          </p>
        </section>
        <section>
          <h2>Theoretisches Konzept</h2>
          <ul>
            <li className="fragment">
              Jedes Element kann mit dem Suchkriterium übereinstimmen und wird
              überprüft.
            </li>
            <li
              data-tooltip="oder das Element selbst &rarr; kommt drauf an"
              tabIndex={0}
              className="fragment"
            >
              Wenn das Zielelement gefunden wurde, wird der Index des
              Zielelements zurückgegeben.
            </li>
            <li
              data-tooltip="oder null oder eine Exception &rarr; kommt drauf an"
              tabIndex={0}
              className="fragment"
            >
              Wenn das Zielelement nicht gefunden wurde, wird -1 zurückgegeben.
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/search/LinearSearch.java">
              Demo - Linear Search
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
            <li className="fragment">
              Kann unabhänging von Sortierung benutzt werden
            </li>
            <li className="fragment">Kein weiterer Speicherbedarf</li>
            <li className="fragment">Geeignet für kleine Datenmengen</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Binäre Suche</h2>
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
            Wird ein Element innerhalb des Suchraumes mit dem Zielelement
            verglichen, kann abgeleited werden, ob das Zielelement vor oder nach
            dem Element sein muss.
          </p>
        </section>
        <section>
          <h2>Theoretisches Konzept</h2>
          <ol>
            <li className="fragment">Mitte des aktuellen Suchraumes finden</li>
            <li className="fragment">
              Wenn Element in der Mitte dem Suchkriterium entspricht &rarr;
              index zurückgeben.
            </li>
            <li className="fragment">
              Wenn Element in der Mitte größer als Suchkriterium &rarr; in
              erster Hälfte weitersuchen
            </li>
            <li className="fragment">
              Wenn Element in der Mitte kleiner als Suchkriterium &rarr; in
              zweiter Hälfte weitersuchen
            </li>
            <li className="fragment">
              Wenn kein Element im Suchraum gefunden wurde &rarr; -1 zurückgeben{' '}
            </li>
          </ol>
        </section>
        <section>
          <h2>Begriffe - Binäre Suche</h2>
          <ul>
            <li className="fragment">
              high = index oberes Ende des Suchraumes
            </li>
            <li className="fragment">
              low = index unteres Ende des Suchraumes
            </li>
            <li className="fragment">middle = index Mitte des Suchraumes</li>
            <li
              tabIndex={0}
              className="fragment"
              data-tooltip="Suchraum: { 1, 2, 3, 4, 5} high: 4 low: 0 middle: 2"
            >
              Beispiel
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/search/BinarySearch.java">
              Demo - Binary Search
            </Link>
          </h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Interpolations Suche</h2>
        </section>
        <section>
          <h2>Funktionsweise</h2>
          <p className="fragment">
            Die Interpolationsuche setzt einen sortierten Suchraum voraus, was
            die Suche erheblich vereinfacht.
          </p>
          <p
            className="fragment"
            data-tooltip="Beispiel Telefonbuch"
            tabIndex={0}
          >
            Sind Daten nicht gleich verteilt, kann mit der linearen
            Interpolation der Suchraum besser eingeschränkt werden.
          </p>
        </section>
        <section>
          <h2>Theoretisches Konzept</h2>
          <ol>
            <li className="fragment">
              Bessere Mitte des Suchraumes finden (lineare interpolation)
            </li>
            <li className="fragment">Rest wie Binäre Suche</li>
          </ol>
        </section>
        <section>
          <h2>Lineare Interpolation</h2>
          <ul>
            <li className="fragment">Beispiel Interpolation</li>
            <li
              data-tooltip="w = target; A[l] = value at low index; A[r] =  value at high index; r = high; l = low; A = searchRoom"
              tabIndex={0}
              className="fragment"
            >
              <InterpolationSearchFormula />
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
            <Link to="https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/search/BinarySearch.java">
              Demo - Interpolation Search
            </Link>
          </h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Vergleich Suchalgorithmen</h2>
        </section>
        <section>
          <h2>Lineare Suche vs Binäre Suche</h2>
          <table>
            <thead>
              <tr>
                <th>Linear</th>
                <th>Binary</th>
                <th>Interpolation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>Sortierung irrelevant</td>
                <td>Sortierung notwendig</td>
                <td>Sortierung notwendig</td>
              </tr>
              <tr className="fragment">
                <td>Zeit: O(N)</td>
                <td>Zeit: O(log N)</td>
                <td>Zeit: O(N)</td>
              </tr>
            </tbody>
          </table>
          <p className="fragment foot-note"> abhängig von Anwendungsfall</p>
        </section>
      </section>
      <section>
        <h2>Rest of the day</h2>
        <ul>
          <li className="fragment">Problem und Datensatz</li>
          <li className="fragment">Search mit eigenem Problem (Optional)</li>
        </ul>
      </section>
    </Slides>
  );
}
