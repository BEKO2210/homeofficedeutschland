import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <span className="font-bold text-gray-900">
                HomeOffice<span className="text-brand-500">Deutschland</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Die Plattform für Remote- und Homeoffice-Jobs in Deutschland.
            </p>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Für Jobsuchende
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/jobs"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Alle Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs?remote=100-remote"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  100% Remote Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs?category=entwicklung"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Entwickler-Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs?type=teilzeit"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Teilzeit-Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* For Companies */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Für Unternehmen
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/job-einstellen"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Job einstellen
                </Link>
              </li>
              <li>
                <Link
                  href="/preise"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Preise
                </Link>
              </li>
              <li>
                <Link
                  href="/fuer-unternehmen"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Warum HomeOffice DE?
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Rechtliches
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HomeOffice Deutschland. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
