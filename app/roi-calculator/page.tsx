"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ROICalculatorForm from "@/components/roi-calculator/roi-calculator-form"
import ROIResults from "@/components/roi-calculator/roi-results"
import ROIMethodology from "@/components/roi-calculator/roi-methodology"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-background via-muted/30 to-background border-b border-border">
        <div className="container px-4 md:px-6 py-20 text-center max-w-4xl">
          <Badge variant="outline" className="mb-6">
            ROI Calculator
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Calculate Your Leadership Development ROI
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            See the real financial impact of building leadership as an operating system, not an event
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span>Based on peer-reviewed research across 100+ studies</span>
          </div>
        </div>
      </section>

      {/* Calculator Form Section */}
      {!showResults && (
        <ROICalculatorForm onCalculate={handleCalculationComplete} />
      )}

      {/* Results Section */}
      {showResults && calculationResults && (
        <ROIResults results={calculationResults} />
      )}

      {/* Methodology Section */}
      <ROIMethodology />

      <Footer />
    </div>
  )
}
