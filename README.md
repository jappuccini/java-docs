# Programmieren mit Java

Deutschsprachige Java-Lerndokumentation, gebaut mit
[Docusaurus 3](https://docusaurus.io/).

- **Dokumentation & Übungsaufgaben:**
  https://jappuccini.github.io/java-docs/production
- **Aufgaben-Repository (Branches):**
  https://github.com/jappuccini/java-exercises

## Inhalt

| Bereich                     | Beschreibung                                                           |
| --------------------------- | ---------------------------------------------------------------------- |
| `docs/documentation/`       | Java-Konzepte und Tutorials                                            |
| `docs/exercises/`           | Übungsaufgaben (verlinken auf Branches in `jappuccini/java-exercises`) |
| `docs/exam-exercises/`      | Klausuraufgaben                                                        |
| `docs/additional-material/` | Tools, Einrichtungsanleitungen, Kursmaterialien                        |

## Voraussetzungen

- Node.js >= 22.0 (siehe `.nvmrc`)

## Lokale Entwicklung

```bash
npm install       # Abhängigkeiten installieren
npm start         # Entwicklungsserver starten (http://localhost:3000)
```

Änderungen an Dateien werden im Browser sofort sichtbar, ohne dass ein Neustart
nötig ist.

## Weitere Befehle

```bash
npm run build                                  # Produktions-Build erstellen
npm run serve                                  # Build lokal ausliefern
npm run clear                                  # Docusaurus-Cache leeren
npm run prettier:check                         # Formatierung prüfen (läuft in CI)
npx prettier . --write --end-of-line crlf      # Formatierung automatisch korrigieren
```

## Beitragen

1. Branch von `main` erstellen
2. Änderungen vornehmen
3. Formatierung mit `npx prettier . --write --end-of-line crlf` sicherstellen
4. Pull Request gegen `main` öffnen

Die CI prüft beim Push auf `main` automatisch die Formatierung und deployt bei
Erfolg auf GitHub Pages.

## Autoren

Daniel Appenmaier & Steffen Merk
