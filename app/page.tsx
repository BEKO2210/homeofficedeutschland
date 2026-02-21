import Link from 'next/link'
import Hero from '@/components/Hero'
import JobCard from '@/components/JobCard'
import CategoryGrid from '@/components/CategoryGrid'
import Newsletter from '@/components/Newsletter'
import { getFeaturedJobs, getAllJobs, getTotalJobCount, getCompanyCount } from '@/lib/jobs'

export default function Home() {
  const featuredJobs = getFeaturedJobs()
  const latestJobs = getAllJobs().slice(0, 6)
  const totalJobs = getTotalJobCount()
  const companyCount = getCompanyCount()

  return (
    <>
      <Hero />

      {/* Stats */}
      <section className="relative -mt-8 z-10 pb-8">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: totalJobs.toString(), label: 'Aktive Jobs' },
              { value: companyCount.toString(), label: 'Unternehmen' },
              { value: '100%', label: 'Remote-fokussiert' },
              { value: 'Kostenlos', label: 'Fur Jobsuchende' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-4 text-center shadow-lg shadow-gray-200/50 border border-gray-100"
              >
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
        <section className="py-20">
          <div className="container-wide">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="section-heading">Empfohlene Jobs</h2>
                <p className="section-subheading mt-2">
                  Handverlesene Positionen von Top-Unternehmen
                </p>
              </div>
              <Link
                href="/jobs"
                className="hidden sm:inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                Alle Jobs ansehen
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      <CategoryGrid />

      {/* Latest Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-heading">Neueste Jobs</h2>
              <p className="section-subheading mt-2">
                Frisch eingestellte Remote-Positionen
              </p>
            </div>
            <Link
              href="/jobs"
              className="hidden sm:inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            >
              Alle Jobs ansehen
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/jobs" className="btn-secondary">
              Alle {totalJobs} Jobs ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* How it works - Gumroad style */}
      <section className="py-20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-heading">So funktioniert es</h2>
            <p className="section-subheading mt-4 mx-auto">
              Ob Jobsuchende oder Unternehmen — in drei Schritten zum Ziel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* For Job Seekers */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-8">
                Fur Jobsuchende
              </div>
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Durchsuche Remote-Jobs',
                    description:
                      'Nutze Suche und Filter, um genau die Homeoffice-Jobs zu finden, die zu dir passen.',
                  },
                  {
                    step: '02',
                    title: 'Finde dein Match',
                    description:
                      'Schau dir Unternehmensprofil, Gehalt, Benefits und Anforderungen im Detail an.',
                  },
                  {
                    step: '03',
                    title: 'Bewirb dich direkt',
                    description:
                      'Bewirb dich mit einem Klick direkt beim Unternehmen — ohne Umwege.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-400 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Companies */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium mb-8">
                Fur Unternehmen
              </div>
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Job einstellen',
                    description:
                      'Erstelle in wenigen Minuten eine ansprechende Stellenanzeige fur deine Remote-Position.',
                  },
                  {
                    step: '02',
                    title: 'Erreiche Remote-Talente',
                    description:
                      'Dein Job wird gezielt an Fachkrafte ausgespielt, die aktiv nach Homeoffice-Stellen suchen.',
                  },
                  {
                    step: '03',
                    title: 'Stelle die Besten ein',
                    description:
                      'Erhalte qualifizierte Bewerbungen direkt in dein Postfach und finde dein neues Teammitglied.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-400 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA for companies */}
      <section className="py-20 bg-gray-900">
        <div className="container-narrow text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Bereit, Remote-Talente zu finden?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            Veroffentliche deine Stellenanzeige und erreiche tausende
            qualifizierte Fachkrafte, die im Homeoffice arbeiten mochten.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/job-einstellen" className="btn-primary !bg-white !text-gray-900 hover:!bg-gray-100 !px-8 !py-4 text-base">
              Job einstellen
            </Link>
            <Link
              href="/preise"
              className="btn-outline !border-gray-700 !text-gray-300 hover:!bg-gray-800 hover:!border-gray-600 !px-8 !py-4 text-base"
            >
              Preise ansehen
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Die ersten 10 Stellenanzeigen sind kostenlos
          </p>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
