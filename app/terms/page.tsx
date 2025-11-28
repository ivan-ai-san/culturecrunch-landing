"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { FileText, Lock } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  // Copy protection
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'a' || e.key === 'A' || e.key === 'u' || e.key === 'U')) ||
        (e.metaKey && (e.key === 'c' || e.key === 'C' || e.key === 'a' || e.key === 'A' || e.key === 'u' || e.key === 'U')) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j'))
      ) {
        e.preventDefault()
        return false
      }
    }

    const handleSelectStart = (e: Event) => {
      e.preventDefault()
      return false
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('selectstart', handleSelectStart)
    document.addEventListener('copy', (e) => e.preventDefault())
    document.addEventListener('cut', (e) => e.preventDefault())

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('selectstart', handleSelectStart)
      document.removeEventListener('copy', (e) => e.preventDefault())
      document.removeEventListener('cut', (e) => e.preventDefault())
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background via-muted/30 to-background border-b border-border py-16">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-6">
              <FileText className="w-3 h-3 mr-1" />
              Terms of Use
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 select-none">
              Terms of Use
            </h1>
            <p className="text-lg text-muted-foreground mb-6 select-none">
              Last Updated: November 28, 2025
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span className="select-none">Protected Document - View Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto select-none">

          {/* Company Identification */}
          <div className="mb-8 p-6 bg-muted/50 rounded-xl border">
            <p className="font-semibold text-foreground mb-2">Culture Crunch Pty Ltd</p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>ACN: 693 217 971</p>
              <p>ABN: 67 693 217 971</p>
              <p>Registered Address: 91C Shepherd Street, Bowral, NSW 2576, Australia</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed text-justify">
              These Terms of Use ("Terms") govern your access to and use of the Culture Crunch leadership development platform, including our website at https://culturecrunch.io and all related services (collectively, the "Platform").
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify mt-4">
              Please read these Terms carefully. By accessing or using Culture Crunch, you agree to be bound by these Terms and our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. If you do not agree with any part of these Terms, you may not access or use the Platform.
            </p>
          </div>

          {/* Section 1: Description of Service */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">1. Description of Service</h2>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">1.1 What Culture Crunch Provides</h3>
                <p className="text-muted-foreground mb-3">Culture Crunch is a leadership operating system that replaces traditional training events with embedded, research-backed practices. Our Platform provides:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• <strong className="text-foreground">6-Week Leadership Programs:</strong> Structured programs based on implementation science, habit formation research, and organisational behaviour frameworks</li>
                  <li>• <strong className="text-foreground">AI Coach Companion:</strong> Team-level insights and recommendations powered by artificial intelligence</li>
                  <li>• <strong className="text-foreground">O.O.R.A. Methodology:</strong> Tools for accountable conversations (Ownership, Observation, Request, Agreement)</li>
                  <li>• <strong className="text-foreground">Weekly Rhythms:</strong> 30-minute sessions designed for habit formation and sustainable behaviour change</li>
                  <li>• <strong className="text-foreground">Team-Level Analytics:</strong> Aggregated insights on team dynamics, psychological safety, and leadership effectiveness</li>
                </ul>
              </div>

              <div className="p-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-foreground">1.2 What Culture Crunch Is NOT</h3>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• <strong className="text-foreground">Not Performance Management:</strong> We do not track individual employee performance or provide surveillance capabilities</li>
                  <li>• <strong className="text-foreground">Not Professional Advice:</strong> While informed by research, our Platform does not replace professional HR, legal, or psychological services</li>
                  <li>• <strong className="text-foreground">Not a Guarantee:</strong> Leadership development outcomes vary based on organisational context, readiness, and implementation</li>
                  <li>• <strong className="text-foreground">Not Individual Therapy:</strong> Our service is organisational development, not mental health treatment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: Eligibility and Account Requirements */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">2. Eligibility and Account Requirements</h2>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">2.1 Who Can Use Culture Crunch</h3>
                <p className="text-muted-foreground mb-3">You may use Culture Crunch if you:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• Are at least 18 years of age</li>
                  <li>• Have the authority to bind your organisation to these Terms (for organisational accounts)</li>
                  <li>• Are not prohibited from using our services under applicable laws</li>
                  <li>• Comply with all local laws regarding online conduct and acceptable content</li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">2.2 Account Registration</h3>
                <p className="text-muted-foreground mb-3">To access certain features, you must create an account by providing:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4 mb-4">
                  <li>• Full name and email address</li>
                  <li>• Organisation name and size</li>
                  <li>• Payment information (for paid services)</li>
                  <li>• Any additional information reasonably requested</li>
                </ul>
                <p className="text-muted-foreground mb-2">You agree to:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• Provide accurate, current, and complete information</li>
                  <li>• Maintain and update your information as needed</li>
                  <li>• Keep your password secure and confidential</li>
                  <li>• Notify us immediately of any unauthorised access</li>
                  <li>• Accept responsibility for all activities under your account</li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">2.3 Organisational Accounts</h3>
                <p className="text-muted-foreground mb-3">If you create an account on behalf of an organisation:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• You represent that you have authority to bind that organisation</li>
                  <li>• Both you and the organisation are bound by these Terms</li>
                  <li>• The organisation is responsible for all users under its account</li>
                  <li>• The organisation must notify employees about Culture Crunch use in accordance with workplace privacy laws</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Intellectual Property Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">3. Intellectual Property Rights</h2>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">3.1 Culture Crunch's Intellectual Property</h3>
                <p className="text-muted-foreground mb-3">All content, features, and functionality on the Platform, including but not limited to:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4 mb-4">
                  <li>• Text, graphics, logos, icons, images, and videos</li>
                  <li>• Software code, algorithms, and AI models</li>
                  <li>• The O.O.R.A. methodology and framework</li>
                  <li>• Research-backed program designs and methodologies</li>
                  <li>• User interface design and overall "look and feel"</li>
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  ...are owned by Culture Crunch Pty Ltd and are protected by Australian and international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">3.2 Limited Licence to You</h3>
                <p className="text-muted-foreground mb-3">Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4 mb-4">
                  <li>• Access and use the Platform for your internal business purposes</li>
                  <li>• Download and print materials for internal use only</li>
                  <li>• Share content with team members within your organisation</li>
                </ul>
                <p className="text-muted-foreground mb-2 font-semibold">You may NOT:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• Modify, copy, or create derivative works</li>
                  <li>• Reverse engineer, decompile, or disassemble any software</li>
                  <li>• Remove copyright, trademark, or proprietary notices</li>
                  <li>• Use our content for commercial purposes outside your organisation</li>
                  <li>• Frame, mirror, or create links that alter the Platform's appearance</li>
                  <li>• Use automated tools (bots, scrapers) to access the Platform</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Acceptable Use Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">4. Acceptable Use Policy</h2>

            <div className="space-y-6">
              <div className="p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-foreground">4.1 Permitted Uses</h3>
                <p className="text-muted-foreground mb-3">You may use Culture Crunch to:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• Develop leadership capabilities within your organisation</li>
                  <li>• Access team-level insights and recommendations</li>
                  <li>• Participate in programs and training sessions</li>
                  <li>• Collaborate with your leadership team</li>
                  <li>• Track progress toward leadership development goals</li>
                </ul>
              </div>

              <div className="p-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-foreground">4.2 Prohibited Conduct</h3>
                <p className="text-muted-foreground mb-3">You may NOT:</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Security & Access:</p>
                    <ul className="space-y-1 text-xs text-muted-foreground ml-4">
                      <li>• Attempt to gain unauthorised access to any part of the Platform</li>
                      <li>• Interfere with or disrupt servers, networks, or security features</li>
                      <li>• Introduce viruses, malware, or harmful code</li>
                      <li>• Circumvent authentication or security measures</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Content & Communication:</p>
                    <ul className="space-y-1 text-xs text-muted-foreground ml-4">
                      <li>• Upload unlawful, defamatory, obscene, or offensive content</li>
                      <li>• Harass, abuse, or harm other users</li>
                      <li>• Impersonate any person or entity</li>
                      <li>• Violate anyone's privacy, publicity, or intellectual property rights</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Commercial & Competitive:</p>
                    <ul className="space-y-1 text-xs text-muted-foreground ml-4">
                      <li>• Use the Platform for purposes competitive to Culture Crunch</li>
                      <li>• Resell, lease, or commercialise access to the Platform</li>
                      <li>• Scrape, harvest, or collect user data</li>
                      <li>• Reverse engineer our AI models or methodologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Payment Terms */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">5. Payment Terms</h2>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">5.1 Pricing and Billing</h3>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Prices are in Australian Dollars (AUD) unless otherwise specified</li>
                  <li>• Payment is due according to your agreement (typically 50% upfront, 50% at program midpoint)</li>
                  <li>• We accept payment via bank transfer, credit card, or as agreed in your contract</li>
                  <li>• All fees are exclusive of GST, which will be added as required by law</li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">5.2 Refunds and Cancellations</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Cooling-Off Period:</p>
                    <p className="text-sm text-muted-foreground">You may cancel within 7 days of signing with full refund if no services have been provided.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Post-Program Commencement:</p>
                    <ul className="text-sm text-muted-foreground ml-4">
                      <li>• Refunds are calculated based on services already delivered</li>
                      <li>• Cancellation requires 30 days' written notice</li>
                      <li>• Any materials, insights, or data generated remain your organisation's property</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Disclaimers and Limitations */}
          <div className="mb-12 p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl border border-amber-200 dark:border-amber-800">
            <h2 className="text-2xl font-bold mb-6 text-foreground">6. Disclaimers and Limitations of Liability</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">6.1 Service Provided "AS IS"</h3>
                <p className="text-sm text-muted-foreground">
                  THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO: merchantability or fitness for a particular purpose, non-infringement of third-party rights, uninterrupted, timely, secure, or error-free service.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">6.2 No Professional Advice</h3>
                <p className="text-sm text-muted-foreground">
                  Culture Crunch provides leadership development services informed by research, but we do not provide legal, HR, employment law advice, psychological counselling, financial advice, or medical services. Always consult qualified professionals for specialised advice.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">6.3 AI-Generated Content</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Our AI Coach Companion generates recommendations based on team-level data and research-backed frameworks. However:
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground ml-4">
                  <li>• AI recommendations are advisory only, not directives</li>
                  <li>• Human judgement and organisational context must guide decisions</li>
                  <li>• We do not guarantee specific outcomes from following AI recommendations</li>
                  <li>• Leadership decisions remain the responsibility of organisational leaders</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">6.4 Limitation of Liability</h3>
                <p className="text-sm text-muted-foreground">
                  TO THE MAXIMUM EXTENT PERMITTED BY AUSTRALIAN LAW: Our total liability for all claims arising from your use of Culture Crunch shall not exceed the amounts paid by you to Culture Crunch in the 12 months preceding the claim.
                </p>
              </div>

              <div className="p-4 bg-background rounded-lg">
                <h4 className="text-sm font-semibold text-foreground mb-2">Statutory Rights</h4>
                <p className="text-xs text-muted-foreground">
                  Nothing in these Terms excludes, restricts, or modifies any guarantee, warranty, term, or condition implied by the Australian Consumer Law or other laws that cannot be lawfully excluded.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7: Indemnification */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">7. Indemnification</h2>

            <div className="p-6 bg-background rounded-xl border">
              <p className="text-muted-foreground mb-3">
                You agree to indemnify, defend, and hold harmless Culture Crunch Pty Ltd, its officers, directors, employees, contractors, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising from:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Your violation of these Terms</li>
                <li>• Your violation of any law or regulation</li>
                <li>• Your violation of any third-party rights, including intellectual property or privacy rights</li>
                <li>• Your use or misuse of the Platform</li>
                <li>• Content you submit or make available through the Platform</li>
                <li>• Your negligent or wrongful conduct</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">
                This indemnification obligation survives termination of your account and these Terms.
              </p>
            </div>
          </div>

          {/* Section 8: Privacy and Data Protection */}
          <div className="mb-12 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
            <h2 className="text-2xl font-bold mb-6 text-foreground">8. Privacy and Data Protection</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">8.1 Privacy Policy</h3>
                <p className="text-sm text-muted-foreground">
                  Your use of Culture Crunch is also governed by our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which explains what information we collect and why, how we use and protect your information, your rights under Australian privacy law, and how to contact us with privacy concerns.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">8.2 Workplace Privacy Obligations</h3>
                <p className="text-sm text-muted-foreground mb-2">If you are an employer using Culture Crunch:</p>
                <ul className="space-y-1 text-xs text-muted-foreground ml-4">
                  <li>• You must notify employees about Culture Crunch use in accordance with APP 5 and Fair Work Act requirements</li>
                  <li>• You are responsible for obtaining any necessary consents</li>
                  <li>• You must not use team-level data to make automated decisions about individual employees</li>
                  <li>• You agree to use insights for leadership development purposes only, not performance management or surveillance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">8.3 Data Security</h3>
                <p className="text-sm text-muted-foreground">
                  While we implement industry-standard security measures, no internet transmission is 100% secure. You are responsible for maintaining confidentiality of your login credentials and should notify us immediately if you suspect unauthorised access.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9: Termination */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">9. Termination</h2>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">9.1 Termination by You</h3>
                <p className="text-muted-foreground mb-3">You may terminate your account at any time by:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4 mb-4">
                  <li>• Providing 30 days' written notice to support@culturecrunch.io</li>
                  <li>• Completing any outstanding program commitments</li>
                  <li>• Paying any fees owed for services already provided</li>
                </ul>
                <p className="text-sm text-muted-foreground">Upon termination, your access to the Platform will cease, we will retain data according to our Privacy Policy, and you may export your team-level data within 90 days.</p>
              </div>

              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">9.2 Termination by Culture Crunch</h3>
                <p className="text-muted-foreground mb-3">We may suspend or terminate your access immediately if:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• You violate these Terms or our Acceptable Use Policy</li>
                  <li>• You fail to pay amounts due</li>
                  <li>• Your account is inactive for 12+ months</li>
                  <li>• We cease providing the service (with 90 days' notice)</li>
                  <li>• Required by law or court order</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 10: Dispute Resolution */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">10. Dispute Resolution and Governing Law</h2>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">10.1 Governing Law</h3>
                <p className="text-muted-foreground">
                  These Terms are governed by the laws of New South Wales, Australia, without regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts of New South Wales for any disputes.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">10.2 Informal Resolution First</h3>
                <p className="text-muted-foreground mb-3">Before initiating formal proceedings, you agree to:</p>
                <ol className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>1. Contact us at legal@culturecrunch.io with details of the dispute</li>
                  <li>2. Engage in good-faith negotiations for 30 days</li>
                  <li>3. Consider mediation through a mutually agreed mediator</li>
                </ol>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground italic">
                  <strong className="text-foreground">Note:</strong> Nothing in this section limits your rights under the Australian Consumer Law or other mandatory consumer protections.
                </p>
              </div>
            </div>
          </div>

          {/* Section 11: General Provisions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">11. General Provisions</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Entire Agreement</h4>
                <p className="text-sm text-muted-foreground">These Terms, together with our Privacy Policy, constitute the entire agreement between you and Culture Crunch regarding use of the Platform.</p>
              </div>
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Modifications</h4>
                <p className="text-sm text-muted-foreground">Material changes: 30 days' advance notice via email. Minor changes: Posted on website, effective immediately.</p>
              </div>
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Assignment</h4>
                <p className="text-sm text-muted-foreground">You may not assign or transfer your rights without our written consent. We may assign our rights to any affiliate or in connection with a merger.</p>
              </div>
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Severability</h4>
                <p className="text-sm text-muted-foreground">If any provision is found invalid, remaining provisions remain in full force and effect.</p>
              </div>
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Force Majeure</h4>
                <p className="text-sm text-muted-foreground">We are not liable for delays resulting from circumstances beyond our reasonable control.</p>
              </div>
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Relationship</h4>
                <p className="text-sm text-muted-foreground">These Terms do not create any partnership, joint venture, employment, or agency relationship.</p>
              </div>
            </div>
          </div>

          {/* Section 12: Australian Consumer Law */}
          <div className="mb-12 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-2xl border border-purple-200 dark:border-purple-800">
            <h2 className="text-2xl font-bold mb-6 text-foreground">12. Specific Terms for Australian Users</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">12.1 Australian Consumer Law (ACL)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Nothing in these Terms excludes, restricts, or modifies statutory guarantees under the Australian Consumer Law or any other consumer protections that cannot be lawfully excluded.
                </p>
                <p className="text-sm text-muted-foreground">
                  Our goods and services come with guarantees that cannot be excluded under the ACL. For major failures with the service, you are entitled to cancel your service contract with us, a refund for the unused portion, and compensation for reasonably foreseeable loss or damage.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">12.2 Unfair Contract Terms</h3>
                <p className="text-sm text-muted-foreground">
                  We have drafted these Terms to comply with the unfair contract terms provisions of the ACL. If you believe any term is unfair, please contact us at legal@culturecrunch.io before agreeing to these Terms.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">12.3 GST</h3>
                <p className="text-sm text-muted-foreground">
                  All fees are exclusive of Goods and Services Tax (GST) unless otherwise stated. Where GST applies, it will be added to the price and shown separately on invoices.
                </p>
              </div>
            </div>
          </div>

          {/* Section 13: Contact Information */}
          <div className="mb-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
            <h2 className="text-2xl font-bold mb-6 text-foreground">13. Contact Information</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">General Inquiries</p>
                <p className="text-sm text-muted-foreground">Email: support@culturecrunch.io</p>
                <p className="text-xs text-muted-foreground">Response time: Within 2 business days</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Legal Matters</p>
                <p className="text-sm text-muted-foreground">Email: legal@culturecrunch.io</p>
                <p className="text-xs text-muted-foreground">(Please include "Legal Notice" in subject line)</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Privacy Concerns</p>
                <p className="text-sm text-muted-foreground">Email: privacy@culturecrunch.io</p>
                <p className="text-xs text-muted-foreground">Response time: Within 5 business days</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Mailing Address</p>
                <div className="text-sm text-muted-foreground">
                  <p>Culture Crunch Pty Ltd</p>
                  <p>91C Shepherd Street</p>
                  <p>Bowral, NSW 2576, Australia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl border border-green-200 dark:border-green-800 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Acknowledgment</h3>
            <p className="text-muted-foreground mb-4">
              BY ACCESSING OR USING CULTURECRUNCH, YOU ACKNOWLEDGE THAT:
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>You have read and understood these Terms</p>
              <p>You agree to be bound by these Terms and our Privacy Policy</p>
              <p>You have the authority to agree to these Terms on behalf of your organisation (if applicable)</p>
              <p>You are at least 18 years of age</p>
              <p>Your use of the Platform complies with all applicable laws</p>
            </div>
          </div>

          {/* Effective Date */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p className="mb-2"><strong className="text-foreground">Document Version:</strong> 1.0</p>
            <p className="mb-2"><strong className="text-foreground">Effective Date:</strong> November 28, 2025</p>
            <p className="italic">© 2025 Culture Crunch Pty Ltd. All rights reserved.</p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
