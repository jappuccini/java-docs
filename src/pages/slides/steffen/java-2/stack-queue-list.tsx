import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function StackQueueList(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Stack, Queue & List</h2>
        </section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Stack</li>
            <li className="fragment">Queue</li>
            <li className="fragment">List</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Stack</h2>
        </section>
        <section>
          <h2>Was ist ein Stack?</h2>
          <p>
            Bei einem Stack werden neue Elemente gestapelt. Man kann immer nur
            das oberste Element entnehmen.
          </p>
          <p className="foot-note fragment">Beispiel Teller</p>
        </section>
        <section>
          <h2>Anwendungen von Stack</h2>
          <ul>
            <li className="fragment">Undo/Redo</li>
            <li className="fragment">Browserverlauf</li>
            <li className="fragment">Depth-First-Search (Trees)</li>
          </ul>
        </section>
        <section>
          <h2>Stack Operationen</h2>
          <ul>
            <li className="fragment">push &rarr; Element oben hinzufügen</li>
            <li className="fragment">pop &rarr; Element von oben entfernen</li>
            <li className="fragment">peek &rarr; oberstes Element anschauen</li>
            <li className="fragment">isEmpty</li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/stack">
              Demo - Stack
            </Link>
          </h2>
        </section>
        <section>
          <h2>Performance</h2>
          <ul>
            <li className="fragment">Zeitkomplexität: O(1)</li>
            <li className="fragment">Speicherkomplexität: O(N)</li>
          </ul>
          <p className="foot-note fragment">
            Wie kann man die Größe ermitteln?
          </p>
        </section>
      </section>
      <section>
        <section>
          <h2>Queue</h2>
        </section>
        <section>
          <h2>Was ist eine Queue?</h2>
          <p>
            Bei einer Queue werden neue Elemente hinten hinzugefügt. Man kann
            immer nur das vorderste Element entnehmen.
          </p>
          <p className="foot-note fragment">Beispiel Mensa</p>
        </section>
        <section>
          <h2>Anwendungen von Queue</h2>
          <ul>
            <li className="fragment">Datenübertragung</li>
            <li className="fragment">Warteschlangenverarbeitung</li>
            <li className="fragment">Scheduler in Betriebssystemen</li>
          </ul>
        </section>
        <section>
          <h2>Queue Operationen</h2>
          <ul>
            <li className="fragment">
              enqueue &rarr; Element hinten hinzufügen
            </li>
            <li className="fragment">dequeue &rarr; Element vorne entfernen</li>
            <li className="fragment">
              peek &rarr; vorderstes Element anschauen
            </li>
            <li className="fragment">isEmpty</li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/queue">
              Demo - Queue
            </Link>
          </h2>
        </section>
        <section>
          <h2>Performance</h2>
          <ul>
            <li className="fragment">Zeitkomplexität: O(1)</li>
            <li className="fragment">Speicherkomplexität: O(N)</li>
          </ul>
          <p className="foot-note fragment">
            Wie kann man die Größe ermitteln?
          </p>
        </section>
      </section>
      <section>
        <section>
          <h2>List</h2>
        </section>
        <section>
          <h2>Was ist eine Liste?</h2>
          <p>
            Bei einer Liste werden neue Elemente hinten oder an einer bestimmten
            Stelle hinzugefügt. Man kann auf jedes Element über einen Index in
            der Liste zugreifen, die Größe ermitteln und Elemente löschen.
          </p>
          <p className="foot-note fragment">Beispiel ToDo Liste</p>
        </section>
        <section>
          <h2>List Operationen</h2>
          <ul>
            <li className="fragment">length</li>
            <li className="fragment">
              prepend &rarr; Element vorne hinzufügen
            </li>
            <li className="fragment">
              append &rarr; Element hinten hinzufügen
            </li>
            <li className="fragment">
              insertAt &rarr; Element an Index hinzufügen
            </li>
            <li className="fragment">remove &rarr; Element löschen</li>
            <li className="fragment">
              removeAt &rarr; Element an Index löschen
            </li>
            <li className="fragment">
              get &rarr; Element an Index zurückgeben
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-exercises/tree/demos/steffen/demo/java2/dsa/lists">
              Demo - List
            </Link>
          </h2>
        </section>
        <section>
          <h2>Performance</h2>
          <ul>
            <li className="fragment">
              Zeitkomplexität: O(1) &rarr; length, prepend, append
            </li>
            <li className="fragment">
              Zeitkomplexität: O(N) &rarr; insertAt, remove, removeAt, get
            </li>
            <li className="fragment">Speicherkomplexität: O(N)</li>
          </ul>
          <p className="foot-note fragment">
            Vergleich ArrayList &rarr; LinkedList
          </p>
        </section>
      </section>
      <section>
        <h2>Rest of the day</h2>
        <p>Firobed: &#x1F37A;</p>
      </section>
    </Slides>
  );
}
