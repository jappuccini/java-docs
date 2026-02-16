import Link from '@docusaurus/Link';
import React from 'react';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';
import { NKR } from '../../../../components/Slides/nkr';

export default function Interfaces(): React.JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Interface</li>
            <li className="fragment">Komparator</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
        </section>
        <section>
          <h2>abstract Modifier</h2>
          <ul>
            <li className="fragment">abstrakte Klassen</li>
            <li className="fragment">abstrakte Methoden</li>
          </ul>
        </section>
        <section>
          <h2>final Modifier</h2>
          <ul>
            <li className="fragment">finale Klassen</li>
            <li className="fragment">finale Methoden</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Interfaces</h2>
        </section>
        <section>
          <p>Wie kann man Dogs und Cats in einer Liste speichern?</p>
        </section>
        <section>
          <p>Wie kann man Baby, Child und Adult in einer Liste speichern?</p>
        </section>
        <section>
          <p>
            Wie kann man Dogs, Cats, Baby, Child und Adult in einer Liste
            speichern?
          </p>
        </section>
        <section>
          <p>Limitierungen von abstrakten Klassen</p>
          <ul>
            <li className="fragment">komplexe Vererbungshierarchie</li>
            <li className="fragment">keine Mehrfachvererbung</li>
          </ul>
        </section>
        <section>
          <h2>Interfaces</h2>
          <ul>
            <li className="fragment">definieren Methoden</li>
            <li className="fragment">werden von Klassen implementiert</li>
          </ul>
        </section>
        <section>
          <h2>Zweck von Interfaces</h2>
          <ul>
            <li className="fragment">Unabhängig von Vererbung</li>
            <li className="fragment">Verstecken von Implementierungsdetails</li>
            <li className="fragment">
              Schnittstelle zwischen Ersteller und Verwender
            </li>
          </ul>
        </section>
        <section>
          <h2>Fallbeispiel: Amazend</h2>
          <ul>
            <li className="fragment">Online Versandhändler</li>
            <li className="fragment">Warenkorbabteilung</li>
            <li className="fragment">Produktabteilung</li>
          </ul>
        </section>
        <section>
          <h2>Fallbeispiel: Amazend Warenkorb</h2>
          <ul>
            <li className="fragment">Liste von Produkten</li>
            <li className="fragment">Einzelpreis von Produkten</li>
            <li className="fragment">Summe aller Produkte</li>
          </ul>
        </section>
        <section>
          <h2>Realisierung des Warenkorbs</h2>
          <ul>
            <li className="fragment">Warenkorb Modul definiert Interface</li>
            <li className="fragment">Artikel implementieren das Interface</li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java1/interfaces">
              Demo - Interface
            </Link>
          </h2>
          <ul>
            <li className="fragment">ShoppingCart (description & price)</li>
            <li className="fragment">Dog und Cat implementieren Interface</li>
            <li className="fragment">ShoppingCart Example</li>
            <li className="fragment">ToDo Liste (done, title)</li>
            <li className="fragment">Dog und Cat implementieren Interface</li>
            <li className="fragment">ToDo Liste Example</li>
          </ul>
        </section>
        <section>
          <h2>weitere Anwendungsgebiete*</h2>
          <ul>
            <li className="fragment">Dependency Injection</li>
            <li className="fragment">Unit Tests</li>
          </ul>
          <div>
            <NKR />
          </div>
        </section>
      </section>
      <section>
        <section>
          <h2>Komparatoren</h2>
        </section>
        <section>
          <h2>Zweck von Komparatoren</h2>
          <p>Sortieren von Listen</p>
        </section>
        <section>
          <h2>Funktionsweise</h2>
          <ul>
            <li className="fragment">Vergleichen von zwei Objekten</li>
            <li className="fragment">erstes Element davor einordnen: -1</li>
            <li className="fragment">erstes Element dahinter einordnen: 1</li>
            <li className="fragment">erstes Element gleich einordnen: 0</li>
          </ul>
        </section>
        <section>
          <h2>Welche Interfaces gibt es?</h2>
          <ul>
            <li className="fragment">Comparable</li>
            <li className="fragment">Comparator</li>
          </ul>
        </section>
        <section>
          <h2>Comparable</h2>
          <ul>
            <li className="fragment">definiert die Standardsortierung</li>
            <li className="fragment">Implementierung in der Datenklasse</li>
            <li className="fragment">Bsp. Human nach Alter sortieren</li>
          </ul>
        </section>
        <section>
          <h2>Comparator</h2>
          <ul>
            <li className="fragment">definiert eine Sortierung</li>
            <li className="fragment">Implementierung in eigener Klasse</li>
            <li className="fragment">Bsp. AgeComparator, NameComparator</li>
          </ul>
        </section>
        <section>
          <h2>Wie sortiert man eine Liste?</h2>
          <pre className="fragment">
            <code
              className="java"
              data-line-numbers="2|3|4"
              dangerouslySetInnerHTML={{
                __html:
                  '// ...\n' +
                  'ArrayList&lt;Human&gt; humans = new ArrayList&lt;&gt;();\n' +
                  'Collections.sort(humans);\n' +
                  'Collections.sort(humans, new AgeComparator());\n' +
                  '// ...',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java1/comparator">
              Demo - Komparatoren
            </Link>
          </h2>
          <ul>
            <li className="fragment">Human Comparable (name)</li>
            <li className="fragment">AgeComparator (age)</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li className="fragment">Interfaces</li>
            <li className="fragment">Komparatoren</li>
          </ul>
        </section>
        <section>
          <h2>Rest of the day</h2>
          <ul>
            <li className="fragment">
              <Link to="/exercises/interfaces">Interfaces 01</Link>
            </li>
            <li className="fragment">
              <Link to="/exercises/comparators">Comparators 01 - 02</Link>
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
