import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Allgemeine Geschaftsbedingungen',
  description: 'AGB von HomeOffice Deutschland.',
}

export default function AGBPage() {
  return (
    <div className="container-narrow py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Allgemeine Geschaftsbedingungen (AGB)
      </h1>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            § 1 Geltungsbereich
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Diese Allgemeinen Geschaftsbedingungen gelten fur die Nutzung der
            Plattform HomeOffice Deutschland (homeofficedeutschland.de),
            betrieben von Belkis Aslani, Vogelsangstraße 32, 71691 Freiberg am
            Neckar. Sie regeln das Vertragsverhaltnis zwischen dem Betreiber und
            den Nutzern der Plattform (Arbeitgeber und Jobsuchende).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            § 2 Leistungsbeschreibung
          </h2>
          <p className="text-gray-600 leading-relaxed">
            HomeOffice Deutschland ist eine Online-Plattform fur
            Stellenanzeigen im Bereich Remote-Arbeit und Homeoffice in
            Deutschland. Die Plattform ermoglicht es Arbeitgebern,
            Stellenanzeigen zu veroffentlichen, und Jobsuchenden, diese
            Stellenanzeigen zu durchsuchen und sich direkt beim Arbeitgeber zu
            bewerben.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            § 3 Preise und Zahlung
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Die ersten 10 Stellenanzeigen pro Unternehmen sind kostenlos.
            </li>
            <li>
              Jede weitere Stellenanzeige kostet einmalig 49 EUR (inkl. MwSt.).
            </li>
            <li>Jede Stellenanzeige ist 30 Tage lang sichtbar.</li>
            <li>
              Die Zahlung erfolgt auf Vorkasse vor Veroffentlichung der Anzeige.
            </li>
            <li>
              Fur Jobsuchende ist die Nutzung der Plattform vollstandig
              kostenlos.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            § 4 Pflichten der Nutzer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Arbeitgeber verpflichten sich, ausschließlich wahrheitsgemäße und
            vollstandige Angaben in ihren Stellenanzeigen zu machen. Insbesondere
            mussen die Angaben zum Unternehmen, zur Position, zur Vergutung und
            zur Remote-Arbeitsmoglichkeit korrekt sein.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Es ist untersagt, diskriminierende, irrefuhrende oder rechtswidrige
            Inhalte zu veroffentlichen. Der Betreiber behalt sich das Recht vor,
            Stellenanzeigen ohne Angabe von Grunden abzulehnen oder zu
            entfernen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            § 5 Haftung
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Der Betreiber haftet nicht fur die Richtigkeit, Vollstandigkeit oder
            Aktualitat der von Arbeitgebern eingestellten Stellenanzeigen. Der
            Betreiber ubernimmt keine Vermittlungsgarantie und haftet nicht fur
            das Zustandekommen eines Arbeitsverhaltnisses.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Die Haftung des Betreibers ist auf Vorsatz und grobe Fahrlassigkeit
            beschrankt, soweit gesetzlich zulassig.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            § 6 Widerruf und Kundigung
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nach Veroffentlichung einer Stellenanzeige ist ein Widerruf nicht
            moglich, da die Dienstleistung sofort erbracht wird. Der Arbeitgeber
            kann jedoch jederzeit die Loschung seiner Stellenanzeige vor Ablauf
            der 30-Tage-Frist beantragen.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Newsletter-Abonnenten konnen ihr Abonnement jederzeit uber den
            Abmeldelink in jeder E-Mail kundigen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            § 7 Datenschutz
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Informationen zur Verarbeitung personenbezogener Daten finden Sie in
            unserer{' '}
            <a
              href="/datenschutz"
              className="text-brand-600 hover:text-brand-700"
            >
              Datenschutzerklarung
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            § 8 Schlussbestimmungen
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist
            Freiberg am Neckar, soweit gesetzlich zulassig. Sollten einzelne
            Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der
            ubrigen Bestimmungen unberuhrt.
          </p>
        </section>

        <section>
          <p className="text-sm text-gray-400">
            Stand: Februar 2026
          </p>
        </section>
      </div>
    </div>
  )
}
