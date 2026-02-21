'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  JobCategory,
  JobType,
  RemoteType,
  CATEGORY_LABELS,
  JOB_TYPE_LABELS,
  REMOTE_TYPE_LABELS,
} from '@/lib/types'

interface FormState {
  companyName: string
  email: string
  jobTitle: string
  jobType: JobType | ''
  remote: RemoteType | ''
  location: string
  salaryMin: string
  salaryMax: string
  salaryPeriod: 'jahr' | 'monat' | 'stunde'
  description: string
  requirements: string
  benefits: string
  tags: string
  applyUrl: string
  category: JobCategory | ''
}

const initialForm: FormState = {
  companyName: '',
  email: '',
  jobTitle: '',
  jobType: '',
  remote: '',
  location: '',
  salaryMin: '',
  salaryMax: '',
  salaryPeriod: 'jahr',
  description: '',
  requirements: '',
  benefits: '',
  tags: '',
  applyUrl: '',
  category: '',
}

export default function JobEinstellenPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {}

    if (!form.companyName.trim()) newErrors.companyName = 'Bitte Firmennamen angeben'
    if (!form.email.trim() || !form.email.includes('@')) newErrors.email = 'Bitte gültige E-Mail angeben'
    if (!form.jobTitle.trim()) newErrors.jobTitle = 'Bitte Jobtitel angeben'
    if (!form.jobType) newErrors.jobType = 'Bitte Anstellungsart wählen'
    if (!form.remote) newErrors.remote = 'Bitte Remote-Art wählen'
    if (!form.category) newErrors.category = 'Bitte Kategorie wählen'
    if (!form.description.trim()) newErrors.description = 'Bitte Beschreibung angeben'
    if (form.description.trim().length < 50) newErrors.description = 'Beschreibung sollte mindestens 50 Zeichen haben'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="container-narrow py-20 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
          <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Stellenanzeige eingereicht!
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto mb-8">
          Vielen Dank! Wir prufen deine Anzeige und schalten sie innerhalb von
          24 Stunden frei. Du erhaltst eine Bestatigung per E-Mail.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Zuruck zur Startseite
          </Link>
          <button
            onClick={() => setStatus('idle')}
            className="btn-secondary"
          >
            Weitere Anzeige erstellen
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container-narrow py-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Stellenanzeige erstellen
          </h1>
          <p className="text-gray-500 mt-2">
            Veroffentliche deinen Remote-Job und erreiche qualifizierte Fachkrafte.
          </p>
        </div>
      </section>

      <div className="container-narrow py-12">
        <div className="max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Unternehmensinformationen
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="companyName" className="label">
                    Firmenname *
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    value={form.companyName}
                    onChange={(e) => updateField('companyName', e.target.value)}
                    className={`input ${errors.companyName ? '!border-red-300 !ring-red-500' : ''}`}
                    placeholder="z.B. TechStart GmbH"
                  />
                  {errors.companyName && (
                    <p className="text-sm text-red-600 mt-1">{errors.companyName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="label">
                    Kontakt-E-Mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={`input ${errors.email ? '!border-red-300 !ring-red-500' : ''}`}
                    placeholder="jobs@deinefirma.de"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                  )}
                  <p className="text-xs text-gray-400 mt-1">
                    Hierhin senden wir Bestatigungen und Bewerbungen
                  </p>
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Job-Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="jobTitle" className="label">
                    Jobtitel *
                  </label>
                  <input
                    id="jobTitle"
                    type="text"
                    value={form.jobTitle}
                    onChange={(e) => updateField('jobTitle', e.target.value)}
                    className={`input ${errors.jobTitle ? '!border-red-300 !ring-red-500' : ''}`}
                    placeholder="z.B. Senior Frontend-Entwickler"
                  />
                  {errors.jobTitle && (
                    <p className="text-sm text-red-600 mt-1">{errors.jobTitle}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="category" className="label">
                      Kategorie *
                    </label>
                    <select
                      id="category"
                      value={form.category}
                      onChange={(e) => updateField('category', e.target.value)}
                      className={`input ${errors.category ? '!border-red-300 !ring-red-500' : ''}`}
                    >
                      <option value="">Bitte wahlen</option>
                      {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                        <option key={key} value={key}>{label}</option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-sm text-red-600 mt-1">{errors.category}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="jobType" className="label">
                      Anstellungsart *
                    </label>
                    <select
                      id="jobType"
                      value={form.jobType}
                      onChange={(e) => updateField('jobType', e.target.value)}
                      className={`input ${errors.jobType ? '!border-red-300 !ring-red-500' : ''}`}
                    >
                      <option value="">Bitte wahlen</option>
                      {Object.entries(JOB_TYPE_LABELS).map(([key, label]) => (
                        <option key={key} value={key}>{label}</option>
                      ))}
                    </select>
                    {errors.jobType && (
                      <p className="text-sm text-red-600 mt-1">{errors.jobType}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="remote" className="label">
                      Remote-Art *
                    </label>
                    <select
                      id="remote"
                      value={form.remote}
                      onChange={(e) => updateField('remote', e.target.value)}
                      className={`input ${errors.remote ? '!border-red-300 !ring-red-500' : ''}`}
                    >
                      <option value="">Bitte wahlen</option>
                      {Object.entries(REMOTE_TYPE_LABELS).map(([key, label]) => (
                        <option key={key} value={key}>{label}</option>
                      ))}
                    </select>
                    {errors.remote && (
                      <p className="text-sm text-red-600 mt-1">{errors.remote}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="location" className="label">
                      Standort
                    </label>
                    <input
                      id="location"
                      type="text"
                      value={form.location}
                      onChange={(e) => updateField('location', e.target.value)}
                      className="input"
                      placeholder="z.B. Berlin oder Deutschlandweit"
                    />
                  </div>
                </div>

                {/* Salary */}
                <div>
                  <label className="label">Gehalt (optional)</label>
                  <div className="flex gap-3 items-center">
                    <input
                      type="text"
                      value={form.salaryMin}
                      onChange={(e) => updateField('salaryMin', e.target.value)}
                      className="input flex-1"
                      placeholder="Min."
                    />
                    <span className="text-gray-400">–</span>
                    <input
                      type="text"
                      value={form.salaryMax}
                      onChange={(e) => updateField('salaryMax', e.target.value)}
                      className="input flex-1"
                      placeholder="Max."
                    />
                    <select
                      value={form.salaryPeriod}
                      onChange={(e) => updateField('salaryPeriod', e.target.value)}
                      className="input !w-auto"
                    >
                      <option value="jahr">EUR / Jahr</option>
                      <option value="monat">EUR / Monat</option>
                      <option value="stunde">EUR / Stunde</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="label">
                    Stellenbeschreibung *
                  </label>
                  <textarea
                    id="description"
                    value={form.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    rows={6}
                    className={`input resize-y ${errors.description ? '!border-red-300 !ring-red-500' : ''}`}
                    placeholder="Beschreibe die Position, Aufgaben und was den Job besonders macht..."
                  />
                  {errors.description && (
                    <p className="text-sm text-red-600 mt-1">{errors.description}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="requirements" className="label">
                    Anforderungen
                  </label>
                  <textarea
                    id="requirements"
                    value={form.requirements}
                    onChange={(e) => updateField('requirements', e.target.value)}
                    rows={4}
                    className="input resize-y"
                    placeholder="Eine Anforderung pro Zeile, z.B.&#10;3+ Jahre Erfahrung mit React&#10;Gute Deutschkenntnisse"
                  />
                  <p className="text-xs text-gray-400 mt-1">Eine Anforderung pro Zeile</p>
                </div>

                <div>
                  <label htmlFor="benefits" className="label">
                    Benefits
                  </label>
                  <textarea
                    id="benefits"
                    value={form.benefits}
                    onChange={(e) => updateField('benefits', e.target.value)}
                    rows={4}
                    className="input resize-y"
                    placeholder="Ein Benefit pro Zeile, z.B.&#10;30 Tage Urlaub&#10;100% Remote"
                  />
                  <p className="text-xs text-gray-400 mt-1">Ein Benefit pro Zeile</p>
                </div>

                <div>
                  <label htmlFor="tags" className="label">
                    Skills / Tags
                  </label>
                  <input
                    id="tags"
                    type="text"
                    value={form.tags}
                    onChange={(e) => updateField('tags', e.target.value)}
                    className="input"
                    placeholder="z.B. React, TypeScript, Remote, SaaS"
                  />
                  <p className="text-xs text-gray-400 mt-1">Kommagetrennt</p>
                </div>

                <div>
                  <label htmlFor="applyUrl" className="label">
                    Bewerbungs-Link (optional)
                  </label>
                  <input
                    id="applyUrl"
                    type="url"
                    value={form.applyUrl}
                    onChange={(e) => updateField('applyUrl', e.target.value)}
                    className="input"
                    placeholder="https://deinefirma.de/jobs/bewerbung"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Alternativ erhalten Bewerber deine Kontakt-E-Mail
                  </p>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                  Die ersten 10 Anzeigen sind kostenlos.{' '}
                  <Link href="/preise" className="text-brand-600 hover:text-brand-700 font-medium">
                    Mehr zu den Preisen
                  </Link>
                </p>
                <button
                  type="submit"
                  className="btn-primary !px-8"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Wird eingereicht...
                    </span>
                  ) : (
                    'Anzeige einreichen'
                  )}
                </button>
              </div>
              {status === 'error' && (
                <p className="text-sm text-red-600 mt-3">
                  Etwas ist schiefgelaufen. Bitte versuche es erneut oder kontaktiere uns direkt.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
