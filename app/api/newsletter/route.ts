import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Bitte gib eine gultige E-Mail-Adresse an.' },
        { status: 400 }
      )
    }

    // In production, integrate with an email service like:
    // - Mailchimp
    // - ConvertKit
    // - Brevo (formerly Sendinblue)
    // - Resend
    //
    // For now, we log the subscription and return success.
    // This is where you'd add the API call to your email service.
    console.log(`[Newsletter] New subscriber: ${email}`)

    return NextResponse.json(
      { message: 'Erfolgreich angemeldet!' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}
