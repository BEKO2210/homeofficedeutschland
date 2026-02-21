export interface Job {
  id: string
  slug: string
  title: string
  company: string
  companyDescription: string
  location: string
  type: JobType
  remote: RemoteType
  salary?: Salary
  description: string
  requirements: string[]
  benefits: string[]
  tags: string[]
  category: JobCategory
  applyUrl?: string
  applyEmail?: string
  postedAt: string
  featured: boolean
}

export type JobType = 'vollzeit' | 'teilzeit' | 'freelance' | 'minijob'

export type RemoteType = '100-remote' | 'hybrid' | 'teilweise-remote'

export type JobCategory =
  | 'entwicklung'
  | 'marketing'
  | 'design'
  | 'vertrieb'
  | 'kundenservice'
  | 'finanzen'
  | 'hr'
  | 'projektmanagement'
  | 'beratung'
  | 'sonstiges'

export interface Salary {
  min: number
  max: number
  period: 'jahr' | 'monat' | 'stunde'
}

export interface NewsletterFormData {
  email: string
}

export interface JobPostFormData {
  companyName: string
  email: string
  jobTitle: string
  jobType: JobType
  remote: RemoteType
  location: string
  salaryMin?: string
  salaryMax?: string
  salaryPeriod?: 'jahr' | 'monat' | 'stunde'
  description: string
  requirements: string
  benefits: string
  tags: string
  applyUrl?: string
  category: JobCategory
}

export const JOB_TYPE_LABELS: Record<JobType, string> = {
  vollzeit: 'Vollzeit',
  teilzeit: 'Teilzeit',
  freelance: 'Freelance',
  minijob: 'Minijob',
}

export const REMOTE_TYPE_LABELS: Record<RemoteType, string> = {
  '100-remote': '100% Remote',
  hybrid: 'Hybrid',
  'teilweise-remote': 'Teilweise Remote',
}

export const CATEGORY_LABELS: Record<JobCategory, string> = {
  entwicklung: 'Entwicklung & IT',
  marketing: 'Marketing & Content',
  design: 'Design & Kreativ',
  vertrieb: 'Vertrieb & Sales',
  kundenservice: 'Kundenservice',
  finanzen: 'Finanzen & Buchhaltung',
  hr: 'HR & Personal',
  projektmanagement: 'Projektmanagement',
  beratung: 'Beratung & Consulting',
  sonstiges: 'Sonstiges',
}

export const CATEGORY_ICONS: Record<JobCategory, string> = {
  entwicklung: '💻',
  marketing: '📣',
  design: '🎨',
  vertrieb: '📈',
  kundenservice: '🎧',
  finanzen: '📊',
  hr: '👥',
  projektmanagement: '📋',
  beratung: '💡',
  sonstiges: '🔧',
}

export const SALARY_PERIOD_LABELS: Record<string, string> = {
  jahr: '/ Jahr',
  monat: '/ Monat',
  stunde: '/ Stunde',
}

export function formatSalary(salary: Salary): string {
  const format = (n: number) =>
    new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(n)

  return `${format(salary.min)} – ${format(salary.max)} ${SALARY_PERIOD_LABELS[salary.period]}`
}

export function timeAgo(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diff = now.getTime() - date.getTime()

  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 60) return `vor ${minutes} Min.`
  if (hours < 24) return `vor ${hours} Std.`
  if (days === 1) return 'gestern'
  if (days < 7) return `vor ${days} Tagen`
  if (days < 30) return `vor ${Math.floor(days / 7)} Wochen`
  return `vor ${Math.floor(days / 30)} Monaten`
}
