'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import JobCard from '@/components/JobCard'
import { getAllJobs, filterJobs } from '@/lib/jobs'
import {
  JobCategory,
  JobType,
  RemoteType,
  CATEGORY_LABELS,
  JOB_TYPE_LABELS,
  REMOTE_TYPE_LABELS,
} from '@/lib/types'

export default function JobsContent() {
  const searchParams = useSearchParams()

  const initialQuery = searchParams.get('q') || ''
  const initialCategory = (searchParams.get('category') as JobCategory) || ''
  const initialType = (searchParams.get('type') as JobType) || ''
  const initialRemote = (searchParams.get('remote') as RemoteType) || ''

  const [query, setQuery] = useState(initialQuery)
  const [category, setCategory] = useState<JobCategory | ''>(initialCategory)
  const [type, setType] = useState<JobType | ''>(initialType)
  const [remote, setRemote] = useState<RemoteType | ''>(initialRemote)

  const allJobs = getAllJobs()

  const filteredJobs = useMemo(() => {
    return filterJobs({
      query: query || undefined,
      category: category || undefined,
      type: type || undefined,
      remote: remote || undefined,
    })
  }, [query, category, type, remote])

  const hasActiveFilters = query || category || type || remote

  const clearFilters = () => {
    setQuery('')
    setCategory('')
    setType('')
    setRemote('')
  }

  return (
    <div className="container-wide py-8">
      {/* Active filter summary */}
      {hasActiveFilters && (
        <div className="mb-6 flex items-center gap-2 text-sm">
          <span className="text-gray-500">
            {filteredJobs.length} von {allJobs.length} Jobs
          </span>
          <span className="text-gray-300">|</span>
          <button
            onClick={clearFilters}
            className="text-brand-600 hover:text-brand-700 font-medium"
          >
            Alle Filter entfernen
          </button>
        </div>
      )}

      <div className="lg:flex lg:gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 flex-shrink-0 mb-8 lg:mb-0">
          <div className="lg:sticky lg:top-24">
            {/* Search */}
            <div className="mb-6">
              <label htmlFor="search" className="label">
                Suche
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
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
                  id="search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Job, Skill, Firma..."
                  className="input !pl-10"
                />
              </div>
            </div>

            {/* Category */}
            <div className="mb-6">
              <label htmlFor="category" className="label">
                Kategorie
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value as JobCategory | '')}
                className="input"
              >
                <option value="">Alle Kategorien</option>
                {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Job Type */}
            <div className="mb-6">
              <label htmlFor="type" className="label">
                Anstellungsart
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value as JobType | '')}
                className="input"
              >
                <option value="">Alle Arten</option>
                {Object.entries(JOB_TYPE_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Remote Type */}
            <div className="mb-6">
              <label htmlFor="remote" className="label">
                Remote-Art
              </label>
              <select
                id="remote"
                value={remote}
                onChange={(e) => setRemote(e.target.value as RemoteType | '')}
                className="input"
              >
                <option value="">Alle</option>
                {Object.entries(REMOTE_TYPE_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="w-full btn-outline text-sm"
              >
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
                Filter zurucksetzen
              </button>
            )}
          </div>
        </aside>

        {/* Job List */}
        <div className="flex-1">
          {filteredJobs.length > 0 ? (
            <div className="grid gap-4">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Keine Jobs gefunden
              </h3>
              <p className="text-gray-500 mt-2 max-w-md mx-auto">
                Versuche andere Suchbegriffe oder entferne einige Filter, um mehr
                Ergebnisse zu sehen.
              </p>
              <button
                onClick={clearFilters}
                className="btn-secondary mt-6"
              >
                Alle Filter entfernen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
