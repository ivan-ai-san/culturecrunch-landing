"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, CheckCircle, FileText, Users, TrendingUp, Target, Clock } from "lucide-react"
import MethodologyViewer from "./methodology-viewer"

const researchBasis = [
  {
    icon: Users,
    title: "BetterManager Study (2023)",
    description: "752 managers across industries showing average 7:1 ROI",
    citation: "Topping, J. (2023)"
  },
  {
    icon: TrendingUp,
    title: "Turnover Reduction Research",
    description: "25-40% improvement with systematic leadership development",
    citation: "Deloitte, ICF, Zenger Folkman"
  },
  {
    icon: Clock,
    title: "Habit Formation Timelines",
    description: "66-day median for behavior change to become automatic",
    citation: "Lally et al. (2010)"
  },
  {
    icon: Target,
    title: "Implementation Science",
    description: "Realistic ramp-up periods based on organizational change research",
    citation: "Scaccia et al. (2015)"
  }
]

const faqs = [
  {
    question: "How accurate is this calculator?",
    answer: "The calculator uses conservative estimates from peer-reviewed research (primarily the low-to-middle end of published ranges). For example, we use 25% turnover reduction when research shows 25-40%. Organizations with strong implementation fidelity typically exceed these estimates. Accuracy depends on quality of input data, implementation fidelity, organizational readiness, and external stability."
  },
  {
    question: "Why is your calculator more conservative than others?",
    answer: "Many ROI calculators use overly optimistic improvement rates, immediate full impact (no ramp-up), and best-case scenarios as defaults. Our calculator uses low-to-middle end of research ranges, includes realistic ramp-up timelines based on habit formation research, counts only well-documented benefit categories, and excludes benefits difficult to monetize (innovation, customer satisfaction). This provides more credible, defensible projections."
  },
  {
    question: "Can we expect to see these results in 6 months?",
    answer: "Partially. Based on habit formation research (66-day median) and organizational change timelines: By Month 6, you'll see 25-50% of full benefits realized, with engagement improvements most visible. By Month 12, you'll see 75-90% of full benefits with clear ROI positive (typically 4-8x by year-end). By Month 24, you'll achieve 100% of full benefits with the system fully embedded. Break-even typically occurs at 4-7 months."
  },
  {
    question: "What's included in the program investment cost?",
    answer: "Typical $100k-$200k investment includes: program design and customization, 6-12 month facilitation, coaching for leaders (group and individual), assessment tools (360-degree feedback, psychological safety surveys), technology platform access, materials and resources, monthly reinforcement sessions, quarterly check-ins, measurement and reporting, and integration support with HR systems."
  },
  {
    question: "How does this compare to traditional event-based training?",
    answer: "Operating System Model (this calculator): distributed over 6-12 months, weekly 30-minute sessions embedded in daily work with habit formation focus, delivering 6-8x typical ROI (up to 11x). Event-Based Training: 2-3 day intensive workshops separate from daily work with knowledge transfer focus, delivering 0-2x ROI (often negative after full cost accounting). Research shows workplace can 'untrain' faster than training can train with event-based approaches."
  }
]

export default function ROIMethodology() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [methodologyViewerOpen, setMethodologyViewerOpen] = useState(false)

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container px-4 md:px-6 max-w-6xl">

        {/* Research Basis */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Research-Backed Methodology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Calculate ROI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              All calculations are based on conservative estimates from peer-reviewed research across 100+ studies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {researchBasis.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      <p className="text-xs text-muted-foreground font-mono">{item.citation}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <Card className="p-6 bg-muted/50">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Conservative Estimates = Credible Results</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use the low-to-middle end of research ranges to provide defensible projections. For example, turnover reduction research shows 25-40% improvement, but we use 25% (the conservative end). This means most organizations exceed our projections rather than fall short.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Benefit Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Five Evidence-Based Benefit Categories</h3>

          <div className="space-y-4">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center font-bold text-purple-600 dark:text-purple-400">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">Turnover Reduction (Primary Benefit)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Research shows 25-40% reduction in turnover with effective leadership development (Deloitte 2023, ICF, Zenger Folkman). We use a conservative 25% reduction. Cost per departure = 100% of salary (SHRM median estimate).
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    Typical impact: 35-40% of total benefits
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-950/30 flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">Productivity Gains</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    10% productivity improvement through better habits, clearer goals, and reduced friction (ICF, DDI). Based on Wood & Rünger (2016): 43-45% of workplace actions are habitual. Better leadership = better habits = higher productivity.
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    Typical impact: 30-35% of total benefits
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">Engagement Improvements</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    7% engagement improvement reduces presenteeism (Gallup, McKinsey, BCG). Low engagement = 37% lost productive time (Gallup). We use conservative 7% improvement (research shows 7-23% range).
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    Typical impact: 15-20% of total benefits
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-violet-100 dark:bg-violet-950/30 flex items-center justify-center font-bold text-violet-600 dark:text-violet-400">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">Error/Quality Reduction (Industry-Specific)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Leadership influences 15% of error variance (Jeyaraman et al. 2018 healthcare meta-analysis of 223 studies). Industry error rates: Healthcare 5%, Manufacturing 8%, Tech 3%, Professional Services 4%, Finance 6%.
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    Typical impact: 5-10% of total benefits
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center font-bold text-purple-600 dark:text-purple-400">
                  5
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">Communication/Time Savings</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    O.O.R.A. methodology improves communication efficiency 30%. Managers spend 25% of time on communication issues, conflicts, and misalignments (Rosenberg 2015, Merriel et al. 2022).
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    Typical impact: 5-10% of total benefits
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-accent/50 transition-colors"
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* View Methodology CTA */}
          <Card className="mt-8 p-6 bg-muted/50">
            <div className="flex items-start gap-4">
              <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Want more details?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  View our comprehensive methodology document with complete research citations, detailed calculations, and validation studies.
                </p>
                <button
                  onClick={() => setMethodologyViewerOpen(true)}
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                >
                  View Methodology →
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Methodology Viewer Modal */}
        <MethodologyViewer
          open={methodologyViewerOpen}
          onOpenChange={setMethodologyViewerOpen}
        />

      </div>
    </section>
  )
}
