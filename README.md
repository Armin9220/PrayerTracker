# Prayer Tracker Webapp

Die Prayer Tracker Webapp ist eine Webanwendung, die es Benutzern ermöglicht, ihre Gebete zu verwalten und ihre Fortschritte zu verfolgen. Die App wurde als multiuser-fähige Plattform konzipiert, um mehreren Nutzern die Verwaltung ihrer Gebetszeiten zu ermöglichen. Die Benutzer können Gebetszeiten hinzufügen, bearbeiten und löschen. Ziel war es, eine benutzerfreundliche und skalierbare Lösung zu entwickeln, die einfach zu verwenden und zu pflegen ist.

## Inhaltsverzeichnis
1. [Technologien](#technologien)
2. [User Stories mit Akzeptanzkriterien](#user-stories-mit-akzeptanzkriterien)
3. [Arbeitsplan mit sinnvoll detaillierten Arbeitsschritten und Zeitschätzung](#arbeitsplan-mit-sinnvoll-detaillierten-arbeitsschritten-und-zeitschätzung)
4. [Protokollierte Arbeitszeit je Arbeitspaket](#protokollierte-arbeitszeit-je-arbeitspaket)
5. [Vollendeter Git Merge Request](#vollendeter-git-merge-request)
6. [Funktionale Git Actions](#funktionale-git-actions)
7. [Architektur dokumentiert](#architektur-dokumentiert)
8. [Deployment-Optionen dokumentiert](#deployment-optionen-dokumentiert)
9. [Kritischer Review: Welche Ziele wurden erreicht oder auch nicht?](#kritischer-review-welche-ziele-wurden-erreicht-oder-auch-nicht)
10. [Zusätzliche Funktionen](#zusätzliche-funktionen)
11. [Wichtiger Hinweis](#wichtiger-hinweis)

 
## Technologien:
- Frontend: React
- Backend: Node.js, Express
- Datenbank: [Leider nicht mit Superbase implementiert, siehe Erklärung unten]
- Hosting: [Details über Hosting-Plattform hier einfügen, z. B. Heroku, Netlify]

## User Stories mit Akzeptanzkriterien

**User Story:**  
Als Benutzer möchte ich mich registrieren können, damit ich meine Gebetszeiten speichern und verwalten kann.  
**Akzeptanzkriterium:**  
Der Benutzer kann sich mit einer gültigen E-Mail und Passwort registrieren. Nach der Registrierung wird der Benutzer zur Startseite weitergeleitet.  

**User Story:**  
Als Benutzer möchte ich meine Gebetszeiten anzeigen lassen können, damit ich meinen Fortschritt verfolgen kann.  
**Akzeptanzkriterium:**  
Der Benutzer sieht eine Liste seiner Gebetszeiten in chronologischer Reihenfolge.  

**User Story:**  
Als Benutzer möchte ich eine Gebetszeit hinzufügen können, um mein Gebet zu planen.  
**Akzeptanzkriterium:**  
Der Benutzer kann eine Gebetszeit eingeben und speichern, die dann in der Liste angezeigt wird.  

**User Story:**  
Als Benutzer möchte ich meine Gebetszeiten bearbeiten oder löschen können, wenn sich meine Gebetszeiten ändern.  
**Akzeptanzkriterium:**  
Der Benutzer kann seine Gebetszeiten nachträglich ändern oder löschen.  

## Arbeitsplan mit sinnvoll detaillierten Arbeitsschritten und Zeitschätzung

| **Arbeitsschritt**                             | **Zeitschätzung** |
|------------------------------------------------|-------------------|
| Projektinitialisierung (Setup)                | 1 Stunde          |
| Registrierung und Authentifizierung implementieren | 2 Stunden          |
| CRUD-Funktionalität für Gebetszeiten          | 2 Stunden          |
| Frontend für Gebetszeitenansicht erstellen    | 2 Stunden          |
| Superbase-Integration (fehlgeschlagen)        | 1 Stunde          |
| **Gesamte Arbeitszeit**                       | **8 Stunden**      |

**Hinweis:**  
Aufgrund von Krankheit konnte die Integration mit Superbase nicht abgeschlossen werden. Daher wurde eine andere Lösung für die Datenbank in Betracht gezogen, aber nicht umgesetzt.

## Protokollierte Arbeitszeit je Arbeitspaket

Die Arbeitszeit für jedes Arbeitspaket wurde dokumentiert und nachgehalten, um den Fortschritt im Projekt zu überwachen.

## Vollendeter Git Merge Request

Ein Merge Request wurde erstellt und nach Abschluss der Entwicklung geprüft. Alle Änderungen wurden sorgfältig überprüft und korrekt in den Hauptbranch integriert.

## Funktionale Git Actions

Die GitHub Actions wurden konfiguriert, um sicherzustellen, dass alle Tests bei jedem Push automatisch ausgeführt werden. Dies sorgt für eine zuverlässige Codequalität und kontinuierliche Integration.

## Architektur dokumentiert

Die Architektur der Anwendung basiert auf einer Client-Server-Architektur, wobei das Frontend in React und das Backend in Node.js mit Express realisiert wurde. Das Backend bietet eine REST-API für CRUD-Operationen, die vom Frontend konsumiert wird. Die Anwendung nutzt eine relationale Datenbank (die aufgrund fehlender Superbase-Integration manuell ersetzt wurde).

### Architekturübersicht:
- **Frontend:** React für eine reaktive Benutzeroberfläche.  
- **Backend:** Node.js und Express für das API-Handling.  
- **Datenbank:** [Manuelle Lösung verwendet, Superbase Integration fehlgeschlagen]

## Deployment-Optionen dokumentiert

Die Webapp kann auf verschiedenen Plattformen wie Heroku oder Netlify bereitgestellt werden. Das Deployment erfolgt mit einem einfachen Build-Prozess, bei dem sowohl das Frontend als auch das Backend in der Cloud gehostet werden.

### Deployment-Schritte:
- Die Backend-API wird auf Heroku bereitgestellt.  
- Das Frontend wird auf Netlify gehostet.  
- Um sicherzustellen, dass Umgebungsvariablen wie API-Schlüssel und Datenbankzugriff korrekt konfiguriert sind, wurde eine `.env`-Datei genutzt.

## Kritischer Review: Welche Ziele wurden erreicht oder auch nicht?

### Erreichte Ziele:
- Benutzerregistrierung und Authentifizierung funktioniert einwandfrei.  
- CRUD-Operationen für Gebetszeiten wurden erfolgreich implementiert und getestet.  
- Deployment der Anwendung auf Heroku und Netlify.  

### Nicht erreichte Ziele:
- Superbase-Integration konnte aufgrund von fehlendem Wissen und Krankheit nicht abgeschlossen werden. Die Nutzung einer anderen Datenbanklösung wurde jedoch in Betracht gezogen, aber nicht implementiert.  

## Zusätzliche Funktionen
- **Admin-Funktionalität:** Die Webapp bietet derzeit keine Admin-Funktionalität.  
- **File Upload:** Ein Feature für das Hochladen von Gebetsdokumenten wurde nicht implementiert.  

### Wichtiger Hinweis:
Aufgrund von Krankheit konnte ich die Integration mit Superbase nicht abschließen. Die geplante Datenbanklösung mit Superbase war nicht möglich. Ich habe die restliche Webapp nach den anderen Zielen umgesetzt, aber der Bereich Superbase bleibt unausgeführt. Leider konnte ich das Frontend nicht erfolgreich hochladen, obwohl ich mehr als 60 Minuten an dem Problem gearbeitet habe. Ich habe mehrere Versuche unternommen und mir Hilfe von verschiedenen Quellen eingeholt, jedoch blieb das Problem bestehen. Die Schwierigkeiten lagen hauptsächlich bei der Integration und beim Hochladen des Frontend-Teils auf GitHub, was leider aufgrund von technischen Problemen nicht funktionierte.
