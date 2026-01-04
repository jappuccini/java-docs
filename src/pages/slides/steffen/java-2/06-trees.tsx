import Link from '@docusaurus/Link';
import React from 'react';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function Trees(): React.JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Trees</h2>
        </section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Projektbericht</li>
            <li className="fragment">Intro</li>
            <li className="fragment">Binary Tree</li>
            <li className="fragment">Binary Search Tree</li>
            <li className="fragment">Heap (Optional)</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Projektbericht</h2>
        </section>
        <section>
          <h2>Status</h2>
          <ul>
            <li className="fragment">Letzter Termin vor Abgabe</li>
            <li className="fragment">Inhalte Teil I</li>
            <li className="fragment">Inhalte Teil II am 12.05.2025</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Intro</h2>
        </section>
        <section>
          <h2>Was ist ein Tree?</h2>
          <p className="fragment">
            Ein Tree (Baum) ist eine hierarchische Datenstruktur. Dies
            ermöglicht eine effiziente Navigation und Suche durch den Baum.
          </p>
          <p className="fragment">
            Es handelt sich um eine Sammlung von Knoten, die durch Kanten
            verbunden sind und eine hierarchische Beziehung zwischen den Knoten
            aufweisen.
          </p>
          <p className="foot-note fragment">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={require('@site/static/img/example-tree.png').default}
            >
              Beispiel Baum
            </Link>
          </p>
        </section>
        <section>
          <h2>Begriffe I</h2>
          <ul>
            <li
              tabIndex={0}
              data-tooltip="Wurzelknoten (A)"
              className="fragment"
            >
              Root Node
            </li>
            <li
              tabIndex={0}
              data-tooltip="Kindknoten (B, C von A)"
              className="fragment"
            >
              Child Node
            </li>
            <li
              tabIndex={0}
              data-tooltip="Elternknoten (C von F)"
              className="fragment"
            >
              Parent Node
            </li>
            <li
              tabIndex={0}
              data-tooltip="Blatt (I, K, J, F, G, H)"
              className="fragment"
            >
              Leaf Node
            </li>
            <li tabIndex={0} data-tooltip="Tiefe (4)" className="fragment">
              Level
            </li>
          </ul>
        </section>
        <section>
          <h2>Begriffe II</h2>
          <ul>
            <li
              tabIndex={0}
              data-tooltip="Vorgänger (C, A von F)"
              className="fragment"
            >
              Ancestor Node
            </li>
            <li
              tabIndex={0}
              data-tooltip="Nachfolger (D, E, I, K, J von B)"
              className="fragment"
            >
              Descendant Node
            </li>
            <li
              tabIndex={0}
              data-tooltip="Geschwister (F, G, H)"
              className="fragment"
            >
              Sibling
            </li>
            <li
              tabIndex={0}
              data-tooltip="Nachbar (A, D, E von B)"
              className="fragment"
            >
              Neighbor
            </li>
            <li
              tabIndex={0}
              data-tooltip="Teilbaum (Alle Nachfolger von B)"
              className="fragment"
            >
              Subtree
            </li>
          </ul>
        </section>
        <section>
          <h2>Anwendungen von Bäumen</h2>
          <ul>
            <li className="fragment">Dateisystem &rarr; ls -la | dir</li>
            <li className="fragment">DOM &rarr; F12</li>
            <li className="fragment">Abstract Syntax Tree</li>
          </ul>
        </section>
        <section>
          <h2>Arten</h2>
          <ul>
            <li className="fragment">Binary tree (Binärbaum)</li>
            <li className="fragment">Ternary tree (Ternärer Baum)</li>
            <li className="fragment">Quadtree (Quaternärbaum)</li>
            <li className="fragment">N-Tree/Generic Tree</li>
          </ul>
        </section>
        <section>
          <h2>Trees vs Arrays vs Lists</h2>
          <ul>
            <li className="fragment">
              Access Time: Arrays &lt; Tree &lt; LinkedList
            </li>
            <li className="fragment">
              Modify Time: LinkedList &lt; Tree &lt; Array
            </li>
            <li className="fragment">
              Space Limit: LinkedList & Tree &gt; Array
            </li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Binary Tree</h2>
        </section>
        <section>
          <h2>Was ist ein Binary Tree?</h2>
          <p className="fragment">
            Bei einem Binary Tree kann jeder Node maximal zwei Child Nodes
            haben. Sie werden als left und right bezeichnet.
          </p>
        </section>
        <section>
          <h2>Node Struktur</h2>
          <pre>
            <code
              className="java"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Node {\n' +
                  '  public int number;\n' +
                  '  public Node left;\n' +
                  '  public Node right;\n' +
                  '}',
              }}
            ></code>
          </pre>
          <p className="foot-note fragment">ähnlich wie Linked List</p>
        </section>
        <section>
          <h2>Binary Tree Eigenschaften</h2>
          <ul>
            <li
              tabIndex={0}
              className="fragment"
              data-tooltip="Kein, Ein oder Zwei Child Nodes"
            >
              0 bis 2 Knoten
            </li>
            <li
              tabIndex={0}
              data-tooltip="Elemente innerhalb des Baumes haben keine Ordnung"
              className="fragment"
            >
              Keine Ordnung innerhalb des Baumes
            </li>
          </ul>
        </section>
        <section>
          <h2>Binary Tree Operationen</h2>
          <ul>
            <li className="fragment">traverse &rarr; alle Elemente besuchen</li>
            <li className="fragment">insert &rarr; Element hinzufügen</li>
            <li className="fragment">delete &rarr; Element entfernen</li>
            <li className="fragment">search &rarr; Element suchen</li>
          </ul>
        </section>
        <section>
          <h2>Tree Traversals</h2>
          <ul>
            <li className="fragment">Depth First Search</li>
            <li className="fragment">Breadth First Search</li>
          </ul>
        </section>
        <section>
          <h2>Depth First Search (DFS)</h2>
          <ul>
            <li className="fragment">Pre-Order-Traversal</li>
            <li className="fragment">In-Order-Traversal</li>
            <li className="fragment">Post-Order-Traversal</li>
          </ul>
          <p className="foot-note fragment">
            Beispiel Tafel: 7, 23, 3, 5, 4, 18, 21
          </p>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/trees/bt/dfs">
              Demo - Binary Tree DFS
            </Link>
          </h2>
          <p className="foot-note fragment">
            Welche Datenstruktur haben wir implizit benutzt?
          </p>
        </section>
        <section>
          <h2>Breadth First Search (BFS)</h2>
          <ul>
            <li className="fragment">Gegenteil von DFS</li>
            <li className="fragment">Beispiel Tafel</li>
          </ul>
          <p className="foot-note fragment">
            Welche Datenstruktur werden wir nutzen?
          </p>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/trees/bt/bfs">
              Demo - Binary Tree BFS
            </Link>
          </h2>
        </section>
        <section>
          <h2>Vergleichen von Binary Trees</h2>
          <ul>
            <li className="fragment">Werte</li>
            <li className="fragment">Struktur</li>
          </ul>
          <p className="foot-note fragment">
            Compare Beispiel: 1, 4, 9 an der Tafel BFS & DFS
          </p>
        </section>
        <section>
          <h2>DFS bewahrt die Struktur des Baumes</h2>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/trees/bt/compare">
              Demo - Binary Tree Compare DFS
            </Link>
          </h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Binary Search Tree</h2>
        </section>
        <section>
          <h2>Was ist ein Binary Search Tree (BST)?</h2>
          <ul>
            <li className="fragment">Binary Tree mit Sortierung</li>
            <li className="fragment">Left &lt;= Node</li>
            <li className="fragment">Node &lt; Right</li>
          </ul>
          <p className="foot-note fragment">
            Beispiel: BST an der Tafel 17, 15, 50, 4, 16, 25, 21, 30
          </p>
        </section>
        <section>
          <h2>BST Operationen</h2>
          <ul>
            <li className="fragment">Search</li>
            <li className="fragment">Insert</li>
            <li className="fragment">Delete</li>
          </ul>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/trees/bst">
              Demo - Binary Search Tree
            </Link>
          </h2>
        </section>
      </section>
      <section>
        <section>
          <h2>Heap</h2>
        </section>
        <section>
          <h2>Was ist ein Heap?</h2>
          <ul>
            <li className="fragment">Binary Tree mit schwacher Sortierung</li>
            <li className="fragment">jeder Nachfolger ist kleiner (MaxHeap)</li>
            <li className="fragment">jeder Nachfolger ist größer (MinHeap)</li>
          </ul>
          <p className="foot-note fragment">
            Beispiel: MinHeap an der Tafel 50, 71, 100, 101, 80, 200, 101
          </p>
        </section>
        <section>
          <h2>Heap Eigenschaften</h2>
          <ul>
            <li className="fragment">Nennt man auch Priotity Queue</li>
            <li className="fragment">Kein Traversieren</li>
            <li className="fragment">Root ist immer Max/Min</li>
          </ul>
        </section>
        <section>
          <h2>Heap Operationen</h2>
          <ul>
            <li className="fragment">insert &rarr; Baum anpassen</li>
            <li className="fragment">delete &rarr; Baum anpassen</li>
          </ul>
        </section>
        <section>
          <h2>Heap Insert</h2>
          <ol>
            <li className="fragment">Am Ende einfügen</li>
            <li className="fragment">nach oben verschieben</li>
          </ol>
          <p className="foot-note fragment">Beispiel: Insert 3</p>
        </section>
        <section>
          <h2>Heap Delete</h2>
          <ol>
            <li className="fragment">root zwischenspeichern</li>
            <li className="fragment">letztes Element mit root tauschen</li>
            <li className="fragment">nach unten verschieben</li>
          </ol>
          <p className="foot-note fragment">Beispiel: Delete</p>
        </section>
        <section>
          <h2>Heap Probleme</h2>
          <ul>
            <li className="fragment">Wie kommen wir an das Ende?</li>
            <li className="fragment">Wie bekommen wir Parent?</li>
            <li className="fragment">Wie bekommen wir Childs?</li>
          </ul>
          <p className="foot-note fragment">Array to the rescue!</p>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/trees/heap">
              Demo - Heap
            </Link>
          </h2>
        </section>
      </section>
      <section>
        <h2>Rest of the day</h2>
        <ul>
          <li className="fragment">Letzte Vorlesung vor Abgabe!</li>
          <li className="fragment">Besprechung Projekt</li>
        </ul>
      </section>
    </Slides>
  );
}
