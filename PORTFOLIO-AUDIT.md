# Portfolio-Audit

Stand: 11. Oktober 2026 · Audit mit anschließendem Umsetzungsstand; jüngste Runde: Seitenwechsel, Playground und Projektfreigabe

## Seitenwechsel, Playground und Projektfreigabe

Der Seitenwechsel behält seine 700 ms und die bisherige Beschleunigung. Ein gerichteter Schatten an der gemeinsamen Kante ersetzt den Rundum-Schatten beider Seiten. Auf Johannes' Wunsch läuft die Kante jetzt deutlich breiter und weicher aus: Der Blur der nahen Schattenebene steigt von 0,75 auf 3 rem, der äußeren Ebene von 3,25 auf 6,5 rem. Deckkraft und Versatz bleiben auf der zuletzt abgeschwächten Abstimmung (10/20 % im hellen Farbschema), damit der größere Verlauf nicht dunkler wird. Im Dark Mode bleibt der Schatten dunkel. Die vorhandenen Regeln für reduzierte Bewegung bleiben erhalten. Umsetzung in [transitions.scss](C:/Users/biess/Github/portfolio-johannes-biess/assets/styles/transitions.scss) und den [Design-Token](C:/Users/biess/Github/portfolio-johannes-biess/app.vue); die konkreten Werte sind ein eigener Gestaltungsvorschlag nach Johannes' Rückmeldung.

[LanguageSwitch](C:/Users/biess/Github/portfolio-johannes-biess/components/LanguageSwitch.vue) setzt den verfügbaren Sprachlink bei Hover und Tastaturfokus fett, ohne Unterstrich. Die aktuelle Sprache bleibt grau. Die gesamten [Playground-Kacheln](C:/Users/biess/Github/portfolio-johannes-biess/components/ProjectTiles.vue) sind jetzt Projektlinks ohne Pfeile. Ihre Bilder öffnen keine Großansicht; Hinweg nach unten und Rückweg nach oben bleiben bestehen. PlantMonits bisherige Einleitung ist mit dem offenen Lösungsabschnitt zusammengeführt, in [Deutsch](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/plantMonit.vue) und [Englisch](C:/Users/biess/Github/portfolio-johannes-biess/pages/en/project/plantMonit.vue). Grundlage sind die bestehenden Seitentexte; es wurden keine neuen Projektangaben ergänzt.

Der Produktionsstandard in [nuxt.config.ts](C:/Users/biess/Github/portfolio-johannes-biess/nuxt.config.ts) ist jetzt `showProjects: true`. Die bisherige Entwicklungsprüfung war der Grund für den Construction-Einstieg online. Ein Subagent änderte gezielt diesen Standard und die zugehörigen Hinweise; Integration und Prüfung erfolgten selbst. `SHOW_PROJECTS=false` bleibt ein ausdrücklicher Baustellen-Modus. Archivierte Projekte bleiben ausgeblendet. Der Build muss für die Veröffentlichung erneut bereitgestellt werden; die öffentliche Website wurde nicht verändert.

**Prüfung:** Produktionsbuild ohne `SHOW_PROJECTS`-Sonderfreigabe erfolgreich; lokale HTTP-Prüfung bestätigt 200 für aktive Projekte, Beacon als Ziel beider Startseiten und 302 von archivierten Projekten nach Playground. Chromium bei 1280 und 375 px: Bildklick öffnet TrickyTowers ohne Dialog, Tastatur öffnet DrawingLight, alle drei Kacheln besitzen den richtigen Projektlink. Kein horizontaler Überlauf in den geprüften schmalen Ansichten. Beide Sprach-Hover verwenden Schriftgewicht 700 ohne Unterstrich oder Breitenänderung. PlantMonit zeigt genau einen Einstieg und 16 px Fließtext auf Mobile. Richtungen links/rechts/unten/oben geprüft; die verstärkte Schattenfassung zusätzlich seitlich und nach unten visuell geprüft. Keine Warnungen oder Fehler in der geprüften Produktionsvorschau.

Die feinere Schattenabstimmung wurde beim Übergang Start → Über mich im Chromium-Browser geprüft. Der anschließend verbreiterte Blur wurde erneut erfolgreich gebaut und beim Wechsel Beacon → Playground visuell kontrolliert: 700 ms und Beschleunigung unverändert, nach Ende des Übergangs kein verbleibender Schatten.

**Nicht geprüft:** Safari/iOS, Firefox und erneute Veröffentlichung auf dem Live-Host.

## Videos und PlantMonit-Bilder

`VideoEmbed` enthält jetzt die gemeinsame Split-Flap-Überschrift „PROJEKT VIDEO“ / „PROJECT VIDEO“. Die bisherigen Überschriften auf den einzelnen Seiten wurden entfernt, KAI erhält dieselbe Überschrift automatisch. Überschrift–Player verwendet den Medienabstand, vor beziehungsweise nach dem Videoblock bleibt der größere Abschnittsabstand. Alle fünf Videos in beiden Sprachen verwenden diesen Aufbau. Die gesamte Posterfläche reagiert auf Hover und Tastaturfokus: Eine dunkle Überlagerung blendet ein und der Play-Kreis wächst auf 115 %. Bei reduzierter Bewegung bleibt die Rückmeldung ohne Animation und Skalierung. Der Play-Kreis ist auch mobil mindestens 44 px groß.

PlantMonits SVG-Dateien haben unterschiedliche Seitenverhältnisse. Die festen 4:3-Vorschauen füllen sich nun mit `cover`; das hochkantige, transparente Gehäuserendering bleibt vollständig eingepasst auf einer neutral gefüllten Kachel, damit die Kamera nicht abgeschnitten wird. Die Großansicht zeigt weiterhin das vollständige Original. Bilder und begrenzender Ausschnitt der Großansicht besitzen wieder den gemeinsamen Eckenradius. Der auf KAI/Beacon bereits geprüfte 1,5-fache Zeilenabstand gilt jetzt für alle Projektakkordeons.

Quellgeometrie und Transparenz unter [PlantMonit-Bilder](C:/Users/biess/Github/portfolio-johannes-biess/public/img/pm) wurden durch einen lesenden Subagenten untersucht, die Bildausschnitte selbst im Browser geprüft. Eigene Chromium-Stichproben bei 1280 und 375 px: KAI besitzt genau eine Videoüberschrift, mit rund 38/24 px Abstand zum Player und rund 77/48 px zum folgenden Akkordeon. Hover wechselt von transparenter Überlagerung und 100 % Icongröße zu sichtbarer Überlagerung und 115 %, über 220 ms. Tastaturfokus zeigt dieselbe Rückmeldung; Enter erzeugt den YouTube-Player mit Autoplay und übergibt den Fokus. Englische Überschrift, erhaltene Playerbreite von 300 px auf Mobile, kein horizontaler Überlauf und der Großansichts-Radius wurden geprüft.

Die hier noch doppelte PlantMonit-Einleitung wurde in der nachfolgenden Runde mit dem Lösungsabschnitt zusammengeführt; siehe den aktuellen Stand oben.

Produktionsbuild mit sichtbaren Projekten erfolgreich.

**Nicht geprüft:** Vollständige externe Videowiedergabe, Safari/iOS und Firefox.

## Bildansicht, Kacheln und Sprachwechsel

Alle inhaltlichen Bilder auf Projekt-, About- und CV-Seiten öffnen jetzt eine gemeinsame Großansicht. `ZoomableImage` ersetzt die einzelnen Bild-Tags; `ImageViewer` enthält den Dialog. Öffnen und Schließen zoomen zwischen Ausgangsbild und Großansicht; reduzierte Bewegung wird berücksichtigt. Scrollrad, Plus/Minus, Doppelklick und Tastatur steuern den Zoom, Ziehen verschiebt den Ausschnitt. Zwei Pointer ermöglichen Pinch-Zoom. Außenklick, Schließen-Link und Escape schließen die Ansicht; der Fokus kehrt zum Ausgangsbild zurück, die Seite bleibt an ihrer Scrollposition.

Playground-Bilder füllen ihre Kacheln mit `cover`; das unveränderte Original wird vollständig in der Großansicht eingepasst. Bildklick öffnet die Großansicht, der separate Titel mit Abwärtspfeil führt weiterhin ins Projekt. Video-Poster behalten ihre Abspielfunktion. Im Sprachwechsel ist die aktive Sprache grau und deaktiviert, die andere verwendet die normale Textfarbe mit Unterstreichung bei Hover/Fokus.

Eigene Chromium-Prüfung: Hero-, Akkordeon- und Kachelbilder, Scroll-Zoom, Plus/Minus, Verschieben, Einpassen, Öffnen per Tastatur, Escape, Außenklick, Fokus und wieder freigegebenes Seitenscrollen. Sprachfarben in DE/EN nach tatsächlichem Wechsel geprüft; mobile Kacheln und Bildansicht bei 375 px ohne horizontalen Überlauf. Die Dreifach-Kacheln wurden am Desktop auf übereinstimmende Bild- und Kachelmaße geprüft. Zwei Subagenten unterstützten die Einbindung in vorhandene Seiten sowie Kacheln/Sprachwechsel; Bildansicht und Integration durch den Hauptagenten.

Produktionsbuild mit sichtbaren Projekten erfolgreich. Browsermeldungen der geprüften Interaktionen ohne Warnungen oder Fehler; helle und dunkle Großansicht geprüft.

**Nicht geprüft:** Reale Zweifinger-Geste (das verfügbare Browserwerkzeug unterstützt keine Touch-Ereignisse), Safari/iOS und Firefox. Die Originalbilder wurden nicht verändert.

## Aktueller Stand der Projektdetails

Johannes' jüngste Rückmeldung ersetzt die früheren Vorschläge zu einem zusätzlichen Projekteinstieg und zu den ausgeschnittenen Beacon-Ansichten. KAI und Beacon beschreiben das Produkt jetzt einmal im dauerhaft offenen Lösungsabschnitt. KAI beginnt davor direkt mit dem Video.

- **KAI:** Das Bild mit der UX Design Awards **Nominierung** steht im Hero; die Variante ohne Badge bei Tischübersicht und Navigation. Die Recherche behält Methoden, fünf Problemfelder und Priorisierung. Reiter stellen jeweils Beobachtung und zugehörigen Entwurf gegenüber. Der Sprachprototyp zeigt Verarbeitungsschritte und ein Bestellbeispiel. Die Gerichte und das Extra stammen aus der Dokumentation; der gesprochene Beispielsatz ist eine eigene Veranschaulichung und kein Transkript eines Tests.
- **Beacon:** Die Reihenfolge ist Lösung → Recherche → Wahl des Hilfenetzwerks → Bedienung → Vertrauen und Vorbereitung → Projektumfang. Die Recherche verbindet vier Faktoren, Eskalationsstufen und sieben Anforderungen. Die fünf Bedienungsreiter werden nicht als die ursprünglichen How-Might-We-Fragen ausgegeben. Jeder erklärt eine konkrete Interaktion mit dem zugehörigen Originalmockup.
- **Darstellung:** Akkordeoninhalt beginnt unter dem Titel, nicht unter der Nummer. Kompakte Reiter verwenden animierte Hover- und Auswahlzustände in Beacon-Orange beziehungsweise KAI-Blau. Pfeiltasten, Home und End wechseln die Auswahl. Die Texte beider Fallstudien behalten auch mobil 1,5-fachen Zeilenabstand und mindestens 16 px Schriftgröße.
- **Offene Bildlieferung:** Die beiden aus dem PDF extrahierten Beacon-Ansichten sind nicht mehr eingebunden. Dateien und Komponente bleiben als verworfener Entwurf erhalten. Für „Vertrauen und Vorbereitung“ fehlt ein originales Smartphone-Mockup im gleichen Stil wie die übrigen Bilder: bevorzugt Identitätsprüfung und Einführung in die Helferrolle, alternativ der Demo-Ablauf. Bis dahin enthält der Abschnitt nur Text.

**Grundlagen:** Die [KAI-Dokumentation](C:/Users/biess/Github/portfolio-johannes-biess/public/docs/kai/kai-dokumentation-de.pdf), insbesondere Seiten 8, 11–13, 25–26, 50–56 und 110–111, wurde hierfür durch einen beauftragten Subagenten gelesen und visuell geprüft. Bei [Beacon](C:/Users/biess/Github/portfolio-johannes-biess/public/docs/beacon/beacon-dokumentation-de.pdf) wurden die gedruckten Seiten 24–27, 32–35, 74–75 und 198–199 selbst gezielt gelesen; ein zweiter Subagent ergänzte die Konzeptalternativen und den Einstieg über bestehende sichere Orte. Formulierungen und programmierte Darstellungen sind eigene redaktionelle und gestalterische Vorschläge auf dieser Grundlage. Zusätzlich wurde der [Humanizer-Skill](C:/Users/biess/.codex/plugins/cache/claude-cowork/anthropic-skills/1.0.0/skills/humanizer/SKILL.md) für konkrete statt formelhafte Formulierungen verwendet.

**Prüfung dieser Runde:** Eigene Chromium-Stichproben in DE und EN bei 1440, 768 und 375 px. KAI-Bildzuordnung, Bestellbeispiel, Rechercheauswahl und Tastaturwechsel sowie Beacons Recherche, wechselnde Bedienungsmockups, entfernte Vorbereitungsbilder und Dark Mode geprüft. Kein horizontaler Überlauf in den geprüften schmalen Ansichten, 16 px Fließtext mit 24 px Zeilenabstand; keine Warnungen oder Fehler in den geprüften Browsermeldungen. Produktionsbuild mit sichtbaren Projekten erfolgreich. Die Dateisandbox blockierte zunächst Nuxt mit EPERM; außerhalb dieser Beschränkung lief derselbe Build erfolgreich durch.

**Nicht geprüft in dieser Runde:** Safari/iOS, Firefox, vollständige Screenreader-Bedienung und externe Videos. Die öffentliche Website wurde nicht verändert.

## Umsetzung nach dem Audit

Die nachfolgenden Audit-Befunde beschreiben den Ausgangsstand vor der hier dokumentierten Überarbeitung (Git-Basis `58bd931`). Alte Zeilenverweise und Aussagen über fehlende Inhalte sind daher keine erneute Bewertung der aktuellen Vorschau.

**Johannes' anschließende Entscheidungen haben Vorrang:** Hochwertige Mockups bleiben die visuelle Hauptform. Produktnutzen wird selbstbewusst formuliert; Projektstatus und tatsächlicher Umfang werden einmal klar eingeordnet. Teamarbeit wird nicht in exklusive Rollen zerlegt. Der ergänzte Hinweis auf UI/UX sowie Herleitung und Struktur der Dokumentation beruht auf Johannes' Antwort im Chat; Teamleitung und Stundenangabe erscheinen nicht auf der Website.

Umgesetzt in DE und EN:

- Beacon: Faktoren, Eskalationsstufen und Anforderungen gemeinsam unter Recherche; programmierte Darstellungen mit drei Ansichten. Fünf Gestaltungsentscheidungen verbinden jeweils eine Frage mit dem passenden Mockup.
- KAI und die weiteren aktiven Projekte: kürzere, projektspezifische Erzählungen, konkrete Bildbeschreibungen und Bildunterschriften; Lösung weiterhin offen. PlantMonit-Bilder stehen bei den jeweils passenden Inhalten.
- Playground: größere Bento-Flächen mit kurzen Projektbeschreibungen. Alle Kacheln führen räumlich nach unten, der Rückweg nach oben; das Hauptkarussell bleibt zyklisch und seitlich.
- Start, About und Lebenslauf: Nach Johannes' Rückmeldung ist der ursprüngliche Aufbau wiederhergestellt. Start zeigt ausschließlich das Split-Flap; nach dem Laden wechselt nur die Rollen-Zeile. About zeigt wieder Split-Flap, Porträt und den Weg zum Lebenslauf. Die Timeline steht vor dem PDF-Link. CV-Seiten verwenden wieder Split-Flap, Bild und die bisherigen Textspalten. Master hat vorläufig das vorhandene HfG-Bild und einen kurzen Studienbezug; der vorgeschlagene Denkrahmen wird nicht mehr angezeigt. Bachelor und vorheriges Studium in Aalen bleiben sachlich richtig unterschieden.
- Kontakt: kleine Auswahl zwischen Mail-App und Zwischenablage, ohne ausgeschriebene Adresse. Stabile zugängliche Split-Flap-Texte, echte Überschriften, Tastaturbedienung, Bewegungspräferenzen und mindestens 16 px für lesbaren Text berücksichtigt.

**Korrekturrunde nach Johannes' visueller Rückmeldung:** Die zusätzliche Positionierungsprosa auf Start, About und Resume wurde zurückgenommen. KAI hat einfache Abschnittstitel und eine ausführlichere, an der Dokumentation geprüfte Recherchebeschreibung; auch PlantMonit verwendet sachliche Überschriften. Beacons vier Faktoren stehen in einer schlichten Übersicht statt vier Symbolkacheln. Eskalation und Anforderungen bleiben erhalten. Unter Vertrauen und Vorbereitung sind zwei Originalansichten zu Identitätsprüfung und Verhaltensregeln ergänzt. Video-Thumbnails füllen ihre Fläche; normale Akkordeonbilder bleiben vollständig eingepasst. Ein globaler Hover-Selektor hatte auch Links mit abgeschaltetem Zoom vergrößert: Das ist korrigiert, der übrige Link-Zoom ist reduziert. Die E-Mail-Auswahl verwendet unterstrichene Textaktionen ohne Buttonrahmen.

Zusätzliche inhaltliche Quellen dieser Umsetzung:

- [Beacon-Dokumentation](C:/Users/biess/Github/portfolio-johannes-biess/public/docs/beacon/beacon-dokumentation-de.pdf) — gezielt selbst gelesene und teilweise gerenderte Abschnitte, gedruckte Seiten 22–35 und 74–75; Grundlage der Recherchegrafiken und des Ansatzvergleichs. Keine vollständige Prüfung der Arbeit.
- [Strategische Gestaltung](C:/Users/biess/Github/Master/master-s1/Kontext/strategische-gestaltung.md) und [Wie Gestalter denken](C:/Users/biess/Github/Master/master-s1/Kontext/wie-gestalter-denken.md) — vom beauftragten Subagenten gelesene Grundlagen für den Master-Text, erschlossen über den vorhandenen README-Einstieg.
- [Lebenslauf-PDF](C:/Users/biess/Github/portfolio-johannes-biess/public/docs/resume/johannes-biess-lebenslauf-de.pdf) — eigene gezielte Prüfung der Abschlussbezeichnungen und Zuordnung der Studiengänge. Die Datumsangabe „heute“ im älteren PDF wurde nicht als aktueller Studienstatus übernommen.
- [KAI-Dokumentation](C:/Users/biess/Github/portfolio-johannes-biess/public/docs/kai/kai-dokumentation-de.pdf) — Rechercheabschnitte, Seiten 8 und 11–13 sowie Priorisierung auf Seite 50, durch einen Subagenten gelesen und visuell geprüft; Grundlage des ausführlicheren zweiten Abschnitts.
- [Beacon-Dokumentation, Vorbereitung](C:/Users/biess/Github/portfolio-johannes-biess/public/docs/beacon/beacon-dokumentation-de.pdf#page=100) — gedruckte Seiten 198–199 selbst gelesen und gerendert; zwei originale Ansichten aus dem PDF mit Transparenz übernommen.

Die Darstellungen und die redaktionelle Gewichtung sind Gestaltungsvorschläge. Es wurden keine neuen Testresultate, Nutzerzahlen oder technischen Fähigkeiten hinzuerfunden. Die Live-Website wurde nicht verändert.

**Prüfung der Umsetzung:** Produktionsbuild mit sichtbaren Projekten erfolgreich; Prüfung aller direkt referenzierten Bild- und Dokumentpfade ohne fehlende Dateien. Der zuvor defekte englische Zeugnislink führt jetzt zur vorhandenen deutschen Fassung und ist entsprechend beschriftet. Karussellrichtungen für alle fünf Hauptprojekte sowie Ein- und Rückwege aller drei Playground-Arbeiten geprüft; TrickyTowers zusätzlich im Browser mit tatsächlichem Übergang nach unten/oben. Eigene Chromium-Stichproben bei 1440, 768 und 375 px: Beacon-Recherche und Entscheidungen, KAI-Medien, Playground, Start, About, Master, Resume und Kontakt; Englisch und Dark Mode an Beacon. Geprüfte schmale Ansichten ohne horizontalen Überlauf. KAI-Akkordeonbilder 480 × 360 px mit vollständigem Einpassen, Video und Akkordeon 1120 px breit am Desktop. E-Mail-Kopie, Tastaturöffnung, Escape und Fokus-Rückgabe geprüft; geschlossene Akkordeon-Inhalte sind nicht fokussierbar. Keine Warnungen oder Fehler in den geprüften Browsermeldungen. Drei Subagenten unterstützten Projektredaktion, CV-Texte und Kontakt/Zugänglichkeit; Integration und visuelle Stichproben erfolgten durch den Hauptagenten.

**Offen:** Beide Lebenslauf-PDFs beschreiben noch den Stand vor dem Masterstudium. Safari/iOS und Firefox, reale Mail-Apps, vollständige Screenreader-Bedienung und sämtliche externen Demos/Filme sind in dieser Umsetzungsrunde nicht geprüft. Die Angaben zu Projektverlauf und Nutzen wurden redaktionell bearbeitet, nicht unabhängig wissenschaftlich validiert.

**Prüfung der Korrekturrunde:** Der wiederhergestellte Aufbau von Start, About, Resume und Master wurde im Chromium-Browser geprüft. Zwei zeitlich getrennte Messungen bestätigen: Die drei oberen Startzeilen bleiben identisch, die letzte wechselt. Resume → Bachelor kommt von rechts; Master → Resume kommt von rechts, mit Rücklinks auf der jeweils gegenüberliegenden Kante. About und Resume bei 375 px ohne horizontalen Überlauf; das Zitat bleibt 16 px groß. Beacons Vorbereitung zeigt beide Originalansichten vollständig, auch mobil. Der Dokumentationslink hat bei tatsächlichem Hover keine Skalierung. KAI- und PlantMonit-Poster füllen bei 1440 px die 1120 × 630 px große Playerfläche. E-Mail-Aktionen sind ohne Rahmen und Füllfläche dargestellt; Kopierbestätigung und Escape mit Fokus-Rückgabe funktionieren. Keine Warnungen oder Fehler in den geprüften Browsermeldungen. Produktionsbuild erfolgreich; 76 vollständige statische Bild- und Dokumentpfade ohne fehlende Datei geprüft. Drei Subagenten unterstützten gezielt Wiederherstellung und Projektredaktion; Browserprüfung und Integration erfolgten durch den Hauptagenten.

## Einschätzung

Ich würde diesen Stand noch nicht als finale Bewerbungsfassung veröffentlichen. Die Gestaltung hat eine erkennbare eigene Sprache. Die Projekte lassen gestalterische und technische Substanz erkennen. Die Website macht es jedoch unnötig schwer, Johannes' persönliche Leistung, Arbeitsweise und aktuellen beruflichen Stand zuverlässig einzuordnen. Sichtbare Textfehler und zu weit gehende Wirkungsbehauptungen verstärken diese Unsicherheit.

Die wichtigste Überarbeitung ist deshalb eine klarere Darstellung der eigenen Arbeit: Was war die Aufgabe? Was habe ich selbst verantwortet? Welche Entscheidung habe ich getroffen? Was wurde gebaut und überprüft? Was blieb offen? Erst danach lohnt sich weiterer Feinschliff an einzelnen Abständen und Animationen.

Das ist eine fachliche Einschätzung aus der Perspektive möglicher Recruiter, Design Leads und Auftraggeber. Sie ersetzt keine Untersuchung mit tatsächlichen Besuchenden. „Auf der Website nicht belegt“ bedeutet ausdrücklich nicht „im Projekt nicht geleistet“.

## Was bereits trägt

- Die monochrome Gestaltung und das Split-Flap-Motiv schaffen Wiedererkennung. Diese Eigenständigkeit sollte erhalten bleiben.
- Beacon verbindet mehrere Herausforderungen nachvollziehbar mit konkreten Interaktionen. Besonders hilfreich ist die bereits dauerhaft sichtbare Lösung.
- KAI zeigt ein interessantes Zusammenspiel von Sprache, räumlicher Orientierung und Bestellabläufen. GoEase benennt eine tatsächliche Eingrenzung des Projektumfangs.
- DrawingLight und JumpStar enthalten konkrete technische Umsetzungen. Das ist wertvolles Material, um die Verbindung von Gestaltung und Entwicklung zu belegen.
- Der Lebenslauf verbindet kaufmännische Erfahrung, betriebliche Prozesse und Design. Darin liegt ein unterscheidbares Profil, das die Start- und About-Seite bislang kaum erklären.
- Dokumentationen, Videos und Demos bieten Wege zur Vertiefung. Die deutsch- und englischsprachigen Hauptprojekte sind inhaltlich überwiegend synchron; KAI 1,3 und Beacon 1,7 sind korrekt eingetragen.

## Drei Betrachtungsperspektiven

| Perspektive | Was bereits erkennbar ist | Was zur Entscheidung fehlt |
| --- | --- | --- |
| Recruiting | Designstudium, mehrere Arbeitsstationen, breite Projektpalette | Konkrete Zielrolle, aktueller Status, vollständige Zeiträume, schnell erreichbarer Lebenslauf |
| Design Lead | UI-Arbeit, Prototyping und technisch anspruchsvolle Themen | Persönliche Verantwortung, verworfene Alternativen, Testbefunde und daraus entstandene Änderungen |
| Auftraggeber | Interesse an komplexen Problemen und Umsetzung | Welche Leistung Johannes selbstständig anbietet, was tatsächlich funktionsfähig war und wie Zusammenarbeit aussehen kann |

## Prioritäten

**P1:** Vor einer Veröffentlichung als Bewerbungsportfolio bearbeiten. **P2:** Nächster redaktioneller und gestalterischer Durchgang. **P3:** Anschließender Feinschliff. Die Prioritäten sind meine Bewertung, keine gemessenen Nutzungsdaten.

### 1. Persönlichen Beitrag sichtbar machen — P1

Alle aktiven Fallstudien führen „TEAMWORK“ auf. Die Seiten erklären nicht eindeutig, welche Teile Johannes selbst verantwortet hat. Bei Beacon steht die Teamzusammensetzung lediglich in einem Codekommentar. Ein gutes Bild oder ein umfangreicher Technologieeinsatz lässt sich deshalb keiner persönlichen Leistung zuordnen.

**Änderung:** Direkt am Einstieg ein kurzer Projektrahmen: Zeitraum, Kontext, Team, eigene Verantwortung, Ergebnis und Projektstatus. Bei zwei bis drei zentralen Entscheidungen jeweils konkret beschreiben, was Johannes beigetragen hat. Diese Angaben müssen aus tatsächlicher Arbeit oder Dokumentation stammen; aus einem genannten Werkzeug darf keine Eigenleistung abgeleitet werden.

Belege: [KAI](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/kai.vue:56), [Beacon](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/beacon.vue:51), [DrawingLight](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/drawingLight.vue:50).

### 2. Wirkungen und Entwicklungsstand präziser formulieren — P1

Mehrere Texte beschreiben erwartete Vorteile wie bereits nachgewiesene Ergebnisse. KAI „minimiert betriebliche Fehler“, verhindert unbeabsichtigte Ausgaben und reduziert Burnout. Beacon erklärt einen Fehlalarm für folgenlos, den Bystander-Effekt für aufgehoben und ein identitätsgeprüftes Netzwerk für ausschließlich bestimmungsgemäß nutzbar. Solche absoluten Aussagen erzeugen bei erfahrenen Reviewern eher Rückfragen als Vertrauen.

**Änderung:** Tatsächlich gebaute Funktion, Beobachtung im Test und angestrebten Nutzen jeweils benennen. Dafür sind keine erfundenen Kennzahlen nötig. Eine echte Beobachtung und eine nachvollziehbare Änderung sind stärker als ein unbestimmtes Erfolgsversprechen. Beacons vorhandenen Hinweis auf die noch ungeprüfte Nutzung in echter Angst beibehalten und mit den übrigen Aussagen in Einklang bringen.

Belege: [KAI, Nutzen und Ergebnis](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/kai.vue:74), [KAI, Tests](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/kai.vue:121), [Beacon, Hilferuf](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/beacon.vue:196), [Beacon, Aktivierung](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/beacon.vue:218), [Beacon, Vertrauen und Ausblick](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/beacon.vue:238).

### 3. Sichtbare redaktionelle Fehler beseitigen — P1

Auf About stehen „PÜNKTLICHK“ und „ENTSCHDIUNGSSTARK“. Bosch enthält doppelte und grammatisch beschädigte Textfragmente; auf Englisch wird „Vehicle Motion“ dreimal wiederholt. Weitere Beispiele sind „KUNDENKOTAKT“, „CONCEPT DEVELPMENT“, „MARCET RESEARCH“ und „workflow.What“. Diese Fehler liegen an Stellen, an denen die Seite Genauigkeit und professionelle Arbeitsweise vermitteln soll.

**Änderung:** Ein vollständiger DE-/EN-Lektoratsdurchgang vor weiteren kleinen Layoutkorrekturen. Begriffe und Status ebenfalls prüfen: Eine Werkstudententätigkeit wird bei Bosch teilweise als „Ausbildung“ beziehungsweise „apprenticeship“ bezeichnet. Die Formulierung des Käse-Zitats ist im Deutschen unnatürlich; die persönliche Aussage selbst kann bleiben.

Belege: [About DE](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/about.vue:11), [Bosch DE](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/cv/bosch.vue:29), [Bosch EN](C:/Users/biess/Github/portfolio-johannes-biess/pages/en/cv/bosch.vue:40), [Praktikum DE](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/cv/internship.vue:11), [Praktikum EN](C:/Users/biess/Github/portfolio-johannes-biess/pages/en/cv/internship.vue:12), [D-TACK EN](C:/Users/biess/Github/portfolio-johannes-biess/pages/en/cv/dtack.vue:10).

### 4. Berufliches Profil und Lebenslauf klären — P1

„Designer“, „Developer“, „Problemsolver“ und „Prototyper“ beschreiben eine Haltung, aber noch keine präzise fachliche Position. About ergänzt vorwiegend allgemeine Eigenschaften. Bachelor und Master erscheinen beide unter 2026; Zeiträume, Studiengang und Abschlussstatus sind nicht unmittelbar erkennbar. Die aktuelle Masterstation führt auf „Inhalte folgen in Kürze“.

**Änderung:** Einen beständigen Satz über fachlichen Schwerpunkt und aktuellen Kontext ergänzen. Er muss auch ohne das Abwarten einer Animation verständlich sein. In der Timeline reale Zeiträume und den Status „seit …“ oder „abgeschlossen …“ nennen. Den Master mit einer kurzen sachlichen Beschreibung versehen. Den PDF-Lebenslauf zusätzlich am Anfang anbieten.

Die Schulabschlussbezeichnungen sind intern widersprüchlich: „fachgebundene Fachhochschulreife“, „Abitur“ und ein englischer Vergleich mit einem Associate's Degree. Der amtliche Abschluss wurde nicht geprüft. Zuerst den Originalnamen klären, anschließend konsistent und vorsichtig übersetzen.

Belege: [Start DE](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/index.vue:25), [About](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/about.vue:8), [Resume](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/resume.vue:8), [Master](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/cv/hfgMaster.vue:19), [KBSZ DE](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/cv/kbsz.vue:27), [KBSZ EN](C:/Users/biess/Github/portfolio-johannes-biess/pages/en/cv/kbsz.vue:36).

### 5. Den Kontakt erwartbar und direkt machen — P1

„EMAIL“ sieht wie ein Link aus, kopiert aber zunächst die Adresse. Die Adresse selbst ist auf der Kontaktseite nicht lesbar. Die Rückmeldung bleibt auch auf Deutsch englisch. Auf dem Handy erscheinen die Kontaktwörter klein und dünn in einer weitgehend leeren Fläche. Das wichtigste Ziel dieser Seite erhält dadurch zu wenig Gewicht.

**Änderung:** Eine sichtbare E-Mail-Adresse mit echtem Mail-Link; eine Kopierfunktion kann als klar benannter zusätzlicher Button bestehen. Rückmeldung lokalisieren und zugänglich ausgeben. Die Kontaktfunktion darf gern die eigene Gestaltungssprache behalten, sollte aber sofort verständlich sein.

Belege: [Kontakt](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/contact.vue:11), [Split-Flap-Linkverhalten](C:/Users/biess/Github/portfolio-johannes-biess/components/splitFlapText.vue:262). Mobile Darstellung bei 375 × 812 px visuell geprüft.

### 6. Die Fallstudien als nachvollziehbare Geschichten ordnen — P2

KAI hat 13, Beacon 16 und GoEase sowie PlantMonit jeweils 12 Akkordeonpunkte. Bei KAI, GoEase und PlantMonit wiederholt sich ein Schema mit Kernidee, Nutzen, Innovation, USP, Business Value und gesellschaftlichen Werten. Besuchende müssen viele ähnlich benannte Bereiche öffnen, um die entscheidenden Informationen zu finden. Das vermittelt stellenweise den Eindruck eines ausgefüllten Bewertungsbogens.

**Vorschlag:** Die offene Lösung erhalten. Darunter wenige projektspezifische Kapitel mit aussagekräftigen Titeln: eine wesentliche Herausforderung, zwei wichtige Entscheidungen, Umsetzung, Überprüfung und offene Fragen. Zusätzliche Tiefe kann weiterhin in Akkordeons liegen. Der Kern der Geschichte muss beim Durchscrollen verständlich werden. Nicht jede kleine Arbeit benötigt Wettbewerb, Geschäftsmodell und gesellschaftliche Wirkung.

Belege: [KAI-Struktur](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/kai.vue:67), [GoEase-Struktur](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/goEase.vue:64), [PlantMonit-Struktur](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/plantMonit.vue:69), [Akkordeon](C:/Users/biess/Github/portfolio-johannes-biess/components/ProjectAccordion.vue).

### 7. Bilder nach ihrer Aussage einsetzen — P2

Die Größen sind inzwischen konsistenter. Trotzdem sind viele Bilder Produktinszenierungen, aus denen ein Reviewer kaum einzelne UI-Entscheidungen lesen kann. Beacons Lösungsübersicht enthält schräg liegende, teils angeschnittene Smartphones. Die Datei wird vollständig eingepasst; der Beschnitt ist schon in der Originalkomposition vorhanden. CSS kann diese fehlenden Bildteile nicht wiederherstellen.

Bei 375 px Breite bleiben 300 × 225 px für das Akkordeonbild. Eine Montage mehrerer vollständiger Interfaces ist darin als Überblick erkennbar, aber kaum als Beleg für Detailgestaltung lesbar. Eine reine Vergrößerung aller Bilder würde die Seitenlänge stark erhöhen, ohne die Zuordnung zu verbessern.

**Vorschlag:** Hero-Bilder für Atmosphäre; in den Fallstudien ein konkreter Screen oder ein kleiner Ablauf pro Argument. Kurze Bildunterschriften erklären, was zu erkennen ist und welche Entscheidung darin steckt. Bei Bedarf ein vergrößerbares Original anbieten. Die standardisierten Bildflächen können bleiben. Für Bilder mit verschiedenen Seitenverhältnissen weiterhin vollständig einpassen und gegebenenfalls freie Ränder akzeptieren.

Belege: [Beacon-Originalübersicht](C:/Users/biess/Github/portfolio-johannes-biess/public/img/beacon/overview.webp), [KAI-Kernidee](C:/Users/biess/Github/portfolio-johannes-biess/public/img/kai/core-idea.webp), [Bilddarstellung](C:/Users/biess/Github/portfolio-johannes-biess/components/ProjectAccordion.vue). Original und Browserdarstellung wurden verglichen.

### 8. Lesefluss und visuelle Gewichtung verbessern — P2

- **Projekteinstieg:** Bei 1280 × 720 px bestehen die ersten Bildschirmhöhen überwiegend aus Titel, Stichwörtern und einem Bild. Ein sofort verständlicher Satz über Aufgabe und Resultat fehlt dort. Die beruflich relevanten Angaben stehen wesentlich später.
- **KAI:** Der Detailbereich beginnt mit dem Video vor der kurzen Beschreibung. Mit der gewünschten Akkordeonbreite nimmt ein 16:9-Video auf Desktop viel Höhe ein. Das ist kein Breitenfehler mehr, aber eine bewusste Hierarchieentscheidung. Als nächster Entwurf wäre eine knappe Projektzusammenfassung vor dem Film sinnvoll.
- **Akkordeon:** Viele Überschriften und Texte haben eine ähnliche leichte Gewichtung. Zentrale Erkenntnisse sind nicht deutlich hervorgehoben. Lesende müssen ganze Absätze erfassen, statt eine Entscheidung überfliegen zu können.
- **Lebenslauf:** Die erste Station startet bei 1280 × 720 px relativ weit unten. Viel vertikaler Raum und große Stationsblöcke lassen eine kurze Laufbahn lang erscheinen. Jahre und Nebeninformationen sind sehr fein gesetzt.
- **Mobile:** Die geprüften Ansichten liefen nicht horizontal über. Der Beacon-Fließtext hat 16 px. Das bedeutet noch nicht, dass alle Inhalte gleich gut lesbar sind: kleine Split-Flap-Zeichen, Miniatur-Interfaces und seitlich gedrehte Navigation verlangen zusätzliche Aufmerksamkeit.

**Änderung:** Wenige klare Informationsebenen definieren: Projektname, verständlicher Kurzsatz, eigene Rolle/Status, Kernergebnis und Vertiefung. Leichte Schriften und dekorative Zeichen gezielt einsetzen. Der vorhandene Weißraum kann die wichtigsten Aussagen besser hervorheben.

Belege: [Projektlayout](C:/Users/biess/Github/portfolio-johannes-biess/assets/styles/project.scss), [gemeinsames Detail-Layout](C:/Users/biess/Github/portfolio-johannes-biess/assets/styles/_project-layout.scss), [Resume-Stile](C:/Users/biess/Github/portfolio-johannes-biess/assets/styles/resume.scss), [KAI-Einstieg](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/kai.vue:33). Desktop-, Tablet- und mobile Stichproben siehe Prüfumfang.

### 9. Räumliche Navigation um schnelle Wege ergänzen — P2

Die seitlichen Projektwechsel folgen einem verständlichen räumlichen Motiv, sobald man dieses gelernt hat. Auf einer Projektseite sieht man aber nur die Nachbarn. Umfang und Auswahl der Hauptarbeiten bleiben verborgen. Für Person, Qualifikation und Kontakt sind mehrere Seitenwechsel nötig. Nach unten gescrollt wird „STARTSEITE“ zu „HOCH“; der direkte Rückweg ist dann überwiegend über das kleine „JB“ möglich.

**Vorschlag:** Das Karussell erhalten und eine kompakte Projektauswahl beziehungsweise einfache Übersicht ergänzen. In About direkte Wege zu Arbeiten, Lebenslauf und Kontakt anbieten. Dafür ist keine Mini-Map nötig. „JB“ sollte zusätzlich einen verständlichen zugänglichen Namen für die Startseite erhalten.

Belege: [Projekt-Nachbarn](C:/Users/biess/Github/portfolio-johannes-biess/components/ProjectNav.vue), [Projektregister](C:/Users/biess/Github/portfolio-johannes-biess/composables/projects.ts), [Scroll-Link](C:/Users/biess/Github/portfolio-johannes-biess/components/ScrollLink.vue), [Header](C:/Users/biess/Github/portfolio-johannes-biess/components/AppHeader.vue), [About](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/about.vue).

### 10. Das Bento-Raster inhaltlich gewichten — P2

Das zuletzt gebaute Raster ist noch keine überzeugende Endfassung. TrickyTowers erhält die größte Fläche. JumpStar sitzt als kleines Motiv in einer breiten, flachen Kachel; viel Raum bleibt ungenutzt. DrawingLight hat eine andere Bilddichte. Die Größen vermitteln dadurch eine Rangfolge, für die die Seite keine inhaltliche Begründung liefert.

Die Namen erklären zudem nicht, welche Arbeit hinter dem Klick liegt. Der leere Platzhalter entspricht dem aktuellen Wunsch; für eine spätere öffentliche Fassung wirkt er jedoch wie ein fehlender Inhalt.

**Vorschlag:** Raster aus den tatsächlichen Bildformaten und der gewünschten Projektgewichtung entwickeln. Jedem Projekt einen kurzen beschreibenden Satz geben. Beispielhafte Formulierungen: „Sternendaten als interaktive 3D-Reise“ und „Gesten werden zu mechanischer Lichtmalerei“. Den Platzhalter in der Arbeitsfassung behalten und vor Veröffentlichung bewusst entscheiden. Simple Chat und Website bleiben archiviert.

Belege: [ProjectTiles](C:/Users/biess/Github/portfolio-johannes-biess/components/ProjectTiles.vue), [Playground](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/playground.vue), [Archivierung](C:/Users/biess/Github/portfolio-johannes-biess/composables/projects.ts). Desktop-Raster im Browser geprüft. Diese Kritik betrifft ausdrücklich auch die jüngste Umsetzung im gemeinsamen Arbeitsprozess.

### 11. Zugängliche Texte von der Animation unabhängig machen — P1/P2

Die Startseite besitzt keine echte Überschriftenstruktur; auch viele Detailtitel werden ausschließlich durch animierte Zeichen dargestellt. SplitFlapText beginnt mit einer leeren Liste und erzeugt die Zeichen erst nach dem Mount. Der Browser-Zugänglichkeitsbaum enthält tatsächlich Zufallszeichen und wechselnde Linknamen. Ein beständiger zugänglicher Text fehlt. Die sichtbare Hauptanimation berücksichtigt bisher keine reduzierte Bewegung, obwohl AppLink diese Präferenz schon teilweise behandelt.

**Änderung:** Echte Überschriften und stabile Texte serverseitig ausgeben. Animierte Dekoration davon trennen. Kontaktlinks brauchen beständige Namen. Bei reduzierter Bewegung direkt den Zieltext zeigen und wiederkehrende Animation abschalten. Das Designmotiv muss dafür nicht verschwinden.

Weitere Punkte: Akkordeonbilder haben nur automatisch erzeugte Alttexte wie „Die Lösung — Abbildung 1“. Das beschreibt ihren Inhalt nicht. Das Dokument hat in der geprüften Ansicht kein `lang`-Attribut. Jeder Tab heißt „Johannes Biess“. Das erschwert sprachliche Einordnung und Navigation. Ein vollständiger Screenreader- oder WCAG-Test wurde nicht durchgeführt.

Belege: [SplitFlapText](C:/Users/biess/Github/portfolio-johannes-biess/components/splitFlapText.vue:189), [Start](C:/Users/biess/Github/portfolio-johannes-biess/pages/index.vue), [Bild-Alttexte](C:/Users/biess/Github/portfolio-johannes-biess/components/ProjectAccordion.vue:54), [Konfiguration](C:/Users/biess/Github/portfolio-johannes-biess/nuxt.config.ts:73), [AppLink](C:/Users/biess/Github/portfolio-johannes-biess/components/AppLink.vue:169). Zufallszeichen, fehlende Startseitenüberschriften und leere Dokumentsprache zusätzlich im Browser bestätigt.

### 12. Bilddateien für die tatsächliche Anzeige ausliefern — P2

Das neue KAI-Bild hat etwa 5,8 MB, GoEase `process.svg` etwa 8,1 MB und PlantMonit `solution.svg` etwa 9,2 MB. Diese Dateigrößen sind auf Mobilgeräten ein unnötiges Übertragungsrisiko. Eine SVG-Endung allein garantiert keine kleine oder scharfe Vektorgrafik. Die bisherige lokale Vorschau liefert keine belastbare Aussage über langsame Mobilverbindungen.

**Änderung:** Originale bewahren, passende Web-Ausgaben und responsive Größen nutzen. Sichtbare Details benötigen eine ausreichend scharfe Variante; kleine Vorschauen keine vollständige Druckauflösung. Für die neu eingesetzten Video-Poster wurden bereits kleinere WebP-Ausgaben erzeugt. Das ist noch keine Optimierung des gesamten Bildbestands.

Belege: [KAI-Original](C:/Users/biess/Github/portfolio-johannes-biess/public/img/kai/core-idea.webp), [GoEase-Prozess](C:/Users/biess/Github/portfolio-johannes-biess/public/img/ge/process.svg), [PlantMonit-Lösung](C:/Users/biess/Github/portfolio-johannes-biess/public/img/pm/solution.svg). Größen direkt aus den lokalen Dateien ermittelt; keine Ladezeitmessung unter Drosselung.

## Konkrete Aufgaben pro Projekt

| Projekt | Stärkster Ansatz | Nächste inhaltliche Überarbeitung |
| --- | --- | --- |
| KAI | Sprachbedienung, Tischkarte und Warnungen greifen konkrete Serviceabläufe auf. | Eigenen Beitrag erklären; einen Bestellablauf einschließlich Korrektur zeigen; tatsächliche Testerkenntnis nennen; angestrebte betriebliche Wirkung kennzeichnen. |
| Beacon | Klare Verbindung von Herausforderung und Interaktion; verantwortungsvoller Ausblick ist vorhanden. | Herkunft der vier Faktoren und sieben Anforderungen zeigen; absolute Sicherheitszusagen korrigieren; Grenzen bei Nichtreaktion, Missbrauch und fehlender Verbindung transparent machen, soweit bearbeitet. |
| GoEase | Software und Hardware sowie eine benannte Reduktion des Umfangs. | Offenlegen, was erkannt, simuliert oder integriert wurde: Strecke, Tarif, Zahlung. Eine konkrete Vorher-/Nachher-Entscheidung vertiefen. |
| PlantMonit | Technisches System mit Sensorik und Visualisierung. | Zielgruppe schärfen; tatsächliche Sensor-/Bildanalysefunktionen abgrenzen; eine konkrete Teständerung zeigen; die fünf Bilder aus „Weitere Informationen“ in passende Abschnitte verteilen. |
| TrickyTowers | Klar umrissenes räumliches Spiel und eine sichtbare Umsetzung. | Eigenen Anteil nennen; die Beobachtung über vorbeigehende Menschen verorten; erklären, was am fertigen Aufbau funktionierte oder schwierig blieb. |
| JumpStar | Verständliche Abwägung zwischen Datenfülle und visuellem Erleben. | Diese Entscheidung früher zeigen; persönlichen Anteil und realisierten Umfang nennen; Übersichtskachel besser nutzen. |
| DrawingLight | Schrittmotoren, eigene Teile und Gestentracking sind konkrete Umsetzungsbelege. | Mit dem gebauten Experiment beginnen; lange allgemeine Kunst-/Technik-Auslegung kürzen; eigene Verantwortung und eine schwierige technische Entscheidung erklären. |
| Playground | Raum für gestalterische und technische Bandbreite. | Beschreibende Kurztexte, begründete Bildgewichtung und eine bewusste Entscheidung zum Platzhalter vor Veröffentlichung. |

Projektbelege: [KAI](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/kai.vue:124), [Beacon](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/beacon.vue:96), [GoEase](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/goEase.vue:105), [PlantMonit](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/plantMonit.vue:105), [TrickyTowers](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/trickyTowers.vue:70), [JumpStar](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/jumpStar.vue:86), [DrawingLight](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project/drawingLight.vue:111).

## Englische Fassung

Die Hauptprojekte stimmen inhaltlich weitgehend mit Deutsch überein. KAI verlinkt sprachlich getrennte Dokumentationen; Beacon kennzeichnet die deutsche Dokumentation auf Englisch korrekt mit „(DE)“.

Ein eigener englischer Redaktionsdurchgang bleibt nötig. Beispiele: „Social penetration“ ist für Beacons Hilfenetzwerk missverständlich; „half blind“ beschreibt die beabsichtigte Bedienung unglücklich; „backlight projector“ entspricht nicht dem deutschen Rückprojektor. Der englischen TrickyTowers-Prozessbeschreibung fehlt zudem ein Teil der deutschen Erläuterung zur Technologieauswahl. Englische Metadaten auf deutschen Seiten und gemischte CTA-Schreibweisen sollten eine bewusste, konsistente Entscheidung werden.

Belege: [Beacon EN](C:/Users/biess/Github/portfolio-johannes-biess/pages/en/project/beacon.vue:137), [TrickyTowers EN](C:/Users/biess/Github/portfolio-johannes-biess/pages/en/project/trickyTowers.vue:78), [KAI EN](C:/Users/biess/Github/portfolio-johannes-biess/pages/en/project/kai.vue:48). Fachliche Übersetzungen wurden hier auf interne Plausibilität geprüft, nicht durch externe Fachquellen abgesichert.

## Sinnvolle Reihenfolge der Überarbeitung

1. **Vertrauen herstellen:** sichtbare Textfehler, Abschlussbezeichnungen, aktueller Status, Kontaktverhalten und unbelegte absolute Aussagen bereinigen.
2. **KAI als Referenzfall fertigstellen:** Rolle und Kontext ergänzen; konkrete Entscheidungen, eine belastbare Überprüfung und passende Bilder in eine kurze Erzählung bringen. Die offene Lösung behalten.
3. **Beacon und übrige Arbeiten übertragen:** Gleiche Informationsqualität, jeweils eine eigene Projektgeschichte. Kleine Experimente dürfen deutlich kürzer sein.
4. **Darstellung abschließen:** Bildauswahl und Bento-Gewichtung, schnelle Navigationswege, stabile zugängliche Texte, responsive Medien, anschließend Browser- und Geräteprüfung.

Es fehlen hierfür vor allem sachliche Angaben über persönliche Zuständigkeiten, Zeiträume, tatsächliche Testbefunde und umgesetzten Funktionsumfang. Diese Informationen sollten gemeinsam ergänzt werden; sie lassen sich aus einer ansprechenden Oberfläche allein nicht zuverlässig erschließen.

## In dieser Runde bereits geändert

- Video und Akkordeon verwenden dieselbe Inhaltsbreite.
- Alle fünf Projektvideos verwenden ein Motiv, das vom jeweiligen Hero-Bild abweicht; DE und EN sind synchron.
- Video-Vorschaubilder werden vollständig eingepasst. Für vier SVG-Motive gibt es kleinere WebP-Ausgaben; die Originale bleiben erhalten.
- Hero-Bilder verwenden ebenfalls vollständiges Einpassen, falls eine Höhenbegrenzung greift.
- Die dauerhaft offene Lösung bleibt unverändert. Der ursprüngliche Beschnitt innerhalb der Beacon-Bilddatei wurde nicht retuschiert.

## Prüfumfang und Grenzen

Eigene Browserprüfung in Chromium: Start DE, About DE, Resume DE, Kontakt DE, Beacon-Hero und offene Lösung sowie Playground auf Desktop beziehungsweise Mobile; KAI zusätzlich bei Tabletbreite. Verwendete Größen: 1280 × 720, 375 × 812 und 768 × 1024 px. Bei den geprüften mobilen Projektansichten kein horizontaler Überlauf; Beacon-Fließtext 16 px. Das ist eine Stichprobe, keine vollständige Abnahme aller Kombinationen.

Nach den Medienänderungen: Produktionsbuild erfolgreich. KAI-Video und Akkordeon sind auf Desktop jeweils 1120 px, auf Mobile jeweils 300 px breit und haben dieselbe linke Kante. GoEase EN ebenfalls bündig geprüft. Alle zehn Video-Einbindungen besitzen ein vorhandenes, lesbares Poster, das vom jeweiligen Hero abweicht. Der KAI-Play-Button erzeugt per Eingabetaste den YouTube-Player und übergibt ihm den Fokus; der vollständige externe Film wurde nicht angesehen. [Screenshot der mobilen KAI-Darstellung](C:/Users/biess/.codex/visualizations/2026/10/11/01a12a79-7dae-7853-9ee5-92229201c458/kai-video-mobile.jpg).

Zwei beauftragte Subagenten haben unabhängig die DE-/EN-Projekttexte sowie Start, About, Resume, Kontakt und CV-Details gelesen. Ihre Quellenbefunde wurden hier mit der eigenen visuellen Prüfung zusammengeführt. Inhalte aus diesen Quellen wurden nicht als durch Interviews oder Originalunterlagen bestätigte Tatsachen behandelt.

**Nicht geprüft:** Safari/iOS und Firefox; vollständige Tastatur- und Screenreader-Bedienung; alle Dark-Mode-Zustände; PDFs, Zeugnisse und externe Präsentationen; tatsächlicher Forschungsablauf und Teamaufteilung; vollständiger Inhalt und externe Verfügbarkeit aller Videos/Demos; Ladezeiten unter gedrosseltem Netz; rechtliche Vollständigkeit des Impressums. Die Live-Website wurde nicht verändert.

## Eingeflossen

- [Start DE](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/index.vue), [Start EN](C:/Users/biess/Github/portfolio-johannes-biess/pages/index.vue), [About DE](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/about.vue), [About EN](C:/Users/biess/Github/portfolio-johannes-biess/pages/en/about.vue) — Positionierung, Persönlichkeit und Texte; Textsichtung durch Subagent, DE zusätzlich selbst im Browser geprüft.
- [Resume DE](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/resume.vue), [Resume EN](C:/Users/biess/Github/portfolio-johannes-biess/pages/en/resume.vue), [CV DE](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/cv), [CV EN](C:/Users/biess/Github/portfolio-johannes-biess/pages/en/cv) — Status, Zeiträume, Beiträge und sprachliche Konsistenz; Textsichtung durch Subagent, Timeline zusätzlich selbst visuell geprüft.
- [Kontakt DE](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/contact.vue), [Kontakt EN](C:/Users/biess/Github/portfolio-johannes-biess/pages/en/contact.vue), [SplitFlapText](C:/Users/biess/Github/portfolio-johannes-biess/components/splitFlapText.vue) — Kontaktverhalten, Animation und zugängliche Texte; eigene Code-/Browserprüfung ergänzt durch Subagent.
- [Projektseiten DE](C:/Users/biess/Github/portfolio-johannes-biess/pages/de/project), [Projektseiten EN](C:/Users/biess/Github/portfolio-johannes-biess/pages/en/project) — alle acht aktiven Projektseiten jeweils durch Subagent gelesen; einzelne Aussagen oben direkt belegt. Archivierte Projekte wurden nicht erneut inhaltlich bewertet.
- [Projektregister](C:/Users/biess/Github/portfolio-johannes-biess/composables/projects.ts), [ProjectNav](C:/Users/biess/Github/portfolio-johannes-biess/components/ProjectNav.vue), [ProjectTiles](C:/Users/biess/Github/portfolio-johannes-biess/components/ProjectTiles.vue) — Karussell, Archivierung und sichtbare Informationen der Übersicht.
- [ProjectAccordion](C:/Users/biess/Github/portfolio-johannes-biess/components/ProjectAccordion.vue), [VideoEmbed](C:/Users/biess/Github/portfolio-johannes-biess/components/VideoEmbed.vue), [Projektlayout](C:/Users/biess/Github/portfolio-johannes-biess/assets/styles/project.scss), [gemeinsames Layout](C:/Users/biess/Github/portfolio-johannes-biess/assets/styles/_project-layout.scss) — Darstellung, Bildzuordnung und Medienkorrekturen.
- [Beacon-Übersicht](C:/Users/biess/Github/portfolio-johannes-biess/public/img/beacon/overview.webp), [KAI-Navigation](C:/Users/biess/Github/portfolio-johannes-biess/public/img/kai/navigation.webp), [GoEase-Lösung](C:/Users/biess/Github/portfolio-johannes-biess/public/img/ge/solution.svg), [PlantMonit-Lösung](C:/Users/biess/Github/portfolio-johannes-biess/public/img/pm/solution.svg), [DrawingLight-Umsetzung](C:/Users/biess/Github/portfolio-johannes-biess/public/img/dl/implementation.svg), [JumpStar-Umsetzung](C:/Users/biess/Github/portfolio-johannes-biess/public/img/js/Implementaion.svg) — visuell geprüfte Bildkompositionen und Auswahl eigenständiger Video-Motive.
- [Konfiguration](C:/Users/biess/Github/portfolio-johannes-biess/nuxt.config.ts), [Header](C:/Users/biess/Github/portfolio-johannes-biess/components/AppHeader.vue), [LanguageSwitch](C:/Users/biess/Github/portfolio-johannes-biess/components/LanguageSwitch.vue), [AppLink](C:/Users/biess/Github/portfolio-johannes-biess/components/AppLink.vue) — Dokumentkopf, Navigation, Sprache und Bewegungspräferenzen; teilweise Subagent-Sichtung.
- [Design-Critique-Skill](C:/Users/biess/.codex/plugins/cache/claude-cowork/design/1.2.0/skills/design-critique/SKILL.md) — Kriterien für Hierarchie, Verständlichkeit, Konsistenz und konkrete Verbesserungsvorschläge.
