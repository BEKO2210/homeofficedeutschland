import { Job, JobCategory, JobType, RemoteType } from './types'

// Real job listings sourced from German remote job boards (February 2026)
// Sources: arbeitnow.com, indeed.de, stepstone.de, weworkremotely.com, remotely.de,
// jobs.concentrix.com, personio, join.com, taxpal.de, hsag.softgarden.io, remotive.com, jobicy.com
// Last updated: February 2026
const jobs: Job[] = [
  {
    id: '1',
    slug: 'senior-frontend-developer-react-gip',
    title: '(Senior) Frontend Developer | React (m/w/d)',
    company: 'Gesellschaft fuer innovative Personalwirtschaftssysteme mbH (GIP)',
    companyDescription:
      'GIP ist ein fuehrender Softwarehersteller fuer oeffentliche und soziale Arbeitgeber in Deutschland. Rund 160 Tech-Professionals arbeiten in 15 crossfunktionalen Teams an 34 Applikationen.',
    location: 'Offenbach am Main / Leipzig (100% Remote in Deutschland)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Entwickle moderne React-Komponenten fuer ein Greenfield-Produkt mit Java/Quarkus-Backend und Neo4j-Datenbank. Du arbeitest eng mit Product Ownern und UX-Teams zusammen, um intuitive Benutzeroberflaechen zu schaffen.',
    requirements: [
      'Relevantes Studium oder IT-Ausbildung',
      '3+ Jahre React-Entwicklungserfahrung mit komplexen Komponenten',
      'Starke analytische und problemloesende Faehigkeiten',
      'Leidenschaft fuer Softwareentwicklung und Wissensaustausch',
      'Teamorientierung',
      'Deutschkenntnisse auf C1+-Niveau',
    ],
    benefits: [
      'Flexible Home-Office-Regelung (100% remote in Deutschland moeglich)',
      '30 Tage Urlaub plus bis zu 12 zusaetzliche Tage (Arbeitszeitkonto), Sabbatical-Option',
      'Interne und externe Weiterbildungen',
      'Pluxee Benefits Card und Corporate Discounts',
      'Arbeitgeberfinanzierte betriebliche Altersvorsorge',
      'Kantine an den Standorten Leipzig und Offenbach',
    ],
    tags: ['React', 'Frontend', 'TypeScript', 'Java', 'Quarkus'],
    category: 'entwicklung',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/kooku/senior-frontend-developer-react-full-remote-top-company-2026-germany-302318',
    postedAt: '2026-02-10T10:00:00Z',
    featured: true,
  },
  {
    id: '2',
    slug: 'senior-software-engineer-synthflow',
    title: 'Senior Software Engineer',
    company: 'Synthflow.ai (via Career Vault Talent)',
    companyDescription:
      'Synthflow.ai entwickelt KI-gesteuerte Voice Agents. Das Unternehmen arbeitet an der Transition von monolithischer Architektur zu Hochleistungs-Microservices mit Echtzeit-KI-Orchestrierung bei unter 700ms Latenz.',
    location: 'Berlin (Remote in Deutschland moeglich)',
    type: 'vollzeit',
    remote: '100-remote',
    salary: { min: 100000, max: 140000, period: 'jahr' },
    description:
      'Entwickle und betreue Backend-Plattformdienste fuer KI-gesteuerte Voice Agents. Der Fokus liegt auf Skalierbarkeit, Performance und Zuverlaessigkeit sowie der Verbesserung der Developer Experience durch optimierte Testing- und Deployment-Frameworks.',
    requirements: [
      '5+ Jahre Software-Engineering-Erfahrung',
      'Starke Python-Kenntnisse',
      'Go-Sprachkompetenz',
      'Erfahrung mit Kubernetes, PostgreSQL, MongoDB, Redis',
      'Backend-Systeme-Expertise',
    ],
    benefits: [
      'Visa-Sponsoring fuer Deutschland-Umzug verfuegbar',
      'Englischsprachiges Arbeitsumfeld',
      'Umzugsunterstuetzung',
      'Hybrid oder Remote moeglich (mit quartalsweisen Besuchen in Berlin)',
    ],
    tags: ['Python', 'Go', 'Kubernetes', 'AI', 'Backend'],
    category: 'entwicklung',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/career-vault-talent/senior-software-engineer-berlin-104940',
    postedAt: '2026-02-14T09:00:00Z',
    featured: true,
  },
  {
    id: '3',
    slug: 'senior-html5-game-developer-softgames',
    title: 'Senior HTML5 Game Developer - Fully Remote',
    company: 'Softgames',
    companyDescription:
      'Softgames ist ein fuehrender Entwickler von Instant-Gaming-Plattformen, die monatlich Millionen von Spielern weltweit erreichen. Das Unternehmen setzt auf Remote-First-Kultur mit optionalem Berliner Buero.',
    location: 'Berlin (Fully Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Entwirf und implementiere Features fuer Instant-Gaming-Plattformen. Pflege Live-Games, optimiere Performance und arbeite mit crossfunktionalen Teams zusammen.',
    requirements: [
      '5+ Jahre professionelle Software-Engineering-Erfahrung',
      'Mindestens 2 Games auf mehreren Plattformen ausgeliefert und betreut',
      'Starke Expertise in PixiJS und TypeScript (HTML5)',
      'Browser-Applikations-Optimierung und Profiling-Kenntnisse',
      'Erfahrung mit Build-Systemen (Vite, Webpack)',
      'Erfahrung mit automatisiertem Testing und CI/CD-Pipelines',
      'Facebook Instant Games SDK Erfahrung von Vorteil',
    ],
    benefits: [
      'Remote First mit optionalem Berliner Buero',
      'Flexible Arbeitszeiten ohne Crunch',
      'Home-Office-Zulage und Ausstattungsbudget',
      'Weiterbildungsmoeglichkeiten',
      'Halbjaehrliche Company Retreats und Team-Events',
      'Wellness-Benefits inkl. virtuellem Yoga und Meditation',
    ],
    tags: ['HTML5', 'TypeScript', 'PixiJS', 'Game Development', 'WebGL'],
    category: 'entwicklung',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/softgames/senior-html5-game-developer-fully-remote-berlin-96493',
    postedAt: '2026-02-08T10:00:00Z',
    featured: false,
  },
  {
    id: '4',
    slug: 'e-mail-marketing-crm-manager-mailody',
    title: 'E-Mail Marketing / CRM Manager | 100% Remote (m/w/d)',
    company: 'MAILODY GmbH',
    companyDescription:
      'MAILODY ist eine Marketingagentur spezialisiert auf CRM-Strategien inkl. E-Mail-Marketing, WhatsApp-Marketing und Print-Mailings. Seit 2019 unterstuetzen sie E-Commerce-Unternehmen wie everdrop, JUNGLUCK und FITTASTE. Von 2 auf 20 Mitarbeiter in den letzten zwei Jahren gewachsen.',
    location: 'Deutschlandweit (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Treibe Kundenbindung und Umsatzwachstum fuer E-Commerce-Kunden durch strategische E-Mail-Marketing- und CRM-Initiativen voran. Agiere als Schnittstelle zwischen Kunden und internen Teams (Copywriting, Design, technische Umsetzung). Entwickle und implementiere innovative E-Mail-Marketing-Kampagnen und manage den gesamten Projektlebenszyklus.',
    requirements: [
      '1-3 Jahre Erfahrung im E-Mail-Marketing oder CRM-Bereich',
      'Erfahrung mit E-Mail-Marketing-Plattformen (Klaviyo, Mailchimp o.ae.)',
      'Datengetriebene Arbeitsweise',
      'Projektmanagement-Faehigkeiten',
      'Kundenorientierte Kommunikation',
    ],
    benefits: [
      '100% Remote-Arbeit innerhalb Deutschlands',
      'Workation: Regelmaessige Team-Meetups an verschiedenen Orten',
      'Junges, dynamisches Startup-Umfeld',
      'Starkes Wachstum mit Gestaltungsmoeglichkeiten',
    ],
    tags: ['E-Mail Marketing', 'CRM', 'Klaviyo', 'E-Commerce'],
    category: 'marketing',
    applyUrl: 'https://join.com/companies/mailody/6058934-e-mail-marketing-crm-manager-oder-100-remote-m-w-d',
    postedAt: '2026-02-05T10:00:00Z',
    featured: false,
  },
  {
    id: '5',
    slug: 'google-managerin-seo-sea-geo-homeoffice',
    title: 'Google Manager*in (SEO, SEA, GEO) im Homeoffice',
    company: 'Tom Phillip Zenker Digital Marketing Agentur GmbH',
    companyDescription:
      'Digitale Marketing-Agentur, die WordPress- und Shopify-Websites betreut. Setzt auf langfristige Kundenpartnerschaften mit festen Teams statt typischem Agenturstress.',
    location: 'Jakobsdorf, Mecklenburg-Vorpommern (100% Remote)',
    type: 'teilzeit',
    remote: '100-remote',
    description:
      'Unterstuetze die Google-Abteilung der Agentur mit Fokus auf Google Ads, SEO, GEO und Tracking. Entwickle Google Ads-Kampagnen und Content, fuehre Recherchen durch, erstelle datengetriebene Konzepte und betreue mehrere Kundenprojekte auf Deutsch und Englisch.',
    requirements: [
      'Erfahrung im Google Marketing (SEA, SEO, GEO, Content, Anzeigenplatzierung, Tracking)',
      'Kompetenz mit Keywords und Elementor',
      'Faehigkeit, Websites von Konzept bis Fertigstellung zu gestalten',
      'Zuverlaessigkeit und hohe Eigeninitiative',
      'Aktuelle Google-Zertifizierungen bevorzugt',
    ],
    benefits: [
      '20 Stunden/Woche waehrend der Probezeit',
      'Orts- und zeitunabhaengiges Arbeiten',
      'Weiterbildungsmoeglichkeiten',
      'Kompetenzerweiterung durch eigenstaendiges Arbeiten',
      'Moeglichkeit zur Festanstellung, Vollzeit und Aufstieg',
    ],
    tags: ['SEO', 'SEA', 'Google Ads', 'Digital Marketing', 'GEO'],
    category: 'marketing',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/tom-phillip-zenker-digital-marketing-agentur-gmbh/google-managerin-seo-sea-geo-im-homeoffice-jakobsdorf-406242',
    postedAt: '2026-01-28T10:00:00Z',
    featured: false,
  },
  {
    id: '6',
    slug: 'partner-success-manager-fino',
    title: 'Partner Success Manager (all genders) - 100% Homeoffice',
    company: 'fino data services GmbH',
    companyDescription:
      'fino data services ist ein B2B-SaaS-Unternehmen mit Sitz in Kassel, das datengetriebene Loesungen fuer Partner-Enablement und -Wachstum entwickelt.',
    location: 'Kassel, Hessen (100% Homeoffice)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Verantworte das Partner-Onboarding, die Aktivierung und das Wachstumsmanagement nach Vertragsabschluss. Strukturiere skalierbare Enablement-Playbooks, stelle schnelle Partner-Produktivitaet sicher, identifiziere Expansionsmoeglichkeiten und manage Partner-Health via metrisch gesteuerte Quarterly Reviews.',
    requirements: [
      'Praktische Erfahrung in Partner Success, Customer Success oder Enablement im B2B-SaaS-Bereich',
      'Faehigkeit, skalierbare Enablement-Modelle mit klaren Aktivierungsstufen aufzubauen',
      'Datengetriebener Ansatz mit Activation Rates, Time-to-Value, NRR und Health Scores',
      'Klare, loesungsorientierte Kommunikation',
      'Selbststaendige Prioritaetensetzung',
    ],
    benefits: [
      '100% Homeoffice',
      'Klare Verantwortlichkeit und unterstuetzendes Lernumfeld',
      'Team-Events (jaehrliche Treffen, saisonale Feiern)',
      'Corporate Benefits Paket',
      'Hundefreundliche Arbeitsplaetze',
      'Bike-Leasing-Programm',
      'Direktes Feedback und kontinuierliche Entwicklung',
    ],
    tags: ['Partner Success', 'B2B', 'SaaS', 'Customer Success', 'Enablement'],
    category: 'vertrieb',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/fino-data-services-gmbh/partner-success-manager-all-genders-100-homeoffice-kassel-411824',
    postedAt: '2026-01-26T10:00:00Z',
    featured: false,
  },
  {
    id: '7',
    slug: 'customer-service-representative-social-media-concentrix',
    title: 'Customer Service Representative (m/f/d) Social Media Support - 100% Home Office',
    company: 'Concentrix GmbH',
    companyDescription:
      'Concentrix (ehemals Webhelp) ist ein weltweit fuehrendes Unternehmen fuer Technologie- und Business-Services. In Deutschland bietet Concentrix deutschlandweite 100% Homeoffice-Positionen an.',
    location: 'Deutschlandweit (100% Homeoffice)',
    type: 'vollzeit',
    remote: '100-remote',
    salary: { min: 2300, max: 2500, period: 'monat' },
    description:
      'Als Customer Service Representative im technischen Support bist du der erste Ansprechpartner fuer verschiedene Kundenanfragen - per Telefon, E-Mail oder Chat. Du unterstuetzt Kunden im Social-Media-Marketing und beraetst sie zu Werbekampagnen. Servicezeiten Montag-Sonntag 08:00-24:00 Uhr.',
    requirements: [
      'Sehr gute Deutschkenntnisse (Konversationsniveau)',
      'Fortgeschrittene Englischkenntnisse',
      'Keine Vorerfahrung noetig - 6-woechiges Vollzeit-Training inklusive',
      'Interesse an Social Media und digitaler Werbung',
      'Zuverlaessigkeit und Teamfaehigkeit',
    ],
    benefits: [
      '100% Homeoffice ab dem ersten Tag',
      'Bis zu 25 Urlaubstage und flexibles Arbeitszeitkonto',
      '6-woechiges Vollzeit-Training durch zertifizierte Trainer',
      'Mentor ab dem ersten Tag',
      'Betriebliche Altersvorsorge',
      '700 EUR Empfehlungsbonus pro erfolgreich vermitteltem Mitarbeiter',
      'Bis zu 200 EUR Leistungsbonus monatlich',
    ],
    tags: ['Customer Service', 'Social Media', 'Support', 'Homeoffice'],
    category: 'kundenservice',
    applyUrl: 'https://jobs.concentrix.com/job/tl-de-5000/',
    postedAt: '2026-02-13T10:00:00Z',
    featured: true,
  },
  {
    id: '8',
    slug: 'kundenbetreuer-inbound-automotive-europ-assistance',
    title: 'Kundenbetreuer/Kundenberater Inbound Automotive (100% Homeoffice) (w/m/d)',
    company: 'Europ Assistance Services GmbH',
    companyDescription:
      'Europ Assistance lebt nach dem Leitsatz "YOU LIVE, WE CARE" und ist immer fuer Kunden da - in den Bereichen Reise, Mobilitaet, Gesundheit und Wohnen. 100% Tochter der GENERALI Gruppe.',
    location: 'Muenchen / Rostock (100% Homeoffice)',
    type: 'vollzeit',
    remote: '100-remote',
    salary: { min: 2750, max: 3050, period: 'monat' },
    description:
      'Organisiere schnelle Hilfe fuer Kunden bei Pannen, Unfaellen oder Fahrzeugausfaellen. Du bist die erste Stimme, die beruhigt - kein Verkauf, nur echte Dienstleistung mit Verantwortung. Erstgespraech und Koordination von Pannenhilfe, Abschleppdiensten und Mietwagen.',
    requirements: [
      'Sehr gute Deutschkenntnisse und fluessige Englischkenntnisse (B2-Niveau)',
      'Bereitschaft zur Reise nach Rostock fuer Onboarding (3 Wochen, Kosten werden uebernommen)',
      'Kundenservice-Erfahrung hilfreich aber nicht zwingend - Quereinsteiger willkommen',
      'Flexibilitaet fuer Schichtarbeit inkl. Nachte, Wochenenden und Feiertage',
      'Organisationstalent und Teamfaehigkeit',
    ],
    benefits: [
      '3.000 EUR Willkommensbonus (nach 6 Monaten)',
      '30 Urlaubstage pro Jahr',
      'Digitale Lernplattform',
      'Home-Office-Ausstattung wird gestellt',
      'Fitness-Zuschuss ueber EGYM-Partnerschaft',
      'Team-Events und umfassendes Benefits-Paket',
      'Steuerfreie Schichtzulagen',
    ],
    tags: ['Kundenservice', 'Automotive', 'Inbound', 'Pannenhilfe'],
    category: 'kundenservice',
    applyUrl: 'https://europ-assistance-services-gmbh.jobs.personio.de/job/1357286?language=de',
    postedAt: '2026-02-10T10:00:00Z',
    featured: false,
  },
  {
    id: '9',
    slug: 'account-executive-smb-dach-hibob',
    title: 'Account Executive - SMB DACH (m/f/d)',
    company: 'HiBob',
    companyDescription:
      'HiBob ist eine HRIS-Plattform (Human Resources Information System), die ueber 4.000 mittelgrosse und multinationale Unternehmen bedient. Die Plattform modernisiert das HR-Management mit intuitiven Tools.',
    location: 'Berlin (Hybrid)',
    type: 'vollzeit',
    remote: 'hybrid',
    description:
      'Generiere neue Geschaeftsmoeglichkeiten in der DACH-Region durch Prospecting, Beziehungsaufbau und Management des vollstaendigen Sales-Cycles. Eigenstaendige Pipeline-Generierung von 30-40% erwartet.',
    requirements: [
      '1+ Jahre Closing-Erfahrung',
      'Track Record beim Abschluss von Deals im Wert von 50.000 USD+ mit Organisationen von 100+ Mitarbeitern',
      'Faehigkeit, 30-40% der eigenen Pipeline selbst zu generieren',
      'Fliessend Deutsch (C1-Niveau minimum)',
      'Fliessend Englisch',
    ],
    benefits: [
      'Wettbewerbsfaehige Verguetung mit Pre-IPO-Equity',
      'Unternehmensaktienoptionen',
      'Flexible hybride Arbeitsregelung',
      '30 Urlaubstage plus freier Geburtstag',
      'Vierteljährliche "Bob Balance Days" (lange Wochenenden)',
      'Home-Office-Zulage',
      '2 Social-Impact-Volunteer-Tage jaehrlich',
      '2.500 USD Empfehlungsbonus',
      'Temporaeres Remote-Arbeiten im Ausland (bis 2 Monate)',
      'Rentenversicherung',
    ],
    tags: ['Sales', 'DACH', 'HR-Tech', 'B2B', 'SaaS'],
    category: 'vertrieb',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/hibob/remote-account-executive-smb-dach-berlin-66028',
    postedAt: '2026-02-12T10:00:00Z',
    featured: false,
  },
  {
    id: '10',
    slug: 'buchhalter-teilzeit-remote-zep',
    title: 'Buchhalter (m/w/d) in Teilzeit (15-25h/Woche) - Remote',
    company: 'ZEP GmbH',
    companyDescription:
      'ZEP GmbH ist eine Remote-First-Company mit Sitz in Ditzingen, Baden-Wuerttemberg. Als Arbeitgeber legt ZEP Wert auf flexible Arbeitsmodelle und digitale Zusammenarbeit von ueberall in Deutschland.',
    location: 'Ditzingen, Baden-Wuerttemberg (Remote in ganz Deutschland)',
    type: 'teilzeit',
    remote: '100-remote',
    salary: { min: 16000, max: 32000, period: 'jahr' },
    description:
      'Eigenstaendige Bearbeitung laufender Buchhaltungsaufgaben, Kontenabstimmungen und Zahlungsueberwachung. Enge Zusammenarbeit mit der Geschaeftsfuehrung und dem Steuerberater. Erstellung transparenter Berichte fuer die Fuehrungsebene.',
    requirements: [
      'Abgeschlossene kaufmaennische Ausbildung oder vergleichbare Qualifikation',
      'Mindestens 2 Jahre Buchhaltungserfahrung mit DATEV (LucaNet-Erfahrung ist ein Plus)',
      'Sicherer Umgang mit MS Office',
      'Strukturierte, eigenstaendige und zuverlaessige Arbeitsweise',
      'Team- und Kommunikationsfaehigkeit',
    ],
    benefits: [
      '30 Tage Urlaub bei 5-Tage-Woche und unbefristete Arbeitsvertraege',
      'Home-Office-Setup-Unterstuetzung',
      'Flexible Arbeitszeiten ohne Kernzeiten',
      '50 EUR monatliche Zulage fuer Benefits oder Urban Sports Mitgliedschaft',
      'Bike-Leasing mit Arbeitgeberzuschuss',
      'Regelmaessige Teambuilding-Workshops und Events',
    ],
    tags: ['Buchhaltung', 'DATEV', 'Finanzen', 'Remote First'],
    category: 'finanzen',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/zep-gmbh/buchhalter-in-teilzeit-15-25h-woche-remote-ditzingen-34633',
    postedAt: '2026-02-06T10:00:00Z',
    featured: false,
  },
  {
    id: '11',
    slug: 'steuerfachangestellte-100-remote-taxpal',
    title: 'Steuerfachangestellte Home Office (m/w/d) - 100% Remote',
    company: 'TaxPal',
    companyDescription:
      'TaxPal ist eine auf das Gesundheitswesen spezialisierte digitale Steuerberatungskanzlei. Karriereprogression bis zum Steuerfachwirt, Steuerberater und in Fuehrungsrollen moeglich.',
    location: 'Deutschlandweit (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Als Steuerfachangestellte/r im Home Office unterstuetzt du Aerzte und Gesundheitsfachkraefte bei ihren steuerlichen Verpflichtungen und hilfst ihnen, buerokratische Huerden zu meistern. Unbefristeter Vertrag.',
    requirements: [
      'Abgeschlossene Ausbildung als Steuerfachangestellte/r oder vergleichbare Qualifikation',
      'Erfahrung in der Mandantenberatung',
      'Vertrautheit mit DATEV, ADDISON oder aehnlicher Software',
      'Digitale Affinitaet und selbststaendige Arbeitsweise',
    ],
    benefits: [
      '100% Remote-Arbeit von ueberall in Deutschland',
      'Unbefristeter Arbeitsvertrag',
      'Karrierepfad bis Steuerfachwirt und Steuerberater',
      'Moderne digitale Arbeitsweise',
      'Sinnstiftende Arbeit im Gesundheitssektor',
    ],
    tags: ['Steuern', 'DATEV', 'Gesundheitswesen', 'Steuerberatung'],
    category: 'finanzen',
    applyUrl: 'https://taxpal.de/karriere/steuerfachangestellte-home-office/',
    postedAt: '2026-02-15T10:00:00Z',
    featured: false,
  },
  {
    id: '12',
    slug: 'berater-consultant-energiewirtschaft-hsag',
    title: 'Berater / Consultant (w/m/d) Energiewirtschaft - Remote / Homeoffice',
    company: 'hsag Heidelberger Services AG',
    companyDescription:
      'hsag Heidelberger Services AG ist ein deutsches Service- und Beratungsunternehmen fuer die Energiebranche mit ueber 600 Mitarbeitern. Sie bieten Business Process Outsourcing, Abrechnung, System- und Managementberatung sowie digitale Loesungen.',
    location: 'Bundesweit (Muenster, Gera, Chemnitz, Essen, Heidelberg, Halle, Magdeburg, Walldorf)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Unterstuetze Kunden der Energiebranche bei ihren Engpassprozessen und identifiziere schnell umsetzbare Verbesserungen. Beratung in den Systemen SAP IS-U, Schleupen, Wilken oder Powercloud. Arbeite von dort, wo du dich am wohlsten fuehlst.',
    requirements: [
      'Erste praktische Projektmanagement- und/oder Beratungskenntnisse',
      'Erfahrung mit energiewirtschaftlichen Systemen (SAP IS-U, Schleupen, Wilken oder Powercloud)',
      'Kommunikationsstaerke und Beratungskompetenz',
      'Analytisches Denken und eigenstaendige Arbeitsweise',
    ],
    benefits: [
      'Unbefristeter Arbeitsvertrag ab dem ersten Tag',
      'Flexible Arbeitszeitmodelle (Voll- oder Teilzeit)',
      'Bundesweites Homeoffice in ganz Deutschland',
      'Hauseigene hsag Academy fuer Weiterbildung',
      'Arbeitgeberfinanzierte betriebliche Altersvorsorge',
      'Steuerfreier Kommunikationszuschuss',
      'Corporate Benefits und Praemien fuer Mitarbeiterempfehlungen',
      'Zuschuss zum Deutschlandticket',
      'Standortuebergreifende Firmenfeiern',
      'Gesundheitsmanagement-Programme',
    ],
    tags: ['SAP', 'Energiewirtschaft', 'Consulting', 'Beratung'],
    category: 'beratung',
    applyUrl: 'https://hsag.softgarden.io/job/6802561/Berater-Consultant-w-m-d-Energiewirtschaft-Systeme-SAP-IS-U,-Schleupen,-Wilken-oder-Powercloud?l=de',
    postedAt: '2026-02-07T10:00:00Z',
    featured: false,
  },
  {
    id: '13',
    slug: 'recruiting-partner-projektbasis-global-treats',
    title: 'Recruiting Partner (m/w/d) - Projektbasis (Remote)',
    company: 'Global Treats GmbH',
    companyDescription:
      'Global Treats ist die Firma hinter "Vernasche die Welt" - der angesagten Marke fuer internationale Suessigkeiten und Snacks. Ein wachsendes D2C-Startup mit einer Social-Media-affinen Community.',
    location: 'Wuetöschingen, Baden-Wuerttemberg (100% Remote)',
    type: 'freelance',
    remote: '100-remote',
    description:
      'Unterstuetze bei der Erstellung und Optimierung von Stellenanzeigen, Screening und Vorauswahl von Bewerbungen, fuehre erste und zweite Interviews remote durch, erstelle strukturierte Kandidatenbewertungen und arbeite eng mit der Geschaeftsfuehrung zusammen.',
    requirements: [
      'Erfahrung in Recruiting, Talent Acquisition oder HR',
      'Starke zwischenmenschliche Faehigkeiten und Potenzial-Einschaetzung',
      'Strukturierte, professionelle Interviewfuehrung',
      'Eigenstaendige und verantwortungsvolle Arbeitsweise',
      'Fliessend Deutsch; Englisch bevorzugt',
      'Flexible Zeiteinteilung je nach Recruiting-Bedarf',
    ],
    benefits: [
      'Flexible Arbeitszeiten',
      '100% Remote-Arbeit',
      'Startdatum verhandelbar',
      'Verguetung auf Stunden- oder Projektbasis',
      'Einblick in ein wachsendes D2C-Startup',
    ],
    tags: ['Recruiting', 'HR', 'Talent Acquisition', 'Freelance'],
    category: 'hr',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/global-treats-gmbh/recruiting-partner-projektbasis-remote-wutoschingen-469876',
    postedAt: '2026-02-18T10:00:00Z',
    featured: false,
  },
  {
    id: '14',
    slug: 'kundenberater-kreditabsicherung-homeoffice-smava',
    title: 'Kundenberater - Kreditabsicherung im Homeoffice (w/m/d)',
    company: 'Smava GmbH',
    companyDescription:
      'Smava ist ein fuehrendes deutsches FinTech-Unternehmen und Online-Kreditvergleichsportal mit Sitz in Berlin. Ueber 50 Nationen sind im Team vertreten.',
    location: 'Berlin (100% Homeoffice deutschlandweit)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Berate Kunden nach Kreditabschluss zu Kreditversicherungsprodukten. Identifiziere individuelle Kundenbeduerfnisse und biete massgeschneiderte Loesungen ueber interne Systeme. Kein Cold Calling - Kunden erwarten deine Beratung.',
    requirements: [
      'Erfahrung im Vertrieb, Kundenkontakt oder Telesales',
      'Serviceorientierte Denkweise mit Leidenschaft fuer Kreditprodukte',
      'Starke Kommunikationsfaehigkeiten und professionelles Auftreten am Telefon',
      'Hohe Zuverlaessigkeit und engagierte Arbeitsweise',
      'Motivation zur beruflichen Weiterentwicklung',
      'Idealerweise abgeschlossene kaufmaennische Ausbildung',
    ],
    benefits: [
      'Ungedeckeltes Provisionsmodell',
      'Interne Karriereprogramme und Coaching',
      '30 Urlaubstage; Eltern erhalten 10 zusaetzliche Krankheitstage',
      'Partnerschaften mit Fitnessanbietern',
      'Vollstaendig digitales Onboarding mit Ausstattung vor Arbeitsbeginn',
      'Diverses, inklusives Arbeitsumfeld (50+ Nationen)',
    ],
    tags: ['Vertrieb', 'Finanzberatung', 'Kredit', 'FinTech'],
    category: 'vertrieb',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/smava-gmbh/kundenberater-kreditabsicherung-im-homeoffice-berlin-5329',
    postedAt: '2026-02-11T10:00:00Z',
    featured: false,
  },
  {
    id: '15',
    slug: 'senior-ui-ux-designer-remote-dexter-health',
    title: 'Senior UI/UX Designer - Remote',
    company: 'dexter health',
    companyDescription:
      'dexter health entwickelt Dexter Mobile, ein Produkt das taeglich von tausenden Pflegekraeften genutzt wird. Das Unternehmen hat seinen Sitz in Koeln und arbeitet vollstaendig remote.',
    location: 'Koeln (Fully Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Verantworte UX und UI von Dexter Mobile. Erstelle Flows, Wireframes, Prototypen und finale UI-Designs in Figma fuer iOS und Android. Redesigne zentrale Pflege-Workflows wie Dokumentation, Schichtplanung und Uebergaben.',
    requirements: [
      'Starke Erfahrung im Design mobiler Apps',
      'Fortgeschrittene Figma-Kenntnisse (Komponenten, Auto-Layout, Design-Systeme)',
      'Erfahrung mit User Research und Usability Testing',
      'Portfolio mit nachweisbaren Mobile UX/UI Projekten',
      'Eigenstaendige Arbeitsweise in einem Remote-Team',
    ],
    benefits: [
      'Vollstaendig remote arbeiten',
      'Sinnstiftende Arbeit im Gesundheits- und Pflegebereich',
      'Eigenverantwortung ueber das komplette UX/UI',
      'Moderner Tech-Stack mit Figma',
    ],
    tags: ['UX', 'UI', 'Figma', 'Mobile Design', 'HealthTech'],
    category: 'design',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/dexter-health/senior-ui-ux-designer-remote-cologne-434253',
    postedAt: '2026-02-09T10:00:00Z',
    featured: true,
  },
  {
    id: '16',
    slug: 'project-manager-energy-industry-bpo-hsag',
    title: 'Project Manager (m/f/d) Energy Industry / BPO - Remote',
    company: 'hsag Heidelberger Services AG',
    companyDescription:
      'hsag Heidelberger Services AG ist ein deutsches Service- und Beratungsunternehmen mit ueber 600 Mitarbeitern, spezialisiert auf die Energiebranche. Business Process Outsourcing, Abrechnung und digitale Loesungen.',
    location: 'Bundesweit (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Operatives Projektmanagement in Business Process Outsourcing-Projekten der Energiebranche. Ueberwache die Einhaltung vereinbarter Service Level Agreements, plane den operativen Geschaeftsbetrieb und stelle eine reibungslose Zusammenarbeit mit Kunden sicher. Internes Bindeglied zwischen einzelnen Service- und Fachteams.',
    requirements: [
      '3-5 Jahre Erfahrung im Projektmanagement',
      'Erfahrung im BPO- oder Energiebereich von Vorteil',
      'Wirtschaftliche Verantwortung fuer Projektergebnisse',
      'Kommunikationsstaerke und Koordinationsfaehigkeit',
      'Analytisches Denken',
    ],
    benefits: [
      'Unbefristeter Arbeitsvertrag ab dem ersten Tag',
      'Flexible Arbeitszeitmodelle (Voll- oder Teilzeit)',
      'Bundesweites Homeoffice',
      'hsag Academy fuer Weiterbildung',
      'Betriebliche Altersvorsorge',
      'Zuschuss zum Deutschlandticket',
      'Corporate Benefits',
      'Gesundheitsmanagement',
    ],
    tags: ['Projektmanagement', 'Energie', 'BPO', 'Service Level'],
    category: 'projektmanagement',
    applyUrl: 'https://remotive.com/remote/jobs/project-management/project-manager-m-f-d-energy-industry-bpo-3604964',
    postedAt: '2026-02-16T10:00:00Z',
    featured: false,
  },
  {
    id: '17',
    slug: 'assistenz-geschaeftsfuehrung-homeoffice-bitefex',
    title: 'Assistenz der Geschaeftsfuehrung | Homeoffice | Berlin',
    company: 'BITEFEX GmbH',
    companyDescription:
      'BITEFEX ist ein kleines Team von IT-Spezialisten, das kleinen und mittelstaendischen Unternehmen hilft, IT-Risiken zu reduzieren und Arbeitsprozesse zu optimieren.',
    location: 'Berlin (Homeoffice)',
    type: 'teilzeit',
    remote: '100-remote',
    description:
      'Erstelle und versende Rechnungen, pruefe und buche eingehende Rechnungen, bereite Mahnungen vor, ordne Belege Kontobewegungen zu und bereite Ueberweisungen vor. Agiere als administrativer Ansprechpartner fuer Mitarbeiter und halte Kontakt zum Steuerberater und zur Lohnbuchhaltung. 20 Stunden pro Woche.',
    requirements: [
      'Buchhaltungs- oder Verwaltungserfahrung bevorzugt',
      'Starke PC-Kenntnisse (MS Outlook, Word, Excel)',
      'Deutschkenntnisse auf Muttersprachenniveau',
      'Strukturierte, eigenstaendige Arbeitsweise',
      'Zuverlaessigkeit und Genauigkeit',
      'Fuehrerschein Klasse B bevorzugt',
      'Wohnsitz in oder nahe Berlin',
    ],
    benefits: [
      'Flexible Arbeitszeiten (9-16 Uhr, nach Vereinbarung)',
      'Homeoffice-Arbeitsplatz',
      'Abwechslungsreiche Taetigkeiten in einem kleinen Team',
    ],
    tags: ['Assistenz', 'Buchhaltung', 'Administration', 'Teilzeit'],
    category: 'sonstiges',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/bitefex-gmbh/assistenz-der-geschaftsfuhrung-homeoffice-berlin-305785',
    postedAt: '2026-02-03T10:00:00Z',
    featured: false,
  },
  {
    id: '18',
    slug: 'customer-communications-agent-remote-lightup',
    title: 'Customer Communications Agent - 100% Remote (French & German)',
    company: 'Lightup Network Solutions GmbH & Co. KG',
    companyDescription:
      'Lightup Network Solutions ist ein Telekommunikations- und Internetdienstleister mit Sitz in Frankfurt, Deutschland. Gegruendet 1998, betreiben sie seit ueber 25 Jahren verschiedene Kommunikationsdienste mit einem vollstaendig remote arbeitenden internationalen Team.',
    location: 'Frankfurt am Main (100% Remote)',
    type: 'teilzeit',
    remote: '100-remote',
    salary: { min: 1000, max: 1000, period: 'monat' },
    description:
      'Arbeite als 100% Remote Customer Communications Agent - 4 Stunden pro Tag (CET-Zeitzone). Unterstuetze im Bereich Monitoring und proaktiver Kundenkommunikation. Sicherheit, Servicequalitaet und Kundenbetreuung stehen im Vordergrund.',
    requirements: [
      'Fliessende Franzoesisch- UND Deutschkenntnisse',
      'Erfahrung in der Kundenkommunikation',
      'Verfuegbarkeit fuer 4 Stunden/Tag in der CET-Zeitzone',
      'Zuverlaessigkeit und selbststaendige Arbeitsweise',
    ],
    benefits: [
      '100% Remote-Arbeit',
      'Internationales Team',
      'Flexibles Teilzeitmodell (4h/Tag)',
      'Stabiles Unternehmen mit 25+ Jahren Geschichte',
    ],
    tags: ['Customer Service', 'Telekommunikation', 'Bilingual', 'Teilzeit'],
    category: 'kundenservice',
    applyUrl: 'https://weworkremotely.com/remote-jobs/lightup-network-solutions-gmbh-co-kg-customer-communications-agent-100-remote-french',
    postedAt: '2026-02-17T10:00:00Z',
    featured: false,
  },
]

export function getAllJobs(): Job[] {
  return jobs
}

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug)
}

export function getFeaturedJobs(): Job[] {
  return jobs.filter((job) => job.featured)
}

export function getJobsByCategory(category: JobCategory): Job[] {
  return jobs.filter((job) => job.category === category)
}

export function searchJobs(query: string): Job[] {
  const lower = query.toLowerCase()
  return jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(lower) ||
      job.company.toLowerCase().includes(lower) ||
      job.description.toLowerCase().includes(lower) ||
      job.tags.some((tag) => tag.toLowerCase().includes(lower)) ||
      job.location.toLowerCase().includes(lower)
  )
}

export function filterJobs(filters: {
  query?: string
  category?: JobCategory
  type?: JobType
  remote?: RemoteType
}): Job[] {
  let result = jobs

  if (filters.query) {
    const lower = filters.query.toLowerCase()
    result = result.filter(
      (job) =>
        job.title.toLowerCase().includes(lower) ||
        job.company.toLowerCase().includes(lower) ||
        job.description.toLowerCase().includes(lower) ||
        job.tags.some((tag) => tag.toLowerCase().includes(lower)) ||
        job.location.toLowerCase().includes(lower)
    )
  }

  if (filters.category) {
    result = result.filter((job) => job.category === filters.category)
  }

  if (filters.type) {
    result = result.filter((job) => job.type === filters.type)
  }

  if (filters.remote) {
    result = result.filter((job) => job.remote === filters.remote)
  }

  // Sort: featured first, then by date
  result.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
  })

  return result
}

export function getJobCategories(): { category: JobCategory; count: number }[] {
  const counts = new Map<JobCategory, number>()
  jobs.forEach((job) => {
    counts.set(job.category, (counts.get(job.category) || 0) + 1)
  })
  return Array.from(counts.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count)
}

export function getTotalJobCount(): number {
  return jobs.length
}

export function getCompanyCount(): number {
  return new Set(jobs.map((job) => job.company)).size
}
