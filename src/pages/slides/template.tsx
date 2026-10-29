import Slides from '../../components/Slides';

export default function TemplatePresentation(): React.JSX.Element {
  return (
    <Slides title="Slide-Styleguide">
      <section>
        <section className="cover">
          <p className="kicker">Fortgeschrittene Programmierung</p>
          <h1>Slide-Styleguide</h1>
          <p>
            Alle Bausteine des Studio-Coffee-Themes — geprüft in Light und Dark.
          </p>
        </section>
      </section>

      <section data-topic="Inhalt und Typografie">
        <section className="divider">
          <p className="kicker">Kapitel 1</p>
          <h2>Inhalt und Typografie</h2>
          <p>Kicker, Überschriften, Prosa, Listen, Fragmente und Links.</p>
        </section>

        <section>
          <p className="kicker">Typografie</p>
          <h2>Überschriften und Text</h2>
          <p>
            Fließtext mit <strong>Hervorhebung</strong>, <em>Betonung</em> und{' '}
            <code>Inline-Code</code>. Ein Link führt zur{' '}
            <a href="https://jappuccini.github.io/java-docs/">Dokumentation</a>.
          </p>
          <ul>
            <li>Listen erhalten einen Akzent-Marker in Terrakotta.</li>
            <li className="fragment">
              Fragmente erscheinen erst beim nächsten Schritt.
            </li>
          </ul>
          <aside className="notes">
            Autor:innen-Notiz — nie für das Publikum sichtbar.
          </aside>
        </section>

        <section className="statement">
          <p>
            Ein Deck besteht aus Topic Groups: horizontal navigierbar, vertikal
            die Slides innerhalb der Gruppe.
          </p>
        </section>

        <section>
          <h2>Callout</h2>
          <div className="callout">
            <span className="callout-title">Definition</span>
            <p>
              Ein <b>Callout</b> bündelt Aufgaben, Hinweise und Definitionen in
              einer ruhigen Box.
            </p>
          </div>
        </section>

        <section>
          <h2>Zwei Spalten</h2>
          <div className="two-column">
            <div>
              <h3>Light Mode</h3>
              <ul>
                <li>Warme, helle Basis</li>
                <li>Terrakotta als Akzent</li>
              </ul>
            </div>
            <div>
              <h3>Dark Mode</h3>
              <ul>
                <li>Warmes Dunkelbraun</li>
                <li>Gedämpfte Kontraste</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Tabellen</h2>
          <table>
            <thead>
              <tr>
                <th>Baustein</th>
                <th>Verwendung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.kicker</code>
                </td>
                <td>Akzentlabel über der Überschrift</td>
              </tr>
              <tr>
                <td>
                  <code>.callout</code>
                </td>
                <td>Aufgaben, Hinweise, Definitionen</td>
              </tr>
              <tr>
                <td>
                  <code>.foot-note</code>
                </td>
                <td>Ergänzung am unteren Rand</td>
              </tr>
            </tbody>
          </table>
          <p className="foot-note">* Fußnoten sitzen am unteren Rand.</p>
        </section>
      </section>

      <section data-topic="Code">
        <section className="divider">
          <p className="kicker">Kapitel 2</p>
          <h2>Code</h2>
          <p>Zeilen, Schritte und Kontext.</p>
        </section>

        <section>
          <p className="kicker">Java</p>
          <h2>Schrittweise Hervorhebung</h2>
          <pre className="fragment">
            <code
              className="language-java"
              data-line-numbers="2|4-5"
              dangerouslySetInnerHTML={{
                __html:
                  'public class Box&lt;T&gt; {\n' +
                  '  private T value;\n' +
                  '  public Box(T value) {\n' +
                  '    this.value = value;\n' +
                  '  }\n' +
                  '  public T getValue() {\n' +
                  '    return value;\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Panel mit Caption</h2>
          <p className="code-caption">Box.java</p>
          <pre>
            <code
              className="language-java"
              data-line-numbers
              dangerouslySetInnerHTML={{
                __html:
                  'public class Box&lt;T&gt; {\n' +
                  '  private T value;\n' +
                  '  public Box(T value) {\n' +
                  '    this.value = value;\n' +
                  '  }\n' +
                  '  public T getValue() {\n' +
                  '    return value;\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Shell</h2>
          <pre>
            <code
              className="language-bash"
              dangerouslySetInnerHTML={{
                __html: 'javac -d out src/Box.java\n' + 'java -cp out Main',
              }}
            ></code>
          </pre>
        </section>
      </section>

      <section data-topic="Diagramme">
        <section className="divider">
          <p className="kicker">Kapitel 3</p>
          <h2>Diagramme</h2>
          <p>Knoten, Kanten und Beschriftungen.</p>
        </section>

        <section>
          <h2>Diagramm-Bausteine</h2>
          <div className="diagram">
            <span className="node accent">Wurzel</span>
            <span className="edge v" />
            <span className="node">Kind</span>
          </div>
          <p className="label">Beschriftung unter dem Diagramm</p>
        </section>
      </section>
    </Slides>
  );
}
