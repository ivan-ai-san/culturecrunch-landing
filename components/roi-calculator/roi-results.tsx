"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, TrendingUp, Calendar, Target } from "lucide-react"
import type { ROIResults } from "./roi-calculations"

interface ROIResultsProps {
  results: ROIResults
}

export default function ROIResultsComponent({ results }: ROIResultsProps) {
  const benefitChartRef = useRef<HTMLCanvasElement>(null)
  const timelineChartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Dynamically import Chart.js to avoid SSR issues
    import('chart.js/auto').then((ChartModule) => {
      const Chart = ChartModule.default

      // Benefit Breakdown Doughnut Chart
      if (benefitChartRef.current) {
        const benefitCtx = benefitChartRef.current.getContext('2d')
        if (benefitCtx) {
          new Chart(benefitCtx, {
            type: 'doughnut',
            data: {
              labels: ['Turnover Reduction', 'Productivity Gains', 'Engagement', 'Error Reduction', 'Time Savings'],
              datasets: [{
                data: [
                  results.year1Breakdown.benefits.turnover,
                  results.year1Breakdown.benefits.productivity,
                  results.year1Breakdown.benefits.engagement,
                  results.year1Breakdown.benefits.errorReduction,
                  results.year1Breakdown.benefits.timeSavings
                ],
                backgroundColor: [
                  'rgb(147, 51, 234)',  // purple-600
                  'rgb(99, 102, 241)',  // indigo-500
                  'rgb(59, 130, 246)',  // blue-500
                  'rgb(139, 92, 246)',  // violet-500
                  'rgb(168, 85, 247)'   // purple-500
                ],
                borderWidth: 0
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    padding: 15,
                    font: {
                      size: 12
                    }
                  }
                },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      const label = context.label || ''
                      const value = context.parsed || 0
                      return `${label}: $${Math.round(value / 1000)}k`
                    }
                  }
                }
              }
            }
          })
        }
      }

      // Timeline Line Chart
      if (timelineChartRef.current) {
        const timelineCtx = timelineChartRef.current.getContext('2d')
        if (timelineCtx) {
          const months = results.monthlyTimeline.slice(0, 24).map(d => `M${d.month}`)
          const benefits = results.monthlyTimeline.slice(0, 24).map(d => d.cumulativeBenefits)
          const costs = results.monthlyTimeline.slice(0, 24).map(d => d.cumulativeCosts)

          new Chart(timelineCtx, {
            type: 'line',
            data: {
              labels: months,
              datasets: [
                {
                  label: 'Cumulative Benefits',
                  data: benefits,
                  borderColor: 'rgb(147, 51, 234)',
                  backgroundColor: 'rgba(147, 51, 234, 0.1)',
                  fill: true,
                  tension: 0.4,
                  pointRadius: 0,
                  borderWidth: 2
                },
                {
                  label: 'Cumulative Investment',
                  data: costs,
                  borderColor: 'rgb(100, 116, 139)',
                  backgroundColor: 'rgba(100, 116, 139, 0.1)',
                  fill: true,
                  tension: 0.4,
                  pointRadius: 0,
                  borderWidth: 2,
                  borderDash: [5, 5]
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              interaction: {
                mode: 'index',
                intersect: false
              },
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    padding: 15,
                    font: {
                      size: 12
                    }
                  }
                },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      const label = context.dataset.label || ''
                      const value = context.parsed.y || 0
                      return `${label}: $${Math.round(value / 1000)}k`
                    }
                  }
                }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: function(value) {
                      return '$' + Math.round(Number(value) / 1000) + 'k'
                    }
                  },
                  grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                  }
                },
                x: {
                  grid: {
                    display: false
                  }
                }
              }
            }
          })
        }
      }
    })
  }, [results])

  const formatCurrency = (value: number): string => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`
    }
    return `$${Math.round(value / 1000)}k`
  }

  return (
    <section id="results" className="py-16 bg-gradient-to-b from-muted/30 via-background to-background">
      <div className="container px-4 md:px-6 max-w-6xl">

        {/* Results Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Leadership Development ROI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on research-backed calculations using your organization's data
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-600 dark:bg-purple-500 rounded-lg">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <div className="text-sm font-medium text-muted-foreground">Year 1 ROI</div>
            </div>
            <div className="text-4xl md:text-5xl font-bold font-mono tabular-nums text-purple-600 dark:text-purple-400 mb-1">
              {formatCurrency(results.year1NetROI)}
            </div>
            <div className="text-xs text-muted-foreground">Net benefit after costs</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/30 border-indigo-200 dark:border-indigo-800">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-indigo-600 dark:bg-indigo-500 rounded-lg">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div className="text-sm font-medium text-muted-foreground">ROI Multiple</div>
            </div>
            <div className="text-4xl md:text-5xl font-bold font-mono tabular-nums text-indigo-600 dark:text-indigo-400 mb-1">
              {results.year1Multiple.toFixed(1)}x
            </div>
            <div className="text-xs text-muted-foreground">Return on investment</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-600 dark:bg-blue-500 rounded-lg">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div className="text-sm font-medium text-muted-foreground">Break-Even</div>
            </div>
            <div className="text-4xl md:text-5xl font-bold font-mono tabular-nums text-blue-600 dark:text-blue-400 mb-1">
              {results.breakEvenMonths.toFixed(1)}
            </div>
            <div className="text-xs text-muted-foreground">Months to payback</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/30 dark:to-violet-900/30 border-violet-200 dark:border-violet-800">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-violet-600 dark:bg-violet-500 rounded-lg">
                <Target className="h-5 w-5 text-white" />
              </div>
              <div className="text-sm font-medium text-muted-foreground">3-Year Value</div>
            </div>
            <div className="text-4xl md:text-5xl font-bold font-mono tabular-nums text-violet-600 dark:text-violet-400 mb-1">
              {formatCurrency(results.year3NetROI)}
            </div>
            <div className="text-xs text-muted-foreground">Cumulative benefit</div>
          </Card>

        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Year 1 Benefit Breakdown</h3>
            <div className="relative h-[300px] flex items-center justify-center">
              <canvas ref={benefitChartRef}></canvas>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">24-Month ROI Timeline</h3>
            <div className="relative h-[300px]">
              <canvas ref={timelineChartRef}></canvas>
            </div>
          </Card>

        </div>

        {/* Detailed Breakdown Table */}
        <Card className="p-6 mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">3-Year Detailed Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr className="text-left">
                  <th className="py-3 px-2 text-sm font-medium text-muted-foreground">Benefit Category</th>
                  <th className="py-3 px-2 text-sm font-medium text-muted-foreground text-right">Year 1</th>
                  <th className="py-3 px-2 text-sm font-medium text-muted-foreground text-right">Year 2</th>
                  <th className="py-3 px-2 text-sm font-medium text-muted-foreground text-right">Year 3</th>
                  <th className="py-3 px-2 text-sm font-medium text-muted-foreground text-right">3-Year Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-2 text-foreground">Turnover Reduction</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year1Breakdown.benefits.turnover)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year2Breakdown.benefits.turnover)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year3Breakdown.benefits.turnover)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums font-semibold text-purple-600 dark:text-purple-400">
                    {formatCurrency(results.year1Breakdown.benefits.turnover + results.year2Breakdown.benefits.turnover + results.year3Breakdown.benefits.turnover)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 text-foreground">Productivity Gains</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year1Breakdown.benefits.productivity)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year2Breakdown.benefits.productivity)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year3Breakdown.benefits.productivity)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums font-semibold text-purple-600 dark:text-purple-400">
                    {formatCurrency(results.year1Breakdown.benefits.productivity + results.year2Breakdown.benefits.productivity + results.year3Breakdown.benefits.productivity)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 text-foreground">Engagement Improvement</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year1Breakdown.benefits.engagement)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year2Breakdown.benefits.engagement)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year3Breakdown.benefits.engagement)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums font-semibold text-purple-600 dark:text-purple-400">
                    {formatCurrency(results.year1Breakdown.benefits.engagement + results.year2Breakdown.benefits.engagement + results.year3Breakdown.benefits.engagement)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 text-foreground">Error Reduction</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year1Breakdown.benefits.errorReduction)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year2Breakdown.benefits.errorReduction)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year3Breakdown.benefits.errorReduction)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums font-semibold text-purple-600 dark:text-purple-400">
                    {formatCurrency(results.year1Breakdown.benefits.errorReduction + results.year2Breakdown.benefits.errorReduction + results.year3Breakdown.benefits.errorReduction)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 text-foreground">Time Savings</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year1Breakdown.benefits.timeSavings)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year2Breakdown.benefits.timeSavings)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year3Breakdown.benefits.timeSavings)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums font-semibold text-purple-600 dark:text-purple-400">
                    {formatCurrency(results.year1Breakdown.benefits.timeSavings + results.year2Breakdown.benefits.timeSavings + results.year3Breakdown.benefits.timeSavings)}
                  </td>
                </tr>
                <tr className="border-t-2 border-border font-semibold">
                  <td className="py-3 px-2 text-foreground">Total Benefits</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year1Breakdown.totalBenefits)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year2Breakdown.totalBenefits)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-foreground">{formatCurrency(results.year3Breakdown.totalBenefits)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums font-bold text-purple-600 dark:text-purple-400">
                    {formatCurrency(results.year1Breakdown.totalBenefits + results.year2Breakdown.totalBenefits + results.year3Breakdown.totalBenefits)}
                  </td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="py-3 px-2 text-muted-foreground">Program Investment</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-muted-foreground">{formatCurrency(results.year1Breakdown.costs)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-muted-foreground">{formatCurrency(results.year2Breakdown.costs)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-muted-foreground">{formatCurrency(results.year3Breakdown.costs)}</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-muted-foreground">
                    {formatCurrency(results.year1Breakdown.costs + results.year2Breakdown.costs + results.year3Breakdown.costs)}
                  </td>
                </tr>
                <tr className="border-t-2 border-border font-bold text-lg">
                  <td className="py-4 px-2 text-foreground">Net ROI</td>
                  <td className="py-4 px-2 text-right font-mono tabular-nums text-green-600 dark:text-green-400">{formatCurrency(results.year1Breakdown.netROI)}</td>
                  <td className="py-4 px-2 text-right font-mono tabular-nums text-green-600 dark:text-green-400">{formatCurrency(results.year2Breakdown.netROI)}</td>
                  <td className="py-4 px-2 text-right font-mono tabular-nums text-green-600 dark:text-green-400">{formatCurrency(results.year3Breakdown.netROI)}</td>
                  <td className="py-4 px-2 text-right font-mono tabular-nums text-green-600 dark:text-green-400">
                    {formatCurrency(results.year3NetROI)}
                  </td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="py-3 px-2 text-foreground font-semibold">ROI Multiple</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-purple-600 dark:text-purple-400 font-semibold">{results.year1Breakdown.roiMultiple.toFixed(1)}x</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-purple-600 dark:text-purple-400 font-semibold">{results.year2Breakdown.roiMultiple.toFixed(1)}x</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-purple-600 dark:text-purple-400 font-semibold">{results.year3Breakdown.roiMultiple.toFixed(1)}x</td>
                  <td className="py-3 px-2 text-right font-mono tabular-nums text-purple-600 dark:text-purple-400 font-bold text-lg">{results.year3Multiple.toFixed(1)}x</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-purple-200/50 dark:border-purple-800/50">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Ready to achieve these results?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Schedule a consultation to discuss how we can help your organization build a leadership operating system that delivers measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700">
                <a href="#contact">Schedule ROI Discussion</a>
              </Button>
              <Button size="lg" variant="outline">
                Download Full Methodology
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Join 150+ organizations building leadership systems that work
            </p>
          </div>
        </Card>

      </div>
    </section>
  )
}
