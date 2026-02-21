import { Suspense } from 'react'
import type { Metadata } from 'next'
import Newsletter from '@/components/Newsletter'
import JobsContent from './JobsContent'

export const metadata: Metadata = {
  title: 'Remote-Jobs in Deutschland',
  description:
    'Durchsuche alle Remote- und Homeoffice-Jobs in Deutschland. Filtere nach Kategorie, Anstellungsart und Remote-Moglichkeit.',
}

function JobsLoading() {
  return (
    <div className="container-wide py-8">
      <div className="lg:flex lg:gap-8">
        <aside className="lg:w-64 flex-shrink-0 mb-8 lg:mb-0">
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="h-4 w-16 bg-gray-200 rounded mb-2 animate-pulse" />
                <div className="h-11 bg-gray-100 rounded-xl animate-pulse" />
              </div>
            ))}
          </div>
        </aside>
        <div className="flex-1 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 animate-pulse">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-xl" />
                <div className="flex-1">
                  <div className="h-5 w-48 bg-gray-200 rounded mb-2" />
                  <div className="h-4 w-32 bg-gray-100 rounded mb-3" />
                  <div className="flex gap-2">
                    <div className="h-6 w-24 bg-gray-100 rounded-full" />
                    <div className="h-6 w-20 bg-gray-100 rounded-full" />
                    <div className="h-6 w-16 bg-gray-100 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function JobsPage() {
  return (
    <>
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container-wide py-12">
          <h1 className="text-3xl font-bold text-gray-900">Remote-Jobs in Deutschland</h1>
          <p className="text-gray-500 mt-2">
            Finde deinen nachsten Remote- oder Homeoffice-Job
          </p>
        </div>
      </section>

      <Suspense fallback={<JobsLoading />}>
        <JobsContent />
      </Suspense>

      <Newsletter />
    </>
  )
}
