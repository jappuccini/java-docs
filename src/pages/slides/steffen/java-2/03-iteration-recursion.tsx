import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';

export default function IterationRecursion(): React.JSX.Element {
  return (
    <Slides title="Iteration und Rekursion">
      <section>
        <section className="cover">
          <p className="kicker">Fortgeschrittene Programmierung</p>
          <h1>Iteration und Rekursion</h1>
          <p>
            Iterative und rekursive Lösungen vergleichen und den Callstack
            nachvollziehen.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Iteration</li>
            <li className="fragment">Rekursion</li>
            <li className="fragment">Fun with Mazes (optional)</li>
          </ul>
        </section>
      </section>

      <section data-topic="Iteration">
        <section className="divider">
          <p className="kicker">Grundlagen</p>
          <h2>Iteration</h2>
          <p>Wiederholte Ausführung, solange eine Bedingung wahr ist.</p>
        </section>

        <section>
          <h2>Was ist iterativ?</h2>
          <p className="fragment">
            Mehrmaliges Ausführen einer Aktion, während eine Bedingung wahr ist.
          </p>
        </section>

        <section>
          <h2>Schleifen sind iterativ</h2>
          <ul>
            <li className="fragment">
              while &rarr; solange die Bedingung true ist
            </li>
            <li className="fragment">
              do-while &rarr; solange die Bedingung true ist
            </li>
            <li className="fragment">
              for &rarr; solange die Bedingung true ist
            </li>
            <li className="fragment">
              for-each &rarr; bis break oder bis alle Elemente durchlaufen sind
            </li>
          </ul>
        </section>
      </section>

      <section data-topic="Rekursion">
        <section className="divider">
          <p className="kicker">Grundlagen</p>
          <h2>Rekursion</h2>
          <p>
            Eine Methode ruft sich selbst auf, bis ein Base Case erreicht ist.
          </p>
        </section>

        <section>
          <h2>Was ist rekursiv?</h2>
          <p className="fragment">Mehrmaliges Selbstausführen einer Aktion.</p>
          <p className="fragment">
            Die Aktion definiert selbst, wann sie sich nicht mehr selbst
            aufruft.
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/recursion/sum">
              Demo: Summe iterativ und rekursiv
            </Link>
          </h2>
          <ul>
            <li className="fragment">Iterativ</li>
            <li className="fragment">Rekursiv</li>
          </ul>
        </section>

        <section>
          <h2>Callstack: Absteigen</h2>
          <table>
            <thead>
              <tr>
                <th>Aufrufort</th>
                <th>Aufruf</th>
                <th>Aufrufwert</th>
                <th>Rückgabewert</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>Main</td>
                <td>sum(5)</td>
                <td>5</td>
                <td>?</td>
              </tr>
              <tr className="fragment">
                <td>sum(5)</td>
                <td>sum(4)</td>
                <td>4</td>
                <td>?</td>
              </tr>
              <tr className="fragment">
                <td>sum(4)</td>
                <td>sum(3)</td>
                <td>3</td>
                <td>?</td>
              </tr>
              <tr className="fragment">
                <td>sum(3)</td>
                <td>sum(2)</td>
                <td>2</td>
                <td>?</td>
              </tr>
              <tr className="fragment">
                <td>sum(2)</td>
                <td>sum(1)</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          <p className="fragment foot-note">
            Die unterste Zeile ist der Base Case.
          </p>
        </section>

        <section>
          <h2>Callstack: Aufsteigen</h2>
          <table>
            <thead>
              <tr>
                <th>Aufrufort</th>
                <th>Aufruf</th>
                <th>Aufrufwert</th>
                <th>Rückgabewert</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Main</td>
                <td>sum(5)</td>
                <td>5</td>
                <td className="fragment" data-fragment-index="4">
                  5 + 10 &rarr; 15
                </td>
              </tr>
              <tr>
                <td>sum(5)</td>
                <td>sum(4)</td>
                <td>4</td>
                <td className="fragment" data-fragment-index="3">
                  4 + 6 &rarr; 10
                </td>
              </tr>
              <tr>
                <td>sum(4)</td>
                <td>sum(3)</td>
                <td>3</td>
                <td className="fragment" data-fragment-index="2">
                  3 + 3 &rarr; 6
                </td>
              </tr>
              <tr>
                <td>sum(3)</td>
                <td>sum(2)</td>
                <td>2</td>
                <td className="fragment" data-fragment-index="1">
                  2 + 1 &rarr; 3
                </td>
              </tr>
              <tr>
                <td>sum(2)</td>
                <td>sum(1)</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>

          <p className="fragment foot-note">Bonus: throw Error in Base Case</p>
        </section>

        <section>
          <h2>Bestandteile</h2>
          <ol>
            <li className="fragment">Base Case(s)</li>
            <li className="fragment">Recurse</li>
          </ol>
        </section>

        <section>
          <h2>Base Case(s)</h2>
          <p>Alle Bedingungen, welche ein Endergebnis haben.</p>
        </section>

        <section>
          <h2>Recursion</h2>
          <ul>
            <li className="fragment">Pre Recurse</li>
            <li className="fragment">Recurse</li>
            <li className="fragment">Post Recurse</li>
          </ul>
          <aside className="notes">
            Iterative Summen-Demo erneut aufgreifen.
          </aside>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/recursion/search/BinarySearch.java">
              Demo: Binäre Suche rekursiv
            </Link>
          </h2>
          <ul>
            <li className="fragment">Base Cases</li>
            <li className="fragment">recursion to inner</li>
            <li className="fragment">Recurse Steps</li>
          </ul>
        </section>
      </section>

      <section data-topic="Fun with Mazes (Optional)">
        <section className="divider">
          <p className="kicker">Ausblick</p>
          <h2>Fun with Mazes (Optional)</h2>
          <p>Optional: Ein Labyrinth mit Rekursion lösen.</p>
        </section>
      </section>
    </Slides>
  );
}
