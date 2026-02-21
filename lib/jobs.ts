import { Job, JobCategory, JobType, RemoteType } from './types'

// Real job listings sourced from German remote job boards
// Sources: arbeitnow.com, remotive.com, jobicy.com
// Last updated: February 2026
const jobs: Job[] = [
  {
    id: '1',
    slug: 'ai-cloud-infrastructure-generalist-shopware',
    title: 'AI-Native Cloud Infrastructure Generalist (m/f/d)',
    company: 'shopware AG',
    companyDescription:
      'shopware AG ist ein fuhrender deutscher E-Commerce-Plattform-Anbieter mit Hauptsitz in Schoppingen. Die Open-Source-Plattform wird von tausenden Handlern weltweit genutzt.',
    location: 'Deutschland (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Join the Agentic Commerce Lab startup team to build AI infrastructure. This role operates with end-to-end ownership from concept to production, requiring full-stack infrastructure expertise and comfort with emerging AI tooling. Du baust KI-Infrastruktur fur E-Commerce der nachsten Generation.',
    requirements: [
      'Erfahrung mit Cloud-Infrastruktur und Kubernetes',
      'Fullstack-Verstandnis (Backend & Frontend)',
      'Kenntnisse in AI/ML und LLM-Integration',
      'Erfahrung mit Serverless und GPU-basierter Infrastruktur',
      'Sicherheitsbewusstsein und DevOps-Mentalitat',
    ],
    benefits: [
      '100% Remote innerhalb Europas',
      'Startup-Atmosphare in einem etablierten Unternehmen',
      'Arbeit an cutting-edge AI-Technologie',
      'Flexible Arbeitszeiten',
      'Weiterbildungsbudget',
    ],
    tags: ['Kubernetes', 'AI/ML', 'Cloud', 'Fullstack', 'E-Commerce'],
    category: 'entwicklung',
    applyUrl: 'https://remotive.com/remote-jobs/ai-ml/ai-native-cloud-infrastructure-generalist-m-f-d-2088634',
    postedAt: '2026-02-19T13:03:00Z',
    featured: true,
  },
  {
    id: '2',
    slug: 'senior-ai-developer-tripleten',
    title: 'Senior AI Developer',
    company: 'TripleTen',
    companyDescription:
      'TripleTen ist eine internationale EdTech-Plattform, die Karrierewechsler in Tech-Berufe ausbildet. Das Unternehmen setzt auf KI-gestutzte Lernmethoden.',
    location: 'Berlin (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Build AI-driven learning features, design backend services integrating LLMs, prototype AI features, and define AI behavior in products. Du entwickelst KI-Features, die das Lernerlebnis von Tausenden verandern.',
    requirements: [
      'Erfahrung mit LLMs und AI/ML-Systemen',
      'Backend-Entwicklung (Python bevorzugt)',
      'Erfahrung mit LangChain oder ahnlichen Frameworks',
      'Verstandnis von Prompt Engineering',
      'Produktions-Deployment von KI-Features',
    ],
    benefits: [
      '100% Remote-Arbeit',
      'Internationales Team',
      'Arbeit an innovativer KI-Technologie',
      'Wettbewerbsfahiges Gehalt',
      'Weiterbildungsmoglichkeiten',
    ],
    tags: ['AI', 'LLM', 'Python', 'Machine Learning', 'EdTech'],
    category: 'entwicklung',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/tripleten/remote-senior-ai-developer-berlin-23556',
    postedAt: '2026-02-20T09:00:00Z',
    featured: true,
  },
  {
    id: '3',
    slug: 'senior-fullstack-developer-dedalus',
    title: 'Senior Fullstack Developer (m/f/d) Patient Portal',
    company: 'Dedalus',
    companyDescription:
      'Dedalus ist Europas großter Healthcare-IT-Anbieter und entwickelt Software fur Krankenhauser und Gesundheitseinrichtungen in uber 40 Landern.',
    location: 'Deutschland (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Senior development role creating and maintaining components for healthcare applications. Du entwickelst das Patientenportal weiter und arbeitest an installability, portability und scalability der Plattform.',
    requirements: [
      'Mehrjahrige Fullstack-Erfahrung',
      'Kenntnisse in modernen Web-Frameworks',
      'Erfahrung mit Healthcare-IT ist von Vorteil',
      'Verstandnis von Datenschutz und DSGVO',
      'Agile Entwicklungsmethoden',
    ],
    benefits: [
      '100% Remote in Deutschland',
      'Sinnstiftende Arbeit im Gesundheitswesen',
      'Etabliertes internationales Unternehmen',
      'Weiterbildungsmoglichkeiten',
      'Work-Life-Balance',
    ],
    tags: ['Fullstack', 'Healthcare', 'Web', 'DSGVO'],
    category: 'entwicklung',
    applyUrl: 'https://jobicy.com/jobs/139585-senior-fullstack-developer-m-f-d-patient-portal',
    postedAt: '2026-02-18T10:00:00Z',
    featured: false,
  },
  {
    id: '4',
    slug: 'information-technology-team-lead-paymentology',
    title: 'Information Technology Team Lead',
    company: 'Paymentology',
    companyDescription:
      'Paymentology ist ein globaler Cloud-basierter Zahlungsdienstleister, der Payment-Processing-Losungen fur Banken und Fintechs in uber 60 Landern bereitstellt.',
    location: 'Berlin (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Lead the EUC team delivering IT support and endpoint security. Du ubernimmst die Fuhrung des IT-Teams, implementierst Endpoint-Security, managst Microsoft 365 und koordinierst das Device-Provisioning.',
    requirements: [
      'Erfahrung in IT-Teamleitung',
      'Kenntnisse in Endpoint Security und Microsoft 365',
      'L1/L2 Support-Erfahrung',
      'Device Management und Provisioning',
      'Gute Englischkenntnisse',
    ],
    benefits: [
      '100% Remote-Arbeit',
      'Internationales Fintech-Umfeld',
      'Fuhrungsverantwortung',
      'Moderne Technologien',
      'Wettbewerbsfahiges Gehalt',
    ],
    tags: ['IT-Leitung', 'Security', 'Microsoft 365', 'Fintech'],
    category: 'entwicklung',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/paymentology/remote-information-technology-team-lead-berlin-43552',
    postedAt: '2026-02-21T08:00:00Z',
    featured: false,
  },
  {
    id: '5',
    slug: 'e-commerce-growth-manager-capulet-jewelry',
    title: 'E-Commerce & Growth Manager – Shopify & Performance Marketing',
    company: 'CAPULET Jewelry',
    companyDescription:
      'CAPULET Jewelry ist eine wachsende D2C-Schmuckmarke aus Munchen, die hochwertigen Schmuck online uber Shopify vertreibt.',
    location: 'Munchen (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Du ubernimmst die volle Verantwortung fur digitales Wachstum: Shop-Optimierung auf Shopify, Performance Marketing uber Meta und Google Ads, Analytics und CRM-Automatisierung mit Klaviyo.',
    requirements: [
      'Umfangreiche Shopify-Erfahrung',
      'Expertise in Performance Marketing (Meta & Google Ads)',
      'Erfahrung mit CRM/E-Mail-Marketing (Klaviyo)',
      'Analytisches Denken und datengetriebenes Arbeiten',
      'Erfahrung im D2C-E-Commerce',
    ],
    benefits: [
      '100% Remote-Arbeit',
      'Eigenverantwortung und Gestaltungsfreiheit',
      'Wachsende D2C-Brand mit Potenzial',
      'Flexible Arbeitszeiten',
      'Mitarbeiterrabatte auf Schmuck',
    ],
    tags: ['Shopify', 'Google Ads', 'Meta Ads', 'E-Commerce', 'Klaviyo'],
    category: 'marketing',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/capulet-jewelry/e-commerce-growth-manager-shopify-performance-marketing-munich-312465',
    postedAt: '2026-02-21T10:00:00Z',
    featured: true,
  },
  {
    id: '6',
    slug: 'marketing-student-solaredge',
    title: 'Marketing Student (Werkstudent)',
    company: 'SolarEdge',
    companyDescription:
      'SolarEdge Technologies ist ein borsennotierter Anbieter von Wechselrichter-Losungen fur Photovoltaik-Anlagen mit uber 5.000 Mitarbeitern weltweit.',
    location: 'Munchen (100% Remote)',
    type: 'teilzeit',
    remote: '100-remote',
    description:
      'Unterstutze die Marketing-Aktivitaten fur EU-Markte (DACH-Region). Du erstellst digitale Inhalte, managst Social-Media-Kanale, koordinierst Events und ubersetzt Marketingmaterialien.',
    requirements: [
      'Eingeschriebener Student im Bereich Marketing oder Kommunikation',
      'Sehr gute Deutsch- und Englischkenntnisse',
      'Erfahrung mit Social Media und Content Creation',
      'Kenntnisse in digitalem Marketing',
      'Selbststandige Arbeitsweise',
    ],
    benefits: [
      'Remote-Arbeit moglich',
      'Flexible Arbeitszeiten neben dem Studium',
      'Internationales Umfeld in der Solarbranche',
      'Praxiserfahrung im B2B-Marketing',
      'Ubernahmemoglichkeit nach dem Studium',
    ],
    tags: ['Marketing', 'Social Media', 'Content', 'Werkstudent', 'Solar'],
    category: 'marketing',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/solaredge/remote-marketing-student-munich-384816',
    postedAt: '2026-02-21T12:00:00Z',
    featured: false,
  },
  {
    id: '7',
    slug: 'google-manager-seo-sea-geo-homeoffice',
    title: 'Google Manager*in (SEO, SEA, GEO) im Homeoffice',
    company: 'Tom Phillip Zenker Digital Marketing Agentur GmbH',
    companyDescription:
      'Die Tom Phillip Zenker Digital Marketing Agentur ist eine spezialisierte Performance-Marketing-Agentur, die KMUs bei Google Ads, SEO und digitalem Wachstum unterstutzt.',
    location: 'Deutschlandweit (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Du managst SEO-, SEA- und GEO-Kampagnen fur unsere Kunden im Homeoffice. Verantwortung fur Strategie, Umsetzung und Reporting von Google-basierten Marketing-Maßnahmen.',
    requirements: [
      'Fundierte Erfahrung in SEO und Google Ads (SEA)',
      'Kenntnisse in Google Analytics und Search Console',
      'Erfahrung mit GEO-Marketing (Google Business Profile)',
      'Datengetriebenes Arbeiten und Reporting',
      'Sehr gute Deutschkenntnisse',
    ],
    benefits: [
      '100% Homeoffice',
      'Flexibles Arbeiten',
      'Abwechslungsreiche Kundenprojekte',
      'Weiterbildungsmoglichkeiten',
      'Eigenverantwortliches Arbeiten',
    ],
    tags: ['SEO', 'Google Ads', 'SEA', 'Online Marketing', 'GEO'],
    category: 'marketing',
    applyUrl: 'https://www.arbeitnow.com/jobs/homeoffice',
    postedAt: '2026-02-14T09:00:00Z',
    featured: false,
  },
  {
    id: '8',
    slug: 'product-design-manager-gitlab',
    title: 'Product Design Manager, Platforms & Plan',
    company: 'GitLab',
    companyDescription:
      'GitLab ist die fuhrende DevSecOps-Plattform und eines der großten vollstandig remote arbeitenden Unternehmen der Welt mit uber 2.000 Mitarbeitern in 65+ Landern.',
    location: 'Deutschland (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    salary: { min: 130000, max: 200000, period: 'jahr' },
    description:
      'Design-Leadership-Position: Du fuhrst mehrere Designer auf der Enterprise-Plattform und bist verantwortlich fur UX-Delivery und Design-Strategie. GitLab ist ein Vorreiter fur Remote-First-Kultur.',
    requirements: [
      'Mehrjahrige Erfahrung im Design-Management',
      'Fuhrungserfahrung mit Design-Teams',
      'Erfahrung mit Enterprise-Software und SaaS',
      'Strategisches UX-Denken',
      'Fließendes Englisch (Unternehmenssprache)',
    ],
    benefits: [
      '100% Remote weltweit',
      'Wettbewerbsfahiges Gehalt + Equity',
      'Unbegrenzter Urlaub (Family & Friends Days)',
      'Home-Office-Budget',
      'Growth & Development Budget',
      'Remote-First-Kultur seit Grundung',
    ],
    tags: ['Design', 'UX', 'Management', 'SaaS', 'Remote-First'],
    category: 'design',
    applyUrl: 'https://jobicy.com/jobs/139390-product-design-manager-platforms-plan',
    postedAt: '2026-02-17T14:00:00Z',
    featured: true,
  },
  {
    id: '9',
    slug: 'personalized-ads-assessor-telus',
    title: 'Personalized Internet Ads Assessor – German Speaker',
    company: 'TELUS International',
    companyDescription:
      'TELUS International ist ein globaler Anbieter von digitalen Customer-Experience- und AI-Datenlosungen mit uber 75.000 Mitarbeitern weltweit.',
    location: 'Deutschland (100% Remote)',
    type: 'freelance',
    remote: '100-remote',
    salary: { min: 13, max: 16, period: 'stunde' },
    description:
      'Bewerte Online-Werbeanzeigen und prufe deren Relevanz. Du gibst Feedback zur sprachlichen und kulturellen Angemessenheit von personalisierten Ads fur den deutschen Markt.',
    requirements: [
      'Deutsch als Muttersprache',
      'Wohnsitz in Deutschland',
      'Erfahrung mit Internet-Nutzung und Online-Werbung',
      'Analytisches Denken und Detailgenauigkeit',
      'Eigener Computer und stabile Internetverbindung',
    ],
    benefits: [
      'Vollstandig remote / Homeoffice',
      'Freie Zeiteinteilung als Freelancer',
      'Flexibler Nebenverdienst',
      'Internationales Unternehmen',
      'Langfristige Zusammenarbeit moglich',
    ],
    tags: ['Freelance', 'Deutsch', 'Ads', 'Bewertung', 'Homeoffice'],
    category: 'sonstiges',
    applyUrl: 'https://jobicy.com/jobs/139464-freelance-personalized-internet-ads-assessor-german-speaker-in-germany',
    postedAt: '2026-02-15T10:00:00Z',
    featured: false,
  },
  {
    id: '10',
    slug: 'technical-account-manager-dach-solaredge',
    title: 'Technical Account Manager – DACH',
    company: 'SolarEdge',
    companyDescription:
      'SolarEdge Technologies ist ein borsennotierter Anbieter von Wechselrichter-Losungen fur Photovoltaik-Anlagen mit uber 5.000 Mitarbeitern weltweit.',
    location: 'Munchen (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Strategisches Account Management fur die DACH-Region. Du bist Hauptansprechpartner fur definierte Accounts, lost eskalierte Probleme, entwickelst Service-Losungen und fuhrst Schulungen durch.',
    requirements: [
      'Erfahrung im Technical Account Management oder Pre-Sales',
      'Technisches Verstandnis (Photovoltaik/Elektronik von Vorteil)',
      'Fließendes Deutsch und Englisch',
      'Erfahrung mit CRM-Systemen',
      'Reisebereitschaft in der DACH-Region',
    ],
    benefits: [
      'Remote-Arbeit mit Reiseanteilen',
      'Internationales Technologie-Unternehmen',
      'Zukunftsbranche erneuerbare Energien',
      'Weiterbildungsmoglichkeiten',
      'Firmenwagen',
    ],
    tags: ['Account Management', 'DACH', 'Solar', 'B2B', 'Technical Sales'],
    category: 'vertrieb',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/solaredge/remote-technical-account-manager-dach-munich-360031',
    postedAt: '2026-02-20T11:00:00Z',
    featured: false,
  },
  {
    id: '11',
    slug: 'solutions-architect-vercel',
    title: 'Solutions Architect',
    company: 'Vercel',
    companyDescription:
      'Vercel ist die Plattform hinter Next.js und ermoglicht Entwicklern, die besten Web-Erlebnisse zu bauen. Das Unternehmen ist vollstandig remote organisiert.',
    location: 'Deutschland (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Technische Vertriebsrolle, die Pre- und Post-Sales umspannt. Du designst AI- und Web-Application-Architekturen und berast Kunden als technischer Advisor uber den gesamten Lebenszyklus.',
    requirements: [
      'Erfahrung mit Web-Architektur und Cloud-Deployment',
      'Kenntnisse in Next.js, React und modernen Frameworks',
      'Pre-Sales oder Solutions Engineering Erfahrung',
      'Starke Kommunikationsfahigkeiten',
      'Fließendes Englisch, Deutsch ist ein Plus',
    ],
    benefits: [
      '100% Remote weltweit',
      'Arbeit an einem der wichtigsten Web-Tools',
      'Wettbewerbsfahiges Gehalt + Equity',
      'Modernes Remote-First-Unternehmen',
      'Tech-Budget fur Equipment',
    ],
    tags: ['Next.js', 'React', 'Cloud', 'Solutions', 'Web'],
    category: 'beratung',
    applyUrl: 'https://jobicy.com/jobs/139389-solutions-architect-3',
    postedAt: '2026-02-17T09:00:00Z',
    featured: false,
  },
  {
    id: '12',
    slug: 'partner-success-manager-fino',
    title: 'Partner Success Manager – 100% Homeoffice',
    company: 'fino data services GmbH',
    companyDescription:
      'fino data services ist ein Fintech aus Kassel, das KI-basierte Losungen fur die automatisierte Verarbeitung von Finanzdokumenten entwickelt.',
    location: 'Kassel (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Als Partner Success Manager betreust du strategische Partner und Kunden. Du bist verantwortlich fur Onboarding, Beziehungsmanagement und die Weiterentwicklung von Partnerstrategien.',
    requirements: [
      'Erfahrung im Partner- oder Account Management',
      'Verstandnis fur Fintech oder SaaS-Produkte',
      'Starke Kommunikationsfahigkeiten auf Deutsch und Englisch',
      'Strategisches Denken und Eigeninitiative',
      'Erfahrung mit CRM-Systemen',
    ],
    benefits: [
      '100% Homeoffice',
      'Fintech-Umfeld mit innovativen Produkten',
      'Eigenverantwortliches Arbeiten',
      'Weiterbildungsmoglichkeiten',
      'Team-Events',
    ],
    tags: ['Partner Management', 'Fintech', 'SaaS', 'B2B', 'CRM'],
    category: 'vertrieb',
    applyUrl: 'https://www.arbeitnow.com/jobs/homeoffice',
    postedAt: '2026-02-14T08:00:00Z',
    featured: false,
  },
  {
    id: '13',
    slug: 'emea-sales-account-manager-nvidia',
    title: 'EMEA Sales Senior Account Manager – Smart Spaces',
    company: 'NVIDIA',
    companyDescription:
      'NVIDIA ist der weltweit fuhrende Hersteller von GPUs und KI-Chips. Das Unternehmen treibt Innovationen in AI, Gaming, autonomes Fahren und Cloud Computing voran.',
    location: 'Deutschland (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Fuhrungsrolle im Management strategischer Beziehungen mit europaischen Stadten und offentlichen Organisationen. Du expandierst die Adoption von AI und Digital Twin-Losungen im offentlichen Sektor.',
    requirements: [
      'Erfahrung im Enterprise Sales oder Key Account Management',
      'Kenntnisse im offentlichen Sektor / Smart City',
      'Verstandnis von AI- und Digital-Twin-Technologien',
      'Netzwerk in der EMEA-Region',
      'Fließendes Englisch, Deutsch von Vorteil',
    ],
    benefits: [
      'Remote-Arbeit in der EMEA-Region',
      'Weltweit fuhrendes Technologie-Unternehmen',
      'Wettbewerbsfahiges Gehalt + Bonus',
      'Aktienoptionen',
      'Cutting-edge AI-Technologie',
    ],
    tags: ['Sales', 'AI', 'Smart City', 'Enterprise', 'NVIDIA'],
    category: 'vertrieb',
    applyUrl: 'https://jobicy.com/jobs/139663-emea-sales-senior-account-manager-smart-spaces-and-local-government',
    postedAt: '2026-02-19T14:00:00Z',
    featured: false,
  },
  {
    id: '14',
    slug: 'ai-ops-engineer-just-add-ai',
    title: 'AI-Ops Engineer bei lector.ai',
    company: 'JUST ADD AI',
    companyDescription:
      'JUST ADD AI ist ein deutsches KI-Unternehmen, das mit lector.ai eine KI-gestutzte Dokumentenverarbeitung anbietet. Das Team arbeitet vollstandig remote.',
    location: 'Deutschland (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Verantwortlich fur Deployment, Betrieb und Monitoring von KI-Losungen in Produktionsumgebungen. Fokus auf CI/CD-Pipelines und System-Skalierbarkeit.',
    requirements: [
      'Erfahrung mit DevOps und MLOps',
      'Kenntnisse in CI/CD-Pipelines',
      'Erfahrung mit Container-Technologien (Docker, Kubernetes)',
      'Monitoring und Observability',
      'Verstandnis von ML-Modellen in Produktion',
    ],
    benefits: [
      '100% Remote in Deutschland',
      'Arbeit an innovativer KI-Technologie',
      'Startup-Atmosphare',
      'Eigenverantwortung und Gestaltungsfreiheit',
      'Weiterbildung im AI-Bereich',
    ],
    tags: ['DevOps', 'MLOps', 'AI', 'Kubernetes', 'CI/CD'],
    category: 'entwicklung',
    applyUrl: 'https://jobicy.com/jobs/139651-ai-ops-engineer-bei-lector-ai-2',
    postedAt: '2026-02-18T14:00:00Z',
    featured: false,
  },
  {
    id: '15',
    slug: 'kundenberater-kredit-homeoffice-smava',
    title: 'Kundenberater – Kreditabsicherung im Homeoffice (w/m/d)',
    company: 'Smava GmbH',
    companyDescription:
      'Smava ist Deutschlands großtes Kreditvergleichsportal und vermittelt seit 2007 Kredite online. Das Unternehmen hat uber 500 Mitarbeiter und seinen Sitz in Berlin.',
    location: 'Berlin (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Du berast Kunden telefonisch zu Kreditabsicherungen im Homeoffice. Vollstandige Einarbeitung und modernste Tools werden bereitgestellt. Auch fur Quereinsteiger geeignet.',
    requirements: [
      'Kommunikationsstarke und Freude am Kundenkontakt',
      'Gute Deutschkenntnisse in Wort und Schrift',
      'Grundlegende PC-Kenntnisse',
      'Zuverlassigkeit und Eigeninitiative',
      'Quereinsteiger sind willkommen',
    ],
    benefits: [
      '100% Homeoffice',
      'Umfassende Einarbeitung',
      'Festanstellung mit attraktivem Grundgehalt + Provision',
      'Moderne Ausstattung wird gestellt',
      'Karrieremoglichkeiten im Unternehmen',
    ],
    tags: ['Kundenberatung', 'Kredit', 'Telefon', 'Quereinsteiger', 'Homeoffice'],
    category: 'kundenservice',
    applyUrl: 'https://www.arbeitnow.com/jobs/homeoffice',
    postedAt: '2026-01-21T10:00:00Z',
    featured: false,
  },
  {
    id: '16',
    slug: 'projekt-management-remote-ripprich',
    title: 'Projekt Management (Remote oder im Buro)',
    company: 'Ripprich - Burodienstleistung',
    companyDescription:
      'Ripprich ist ein Dienstleistungsunternehmen aus Gorlitz, das Buro- und Projektmanagement-Services fur verschiedene Branchen anbietet.',
    location: 'Gorlitz (100% Remote)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Organisiere und strukturiere interne und externe Kommunikation und Workflows. Du managst Termine, Events und koordinierst die Zusammenarbeit mit Kunden und Kollegen komplett remote uber Zoom.',
    requirements: [
      'Erfahrung im Projektmanagement',
      'Organisationstalent und strukturierte Arbeitsweise',
      'Sicherer Umgang mit digitalen Tools (Zoom, Office)',
      'Gute Kommunikationsfahigkeiten',
      'Wohnsitz in Deutschland erforderlich',
    ],
    benefits: [
      'Vollstandig remote von zu Hause',
      'Flexible Arbeitszeiten',
      'Eigenverantwortliches Arbeiten',
      'Abwechslungsreiche Aufgaben',
      'Langfristige Zusammenarbeit',
    ],
    tags: ['Projektmanagement', 'Remote', 'Organisation', 'Zoom'],
    category: 'projektmanagement',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/ripprich-burodienstleistung/projekt-management-remote-oder-im-buro-gorlitz-389892',
    postedAt: '2026-02-21T11:00:00Z',
    featured: false,
  },
  {
    id: '17',
    slug: 'jr-ecommerce-performance-analyst-skyve',
    title: 'Jr. E-Commerce Performance Analyst',
    company: 'SKYVE',
    companyDescription:
      'SKYVE ist eine E-Commerce-Agentur aus Berlin, die Amazon-Seller bei der Optimierung ihrer Verkaufsperformance unterstutzt.',
    location: 'Berlin (100% Remote)',
    type: 'freelance',
    remote: '100-remote',
    description:
      'Monitor Amazon performance metrics, execute advertising optimizations, manage pricing and promotion testing, support listing experiments. Teilzeit-Freelance-Rolle mit Potenzial fur Vollzeit.',
    requirements: [
      'Grundverstandnis von E-Commerce und Amazon',
      'Analytisches Denken und Zahlenaffinitat',
      'Erfahrung mit Advertising-Plattformen ist ein Plus',
      'Eigenstandige und zuverlassige Arbeitsweise',
      'Gute Englisch- und Deutschkenntnisse',
    ],
    benefits: [
      'Remote-Arbeit als Freelancer',
      'Flexible Zeiteinteilung',
      'Einstieg in E-Commerce / Amazon',
      'Potenzial fur Vollzeitanstellung',
      'Lernmoglichkeiten im Performance Marketing',
    ],
    tags: ['Amazon', 'E-Commerce', 'Analytics', 'Freelance', 'Performance'],
    category: 'marketing',
    applyUrl: 'https://www.arbeitnow.com/jobs/companies/skyve/jr-e-commerce-performance-analyst-berlin-377575',
    postedAt: '2026-02-21T07:00:00Z',
    featured: false,
  },
  {
    id: '18',
    slug: 'head-customer-service-operations-refurbed',
    title: 'Head of Customer Service Operations (f/m/x)',
    company: 'refurbed',
    companyDescription:
      'refurbed ist Europas großter Online-Marktplatz fur refurbished Elektronik. Das Wiener Unternehmen ist in der DACH-Region und daruber hinaus aktiv.',
    location: 'Remote (DACH)',
    type: 'vollzeit',
    remote: '100-remote',
    description:
      'Fuhrungsposition im Customer Service: Du managst mehrere Teams mit Fokus auf Operational Excellence, datengetriebene Entscheidungen und Implementierung von KI-Automatisierung fur den Kundenservice.',
    requirements: [
      '5+ Jahre Erfahrung im Customer Service Management',
      'Fuhrungserfahrung mit mehreren Teams',
      'Erfahrung mit KI-Automatisierung im Kundenservice',
      'Datengetriebene Arbeitsweise',
      'Fließendes Deutsch und Englisch',
    ],
    benefits: [
      'Remote-Arbeit in der DACH-Region',
      'Impact in der Nachhaltigkeitsbranche',
      'Fuhrungsrolle mit Gestaltungsspielraum',
      'Wachsendes Unternehmen',
      'Moderne Tools und Technologien',
    ],
    tags: ['Customer Service', 'Fuhrung', 'AI', 'Operations', 'Nachhaltigkeit'],
    category: 'kundenservice',
    applyUrl: 'https://jobicy.com/jobs/139616-head-of-customer-service-operations-f-m-x',
    postedAt: '2026-02-16T12:00:00Z',
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
