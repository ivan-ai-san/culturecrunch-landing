"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, ArrowRight, CheckCircle2, Mail, Building2 } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const [error, setError] = useState("")

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'newsletter',
          email
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error('Newsletter API Error:', response.status, errorData)
        throw new Error(errorData.error || 'Failed to subscribe')
      }

      const result = await response.json()
      console.log('Newsletter subscription success:', result)
      setIsSubscribed(true)
    } catch (err) {
      console.error('Newsletter subscription error:', err)
      setError(err instanceof Error ? err.message : "Failed to subscribe. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="border-t py-12 md:py-16 relative overflow-hidden">
      {/* Decorative gradient backgrounds for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border border-purple-200/50 dark:border-purple-800/30 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-bold text-foreground mb-1">Weekly Leadership Insights</h3>
                  <p className="text-sm text-muted-foreground">Evidence-based culture tips delivered every Tuesday. No fluff, just actionable insights.</p>
                </div>
                {isSubscribed ? (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-medium">You're subscribed!</span>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <Input
                          type="email"
                          placeholder="you@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full sm:w-56 h-11 pl-10"
                          required
                          disabled={isSubmitting}
                        />
                        {error && (
                          <p className="absolute -bottom-5 left-0 text-xs text-red-500 whitespace-nowrap">
                            {error}
                          </p>
                        )}
                      </div>
                      <Button
                        type="submit"
                        className="h-11 px-5"
                        disabled={isSubmitting || !agreedToTerms}
                      >
                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                      </Button>
                    </form>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="newsletter-terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                        disabled={isSubmitting}
                      />
                      <label
                        htmlFor="newsletter-terms"
                        className="text-xs text-muted-foreground cursor-pointer"
                      >
                        I agree to the <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Culture Crunch</h3>
            <p className="text-sm text-muted-foreground">
              The Leadership and Culture Operating System that embeds accountable leadership at scale
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Product</h3>
            <nav aria-label="Product Navigation">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#problem" className="text-muted-foreground hover:text-foreground">
                    The Problem
                  </Link>
                </li>
                <li>
                  <Link href="/#opportunity" className="text-muted-foreground hover:text-foreground">
                    The Opportunity
                  </Link>
                </li>
                <li>
                  <Link href="/#solution" className="text-muted-foreground hover:text-foreground">
                    Solution
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="text-muted-foreground hover:text-foreground">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="/methodology" className="text-muted-foreground hover:text-foreground">
                    Methodology
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Resources</h3>
            <nav aria-label="Resources Navigation">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#contact" className="text-muted-foreground hover:text-foreground">
                    Book a Demo
                  </Link>
                </li>
                <li>
                  <Link href="/roi-calculator" className="text-muted-foreground hover:text-foreground">
                    ROI Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/white-paper" className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 group">
                    <FileText className="h-3.5 w-3.5 text-purple-500" />
                    <span>White Paper</span>
                  </Link>
                </li>
                <li>
                  <Link href="/lead-magnet-guide" className="text-muted-foreground hover:text-foreground flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5 text-indigo-500" />
                    <span>Free Guide</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Company</h3>
            <nav aria-label="Company Navigation">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Culture Crunch Pty Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link href="https://github.com/ivan-ai-san/DEMO_CultureCrunch" className="text-muted-foreground hover:text-foreground" aria-label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
