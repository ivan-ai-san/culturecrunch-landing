import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

// Email addresses to receive submissions
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'hello@culturecrunch.io'
const FROM_EMAIL = process.env.FROM_EMAIL || 'Culture Crunch <noreply@culturecrunch.io>'

// Personal email domains to block for lead magnet - require business email
const PERSONAL_EMAIL_DOMAINS = [
  'gmail.com', 'googlemail.com',
  'yahoo.com', 'yahoo.co.uk', 'yahoo.com.au', 'yahoo.co.nz',
  'hotmail.com', 'hotmail.co.uk', 'hotmail.com.au',
  'outlook.com', 'live.com', 'live.com.au', 'msn.com',
  'aol.com', 'aol.co.uk',
  'icloud.com', 'me.com', 'mac.com',
  'protonmail.com', 'proton.me',
  'mail.com', 'email.com',
  'zoho.com', 'yandex.com', 'gmx.com', 'gmx.net',
  'fastmail.com', 'tutanota.com',
  'inbox.com', 'mail.ru', 'qq.com',
  'naver.com', 'daum.net',
  'rediffmail.com', 'libero.it',
  'web.de', 't-online.de', 'freenet.de',
  'orange.fr', 'wanadoo.fr', 'laposte.net',
  'seznam.cz', 'wp.pl', 'o2.pl',
  'mailinator.com', 'guerrillamail.com', 'tempmail.com'
]

function isBusinessEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase()
  if (!domain) return false
  return !PERSONAL_EMAIL_DOMAINS.includes(domain)
}

export async function POST(request: NextRequest) {
  // Check for API key at runtime, not build time
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured')
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await request.json()
    const { type, ...data } = body

    let subject = ''
    let htmlContent = ''
    let textContent = ''

    switch (type) {
      case 'contact':
        // Validate business email for demo requests
        if (!isBusinessEmail(data.email)) {
          return NextResponse.json(
            { error: 'Please use your work email address' },
            { status: 400 }
          )
        }
        subject = `🎯 New Demo Request from ${data.firstName} ${data.lastName}`
        htmlContent = generateContactEmail(data)
        textContent = generateContactText(data)
        break

      case 'newsletter':
        // Validate business email for newsletter subscriptions
        if (!isBusinessEmail(data.email)) {
          return NextResponse.json(
            { error: 'Please use your work email address' },
            { status: 400 }
          )
        }
        console.log('Processing newsletter subscription for:', data.email)
        subject = `📬 New Newsletter Subscriber: ${data.email}`
        htmlContent = generateNewsletterEmail(data)
        textContent = `New newsletter subscriber: ${data.email}`
        break

      case 'lead-magnet':
        // Validate business email for lead magnet downloads
        if (!isBusinessEmail(data.email)) {
          return NextResponse.json(
            { error: 'Please use your work email address' },
            { status: 400 }
          )
        }
        subject = `📥 Lead Magnet Download: ${data.email}`
        htmlContent = generateLeadMagnetEmail(data)
        textContent = `New lead magnet download request from: ${data.email}`
        break

      case 'white-paper':
        // Validate business email for white paper access
        if (!isBusinessEmail(data.email)) {
          return NextResponse.json(
            { error: 'Please use your work email address' },
            { status: 400 }
          )
        }
        subject = `📄 White Paper Access Request: ${data.firstName} ${data.lastName}`
        htmlContent = generateWhitePaperEmail(data)
        textContent = `New white paper access request from: ${data.firstName} ${data.lastName} (${data.email})`
        break

      default:
        return NextResponse.json(
          { error: 'Invalid form type' },
          { status: 400 }
        )
    }

    console.log('Sending notification email:', { type, subject, to: NOTIFICATION_EMAIL, from: FROM_EMAIL })

    // Send notification email to team
    const { data: emailData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [NOTIFICATION_EMAIL],
      subject,
      html: htmlContent,
      text: textContent,
    })

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2))
      return NextResponse.json(
        { error: error.message || 'Failed to send email', details: error },
        { status: 500 }
      )
    }

    console.log('Notification sent successfully:', { type, emailId: emailData?.id })

    // Send confirmation email to user
    let confirmationSubject = ''
    let confirmationHtml = ''
    let confirmationText = ''
    const userEmail = data.email

    switch (type) {
      case 'contact':
        confirmationSubject = 'Thanks for reaching out - Culture Crunch'
        confirmationHtml = generateContactConfirmation(data)
        confirmationText = `Hi ${data.firstName}, thanks for requesting a demo! We'll be in touch within 24 hours.`
        break
      case 'newsletter':
        confirmationSubject = 'Welcome to Weekly Leadership Insights'
        confirmationHtml = generateNewsletterConfirmation()
        confirmationText = 'Welcome! You\'re now subscribed to Weekly Leadership Insights from Culture Crunch.'
        break
      case 'lead-magnet':
        confirmationSubject = 'Your Free Guide: 5 Warning Signs'
        confirmationHtml = generateLeadMagnetConfirmation()
        confirmationText = 'Here\'s your free guide: 5 Warning Signs Your Culture is Costing You Talent.'
        break
      case 'white-paper':
        confirmationSubject = 'Your White Paper Access - Culture Crunch'
        confirmationHtml = generateWhitePaperConfirmation(data)
        confirmationText = `Hi ${data.firstName}, here's your access to the white paper: From Training Events to Operating Systems.`
        break
    }

    if (userEmail && confirmationSubject) {
      console.log('Sending confirmation email to:', userEmail)
      const { error: confirmError } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [userEmail],
        subject: confirmationSubject,
        html: confirmationHtml,
        text: confirmationText,
      })

      if (confirmError) {
        console.error('Confirmation email error:', JSON.stringify(confirmError, null, 2))
        // Don't fail the request, just log the error
      } else {
        console.log('Confirmation email sent to:', userEmail)
      }
    }

    return NextResponse.json({ success: true, id: emailData?.id })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function generateContactEmail(data: {
  firstName: string
  lastName: string
  email: string
  company: string
  role: string
  size: string
  message: string
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
          .field { margin-bottom: 16px; }
          .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
          .value { font-size: 16px; color: #111827; margin-top: 4px; }
          .message-box { background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 8px; }
          .badge { display: inline-block; background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">🎯 New Demo Request</h1>
            <p style="margin: 8px 0 0; opacity: 0.9;">Someone wants to see Culture Crunch in action!</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Contact</div>
              <div class="value">${data.firstName} ${data.lastName}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            <div class="field">
              <div class="label">Company</div>
              <div class="value">${data.company}</div>
            </div>
            <div class="field">
              <div class="label">Role</div>
              <div class="value">${data.role}</div>
            </div>
            <div class="field">
              <div class="label">Organisation Size</div>
              <div class="value"><span class="badge">${data.size || 'Not specified'}</span></div>
            </div>
            ${data.message ? `
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${data.message}</div>
            </div>
            ` : ''}
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
            <p style="font-size: 14px; color: #6b7280; margin: 0;">
              Submitted at ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })} AEST
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}

function generateContactText(data: {
  firstName: string
  lastName: string
  email: string
  company: string
  role: string
  size: string
  message: string
}) {
  return `
New Demo Request

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Company: ${data.company}
Role: ${data.role}
Organisation Size: ${data.size || 'Not specified'}
${data.message ? `Message: ${data.message}` : ''}

Submitted at ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })} AEST
  `.trim()
}

function generateNewsletterEmail(data: { email: string }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">📬 New Newsletter Subscriber</h1>
            <p style="margin: 8px 0 0; opacity: 0.9;">Weekly Leadership Insights signup</p>
          </div>
          <div class="content">
            <p style="font-size: 18px; margin: 0 0 16px;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p style="font-size: 14px; color: #6b7280; margin: 0;">
              Add this email to your newsletter list.
            </p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
            <p style="font-size: 14px; color: #6b7280; margin: 0;">
              Submitted at ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })} AEST
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}

function generateLeadMagnetEmail(data: { email: string; guide?: string }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
          .badge { display: inline-block; background: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">📥 Lead Magnet Download</h1>
            <p style="margin: 8px 0 0; opacity: 0.9;">Someone downloaded the free guide!</p>
          </div>
          <div class="content">
            <p style="font-size: 18px; margin: 0 0 16px;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p style="margin: 0 0 16px;"><strong>Downloaded:</strong> <span class="badge">${data.guide || '5 Warning Signs Guide'}</span></p>
            <p style="font-size: 14px; color: #6b7280; margin: 0;">
              This is a warm lead - they're interested in culture transformation.
            </p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
            <p style="font-size: 14px; color: #6b7280; margin: 0;">
              Submitted at ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })} AEST
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}

// ============================================
// USER CONFIRMATION EMAIL TEMPLATES
// ============================================

function generateContactConfirmation(data: { firstName: string }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); color: white; padding: 40px 30px; border-radius: 12px 12px 0 0; text-align: center; }
          .logo { font-size: 28px; font-weight: 800; margin-bottom: 8px; }
          .content { background: white; padding: 40px 30px; border: 1px solid #e5e7eb; border-top: none; }
          .footer { background: #f9fafb; padding: 24px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center; }
          .btn { display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 20px 0; }
          h1 { margin: 0 0 16px; color: #111827; }
          p { margin: 0 0 16px; color: #4b5563; }
          .highlight { background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 24px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">Culture Crunch</div>
            <p style="margin: 0; opacity: 0.9;">The Leadership & Culture Operating System</p>
          </div>
          <div class="content">
            <h1>Thanks for reaching out, ${data.firstName}!</h1>
            <p>We've received your demo request and we're excited to show you how Culture Crunch can transform your organisation's culture.</p>

            <div class="highlight">
              <p style="margin: 0; font-weight: 600; color: #111827;">What happens next?</p>
              <p style="margin: 8px 0 0;">One of our team members will be in touch within 24 hours to schedule a personalised demo at a time that works for you.</p>
            </div>

            <p>In the meantime, you might find these resources helpful:</p>
            <ul style="color: #4b5563; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Learn about our <a href="https://culturecrunch.io/methodology" style="color: #7c3aed;">methodology</a></li>
              <li>Explore how Culture Crunch transforms leadership culture</li>
            </ul>
          </div>
          <div class="footer">
            <p style="margin: 0 0 8px; color: #6b7280; font-size: 14px;">Have questions? We're here to help.</p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;"><a href="mailto:hello@culturecrunch.io" style="color: #7c3aed;">hello@culturecrunch.io</a></p>
            <p style="margin: 16px 0 0; color: #9ca3af; font-size: 12px;">© ${new Date().getFullYear()} Culture Crunch Pty Ltd</p>
          </div>
        </div>
      </body>
    </html>
  `
}

function generateNewsletterConfirmation() {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); color: white; padding: 40px 30px; border-radius: 12px 12px 0 0; text-align: center; }
          .logo { font-size: 28px; font-weight: 800; margin-bottom: 8px; }
          .content { background: white; padding: 40px 30px; border: 1px solid #e5e7eb; border-top: none; }
          .footer { background: #f9fafb; padding: 24px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center; }
          h1 { margin: 0 0 16px; color: #111827; }
          p { margin: 0 0 16px; color: #4b5563; }
          .highlight { background: linear-gradient(135deg, #f3e8ff 0%, #e0e7ff 100%); padding: 24px; border-radius: 12px; margin: 24px 0; border: 1px solid #c4b5fd; }
          .check { color: #22c55e; font-size: 48px; margin-bottom: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">Culture Crunch</div>
            <p style="margin: 0; opacity: 0.9;">Weekly Leadership Insights</p>
          </div>
          <div class="content" style="text-align: center;">
            <div class="check">✓</div>
            <h1>You're subscribed!</h1>
            <p>Welcome to Weekly Leadership Insights - evidence-based culture tips delivered every Tuesday.</p>

            <div class="highlight">
              <p style="margin: 0; font-weight: 600; color: #5b21b6;">What to expect:</p>
              <p style="margin: 12px 0 0; color: #6b7280;">Practical, research-backed insights on building accountable leadership and transforming organisational culture. No fluff - just actionable strategies you can implement straight away.</p>
            </div>

            <p style="color: #6b7280; font-size: 14px;">Keep an eye on your inbox - your first insight is on its way!</p>
          </div>
          <div class="footer">
            <p style="margin: 0 0 8px; color: #6b7280; font-size: 14px;">Questions or feedback? We'd love to hear from you.</p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;"><a href="mailto:hello@culturecrunch.io" style="color: #7c3aed;">hello@culturecrunch.io</a></p>
            <p style="margin: 16px 0 0; color: #9ca3af; font-size: 12px;">© ${new Date().getFullYear()} Culture Crunch Pty Ltd</p>
            <p style="margin: 8px 0 0; color: #9ca3af; font-size: 11px;">You can unsubscribe at any time by clicking the link in our emails.</p>
          </div>
        </div>
      </body>
    </html>
  `
}

function generateLeadMagnetConfirmation() {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); color: white; padding: 40px 30px; border-radius: 12px 12px 0 0; text-align: center; }
          .logo { font-size: 28px; font-weight: 800; margin-bottom: 8px; }
          .content { background: white; padding: 40px 30px; border: 1px solid #e5e7eb; border-top: none; }
          .footer { background: #f9fafb; padding: 24px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center; }
          .btn { display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); color: white !important; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 24px 0; font-size: 16px; }
          h1 { margin: 0 0 16px; color: #111827; }
          h2 { margin: 24px 0 12px; color: #111827; font-size: 18px; }
          p { margin: 0 0 16px; color: #4b5563; }
          .warning-sign { background: linear-gradient(135deg, #faf5ff 0%, #eef2ff 100%); padding: 20px; border-radius: 12px; margin: 16px 0; border-left: 4px solid #7c3aed; text-align: left; }
          .warning-number { display: inline-block; background: #7c3aed; color: white; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-weight: bold; font-size: 14px; margin-right: 12px; }
          .warning-title { font-weight: 600; color: #5b21b6; font-size: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">Culture Crunch</div>
            <p style="margin: 0; opacity: 0.9;">Your Free Guide</p>
          </div>
          <div class="content">
            <h1 style="text-align: center;">5 Warning Signs Your Culture is Costing You Talent</h1>
            <p style="text-align: center; font-style: italic; color: #6b7280;">Spot the hidden patterns before your best people leave</p>

            <div class="warning-sign">
              <p style="margin: 0;"><span class="warning-number">1</span><span class="warning-title">The 'Quiet Quitting' Signals</span></p>
              <p style="margin: 12px 0 0; font-size: 14px;">Watch for declining participation in meetings, reduced initiative, and minimal contribution beyond basic requirements. These subtle disengagement patterns often precede formal resignations by 3-6 months.</p>
            </div>

            <div class="warning-sign">
              <p style="margin: 0;"><span class="warning-number">2</span><span class="warning-title">Exit Interviews Lie</span></p>
              <p style="margin: 12px 0 0; font-size: 14px;">By the time someone leaves, they've mentally checked out. Track real-time engagement metrics, skip-level conversation frequency, and psychological safety scores instead. The truth lives in patterns, not post-departure interviews.</p>
            </div>

            <div class="warning-sign">
              <p style="margin: 0;"><span class="warning-number">3</span><span class="warning-title">The Meeting Pattern That Predicts Turnover</span></p>
              <p style="margin: 12px 0 0; font-size: 14px;">When high performers stop challenging ideas in meetings and default to agreement, they're preparing to leave. Healthy debate indicates investment; silence signals withdrawal.</p>
            </div>

            <div class="warning-sign">
              <p style="margin: 0;"><span class="warning-number">4</span><span class="warning-title">Measuring Psychological Safety in 60 Seconds</span></p>
              <p style="margin: 12px 0 0; font-size: 14px;">Ask yourself: "When was the last time someone disagreed with me in a meeting?" If you can't remember, your team doesn't feel safe to speak up. This single metric predicts retention better than engagement surveys.</p>
            </div>

            <div class="warning-sign">
              <p style="margin: 0;"><span class="warning-number">5</span><span class="warning-title">The $50K Leadership Behaviour</span></p>
              <p style="margin: 12px 0 0; font-size: 14px;">Leaders who fail to follow up on commitments and agreements create a culture where promises mean nothing. Each departure costs an average of $50,000 in replacement and lost productivity - and broken trust is the silent driver.</p>
            </div>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;">

            <div style="text-align: center;">
              <p style="font-weight: 600; color: #111827;">Ready to transform your leadership culture?</p>
              <p>See how Culture Crunch helps organisations build the accountable leadership that retains top talent.</p>
              <a href="https://culturecrunch.io/#contact" class="btn" style="color: white; background: linear-gradient(135deg, #059669 0%, #0d9488 100%);">Book a Demo</a>
            </div>
          </div>
          <div class="footer">
            <p style="margin: 0 0 8px; color: #6b7280; font-size: 14px;">Questions? We're here to help.</p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;"><a href="mailto:hello@culturecrunch.io" style="color: #7c3aed;">hello@culturecrunch.io</a></p>
            <p style="margin: 16px 0 0; color: #9ca3af; font-size: 12px;">© ${new Date().getFullYear()} Culture Crunch Pty Ltd</p>
          </div>
        </div>
      </body>
    </html>
  `
}

function generateWhitePaperEmail(data: { firstName: string; lastName: string; email: string }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
          .field { margin-bottom: 16px; }
          .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
          .value { font-size: 16px; color: #111827; margin-top: 4px; }
          .badge { display: inline-block; background: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">📄 White Paper Access Request</h1>
            <p style="margin: 8px 0 0; opacity: 0.9;">Someone requested the full white paper!</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${data.firstName} ${data.lastName}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            <div class="field">
              <div class="label">Resource</div>
              <div class="value"><span class="badge">White Paper: From Training Events to Operating Systems</span></div>
            </div>
            <p style="font-size: 14px; color: #6b7280; margin: 16px 0 0;">
              This is a highly qualified lead - they're interested in the academic foundation of culture transformation.
            </p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
            <p style="font-size: 14px; color: #6b7280; margin: 0;">
              Submitted at ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })} AEST
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}

function generateWhitePaperConfirmation(data: { firstName: string }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); color: white; padding: 40px 30px; border-radius: 12px 12px 0 0; text-align: center; }
          .logo { font-size: 28px; font-weight: 800; margin-bottom: 8px; }
          .content { background: white; padding: 40px 30px; border: 1px solid #e5e7eb; border-top: none; }
          .footer { background: #f9fafb; padding: 24px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center; }
          .btn { display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); color: white !important; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 24px 0; font-size: 16px; }
          h1 { margin: 0 0 16px; color: #111827; }
          p { margin: 0 0 16px; color: #4b5563; }
          .paper-preview { background: linear-gradient(135deg, #faf5ff 0%, #eef2ff 100%); padding: 24px; border-radius: 12px; margin: 24px 0; border: 1px solid #c4b5fd; text-align: center; }
          .paper-icon { font-size: 48px; margin-bottom: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">Culture Crunch</div>
            <p style="margin: 0; opacity: 0.9;">Your White Paper Access</p>
          </div>
          <div class="content" style="text-align: center;">
            <h1>Welcome, ${data.firstName}!</h1>
            <p>Thank you for your interest in the research behind Culture Crunch. You now have access to our comprehensive white paper.</p>

            <div class="paper-preview">
              <div class="paper-icon">📄</div>
              <p style="margin: 0 0 8px; font-weight: 600; color: #5b21b6; font-size: 18px;">From Training Events to Operating Systems</p>
              <p style="margin: 0 0 16px; font-size: 14px; color: #6b7280;">Why Culture Transformation Efforts Fail and How to Build Leadership That Sticks</p>
              <a href="https://culturecrunch.io/white-paper" class="btn" style="color: white;">Access White Paper →</a>
            </div>

            <p><strong>Key highlights include:</strong></p>
            <ul style="text-align: left; color: #4b5563; padding-left: 20px;">
              <li style="margin-bottom: 8px;">100+ peer-reviewed citations across 10 research domains</li>
              <li style="margin-bottom: 8px;">Evidence-based analysis of why 81% of training fails</li>
              <li style="margin-bottom: 8px;">The science behind habit formation (median 66 days)</li>
              <li style="margin-bottom: 8px;">ROI data showing $7:$1 average returns</li>
              <li>The O.O.R.A. methodology framework</li>
            </ul>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;">

            <p style="font-weight: 600; color: #111827;">Want to see the research in action?</p>
            <p>Book a demo to see how we apply these evidence-based principles to transform leadership culture.</p>
            <a href="https://culturecrunch.io/#contact" class="btn" style="color: white; background: linear-gradient(135deg, #059669 0%, #0d9488 100%);">Book a Demo</a>
          </div>
          <div class="footer">
            <p style="margin: 0 0 8px; color: #6b7280; font-size: 14px;">Questions about the research? We'd love to discuss.</p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;"><a href="mailto:hello@culturecrunch.io" style="color: #7c3aed;">hello@culturecrunch.io</a></p>
            <p style="margin: 16px 0 0; color: #9ca3af; font-size: 12px;">© ${new Date().getFullYear()} Culture Crunch Pty Ltd</p>
          </div>
        </div>
      </body>
    </html>
  `
}
