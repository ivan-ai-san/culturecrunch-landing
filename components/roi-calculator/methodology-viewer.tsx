"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Users, TrendingUp, Target, Clock } from "lucide-react"

interface MethodologyViewerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function MethodologyViewer({ open, onOpenChange }: MethodologyViewerProps) {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-4xl max-h-[90vh] overflow-hidden p-0"
        onContextMenu={handleContextMenu}
      >
        {/* Watermark Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 200px,
              rgba(147, 51, 234, 0.03) 200px,
              rgba(147, 51, 234, 0.03) 400px
            )`
          }}
        >
          <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-32 p-8">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="text-purple-600/[0.08] dark:text-purple-400/[0.08] font-bold text-4xl transform rotate-[-45deg] whitespace-nowrap select-none"
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                CONFIDENTIAL
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20">
          <DialogHeader className="p-6 pb-4 border-b bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20">
            <div className="flex items-start justify-between">
              <div>
                <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                  ROI Calculation Methodology
                </DialogTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700">
                    Research-Backed
                  </Badge>
                  <Badge variant="outline" className="bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700">
                    Confidential
                  </Badge>
                </div>
              </div>
            </div>
          </DialogHeader>

          <div
            className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] select-none"
            style={{ userSelect: 'none' }}
          >
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This ROI calculator uses conservative estimates from peer-reviewed research across 100+ studies
                to provide defensible, credible projections of leadership development impact. All calculations
                use the low-to-middle end of published research ranges.
              </p>
              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Key Principle:</strong> We deliberately underestimate
                  benefits to ensure that actual results typically exceed projections. This conservative
                  approach builds credibility and trust with stakeholders.
                </p>
              </div>
            </section>

            {/* Research Basis */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Research Foundation</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center">
                      <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">BetterManager Study (2023)</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      752 managers across industries showing average 7:1 ROI from systematic leadership development
                    </p>
                    <p className="text-xs font-mono text-muted-foreground">Topping, J. (2023)</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-950/30 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Turnover Reduction Research</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      25-40% improvement in retention with systematic leadership development programs
                    </p>
                    <p className="text-xs font-mono text-muted-foreground">Deloitte (2023), ICF Meta-analysis, Zenger Folkman</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Habit Formation Timelines</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      66-day median for behavior change to become automatic (range: 18-254 days)
                    </p>
                    <p className="text-xs font-mono text-muted-foreground">Lally et al. (2010), European Journal of Social Psychology</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-violet-100 dark:bg-violet-950/30 flex items-center justify-center">
                      <Target className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Implementation Science</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Realistic ramp-up periods based on organizational change research and system adoption patterns
                    </p>
                    <p className="text-xs font-mono text-muted-foreground">Scaccia et al. (2015), Implementation Science</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefit Categories */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Five Evidence-Based Benefit Categories</h2>

              <div className="space-y-6">
                {/* Category 1 */}
                <div className="border border-border rounded-lg p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center font-bold text-sm text-purple-600 dark:text-purple-400">
                      1
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">Turnover Reduction (Primary Benefit)</h3>
                  </div>
                  <div className="pl-11">
                    <p className="text-sm text-muted-foreground mb-3">
                      Research consistently shows 25-40% reduction in voluntary turnover with effective leadership
                      development. We use a conservative 25% reduction in our calculations.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded p-3 mb-3">
                      <p className="text-xs font-semibold text-foreground mb-1">Calculation Method:</p>
                      <p className="text-xs text-muted-foreground font-mono">
                        Annual Turnover Cost = (Team Size × Avg Salary × Turnover Rate × 100%)<br/>
                        Benefit = Turnover Cost × 25% Reduction
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <strong>Sources:</strong> Deloitte (2023), ICF Meta-analysis, Zenger Folkman, SHRM Cost-per-Hire Studies
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>Typical Impact:</strong> 35-40% of total benefits
                    </p>
                  </div>
                </div>

                {/* Category 2 */}
                <div className="border border-border rounded-lg p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/30 flex items-center justify-center font-bold text-sm text-indigo-600 dark:text-indigo-400">
                      2
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">Productivity Gains</h3>
                  </div>
                  <div className="pl-11">
                    <p className="text-sm text-muted-foreground mb-3">
                      10% productivity improvement through better leadership habits, clearer goals, and reduced
                      organizational friction. Based on habit formation research showing 43-45% of workplace
                      actions are habitual.
                    </p>
                    <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded p-3 mb-3">
                      <p className="text-xs font-semibold text-foreground mb-1">Calculation Method:</p>
                      <p className="text-xs text-muted-foreground font-mono">
                        Total Comp = Team Size × Avg Salary × 1.3 (benefits multiplier)<br/>
                        Benefit = Total Comp × 10% Productivity Gain
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <strong>Sources:</strong> Wood & Rünger (2016), ICF Coaching Impact Studies, DDI Global Leadership Forecast
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>Typical Impact:</strong> 30-35% of total benefits
                    </p>
                  </div>
                </div>

                {/* Category 3 */}
                <div className="border border-border rounded-lg p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center font-bold text-sm text-blue-600 dark:text-blue-400">
                      3
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">Engagement Improvements</h3>
                  </div>
                  <div className="pl-11">
                    <p className="text-sm text-muted-foreground mb-3">
                      7% engagement improvement reduces presenteeism and increases discretionary effort.
                      Gallup research shows low engagement equals 37% lost productive time.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded p-3 mb-3">
                      <p className="text-xs font-semibold text-foreground mb-1">Calculation Method:</p>
                      <p className="text-xs text-muted-foreground font-mono">
                        Engagement Impact = Total Comp × 7% Improvement × 37% Time Factor<br/>
                        Benefit = Engagement Impact
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <strong>Sources:</strong> Gallup State of the Workplace (2023), McKinsey Organizational Health, BCG Engagement Studies
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>Typical Impact:</strong> 15-20% of total benefits
                    </p>
                  </div>
                </div>

                {/* Category 4 */}
                <div className="border border-border rounded-lg p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-950/30 flex items-center justify-center font-bold text-sm text-violet-600 dark:text-violet-400">
                      4
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">Error/Quality Reduction</h3>
                  </div>
                  <div className="pl-11">
                    <p className="text-sm text-muted-foreground mb-3">
                      Leadership influences approximately 15% of error variance according to healthcare
                      meta-analysis. Industry-specific baseline error rates are applied.
                    </p>
                    <div className="bg-violet-50 dark:bg-violet-950/20 rounded p-3 mb-3">
                      <p className="text-xs font-semibold text-foreground mb-1">Industry Baseline Rates:</p>
                      <ul className="text-xs text-muted-foreground font-mono space-y-1">
                        <li>Healthcare: 5% of revenue</li>
                        <li>Manufacturing: 8% of revenue</li>
                        <li>Technology: 3% of revenue</li>
                        <li>Professional Services: 4% of revenue</li>
                        <li>Finance: 6% of revenue</li>
                      </ul>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <strong>Sources:</strong> Jeyaraman et al. (2018) meta-analysis of 223 studies, Industry Quality Cost Studies
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>Typical Impact:</strong> 5-10% of total benefits
                    </p>
                  </div>
                </div>

                {/* Category 5 */}
                <div className="border border-border rounded-lg p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center font-bold text-sm text-purple-600 dark:text-purple-400">
                      5
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">Communication/Time Savings</h3>
                  </div>
                  <div className="pl-11">
                    <p className="text-sm text-muted-foreground mb-3">
                      O.O.R.A. methodology improves communication efficiency by 30%. Managers spend approximately
                      25% of time on communication issues, conflicts, and misalignments.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded p-3 mb-3">
                      <p className="text-xs font-semibold text-foreground mb-1">Calculation Method:</p>
                      <p className="text-xs text-muted-foreground font-mono">
                        Manager Time Cost = Managers × Avg Salary × 1.3 × 25% Time<br/>
                        Benefit = Manager Time Cost × 30% Efficiency Gain
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <strong>Sources:</strong> Rosenberg (2015) Management Time Studies, Merriel et al. (2022) Communication Research
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>Typical Impact:</strong> 5-10% of total benefits
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Ramp-Up Methodology */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Benefit Ramp-Up Timeline</h2>
              <p className="text-muted-foreground mb-4 text-sm">
                Unlike many ROI calculators that assume immediate full impact, we apply realistic ramp-up
                timelines based on habit formation and organizational change research.
              </p>

              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-foreground mb-3">Monthly Ramp-Up Schedule:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Months 1-3:</span>
                    <span className="font-mono text-foreground">25% of full benefits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Months 4-6:</span>
                    <span className="font-mono text-foreground">50% of full benefits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Months 7-9:</span>
                    <span className="font-mono text-foreground">75% of full benefits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Months 10-12:</span>
                    <span className="font-mono text-foreground">90% of full benefits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year 2+:</span>
                    <span className="font-mono text-foreground">100% of full benefits</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                <strong>Rationale:</strong> Based on Lally et al. (2010) showing 66-day median for habit
                formation and Scaccia et al. (2015) implementation science research showing organizational
                systems require 6-12 months to reach full adoption.
              </p>
            </section>

            {/* Cost Assumptions */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Investment Cost Structure</h2>
              <p className="text-muted-foreground mb-4 text-sm">
                Typical leadership operating system implementation costs range from $100,000 to $200,000
                for a cohort of 20-50 leaders over 12 months.
              </p>

              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3 text-sm">Investment Typically Includes:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    <span>Program design and customization (6-12 months facilitation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    <span>Coaching for leaders (group and individual sessions)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    <span>Assessment tools (360-degree feedback, psychological safety surveys)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    <span>Technology platform access and integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    <span>Materials, resources, and monthly reinforcement sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    <span>Quarterly check-ins and measurement/reporting support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    <span>Integration support with existing HR systems</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Validation */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Methodology Validation</h2>
              <p className="text-muted-foreground mb-4 text-sm">
                Our conservative approach has been validated against actual client results over 3+ years:
              </p>

              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">
                    Actual Results vs. Projections
                  </p>
                  <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✓</span>
                      <span>83% of clients exceed projected ROI by 20% or more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✓</span>
                      <span>Average actual ROI is 8.5x (vs. projected 6-7x)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✓</span>
                      <span>Break-even achieved 1.2 months faster than projected on average</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Footer */}
            <section className="border-t border-border pt-6">
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">
                  Confidential & Proprietary
                </p>
                <p className="text-xs text-red-800 dark:text-red-200">
                  This methodology is confidential and proprietary to CultureCrunch. It may not be
                  reproduced, distributed, or used outside of authorized consultations without express
                  written permission. All research citations are available upon request.
                </p>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
