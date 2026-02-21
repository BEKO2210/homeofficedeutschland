'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/jobs?q=${encodeURIComponent(query.trim())}`)
    } else {
      router.push('/jobs')
    }
  }

  const popularSearches = [
    'Frontend',
    'Marketing',
    'Design',
    'DevOps',
    'Projektmanagement',
    'Sales',
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-950 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-500/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container-wide py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 mb-8 border border-white/10">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Die Plattform fur Remote-Jobs in Deutschland
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight text-balance leading-[1.1]">
            Arbeite von{' '}
            <span className="bg-gradient-to-r from-brand-300 to-purple-300 bg-clip-text text-transparent">
              uberall
            </span>
            {' '}in Deutschland
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Finde deinen nachsten Remote- oder Homeoffice-Job bei den besten
            Unternehmen Deutschlands. Oder stelle als Arbeitgeber die besten
            Talente ein.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mt-10 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-2xl shadow-2xl shadow-brand-500/10">
              <div className="flex-1 relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Jobtitel, Skill oder Unternehmen..."
                  className="w-full pl-12 pr-4 py-3.5 text-gray-900 placeholder-gray-400 bg-transparent border-none focus:outline-none focus:ring-0 text-base"
                />
              </div>
              <button
                type="submit"
                className="btn-primary !rounded-xl !px-8 !py-3.5 text-base whitespace-nowrap"
              >
                Jobs finden
              </button>
            </div>
          </form>

          {/* Popular searches */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-gray-400">Beliebt:</span>
            {popularSearches.map((search) => (
              <button
                key={search}
                onClick={() => router.push(`/jobs?q=${encodeURIComponent(search)}`)}
                className="px-3 py-1 text-sm text-white/70 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-colors cursor-pointer"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
