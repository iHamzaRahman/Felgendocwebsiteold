# FelgenDoc Göttingen – Website Master Document
**Für:** AZTAL / Hamza Rahman  
**Projekt:** FelgenDoc Göttingen – Website Konzept, Wireframe & Deutscher Copy  
**Ziel:** Max. Leads (Anrufe, WhatsApp, Kontaktformular) aus Göttingen und Umgebung  
**Tech Stack:** Figma Design → WordPress + Elementor  
**Sprache:** Deutsch, 100%  
**Stand:** April 2026

***
## Executive Summary
FelgenDoc Göttingen ist ein Premium-Spezialist für Felgenreparatur, CNC-Abdrehen, Pulverbeschichtung und Fahrzeugveredelung in Göttingen.  Das Ziel der Website ist maximal viele qualifizierte Leads zu generieren, also Anrufe, WhatsApp-Nachrichten und Formular-Anfragen von echten Kunden.[^1][^2]

Die wichtigste strategische Entscheidung: Die Website darf nicht wirken wie ein allgemeiner Auto-Service, sondern muss wie ein Spezialist positioniert sein, der Felgen repariert und Fahrzeuge in neuwertigen Zustand versetzt. Das ist die Sprache, die Kunden versteht, nicht die Sprache eines Technikers.

Die Website besteht aus 6 Seiten: Startseite, Felgenreparatur & Oberflächen, Fahrzeugaufbereitung, Galerie, Über uns, Kontakt. Die Startseite trägt 80% der Conversion-Last und muss sofort Trust und Dringlichkeit aufbauen.

***
## 1. Sitemap & Seitenstruktur
```
Startseite (/)
Felgenreparatur & Oberflächen (/felgenreparatur)
Fahrzeugaufbereitung (/fahrzeugaufbereitung)
Galerie (/galerie)
Über uns (/ueber-uns)
Kontakt (/kontakt)
```

**Navigation im Header (sichtbar):**  
Startseite · Felgen · Aufbereitung · Galerie · Über uns · Kontakt

**CTA im Header (sticky, immer sichtbar):**  
> Button: „Jetzt anfragen" → verlinkt auf /kontakt  
> WhatsApp-Icon → direkter Link zu wa.me/49176703631

***
## 2. Design-Tokens für Figma
Diese Werte müssen in Figma als Styles angelegt werden, damit der Elementor-Dev 1:1 implementieren kann.
### Farben
| Token | Hex | Verwendung |
|---|---|---|
| `color-bg-primary` | `#0A0A0A` | Haupt-Hintergrund |
| `color-bg-secondary` | `#111111` | Sections Hintergrund |
| `color-bg-card` | `#1A1A1A` | Karten, Panels |
| `color-gold` | `#C9A84C` | Akzent, Headlines, Buttons |
| `color-gold-light` | `#E8D5A0` | Gold-Text auf dunklem Hintergrund |
| `color-silver` | `#A8AFBA` | Icons, sekundärer Text |
| `color-text-primary` | `#F5F5F5` | Haupttext |
| `color-text-muted` | `#999999` | Subtext, Labels |
| `color-border` | `rgba(201,168,76,0.2)` | Trennlinien, Card-Borders |
| `color-cta` | `#C9A84C` | Call-to-Action Buttons |
| `color-cta-hover` | `#A8861E` | Button Hover State |
### Typografie
| Token | Font | Weight | Size | Verwendung |
|---|---|---|---|---|
| `type-hero` | Barlow Condensed oder Bebas Neue | 700 | 64–80px | Hero-Headline |
| `type-h1` | Barlow Condensed | 700 | 48px | Seiten-Titel |
| `type-h2` | Barlow Condensed | 600 | 36px | Section-Titel |
| `type-h3` | Barlow Condensed | 600 | 24px | Karten-Titel |
| `type-body` | Inter oder DM Sans | 400 | 16px | Fließtext |
| `type-body-small` | Inter | 400 | 14px | Labels, Captions |
| `type-cta` | Inter | 600 | 15px | Button-Text |
| `type-label` | Inter | 500 | 12px | Uppercase Labels |

**Hinweis für Figma:** Barlow Condensed und Inter sind beide auf Google Fonts kostenlos verfügbar. Barlow Condensed für alle Headlines, Inter für Fließtext. Keine verspielten Fonts.
### Abstände (Spacing System)
| Token | Wert | Verwendung |
|---|---|---|
| `space-xs` | 8px | Kleine Gaps |
| `space-sm` | 16px | Icon-Text-Abstände |
| `space-md` | 24px | Card-Padding |
| `space-lg` | 48px | Section-Innenabstand |
| `space-xl` | 80px | Section-Außenabstand oben/unten |
| `space-2xl` | 120px | Hero-Padding |
### Border Radius
| Token | Wert |
|---|---|
| `radius-sm` | 4px |
| `radius-md` | 8px |
| `radius-lg` | 12px |
| `radius-btn` | 4px (kantig, technisch) |

***
## 3. STARTSEITE – Vollständiger Wireframe & Copy
Die Startseite ist in 9 Sektionen aufgebaut. Jede Sektion hat eine klare Aufgabe: Trust aufbauen, Dringlichkeit erzeugen oder zur Aktion führen.

***
### SEKTION 1: Hero
**Aufgabe:** In 3 Sekunden klar machen, wer FelgenDoc ist und was der Besucher als nächstes tun soll.

**Hintergrund:** Dunkles, dramatisches Bild – entweder ein polierstrahlendes Felgen-Detail oder ein professionell aufgenommener Werkstattmoment. Bildüberlagert mit einem dunklen Gradient von links nach rechts, damit der Text immer lesbar ist.

**Layout:** Zweispaltig. Links Text und CTAs. Rechts Logo oder großes Bild.

***

**HEADLINE (H1):**
> Felgenreparatur & Fahrzeugveredelung – Ihr Spezialist in Göttingen

**SUBLINE (Unterzeile):**
> Felgen reparieren, CNC-abdrehen, pulverbeschichten. Professionell, präzise, termingerecht.

**Zwei CTA-Buttons nebeneinander:**
> Button 1 (Gold, filled): **Jetzt Termin anfragen**  
> Button 2 (transparent, gold border): **WhatsApp schreiben**

**Unterhalb der Buttons, kleine Trust-Zeile:**
> ✔ Kostenlose Beratung  ·  ✔ Schnelle Bearbeitung  ·  ✔ Für alle Fahrzeugmarken

**Figma-Hinweis:** Hero braucht ein echtes Foto (kein Stock). Bitte Burim nach dem besten Bild fragen – entweder ein Nahaufnahme einer frisch reparierten Felge oder die Werkstatt von innen mit dramatischer Beleuchtung. Das Bild entscheidet, wie premium die Seite wirkt.

***
### SEKTION 2: Vertrauen-Zahlen (Trust Stats)
**Aufgabe:** Sofortiger Social Proof, ohne dass der Besucher lesen muss.

**Layout:** Drei Karten nebeneinander, dunkler Hintergrund, goldene Zahlen.

| Karte 1 | Karte 2 | Karte 3 |
|---|---|---|
| **500+** | **100%** | **Göttingen** |
| Reparierte Felgen | Kundenzufriedenheit | & Umgebung |

**Figma-Hinweis:** Große Zahl in `color-gold`, Beschreibung darunter in `color-text-muted`. Karten bekommen `color-bg-card` als Hintergrund und einen dünnen gold-farbenen Border.

**Hinweis für Burim / Content:** Die Zahlen müssen realistisch sein. Frag Burim, wie viele Felgen er ungefähr repariert hat seit Gründung. Wenn er keine genaue Zahl hat, kann man auch schreiben: „Hunderte zufriedene Kunden" oder „Seit 2023 in Göttingen".

***
### SEKTION 3: Hauptleistungen (Services Overview)
**Aufgabe:** Klar zeigen, was FelgenDoc macht. Felgen zuerst, dann Fahrzeugveredelung.

**Layout:** Zwei-Spalten-Grid mit kleinen Icons und Text.

**Überschrift:**
> Unsere Leistungen

**Unterzeile:**
> Von der Felgenreparatur bis zur vollständigen Fahrzeugaufbereitung – alles aus einer Hand.

**Spalte 1: Felgen & Oberflächen**

> ◆ Felgenreparatur  
> ◆ Felgen abdrehen (CNC-Technik)  
> ◆ Sandstrahlen  
> ◆ Pulverbeschichtung von Felgen  
> ◆ Pulverbeschichtung von Motorradteilen  
> ◆ Entfernung von Bordsteinschäden  

**Spalte 2: Fahrzeugaufbereitung & Smart Repair**

> ◆ Nano-Lackversiegelung  
> ◆ Keramik-Lackversiegelung  
> ◆ Lackbehandlung  
> ◆ Innenraumreinigung  
> ◆ Lederaufbereitung  
> ◆ Smart Repair  
> ◆ Teilfolierung  
> ◆ Dellendoktor  

**CTA unter der Liste:**
> Button: „Alle Leistungen ansehen" → /felgenreparatur

**Figma-Hinweis:** Bullet-Icons können kleine Rauten oder Linien sein, in `color-gold`. Keine bunten Kreise. Liste bleibt technisch und aufgeräumt.

***
### SEKTION 4: Leasing-Rückgabe Block (High-Value)
**Aufgabe:** Das wichtigste Conversion-Argument. Leasing-Kunden kommen mit Deadline, Angst vor Nachzahlung und hoher Zahlungsbereitschaft. Diese Sektion spricht sie direkt an.

**Hintergrund:** Dunkelgrau oder leicht abgesetzt, damit die Sektion sich von der vorherigen unterscheidet.

**Icon / Bild:** Großes, dezentes Bild einer eleganten Felge – oder ein kleines Icon einer Leasing-Uhr / Warnsymbol.

**HEADLINE:**
> Leasingfahrzeug abgeben? Kommen Sie vorher zu uns.

**TEXT:**
> Kratzer und Bordsteinschäden an Felgen führen bei der Leasingrückgabe oft zu teuren Nachberechnungen. Wir reparieren Ihre Felgen professionell – schnell, sauber und zu einem fairen Preis. So übergeben Sie Ihr Fahrzeug ohne unangenehme Überraschungen.

**Aufzählung mit Checks:**
> ✔ Schnelle Bearbeitung (oft am selben Tag)  
> ✔ Professionelle Ergebnisse die beim Gutachten bestehen  
> ✔ Faire Preise – deutlich günstiger als Händler-Nachberechnungen  

**CTA:**
> Button: „Termin vor Rückgabe sichern" → /kontakt

***
### SEKTION 5: Vorher / Nachher (Proof Section)
**Aufgabe:** Das stärkste Verkaufsargument visuell darstellen. Bilder überzeugen, wo Text versagt.

**Headline:**
> Ergebnisse sprechen für sich

**Layout:** 2 oder 3 Vorher/Nachher-Vergleiche nebeneinander oder untereinander.

Jeder Vergleich besteht aus:
- Linkes Bild: beschädigte Felge, kleines Label „VORHER" in rotem oder grauem Badge
- Rechtes Bild: reparierte Felge, kleines Label „NACHHER" in goldenem Badge

Unter jedem Paar optional eine kurze Leistungszeile:
> z.B. „Felgenreparatur · Pulverbeschichtung" oder „CNC-Abdrehen · Oberflächenbehandlung"

**CTA:**
> Button: „Weitere Bilder in der Galerie" → /galerie

**Figma-Hinweis:** Das sind die kritischsten Bilder auf der gesamten Website. Bitte Burim explizit nach professionellen Vorher/Nachher-Fotos fragen – mindestens 6 Paare, am besten 10+. Schlechte Bilder zerstören die Premium-Wirkung.

***
### SEKTION 6: Google Bewertungen (Social Proof)
**Aufgabe:** Third-Party-Trust. Echte Kundenstimmen, idealerweise mit Google-Bewertungen eingebettet.

**Headline:**
> Was unsere Kunden sagen

**Layout:** 3 Bewertungskarten, dunkel, mit 5-Sterne-Rating in Gold.

**Jede Karte enthält:**
- 5 goldene Sterne
- Bewertungstext (echter Text von Google)
- Kundenname und Datum
- Kleines Google-Logo unten rechts

**Unter den Karten:**
> Link: „Alle Bewertungen auf Google ansehen" (externe Verlinkung auf Google Maps Profil)

**Figma-Hinweis:** Diese Bewertungen müssen echt sein. Bitte Burim nach seinem Google-My-Business-Link fragen (er hat ihn bereits im Chat geteilt: https://share.google/5dGtkoQw8lQ4IluAy) und die besten 3 Bewertungen manuell eintragen. Wenn das GMB-Profil noch wenige Bewertungen hat, dann zunächst 2 Bewertungen nutzen und dritten Slot mit einem internen Zitat füllen.

***
### SEKTION 7: Warum FelgenDoc? (USP-Sektion)
**Aufgabe:** Differenzierung gegenüber Mitbewerbern wie Lucky Cars, Reifenhalle, Carwheel etc.[^1][^2][^3]

**Headline:**
> Warum FelgenDoc Göttingen?

**Layout:** 4 Karten in einem 2x2-Grid (Desktop) oder gestapelt (Mobile).

**Karte 1:**
> **Spezialist, kein Allrounder**  
> Felgen sind unser Kerngeschäft. Wir haben das Know-How, die Maschinen und die Erfahrung, die Generalisten nicht haben.

**Karte 2:**
> **CNC-Präzision**  
> Felgen abdrehen mittels CNC-Technik – maschinelle Genauigkeit statt Handarbeit.

**Karte 3:**
> **Schnelle Bearbeitung**  
> Kurze Wartezeiten, klare Absprachen. Viele Reparaturen sind am selben oder nächsten Tag fertig.

**Karte 4:**
> **Für alle Marken und Modelle**  
> BMW, Mercedes, Audi, VW, Porsche oder Honda – wir arbeiten für alle Fahrzeuge und Motorräder.

***
### SEKTION 8: CTA-Banner (Conversion Abschluss)
**Aufgabe:** Letzte Chance auf der Startseite, den Besucher zur Aktion zu bringen.

**Hintergrund:** Volle Breite, dunkler Hintergrund mit einem sehr subtilen Gold-Gradient-Streifen oder einer goldenen Trennlinie oben.

**HEADLINE:**
> Ihre Felge braucht Pflege? Wir sind für Sie da.

**Subline:**
> Kostenlose Erstberatung – persönlich oder telefonisch.

**Zwei Buttons:**
> Button 1 (Gold): **Jetzt Termin anfragen**  
> Button 2 (White outline): **+49 (0) 176 70363162 anrufen**

***
### SEKTION 9: Footer
**Inhalt:**
- Logo links oben
- Navigation: Startseite · Felgen · Aufbereitung · Galerie · Über uns · Kontakt
- Kontaktdaten: Telefon, E-Mail, Adresse, Öffnungszeiten
- Social-Links: Instagram, Facebook, Google Maps
- Impressum · Datenschutzerklärung (Pflicht in Deutschland)
- Copyright: © 2026 FelgenDoc Göttingen

**Figma-Hinweis:** Footer in `#0A0A0A`, eine goldene Trennlinie oben. Kein bunter Footer.

***
## 4. SEITE: FELGENREPARATUR & OBERFLÄCHEN
**URL:** /felgenreparatur  
**Meta Title:** Felgenreparatur Göttingen – CNC-Abdrehen & Pulverbeschichtung | FelgenDoc  
**Meta Description:** Professionelle Felgenreparatur in Göttingen. CNC-Abdrehen, Pulverbeschichtung, Sandstrahlen und Entfernung von Bordsteinschäden. Termin anfragen!

**Page Header (Hero-ähnlich, kompakter):**
> Felgenreparatur & Oberflächen  
> Der Spezialist in Göttingen – präzise, schnell, professionell.

**Einleitung:**
> Eine beschädigte Felge ist mehr als ein optisches Problem. Kratzer, Beulen und Bordsteinschäden können die Fahrsicherheit beeinflussen und den Fahrzeugwert erheblich mindern. Bei FelgenDoc Göttingen reparieren wir Ihre Felgen professionell und bringen sie zurück in neuwertigen Zustand – mit modernster Technik und langjähriger Erfahrung.

**Leistungen (einzeln als Karten mit Icon + Beschreibung):**

**1. Felgenreparatur**
> Kratzer, Schläge, Risse und Korrosionsschäden – wir diagnostizieren den Schaden und reparieren ihn fachgerecht. Für alle gängigen Alufelgen und Stahlfelgen.

**2. Felgen abdrehen (CNC-Technik)**
> Das maschinelle Abdrehen von Felgen mittels CNC-Technik sorgt für eine glatte, präzise Oberfläche. Ideal nach Bordsteinschäden oder für optische Perfektion vor einer Neulackierung.

**3. Sandstrahlen**
> Sandstrahlen entfernt Lack, Rost und alte Beschichtungen vollständig und schonend. Die ideale Vorbereitung für eine neue Pulverbeschichtung oder Lackierung.

**4. Pulverbeschichtung von Felgen**
> Langlebige, kratzresistente Oberflächenbeschichtung in über 200 RAL-Farben. Pulverbeschichtung ist widerstandsfähiger als herkömmliche Lackierung und gibt Ihren Felgen ein neues, hochwertiges Aussehen.

**5. Pulverbeschichtung von Motorradteilen**
> Auch für Motorräder bieten wir professionelle Pulverbeschichtung an. Felgen, Rahmen und andere Metallteile werden sorgfältig behandelt und neu beschichtet.

**6. Entfernung von Bordsteinschäden**
> Bordsteinschäden sind einer der häufigsten Gründe für Felgenreparaturen. Wir entfernen Kratzer, Abschürfungen und Beulen und stellen das ursprüngliche Erscheinungsbild Ihrer Felgen wieder her.

**CTA am Ende der Seite:**
> Button: „Jetzt Termin anfragen" + Button: „Uns anrufen"

***
## 5. SEITE: FAHRZEUGAUFBEREITUNG
**URL:** /fahrzeugaufbereitung  
**Meta Title:** Fahrzeugaufbereitung Göttingen – Lackversiegelung & Smart Repair | FelgenDoc  
**Meta Description:** Professionelle Fahrzeugaufbereitung in Göttingen. Nano- und Keramikversiegelung, Innenreinigung, Lederaufbereitung, Smart Repair und mehr.

**Page Header:**
> Fahrzeugaufbereitung & Veredelung  
> Ihr Auto, wie frisch aus dem Showroom.

**Einleitung:**
> Neben unserer Kernkompetenz in der Felgenreparatur bieten wir eine vollständige Fahrzeugaufbereitung an. Ob Lackversiegelung für dauerhaften Schutz, Innenraumreinigung oder Smart Repair für kleinere Beschädigungen – wir bringen Ihr Fahrzeug zurück in einen neuwertigen Zustand.

**Leistungen (Karten-Format):**

**1. Nano-Lackversiegelung**
> Langzeitschutz für Ihren Fahrzeuglack. Die Nano-Versiegelung erzeugt eine schützende Schicht, die Schmutz abweist und den Glanz Ihres Fahrzeugs erhält.

**2. Keramik-Lackversiegelung**
> Premium-Schutz für Anspruchsvolle. Keramikversiegelung bietet überlegenen Schutz gegen UV-Strahlen, Kratzer und chemische Einflüsse – bei bis zu mehrjähriger Haltbarkeit.

**3. Lackbehandlung**
> Polieren, Kratzer entfernen, Hologrammbeseitigung. Wir bringen Ihren Lack wieder zum Strahlen.

**4. Innenraumreinigung**
> Professionelle Tiefenreinigung des Fahrzeuginnenraums. Sitze, Teppiche, Armaturenbrett – alles wird sorgfältig gereinigt und gepflegt.

**5. Lederaufbereitung**
> Leder reinigen, nähren und versiegeln. Wir sorgen dafür, dass Ihr Lederinterieur langfristig gepflegt und in bestem Zustand bleibt.

**6. Smart Repair**
> Kleine Kratzer, Dellen und Lackschäden ohne vollständige Neulackierung beheben. Schnell, günstig und mit professionellem Ergebnis.

**7. Teilfolierung**
> Folieren von Motorhaube, Dach, Stoßfänger und anderen Fahrzeugteilen – für optische Highlights oder zum Schutz des Originallacks.

**8. Dellendoktor**
> Delle ohne Spuren entfernen. Unsere Dellentechnik stellt das Blechbild wieder her, ohne den Lack zu beschädigen.

***
## 6. SEITE: GALERIE
**URL:** /galerie  
**Meta Title:** Galerie – Vorher/Nachher Felgenreparatur Göttingen | FelgenDoc  
**Meta Description:** Sehen Sie selbst: Vorher/Nachher-Bilder unserer Felgenreparaturen und Fahrzeugveredelungen in Göttingen.

**Page Header:**
> Galerie – Unsere Arbeit spricht für sich

**Filter-Tabs:**
> Alle · Felgenreparatur · Pulverbeschichtung · Fahrzeugaufbereitung · Motorrad

**Layout:**
Masonry-Grid oder zweispaltiges Vorher/Nachher-Grid. Jede Bildgruppe hat ein kleines Label mit der Leistungsbezeichnung.

**Content Note:** Mindestens 15-20 hochwertige Vorher/Nachher-Paare notwendig, damit diese Seite Wirkung hat. Handyfotos ohne gute Beleuchtung bitte nicht verwenden.

***
## 7. SEITE: ÜBER UNS
**URL:** /ueber-uns  
**Meta Title:** Über uns – FelgenDoc Göttingen – Ihr Felgenspezialist  
**Meta Description:** Lernen Sie FelgenDoc Göttingen kennen. Ihr Spezialist für Felgenreparatur, CNC-Abdrehen und Fahrzeugveredelung in Göttingen.

**Page Header:**
> Über FelgenDoc Göttingen

**Copy:**
> FelgenDoc Göttingen ist Ihr Spezialist für professionelle Felgenreparatur und hochwertige Fahrzeugveredelung im Raum Göttingen. Unser Fokus liegt auf Präzision, Qualität und schneller Bearbeitung – denn wir wissen, dass Ihr Fahrzeug für Sie mehr ist als nur ein Fortbewegungsmittel.

> Mit modernster CNC-Technik, professionellen Pulverbeschichtungsanlagen und einem geschulten Team bieten wir Ihnen Leistungen auf einem Niveau, das sich von der durchschnittlichen Werkstatt abhebt. Wir arbeiten für Privatkunden, Autoliebhaber, Leasingrückläufer und Autohäuser.

**Team / Inhaber (optional, aber empfohlen):**
> **Burim Shashivari**  
> Inhaber · FelgenDoc Göttingen  
> „Jede Felge, die unsere Werkstatt verlässt, soll aussehen wie ab Werk – oder besser."

**CTA:**
> Button: „Lernen Sie uns persönlich kennen – Kontakt aufnehmen"

***
## 8. SEITE: KONTAKT
**URL:** /kontakt  
**Meta Title:** Kontakt – FelgenDoc Göttingen | Termin anfragen  
**Meta Description:** Kontaktieren Sie FelgenDoc Göttingen per Telefon, E-Mail oder WhatsApp. Termin für Felgenreparatur oder Fahrzeugaufbereitung anfragen.

**Layout:** Zweispaltig. Links Kontaktdaten. Rechts Formular.

**Linke Spalte – Kontaktdaten:**

> **FelgenDoc Göttingen**  
> Inhaber: Burim Shashivari  
>  
> Telefon: +49 (0) 176 70363162  
> E-Mail: info@felgendoc-goettingen.de  
> Website: www.felgendoc-goettingen.de  
> Adresse: Rudolf-Winkel-Straße 11, 37081 Göttingen  
>  
> Öffnungszeiten: [Bitte bei Burim erfragen]  
>  
> Button (WhatsApp-grün): **Direkt auf WhatsApp schreiben**  
> Button (gold): **Jetzt anrufen**  

**Rechte Spalte – Formular:**

Felder:
- Name (Pflichtfeld)
- Telefonnummer (Pflichtfeld)
- E-Mail
- Fahrzeug & Beschreibung (Textarea)
- Service auswählen (Dropdown: Felgenreparatur / Pulverbeschichtung / Fahrzeugaufbereitung / Sonstiges)
- Datenschutz Checkbox (Pflicht in DE)
- Submit-Button: „Anfrage senden"

**Unter dem Formular:**
Eingebettete Google Maps Karte mit dem genauen Standort (Rudolf-Winkel-Straße 11, 37081 Göttingen).

***
## 9. SEO-Strategie für Göttingen
Da das Ziel maximale Leads aus Göttingen sind, muss die On-Page-SEO von Anfang an konsequent umgesetzt werden.
### Primäre Keywords (Seiten-Fokus)
| Keyword | Monatliches Suchvolumen (DE) | Ziel-Seite |
|---|---|---|
| Felgenreparatur Göttingen | Mittel | Startseite + /felgenreparatur |
| Felgen abdrehen Göttingen | Niedrig-Mittel | /felgenreparatur |
| Pulverbeschichtung Felgen Göttingen | Niedrig | /felgenreparatur |
| Alufelgen reparieren Göttingen | Mittel | /felgenreparatur |
| Fahrzeugaufbereitung Göttingen | Mittel | /fahrzeugaufbereitung |
| Smart Repair Göttingen | Mittel | /fahrzeugaufbereitung |
| Dellendoktor Göttingen | Niedrig | /fahrzeugaufbereitung |
| Lackversiegelung Göttingen | Niedrig | /fahrzeugaufbereitung |
| FelgenDoc Göttingen | Direkt | Startseite |
### On-Page Regeln für alle Seiten
- Jede Seite hat einen einzigartigen Meta Title (max. 60 Zeichen) und eine Meta Description (max. 155 Zeichen)
- Das Fokus-Keyword kommt in H1, ersten 100 Wörtern, mindestens einer H2 und im Alt-Text mindestens eines Bildes vor
- Alle Bilder haben beschreibende Alt-Texte auf Deutsch (z.B. `alt="Felgenreparatur in Göttingen – vorher und nachher"`)
- Interne Verlinkung: Startseite verlinkt auf alle Service-Seiten, Service-Seiten verlinken auf Kontakt
- Schema Markup: LocalBusiness Schema für die Kontaktseite und die Startseite (Name, Adresse, Telefon, Öffnungszeiten, Branche)
### Google My Business
Burim hat ein GMB-Profil geteilt: https://share.google/5dGtkoQw8lQ4IluAy[^4]
Das GMB-Profil muss vollständig ausgefüllt sein:
- Adresse verifiziert
- Öffnungszeiten aktuell
- Alle Leistungen eingetragen
- Mindestens 10 Fotos hochgeladen
- Regelmäßige Posts (Vorher/Nachher, Angebote)
- Kunden aktiv um Bewertungen bitten (QR-Code auf der Visitenkarte ist hierfür ideal)

***
## 10. Technische Implementierung (WordPress + Elementor)
### Plugin-Stack Empfehlung
| Plugin | Zweck |
|---|---|
| Elementor Pro | Page Builder |
| RankMath oder Yoast SEO | On-Page SEO |
| WP Rocket | Performance / Cache |
| Smush oder ShortPixel | Bild-Optimierung |
| WPForms oder Contact Form 7 | Kontaktformular |
| WP Schema Pro | Structured Data |
| UpdraftPlus | Backups |
### Technische Anforderungen
- HTTPS (SSL-Zertifikat aktiv)
- Mobile-first, vollständig responsive
- Core Web Vitals: LCP unter 2.5 Sekunden, CLS unter 0.1
- Google Analytics 4 einrichten
- Google Search Console verknüpfen
- DSGVO-konformes Cookie-Banner (Pflicht in Deutschland)
- Impressum und Datenschutzerklärung (juristische Pflicht)
### Figma-to-Elementor Übergabe-Checklist
- Alle Farben als Elementor Global Colors anlegen (exakt die Hex-Werte aus Sektion 2)
- Alle Fonts als Elementor Global Fonts anlegen
- Abstandswerte aus dem Spacing System als feste Werte in Elementor-Sections verwenden
- Jede Seite als eigenes Elementor-Template
- Header und Footer als Global Template anlegen (erscheinen auf allen Seiten)
- WhatsApp-Button als sticky floating button unten rechts (Elementor Pro Popup oder Widget)

***
## 11. Content-Anforderungen von Burim (Checkliste)
Bevor die Website gebaut werden kann, brauchen wir folgendes Material von Burim:

**Bilder (kritisch, keine Website ohne):**
- [ ] Mindestens 6 Vorher/Nachher-Paare Felgenreparatur
- [ ] 2-3 Vorher/Nachher Pulverbeschichtung
- [ ] 2-3 Vorher/Nachher Fahrzeugaufbereitung
- [ ] 1-2 Bilder der Werkstatt (sauber, gute Beleuchtung)
- [ ] 1 Profilfoto von Burim (optional, aber erhöht Trust stark)
- [ ] Klares Logo auf weißem und auf schwarzem Hintergrund (PNG transparent)

**Texte und Daten:**
- [ ] Exakte Öffnungszeiten
- [ ] Gründungsjahr oder ungefähre Erfahrung in Jahren
- [ ] Ungefähre Anzahl reparierter Felgen / Kundenzahl für die Trust-Stats-Sektion
- [ ] 3-5 echte Google-Bewertungstexte (aus dem GMB-Profil kopieren)
- [ ] Google Maps Link für Karteneinbettung

**Zugänge:**
- [ ] WordPress-Hosting (Hoster wählen: Raidboxes, All-Inkl, Ionos – Raidboxes empfohlen für Elementor)
- [ ] Domain: felgendoc-goettingen.de registrieren, falls noch nicht vorhanden

***
## 12. Nächste Schritte und Reihenfolge
1. **Content Collection** – Burim die obige Checkliste schicken und alle Bilder, Texte und Zugänge sammeln.
2. **Figma Design** – Startseite zuerst, dann Service-Seiten, dann Galerie und Kontakt. Restliche Seiten folgen.
3. **Design Review** – Zwischenstand Burim zeigen, Feedback einholen, dann finalisieren.
4. **WordPress Setup** – Hosting, Domain, WordPress-Installation, Plugin-Stack einrichten.
5. **Elementor Build** – Seite für Seite, beginnend mit Startseite und Header/Footer.
6. **SEO Setup** – Meta Titles, Descriptions, Schema Markup, Google Analytics, Search Console.
7. **GMB Optimization** – Profil vollständig ausfüllen, Fotos hochladen.
8. **Launch** – Domain live schalten, Indexierung auslösen, Google Search Console bestätigen.
9. **Post-Launch** – Erste Bewertungsanfragen an Kunden, QR-Code-Karten verteilen.

---

## References

1. [Felgenreparatur in Göttingen - Smartrepairzentrum Lucky Cars](https://luckycars.de/service/felgenreparatur/) - Lucky Cars ist Ihr Experte für Felgentechnologie in Göttingen. Denn wir wissen: Felgen, vor allem ho...

2. [Felgenreparatur Göttingen – Alufelgen professionell aufbereiten](https://carwheel.de/pages/felgenreparatur-gottingen) - Alufelgen-Aufbereitung in Göttingen ab 189 €. Kostenloser Versand, sichere Verpackung, 2 Jahre Gewäh...

3. [Felgenreparatur - Felgen reparieren in Werkstatt - Reifen-Ehrhardt](https://www.reifen-ehrhardt.de/felgenreparatur/) - Wir reparieren Schäden an Ihren Felgen mit moderner Technik und Expertise. Jetzt Ehrhardt kontaktier...

4. [Google Maps](https://maps.google.com) - Find local businesses, view maps and get driving directions in Google Maps.

