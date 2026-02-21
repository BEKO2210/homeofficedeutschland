import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fur Unternehmen',
  description:
    'Finden Sie die besten Remote-Talente fur Ihr Unternehmen. Veroffentlichen Sie Stellenanzeigen auf HomeOffice Deutschland.',
}

export default function FuerUnternehmenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-500/20 via-transparent to-transparent" />
        <div className="relative container-wide py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm text-white/70 mb-6 border border-white/10">
              Fur Arbeitgeber
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Finde Remote-Talente, die wirklich passen
            </h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              HomeOffice Deutschland verbindet dein Unternehmen mit qualifizierten
              Fachkraften, die gezielt nach Remote- und Homeoffice-Positionen suchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/job-einstellen" className="btn-primary !bg-white !text-gray-900 hover:!bg-gray-100 !px-8 !py-4 text-base">
                Jetzt Job einstellen
              </Link>
              <Link href="/preise" className="btn-outline !border-gray-600 !text-gray-300 hover:!bg-gray-800 !px-8 !py-4 text-base">
                Preise ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-heading">Warum HomeOffice Deutschland?</h2>
            <p className="section-subheading mt-4 mx-auto">
              Die Vorteile einer spezialisierten Remote-Job-Plattform
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
                title: 'Gezielte Reichweite',
                description:
                  'Erreiche Fachkrafte, die aktiv nach Remote-Arbeit suchen — kein Streuverlust wie auf allgemeinen Jobportalen.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
                title: 'In 5 Minuten online',
                description:
                  'Erstelle und veroffentliche deine Stellenanzeige in wenigen Minuten — ohne umstandliche Registrierung.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                ),
                title: 'Faire Preise',
                description:
                  'Die ersten 10 Anzeigen sind kostenlos. Danach nur 49 EUR pro Stellenanzeige — keine Abos, keine versteckten Kosten.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236c.016.003.032.007.048.011.277-.318.262-.8-.022-1.105a1.648 1.648 0 0 0-1.4-.533 1.502 1.502 0 0 0-1.308 1.025c-.082.272-.326.452-.61.452H7.41a2.25 2.25 0 0 1-2.25-2.25v-.074c0-.568.422-1.048.987-1.106a48.554 48.554 0 0 1 10.271 0c.565.058.987.538.987 1.106v.074a2.25 2.25 0 0 1-2.25 2.25h-.009" />
                  </svg>
                ),
                title: 'Deutschland-Fokus',
                description:
                  'Speziell fur den deutschen Markt optimiert — mit deutschsprachigen Kandidaten und DSGVO-konform.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                ),
                title: 'Newsletter-Reichweite',
                description:
                  'Deine Stellenanzeige wird an unsere Newsletter-Abonnenten versendet, die gezielt nach Remote-Jobs suchen.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                ),
                title: 'Transparente Ergebnisse',
                description:
                  'Verfolge die Performance deiner Anzeige mit Klickzahlen und Bewerbungsstatistiken.',
              },
            ].map((item) => (
              <div key={item.title} className="card !p-8">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-narrow text-center">
          <h2 className="section-heading">
            Bereit, dein Remote-Team aufzubauen?
          </h2>
          <p className="section-subheading mt-4 mx-auto">
            Starte kostenlos und veroffentliche deine erste Stellenanzeige in
            wenigen Minuten.
          </p>
          <div className="mt-8">
            <Link href="/job-einstellen" className="btn-primary !px-8 !py-4 text-base">
              Jetzt Job einstellen — kostenlos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
