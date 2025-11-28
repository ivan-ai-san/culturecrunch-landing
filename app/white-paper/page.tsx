"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Lock, Building2, AlertCircle, CheckCircle2, User, ArrowLeft } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

// Personal email domains to block - require business email
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

const STORAGE_KEY = 'cc_whitepaper_access'

export default function WhitePaperPage() {
  const [hasAccess, setHasAccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  // Check for existing access
  useEffect(() => {
    const access = localStorage.getItem(STORAGE_KEY)
    if (access) {
      setHasAccess(true)
    }
    setIsLoading(false)
  }, [])

  // Copy protection
  useEffect(() => {
    if (!hasAccess) return
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
  }, [hasAccess])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter your full name")
      return
    }

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    if (!isBusinessEmail(email)) {
      setError("Please use your work email address")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'white-paper',
          firstName,
          lastName,
          email
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Failed to submit')
      }

      // Grant access
      localStorage.setItem(STORAGE_KEY, 'true')
      setHasAccess(true)
    } catch (err) {
      console.error('White paper submission error:', err)
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </div>
    )
  }

  // Show gate if no access
  if (!hasAccess) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <section className="flex-1 relative py-16 md:py-24 bg-gradient-to-b from-purple-50 via-indigo-50 to-white dark:from-purple-950/30 dark:via-indigo-950/20 dark:to-background">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-2xl mx-auto">
              {/* Gate Card */}
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-purple-200/50 dark:border-purple-800/30 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-10 text-center text-white">
                  <div className="h-16 w-16 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <FileText className="h-8 w-8" />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-3">
                    From Training Events to Operating Systems
                  </h1>
                  <p className="text-purple-100">
                    Academic White Paper with 100+ Peer-Reviewed Citations
                  </p>
                </div>

                {/* Form */}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                      <Lock className="h-4 w-4" />
                      Access Full Research
                    </div>
                    <p className="text-muted-foreground">
                      Enter your details to access the comprehensive 20,000-word white paper
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <User className="h-5 w-5" />
                        </div>
                        <Input
                          type="text"
                          placeholder="First name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="h-14 pl-12 text-lg"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Input
                          type="text"
                          placeholder="Last name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="h-14 text-lg"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <Building2 className="h-5 w-5" />
                        </div>
                        <Input
                          type="email"
                          placeholder="your.name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-14 pl-12 text-lg"
                          disabled={isSubmitting}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 justify-center">
                        <Building2 className="h-3 w-3" /> Business email required
                      </p>
                      {error && (
                        <p className="text-sm text-red-500 flex items-center gap-1 justify-center">
                          <AlertCircle className="h-4 w-4" /> {error}
                        </p>
                      )}
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="whitepaper-terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                        disabled={isSubmitting}
                        className="mt-0.5"
                      />
                      <label
                        htmlFor="whitepaper-terms"
                        className="text-sm text-muted-foreground leading-tight cursor-pointer"
                      >
                        I agree to the <Link href="/terms" className="text-primary hover:underline" target="_blank">Terms of Use</Link> and <Link href="/privacy" className="text-primary hover:underline" target="_blank">Privacy Policy</Link> and consent to receiving communications from Culture Crunch
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-500/25"
                      disabled={isSubmitting || !agreedToTerms}
                    >
                      <FileText className="h-5 w-5 mr-2" />
                      {isSubmitting ? "Unlocking..." : "Access White Paper"}
                    </Button>
                  </form>

                  {/* What's inside */}
                  <div className="mt-8 pt-8 border-t border-purple-200/50 dark:border-purple-800/30">
                    <p className="text-sm font-medium text-foreground mb-4 text-center">What you'll discover:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {[
                        "Why 81% of training knowledge never transfers to workplace behaviour",
                        "The four failure patterns that doom culture transformation efforts",
                        "Evidence from 100+ peer-reviewed sources across 10 research domains",
                        "The operating system model for sustainable leadership development",
                        "ROI data showing $7:$1 average returns on systematic approaches"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Back link */}
              <div className="text-center mt-8">
                <Button variant="ghost" asChild>
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  // Show full content if has access
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background via-muted/30 to-background border-b border-border py-20">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-6">
              <FileText className="w-3 h-3 mr-1" />
              Academic White Paper
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 select-none">
              From Training Events to Operating Systems
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 select-none">
              Why Culture Transformation Efforts Fail and How to Build Leadership That Sticks
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span className="select-none">Protected Content - View Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          {/* Abstract */}
          <div className="mb-12 p-8 bg-muted/50 rounded-2xl border select-none">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Abstract</h3>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Despite organizational investments exceeding $60 billion annually in leadership development, most culture transformation initiatives fail to achieve sustained impact. This comprehensive academic review synthesizes evidence across implementation science, organizational behavior, adult learning theory, and behavioral economics to explain why traditional leadership development approaches falter and how systematic, embedded approaches succeed. We examine meta-analytic evidence challenging the widely cited "70% failure rate" while documenting actual failure mechanisms: knowledge-behavior gaps, superficial first-order change, poor transfer of learning, and top-down mandates lacking engagement.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 text-justify">
              The operating system model emerges as a superior alternative to event-based training, supported by research on habit formation (median 66 days), spacing effects (d = 0.54 advantage), implementation science frameworks, and micro-practice effectiveness. Evidence demonstrates systematic leadership development delivers measurable ROI ($3-$11 per dollar invested, averaging $7:1), reduces turnover by 25-40%, and improves engagement by 7-23% when properly designed.
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm font-medium text-foreground mb-2">Keywords:</p>
              <p className="text-sm text-muted-foreground">
                leadership development, culture transformation, implementation science, organizational change, habit formation, psychological safety, ROI measurement, operating systems
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-8 bg-background rounded-2xl border select-none">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Table of Contents</h3>
            <div className="grid gap-3">
              <div className="flex items-start gap-3 group">
                <span className="font-semibold text-primary">1.</span>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Introduction: The Persistent Problem of Failed Transformation</p>
                  <p className="text-sm text-muted-foreground">The Stakes • Purpose and Scope</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="font-semibold text-primary">2.</span>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Literature Review</p>
                  <p className="text-sm text-muted-foreground">Transformation Failure Rates • Knowledge-Behavior Gap • Learning Retention • Implementation Science • Habit Formation</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="font-semibold text-primary">3.</span>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Theoretical Framework</p>
                  <p className="text-sm text-muted-foreground">Integrative approach combining multiple perspectives</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="font-semibold text-primary">4.</span>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">The Four Failure Patterns</p>
                  <p className="text-sm text-muted-foreground">Knowledge-Behavior Chasm • First-Order Change • Event-Based Systems • Top-Down Mandates</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="font-semibold text-primary">5.</span>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">The Operating System Model</p>
                  <p className="text-sm text-muted-foreground">Core Components • Six-Week Model</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="font-semibold text-primary">6.</span>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">The O.O.R.A. Methodology</p>
                  <p className="text-sm text-muted-foreground">Ownership • Observation • Request • Agreement</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="font-semibold text-primary">7.</span>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Implementation Framework</p>
                  <p className="text-sm text-muted-foreground">Pre-Program Foundation • Mindset Installation • Skillset Development • Integration & Sustainment</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="font-semibold text-primary">8.</span>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Measurement and Impact</p>
                  <p className="text-sm text-muted-foreground">ROI Methodologies • Documented Evidence • Turnover Reduction • Engagement Improvements</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="font-semibold text-primary">9.</span>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Critical Success Factors</p>
                  <p className="text-sm text-muted-foreground">Integration • Visibility • Repetition • Context Adaptation • Prevention • Executive Engagement</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="font-semibold text-primary">10.</span>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Discussion and Implications</p>
                  <p className="text-sm text-muted-foreground">Theoretical Contributions • Practical Implications • Organizational Contexts • Challenging Conventional Wisdom</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="font-semibold text-primary">11.</span>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Limitations and Future Research</p>
                  <p className="text-sm text-muted-foreground">Current Limitations • Research Gaps • Methodological Recommendations</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="font-semibold text-primary">12.</span>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Conclusion</p>
                  <p className="text-sm text-muted-foreground">Evidence-based roadmap for sustainable culture transformation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Findings Highlight */}
          <div className="mb-12 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 select-none">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Key Findings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">$7:$1 Average ROI</span> - Leadership development delivers measurable returns with range of $3-$11 per dollar invested</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">25-40% Turnover Reduction</span> - Systematic approaches significantly reduce employee attrition</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">66-Day Habit Formation</span> - Median time to automaticity plateau for new behaviors</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">7-23% Engagement Lift</span> - Properly designed programs improve employee engagement</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">Only 19% Transfer</span> - Without systematic approach, only 19% of knowledge is applied on the job</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">Spacing Effect d = 0.54</span> - Distributed practice superior in 95.6% of comparisons</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Foundation */}
          <div className="mb-12 space-y-8 select-none">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Research Foundation</h3>
              <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                This white paper synthesizes evidence from over 100 peer-reviewed sources across multiple disciplines including implementation science, organizational behavior, adult learning theory, behavioral economics, and neuroscience. The research examines why traditional leadership development approaches consistently fail and presents evidence-based alternatives that deliver measurable, sustainable results.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                The comprehensive analysis draws from meta-analyses, longitudinal studies, randomized controlled trials, and systematic reviews to provide HR and organizational development professionals with actionable guidance grounded in empirical evidence rather than conventional wisdom or anecdotal claims.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-xl border">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <p className="text-sm font-medium text-foreground mb-1">Academic Citations</p>
                <p className="text-xs text-muted-foreground">Peer-reviewed sources across 10 research domains</p>
              </div>
              <div className="p-6 bg-background rounded-xl border">
                <div className="text-3xl font-bold text-primary mb-2">20,000</div>
                <p className="text-sm font-medium text-foreground mb-1">Words of Analysis</p>
                <p className="text-xs text-muted-foreground">Comprehensive 25-30 page academic paper</p>
              </div>
              <div className="p-6 bg-background rounded-xl border">
                <div className="text-3xl font-bold text-primary mb-2">10</div>
                <p className="text-sm font-medium text-foreground mb-1">Research Domains</p>
                <p className="text-xs text-muted-foreground">Interdisciplinary synthesis of evidence</p>
              </div>
            </div>
          </div>

          {/* The O.O.R.A. Framework Highlight */}
          <div className="mb-12 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-2xl border border-purple-200 dark:border-purple-800 select-none">
            <h3 className="text-2xl font-bold mb-6 text-foreground">The O.O.R.A. Methodology</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A structured approach to accountable conversations supported by convergent evidence from nonviolent communication, appreciative inquiry, solution-focused therapy, and restorative practices research.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-lg bg-purple-100 dark:bg-purple-950/40 flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">O</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Ownership</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-10">Taking responsibility through "What's My Part?" thinking</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/40 flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">O</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Observation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-10">Separating facts from interpretations to create shared reality</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">R</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Request</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-10">Making genuine requests, not demands that threaten relationships</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-lg bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center">
                      <span className="text-violet-600 dark:text-violet-400 font-bold">A</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Agreement</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-10">Co-creating mutual commitments with clear follow-up</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact for Full Paper */}
          <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center select-none">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Request Full White Paper</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              This comprehensive 20,000-word academic paper with 100+ peer-reviewed citations is available to qualified organizational leaders and HR professionals. Contact us to request access to the complete document.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us for Access
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
