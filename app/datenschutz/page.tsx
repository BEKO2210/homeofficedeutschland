import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklarung',
  description: 'Datenschutzerklarung von HomeOffice Deutschland.',
}

export default function DatenschutzPage() {
  return (
    <div className="container-narrow py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Datenschutzerklarung
      </h1>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Allgemeine Hinweise
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Die folgenden Hinweise geben einen einfachen Uberblick daruber,
            was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
            Website besuchen. Personenbezogene Daten sind alle Daten, mit
            denen Sie personlich identifiziert werden konnen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            2. Verantwortliche Stelle
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Verantwortlich fur die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Belkis Aslani<br />
            Vogelsangstraße 32<br />
            71691 Freiberg am Neckar<br />
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
            3. Datenerfassung auf dieser Website
          </h2>

          <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">
            Cookies
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Unsere Internetseiten verwenden teilweise sogenannte Cookies.
            Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten
            keine Viren. Cookies dienen dazu, unser Angebot
            nutzerfreundlicher, effektiver und sicherer zu machen.
          </p>

          <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">
            Server-Log-Dateien
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
            automatisch an uns ubermittelt. Dies sind:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-2">
            Eine Zusammenfuhrung dieser Daten mit anderen Datenquellen wird
            nicht vorgenommen.
          </p>

          <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">
            Kontaktformular / Job-Einreichung
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Wenn Sie uns uber das Kontaktformular oder die Job-Einreichung
            Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular
            inklusive der von Ihnen angegebenen Kontaktdaten zwecks
            Bearbeitung der Anfrage und fur den Fall von Anschlussfragen bei
            uns gespeichert. Diese Daten geben wir nicht ohne Ihre
            Einwilligung weiter.
          </p>

          <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">
            Newsletter
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Wenn Sie den auf der Website angebotenen Newsletter beziehen
            mochten, benotigen wir von Ihnen eine E-Mail-Adresse. Die
            Abmeldung ist jederzeit moglich, z.B. uber einen Link im
            Newsletter selbst oder per E-Mail an uns.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            4. Ihre Rechte
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft uber
            Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
            Empfanger und den Zweck der Datenverarbeitung sowie ein Recht
            auf Berichtigung, Sperrung oder Loschung dieser Daten. Hierzu
            sowie zu weiteren Fragen zum Thema Datenschutz konnen Sie sich
            jederzeit an uns wenden:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Loschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschrankung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenubertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            5. Analyse-Tools und Werbung
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Diese Website nutzt derzeit keine Analyse-Tools oder
            Werbe-Tracking-Dienste.
          </p>
        </section>
      </div>
    </div>
  )
}
