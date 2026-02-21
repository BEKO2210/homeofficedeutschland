'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim() || !email.includes('@')) return

    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-100 rounded-2xl mb-6">
            <svg
              className="w-7 h-7 text-brand-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>

          <h2 className="section-heading">Neue Jobs direkt in dein Postfach</h2>
          <p className="section-subheading mt-4 mx-auto">
            Erhalte wochentlich die besten Remote-Jobs in Deutschland. Kein Spam,
            jederzeit abbestellbar.
          </p>

          {status === 'success' ? (
            <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <div className="flex items-center justify-center gap-2 text-emerald-700 font-medium">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Erfolgreich angemeldet! Prufe dein Postfach.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.de"
                  required
                  className="input flex-1"
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Wird angemeldet...
                    </span>
                  ) : (
                    'Kostenlos abonnieren'
                  )}
                </button>
              </div>
              {status === 'error' && (
                <p className="mt-3 text-sm text-red-600">
                  Etwas ist schiefgelaufen. Bitte versuche es erneut.
                </p>
              )}
            </form>
          )}

          <p className="mt-4 text-xs text-gray-400">
            Mit der Anmeldung akzeptierst du unsere{' '}
            <a href="/datenschutz" className="underline hover:text-gray-600">
              Datenschutzerklarung
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
