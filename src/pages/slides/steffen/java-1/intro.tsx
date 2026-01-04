import Link from '@docusaurus/Link';
import React from 'react';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';

export default function Intro(): React.JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Einführung</li>
            <li className="fragment">Organisatorisches</li>
            <li className="fragment">Was sind Programme?</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Einführung</h2>
        </section>
        <section>
          <h2>Steffen Merk</h2>
          <p>Software Engineer</p>
        </section>
        <section>
          <h2>Lebenslauf</h2>
          <p className="fragment">Sysadmin @Framo Morat</p>
          <p className="fragment">WI DHBW Ravensburg @SAP</p>
          <p className="fragment">Developer @SAP, @remberg & @Airbus</p>
        </section>
        <section>
          <h2>Hobbies</h2>
          <p className="fragment">🏄🌊🪁</p>
          <p className="fragment">🚴🏼‍♂️ 🚴🏼‍♀️ ⛰️</p>
          <p className="fragment">🥾🎒🌄</p>
        </section>
        <section>
          <h2>Techstack</h2>
          <p className="fragment">Angular + NgRx</p>
          <p className="fragment">NodeJS + NestJS</p>
        </section>
        <section data-background-iframe="https://giphy.com/embed/8dgmMbeCA8jeg"></section>
        <section>
          <h2>Wollt ihr euch vorstellen?</h2>
        </section>
        <section data-background-iframe="https://giphy.com/embed/8vUEXZA2me7vnuUvrs"></section>
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
      <section>
        <section>
          <h2>Organisatorisches</h2>
        </section>
        <section>
          <h2>Ihr habt Fragen?</h2>
          <ul>
            <li className="fragment">Hand heben</li>
            <li className="fragment">
              Anonym auf{' '}
              <Link to="https://frag.jetzt/participant/room/jappuccini">
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
          <h2>Für was die Laptops?</h2>
          <ul>
            <li className="fragment">Alles vorinstalliert für die Vorlesung</li>
            <li className="fragment">Alles vorinstalliert für die Prüfungen</li>
            <li className="fragment">Was macht ihr daheim?</li>
          </ul>
        </section>
        <section>
          <h2>Empfehlung Neulinge</h2>
          <ul>
            <li className="fragment">
              Macht alles mit
              <Link style={{ marginLeft: '0.5rem' }} to="https://gitpod.io">
                GitPod
              </Link>
            </li>
            <li className="fragment">
              <Link style={{ marginRight: '0.5rem' }} to="https://github.com">
                GitHub
              </Link>
              Account erstellen
            </li>
            <li className="fragment">
              Registrieren mit GitHub Account bei GitPod
            </li>
            <li className="fragment">Kostet nach 50 Stunden pro Monat</li>
          </ul>
        </section>
        <section>
          <h2>Empfehlung Erfahrene</h2>
          <ul>
            <li className="fragment">
              Installiert Git und checkt die Repos aus
            </li>
            <li className="fragment">Installiert JDK und JRE</li>
            <li className="fragment">Installiert und konfiguriert eure IDE</li>
            <li className="fragment">
              Entwickelt alles lokal an eurem Rechner
            </li>
          </ul>
        </section>
        <section>
          <h2>Prüfung</h2>
          <ul>
            <li className="fragment">Findet am PC statt</li>
            <li className="fragment">Nur Editor zum Schreiben von Text</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Was sind Programme?</h2>
        </section>
        <section>
          <h2>Verschiedene Arten</h2>
          <ul>
            <li className="fragment">Programme mit GUI</li>
            <li className="fragment">Hintergrundprogramme</li>
            <li className="fragment">Programme mit TUI</li>
          </ul>
        </section>
        <section>
          <h2>Demo GUI und TUI</h2>
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
              className="bash"
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
          <h2>Wie macht man ein Java Programm?</h2>
          <p className="fragment">Quellcode verfassen</p>
          <p className="fragment">
            Quellcode zu einem Java Programm kompilieren
          </p>
          <p className="fragment">
            Java Programm mit der Java Runtime ausführen
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
      <section>
        <section>
          <h2>Zusammenfassung</h2>
        </section>
        <section>
          <h2>Programme</h2>
          <p className="fragment">GUI, TUI &amp; Hintergrund</p>
          <p className="fragment">Quellcode wird in Programm kompiliert</p>
        </section>
        <section>
          <h2>Rest of the day</h2>
          <p className="fragment">
            Development Environment einrichten (GitPod oder lokal)
          </p>
          <p className="fragment">
            <Link to="/exercises/class-structure/class-structure01">
              Hello-World-Aufgabe machen
            </Link>
          </p>
        </section>
      </section>
    </Slides>
  );
}
