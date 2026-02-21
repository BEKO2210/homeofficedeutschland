import { Job, JobCategory, JobType, RemoteType } from './types'

// Sample job listings for platform launch
// These represent the types of positions commonly posted on German remote job boards
const jobs: Job[] = [
  {
    id: '1',
    slug: 'senior-frontend-entwickler-react-typescript',
    title: 'Senior Frontend-Entwickler (React/TypeScript)',
    company: 'CloudBridge Solutions',
    companyDescription:
      'CloudBridge Solutions ist ein wachsendes SaaS-Unternehmen aus Berlin, das Cloud-Management-Tools für den europäischen Markt entwickelt.',
    location: 'Berlin (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    salary: { min: 65000, max: 85000, period: 'jahr' },
    description:
      'Wir suchen einen erfahrenen Frontend-Entwickler, der unsere Cloud-Management-Plattform weiterentwickelt. Du arbeitest in einem agilen Team und bist verantwortlich für die Architektur und Umsetzung neuer Features mit React und TypeScript.',
    requirements: [
      'Mindestens 4 Jahre Erfahrung mit React und TypeScript',
      'Erfahrung mit State-Management (Redux, Zustand oder ähnlich)',
      'Kenntnisse in Testing (Jest, React Testing Library)',
      'Erfahrung mit REST-APIs und GraphQL',
      'Gute Deutsch- und Englischkenntnisse',
    ],
    benefits: [
      '100% Remote-Arbeit von überall in Deutschland',
      '30 Tage Urlaub',
      'Budget für Home-Office-Ausstattung (1.500€)',
      'Regelmäßige Team-Events (4x/Jahr vor Ort)',
      'Weiterbildungsbudget (2.000€/Jahr)',
      'Betriebliche Altersvorsorge',
    ],
    tags: ['React', 'TypeScript', 'Frontend', 'SaaS'],
    category: 'entwicklung',
    applyEmail: 'jobs@example.com',
    postedAt: '2026-02-19T10:00:00Z',
    featured: true,
  },
  {
    id: '2',
    slug: 'content-marketing-manager',
    title: 'Content Marketing Manager',
    company: 'GreenTech Digital',
    companyDescription:
      'GreenTech Digital ist eine Agentur für nachhaltiges digitales Marketing mit Sitz in München. Wir helfen Unternehmen, ihre grüne Botschaft authentisch zu kommunizieren.',
    location: 'München (Hybrid)',
    type: 'vollzeit',
    remote: 'hybrid',
    salary: { min: 45000, max: 60000, period: 'jahr' },
    description:
      'Als Content Marketing Manager bist du verantwortlich für die Content-Strategie unserer Kunden im Bereich Nachhaltigkeit. Du erstellst redaktionelle Pläne, schreibst Blogartikel und steuerst die Social-Media-Kanäle.',
    requirements: [
      'Mindestens 3 Jahre Erfahrung im Content Marketing',
      'Exzellente Deutschkenntnisse (Muttersprachenniveau)',
      'Erfahrung mit SEO-Tools (Ahrefs, SEMrush o.ä.)',
      'Kenntnisse in Social Media Management',
      'Affinität zu Nachhaltigkeitsthemen',
    ],
    benefits: [
      '3 Tage Remote, 2 Tage Büro München',
      '28 Tage Urlaub + Brückentage frei',
      'Jobrad-Leasing',
      'Deutschlandticket',
      'Regelmäßige Weiterbildungen',
    ],
    tags: ['Content', 'SEO', 'Social Media', 'Marketing'],
    category: 'marketing',
    applyEmail: 'karriere@example.com',
    postedAt: '2026-02-18T14:00:00Z',
    featured: false,
  },
  {
    id: '3',
    slug: 'ux-ui-designer-produktdesign',
    title: 'UX/UI Designer – Produktdesign',
    company: 'FinFlow GmbH',
    companyDescription:
      'FinFlow entwickelt innovative FinTech-Lösungen für KMUs. Unser Produkt vereinfacht die Buchhaltung und Rechnungsstellung für kleine Unternehmen.',
    location: 'Hamburg (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    salary: { min: 55000, max: 75000, period: 'jahr' },
    description:
      'Gestalte die Zukunft unserer FinTech-Plattform. Als UX/UI Designer bist du für das komplette Produktdesign verantwortlich – von der Nutzerforschung über Wireframes bis zum finalen Interface.',
    requirements: [
      'Mindestens 3 Jahre Erfahrung im Produktdesign',
      'Sicherer Umgang mit Figma',
      'Erfahrung mit Design-Systemen',
      'Portfolio mit nachweisbaren UX-Projekten',
      'Grundverständnis von HTML/CSS ist ein Plus',
    ],
    benefits: [
      'Vollständig remote von überall in der EU',
      '30 Tage Urlaub',
      'Neueste Apple-Hardware',
      'Flexibles Arbeitszeitmodell',
      'Jährliche Workation (1 Woche)',
    ],
    tags: ['Figma', 'UX', 'UI', 'Produktdesign'],
    category: 'design',
    applyEmail: 'design-jobs@example.com',
    postedAt: '2026-02-20T09:00:00Z',
    featured: true,
  },
  {
    id: '4',
    slug: 'customer-success-manager',
    title: 'Customer Success Manager',
    company: 'DataPulse Analytics',
    companyDescription:
      'DataPulse Analytics bietet eine KI-gestützte Analytics-Plattform für E-Commerce-Unternehmen. Wir helfen Online-Händlern, datenbasierte Entscheidungen zu treffen.',
    location: 'Remote (DACH-Region)',
    type: 'vollzeit',
    remote: '100-remote',
    salary: { min: 40000, max: 55000, period: 'jahr' },
    description:
      'Als Customer Success Manager betreust du unsere Bestandskunden und hilfst ihnen, das Maximum aus unserer Analytics-Plattform herauszuholen. Du bist die Brücke zwischen Kunden und Produktteam.',
    requirements: [
      '2+ Jahre Erfahrung im Customer Success oder Account Management',
      'Erfahrung im SaaS-Umfeld',
      'Ausgezeichnete Kommunikationsfähigkeiten auf Deutsch und Englisch',
      'Analytisches Denkvermögen',
      'Erfahrung mit CRM-Systemen (HubSpot, Salesforce)',
    ],
    benefits: [
      '100% Remote in der DACH-Region',
      '28 Tage Urlaub',
      'Quartalsweise Team-Meetups',
      'Persönliches Weiterbildungsbudget',
      'Flexible Arbeitszeiten (Kernzeit 10-15 Uhr)',
    ],
    tags: ['SaaS', 'Customer Success', 'CRM', 'Analytics'],
    category: 'kundenservice',
    applyEmail: 'hiring@example.com',
    postedAt: '2026-02-17T16:00:00Z',
    featured: false,
  },
  {
    id: '5',
    slug: 'backend-entwickler-python-django',
    title: 'Backend-Entwickler (Python/Django)',
    company: 'MedTech Connect',
    companyDescription:
      'MedTech Connect entwickelt digitale Gesundheitslösungen, die Patienten und Ärzte vernetzen. Unsere Telemedizin-Plattform wird von über 500 Praxen genutzt.',
    location: 'Köln (Teilweise Remote)',
    type: 'vollzeit',
    remote: 'teilweise-remote',
    salary: { min: 60000, max: 80000, period: 'jahr' },
    description:
      'Entwickle mit uns die nächste Generation unserer Telemedizin-Plattform. Du arbeitest an der Backend-Architektur, APIs und Datenbank-Optimierungen in einem regulierten Umfeld.',
    requirements: [
      '3+ Jahre Erfahrung mit Python und Django',
      'Erfahrung mit PostgreSQL und Redis',
      'Kenntnisse in Docker und CI/CD',
      'Verständnis für Datenschutz und DSGVO',
      'Idealerweise Erfahrung im Gesundheitswesen',
    ],
    benefits: [
      '3 Tage Remote, flexible Bürotage in Köln',
      '30 Tage Urlaub',
      'Sinnstiftende Arbeit im Gesundheitssektor',
      'Moderne Tech-Stack',
      'Teamfrühstück und -lunch im Büro',
    ],
    tags: ['Python', 'Django', 'PostgreSQL', 'HealthTech'],
    category: 'entwicklung',
    applyEmail: 'tech@example.com',
    postedAt: '2026-02-16T11:00:00Z',
    featured: false,
  },
  {
    id: '6',
    slug: 'head-of-people-and-culture',
    title: 'Head of People & Culture',
    company: 'ScaleUp Ventures',
    companyDescription:
      'ScaleUp Ventures ist ein Venture-Capital-Unternehmen, das in europäische B2B-SaaS-Startups investiert. Wir sind ein 30-köpfiges Team verteilt über ganz Deutschland.',
    location: 'Deutschlandweit (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    salary: { min: 70000, max: 95000, period: 'jahr' },
    description:
      'Baue unsere People & Culture Abteilung auf. Du bist verantwortlich für Recruiting, Personalentwicklung, Culture-Initiativen und die HR-Strategie eines wachsenden Remote-First-Unternehmens.',
    requirements: [
      '5+ Jahre Erfahrung im HR-Bereich',
      'Erfahrung mit Remote-Teams und verteilter Arbeit',
      'Kenntnisse im deutschen Arbeitsrecht',
      'Erfahrung mit HR-Tools (Personio, BambooHR o.ä.)',
      'Hands-on-Mentalität und strategisches Denken',
    ],
    benefits: [
      'Vollständig remote mit jährlichem Team-Offsite',
      '30 Tage Urlaub + Sabbatical-Option nach 3 Jahren',
      'VSOP/Mitarbeiterbeteiligung',
      'Premium-Homeoffice-Ausstattung',
      'Coaching und Mentoring',
    ],
    tags: ['HR', 'People', 'Culture', 'Remote-First'],
    category: 'hr',
    applyEmail: 'people@example.com',
    postedAt: '2026-02-21T08:00:00Z',
    featured: true,
  },
  {
    id: '7',
    slug: 'freelance-grafik-designer',
    title: 'Freelance Grafik-Designer',
    company: 'BrandNeu Studio',
    companyDescription:
      'BrandNeu Studio ist eine Branding-Agentur, die sich auf Startups und Tech-Unternehmen spezialisiert hat. Wir arbeiten vollständig remote mit einem Netzwerk aus kreativen Freelancern.',
    location: 'Remote',
    type: 'freelance',
    remote: '100-remote',
    salary: { min: 50, max: 80, period: 'stunde' },
    description:
      'Wir suchen einen talentierten Freelance-Grafik-Designer für regelmäßige Projekte. Du erstellst Brand Identities, Präsentationen, Social-Media-Assets und Marketing-Materialien für unsere Startup-Kunden.',
    requirements: [
      'Starkes Portfolio im Bereich Branding und Corporate Design',
      'Sicherer Umgang mit Adobe Creative Suite und Figma',
      'Erfahrung mit Brand Guidelines und Design-Systemen',
      'Zuverlässigkeit und gutes Zeitmanagement',
      'Gewerbeschein vorhanden',
    ],
    benefits: [
      'Flexible Projektarbeit (ca. 15-25 Stunden/Woche)',
      'Langfristige Zusammenarbeit möglich',
      'Spannende Startup-Kunden',
      'Kreative Freiheit',
      'Faire Vergütung und schnelle Zahlung',
    ],
    tags: ['Grafik', 'Branding', 'Freelance', 'Adobe', 'Figma'],
    category: 'design',
    applyEmail: 'creative@example.com',
    postedAt: '2026-02-15T13:00:00Z',
    featured: false,
  },
  {
    id: '8',
    slug: 'devops-engineer-kubernetes',
    title: 'DevOps Engineer (Kubernetes/AWS)',
    company: 'InfraScale',
    companyDescription:
      'InfraScale ist ein Cloud-Infrastruktur-Dienstleister, der mittelständischen Unternehmen beim Cloud-Aufbau hilft. Wir sind ein remote-first Team aus 45 Personen.',
    location: 'Deutschlandweit (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    salary: { min: 70000, max: 90000, period: 'jahr' },
    description:
      'Als DevOps Engineer baust und betreibst du Kubernetes-Cluster auf AWS für unsere Kunden. Du automatisierst Deployments, optimierst CI/CD-Pipelines und sorgst für zuverlässige Infrastruktur.',
    requirements: [
      '3+ Jahre Erfahrung mit Kubernetes und AWS',
      'Kenntnisse in Terraform und Infrastructure-as-Code',
      'Erfahrung mit CI/CD (GitLab CI, GitHub Actions)',
      'Linux-Systemadministration',
      'Monitoring-Erfahrung (Prometheus, Grafana)',
    ],
    benefits: [
      '100% Remote mit flexibler Zeiteinteilung',
      '30 Tage Urlaub',
      'AWS-Zertifizierungen werden bezahlt',
      'Konferenzbudget',
      'Top-Hardware nach Wahl',
    ],
    tags: ['DevOps', 'Kubernetes', 'AWS', 'Terraform'],
    category: 'entwicklung',
    applyEmail: 'devops@example.com',
    postedAt: '2026-02-20T15:00:00Z',
    featured: false,
  },
  {
    id: '9',
    slug: 'online-marketing-teilzeit',
    title: 'Online Marketing Manager (Teilzeit)',
    company: 'ShopLocal24',
    companyDescription:
      'ShopLocal24 ist eine E-Commerce-Plattform, die lokale Händler beim Online-Verkauf unterstützt. Wir verbinden stationären Handel mit digitalem Vertrieb.',
    location: 'Stuttgart (Hybrid)',
    type: 'teilzeit',
    remote: 'hybrid',
    salary: { min: 22, max: 28, period: 'stunde' },
    description:
      'In Teilzeit (20 Stunden/Woche) betreust du unsere Online-Marketing-Kanäle. Du managst Google Ads- und Meta-Kampagnen, analysierst die Performance und optimierst kontinuierlich unsere Marketingausgaben.',
    requirements: [
      '2+ Jahre Erfahrung im Performance Marketing',
      'Erfahrung mit Google Ads und Meta Business Suite',
      'Analytisches Denken und Umgang mit Daten',
      'Kenntnisse in Google Analytics / GA4',
      'Eigenständige Arbeitsweise',
    ],
    benefits: [
      '20 Stunden/Woche mit flexibler Zeiteinteilung',
      '2-3 Tage Remote möglich',
      'Modernes Büro in Stuttgart City',
      'Mitarbeiterrabatte',
      'Familienfreundliche Arbeitszeiten',
    ],
    tags: ['Google Ads', 'Meta Ads', 'Performance', 'E-Commerce'],
    category: 'marketing',
    applyEmail: 'marketing@example.com',
    postedAt: '2026-02-14T10:00:00Z',
    featured: false,
  },
  {
    id: '10',
    slug: 'projektmanager-digital',
    title: 'Digitaler Projektmanager',
    company: 'WebWerk Agentur',
    companyDescription:
      'WebWerk ist eine Digitalagentur aus Frankfurt, die für namhafte Kunden Web-Projekte, Apps und digitale Strategien entwickelt.',
    location: 'Frankfurt (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    salary: { min: 50000, max: 65000, period: 'jahr' },
    description:
      'Du steuerst Web- und App-Projekte von der Konzeption bis zum Launch. Dabei koordinierst du Designer, Entwickler und Kunden, behältst Budgets und Timelines im Blick und sorgst für erstklassige Ergebnisse.',
    requirements: [
      '3+ Jahre Erfahrung im digitalen Projektmanagement',
      'Erfahrung mit agilen Methoden (Scrum, Kanban)',
      'Sicherer Umgang mit Projekttools (Jira, Asana, Notion)',
      'Technisches Grundverständnis (Web-Technologien)',
      'Kommunikationsstärke auf Deutsch und Englisch',
    ],
    benefits: [
      'Vollständig remote oder bei Bedarf im Frankfurter Büro',
      '28 Tage Urlaub',
      'Abwechslungsreiche Kundenprojekte',
      'Flache Hierarchien und kurze Entscheidungswege',
      'Regelmäßige Teamevents',
    ],
    tags: ['Projektmanagement', 'Agile', 'Scrum', 'Digital'],
    category: 'projektmanagement',
    applyEmail: 'pm@example.com',
    postedAt: '2026-02-13T09:00:00Z',
    featured: false,
  },
  {
    id: '11',
    slug: 'sales-development-representative',
    title: 'Sales Development Representative (SDR)',
    company: 'PipelineHQ',
    companyDescription:
      'PipelineHQ entwickelt eine Sales-Intelligence-Plattform für B2B-Vertriebsteams. Wir helfen Unternehmen, effizienter zu verkaufen.',
    location: 'Remote (DACH)',
    type: 'vollzeit',
    remote: '100-remote',
    salary: { min: 35000, max: 45000, period: 'jahr' },
    description:
      'Als SDR bist du verantwortlich für die Erstansprache und Qualifizierung von Leads. Du arbeitest eng mit dem Sales-Team zusammen und identifizierst potenzielle Kunden durch Research und Outreach.',
    requirements: [
      'Erste Erfahrung im B2B-Vertrieb oder starke Motivation für den Einstieg',
      'Ausgezeichnete kommunikative Fähigkeiten',
      'Fließendes Deutsch und gutes Englisch',
      'Erfahrung mit LinkedIn und Sales-Tools ist ein Plus',
      'Hohe Eigenmotivation und Zielorientierung',
    ],
    benefits: [
      '100% Remote mit flexiblen Arbeitszeiten',
      'Attraktives Provisionsmodell on top',
      'Umfassendes Sales-Training und Coaching',
      'Karrierepfad zum Account Executive',
      'Modernste Sales-Tools (eigene Plattform + HubSpot)',
    ],
    tags: ['Sales', 'B2B', 'SaaS', 'Outbound'],
    category: 'vertrieb',
    applyEmail: 'sales-jobs@example.com',
    postedAt: '2026-02-19T12:00:00Z',
    featured: false,
  },
  {
    id: '12',
    slug: 'buchhalter-remote-teilzeit',
    title: 'Buchhalter/in (Remote, Teilzeit)',
    company: 'TaxEasy GmbH',
    companyDescription:
      'TaxEasy ist eine moderne Steuerberatungskanzlei, die Buchhaltung und Steuerberatung digital anbietet. Unsere Mandanten sind überwiegend Startups und Freelancer.',
    location: 'Remote',
    type: 'teilzeit',
    remote: '100-remote',
    salary: { min: 20, max: 30, period: 'stunde' },
    description:
      'Du übernimmst die laufende Buchhaltung für unsere Mandanten (vorwiegend Startups und Freelancer) mithilfe von DATEV und modernen Cloud-Tools. Flexible Zeiteinteilung mit ca. 20 Stunden pro Woche.',
    requirements: [
      'Abgeschlossene Ausbildung als Steuerfachangestellte/r oder vergleichbar',
      'Erfahrung mit DATEV',
      'Sicherer Umgang mit digitalen Tools',
      'Gewissenhaftigkeit und Genauigkeit',
      'Eigenständige Arbeitsweise',
    ],
    benefits: [
      'Vollständig remote mit flexibler Zeiteinteilung',
      'Moderne Cloud-Buchhaltung statt Papierberge',
      'Junge, digitale Mandanten',
      'Weiterbildungsmöglichkeiten',
      'Langfristige Zusammenarbeit gewünscht',
    ],
    tags: ['Buchhaltung', 'DATEV', 'Steuern', 'Finanzen'],
    category: 'finanzen',
    applyEmail: 'jobs@example.com',
    postedAt: '2026-02-12T14:00:00Z',
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
