"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Download, FileText, AlertTriangle, TrendingDown, Brain, Layers, MessageSquare, CheckCircle2, XCircle, ArrowLeft, Printer, Building2, AlertCircle, Lock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

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

const STORAGE_KEY = 'cc_guide_access'

export default function LeadMagnetGuidePage() {
  const [hasAccess, setHasAccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Check if user already has access
    const access = localStorage.getItem(STORAGE_KEY)
    if (access) {
      setHasAccess(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

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
          type: 'lead-magnet',
          email,
          guide: '5 Warning Signs Guide'
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
      console.error('Lead magnet submission error:', err)
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePrint = () => {
    window.print()
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
                    The 5 Warning Signs Your Culture is Costing You Talent
                  </h1>
                  <p className="text-purple-100">
                    A Diagnostic Guide for HR and Leadership Professionals
                  </p>
                </div>

                {/* Form */}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                      <Lock className="h-4 w-4" />
                      Unlock Full Guide
                    </div>
                    <p className="text-muted-foreground">
                      Enter your business email to access the complete diagnostic guide
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        <Building2 className="h-3 w-3" /> Business email required - no personal emails
                      </p>
                      {error && (
                        <p className="text-sm text-red-500 flex items-center gap-1 justify-center">
                          <AlertCircle className="h-4 w-4" /> {error}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-500/25"
                      disabled={isSubmitting}
                    >
                      <Download className="h-5 w-5 mr-2" />
                      {isSubmitting ? "Unlocking..." : "Unlock Free Guide"}
                    </Button>
                  </form>

                  {/* What's inside */}
                  <div className="mt-8 pt-8 border-t border-purple-200/50 dark:border-purple-800/30">
                    <p className="text-sm font-medium text-foreground mb-4 text-center">What you'll learn:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {[
                        "Why 81% of training knowledge never transfers to workplace behaviour",
                        "The hidden cost of measuring satisfaction instead of behaviour change",
                        "How to close the knowledge-behaviour gap that drives talent away",
                        "Why your best people leave after 'successful' training programs",
                        "The operating system approach that delivers 6-8:1 ROI"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-xs text-center text-muted-foreground mt-6">
                    By downloading, you agree to receive occasional insights from Culture Crunch. Unsubscribe anytime.
                  </p>
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
      {/* Hide navbar in print */}
      <div className="print:hidden">
        <Navbar />
      </div>

      {/* Print Header - Only visible in print */}
      <div className="hidden print:flex items-center justify-between px-8 py-6 border-b">
        <div className="flex items-center gap-3">
          <Image
            src="/culturecrunch-logo.png"
            alt="Culture Crunch Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <div>
            <span className="text-xl font-bold">Culture Crunch</span>
            <p className="text-xs text-gray-500">The Culture Operating System</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">www.culturecrunch.io</p>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-purple-50 via-indigo-50 to-white dark:from-purple-950/30 dark:via-indigo-950/20 dark:to-background print:py-12 print:bg-white">
        <div className="absolute inset-0 overflow-hidden print:hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Back Button & Download - Hide in print */}
          <div className="flex justify-between items-center mb-8 print:hidden">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" />
                Print / Save PDF
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700" asChild>
                <Link href="#cta">
                  <Download className="h-4 w-4 mr-2" />
                  Get Full Assessment
                </Link>
              </Button>
            </div>
          </div>

          {/* Title */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30 mb-6 print:bg-purple-100">
              <FileText className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Free Diagnostic Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent print:text-purple-900">
              The 5 Warning Signs Your Culture is Costing You Talent
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              (And Why Your Next Training Event Won't Fix Them)
            </p>
            <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
              A Diagnostic Guide for HR and Leadership Professionals
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 print:py-8">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert print:prose-sm">

            {/* Introduction */}
            <section className="mb-16 print:mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3 print:text-2xl">
                <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-lg print:h-8 print:w-8">$</span>
                Introduction: The $60 Billion Question
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Your organisation just spent six figures on leadership development. Your executives attended the off-site. The feedback forms were glowing. Everyone returned energised with new frameworks and fresh commitments.</p>
                <p><strong className="text-foreground">Three months later, nothing has changed.</strong></p>
                <p>Sound familiar?</p>
                <p>You're not alone. Organisations spend <strong className="text-foreground">$60 billion annually</strong> on leadership development, yet 70% of culture transformation efforts fail to produce lasting change. But here's what most people don't know: that 70% statistic? <em>It's completely made up.</em> There's no empirical research backing it.</p>

                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-xl p-6 my-6 print:bg-red-50">
                  <p className="text-red-700 dark:text-red-300 font-semibold mb-2">The real number is actually worse.</p>
                  <p className="text-red-600 dark:text-red-400">Studies show only <strong>10-32%</strong> of companies achieve their desired cultural shifts. The problem isn't that you're doing leadership development wrong - it's that you're thinking about it wrong.</p>
                </div>

                <p className="text-xl font-semibold text-foreground">Culture isn't built through training events. It's built through operating systems.</p>
                <p>This guide will help you diagnose whether your culture is silently haemorrhaging talent, why your current approach isn't working, and what research-backed alternatives actually deliver ROI.</p>
              </div>
            </section>

            {/* Warning Sign #1 */}
            <section className="mb-16 print:mb-8 page-break-before">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border border-red-200/50 dark:border-red-800/30 rounded-2xl p-8 mb-8 print:bg-red-50">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Warning Sign #1</h2>
                    <p className="text-xl text-red-600 dark:text-red-400 font-semibold">Your "Leadership Development" Lives on a Calendar, Not in Daily Work</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">What It Looks Like</h3>
              <ul className="space-y-2 mb-6">
                {["Annual leadership conferences", "Quarterly workshops", "Monthly 'lunch and learns'", "One-off training sessions", "Leadership programs that exist separate from actual work"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-4">Why This Costs You Talent</h3>
              <p className="text-muted-foreground mb-4">Here's what the research actually shows: Only <strong className="text-foreground">19% of knowledge from training transfers to workplace behaviour</strong> (Blume et al., 2010). That means 81% of what leaders learn in your workshop is gone within weeks.</p>

              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-xl p-6 my-6 print:bg-amber-50">
                <p className="font-semibold text-amber-700 dark:text-amber-300 mb-3">The forgetting curve is brutal:</p>
                <ul className="space-y-2 text-amber-600 dark:text-amber-400">
                  <li><strong>50%</strong> forgotten within 1 hour</li>
                  <li><strong>70%</strong> forgotten within 24 hours</li>
                  <li><strong>90%</strong> forgotten within a week without reinforcement</li>
                </ul>
              </div>

              <p className="text-muted-foreground mb-4">Your rising stars attend your leadership program, feel inspired, return to their desks, get buried in operational fires, and within two weeks, they're back to their old patterns. Meanwhile, they're watching - seeing the gap between what your organisation says it values and what it actually reinforces through daily systems.</p>
              <p className="text-lg font-semibold text-foreground mb-6">Talented people don't leave because of bad training. They leave because nothing changes after the training.</p>

              <h3 className="text-xl font-bold text-foreground mb-4">The Hidden Cost</h3>
              <p className="text-muted-foreground mb-4">Every failed transformation attempt doesn't just waste money - it builds cynicism. When your next initiative launches, your best people remember: <em>"We did this before. Nothing changed."</em></p>
              <p className="text-muted-foreground mb-6">Change fatigue is real: 74% of employees were willing to support organisational change in 2016. By 2022? That dropped to <strong className="text-foreground">43%</strong> (Prosci, 2024).</p>

              <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/50 rounded-xl p-6 print:bg-purple-50">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">The Diagnostic Question</p>
                <p className="text-purple-600 dark:text-purple-400 italic">Ask yourself: Could a new employee understand how leadership "actually works here" by attending our training programs? Or would they need to watch the daily interactions, meeting patterns, and decision-making rhythms?</p>
                <p className="text-purple-600 dark:text-purple-400 mt-2">If it's the latter, your leadership development lives in the wrong place.</p>
              </div>
            </section>

            {/* Warning Sign #2 */}
            <section className="mb-16 print:mb-8 page-break-before">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 border border-orange-200/50 dark:border-orange-800/30 rounded-2xl p-8 mb-8 print:bg-orange-50">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Warning Sign #2</h2>
                    <p className="text-xl text-orange-600 dark:text-orange-400 font-semibold">You Measure Satisfaction Instead of Behaviour Change</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">What It Looks Like</h3>
              <ul className="space-y-2 mb-6">
                {["Post-training 'happiness sheets'", "NPS scores from workshops", "Completion rates and attendance tracking", "Testimonials about how 'inspiring' the session was", "No systematic measurement of actual behaviour change"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-4">Why This Costs You Talent</h3>
              <p className="text-muted-foreground mb-4">The industry has a dirty secret: <strong className="text-foreground">80% of organisations measure only Level 1 (satisfaction)</strong> of Kirkpatrick's four levels of training evaluation. Almost none progress to Level 3 (behaviour change) or Level 4 (business results).</p>
              <p className="text-muted-foreground mb-4">Why? Because measuring satisfaction is easy. Measuring behaviour change is hard.</p>
              <p className="text-muted-foreground mb-6">But here's what your talented employees see: Leaders go to training, come back excited, and then... nothing measurably changes. Your evaluation forms say the training "worked." Your talented employees know it didn't.</p>

              <h3 className="text-xl font-bold text-foreground mb-4">The Research Reality</h3>
              <p className="text-muted-foreground mb-4">Meanwhile, your competitors who measure and optimise for actual behaviour change are achieving:</p>
              <ul className="space-y-2 mb-6">
                {["6-8:1 ROI on leadership development (BetterManager, 2023)", "25-40% reduction in turnover", "7-23% improvement in engagement"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/50 rounded-xl p-6 print:bg-purple-50">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">The Diagnostic Question</p>
                <p className="text-purple-600 dark:text-purple-400 italic">Can you show me data on how leader behaviours changed 90 days after your last leadership program? Not how they felt about it - how they actually behaved differently?</p>
                <p className="text-purple-600 dark:text-purple-400 mt-2">If you can't answer this, you're measuring theatre, not transformation.</p>
              </div>
            </section>

            {/* Warning Sign #3 */}
            <section className="mb-16 print:mb-8 page-break-before">
              <div className="bg-gradient-to-r from-yellow-50 to-lime-50 dark:from-yellow-950/30 dark:to-lime-950/30 border border-yellow-200/50 dark:border-yellow-800/30 rounded-2xl p-8 mb-8 print:bg-yellow-50">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-lime-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Warning Sign #3</h2>
                    <p className="text-xl text-yellow-600 dark:text-yellow-400 font-semibold">Your Leaders Know WHAT to Do But Don't DO What They Know</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">What It Looks Like</h3>
              <ul className="space-y-2 mb-6">
                {["Leaders can recite your values perfectly", "Everyone 'knows' psychological safety matters", "Your team can define accountability", "Leadership competency models are well-understood", "Yet daily behaviour doesn't reflect any of it"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-4">Why This Costs You Talent</h3>
              <p className="text-muted-foreground mb-4">This is called the <strong className="text-foreground">knowledge-behaviour gap</strong>, and it's the graveyard of leadership development.</p>
              <p className="text-muted-foreground mb-4">Think about it: Has anyone in your organisation ever left because leaders didn't <em>know</em> they should give clear feedback? Of course not. People leave because leaders <em>don't actually give</em> clear feedback, despite knowing they should.</p>

              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-xl p-6 my-6 print:bg-red-50">
                <p className="font-semibold text-red-700 dark:text-red-300 mb-2">The Research That Should Terrify You</p>
                <p className="text-red-600 dark:text-red-400">Wood & Rünger (2016) found that <strong>43-45% of workplace actions are habitual</strong> - driven by context cues, not conscious decisions. Your training tried to change conscious decisions. But actual workplace behaviour runs on autopilot.</p>
                <p className="text-red-600 dark:text-red-400 mt-2 font-semibold">You brought a knowledge solution to a systems problem.</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/50 rounded-xl p-6 print:bg-purple-50">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">The Diagnostic Question</p>
                <p className="text-purple-600 dark:text-purple-400 italic">If we secretly recorded a week of leadership conversations, what percentage would actually demonstrate the skills from our last training program?</p>
                <p className="text-purple-600 dark:text-purple-400 mt-2">Be honest. If it's under 30%, you have a knowledge-behaviour chasm, not a knowledge deficit.</p>
              </div>
            </section>

            {/* Warning Sign #4 */}
            <section className="mb-16 print:mb-8 page-break-before">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200/50 dark:border-blue-800/30 rounded-2xl p-8 mb-8 print:bg-blue-50">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Warning Sign #4</h2>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">New Initiatives Get Added, Not Integrated</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">What It Looks Like</h3>
              <ul className="space-y-2 mb-6">
                {["'Culture committee' separate from business operations", "Leadership development is 'HR's program'", "New initiatives stacked on top of existing work", "Leaders juggle multiple frameworks that don't connect", "Each new priority creates another meeting, another tracker"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-4">The Exhaustion Equation</h3>
              <p className="text-muted-foreground mb-4">McKinsey research shows transformations with frontline ownership succeed <strong className="text-foreground">79%</strong> of the time. Without it? Only <strong className="text-foreground">30%</strong>.</p>
              <p className="text-muted-foreground mb-4">But you can't get ownership when you're asking people to:</p>

              <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-6 my-6 font-mono text-sm print:bg-slate-100">
                <p>Do their actual job <span className="text-green-600">(100% of capacity)</span></p>
                <p>+ Implement this new culture initiative <span className="text-amber-600">(15% of capacity)</span></p>
                <p>+ Adopt this leadership framework <span className="text-amber-600">(15% of capacity)</span></p>
                <p>+ Participate in this change program <span className="text-amber-600">(15% of capacity)</span></p>
                <p className="border-t border-slate-300 dark:border-slate-600 pt-2 mt-2"><strong className="text-red-600">= 145% of capacity</strong></p>
              </div>

              <p className="text-muted-foreground mb-6">That's 145% of capacity. Your best people hit that maths and leave for organisations that integrate instead of add.</p>

              <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/50 rounded-xl p-6 print:bg-purple-50">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">The Diagnostic Question</p>
                <p className="text-purple-600 dark:text-purple-400 italic">Could your leaders name all the "culture initiatives" currently active? Could they explain how they relate to each other?</p>
                <p className="text-purple-600 dark:text-purple-400 mt-2">If no, you're creating fragmentation, not transformation.</p>
              </div>
            </section>

            {/* Warning Sign #5 */}
            <section className="mb-16 print:mb-8 page-break-before">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200/50 dark:border-purple-800/30 rounded-2xl p-8 mb-8 print:bg-purple-50">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">5</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Warning Sign #5</h2>
                    <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">You're Trying to Change Culture Without Changing Conversations</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">What It Looks Like</h3>
              <ul className="space-y-2 mb-6">
                {["Values on the wall, not in daily dialogue", "Leaders avoid difficult conversations", "Feedback is vague or absent", "Accountability means 'documenting failures'", "No systematic way to have ownership conversations"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-4">Why This Costs You Talent</h3>
              <p className="text-muted-foreground mb-4">Here's an uncomfortable truth: <strong className="text-foreground">Your culture is the sum of your conversations.</strong></p>
              <p className="text-muted-foreground mb-4">Not your stated values. Not your leadership competencies. Not your org chart. Your culture is what actually gets discussed (and what gets avoided) in Monday morning team meetings, Thursday 1-on-1s, hallway interactions, and Slack channels.</p>

              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50 rounded-xl p-6 my-6 print:bg-green-50">
                <p className="font-semibold text-green-700 dark:text-green-300 mb-3">Research shows:</p>
                <ul className="space-y-2 text-green-600 dark:text-green-400">
                  <li>Organisations with strong feedback cultures see <strong>3X higher engagement</strong></li>
                  <li>Leaders who create psychological safety have <strong>40% lower turnover</strong></li>
                  <li>Teams practising specific conversational frameworks achieve <strong>measurably better outcomes</strong></li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/50 rounded-xl p-6 print:bg-purple-50">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">The Diagnostic Question</p>
                <p className="text-purple-600 dark:text-purple-400 italic">Could your leaders demonstrate - right now, without prep - how to have an accountable conversation about missed deadlines? About unclear expectations? About performance gaps?</p>
                <p className="text-purple-600 dark:text-purple-400 mt-2">If not, you're hoping for culture change while leaving the most important skill to chance.</p>
              </div>
            </section>

            {/* The Real Problem */}
            <section className="mb-16 print:mb-8 page-break-before">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 text-white print:bg-slate-800">
                <h2 className="text-3xl font-bold mb-6">The Real Problem: You're Installing Apps When You Need an OS Upgrade</h2>
                <p className="text-slate-300 mb-6">These five warning signs aren't separate problems. They're symptoms of the same fundamental issue:</p>
                <p className="text-xl font-semibold text-white mb-8">You're treating leadership development like installing applications when what you need is an operating system upgrade.</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-red-300 mb-4">The App Model (What Most Do)</h3>
                    <ul className="space-y-2 text-red-200 text-sm">
                      <li>Leadership training = separate program</li>
                      <li>Culture initiative = separate program</li>
                      <li>Each requires separate time & reinforcement</li>
                      <li className="font-semibold pt-2 border-t border-red-500/30">Result: Addition exhausts people</li>
                    </ul>
                  </div>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-green-300 mb-4">The OS Model (What Works)</h3>
                    <ul className="space-y-2 text-green-200 text-sm">
                      <li>Leadership embedded in weekly rhythms</li>
                      <li>Culture built through daily patterns</li>
                      <li>Everything integrated into how work gets done</li>
                      <li className="font-semibold pt-2 border-t border-green-500/30">Result: Sustainable compound change</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* What Research Shows */}
            <section className="mb-16 print:mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">What Research-Backed Culture Operating Systems Actually Deliver</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/40 rounded-2xl p-6 border border-purple-200 dark:border-purple-800 print:bg-purple-50">
                  <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">7:1</p>
                  <p className="text-sm font-medium text-purple-700 dark:text-purple-300">Average ROI</p>
                  <p className="text-xs text-purple-600/70 dark:text-purple-400/70 mt-1">Range $3-$11 per dollar invested</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/40 dark:to-indigo-900/40 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-800 print:bg-indigo-50">
                  <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">25-40%</p>
                  <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Turnover Reduction</p>
                  <p className="text-xs text-indigo-600/70 dark:text-indigo-400/70 mt-1">With systematic leadership</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/40 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 print:bg-blue-50">
                  <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">66</p>
                  <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Days to Form Habits</p>
                  <p className="text-xs text-blue-600/70 dark:text-blue-400/70 mt-1">Not 21 days - that's a myth</p>
                </div>
              </div>
            </section>

            {/* Next Steps */}
            <section className="mb-16 print:mb-8 page-break-before">
              <h2 className="text-3xl font-bold text-foreground mb-8">Your Next Steps: From Diagnosis to Action</h2>

              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700 print:bg-slate-50">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="h-8 w-8 rounded-lg bg-purple-500 flex items-center justify-center text-white text-sm">1</span>
                    Audit Your Current State (This Week)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-10">
                    <li>Map where "leadership development" currently lives</li>
                    <li>Identify what's separate vs integrated</li>
                    <li>Calculate actual behaviour change from last initiative</li>
                    <li>Survey leaders on knowledge-behaviour gaps</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700 print:bg-slate-50">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white text-sm">2</span>
                    Stop Adding, Start Integrating (This Week)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-10">
                    <li>Put new initiatives on hold</li>
                    <li>Identify existing rhythms (meetings, 1-on-1s, reviews)</li>
                    <li>Ask: "How could we embed leadership development here?"</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700 print:bg-slate-50">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm">3</span>
                    Measure What Matters (This Month)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-10">
                    <li>Move beyond satisfaction scores</li>
                    <li>Define specific behavioural indicators</li>
                    <li>Create baseline measurements</li>
                    <li>Plan 90-day follow-up assessment</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The Question */}
            <section className="mb-16 print:mb-8">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white text-center print:bg-purple-600">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Question That Matters Most</h2>
                <p className="text-xl text-purple-100 mb-4">Are you building a leadership development program,<br />or are you upgrading your leadership operating system?</p>
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8 text-left text-sm">
                  <div className="space-y-2 text-purple-200">
                    <p>Programs come and go.</p>
                    <p>Programs exhaust people with addition.</p>
                    <p>Programs measure satisfaction.</p>
                    <p>Programs live on calendars.</p>
                  </div>
                  <div className="space-y-2 text-white font-medium">
                    <p>Operating systems compound.</p>
                    <p>Operating systems create capability.</p>
                    <p>Operating systems measure behaviour.</p>
                    <p>Operating systems live in daily work.</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section id="cta" className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background print:hidden">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40 border border-purple-200 dark:border-purple-800 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Stop the Talent Haemorrhage?</h2>
                <p className="text-lg text-muted-foreground">If you recognised your organisation in these warning signs, it's time for an operating system upgrade.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
                  <h3 className="text-xl font-bold text-foreground mb-3">Get Your Custom Culture Assessment</h3>
                  <p className="text-muted-foreground text-sm mb-4">We'll analyse your organisation against the five warning signs and provide specific recommendations.</p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700" asChild>
                    <Link href="/#contact">
                      Schedule Free Assessment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
                  <h3 className="text-xl font-bold text-foreground mb-3">Read the Full Research Paper</h3>
                  <p className="text-muted-foreground text-sm mb-4">Dive deeper into the 100+ peer-reviewed studies behind our methodology.</p>
                  <Button variant="outline" className="w-full border-purple-300 dark:border-purple-700" asChild>
                    <Link href="/white-paper">
                      <FileText className="mr-2 h-4 w-4" />
                      Read White Paper
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 border-t print:py-6">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/culturecrunch-logo.png"
                alt="Culture Crunch Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-lg font-bold text-foreground">About Culture Crunch</h3>
                <p className="text-sm text-muted-foreground">The Culture Operating System</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Culture Crunch replaces the broken $60 billion leadership development industry with research-backed operating systems that create lasting behavioural change. We target industrial sectors - manufacturing, construction, and healthcare - where leadership failures have measurable safety and operational consequences.
            </p>
            <p className="text-muted-foreground">
              Our 6-week Culture Operating System program embeds accountable conversations into weekly rhythms, supported by AI-powered guidance and cross-organisation pattern recognition. Because culture isn't built through events. It's built through systems.
            </p>
            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mt-4 print:hidden">
              <Link href="/" className="hover:underline">www.culturecrunch.io</Link>
            </p>
            <p className="text-xs text-muted-foreground mt-6 italic">
              References available in full research paper. All statistics cited from peer-reviewed research or documented case studies.
            </p>
          </div>
        </div>
      </section>

      <div className="print:hidden">
        <Footer />
      </div>

      {/* Print Footer */}
      <div className="hidden print:block border-t py-4 px-8 text-center">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Culture Crunch Pty Ltd. All rights reserved. | www.culturecrunch.io</p>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 1.5cm;
            size: A4;
          }

          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .page-break-before {
            page-break-before: always;
          }

          .prose {
            max-width: none !important;
          }

          h1, h2, h3 {
            page-break-after: avoid;
          }

          .bg-gradient-to-r,
          .bg-gradient-to-br,
          .bg-gradient-to-b {
            background: #f5f3ff !important;
          }

          .dark\\:from-purple-950\\/30,
          .dark\\:from-indigo-950\\/30 {
            background: #f5f3ff !important;
          }
        }
      `}</style>
    </div>
  )
}
