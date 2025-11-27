"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Construction, ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Coming Soon Section */}
      <section className="flex-1 flex items-center justify-center py-20 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="text-center space-y-8">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-2xl"></div>
                <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                  <Construction className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>

            {/* Badge */}
            <Badge variant="outline" className="text-sm">
              Coming Soon
            </Badge>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                About Culture Crunch
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We're crafting something special to share our story, mission, and the team behind the Leadership & Culture Operating System.
              </p>
            </div>

            {/* Description */}
            <div className="max-w-xl mx-auto space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                While we work on this page, you can learn more about our approach through our white paper, explore the ROI Calculator, or get in touch directly.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="text-base">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="pt-12 border-t border-border max-w-xl mx-auto">
              <p className="text-sm font-medium text-muted-foreground mb-4">In the meantime, explore:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/white-paper"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  White Paper
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link
                  href="/roi-calculator"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  ROI Calculator
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link
                  href="/#methodology"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Methodology
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
