import Link from '@docusaurus/Link';
import Slides from '../../../../components/Slides';
import { NKR } from '../../../../components/Slides/nkr';

export default function Intro(): React.JSX.Element {
  return (
    <Slides title="Einführung und Organisatorisches">
      <section>
        <section className="cover">
          <p className="kicker">Grundlagen der Programmierung</p>
          <h1>Einführung und Organisatorisches</h1>
          <p>
            Wer vor euch steht, wie die Vorlesung organisiert ist und was
            Programme sind.
          </p>
        </section>
      </section>

      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Einführung</li>
            <li className="fragment">Erwartungen</li>
            <li className="fragment">Organisatorisches</li>
            <li className="fragment">Was sind Programme?</li>
            <li className="fragment">Git und Aufgaben</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>

      <section data-topic="Einführung">
        <section className="divider">
          <p className="kicker">Vorstellung</p>
          <h2>Einführung</h2>
          <p>Wer vor euch steht und wer ihr seid.</p>
        </section>

        <section>
          <h2>Steffen Merk</h2>
          <p>Software Engineer</p>
        </section>

        <section>
          <h2>Lebenslauf</h2>
          <p className="fragment">Sysadmin @Framo Morat</p>
          <p className="fragment">Wirtschaftsinformatik DHBW Ravensburg @SAP</p>
          <p className="fragment">Developer @SAP, @remberg & @Airbus</p>
        </section>

        <section>
          <h2>Hobbys</h2>
          <p className="fragment">🏄🌊🪁</p>
          <p className="fragment">🚴🏼‍♂️ 🚴🏼‍♀️ ⛰️</p>
          <p className="fragment">🥾🎒🌄</p>
        </section>

        <section>
          <h2>Techstack</h2>
          <p className="fragment">Angular + NgRx</p>
          <p className="fragment">NodeJS + NestJS</p>
          <p className="fragment">Java + Vert.X</p>
        </section>

        <section>
          <h2>Wollt ihr euch vorstellen?</h2>
        </section>

        <section data-background-iframe="https://giphy.com/embed/8vUEXZA2me7vnuUvrs"></section>
      </section>

      <section data-topic="Erwartungen">
        <section className="divider">
          <p className="kicker">Einführung</p>
          <h2>Erwartungen</h2>
          <p>Was euch erwartet und wie ihr eine gute Note erreicht.</p>
        </section>

        <section>
          <h2>Was erwartet euch?</h2>
          <p className="fragment">Fokus liegt auf dem Programmieren</p>
          <p className="fragment">Nicht auswendig lernen</p>
        </section>

        <section>
          <h2>Wie erreicht ihr eine gute Note?</h2>
          <ol>
            <li className="fragment">Versteht, was ihr programmiert</li>
            <li className="fragment">Fragt nach! Mich oder Kommilitonen</li>
            <li className="fragment">Macht die Aufgaben zeitnah!</li>
          </ol>
        </section>

        <section>
          <h2>Real talk Steffen: Macht es Spaß?</h2>
          <ul>
            <li className="fragment">Keine UI bringt weniger Motivation</li>
            <li className="fragment">Ohne Programmiergrundlagen keine Apps</li>
            <li className="fragment">Java 2, Verteilte Systeme</li>
          </ul>
        </section>
      </section>

      <section data-topic="Organisatorisches">
        <section className="divider">
          <p className="kicker">Organisation</p>
          <h2>Organisatorisches</h2>
          <p>Fragen, Materialien, Verantwortlichkeiten und die Prüfung.</p>
        </section>

        <section>
          <h2>Ihr habt Fragen?</h2>
          <ul>
            <li className="fragment">Hand heben</li>
            <li className="fragment">
              Anonym auf{' '}
              <Link to="https://frag.jetzt/participant/room/12501321">
                Frag jetzt
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Wo findet ihr was?</h2>
          <p className="fragment">
            <Link to="https://jappuccini.github.io/java-docs/production">
              Dokumentation, Aufgaben, Folien
            </Link>
          </p>
          <p className="fragment">
            <Link to="https://github.com/jappuccini/java-docs">
              Quellcode von Dokumentation und Folien
            </Link>
          </p>
          <p className="fragment">
            <Link to="https://github.com/jappuccini/java-exercises">
              Quellcode von Aufgaben und Lösungen
            </Link>
          </p>
        </section>

        <section>
          <h2>Was liegt in eurer Verantwortung?</h2>
          <ul>
            <li className="fragment">Installation von Tools</li>
            <li className="fragment">Verwenden von Tools</li>
            <li className="fragment">Verwenden der Kommandozeile</li>
            <li className="fragment">Verwenden von git</li>
          </ul>
        </section>

        <section>
          <h2>Empfehlung für Neulinge</h2>
          <p>Macht alles mit VS Code und Dev Containers</p>
          <ul>
            <li className="fragment">
              <Link to="https://code.visualstudio.com/">
                VS Code installieren
              </Link>
            </li>
            <li className="fragment">
              <Link to="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers">
                VS Code Plugin Dev Containers installieren
              </Link>
            </li>
            <li className="fragment">
              <Link to="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack">
                VS Code Plugin Java installieren
              </Link>
            </li>
            <li className="fragment">
              <Link to="https://git-scm.com/">Git installieren</Link>
            </li>
            <li className="fragment">
              <Link to="https://www.docker.com/products/docker-desktop/">
                Docker installieren
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Empfehlung für Erfahrene</h2>
          <ul>
            <li className="fragment">
              Installiert Git und checkt die Repos aus
            </li>
            <li className="fragment">Installiert JDK und JRE (21)</li>
            <li className="fragment">Installiert und konfiguriert eure IDE</li>
          </ul>
        </section>

        <section>
          <h2>Prüfung</h2>
          <ul>
            <li className="fragment">Findet am PC statt</li>
            <li className="fragment">Nur ein Editor zum Schreiben von Text</li>
          </ul>
        </section>
      </section>

      <section data-topic="Was sind Programme?">
        <section className="divider">
          <p className="kicker">Grundlagen</p>
          <h2>Was sind Programme?</h2>
          <p>
            GUI, TUI, Hintergrundprogramme und der Weg zum laufenden
            Java-Programm.
          </p>
        </section>

        <section>
          <h2>Arten von Programmen</h2>
          <ul>
            <li className="fragment">Programme mit GUI</li>
            <li className="fragment">Programme mit TUI</li>
            <li className="fragment">Hintergrundprogramme</li>
          </ul>
        </section>

        <section>
          <h2>Demo: GUI und TUI</h2>
          <ul>
            <li className="fragment">Ordner erstellen</li>
            <li className="fragment">Datei erstellen</li>
            <li className="fragment">Datei verschieben</li>
            <li className="fragment">Ordner löschen</li>
          </ul>
        </section>

        <section>
          <h2>Kommandozeile</h2>
          <p className="fragment">
            Syntax: &lt;name&gt; [OPTION, ...] [--flag, ...]
          </p>
          <pre className="fragment">
            <code
              className="language-bash"
              dangerouslySetInnerHTML={{
                __html:
                  'ls # alle Ordner und Dateien anzeigen \n' +
                  'ls -l # wie Z1, aber als Liste anzeigen \n' +
                  'ls -la # wie Z2, aber auch versteckte Dateien und Ordner \n' +
                  'ls docs -la # wie Z3, aber im Unterordner docs \n',
              }}
            ></code>
          </pre>
        </section>

        <section>
          <h2>Wie erstellt man ein Java-Programm?</h2>
          <p className="fragment">Quellcode verfassen</p>
          <p className="fragment">
            Quellcode zu einem Java-Programm kompilieren
          </p>
          <p className="fragment">
            Java-Programm mit der Java Runtime ausführen
          </p>
          <aside className="notes">
            <h3>Beispiel: Hello World</h3>
            <ul>
              <li>javac</li>
              <li>java Exercise.java</li>
              <li>String[] args in debugger</li>
            </ul>
          </aside>
        </section>
      </section>

      <section data-topic="Git und Aufgaben">
        <section className="divider">
          <p className="kicker">Werkzeuge</p>
          <h2>Git und Aufgaben</h2>
          <p>
            Repository klonen, Branches wechseln und die erste Aufgabe
            auschecken.
          </p>
        </section>

        <section>
          <h2>Repository klonen</h2>
          <p>Das Repository auf den eigenen Rechner kopieren.</p>
          <pre>
            <code
              className="language-bash"
              dangerouslySetInnerHTML={{
                __html:
                  'git clone https://github.com/jappuccini/java-exercises.git\n' +
                  'cd java-exercises\n',
              }}
            ></code>
          </pre>
          <NKR />
        </section>

        <section>
          <h2>Branches anzeigen und wechseln</h2>
          <p>
            <code>git branch</code> zeigt alle Branches, <code>git switch</code>{' '}
            wechselt zwischen ihnen.
          </p>
          <pre>
            <code
              className="language-bash"
              dangerouslySetInnerHTML={{
                __html:
                  'git branch\n' +
                  'git switch exe/class-structure-01\n' +
                  'git switch sol/class-structure-01\n',
              }}
            ></code>
          </pre>
          <NKR />
        </section>

        <section>
          <h2>Vorgehensweise Aufgaben</h2>
          <ul>
            <li className="fragment">
              <code>git add . && git stash</code> — Änderungen der letzten
              Aufgabe zwischenspeichern
            </li>
            <li className="fragment">
              <code>git switch exe/EXERCISE</code> — Aufgabe auschecken
            </li>
            <li className="fragment">Aufgabe bearbeiten</li>
            <li className="fragment">
              <code>git switch sol/EXERCISE</code> — Lösung ansehen
            </li>
          </ul>
          <p className="fragment">Für die erste Aufgabe reicht Schritt 2.</p>
        </section>
      </section>

      <section data-topic="Zusammenfassung">
        <section className="divider">
          <p className="kicker">Abschluss</p>
          <h2>Zusammenfassung</h2>
          <p>
            Die wichtigsten Punkte zu Programmen und zur Aufgabenbearbeitung.
          </p>
        </section>

        <section>
          <h2>Programme</h2>
          <p className="fragment">GUI, TUI &amp; Hintergrund</p>
          <p className="fragment">Quellcode wird in ein Programm kompiliert</p>
        </section>

        <section>
          <h2>Git und Aufgaben</h2>
          <p className="fragment">Repository klonen</p>
          <p className="fragment">Exercise- und Solution-Branch wechseln</p>
          <p className="fragment">Aufgaben im Exercise-Branch bearbeiten</p>
        </section>
      </section>

      <section data-topic="Rest of the Day">
        <section>
          <h2>Rest of the Day</h2>
          <ul>
            <li className="fragment">Entwicklungsumgebung einrichten</li>
            <li className="fragment">
              Repository klonen und erste Aufgabe auschecken
            </li>
            <li className="fragment">Hello-World-Aufgabe lösen</li>
          </ul>
          <div className="callout fragment" style={{ fontSize: '0.8em' }}>
            <span className="callout-title">Wenn du nicht weiterkommst</span>
            <p>
              Ohne Git: Lege die Klasse direkt in deiner IDE an und gib Hello
              World aus.
            </p>
            <p>Wir besprechen die Aufgabe am Anfang der nächsten Sitzung.</p>
            <p>
              Hilfe:{' '}
              <Link to="/additional-material/instructions/jdk">
                JDK installieren
              </Link>{' '}
              ·{' '}
              <Link to="/additional-material/steffen/Allgemein">
                Aufgaben-Hilfe
              </Link>{' '}
              ·{' '}
              <Link to="https://frag.jetzt/participant/room/12501321">
                Frag jetzt
              </Link>
            </p>
          </div>
        </section>
      </section>
    </Slides>
  );
}
