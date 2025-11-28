"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ROICalculatorForm from "@/components/roi-calculator/roi-calculator-form"
import ROIResults from "@/components/roi-calculator/roi-results"
import ROIMethodology from "@/components/roi-calculator/roi-methodology"
import CssGridBackground from "@/components/css-grid-background"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Calculator, TrendingUp, DollarSign } from "lucide-react"

export default function ROICalculatorPage() {
  const [showResults, setShowResults] = useState(false)
  const [calculationResults, setCalculationResults] = useState<any>(null)

  const handleCalculationComplete = (results: any) => {
    setCalculationResults(results)
    setShowResults(true)

    // Smooth scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <CssGridBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-cyan-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-green-500/8 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 py-20 text-center max-w-4xl relative z-10">
          {/* Icon Badge */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-xl animate-pulse"></div>
              <div className="relative flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/25">
                <Calculator className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <Badge variant="outline" className="mb-6 bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
            ROI Calculator
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Calculate Your Leadership Development ROI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            See the real financial impact of building leadership as an operating system, not an event
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>100+ peer-reviewed studies</span>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <TrendingUp className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>6.8:1 average ROI</span>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <DollarSign className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Quantified impact</span>
            </div>
          </div>
        </div>

        {/* Bottom border gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      </section>

      {/* Calculator Form Section */}
      {!showResults && (
        <section className="relative py-16 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/20"></div>
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <ROICalculatorForm onCalculate={handleCalculationComplete} />
          </div>
        </section>
      )}

      {/* Results Section */}
      {showResults && calculationResults && (
        <section className="relative py-16 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-background to-background dark:from-emerald-950/20"></div>
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <ROIResults results={calculationResults} />
          </div>
        </section>
      )}

      {/* Methodology Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-violet-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <ROIMethodology />
        </div>
      </section>

      <Footer />
    </div>
  )
}
