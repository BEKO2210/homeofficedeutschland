import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllJobs, getJobBySlug } from '@/lib/jobs'
import {
  JOB_TYPE_LABELS,
  REMOTE_TYPE_LABELS,
  CATEGORY_LABELS,
  formatSalary,
  timeAgo,
} from '@/lib/types'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllJobs().map((job) => ({ slug: job.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const job = getJobBySlug(slug)
  if (!job) return { title: 'Job nicht gefunden' }

  return {
    title: `${job.title} bei ${job.company}`,
    description: job.description.slice(0, 160),
    openGraph: {
      title: `${job.title} – ${job.company}`,
      description: job.description.slice(0, 160),
    },
  }
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params
  const job = getJobBySlug(slug)

  if (!job) {
    notFound()
  }

  const colors = [
    'from-violet-500 to-purple-600',
    'from-blue-500 to-cyan-600',
    'from-emerald-500 to-teal-600',
    'from-orange-500 to-red-500',
    'from-pink-500 to-rose-600',
    'from-indigo-500 to-blue-600',
    'from-amber-500 to-orange-600',
    'from-teal-500 to-green-600',
  ]
  const colorIndex =
    job.company.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-wide py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <Link href="/jobs" className="hover:text-gray-700 transition-colors">
              Jobs
            </Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-gray-900 font-medium truncate">{job.title}</span>
          </nav>
        </div>
      </div>

      <div className="container-wide py-8 lg:py-12">
        <div className="lg:flex lg:gap-12">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            {/* Job Header */}
            <div className="flex items-start gap-4 mb-8">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center flex-shrink-0 shadow-lg`}
              >
                <span className="text-white font-bold text-2xl">
                  {job.company.charAt(0)}
                </span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  {job.featured && (
                    <span className="badge-primary text-xs font-semibold">Featured</span>
                  )}
                  <span className="text-sm text-gray-400">{timeAgo(job.postedAt)}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {job.title}
                </h1>
                <p className="text-lg text-gray-500 mt-1">{job.company}</p>
              </div>
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="badge-green">
                <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
                </svg>
                {job.location}
              </span>
              <span className="badge-blue">{REMOTE_TYPE_LABELS[job.remote]}</span>
              <span className="badge-gray">{JOB_TYPE_LABELS[job.type]}</span>
              <span className="badge-primary">{CATEGORY_LABELS[job.category]}</span>
              {job.salary && (
                <span className="badge-orange">{formatSalary(job.salary)}</span>
              )}
            </div>

            {/* Company Description */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Uber das Unternehmen</h2>
              <p className="text-gray-600 leading-relaxed">{job.companyDescription}</p>
            </div>

            {/* Job Description */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Stellenbeschreibung</h2>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Anforderungen</h2>
              <ul className="space-y-2">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h2>
              <ul className="space-y-2">
                {job.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills & Tags</h2>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/jobs?q=${encodeURIComponent(tag)}`}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Jetzt bewerben</h3>

                {job.salary && (
                  <div className="mb-4 p-3 bg-orange-50 rounded-xl">
                    <div className="text-sm text-orange-600 font-medium">Gehalt</div>
                    <div className="text-lg font-bold text-orange-700">
                      {formatSalary(job.salary)}
                    </div>
                  </div>
                )}

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Anstellung</span>
                    <span className="font-medium text-gray-900">{JOB_TYPE_LABELS[job.type]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Remote</span>
                    <span className="font-medium text-gray-900">{REMOTE_TYPE_LABELS[job.remote]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Kategorie</span>
                    <span className="font-medium text-gray-900">{CATEGORY_LABELS[job.category]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Eingestellt</span>
                    <span className="font-medium text-gray-900">{timeAgo(job.postedAt)}</span>
                  </div>
                </div>

                {job.applyUrl ? (
                  <a
                    href={job.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center"
                  >
                    Zur Bewerbung
                    <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                ) : job.applyEmail ? (
                  <a
                    href={`mailto:${job.applyEmail}?subject=Bewerbung: ${job.title}`}
                    className="btn-primary w-full text-center"
                  >
                    Per E-Mail bewerben
                    <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </a>
                ) : null}

                <p className="text-xs text-gray-400 text-center mt-3">
                  Die Bewerbung erfolgt direkt beim Unternehmen
                </p>
              </div>

              {/* Share */}
              <div className="mt-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Job teilen</h3>
                <div className="flex gap-2">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://homeofficedeutschland.de/jobs/${job.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${job.title} bei ${job.company}`)}&url=${encodeURIComponent(`https://homeofficedeutschland.de/jobs/${job.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(job.title)}&body=${encodeURIComponent(`Schau dir diesen Job an: https://homeofficedeutschland.de/jobs/${job.slug}`)}`}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    E-Mail
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/jobs"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Zuruck zu allen Jobs
          </Link>
        </div>
      </div>
    </>
  )
}
