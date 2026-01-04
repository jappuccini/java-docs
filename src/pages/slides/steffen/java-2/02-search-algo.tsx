import Link from '@docusaurus/Link';
import InterpolationSearchFormula from '@site/static/img/interpolation-search-formula.svg';
import React from 'react';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function SearchAlgo(): React.JSX.Element {
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
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/search/examples/LinearSearch.java">
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
              Wenn kein Element im Suchraum gefunden wurde &rarr; -1 zurückgeben
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
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/search/examples/BinarySearch.java">
              Demo - Binary Search
            </Link>
          </h2>
          <ul>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Was muss man bei 70 beachten?"
            >
              low/high/middle
            </li>
            <li className="fragment">gefunden/größer/kleiner</li>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Wann ist die Suche vorbei?"
            >
              while bedingung/nicht gefunden
            </li>
          </ul>
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
            data-tooltip="Beispiel Telefonbuch A-Z"
            tabIndex={0}
          >
            Handelt es sich um eine gleichverteilung der Daten, kann mit der
            linearen Interpolation der Suchraum besser eingeschränkt werden.
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
            <li className="fragment">
              Formel Interpolation
              <div>
                <InterpolationSearchFormula
                  style={{ width: '800px', height: '200px' }}
                />
              </div>
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
              Demo - Interpolationssuche
            </Link>
          </h2>
          <ul>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Wie in der Formel"
            >
              middle Index anpassen
            </li>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Was passiert außerhalb der Grenzen?"
            >
              while Bedingung anpassen
            </li>
          </ul>
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
