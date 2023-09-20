import React from 'react';
import Slides from '../../../components/Slides';
import { defaultInitSlides } from '../../../components/Slides/initSlides';

export default function Intro() {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <h2>Einführung</h2>
      </section>
      <section>
        <section>
          <h2>Steffen Merk</h2>
          <p>Software Engineer</p>
        </section>
        <section>
          <h2>Lebenslauf</h2>
          <p className="fragment">Systemadministrator @Framo Morat</p>
          <p className="fragment">Wirtschaftsinformatik DHBW Ravensburg @SAP</p>
          <p className="fragment">Software Developer @SAP</p>
          <p className="fragment">Software Engineer @remberg</p>
        </section>
        <section>
          <h2>Techstack</h2>
          <p className="fragment">Angular + NgRx</p>
          <p className="fragment">NodeJS + NestJS + MongoDB</p>
        </section>
        <section>
          <h2>Top Focus Topics</h2>
          <p className="fragment">Zuletzt: NeoVim + NgRx + Kubernetes</p>
          <p className="fragment">Jetzt: NeoVim + NestJS + MongoDB</p>
        </section>
        <section data-background-iframe="https://giphy.com/embed/8dgmMbeCA8jeg"></section>
      </section>
      <section>
        <section>
          <h2>Wollt ihr euch vorstellen?</h2>
        </section>
        <section data-background-iframe="https://giphy.com/embed/8vUEXZA2me7vnuUvrs"></section>
      </section>
      <section>
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
          <h2>Was ist everything as code?</h2>
          <ul>
            <li className="fragment">Alles durchsuchbar</li>
            <li className="fragment">Alles überprüfbar</li>
            <li className="fragment">Alles automatisierbar</li>
          </ul>
        </section>
        <section>
          <h2>Real talk Steffen: Macht es Spaß?</h2>
          <ul>
            <li className="fragment">Keine UI bringt weniger Motivation</li>
            <li className="fragment">Ohne Programmiergrundlagen keine Apps</li>
            <li className="fragment">Java 2, Verteilte Systeme, ABAP</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Organisatorisches</h2>
        </section>
        <section>
          <h2>Wo findet ihr was?</h2>
          <p className="fragment">
            <a target="_blank" href="https://jappuccini.github.io/java-docs/">
              Folien, Dokumentation, Aufgaben (auch Externe), Lösungen und
              Anleitungen
            </a>
          </p>
          <p className="fragment">
            <a target="_blank" href="https://github.com/jappuccini/java-docs">
              Quellcode von Folien, Dokumentation, etc.
            </a>
          </p>
          <p className="fragment">
            <a
              target="_blank"
              href="https://github.com/jappuccini/java-exercises"
            >
              Quellcode von Aufgaben und Lösungen
            </a>
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
          <h2>Empfehlung Neulinge</h2>
          <ul>
            <li className="fragment">
              Macht alles mit
              <a
                style={{ marginLeft: '0.5rem' }}
                href="https://gitpod.io"
                target="_blank"
              >
                GitPod
              </a>
            </li>
            <li className="fragment">
              <a
                style={{ marginRight: '0.5rem' }}
                href="https://github.com"
                target="_blank"
              >
                GitHub
              </a>
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
      </section>
      <section>
        <section>
          <h2>Was sind Programme?</h2>
        </section>
        <section>
          <h2>Verschiedene Arten</h2>
          <li className="fragment">Programme mit GUI</li>
          <li className="fragment">Hintergrundprogramme</li>
          <li className="fragment">Programme mit TUI</li>
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
          <h2>Aufgaben</h2>
          <p className="fragment">
            Development Environment einrichten (GitPod oder lokal)
          </p>
          <p className="fragment">
            <a
              target="_blank"
              href="https://jappuccini.github.io/java-docs/exercises/class-structure/class-structure01"
            >
              Hello-World-Aufgabe machen
            </a>
          </p>
        </section>
      </section>
    </Slides>
  );
}
