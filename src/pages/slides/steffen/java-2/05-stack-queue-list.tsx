import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';

export default function StackQueueList(): React.JSX.Element {
  return (
    <Slides title="Stack, Queue und List">
      <section>
        <section className="cover">
          <p className="kicker">Fortgeschrittene Programmierung</p>
          <h1>Stack, Queue und List</h1>
          <p>
            Stack, Queue und List mit ihren Operationen und Kosten verstehen und
            vergleichen.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Stack</li>
            <li className="fragment">Queue</li>
            <li className="fragment">List</li>
            <li className="fragment">Vergleich</li>
          </ul>
        </section>
      </section>

      <section data-topic="Stack">
        <section className="divider">
          <p className="kicker">Datenstrukturen</p>
          <h2>Stack</h2>
          <p>
            Neue Elemente werden oben gestapelt und von dort wieder entnommen.
          </p>
        </section>

        <section>
          <h2>Was ist ein Stack?</h2>
          <p>
            Bei einem Stack werden neue Elemente gestapelt. Man kann immer nur
            das oberste Element entnehmen.
          </p>
          <p className="foot-note fragment">Beispiel: Teller</p>
        </section>

        <section>
          <h2>Anwendungen von Stacks</h2>
          <ul>
            <li className="fragment">Undo/Redo</li>
            <li className="fragment">Browserverlauf</li>
            <li className="fragment">Depth-First-Search (Trees)</li>
          </ul>
        </section>

        <section>
          <h2>Stack-Operationen</h2>
          <ul>
            <li className="fragment">push &rarr; Element oben hinzufügen</li>
            <li className="fragment">pop &rarr; Element von oben entfernen</li>
            <li className="fragment">peek &rarr; oberstes Element anschauen</li>
            <li className="fragment">isEmpty</li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/stack/Stack.java">
              Demo: Stack
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

      <section data-topic="Queue">
        <section className="divider">
          <p className="kicker">Datenstrukturen</p>
          <h2>Queue</h2>
          <p>Neue Elemente werden hinten angefügt und vorne entnommen.</p>
        </section>

        <section>
          <h2>Was ist eine Queue?</h2>
          <p>
            Bei einer Queue werden neue Elemente hinten hinzugefügt. Man kann
            immer nur das vorderste Element entnehmen.
          </p>
          <p className="foot-note fragment">Beispiel: Mensa</p>
        </section>

        <section>
          <h2>Anwendungen von Queues</h2>
          <ul>
            <li className="fragment">Datenübertragung</li>
            <li className="fragment">Warteschlangenverarbeitung</li>
            <li className="fragment">Scheduler in Betriebssystemen</li>
          </ul>
        </section>

        <section>
          <h2>Queue-Operationen</h2>
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
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/queue/Queue.java">
              Demo: Queue
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

      <section data-topic="List">
        <section className="divider">
          <p className="kicker">Datenstrukturen</p>
          <h2>List</h2>
          <p>
            Elemente lassen sich an beliebiger Stelle einfügen, lesen und
            löschen.
          </p>
        </section>

        <section>
          <h2>Was ist eine Liste?</h2>
          <p>
            Bei einer Liste werden neue Elemente hinten oder an einer bestimmten
            Stelle hinzugefügt. Man kann auf jedes Element über einen Index in
            der Liste zugreifen, die Größe ermitteln und Elemente löschen.
          </p>
          <p className="foot-note fragment">Beispiel: To-do-Liste</p>
        </section>

        <section>
          <h2>List-Operationen</h2>
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
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/lists/DoublyLinkedList.java">
              Demo: List
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
            Vergleich: ArrayList &rarr; LinkedList
          </p>
        </section>
      </section>

      <section data-topic="Vergleich">
        <section className="divider">
          <p className="kicker">Einordnung</p>
          <h2>Vergleich</h2>
          <p>
            Stack, Queue und List anhand von Zugriff, Operationen und Kosten
            gegenüberstellen.
          </p>
        </section>

        <section>
          <h2>Stack, Queue und List im Vergleich</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Stack</th>
                <th>Queue</th>
                <th>List</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <th scope="row">Zugriff</th>
                <td>nur oberstes Element</td>
                <td>nur vorderstes Element</td>
                <td>per Index</td>
              </tr>
              <tr className="fragment">
                <th scope="row">Einfügen</th>
                <td>
                  oben
                  <br />(<code>push</code>)
                </td>
                <td>
                  hinten
                  <br />(<code>enqueue</code>)
                </td>
                <td>vorne, hinten oder an Index</td>
              </tr>
              <tr className="fragment">
                <th scope="row">Entfernen</th>
                <td>
                  oben
                  <br />(<code>pop</code>)
                </td>
                <td>
                  vorne
                  <br />(<code>dequeue</code>)
                </td>
                <td>nach Wert oder Index</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Reihenfolge und Kosten im Vergleich</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Stack</th>
                <th>Queue</th>
                <th>List</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <th scope="row">Reihenfolge</th>
                <td>LIFO</td>
                <td>FIFO</td>
                <td>geordnet, indexbasiert</td>
              </tr>
              <tr className="fragment">
                <th scope="row">Zeit</th>
                <td>O(1)</td>
                <td>O(1)</td>
                <td>O(1) / O(N)</td>
              </tr>
              <tr className="fragment">
                <th scope="row">Speicher</th>
                <td>O(N)</td>
                <td>O(N)</td>
                <td>O(N)</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li className="fragment">
              <strong>List – O(1):</strong> length, prepend und append
            </li>
            <li className="fragment">
              <strong>List – O(N):</strong> insertAt, remove, removeAt und get
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
