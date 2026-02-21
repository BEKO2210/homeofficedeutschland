import Link from 'next/link'
import {
  Job,
  JOB_TYPE_LABELS,
  REMOTE_TYPE_LABELS,
  formatSalary,
  timeAgo,
} from '@/lib/types'

interface JobCardProps {
  job: Job
  featured?: boolean
}

export default function JobCard({ job, featured }: JobCardProps) {
  // Generate a consistent color based on company name
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
  const gradientColor = colors[colorIndex]

  return (
    <Link href={`/jobs/${job.slug}`} className="block group">
      <div
        className={`card relative ${
          featured || job.featured
            ? 'border-brand-200 bg-brand-50/30 hover:border-brand-300'
            : ''
        }`}
      >
        {/* Featured badge */}
        {(featured || job.featured) && (
          <div className="absolute -top-2.5 left-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-500 text-white shadow-sm">
              Featured
            </span>
          </div>
        )}

        <div className="flex gap-4">
          {/* Company Logo */}
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientColor} flex items-center justify-center flex-shrink-0 shadow-sm`}
          >
            <span className="text-white font-bold text-lg">
              {job.company.charAt(0)}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">{job.company}</p>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap mt-1">
                {timeAgo(job.postedAt)}
              </span>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="badge-green text-xs">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"
                  />
                </svg>
                {job.location}
              </span>
              <span className="badge-blue text-xs">
                {REMOTE_TYPE_LABELS[job.remote]}
              </span>
              <span className="badge-gray text-xs">
                {JOB_TYPE_LABELS[job.type]}
              </span>
              {job.salary && (
                <span className="badge-orange text-xs">
                  {formatSalary(job.salary)}
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {job.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
