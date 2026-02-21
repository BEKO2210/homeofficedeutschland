import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'HomeOffice Deutschland – Remote Jobs in Deutschland finden',
    template: '%s | HomeOffice Deutschland',
  },
  description:
    'Die Plattform für Remote- und Homeoffice-Jobs in Deutschland. Finde deinen Traumjob oder stelle als Unternehmen die besten Remote-Talente ein.',
  keywords: [
    'Remote Jobs',
    'Homeoffice',
    'Deutschland',
    'Fernarbeit',
    'Work from Home',
    'Remote Arbeit',
    'Stellenangebote',
    'Home Office Jobs',
  ],
  authors: [{ name: 'HomeOffice Deutschland' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://homeofficedeutschland.de',
    siteName: 'HomeOffice Deutschland',
    title: 'HomeOffice Deutschland – Remote Jobs in Deutschland finden',
    description:
      'Die Plattform für Remote- und Homeoffice-Jobs in Deutschland. Finde deinen Traumjob oder stelle als Unternehmen die besten Remote-Talente ein.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HomeOffice Deutschland – Remote Jobs in Deutschland',
    description:
      'Die Plattform für Remote- und Homeoffice-Jobs in Deutschland.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
