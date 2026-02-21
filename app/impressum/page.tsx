import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und Anbieterkennzeichnung von HomeOffice Deutschland.',
}

export default function ImpressumPage() {
  return (
    <div className="container-narrow py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Angaben gemaß § 5 TMG
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Belkis Aslani<br />
            Vogelsangstraße 32<br />
            71691 Freiberg am Neckar
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Kontakt</h2>
          <p className="text-gray-600 leading-relaxed">
            Telefon: +49 176 81462526<br />
            E-Mail:{' '}
            <a
              href="mailto:belkis.aslani@gmail.com"
              className="text-brand-600 hover:text-brand-700"
            >
              belkis.aslani@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Redaktionell verantwortlich
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Belkis Aslani<br />
            Vogelsangstraße 32<br />
            71691 Freiberg am Neckar
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            EU-Streitschlichtung
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Die Europaische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:text-brand-700"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Haftung fur Inhalte
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Als Diensteanbieter sind wir gemaß § 7 Abs.1 TMG fur eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, ubermittelte oder
            gespeicherte fremde Informationen zu uberwachen oder nach
            Umstanden zu forschen, die auf eine rechtswidrige Tatigkeit
            hinweisen.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberuhrt. Eine diesbezugliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung moglich.
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
            wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Haftung fur Links
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Unser Angebot enthalt Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb konnen wir fur
            diese fremden Inhalte auch keine Gewahr ubernehmen. Fur die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
            oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
            wurden zum Zeitpunkt der Verlinkung auf mogliche Rechtsverstoße
            uberpruft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
          </p>
        </section>
      </div>
    </div>
  )
}
