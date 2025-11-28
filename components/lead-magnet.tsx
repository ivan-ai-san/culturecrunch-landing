"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, Download, CheckCircle2, AlertCircle, Building2 } from "lucide-react"

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

interface LeadMagnetProps {
  variant?: "inline" | "card"
  onSuccess?: () => void
}

export default function LeadMagnet({ variant = "card", onSuccess }: LeadMagnetProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    // Validate business email
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
        console.error('API Error:', response.status, errorData)
        throw new Error(errorData.error || 'Failed to submit')
      }

      setIsSubmitted(true)
      onSuccess?.()
    } catch (err) {
      console.error('Lead magnet submission error:', err)
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={variant === "card" ? "relative group" : ""}>
        {variant === "card" && (
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-3xl blur opacity-75"></div>
        )}
        <div className={`relative ${variant === "card" ? "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40 border border-green-500/30 rounded-3xl p-8 md:p-10" : "bg-green-50 dark:bg-green-950/30 border border-green-500/30 rounded-2xl p-6"}`}>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Check Your Inbox!</h3>
            <p className="text-muted-foreground">
              We've sent the guide to your email. If you don't see it, check your spam folder.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              asChild
            >
              <a href="/lead-magnet-guide" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" />
                View Guide
              </a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border border-purple-200/50 dark:border-purple-800/30 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-shrink-0">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
              <FileText className="h-7 w-7 text-white" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-foreground mb-1">Free Guide: 5 Warning Signs Your Culture is Costing You Talent</h3>
            <p className="text-sm text-muted-foreground">Spot the hidden patterns before your best people leave</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Building2 className="h-4 w-4" />
              </div>
              <Input
                type="email"
                placeholder="your.name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-64 h-12 pl-10"
                disabled={isSubmitting}
              />
              {error && (
                <p className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {error}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="h-12 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              disabled={isSubmitting || !agreedToTerms}
            >
              {isSubmitting ? "Sending..." : "Get Free Guide"}
            </Button>
          </form>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
          <Checkbox
            id="inline-terms"
            checked={agreedToTerms}
            onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
            disabled={isSubmitting}
          />
          <label
            htmlFor="inline-terms"
            className="text-xs text-muted-foreground cursor-pointer"
          >
            I agree to the <a href="/terms" className="text-primary hover:underline" target="_blank">Terms of Use</a> and <a href="/privacy" className="text-primary hover:underline" target="_blank">Privacy Policy</a>
          </label>
        </div>
      </div>
    )
  }

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-blue-500/30 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>

      <div className="relative bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40 border border-purple-500/30 rounded-3xl p-8 md:p-10 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
              <FileText className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Free Download</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              5 Warning Signs Your Culture is Costing You Talent
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Learn to spot the hidden patterns that drive your best people away - before it's too late.
            </p>

            <ul className="space-y-3">
              {[
                "The 'quiet quitting' signals most leaders miss",
                "Why exit interviews lie (and what to track instead)",
                "The meeting pattern that predicts turnover",
                "How to measure psychological safety in 60 seconds",
                "The leadership behaviour that costs $50K per departure"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400">{i + 1}</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Form */}
          <div className="bg-white/60 dark:bg-slate-900/60 rounded-2xl p-6 md:p-8 border border-purple-200/50 dark:border-purple-800/30">
            <div className="text-center mb-6">
              <div className="h-20 w-20 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/25 mb-4">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">
                Instant access - no spam, unsubscribe anytime
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <Input
                    type="email"
                    placeholder="your.name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 pl-10"
                    disabled={isSubmitting}
                  />
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Building2 className="h-3 w-3" /> Business email required
                </p>
                {error && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {error}
                  </p>
                )}
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="lead-terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                  disabled={isSubmitting}
                  className="mt-0.5"
                />
                <label
                  htmlFor="lead-terms"
                  className="text-xs text-muted-foreground leading-tight cursor-pointer"
                >
                  I agree to the <a href="/terms" className="text-primary hover:underline" target="_blank">Terms of Use</a> and <a href="/privacy" className="text-primary hover:underline" target="_blank">Privacy Policy</a>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-500/25"
                disabled={isSubmitting || !agreedToTerms}
              >
                <Download className="h-5 w-5 mr-2" />
                {isSubmitting ? "Preparing Your Guide..." : "Download Free Guide"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
