"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CssGridBackground from "@/components/css-grid-background"
import AccountableConversations from "@/components/accountable-conversations"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Zap } from "lucide-react"
import Link from "next/link"

export default function MethodologyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <CssGridBackground />
        <div className="container px-4 md:px-6 py-24 md:py-32 relative z-10">
          {/* Back to Home */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-block rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 px-4 py-2 text-sm font-medium mb-6 border border-primary/20">
              Our Methodology
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              The Science Behind Culture Change
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Evidence-based frameworks that transform how leaders communicate, decide, and build trust.
            </p>
          </div>
        </div>
      </section>

      {/* Accountable Conversations Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background dark:from-background dark:via-muted/5 dark:to-background">
        <div className="container px-4 md:px-6">
          <AccountableConversations />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30 dark:bg-muted/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Transform Your Culture?
            </h2>
            <p className="text-lg text-muted-foreground">
              See how Culture Crunch can install these practices into your leadership team in just 6 weeks.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="flex items-center gap-3 px-6 py-6 h-auto text-base bg-[#1a1d21] hover:bg-[#2a2d31] text-white rounded-xl border-0 dark:bg-primary dark:hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(36,101,237,0.5)]">
                <Link href="/#contact">
                  <Zap className="h-5 w-5" />
                  Get Started
                </Link>
              </Button>
              <Button asChild variant="outline" className="px-6 py-6 h-auto rounded-xl text-base">
                <Link href="/differentiation">
                  See How We're Different
                  <ArrowRight className="ml-2 h-5 w-5" />
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
