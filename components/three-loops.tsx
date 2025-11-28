"use client"

import { useState } from "react"
import {
  Calendar,
  MessageSquare,
  Target,
  Activity,
  LineChart,
  Sparkles,
  Brain,
  Users,
  Lightbulb,
  CheckCircle,
  TrendingUp,
  Shield,
  Database,
  Cpu,
  Search,
  Globe,
  BarChart3,
  ChevronDown,
  ChevronUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import LoopsVisualization from "@/components/loops-visualization"

interface LoopStep {
  title: string
  description: string
  icon: React.ElementType
}

interface LoopData {
  id: number
  title: string
  subtitle: string
  color: "purple" | "indigo" | "blue"
  steps: LoopStep[]
  demoFeatures: string[]
  benefits: string[]
}

const loopsData: LoopData[] = [
  {
    id: 1,
    title: "Weekly Leadership Rhythm",
    subtitle: "Every team gets better. We capture what works.",
    color: "purple",
    steps: [
      {
        title: "Monday 7am: Weekly Brief",
        description: "Leader gets personalised snapshot - key metrics, themes, focus areas for the week",
        icon: Calendar
      },
      {
        title: "20-Minute Team Check-in",
        description: "Structured conversation on clarity, trust, workload, recognition",
        icon: MessageSquare
      },
      {
        title: "Choose ONE Micro-Action",
        description: "Team picks single concrete change (adjust handover, recognise wins, fix one process)",
        icon: Target
      },
      {
        title: "System Tracks in Background",
        description: "Completion rate, pulse signals, team sentiment shifts",
        icon: Activity
      },
      {
        title: "Evidence Visible on Dashboard",
        description: "Leading indicators: team health, rhythm consistency, early outcome links",
        icon: LineChart
      },
      {
        title: "Next Week's Brief Improves",
        description: "AI adjusts guidance based on what worked for this team",
        icon: Sparkles
      }
    ],
    demoFeatures: [
      "Executives & Senior Manager Dashboards (multi-level visibility)",
      "Weekly check-ins with structured prompts",
      "Action Tracker with completion rates",
      "Team Pulse Surveys (12-question culture)",
      "6-week trend analysis",
      "SMS survey distribution (frontline-ready)"
    ],
    benefits: [
      "Leadership becomes predictable, not random",
      "Team see improvements (accountability visible and trust increases)",
      "Friction gets fixed weekly (not quarterly)",
      "Culture becomes 'how we work' (not HR's job)",
      "Evidence links behaviour → outcomes"
    ]
  },
  {
    id: 2,
    title: "AI-Powered Leader Guidance",
    subtitle: "Your AI coach gets smarter as your teams improve.",
    color: "indigo",
    steps: [
      {
        title: "Leader Faces Challenge",
        description: "\"Two senior staff in conflict after roster change\"",
        icon: Users
      },
      {
        title: "Chris AI Suggests Approach",
        description: "Conversation prompts, Accountable Conversation structure, 1-3 micro-actions to try",
        icon: Brain
      },
      {
        title: "Leader Tries It",
        description: "Adapts guidance to their style and context",
        icon: Lightbulb
      },
      {
        title: "Reports What Worked",
        description: "Quick reflection: \"Used it, landed well, team stabilised\"",
        icon: CheckCircle
      },
      {
        title: "AI Learns Context Patterns",
        description: "Which guidance works for which challenges, industries, team types",
        icon: TrendingUp
      },
      {
        title: "Better Guidance for Next Leader",
        description: "Next time similar challenge appears, AI suggests proven approach",
        icon: Sparkles
      }
    ],
    demoFeatures: [
      "Chris AI Chat (full-page coaching)",
      "Floating Chat Bubble (always accessible)",
      "Context-aware prompts (based on page)",
      "AI-suggested actions from patterns",
      "Conversation export (track what worked)"
    ],
    benefits: [
      "Leaders never face challenges alone",
      "Guidance gets personalised to YOUR context",
      "Proven patterns surface automatically",
      "Coaching scales across all leaders",
      "Learning compounds with every interaction"
    ]
  },
  {
    id: 3,
    title: "Cross-Organisation Pattern Recognition",
    subtitle: "The more organisations use Culture Crunch, the smarter every organisation becomes.",
    color: "blue",
    steps: [
      {
        title: "Anonymous Behavioural Data",
        description: "6 data sources: Outlook, Teams, Calendar, Pulse, HRIS, Care records (privacy-protected)",
        icon: Database
      },
      {
        title: "8 AI Agents Analyse Patterns",
        description: "Communication, Collaboration, Work-Life Balance, Engagement, Leadership behaviours",
        icon: Cpu
      },
      {
        title: "Discover What Works",
        description: "Which micro-actions reduce turnover? Which rhythms boost engagement? (by industry, size, context)",
        icon: Search
      },
      {
        title: "Aggregate Anonymously",
        description: "\"Mid-size aged care\" or \"Multi-site frontline teams\" (never individual data)",
        icon: Shield
      },
      {
        title: "Benchmarks & Recommendations",
        description: "\"Teams like yours who used these patterns saw 35% fewer turnover risks\"",
        icon: BarChart3
      },
      {
        title: "New Clients Benefit Immediately",
        description: "Start with proven playbook, not generic framework",
        icon: Globe
      }
    ],
    demoFeatures: [
      "6 Data Connectors (Outlook, Teams, HRIS, Care)",
      "8 AI Analysis Agents (specialised intelligence)",
      "Risk Detection (burnout, turnover, engagement)",
      "Opportunity Discovery (high-performers, patterns)",
      "ROI Calculator (quantified impact)",
      "Regional vs Org benchmarking"
    ],
    benefits: [
      "Benefit from collective learning across industry",
      "Skip trial-and-error (proven patterns first)",
      "Benchmark against similar organisations",
      "System gets more valuable over time",
      "Network effect = competitive moat"
    ]
  }
]

const colorClasses = {
  purple: {
    gradient: "from-purple-500/30 to-indigo-500/30",
    bg: "from-purple-50/90 to-indigo-50/90 dark:from-purple-950/30 dark:to-indigo-950/30",
    border: "border-purple-200/50 dark:border-purple-800/50",
    text: "text-purple-600 dark:text-purple-400",
    numberBg: "bg-purple-100 dark:bg-purple-950/50",
    dot: "bg-purple-500",
    line: "from-purple-500 to-indigo-500"
  },
  indigo: {
    gradient: "from-indigo-500/30 to-blue-500/30",
    bg: "from-indigo-50/90 to-blue-50/90 dark:from-indigo-950/30 dark:to-blue-950/30",
    border: "border-indigo-200/50 dark:border-indigo-800/50",
    text: "text-indigo-600 dark:text-indigo-400",
    numberBg: "bg-indigo-100 dark:bg-indigo-950/50",
    dot: "bg-indigo-500",
    line: "from-indigo-500 to-blue-500"
  },
  blue: {
    gradient: "from-blue-500/30 to-violet-500/30",
    bg: "from-blue-50/90 to-violet-50/90 dark:from-blue-950/30 dark:to-violet-950/30",
    border: "border-blue-200/50 dark:border-blue-800/50",
    text: "text-blue-600 dark:text-blue-400",
    numberBg: "bg-blue-100 dark:bg-blue-950/50",
    dot: "bg-blue-500",
    line: "from-blue-500 to-violet-500"
  }
}

function LoopCard({ loop, isExpanded, onToggle }: { loop: LoopData; isExpanded: boolean; onToggle: () => void }) {
  const colors = colorClasses[loop.color]
  // Get first 3 steps for preview
  const previewSteps = loop.steps.slice(0, 3)

  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-br ${colors.gradient} rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-300`}></div>

      <div className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-3xl overflow-hidden`}>
        {/* Header - Always visible */}
        <button
          onClick={onToggle}
          className="w-full p-6 md:p-8 text-left hover:bg-white/5 dark:hover:bg-black/5 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`flex items-center justify-center h-12 w-12 rounded-2xl ${colors.numberBg} ${colors.text} font-bold text-xl`}>
                {loop.id}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{loop.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{loop.subtitle}</p>
              </div>
            </div>
            <div className={`${colors.text} transition-transform duration-300 flex-shrink-0 ml-4 ${isExpanded ? 'rotate-180' : ''}`}>
              <ChevronDown className="h-6 w-6" />
            </div>
          </div>

          {/* Preview - Only visible when collapsed */}
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-0 opacity-0 mt-0' : 'max-h-48 opacity-100 mt-6'}`}>
            <div className="flex flex-wrap gap-2 mb-3">
              {previewSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={index}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.numberBg} ${colors.text} text-xs font-medium`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span className="truncate max-w-[150px]">{step.title}</span>
                  </div>
                )
              })}
              <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/50 text-muted-foreground text-xs`}>
                +{loop.steps.length - 3} more steps
              </div>
            </div>
            <p className={`text-xs ${colors.text} flex items-center gap-1`}>
              <span className="animate-pulse">Click to explore</span>
              <span className="text-muted-foreground">- {loop.demoFeatures.length} features & {loop.benefits.length} benefits inside</span>
            </p>
          </div>
        </button>

        {/* Expandable content */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 md:px-8 pb-8 space-y-8">
            {/* Steps Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className={`absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b ${colors.line} opacity-30`}></div>

              <div className="space-y-4">
                {loop.steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={index} className="relative flex items-start gap-4 pl-2">
                      {/* Step number circle */}
                      <div className={`relative z-10 flex items-center justify-center h-10 w-10 rounded-xl ${colors.numberBg} ${colors.text} flex-shrink-0`}>
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-background/50 dark:bg-background/20 rounded-xl p-4 border border-border/50">
                        <h4 className="font-semibold text-foreground">{step.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Demo Features */}
              <div className="bg-background/50 dark:bg-background/20 rounded-2xl p-6 border border-border/50">
                <h4 className={`font-bold ${colors.text} mb-4 flex items-center gap-2`}>
                  <Cpu className="h-5 w-5" />
                  Features Powering This Loop
                </h4>
                <ul className="space-y-2">
                  {loop.demoFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className={`h-1.5 w-1.5 rounded-full ${colors.dot} mt-1.5 flex-shrink-0`}></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-background/50 dark:bg-background/20 rounded-2xl p-6 border border-border/50">
                <h4 className={`font-bold ${colors.text} mb-4 flex items-center gap-2`}>
                  <Sparkles className="h-5 w-5" />
                  What This Means for You
                </h4>
                <ul className="space-y-2">
                  {loop.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`h-4 w-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ThreeLoops() {
  const [expandedLoops, setExpandedLoops] = useState<number[]>([]) // All collapsed by default

  const toggleLoop = (loopId: number) => {
    setExpandedLoops(prev =>
      prev.includes(loopId)
        ? prev.filter(id => id !== loopId)
        : [...prev, loopId]
    )
  }

  const expandAll = () => setExpandedLoops([1, 2, 3])
  const collapseAll = () => setExpandedLoops([])

  return (
    <div className="space-y-12">
      {/* Header - Just the main title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
          How Culture Crunch Creates Compound Learning
        </h2>
      </div>

      {/* Interactive Visualization */}
      <div className="max-w-5xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 rounded-3xl blur opacity-75"></div>
          <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 backdrop-blur-sm border border-primary/20 rounded-3xl p-6 md:p-8 space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">The Compound Effect</h3>
              <p className="text-base text-muted-foreground">
                Hover over each loop to see key metrics
              </p>
            </div>
            <LoopsVisualization />
          </div>
        </div>
      </div>

      {/* Subheading - Now BELOW the visualization */}
      <div className="text-center">
        <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
          Three interconnected loops that make culture better every single week
        </p>
      </div>

      {/* Expand/Collapse controls - Now AFTER visualization */}
      <div className="flex justify-center gap-3">
        <Button variant="outline" size="sm" onClick={expandAll} className="text-sm">
          Expand All
        </Button>
        <Button variant="outline" size="sm" onClick={collapseAll} className="text-sm">
          Collapse All
        </Button>
      </div>

      {/* Loop Cards */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {loopsData.map(loop => (
          <LoopCard
            key={loop.id}
            loop={loop}
            isExpanded={expandedLoops.includes(loop.id)}
            onToggle={() => toggleLoop(loop.id)}
          />
        ))}
      </div>
    </div>
  )
}
