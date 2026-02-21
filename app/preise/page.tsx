import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preise',
  description:
    'Faire und transparente Preise fur Stellenanzeigen auf HomeOffice Deutschland. Die ersten 10 Anzeigen sind kostenlos.',
}

export default function PreisePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container-narrow py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Einfache, faire Preise
          </h1>
          <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
            Keine versteckten Kosten. Keine Abos. Zahle nur, wenn du eine
            Stellenanzeige veroffentlichen mochtest.
          </p>
        </div>
      </section>

      <div className="container-narrow py-16">
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="card !p-8">
            <div className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-6">
              Zum Starten
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-bold text-gray-900">0 EUR</span>
            </div>
            <p className="text-gray-500 mb-8">
              Deine ersten 10 Stellenanzeigen sind komplett kostenlos.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                '10 kostenlose Stellenanzeigen',
                '30 Tage Laufzeit pro Anzeige',
                'Sichtbar in allen Kategorien',
                'Direkte Bewerbungen per E-Mail',
                'Volle Jobdetail-Seite',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/job-einstellen" className="btn-secondary w-full text-center">
              Kostenlos starten
            </Link>
          </div>

          {/* Paid Tier */}
          <div className="card !p-8 !border-brand-200 !bg-brand-50/30 relative">
            <div className="absolute -top-3 right-6">
              <span className="inline-flex items-center px-3 py-1 bg-brand-500 text-white rounded-full text-sm font-semibold shadow-lg shadow-brand-500/20">
                Beliebt
              </span>
            </div>
            <div className="inline-flex items-center px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium mb-6">
              Pro Anzeige
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-bold text-gray-900">49 EUR</span>
              <span className="text-gray-500">/ Anzeige</span>
            </div>
            <p className="text-gray-500 mb-8">
              Fur jede weitere Stellenanzeige nach den ersten 10.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Alles aus dem kostenlosen Paket',
                '30 Tage Laufzeit',
                'Hervorgehobene Platzierung (Featured)',
                'Social-Media-Verbreitung',
                'Statistiken und Klickzahlen',
                'E-Mail-Benachrichtigung an Abonnenten',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/job-einstellen" className="btn-primary w-full text-center">
              Job einstellen
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-12">Haufig gestellte Fragen</h2>

          <div className="space-y-6">
            {[
              {
                q: 'Wie lange ist eine Stellenanzeige sichtbar?',
                a: 'Jede Stellenanzeige ist 30 Tage lang auf unserer Plattform sichtbar. Danach kannst du sie bei Bedarf erneuern.',
              },
              {
                q: 'Was passiert nach meinen 10 kostenlosen Anzeigen?',
                a: 'Nachdem du deine 10 kostenlosen Anzeigen aufgebraucht hast, kostet jede weitere Stellenanzeige einmalig 49 EUR. Es gibt kein Abo und keine wiederkehrenden Kosten.',
              },
              {
                q: 'Wie erhalte ich Bewerbungen?',
                a: 'Bewerbungen kommen direkt per E-Mail an die von dir hinterlegte Adresse. Du kannst alternativ auch einen Link zu deinem eigenen Bewerbungsformular angeben.',
              },
              {
                q: 'Kann ich meine Anzeige nachtraglich bearbeiten?',
                a: 'Ja, du kannst den Inhalt deiner Stellenanzeige jederzeit anpassen. Kontaktiere uns dafur einfach per E-Mail.',
              },
              {
                q: 'Bietet ihr Rabatte fur mehrere Anzeigen?',
                a: 'Bei regelmaßigem Bedarf bieten wir individuelle Konditionen an. Kontaktiere uns gerne fur ein Angebot.',
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
