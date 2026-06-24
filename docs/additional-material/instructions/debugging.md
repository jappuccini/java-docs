---
title: Debuggen mit Eclipse
description: ''
sidebar_position: 50
tags: [debugging, eclipse]
---

:::tip

Benötigte Tools: [JDK](https://www.oracle.com/java/technologies/downloads/) und
[Eclipse](https://www.eclipse.org/)

:::

Der in Eclipse integrierte Debugger ermöglicht es, ein Java-Programm
kontrolliert auszuführen, an beliebigen Stellen anzuhalten und den Zustand von
Variablen sowie den Programmfluss zu inspizieren. Die folgenden Abschnitte
führen schrittweise durch die wichtigsten Debugging-Funktionen in Eclipse.

## Programm im Debug-Modus starten

Um den Debugger zu nutzen, muss das Programm explizit im Debug-Modus gestartet
werden. Ohne diesen Modus sind Breakpoints und Schrittausführung nicht
verfügbar.

- Öffne das gewünschte Java-Projekt in Eclipse
- Navigiere im _Package Explorer_ zur Startklasse (der Klasse mit der
  `main`-Methode)
- Öffne das Kontextmenü der Startklasse (Rechtsklick) und führe **Debug As →
  Java Application** aus

:::tip

Das Programm kann alternativ über die Werkzeugleiste mit der Schaltfläche
**Debug** (Käfer-Symbol) oder mit dem Tastaturkürzel `F11` im Debug-Modus
gestartet werden.

:::

## Breakpoint setzen

Ein Breakpoint markiert eine Zeile, an der die Programmausführung pausieren
soll. Eclipse hält an dieser Stelle an, bevor die markierte Zeile ausgeführt
wird.

- Navigiere im Editor zur gewünschten Zeile
- Führe im grauen Randbereich links der Zeilennummer (Rechtsklick) die Funktion
  **Toggle Breakpoint** aus

Ein blauer Kreis im Randbereich zeigt an, dass der Breakpoint aktiv ist.

:::tip

Ein Breakpoint kann auch durch einen Doppelklick auf den grauen Randbereich
links der Zeilennummer gesetzt bzw. entfernt werden.

:::

## Debug-Perspektive verwenden

Sobald das Programm an einem Breakpoint anhält, wechselt Eclipse automatisch in
die _Debug-Perspektive_. Sie besteht aus mehreren spezialisierten Ansichten, die
gemeinsam ein vollständiges Bild des aktuellen Programmzustands liefern.

- **Debug**: zeigt den Call Stack (Aufrufhierarchie der aktiven Methoden)
- **Variables**: zeigt alle aktuell sichtbaren Variablen und deren Werte
- **Breakpoints**: listet alle gesetzten Breakpoints und erlaubt das
  Aktivieren/Deaktivieren einzelner Breakpoints
- **Console**: zeigt die Standardausgabe des laufenden Programms
- **Expressions**: wertet beliebige Java-Ausdrücke im aktuellen Kontext aus
  (z.B. `list.size()` oder `obj.getName()`)

## Programm schrittweise ausführen

Sobald das Programm an einem Breakpoint pausiert, stehen verschiedene
Schritt-Befehle zur Verfügung, um die Ausführung gezielt fortzusetzen und den
Kontrollfluss zu verfolgen.

- Führe **Run → Step Over** (`F6`) aus, um die aktuelle Zeile vollständig
  auszuführen und in der nächsten Zeile derselben Methode anzuhalten
- Führe **Run → Step Into** (`F5`) aus, um in den Rumpf des aufgerufenen
  Methodenaufrufs hineinzuspringen
- Führe **Run → Step Return** (`F7`) aus, um die aktuelle Methode vollständig
  auszuführen und zur aufrufenden Stelle zurückzukehren
- Führe **Run → Resume** (`F8`) aus, um die Ausführung bis zum nächsten
  Breakpoint fortzusetzen

## Variablenwerte inspizieren

Die View _Variables_ zeigt den aktuellen Zustand aller sichtbaren Variablen.
Objekte können aufgeklappt werden, um ihre Felder zu inspizieren.

- Navigiere in der Debug-Perspektive zur View _Variables_
- Klappe Objekte durch Betätigen des Dreiecks links des Variablennamens auf
- Der aktuelle Wert einer Variablen wird in der Spalte **Value** angezeigt

:::tip

Fahre im Editor mit der Maus über einen Variablennamen, um dessen aktuellen Wert
als Tooltip anzuzeigen. Für komplexere Ausdrücke steht die View _Expressions_
zur Verfügung: Rechtsklick im Editor → **Watch**.

:::

## Bedingten Breakpoint setzen

Ein bedingter Breakpoint pausiert die Ausführung nur dann, wenn eine angegebene
boolesche Bedingung erfüllt ist. Das ist besonders nützlich, wenn ein Fehler nur
bei bestimmten Werten auftritt – etwa ab einem bestimmten Schleifendurchlauf.

- Setze zunächst einen gewöhnlichen Breakpoint (siehe oben)
- Führe im Randbereich auf dem Breakpoint-Symbol (Rechtsklick) die Funktion
  **Breakpoint Properties...** aus
- Aktiviere die Option **Enable Condition**
- Trage eine boolesche Bedingung im Textfeld ein (z.B. `i == 42`)
- Betätige **OK**

Der Breakpoint pausiert die Ausführung nun nur noch, wenn die angegebene
Bedingung `true` ergibt.

## Debug-Perspektive verlassen

Nach dem Abschluss der Fehlersuche sollte die Debug-Perspektive ordentlich
beendet und zur Java-Perspektive zurückgewechselt werden.

- Führe **Run → Terminate** (`Ctrl+F2`) aus, um das laufende Programm zu beenden
- Wechsle über den Perspektiven-Umschalter in der Werkzeugleiste (oben rechts)
  zurück zur _Java_-Perspektive
