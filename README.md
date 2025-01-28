PrayerTracker WebApp

## Projektübersicht
Die Prayer Tracker WebApp ist eine Webanwendung, die es Benutzern ermöglicht, Gebetszeiten zu verwalten und Gebetsaufgaben abzuhaken. Die Webanwendung unterstützt mehrere Benutzer und speichert Daten sicher in einer Supabase-Datenbank. Nutzer können ihre Gebetszeiten und Gebetserfahrungen eintragen, die erledigten Aufgaben abhaken und ihre Gebetsliste für den Tag sehen.

### Funktionen:
- **Multi-User-Unterstützung**: Jeder Benutzer kann seine eigenen Gebetszeiten und Aufgaben verwalten.
- **CRUD-Operationen**: Benutzer können Gebetszeiten und Aufgaben hinzufügen, bearbeiten und löschen.
- **Authentifizierung**: Benutzer können sich anmelden und ihre Daten sicher speichern.
- **Abhaken von Aufgaben**: Aufgaben können als erledigt markiert werden.
- **Responsives Design**: Die Webanwendung ist für verschiedene Bildschirmgrößen optimiert.
- **Supabase**: Wird für Authentifizierung und Speicherung der Benutzerdaten verwendet.

## Features
- **Login und Registrierung**: Benutzer können sich mit ihrer E-Mail und Passwort anmelden.
- **Gebetszeit-Verwaltung**: Benutzer können Gebetszeiten hinzufügen, bearbeiten und löschen.
- **Abhaken von Aufgaben**: Jede Gebetszeit hat eine Checkbox, um anzuzeigen, ob das Gebet erledigt wurde.
- **CRUD-Operationen für Gebetszeiten**: Benutzer können Gebetszeiten aktualisieren und löschen.
- **Datenpersistenz in Supabase**: Alle Gebetszeiten und Benutzerdaten werden in Supabase gespeichert.

## Technologien
- **Frontend**: React, TailwindCSS
- **Backend**: Supabase (für Authentifizierung und Datenbank)
- **Deployment**: Netlify (Frontend), Supabase (Backend)

## Installation

### Voraussetzungen:
- Node.js und npm
- Supabase Konto

### Schritte zur Installation:

```markdown
1. **Projekt klonen**:
git clone <repository-url>
cd <repository-directory>

Abhängigkeiten installieren:
npm install

Supabase-Umgebungsvariablen konfigurieren:
Erstelle eine .env Datei im Projektverzeichnis und füge deine Supabase-URL und den Anon-Schlüssel hinzu:
env
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
Entwicklungsserver starten:
npm start
Webanwendung aufrufen: Öffne deinen Browser und gehe zu http://localhost:3000.

## User Stories mit Akzeptanzkriterien

### 1. Benutzer-Login und Registrierung
**Als Benutzer möchte ich mich mit meiner E-Mail und meinem Passwort anmelden können, um auf meine Gebetszeiten und Aufgaben zugreifen zu können.**
- **Akzeptanzkriterien**:
  - Benutzer können sich mit einer E-Mail und einem Passwort anmelden.
  - Es wird eine Fehlermeldung angezeigt, wenn die Eingaben ungültig sind.

### 2. Verwalten der Gebetszeiten
**Als Benutzer möchte ich Gebetszeiten hinzufügen, bearbeiten und löschen können, um meine täglichen Gebete zu verwalten.**
- **Akzeptanzkriterien**:
  - Benutzer können neue Gebetszeiten hinzufügen.
  - Bestehende Gebetszeiten können bearbeitet oder gelöscht werden.

### 3. Abhaken von Aufgaben
**Als Benutzer möchte ich meine Gebetsaufgaben als erledigt markieren können, um zu sehen, was ich bereits erledigt habe.**
- **Akzeptanzkriterien**:
  - Benutzer können Aufgaben abhaken und den Status als erledigt speichern.

### 4. CRUD-Operationen
**Als Benutzer möchte ich alle Aufgaben (hinzufügen, bearbeiten, löschen) für jede Gebetszeit verwalten können.**
- **Akzeptanzkriterien**:
  - Aufgaben für jedes Gebet können hinzugefügt, bearbeitet und gelöscht werden.

## Arbeitsplan und Zeitschätzung

| Arbeitspaket                            | Zeitschätzung | Status      |
|-----------------------------------------|---------------|-------------|
| Projektstruktur und Setup              | 1h            | Abgeschlossen |
| Implementierung der Authentifizierung   | 2h            | Abgeschlossen |
| Implementierung von CRUD für Gebetszeiten | 3h            | Abgeschlossen |
| Implementierung der Checkbox-Funktionalität | 2h            | Abgeschlossen |
| UI-Design und Responsiveness           | 3h            | Abgeschlossen |
| Tests und Fehlerbehebung               | 2h            | Abgeschlossen |
| Deployment und Dokumentation           | 2h            | Abgeschlossen |

## GitHub Link und Repository
Repository URL: GitHub-Link zum Projekt  
Umgebungsvariablen im `.env`-File sind notwendig, um die Supabase-Verbindung korrekt herzustellen.

## Deployment-Optionen
- Das Projekt wird auf Netlify für das Frontend bereitgestellt.
- Das Backend wird mit Supabase betrieben, das sowohl für die Datenbank als auch für die Authentifizierung verantwortlich ist.

## Authentifizierung
Die Authentifizierung wird mit Supabase durchgeführt. Benutzer können sich mit ihrer E-Mail und Passwort anmelden. Alle Benutzerdaten werden in der Supabase-Datenbank gespeichert.

## Kritischer Review

### Erreichte Ziele:
- **Authentifizierung**: Die Benutzer können sich erfolgreich anmelden und ihre Daten verwalten.
- **CRUD-Operationen**: Gebetszeiten und Aufgaben können hinzugefügt, bearbeitet und gelöscht werden.
- **Abhaken von Aufgaben**: Aufgaben für jedes Gebet können als erledigt markiert werden.

### Nicht erreichte Ziele:
- **Admin-Funktionalität**: Eine Admin-Option für erweiterte Funktionen wurde nicht implementiert.
- **Dateiupload**: Der Datei-Upload für Gebetsnotizen wurde nicht umgesetzt.

## Fazit
Ich habe mein Bestes gegeben, um das Projekt gemäß den Anforderungen umzusetzen. Die wichtigsten Funktionen wie die Verwaltung von Gebetszeiten, das Abhaken von Aufgaben und die Authentifizierung wurden erfolgreich implementiert. Die Benutzeroberfläche ist responsiv und die Anwendung funktioniert reibungslos.

### Zusätzliche Funktionen (optional)
- **Admin-Funktionalität**: Noch nicht implementiert.
- **Datei-Upload**: Noch nicht umgesetzt.

Ich freue mich auf das Feedback und hoffe, dass das Projekt die Anforderungen erfüllt und eine gute Bewertung erhält.

### Hinweise:
1. Achte darauf, dass du deine `.env`-Datei im Projektverzeichnis richtig einrichtest und niemals auf GitHub hochlädst. Füge `.env` zu deiner `.gitignore` hinzu.
2. Mache sicher, dass alle Funktionen, wie das Hinzufügen und Abhaken der Gebetsaufgaben, korrekt in Supabase gespeichert werden und du beim Deployment auf die passende URL verweist.
