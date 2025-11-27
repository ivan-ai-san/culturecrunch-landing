"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Zap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const comparisonData = [
  {
    feature: "Job to be done",
    measurement: "Measure how people feel",
    culturecrunch: "Install weekly leadership rhythm that changes how teams operate"
  },
  {
    feature: "Primary users",
    measurement: "HR / People & Culture teams",
    culturecrunch: "Leaders and teams (HR as strategic partner)"
  },
  {
    feature: "Rhythm",
    measurement: "Annual/quarterly surveys → action planning",
    culturecrunch: "6-week OS installation → 30-min weekly loops forever"
  },
  {
    feature: "Output",
    measurement: "Dashboards, benchmarks, sentiment trends",
    culturecrunch: "Micro-actions, decisions, accountability, live evidence linking behaviour → outcomes"
  },
  {
    feature: "Learning",
    measurement: "Static insights (same reports every year)",
    culturecrunch: "Three compounding learning loops"
  },
  {
    feature: "Integration",
    measurement: "Required upfront (6-12 month sales cycles)",
    culturecrunch: "Optional - start in 1 week, integrate later"
  },
  {
    feature: "Time to value",
    measurement: "3-6 months (survey → analysis → action)",
    culturecrunch: "Week 1 (leaders running rhythm immediately)"
  },
  {
    feature: "Behaviour change",
    measurement: "Recommended actions (hope they follow through)",
    culturecrunch: "Tracked micro-actions with accountability loops"
  }
]

export default function DifferentiationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Main Content - Dark Background */}
      <section className="flex-1 py-16 md:py-24 bg-slate-950">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Culture Crunch Is Different
            </h1>
            <p className="text-lg text-slate-400">
              We're not competing with measurement platforms. We're in a different category.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto mb-16 overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden" style={{ borderRadius: '1rem' }}>
              <thead>
                <tr>
                  <th className="p-5 bg-slate-900/80 border-b border-r border-slate-700/50 text-left font-semibold text-slate-300 w-[160px]">
                    Feature
                  </th>
                  <th className="p-5 bg-slate-900/80 border-b border-r border-slate-700/50 text-left">
                    <div className="font-semibold text-slate-300">Measurement Platforms</div>
                    <p className="text-sm text-slate-500 mt-0.5 font-normal">(CultureAmp, Peakon, etc)</p>
                  </th>
                  <th className="p-5 bg-indigo-950/50 border-b border-slate-700/50 text-left">
                    <div className="font-semibold text-indigo-300">Culture Crunch</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index}>
                    <td className={`p-5 bg-slate-900/50 border-r border-slate-700/50 font-medium text-white ${index !== comparisonData.length - 1 ? 'border-b' : ''}`}>
                      {row.feature}
                    </td>
                    <td className={`p-5 bg-slate-900/30 border-r border-slate-700/50 text-slate-400 ${index !== comparisonData.length - 1 ? 'border-b' : ''}`}>
                      {row.measurement}
                    </td>
                    <td className={`p-5 bg-indigo-950/30 text-slate-200 ${index !== comparisonData.length - 1 ? 'border-b border-slate-700/50' : ''}`}>
                      {row.culturecrunch}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* The Line We Own */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-700/50 p-8 md:p-12 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                The Line We Own
              </h2>
              <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                "Measurement platforms tell organisations <span className="font-semibold text-white">what the culture feels like</span>.<br className="hidden md:block" />
                Culture Crunch installs <span className="font-semibold text-white">the leadership operating system that changes it</span>."
              </p>
            </div>
          </div>

          {/* Partnership Cards */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Survey Tools Card */}
              <div className="rounded-2xl bg-slate-900/60 border border-slate-700/50 p-6 md:p-8">
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                  <h3 className="text-lg md:text-xl font-bold text-white">We Don't Replace Survey Tools</h3>
                </div>
                <p className="text-slate-400 leading-relaxed pl-5">
                  We make their findings actionable every week. Partner with CultureAmp data. Add our weekly OS. Get compound learning.
                </p>
              </div>

              {/* Workshops Card */}
              <div className="rounded-2xl bg-slate-900/60 border border-slate-700/50 p-6 md:p-8">
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                  <h3 className="text-lg md:text-xl font-bold text-white">We Don't Replace Workshops</h3>
                </div>
                <p className="text-slate-400 leading-relaxed pl-5">
                  We install what workshops can't: daily practice, habit formation, continuous feedback, visible accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Install the OS?
            </h2>
            <p className="text-lg text-muted-foreground">
              See how Culture Crunch can transform your leadership culture in just 6 weeks.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="flex items-center gap-3 px-6 py-6 h-auto text-base bg-[#1a1d21] hover:bg-[#2a2d31] text-white rounded-xl border-0 dark:bg-primary dark:hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(36,101,237,0.5)]">
                <Link href="/#contact">
                  <Zap className="h-5 w-5" />
                  Get Started
                </Link>
              </Button>
              <Button asChild variant="outline" className="px-6 py-6 h-auto rounded-xl text-base">
                <Link href="/roi-calculator">
                  Calculate Your ROI
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
