import Link from '@docusaurus/Link';
import React from 'react';
import Slides from '../../../../components/Slides';
import { defaultInitSlides } from '../../../../components/Slides/initSlides';
import { NKR } from '@site/src/components/Slides/nkr';

export default function Exceptions(): React.JSX.Element {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>
        <section>
          <h2>Agenda</h2>
          <ul>
            <li className="fragment">Wiederholung</li>
            <li className="fragment">Exceptions</li>
            <li className="fragment">Zusammenfassung</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Wiederholung</h2>
          <ul>
            <li className="fragment">Interfaces</li>
            <li className="fragment">Komparatoren</li>
          </ul>
        </section>
      </section>
      <section>
        <section>
          <h2>Exceptions</h2>
        </section>
        <section>
          <h2>Exceptions</h2>
          <ul>
            <li className="fragment">
              sind Fehler, die zur Laufzeit auftreten
            </li>
            <li className="fragment">dienen zur Kommunikation</li>
            <li className="fragment">werden ausgelöst (throw)</li>
            <li className="fragment">behandelt (catch)</li>
          </ul>
        </section>
        <section>
          <h2>technische Sichtweise</h2>
          <ul>
            <li className="fragment">Exceptions sind Klassen</li>
            <li className="fragment">
              eine Exceptionklasse erweitert die Klasse Exception
            </li>
            <li className="fragment">
              Methoden definieren potenziell ausgelöste Exceptions
            </li>
          </ul>
        </section>
        <section>
          <p>Auslösen einer Exception</p>
          <pre>
            <code
              className="java"
              data-line-numbers="1-5|3|1"
              dangerouslySetInnerHTML={{
                __html:
                  'public static void checkAge(int age) throws Exception {\n' +
                  '  if(age &lt; 18) {\n' +
                  '    throw new Exception();\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <p>Behandeln einer Exception</p>
          <pre>
            <code
              className="java"
              data-line-numbers="3|2-4|5-7|8-10"
              dangerouslySetInnerHTML={{
                __html:
                  'public static void main(String[] args) {\n' +
                  '  try {\n' +
                  '    Example.checkAge(2);\n' +
                  '  }\n' +
                  '  catch (Exception e) {\n' +
                  '    System.out.println("Age to low");\n' +
                  '  }\n' +
                  '  finally {\n' +
                  '    System.out.println("Always");\n' +
                  '  }\n' +
                  '}',
              }}
            ></code>
          </pre>
        </section>
        <section>
          <h2>
            <Link to="https://github.com/jappuccini/java-demos/tree/steffen/java1/exceptions">
              Demo - Exceptions
            </Link>
          </h2>
          <ul>
            <li className="fragment">PasswordTooShortException</li>
            <li className="fragment">super call</li>
            <li className="fragment">throw PasswordTooShortException</li>
            <li className="fragment">catch PasswordTooShortException</li>
            <li className="fragment">mehr Informationen mitgeben</li>
            <li className="fragment">PasswordTooLongException</li>
            <li className="fragment">instance of und multiple catch</li>
          </ul>
        </section>
        <section>
          <h2>Schlüsselwörter</h2>
          <ul>
            <li className="fragment">throw &rarr; Methode</li>
            <li className="fragment">throws &rarr; Methodensignatur</li>
            <li className="fragment">try &rarr; ohne Error</li>
            <li className="fragment">catch &rarr; falls Error </li>
            <li className="fragment">finally &rarr; immer </li>
          </ul>
        </section>
        <section>
          <h2>Unchecked Exceptions*</h2>
          <ul>
            <li className="fragment">extends Runtime Exception</li>
            <li className="fragment">benötigt kein throws</li>
            <li className="fragment">kein Compiler check</li>
            <li className="fragment">Beispiel: ClassCastException</li>
          </ul>
          <NKR />
        </section>
      </section>
      <section>
        <section>
          <h2>Rest of the day</h2>
          <ul>
            <li className="fragment">
              <Link to="/exercises/exceptions">Exceptions 01 - 03</Link>
            </li>
          </ul>
        </section>
      </section>
    </Slides>
  );
}
