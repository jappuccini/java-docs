import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function SortAlgo(): JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Sortieralgorithmen</h2>
        </section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Intro</li>
            <li className="fragment">Selection Sort</li>
            <li className="fragment">Bubble Sort</li>
            <li className="fragment">Insertion Sort</li>
            <li className="fragment">Quick Sort</li>
            <li className="fragment">Merge Sort</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Intro</h2>
        </section>
        <section>
          <h2>Was ist Sortieren?</h2>
          <p className="fragment">
            Neuordnung eines gegebenen Arrays oder einer Liste von Elementen
            nach einem Vergleichsoperator für die Elemente
          </p>
          <p className="fragment">
            Alle Elemente werden entweder in aufsteigender oder in absteigender
            Reihenfolge neu angeordnet.
          </p>
        </section>
        <section>
          <h2>Begriffe</h2>
          <ul>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Ein In-place Sortieralgorithmus tauscht Elemente innerhalb der Liste aus."
            >
              In-place sorting
            </li>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Der komplette Input wird im lokalen Speicher gehalten. Der Input kann nicht größer sein als der lokale Speicher."
            >
              Internal Sorting
            </li>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Der komplette Input muss nicht im lokalen Speicher gehalten werden. Der Input kann größer sein als der lokale Speicher."
            >
              External Sorting
            </li>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Falls zwei Elemente 'gleich' sind, wird die ursprüngliche Reihenfolge beibehalten."
            >
              Stable Sorting
            </li>
            <li
              className="fragment"
              tabIndex={0}
              data-tooltip="Falls zwei Elemente 'gleich' sind, wird die ursprüngliche Reihenfolge nicht beibehalten."
            >
              Unstable Sorting
            </li>
          </ul>
        </section>
        <section>
          <h2>Stable und Unstable Sorting</h2>
          <ul>
            <li className="fragment">
              &#x1F0C5; &#x1F0D5; &#x1F0B2; &#x1F0AA; &rarr; Input
            </li>
            <li className="fragment">
              &#x1F0B2; &#x1F0C5; &#x1F0D5; &#x1F0AA; &rarr; Stabil
            </li>
            <li className="fragment">
              &#x1F0B2; &#x1F0D5; &#x1F0C5; &#x1F0AA; &rarr; Unstabil
            </li>
          </ul>
          <p className="foot-note fragment">
            Ein stabiler Sortieralgorithmus verändert nicht die ursprüngliche
            Reihenfolge der 5er-Karten
          </p>
        </section>
        <section>
          <h2>Anwendungen von Sortieralgorithmen</h2>
          <ul>
            <li
              tabIndex={0}
              data-tooltip="Binärsuche, Interpolationssuche etc."
            >
              Suchalgorithmen
            </li>
            <li tabIndex={0} data-tooltip="Abfragen, Indizes etc.">
              Datenbankoptimierung
            </li>
            <li tabIndex={0} data-tooltip="Muster, Trends etc.">
              Datenanalyse
            </li>
            <li
              tabIndex={0}
              data-tooltip="Scheduler, Arbeitsspeicherverwaltung etc."
            >
              Betriebssysteme
            </li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Selection Sort</h2>
        </section>
        <section>
          <h2>Funktionsweise</h2>
          <p>
            Beim Selection Sort wird wiederholt das kleinste Element aus dem
            unsortierten Teil der Liste ausgewählt und in den sortierten Teil
            der Liste verschoben.
          </p>
          <p className="foot-note fragment">Beispiel: 69, 27, 11, 28, 2</p>
        </section>
        <section>
          <h2>Theoretisches Konzept</h2>
          <ul>
            <li className="fragment">Man setzt den Index auf Low</li>
            <li className="fragment">
              Man durchsucht den restlichen Teil des Arrays nach dem kleinsten
              Element
            </li>
            <li className="fragment">
              Man tauscht das kleinste Element mit dem Element am Index
            </li>
            <li className="fragment">
              Index inkrementieren und wiederholen solange, bis alle Elemente
              sortiert sind.
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/sort/SelectionSort.java">
              Demo - Selection Sort
            </Link>
          </h2>
        </section>
        <section>
          <h2>Performance</h2>
          <ul>
            <li className="fragment">Zeitkomplexität: O(N&sup2;)</li>
            <li className="fragment">Speicherkomplexität: O(1)</li>
          </ul>
        </section>
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li className="fragment">Einfach zu implementieren</li>
            <li
              className="fragment"
              data-tooltip="Beispiel: &#x1F0B4; &#x1F0B5; &#x1F0B6; &#x1F0D4; &#x1F0B2; &rarr; &#x1F0B2; &#x1F0D4; &#x1F0B4; &#x1F0B5; &#x1F0B6;  "
              tabIndex={0}
            >
              Nicht stabil
            </li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Bubble Sort</h2>
        </section>
        <section>
          <h2>Funktionsweise</h2>
          <p>
            Beim Bubble Sort wird wiederholt das größte Element aus dem
            unsortierten Teil der Liste in den sortierten Teil der Liste
            verschoben.
          </p>
          <p className="foot-note fragment">Beispiel: 69, 27, 11, 28, 2</p>
        </section>
        <section>
          <h2>Theoretisches Konzept</h2>
          <ul>
            <li className="fragment">Man setzt den Index auf Low</li>
            <li className="fragment">
              Man durchläuft den unsortierten Teil des Arrays{' '}
            </li>
            <li className="fragment">
              Ist das aktuelle Element am Index größer als das nächste Element,
              werden Sie getauscht.
            </li>
            <li className="fragment">
              High dekrementieren und wiederholen solange, bis alle Elemente
              sortiert sind.
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/sort/BubbleSort.java">
              Demo - Bubble Sort
            </Link>
          </h2>
        </section>
        <section>
          <h2>Performance</h2>
          <ul>
            <li className="fragment">Zeitkomplexität: O(N&sup2;)</li>
            <li className="fragment">Speicherkomplexität: O(1)</li>
          </ul>
        </section>
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li className="fragment">Einfach zu implementieren</li>
            <li
              className="fragment"
              data-tooltip="Beispiel: &#x1F0B4; &#x1F0B5; &#x1F0B6; &#x1F0D4; &#x1F0B2; &rarr; &#x1F0B2; &#x1F0B4; &#x1F0D4; &#x1F0B5; &#x1F0B6;  "
              tabIndex={0}
            >
              Stabil
            </li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Insertion Sort</h2>
        </section>
        <section>
          <h2>Funktionsweise</h2>
          <p>
            Beim Insertion Sort wird wiederholt das nächste Element aus dem
            unsortierten Teil der Liste in die richtige Stelle des sortierten
            Teils der Liste verschoben.
          </p>
          <p className="foot-note fragment">Beispiel: 69, 27, 11, 28, 2</p>
        </section>
        <section>
          <h2>Theoretisches Konzept</h2>
          <ul>
            <li
              className="fragment"
              data-tooltip="Das erste Element ist immer schon sortiert."
              tabIndex={0}
            >
              Man setzt den sortedHighIndex auf Low + 1
            </li>
            <li className="fragment">
              Man durchläuft den unsortierten Teil des Arrays
            </li>
            <li className="fragment">
              Ist das aktuelle Element am Index kleiner als das vorherige
              Element, werden Sie getauscht.
            </li>
            <li className="fragment">
              sortedHigh dekrementieren und wiederholen solange, bis Element an
              der richtigen Stelle sortiert ist
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/sort/InsertionSort.java">
              Demo - Insertion Sort
            </Link>
          </h2>
        </section>
        <section>
          <h2>Performance</h2>
          <ul>
            <li className="fragment">Zeitkomplexität: O(N&sup2;)</li>
            <li className="fragment">Speicherkomplexität: O(1)</li>
          </ul>
        </section>
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li className="fragment">Einfach zu implementieren</li>
            <li
              className="fragment"
              data-tooltip="Beispiel: &#x1F0B4; &#x1F0B5; &#x1F0B6; &#x1F0D4; &#x1F0B2; &rarr; &#x1F0B2; &#x1F0B4; &#x1F0D4; &#x1F0B5; &#x1F0B6;  "
              tabIndex={0}
            >
              Stabil
            </li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Quick Sort</h2>
        </section>
        <section>
          <h2>Allgemein</h2>
          <ul>
            <li className="fragment">Divide and Conquer</li>
            <li className="fragment">Rekursiv</li>
          </ul>
        </section>
        <section>
          <h2>Funktionsweise</h2>
          <p className="fragment">
            Beim Quick Sort wird wiederholt der Input am freiwählbaren
            Pivotindex aufgeteilt. Jedes Element wird mit dem Pivotelement
            verglichen. Ist es kleiner als das Pivotelement wird es in den
            linken Teil verschoben, ansonsten in den rechten Teil.
          </p>
          <p className="fragment">
            Anschließend wird zuerst der linke Teil danach der rechte Teil
            sortiert.
          </p>
          <p className="foot-note fragment">
            Beispiel: 10, 80, 30, 90, 40, 50, 70
          </p>
        </section>
        <section>
          <h2>Theoretisches Konzept</h2>
          <ul>
            <li className="fragment">
              Base Case: Nur noch 1 Element übrig &rarr; return;
            </li>
            <li className="fragment">
              Pre Recurse: Aufteilen des Arrays in Links und Rechts
            </li>
            <li className="fragment">
              Recurse: linke Seite anschließend rechte Seite
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/sort/QuickSort.java">
              Demo - Quick Sort
            </Link>
          </h2>
        </section>
        <section>
          <h2>Performance</h2>
          <ul>
            <li className="fragment">Zeitkomplexität: O(N&sup2;)</li>
            <li className="fragment">Speicherkomplexität: O(1)</li>
          </ul>
        </section>
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li
              className="fragment"
              data-tooltip="Bei Best und Average Case, meistens zwischen Average und Worst Case"
              tabIndex={0}
            >
              Effizient bei großen Datenmengen O(N log N)
            </li>
            <li
              className="fragment"
              data-tooltip="Beispiel: &#x1F0B4; &#x1F0B5; &#x1F0B6; &#x1F0D4; &#x1F0B2; &rarr; &#x1F0B2; &#x1F0B4; &#x1F0D4; &#x1F0B5; &#x1F0B6;  "
              tabIndex={0}
            >
              Nicht stabil
            </li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Merge Sort</h2>
        </section>
        <section>
          <h2>Allgemein</h2>
          <ul>
            <li className="fragment">Divide and Conquer</li>
            <li className="fragment">Rekursiv</li>
          </ul>
        </section>
        <section>
          <h2>Funktionsweise</h2>
          <p className="fragment">
            Beim Merge Sort wird wiederholt der Input in der Mitte aufgeteilt.
          </p>
          <p className="fragment">
            Anschließend wird zuerst der linke Teil danach der rechte Teil
            sortiert.
          </p>
          <p className="fragment">
            Anschließend werden der linke und der rechte Teil zusammengeführt.
          </p>
          <p className="foot-note fragment">Beispiel: 69, 27, 11, 28, 2</p>
        </section>
        <section>
          <h2>Theoretisches Konzept</h2>
          <ul>
            <li className="fragment">
              Base Case: Nur noch 1 Element übrig &rarr; return;
            </li>
            <li className="fragment">
              Pre Recurse: Aufteilen des Arrays in Links und Rechts
            </li>
            <li className="fragment">
              Recurse: linke Seite anschließend rechte Seite
            </li>
            <li className="fragment">
              Post Recurse: linke Seite und rechte Seite zusammenführen
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/blob/steffen/java2/dsa/sort/MergeSort.java">
              Demo - Merge Sort
            </Link>
          </h2>
        </section>
        <section>
          <h2>Performance</h2>
          <ul>
            <li className="fragment">Zeitkomplexität: O(N log N)</li>
            <li className="fragment">Speicherkomplexität: O(N)</li>
          </ul>
        </section>
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li
              className="fragment"
              data-tooltip="Immer &#x1F680;"
              tabIndex={0}
            >
              Effizient bei großen Datenmengen O(N log N)
            </li>
            <li
              className="fragment"
              data-tooltip="Beispiel: &#x1F0B4; &#x1F0B5; &#x1F0B6; &#x1F0D4; &#x1F0B2; &rarr; &#x1F0B2; &#x1F0B4; &#x1F0D4; &#x1F0B5; &#x1F0B6;  "
              tabIndex={0}
            >
              Stabil
            </li>
            <li
              className="fragment"
              data-tooltip="Es wird immer temporär ein Kopie der Subarrays erstellt"
              tabIndex={0}
            >
              Speicherbedarf is Hoch
            </li>
            <li
              className="fragment"
              data-tooltip="Es wird immer eine Kopie erstellt und anschließend überschrieben"
              tabIndex={0}
            >
              Kein In-Place Sort
            </li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Vergleich Sortieralgorithmen</h2>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th>Algorithmus</th>
                <th>Best </th>
                <th>Average </th>
                <th>Worst </th>
              </tr>
            </thead>
            <tbody>
              <tr className="fragment">
                <td>Selection Sort</td>
                <td>O(N&sup2;)</td>
                <td>O(N&sup2;)</td>
                <td>O(N&sup2;)</td>
              </tr>
              <tr className="fragment">
                <td>Bubble Sort</td>
                <td>O(N)</td>
                <td>O(N&sup2;)</td>
                <td>O(N&sup2;)</td>
              </tr>
              <tr className="fragment">
                <td>Insertion Sort</td>
                <td>O(N)</td>
                <td>O(N&sup2;)</td>
                <td>O(N&sup2;)</td>
              </tr>
              <tr className="fragment">
                <td>Quick Sort</td>
                <td>O(N log N)</td>
                <td>O(N log N)</td>
                <td>O(N&sup2;)</td>
              </tr>
              <tr className="fragment">
                <td>Merge Sort</td>
                <td>O(N log N)</td>
                <td>O(N log N)</td>
                <td>O(N log N)</td>
              </tr>
            </tbody>
          </table>
          <p className="fragment foot-note">
            Merge Sort hat eine Speicherkomplexität von O(N)
          </p>
        </section>
      </section>
      <section>
        <h2>Rest of the day</h2>
        <ul>
          <li className="fragment">
            Demo Code verstehen, debuggen, implementieren (Optional)
          </li>
          <li className="fragment">Sort mit eigenem Problem (Optional)</li>
        </ul>
      </section>
    </Slides>
  );
}
