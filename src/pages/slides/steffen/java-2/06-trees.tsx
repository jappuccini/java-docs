import Link from '@docusaurus/Link';
import ExampleBinaryTree from '@site/static/img/example-binary-tree.svg';
import ExampleBst from '@site/static/img/example-bst.svg';
import ExampleCompareTrees from '@site/static/img/example-compare-trees.svg';
import ExampleHeap from '@site/static/img/example-heap.svg';
import ExampleTraversalTree from '@site/static/img/example-traversal-tree.svg';
import ExampleTree from '@site/static/img/example-tree.svg';
import Slides from '../../../../components/Slides';

const diagrams = {
  general: ExampleTree,
  binary: ExampleBinaryTree,
  bst: ExampleBst,
  heap: ExampleHeap,
  traversal: ExampleTraversalTree,
  compare: ExampleCompareTrees,
};

function TreeDiagram({
  variant = 'general',
  caption,
  captionFragment = false,
}: {
  variant?: keyof typeof diagrams;
  caption?: string;
  captionFragment?: boolean;
}): React.JSX.Element {
  const Diagram = diagrams[variant];

  return (
    <div>
      <Diagram style={{ display: 'block', width: '100%', height: 'auto' }} />
      {caption ? (
        <p className={captionFragment ? 'label fragment' : 'label'}>
          {caption}
        </p>
      ) : null}
    </div>
  );
}

export default function Trees(): React.JSX.Element {
  return (
    <Slides title="Trees">
      <section>
        <section className="cover">
          <p className="kicker">Fortgeschrittene Programmierung</p>
          <h1>Trees</h1>
          <p>
            Hierarchische Datenstrukturen, Traversals und Heaps verstehen und
            einordnen.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Grundlagen</li>
            <li className="fragment">Binary Tree</li>
            <li className="fragment">Traversals</li>
            <li className="fragment">Binary Search Tree</li>
            <li className="fragment">Heap (Optional)</li>
          </ul>
        </section>
      </section>

      <section data-topic="Grundlagen">
        <section className="divider">
          <p className="kicker">Einführung</p>
          <h2>Grundlagen</h2>
          <p>
            Was Bäume sind, welche Begriffe dazugehören und wo sie eingesetzt
            werden.
          </p>
        </section>

        <section>
          <h2>Was ist ein Tree?</h2>
          <div className="two-column">
            <div>
              <ul>
                <li className="fragment">Hierarchische Datenstruktur</li>
                <li className="fragment">Effiziente Navigation und Suche</li>
                <li className="fragment">Sammlung von Knoten</li>
                <li className="fragment">Durch Kanten verbundene Knoten</li>
              </ul>
            </div>
            <TreeDiagram caption="Beispiel eines Trees" />
          </div>
        </section>

        <section>
          <h2>Begriffe: Knoten und Ebenen</h2>
          <div className="two-column">
            <div>
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
                <li tabIndex={0} data-tooltip="Ebenen (4)" className="fragment">
                  Level
                </li>
              </ul>
            </div>
            <TreeDiagram />
          </div>
        </section>

        <section>
          <h2>Begriffe: Verwandtschaft und Teilbaum</h2>
          <div className="two-column">
            <div>
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
                  data-tooltip="Teilbaum (B und alle Nachfolger von B)"
                  className="fragment"
                >
                  Subtree
                </li>
              </ul>
            </div>
            <TreeDiagram />
          </div>
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
          <h2>Baumtypen</h2>
          <ul>
            <li className="fragment">Binary tree (Binärbaum)</li>
            <li className="fragment">Ternary tree (Ternärer Baum)</li>
            <li className="fragment">Quadtree (Quaternärbaum)</li>
            <li className="fragment">N-Tree/Generic Tree</li>
          </ul>
        </section>

        <section>
          <h2>Trees, Arrays und Lists im Vergleich</h2>
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

      <section data-topic="Binary Tree">
        <section className="divider">
          <p className="kicker">Bäume</p>
          <h2>Binary Tree</h2>
          <p>Ein Baum, bei dem jeder Knoten höchstens zwei Kinder hat.</p>
        </section>

        <section>
          <h2>Was ist ein Binary Tree?</h2>
          <p className="fragment">
            Bei einem Binary Tree kann jeder Node maximal zwei Child Nodes
            haben. Diese werden als left und right bezeichnet.
          </p>
        </section>

        <section>
          <h2>Node-Struktur</h2>
          <pre>
            <code
              className="language-java"
              data-line-numbers
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
          <h2>Eigenschaften</h2>
          <div className="two-column">
            <div>
              <ul>
                <li
                  tabIndex={0}
                  className="fragment"
                  data-tooltip="Kein, Ein oder Zwei Child Nodes"
                >
                  0 bis 2 Child Nodes
                </li>
                <li
                  tabIndex={0}
                  data-tooltip="Elemente innerhalb des Baumes haben keine Ordnung"
                  className="fragment"
                >
                  Keine Ordnung innerhalb des Baumes
                </li>
              </ul>
            </div>
            <TreeDiagram
              variant="binary"
              caption="Beispiel eines Binary Trees"
            />
          </div>
        </section>

        <section>
          <h2>Operationen</h2>
          <ul>
            <li className="fragment">traverse &rarr; alle Elemente besuchen</li>
            <li className="fragment">insert &rarr; Element hinzufügen</li>
            <li className="fragment">delete &rarr; Element entfernen</li>
            <li className="fragment">search &rarr; Element suchen</li>
          </ul>
        </section>
      </section>

      <section data-topic="Traversals">
        <section className="divider">
          <p className="kicker">Bäume</p>
          <h2>Traversals</h2>
          <p>
            Alle Knoten eines Baumes systematisch besuchen – depth first oder
            breadth first.
          </p>
        </section>

        <section>
          <h2>Überblick</h2>
          <ul>
            <li className="fragment">Depth First Search</li>
            <li className="fragment">Breadth First Search</li>
          </ul>
        </section>

        <section>
          <h2>Depth First Search (DFS)</h2>
          <div className="two-column">
            <div>
              <ul>
                <li className="fragment">Pre-Order-Traversal</li>
                <li className="fragment">In-Order-Traversal</li>
                <li className="fragment">Post-Order-Traversal</li>
              </ul>
            </div>
            <TreeDiagram variant="traversal" />
          </div>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/trees/bt/dfs">
              Demo: Depth First Search (DFS)
            </Link>
          </h2>
          <p className="foot-note fragment">
            Welche Datenstruktur haben wir implizit benutzt?
          </p>
        </section>

        <section>
          <h2>Breadth First Search (BFS)</h2>
          <div className="two-column">
            <div>
              <ul>
                <li className="fragment">Alternative zu DFS</li>
              </ul>
            </div>
            <TreeDiagram variant="traversal" />
          </div>
          <p className="foot-note fragment">
            Welche Datenstruktur werden wir nutzen?
          </p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/trees/bt/bfs">
              Demo: Breadth First Search (BFS)
            </Link>
          </h2>
        </section>

        <section>
          <h2>Binary Trees vergleichen</h2>
          <TreeDiagram
            variant="compare"
            caption="Gleiche Werte, unterschiedliche Struktur"
            captionFragment
          />
          <p className="foot-note">Sind Tree A und Tree B gleich?</p>
        </section>

        <section>
          <h2>DFS vs. BFS beim Vergleichen</h2>
          <ul>
            <li className="fragment">
              DFS: <code>compare(a, b)</code> ruft sich für <code>left</code>{' '}
              und <code>right</code> auf.
            </li>
            <li className="fragment">
              BFS: Queue von Paaren <code>(a, b)</code> statt einzelner Nodes.
            </li>
            <li className="fragment">
              <code>null</code> muss mitverglichen werden – sonst sind Tree A
              und Tree B gleich.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/trees/bt/compare">
              Demo: Binary Trees vergleichen
            </Link>
          </h2>
        </section>
      </section>

      <section data-topic="Binary Search Tree">
        <section className="divider">
          <p className="kicker">Bäume</p>
          <h2>Binary Search Tree</h2>
          <p>Ein Binary Tree mit Sortierung: links kleiner, rechts größer.</p>
        </section>

        <section>
          <h2>Was ist ein Binary Search Tree (BST)?</h2>
          <div className="two-column">
            <div>
              <ul>
                <li className="fragment">Binary Tree mit Sortierung</li>
                <li className="fragment">Left &lt;= Node</li>
                <li className="fragment">Node &lt; Right</li>
              </ul>
            </div>
            <TreeDiagram variant="bst" caption="Beispiel eines BST" />
          </div>
        </section>

        <section>
          <h2>Operationen</h2>
          <div className="two-column">
            <div>
              <ul>
                <li
                  tabIndex={0}
                  className="fragment"
                  data-tooltip="Search 21: 17 &rarr; 50 &rarr; 25 &rarr; 21"
                >
                  Search
                </li>
                <li
                  tabIndex={0}
                  className="fragment"
                  data-tooltip="Insert 22: 17 &rarr; 50 &rarr; 25 &rarr; 21 &rarr; rechts"
                >
                  Insert
                </li>
                <li
                  tabIndex={0}
                  className="fragment"
                  data-tooltip="Delete: 4 (Blatt) &middot; 50 (ein Kind &rarr; 25) &middot; 25 (zwei Kinder &rarr; 21, größter im linken Teilbaum)"
                >
                  Delete
                </li>
              </ul>
            </div>
            <TreeDiagram variant="bst" caption="Beispiel eines BST" />
          </div>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/trees/bst">
              Demo: Binary Search Tree
            </Link>
          </h2>
        </section>
      </section>

      <section data-topic="Heap">
        <section className="divider">
          <p className="kicker">Bäume</p>
          <h2>Heap</h2>
          <p>
            Ein Binary Tree mit schwacher Sortierung für schnellen Zugriff auf
            Maximum oder Minimum.
          </p>
        </section>

        <section>
          <h2>Was ist ein Heap?</h2>
          <div className="two-column">
            <div>
              <ul>
                <li className="fragment">
                  Binary Tree mit schwacher Sortierung
                </li>
                <li className="fragment">
                  jeder Nachfolger ist kleiner (MaxHeap)
                </li>
                <li className="fragment">
                  jeder Nachfolger ist größer (MinHeap)
                </li>
              </ul>
            </div>
            <TreeDiagram variant="heap" caption="Beispiel eines MinHeap" />
          </div>
        </section>

        <section>
          <h2>Eigenschaften</h2>
          <ul>
            <li className="fragment">Wird auch Priority Queue genannt</li>
            <li className="fragment">Kein Traversieren</li>
            <li className="fragment">Root ist immer Max/Min</li>
            <li className="fragment">
              insert/delete &rarr; Tree immer anpassen
            </li>
          </ul>
        </section>

        <section>
          <h2>Insert</h2>
          <div className="two-column">
            <div>
              <ul>
                <li className="fragment">Am Ende einfügen</li>
                <li className="fragment">nach oben verschieben</li>
                <li className="fragment">
                  Beispiel: Insert 3 &rarr; 3 wird Root
                </li>
              </ul>
            </div>
            <TreeDiagram variant="heap" caption="Beispiel eines MinHeap" />
          </div>
        </section>

        <section>
          <h2>Delete</h2>
          <div className="two-column">
            <div>
              <ul>
                <li className="fragment">Root zwischenspeichern</li>
                <li className="fragment">
                  letztes Element mit der Root tauschen
                </li>
                <li className="fragment">nach unten verschieben</li>
                <li className="fragment">
                  Beispiel: Delete 50 &rarr; 71 wird Root
                </li>
              </ul>
            </div>
            <TreeDiagram variant="heap" caption="Beispiel eines MinHeap" />
          </div>
        </section>

        <section>
          <h2>Problem: Baumdarstellung</h2>
          <ul>
            <li className="fragment">Wie kommen wir an das Ende?</li>
            <li className="fragment">Wie bekommen wir Parent?</li>
            <li className="fragment">Wie bekommen wir Children?</li>
          </ul>
          <p className="foot-note fragment">Array to the rescue!</p>
        </section>

        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java2/dsa/trees/heap">
              Demo: Heap
            </Link>
          </h2>
        </section>
      </section>
    </Slides>
  );
}
