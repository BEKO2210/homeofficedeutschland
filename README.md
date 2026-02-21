# HomeOffice Deutschland

Die Plattform fur Remote- und Homeoffice-Jobs in Deutschland.

**Live:** [homeofficedeutschland.de](https://homeofficedeutschland.de)

---

## Tech-Stack

| Technologie | Version | Zweck |
|-------------|---------|-------|
| [Next.js](https://nextjs.org/) | 15.1 | React-Framework (App Router) |
| [React](https://react.dev/) | 19 | UI-Bibliothek |
| [TypeScript](https://typescriptlang.org/) | 5 | Typisierung |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Styling |

---

## Schnellstart

```bash
# 1. Repository klonen
git clone https://github.com/BEKO2210/homeofficedeutschland.git
cd homeofficedeutschland

# 2. Abhangigkeiten installieren
npm install

# 3. Entwicklungsserver starten
npm run dev
```

Die App lauft dann unter **http://localhost:3000**.

### Weitere Befehle

```bash
npm run build    # Produktions-Build erstellen
npm run start    # Produktions-Server starten
npm run lint     # Code-Qualitat prufen
```

---

## Projektstruktur

```
homeofficedeutschland/
├── app/                        # Next.js App Router (Seiten)
│   ├── layout.tsx              # Globales Layout (Header + Footer)
│   ├── page.tsx                # Startseite
│   ├── globals.css             # Globale Styles & Tailwind
│   ├── jobs/
│   │   ├── page.tsx            # Job-Ubersicht mit Suche & Filter
│   │   ├── JobsContent.tsx     # Client-Komponente fur Filter
│   │   └── [slug]/
│   │       └── page.tsx        # Job-Detailseite
│   ├── preise/page.tsx         # Preisseite
│   ├── fuer-unternehmen/page.tsx # Seite fur Arbeitgeber
│   ├── job-einstellen/page.tsx # Job-Einreichungsformular
│   ├── impressum/page.tsx      # Impressum
│   ├── datenschutz/page.tsx    # Datenschutzerklarung
│   ├── agb/page.tsx            # AGB
│   └── api/
│       ├── newsletter/route.ts # Newsletter-API
│       └── contact/route.ts    # Job-Einreichungs-API
├── components/                 # Wiederverwendbare Komponenten
│   ├── Header.tsx              # Navigation
│   ├── Footer.tsx              # Fußzeile
│   ├── Hero.tsx                # Hero-Bereich auf Startseite
│   ├── JobCard.tsx             # Job-Karte
│   ├── CategoryGrid.tsx        # Kategorie-Ubersicht
│   └── Newsletter.tsx          # Newsletter-Anmeldung
├── lib/                        # Daten & Hilfsfunktionen
│   ├── jobs.ts                 # ⭐ ALLE JOB-DATEN (hier bearbeiten!)
│   └── types.ts                # TypeScript-Typen & Hilfsfunktionen
├── public/                     # Statische Dateien (Bilder etc.)
├── tailwind.config.ts          # Tailwind-Konfiguration
├── tsconfig.json               # TypeScript-Konfiguration
├── next.config.ts              # Next.js-Konfiguration
└── package.json                # Abhangigkeiten & Skripte
```

---

## Jobs verwalten

### Wo sind die Jobs gespeichert?

Alle Jobs befinden sich in einer einzigen Datei:

```
lib/jobs.ts
```

### Neuen Job hinzufugen

1. Offne `lib/jobs.ts`
2. Fuge ein neues Job-Objekt zum `jobs`-Array hinzu:

```typescript
{
  id: '13',                                    // Eindeutige ID (nachste freie Nummer)
  slug: 'mein-jobtitel-firmenname',             // URL-freundlicher Name (keine Umlaute, Kleinbuchstaben, Bindestriche)
  title: 'Senior Backend Developer',           // Jobtitel
  company: 'Firma GmbH',                       // Firmenname
  companyDescription: 'Firma GmbH ist...',     // Kurze Firmenbeschreibung (1-2 Satze)
  location: 'Berlin (100% Remote)',            // Standort
  type: 'vollzeit',                            // 'vollzeit' | 'teilzeit' | 'freelance' | 'minijob'
  remote: '100-remote',                        // '100-remote' | 'hybrid' | 'teilweise-remote'
  salary: { min: 60000, max: 80000, period: 'jahr' },  // Optional! Loschen wenn unbekannt
  description: 'Beschreibung der Stelle...',   // Ausfuhrliche Stellenbeschreibung
  requirements: [                              // Anforderungen als Array
    '3+ Jahre Erfahrung mit Python',
    'Gute Deutschkenntnisse',
  ],
  benefits: [                                  // Benefits als Array
    '30 Tage Urlaub',
    '100% Remote',
  ],
  tags: ['Python', 'Django', 'Backend'],       // Skills/Tags fur die Suche
  category: 'entwicklung',                     // Siehe Kategorien unten
  applyUrl: 'https://firma.de/jobs/apply',     // ORIGINAL Bewerbungslink
  postedAt: '2026-02-21T10:00:00Z',            // Datum im ISO-Format
  featured: false,                             // true = wird oben hervorgehoben
},
```

3. Speichern, fertig! Die Seite aktualisiert sich automatisch.

### Job bearbeiten

1. Offne `lib/jobs.ts`
2. Finde den Job anhand des `slug` oder `title`
3. Andere die gewunschten Felder
4. Speichern

### Job loschen

1. Offne `lib/jobs.ts`
2. Losche das gesamte Job-Objekt `{ ... },` aus dem Array
3. Speichern

### Verfugbare Kategorien

| Wert | Anzeige |
|------|---------|
| `entwicklung` | Entwicklung & IT |
| `marketing` | Marketing & Content |
| `design` | Design & Kreativ |
| `vertrieb` | Vertrieb & Sales |
| `kundenservice` | Kundenservice |
| `finanzen` | Finanzen & Buchhaltung |
| `hr` | HR & Personal |
| `projektmanagement` | Projektmanagement |
| `beratung` | Beratung & Consulting |
| `sonstiges` | Sonstiges |

### Verfugbare Job-Typen

| Wert | Anzeige |
|------|---------|
| `vollzeit` | Vollzeit |
| `teilzeit` | Teilzeit |
| `freelance` | Freelance |
| `minijob` | Minijob |

### Verfugbare Remote-Typen

| Wert | Anzeige |
|------|---------|
| `100-remote` | 100% Remote |
| `hybrid` | Hybrid |
| `teilweise-remote` | Teilweise Remote |

### Gehalt-Formate

```typescript
// Jahresgehalt
salary: { min: 50000, max: 70000, period: 'jahr' }    // → "50.000 € – 70.000 € / Jahr"

// Monatsgehalt
salary: { min: 4000, max: 5500, period: 'monat' }     // → "4.000 € – 5.500 € / Monat"

// Stundengehalt
salary: { min: 50, max: 80, period: 'stunde' }        // → "50 € – 80 € / Stunde"

// Kein Gehalt angeben → Feld einfach weglassen
```

### Slug erstellen

Der `slug` wird fur die URL verwendet (`/jobs/dein-slug`). Regeln:
- Nur Kleinbuchstaben, Zahlen und Bindestriche
- Keine Umlaute (a statt a, u statt u, o statt o, ss statt ß)
- Keine Leerzeichen (Bindestriche statt Leerzeichen)
- Einzigartig (kein anderer Job darf den gleichen Slug haben)

Beispiele:
- "Senior Frontend Developer bei TechCo" → `senior-frontend-developer-techco`
- "UX/UI Designer (Remote)" → `ux-ui-designer-remote`

---

## Seiten im Detail

### Startseite (`/`)
- Hero mit Suchleiste
- Empfohlene Jobs (featured: true)
- Kategorie-Ubersicht
- Neueste Jobs
- "So funktioniert es" Erklarung
- CTA fur Unternehmen
- Newsletter-Anmeldung

### Jobs (`/jobs`)
- Volltext-Suche (Titel, Firma, Skills, Standort)
- Filter: Kategorie, Anstellungsart, Remote-Art
- URL-Parameter: `/jobs?q=react&category=entwicklung&type=vollzeit&remote=100-remote`

### Job-Detail (`/jobs/[slug]`)
- Automatisch generiert aus den Daten in `lib/jobs.ts`
- Bewerbungs-Button mit Original-Link
- Social-Sharing (LinkedIn, Twitter, E-Mail)

### Preise (`/preise`)
- Kostenlos: Erste 10 Anzeigen
- Pro Anzeige: 49 EUR

### Job einstellen (`/job-einstellen`)
- Formular mit Validierung
- Sendet Daten an `/api/contact`

---

## Deployment

### Vercel (empfohlen)

1. Repository auf GitHub pushen
2. [vercel.com](https://vercel.com) → "Import Project" → Repository wahlen
3. "Deploy" klicken → fertig
4. Domain unter Settings > Domains verbinden

### Nach Anderungen deployen

```bash
git add -A
git commit -m "Neue Jobs hinzugefugt"
git push
```

Vercel deployed automatisch bei jedem Push.

---

## API-Endpunkte

### POST `/api/newsletter`
Newsletter-Anmeldung.

```json
{ "email": "user@example.com" }
```

### POST `/api/contact`
Job-Einreichung von Unternehmen.

```json
{
  "companyName": "Firma GmbH",
  "email": "jobs@firma.de",
  "jobTitle": "Frontend Developer",
  "jobType": "vollzeit",
  "remote": "100-remote",
  "description": "..."
}
```

> **Hinweis:** Die APIs loggen aktuell auf der Serverkonsole. Fur Produktion sollte ein E-Mail-Service (z.B. Resend, Brevo) oder eine Datenbank (z.B. Supabase) angebunden werden.

---

## Nachste Schritte (optional)

- [ ] **E-Mail-Service** anbinden (Brevo, Resend) fur Newsletter und Job-Einreichungen
- [ ] **Datenbank** (Supabase, PlanetScale) fur dynamische Job-Verwaltung
- [ ] **Stripe** fur die Bezahlung nach den ersten 10 kostenlosen Anzeigen
- [ ] **Admin-Dashboard** zum Verwalten von Jobs im Browser
- [ ] **Sitemap** (`/sitemap.xml`) fur besseres SEO

---

## Kontakt

Belkis Aslani
- E-Mail: belkis.aslani@gmail.com
- Telefon: +49 176 81462526
