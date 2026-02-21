import Link from 'next/link'
import { CATEGORY_LABELS, CATEGORY_ICONS, JobCategory } from '@/lib/types'
import { getJobCategories } from '@/lib/jobs'

export default function CategoryGrid() {
  const categories = getJobCategories()

  const allCategories: JobCategory[] = [
    'entwicklung',
    'marketing',
    'design',
    'vertrieb',
    'kundenservice',
    'finanzen',
    'hr',
    'projektmanagement',
    'beratung',
    'sonstiges',
  ]

  const categoriesWithCounts = allCategories.map((cat) => ({
    category: cat,
    count: categories.find((c) => c.category === cat)?.count || 0,
  }))

  return (
    <section className="py-20">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="section-heading">Finde Jobs nach Kategorie</h2>
          <p className="section-subheading mt-4 mx-auto">
            Entdecke Homeoffice-Jobs in deinem Fachgebiet
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categoriesWithCounts.map(({ category, count }) => (
            <Link
              key={category}
              href={`/jobs?category=${category}`}
              className="group flex flex-col items-center p-6 bg-white border border-gray-200 rounded-2xl hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-200"
            >
              <span className="text-3xl mb-3">{CATEGORY_ICONS[category]}</span>
              <span className="text-sm font-semibold text-gray-900 text-center group-hover:text-brand-600 transition-colors">
                {CATEGORY_LABELS[category]}
              </span>
              <span className="text-xs text-gray-400 mt-1">
                {count} {count === 1 ? 'Job' : 'Jobs'}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
