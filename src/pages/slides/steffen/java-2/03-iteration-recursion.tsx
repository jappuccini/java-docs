import Link from '@docusaurus/Link';
import React from 'react';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function IterationAndRecursion(): React.JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Iterativ und Rekursiv</h2>
        </section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Intro</li>
            <li className="fragment">Rekursion</li>
            <li className="fragment">Fun With Mazes</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Intro</h2>
        </section>
        <section>
          <h2>Was ist Iterativ</h2>
          <p className="fragment">
            mehrmaliges ausführen einer Aktion, während eine Bedingung wahr ist.
          </p>
        </section>
        <section>
          <h2>Schleifen sind Iterativ</h2>
          <ul>
            <li className="fragment">while &rarr; solange bedingung true</li>
            <li className="fragment">do-while &rarr; solange bedingung true</li>
            <li className="fragment">for &rarr; solange bedingung true</li>
            <li className="fragment">
              for-each &rarr; bis break oder alle Elemente
            </li>
          </ul>
        </section>
        <section>
          <h2>Was ist Rekursiv?</h2>
          <p className="fragment">mehrmaliges selbstausführen einer Aktion</p>
          <p className="fragment">
            die Aktion definiert selber, wann Sie sich nicht mehr selbst aufruft
          </p>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/recursion/sum">
              Demo - Zahlen summieren
            </Link>
          </h2>
          <ul>
            <li className="fragment">Iterativ</li>
            <li className="fragment">Rekursiv</li>
          </ul>
        </section>
        <section>
          <h2>Rekursion - Callstack</h2>
          <table>
            <thead>
              <tr>
                <th>Aufruf Ort</th>
                <th>Aufruf</th>
                <th>Aufruf Wert</th>
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
            Unterste Zeile ist der Base Case Fall
          </p>
        </section>
        <section>
          <h2>Rekursion - Callstack II</h2>
          <table>
            <thead>
              <tr>
                <th>Aufruf Ort</th>
                <th>Aufruf</th>
                <th>Aufruf Wert</th>
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
      </section>
      <section>
        <section>
          <h2>Rekursion</h2>
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
          <p className="fragment foot-note">revisit iterative sum</p>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/recursion/search/BinarySearch.java">
              Demo - Binary Search Recursion
            </Link>
          </h2>
          <ul>
            <li className="fragment">Base Cases</li>
            <li className="fragment">recursion to inner</li>
            <li className="fragment">Recurse Steps</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Fun with Mazes</h2>
        </section>
      </section>
      <section>
        <h2>Rest of the day</h2>
        <ul>
          <li className="fragment">Problem und Datensatz</li>
          <li className="fragment">
            Search mit eigenem Problem Recursiv(Optional)
          </li>
        </ul>
      </section>
    </Slides>
  );
}
