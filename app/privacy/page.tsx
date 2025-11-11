"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock } from "lucide-react"

export default function PrivacyPage() {
  // Copy protection
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable keyboard shortcuts for copying
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

    // Disable text selection
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
              <Shield className="w-3 h-3 mr-1" />
              Privacy Policy
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 select-none">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-6 select-none">
              Last Updated: November 11, 2025
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

          {/* Introduction */}
          <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed text-justify">
              At CultureCrunch, we believe privacy starts with minimalism. This Privacy Policy explains how we collect, use, and protect your information when you use our leadership development platform at https://culturecrunch.io. We've designed our system around a core principle: collect only what matters, at the team level, to power leadership transformation without compromising individual privacy.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify mt-4">
              Please read this privacy policy carefully. If you do not agree with these terms, please do not access our platform or use our services.
            </p>
          </div>

          {/* Privacy Philosophy */}
          <div className="mb-12 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Privacy Philosophy: Minimalism by Design</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              CultureCrunch operates on <strong className="text-foreground">team-level data only</strong>. We don't track individual performance scores, personal assessments, or granular behavioural metrics. Our AI Coach Companion monitors collective team signals (clarity, trust, energy), not individual employee surveillance. This means:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">No individual performance tracking</strong> – we measure team dynamics, not personal productivity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Aggregate insights only</strong> – data rolls up to team level, protecting individual privacy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Background monitoring without intrusion</strong> – patterns emerge from team interactions, not personal surveillance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">You control what you share</strong> – participation in weekly pulses and practices is transparent and voluntary</span>
              </li>
            </ul>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Information We Collect</h2>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">1. Account and Organisation Information</h3>
                <p className="text-muted-foreground mb-3">When you register for CultureCrunch, we collect:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• <strong className="text-foreground">Contact details</strong>: Name, email address, phone number, job title</li>
                  <li>• <strong className="text-foreground">Organisation information</strong>: Company name, industry, team size, organisational structure</li>
                  <li>• <strong className="text-foreground">Account credentials</strong>: Username and encrypted password</li>
                  <li>• <strong className="text-foreground">Billing information</strong>: Payment details, billing address (processed securely through third-party payment processors)</li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">2. Team-Level Usage Data</h3>
                <p className="text-muted-foreground mb-3">Our platform collects <strong className="text-foreground">aggregated team data</strong> to power our AI Coach Companion and provide leadership insights:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4 mb-4">
                  <li>• Weekly pulse responses (team-level ratings on clarity, trust, and energy)</li>
                  <li>• Leadership rhythm completion tracking</li>
                  <li>• Conversation patterns (frequency and type, not transcripts)</li>
                  <li>• Goal and commitment tracking</li>
                  <li>• Dashboard interactions</li>
                </ul>
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">What we DON'T collect:</p>
                  <ul className="space-y-1 text-xs text-red-800 dark:text-red-200 ml-4">
                    <li>• Individual employee performance scores</li>
                    <li>• Personal productivity metrics</li>
                    <li>• Private conversation content or recordings</li>
                    <li>• Detailed behavioural surveillance data</li>
                    <li>• Biometric or location tracking</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">3. Technical Information</h3>
                <p className="text-muted-foreground mb-3">To ensure platform security and functionality:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• Device information (browser type, operating system)</li>
                  <li>• Log data (IP addresses, access times, pages viewed)</li>
                  <li>• Cookies and similar technologies</li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-xl border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">4. Communications</h3>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• Support requests and responses</li>
                  <li>• Voluntary feedback and surveys</li>
                  <li>• Programme content you create or upload</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">How We Use Your Information</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Deliver Our Core Service</h4>
                <p className="text-sm text-muted-foreground">Provide platform access, generate team insights, track progress, and deliver weekly rhythms</p>
              </div>
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Improve Your Experience</h4>
                <p className="text-sm text-muted-foreground">Customise recommendations, refine AI coaching, and develop new features</p>
              </div>
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Administrative Purposes</h4>
                <p className="text-sm text-muted-foreground">Process payments, send notifications, provide support, and verify identity</p>
              </div>
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Research & Development</h4>
                <p className="text-sm text-muted-foreground">Analyse aggregate trends, measure ROI, and contribute to peer-reviewed research</p>
              </div>
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Legal & Safety</h4>
                <p className="text-sm text-muted-foreground">Comply with legal obligations, prevent fraud, and protect user rights</p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-2xl border border-purple-200 dark:border-purple-800">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Data Storage and Security</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technical Safeguards</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                    <span>TLS 1.3 encryption in transit, AES-256 at rest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                    <span>Role-based access controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                    <span>Enterprise-grade cloud infrastructure (AWS/Azure)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                    <span>Multi-factor authentication available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                    <span>Automated daily encrypted backups</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Organisational Safeguards</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                    <span>Minimal access principle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                    <span>Staff privacy and security training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                    <span>Vendor security requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                    <span>Incident response protocols</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-muted-foreground italic">
              <strong className="text-foreground">Limitations:</strong> No system is 100% secure. While we use industry-standard protections, we cannot guarantee absolute security of data transmitted over the internet.
            </p>
          </div>

          {/* Data Retention */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Data Retention</h2>

            <div className="space-y-4">
              <div className="p-5 bg-background rounded-xl border">
                <h4 className="font-semibold text-foreground mb-2">Active Accounts</h4>
                <p className="text-sm text-muted-foreground">Data retained while account is active, plus 90 days for transition support</p>
              </div>
              <div className="p-5 bg-background rounded-xl border">
                <h4 className="font-semibold text-foreground mb-2">Account Closure</h4>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• Within 30 days: Anonymise or delete personal identifiers</li>
                  <li>• Within 90 days: Remove all team-level data (unless legally required)</li>
                  <li>• Aggregate, anonymised insights may be retained indefinitely for research</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sharing Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Sharing Your Information</h2>

            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
              <p className="text-lg font-semibold text-green-900 dark:text-green-100">
                CultureCrunch does NOT sell your personal information.
              </p>
            </div>

            <p className="text-muted-foreground mb-4">We share data only in these limited circumstances:</p>

            <div className="space-y-4">
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Service Providers</h4>
                <p className="text-sm text-muted-foreground">Trusted vendors for cloud hosting, payment processing, email delivery, analytics, and customer support</p>
              </div>
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Business Transitions</h4>
                <p className="text-sm text-muted-foreground">If acquired or merged, with notification to users</p>
              </div>
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Legal Requirements</h4>
                <p className="text-sm text-muted-foreground">Court orders, government requests, or to protect safety and rights</p>
              </div>
              <div className="p-5 bg-muted/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">With Your Consent</h4>
                <p className="text-sm text-muted-foreground">For purposes not listed, with explicit consent</p>
              </div>
            </div>
          </div>

          {/* Privacy Rights */}
          <div className="mb-12 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Your Privacy Rights</h2>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">All Users</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="text-sm text-muted-foreground">• Access your personal information</div>
                  <div className="text-sm text-muted-foreground">• Correct inaccurate data</div>
                  <div className="text-sm text-muted-foreground">• Request deletion (with exceptions)</div>
                  <div className="text-sm text-muted-foreground">• Object to certain processing</div>
                  <div className="text-sm text-muted-foreground">• Data portability</div>
                  <div className="text-sm text-muted-foreground">• Withdraw consent</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Australian Residents – Privacy Act 1988</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  As an Australian organisation based in New South Wales, we comply with the Australian Privacy Principles (APPs). You have the right to:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• Access and correct your personal information</li>
                  <li>• Request we stop using or disclosing your information</li>
                  <li>• Make a complaint to us or the OAIC</li>
                </ul>
                <div className="mt-3 p-4 bg-background rounded-lg">
                  <p className="text-xs font-semibold text-foreground mb-1">Office of the Australian Information Commissioner (OAIC)</p>
                  <p className="text-xs text-muted-foreground">Website: www.oaic.gov.au | Phone: 1300 363 992 | Mail: GPO Box 5218, Sydney NSW 2001</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">EEA/UK Residents – GDPR Rights</h4>
                <p className="text-sm text-muted-foreground">Additional rights including restriction of processing and enhanced transparency about legal basis</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">California Residents – CCPA/CPRA Rights</h4>
                <p className="text-sm text-muted-foreground">Rights to know, delete, opt-out, non-discrimination, and limit use of sensitive information</p>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-sm font-semibold text-foreground mb-2">How to Exercise Your Rights</p>
                <p className="text-sm text-muted-foreground">
                  Contact us at <strong className="text-foreground">privacy@culturecrunch.io</strong> with your name, email, and specific right(s) you wish to exercise. We'll respond within 30 days.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Cookies and Tracking Technologies</h2>

            <p className="text-muted-foreground mb-6">
              CultureCrunch uses cookies and similar technologies to deliver and improve our service.
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-background rounded-xl border">
                <h4 className="font-semibold text-foreground mb-2">Essential Cookies (Always Active)</h4>
                <p className="text-sm text-muted-foreground">Maintain login sessions, remember preferences, enable core functionality</p>
              </div>
              <div className="p-5 bg-background rounded-xl border">
                <h4 className="font-semibold text-foreground mb-2">Analytics Cookies (Optional)</h4>
                <p className="text-sm text-muted-foreground">Understand platform usage, measure engagement, improve user experience</p>
              </div>
              <div className="p-5 bg-background rounded-xl border">
                <h4 className="font-semibold text-foreground mb-2">Performance Cookies (Optional)</h4>
                <p className="text-sm text-muted-foreground">Monitor platform speed, detect issues, A/B test features</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              <strong className="text-foreground">Your Choices:</strong> Control cookies through browser settings, our account dashboard, or opt-out tools. Note: Disabling essential cookies may limit platform functionality.
            </p>
          </div>

          {/* International Transfers */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">International Data Transfers</h2>

            <p className="text-muted-foreground mb-4">
              CultureCrunch is based in New South Wales, Australia, and operates globally. Your information may be transferred to and processed in countries outside Australia, including the United States and European Union.
            </p>

            <div className="p-6 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Data Transfer Protections</h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>• Standard Contractual Clauses (SCCs) for EU transfers</li>
                <li>• Adequacy decisions by privacy authorities</li>
                <li>• Certified providers with recognised privacy certifications</li>
                <li>• Contractual safeguards requiring compliance with Australian Privacy Principles</li>
              </ul>
            </div>
          </div>

          {/* Compliance */}
          <div className="mb-12 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-2xl border border-purple-200 dark:border-purple-800">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Regulatory and Industry Compliance</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Australian Compliance</h4>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• Privacy Act 1988 (Cth) – APPs compliance</li>
                  <li>• Notifiable Data Breaches (NDB) scheme</li>
                  <li>• Australian Consumer Law</li>
                  <li>• NSW Work Health and Safety regulations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Construction Industry Compliance</h4>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• Tier One Construction Firm frameworks</li>
                  <li>• Workplace health and safety standards</li>
                  <li>• Incident reporting confidentiality</li>
                  <li>• OH&S reporting obligations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">International Frameworks</h4>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• ISO 27001 (in progress)</li>
                  <li>• SOC 2 Type II (planned)</li>
                  <li>• GDPR (full compliance)</li>
                  <li>• CCPA/CPRA (California compliance)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Children's Privacy</h2>

            <div className="p-6 bg-muted/50 rounded-xl">
              <p className="text-muted-foreground mb-2">
                CultureCrunch is a <strong className="text-foreground">business-to-business platform</strong> designed for organisational leadership development. Our service is <strong className="text-foreground">not intended for individuals under 16 years of age</strong>.
              </p>
              <p className="text-sm text-muted-foreground">
                We do not knowingly collect personal information from children under 16. If we discover we've inadvertently collected such information, we will delete it immediately.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Changes to This Privacy Policy</h2>

            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy periodically to reflect changes in our practices, new legal requirements, or user feedback.
            </p>

            <div className="p-6 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">How We Notify You</h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>• Email notification for material changes</li>
                <li>• Platform alert when you log in</li>
                <li>• Updated "Last Updated" date at top of policy</li>
                <li>• Previous versions available upon request</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">
                <strong className="text-foreground">Continued use</strong> of CultureCrunch after policy changes indicates your acceptance of the updated terms.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Data Protection Officer and Contact Information</h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">For privacy questions, concerns, or rights requests:</p>
                <div className="space-y-1 text-muted-foreground">
                  <p><strong className="text-foreground">Email:</strong> privacy@culturecrunch.io</p>
                  <p className="text-sm">(Please include "Privacy Request" in subject line for faster processing)</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Mail:</p>
                <div className="text-muted-foreground">
                  <p>CultureCrunch</p>
                  <p>Attn: Privacy Officer</p>
                  <p>[Your Street Address]</p>
                  <p>[Suburb], NSW [Postcode]</p>
                  <p>Australia</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Response Time:</strong> We aim to respond to all privacy inquiries within 5 business days, with full resolution within 30 days (or as required by applicable law).
                </p>
              </div>
            </div>
          </div>

          {/* Trust Message */}
          <div className="mt-12 text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-2xl border border-purple-200 dark:border-purple-800">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Your Trust Is Our Foundation</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              At CultureCrunch, we're building leadership operating systems that transform organisations, and that starts with trust. Our <strong className="text-foreground">privacy by minimalism</strong> approach means we collect only what serves your leadership development, at the team level, with full transparency.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong className="text-foreground">Thank you for trusting CultureCrunch to power your leadership transformation.</strong>
            </p>
          </div>

          {/* Effective Date */}
          <div className="mt-8 text-center text-sm text-muted-foreground italic">
            <p>This Privacy Policy is effective as of November 11, 2025, and applies to all users of the CultureCrunch platform.</p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
