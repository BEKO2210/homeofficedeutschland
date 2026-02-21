import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const { companyName, email, jobTitle, description } = data

    // Basic validation
    if (!companyName || !email || !jobTitle || !description) {
      return NextResponse.json(
        { error: 'Bitte alle Pflichtfelder ausfüllen.' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Bitte eine gultige E-Mail-Adresse angeben.' },
        { status: 400 }
      )
    }

    if (description.length < 50) {
      return NextResponse.json(
        { error: 'Die Beschreibung sollte mindestens 50 Zeichen lang sein.' },
        { status: 400 }
      )
    }

    // In production, integrate with:
    // - Email service (Resend, SendGrid) to notify admin
    // - Database to store job submissions
    // - Payment processor (Stripe) for paid listings
    //
    // For now, log the submission and return success.
    console.log(`[Job Submission] ${jobTitle} at ${companyName} by ${email}`)

    return NextResponse.json(
      { message: 'Stellenanzeige erfolgreich eingereicht!' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}
