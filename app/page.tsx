"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingDown, Users, Zap, Target, Clock, BarChart3, Brain, Heart, Lightbulb, MessageSquare, RefreshCw, LineChart, Sparkles, Activity, Rocket, Award, CheckCircle, ChevronDown, ChevronUp } from "lucide-react"
import ContactForm from "@/components/contact-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TypingPromptInput from "@/components/typing-prompt-input"
import FramerSpotlight from "@/components/framer-spotlight"
import CssGridBackground from "@/components/css-grid-background"
import StructuredData from "@/components/structured-data"
import CircularLoop from "@/components/circular-loop"
import WeekByWeekTimeline from "@/components/week-by-week-timeline"
import AccountableConversations from "@/components/accountable-conversations"
import { useState } from "react"
import Link from "next/link"

export default function Home() {
  const [showWeekly, setShowWeekly] = useState(false)

  return (
    <>
      <StructuredData />
      <div className="flex min-h-screen flex-col">
        <Navbar />

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <CssGridBackground />
          <FramerSpotlight />
          <div className="container px-4 md:px-6 py-16 md:py-20">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="inline-block rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 px-4 py-2 text-sm font-medium mb-6 border border-primary/20">
                Human + AI = Better Leadership
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text">
                Effective Leadership Needs an Operating System
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl/relaxed max-w-3xl mb-8">
                In a world of increasing complexity, volatility, and change, leadership can no longer rely on charisma, intuition, or ad‑hoc communication.
              </p>
              <p className="text-base text-muted-foreground md:text-lg lg:text-xl/relaxed max-w-3xl mb-12 font-medium">
                Leaders run the operating system - they set the rhythm for clarity, trust, and performance, translating culture from words into action every day.
              </p>

              <TypingPromptInput />

              <div className="flex flex-wrap justify-center gap-4 mt-16">
                <Button asChild className="flex items-center gap-3 px-6 py-7 h-auto text-base bg-[#1a1d21] hover:bg-[#2a2d31] text-white rounded-xl border-0 dark:bg-primary dark:hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(36,101,237,0.5)] relative overflow-hidden group">
                  <Link href="#contact">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 dark:opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                    <Zap className="h-5 w-5 text-white relative z-10" />
                    <div className="flex flex-col items-start relative z-10">
                      <span className="text-base font-semibold">Install Your OS</span>
                      <span className="text-xs text-gray-400 dark:text-gray-300 -mt-0.5">Get started today</span>
                    </div>
                  </Link>
                </Button>
                <Button asChild className="px-6 py-7 h-auto rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-base font-semibold text-foreground">
                  <Link href="#problem">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-24 bg-muted/30 dark:bg-muted/5" id="problem" aria-labelledby="problem-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-block rounded-lg bg-destructive/10 px-4 py-2 text-sm font-medium border border-destructive/20">
                The Problem
              </div>
              <h2 id="problem-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl">
                Despite Billions Spent, Most Culture Transformation Programs Fail
              </h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                The result is a costly cycle of disengagement and underperformance that drains organisational energy and resources.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {/* Stat 1 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-destructive/20 to-destructive/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-background border border-destructive/20 rounded-2xl p-8 space-y-4 h-full hover:border-destructive/40 transition-colors">
                  <TrendingDown className="h-10 w-10 text-destructive" />
                  <div className="text-5xl font-bold text-destructive">$60B</div>
                  <div className="text-sm font-semibold text-foreground">Wasted Annually</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Global spend on leadership development with limited sustained impact (Beer et al., 2016).
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-orange-500/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-background border border-orange-500/20 rounded-2xl p-8 space-y-4 h-full hover:border-orange-500/40 transition-colors">
                  <Target className="h-10 w-10 text-orange-500" />
                  <div className="text-5xl font-bold text-orange-500">30%</div>
                  <div className="text-sm font-semibold text-foreground">Transformation Success Rate</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Most programs fade within months without embedded systems (McKinsey, 2021).
                  </p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-background border border-yellow-500/20 rounded-2xl p-8 space-y-4 h-full hover:border-yellow-500/40 transition-colors">
                  <BarChart3 className="h-10 w-10 text-yellow-500" />
                  <div className="text-5xl font-bold text-yellow-500">19%</div>
                  <div className="text-sm font-semibold text-foreground">Knowledge Transfer Rate</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The rest disappears without embedded habits (Blume et al., 2010).
                  </p>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-red-500/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-background border border-red-500/20 rounded-2xl p-8 space-y-4 h-full hover:border-red-500/40 transition-colors">
                  <Clock className="h-10 w-10 text-red-500" />
                  <div className="text-5xl font-bold text-red-500">50-70%</div>
                  <div className="text-sm font-semibold text-foreground">Behaviour Change Reversal</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Without reinforcement, learning decays rapidly within a week (Ebbinghaus, 1913).
                  </p>
                </div>
              </div>

              {/* Stat 5 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-background border border-emerald-500/20 rounded-2xl p-8 space-y-4 h-full hover:border-emerald-500/40 transition-colors">
                  <Users className="h-10 w-10 text-emerald-500" />
                  <div className="text-5xl font-bold text-emerald-500">25-40%</div>
                  <div className="text-sm font-semibold text-foreground">Turnover Reduction Potential</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Structured, ongoing leadership systems outperform one-off interventions (Deloitte, 2023).
                  </p>
                </div>
              </div>

              {/* Stat 6 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-background border border-blue-500/20 rounded-2xl p-8 space-y-4 h-full hover:border-blue-500/40 transition-colors">
                  <TrendingDown className="h-10 w-10 text-blue-500 rotate-180" />
                  <div className="text-5xl font-bold text-blue-500">7-23%</div>
                  <div className="text-sm font-semibold text-foreground">Performance Uplift Available</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Clear link between leadership rhythm, engagement, and measurable results (Gallup, 2020).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Opportunity Section */}
        <section className="py-24" id="opportunity" aria-labelledby="opportunity-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium border border-primary/20">
                The Opportunity
              </div>
              <h2 id="opportunity-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
                From Programs to Operating Systems
              </h2>
              <p className="mx-auto max-w-[900px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                Every organisation wants a high‑performance culture. But the ones that achieve it don't <span className="font-semibold text-foreground">train</span> culture — they <span className="font-semibold text-foreground">install</span> it.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
                <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium">
                  When leadership rhythms are built into the way work happens, performance, learning, and engagement rise together. It's not about more workshops or surveys; it's about building an <span className="font-bold text-primary">embedded operating system</span> for leadership that runs every day, not once a year.
                </p>
              </div>

              {/* What's Changing */}
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-center">What's Changing</h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-background border rounded-2xl p-6 space-y-3 hover:border-primary/40 transition-colors">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">Culture is now a performance system</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The old HR view - culture as values on the wall - has shifted. Boards and investors now link leadership behaviour directly to business results.
                    </p>
                  </div>

                  <div className="bg-background border rounded-2xl p-6 space-y-3 hover:border-primary/40 transition-colors">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">Leaders want tools, not theory</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Frontline and senior leaders are tired of frameworks they can't apply. They want micro‑actions that work inside their existing flow of work.
                    </p>
                  </div>

                  <div className="bg-background border rounded-2xl p-6 space-y-3 hover:border-primary/40 transition-colors">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">AI makes culture measurable</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      With simple weekly signals, teams can now see what was once invisible - how clarity, trust, and energy shift week to week.
                    </p>
                  </div>

                  <div className="bg-background border rounded-2xl p-6 space-y-3 hover:border-primary/40 transition-colors">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">Psychological safety meets performance</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The strongest teams combine empathy and accountability. They can tell the truth, learn fast, and execute with precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-background dark:from-muted/5 dark:via-background dark:to-background" id="solution" aria-labelledby="solution-heading">
          <div className="container px-4 md:px-6">
            {/* Header */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-4xl mx-auto">
              <h2 id="solution-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                A 6-Week Program That Installs The Leadership & Culture Operating System
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl">
                Transform teams with accountable conversations, clear decisions, and repeatable leadership habits that lift performance and embed culture.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mb-20">
              {/* 25% Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-purple-50/90 to-indigo-50/90 dark:from-purple-950/30 dark:to-indigo-950/30 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50 rounded-3xl p-8 space-y-4 h-full">
                  <div className="text-7xl font-bold bg-gradient-to-br from-purple-600 to-indigo-600 bg-clip-text text-transparent">25%</div>
                  <h3 className="text-xl font-bold text-foreground">Turnover Reduction</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Achieve up to 25% lower staff turnover by building leadership routines that identify pressure early, sustain recognition, and keep high performers engaged on site.
                  </p>
                  <div className="pt-2">
                    <p className="text-xs font-medium text-purple-600 dark:text-purple-400">
                      Impact: Retention = stability = delivery continuity.
                    </p>
                  </div>
                </div>
              </div>

              {/* 30% Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-indigo-50/90 to-blue-50/90 dark:from-indigo-950/30 dark:to-blue-950/30 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-800/50 rounded-3xl p-8 space-y-4 h-full">
                  <div className="text-7xl font-bold bg-gradient-to-br from-indigo-600 to-blue-600 bg-clip-text text-transparent">30%</div>
                  <h3 className="text-xl font-bold text-foreground">Engagement Lift</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Drive a 30% increase in engagement scores through consistent clarity, feedback, and recognition cycles that strengthen trust and performance ownership.
                  </p>
                  <div className="pt-2">
                    <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                      Impact: More energy, better collaboration, faster execution.
                    </p>
                  </div>
                </div>
              </div>

              {/* 40% Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/30 to-violet-500/30 rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-50/90 to-violet-50/90 dark:from-blue-950/30 dark:to-violet-950/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-3xl p-8 space-y-4 h-full">
                  <div className="text-7xl font-bold bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent">40%</div>
                  <h3 className="text-xl font-bold text-foreground">Claims Reduction</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Reduce total workplace claims - both physical and psychological - by up to 40% through clear decision pathways, accountability loops, and proactive communication.
                  </p>
                  <div className="pt-2">
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      Impact: Fewer incidents, fewer disputes, lower insurance cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-20">
              {/* Accountable Conversations */}
              <div className="bg-background border rounded-2xl p-8 space-y-6 hover:border-primary/40 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Accountable Conversations</h3>
                  <p className="text-sm text-muted-foreground italic">Where leadership talk turns into results.</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Clear decisions, finished actions, visible accountability</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Structured dialogue for clarity and speed</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Action tracking for follow-through</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Team routines for ownership and results</span>
                  </li>
                </ul>
              </div>

              {/* Improved Team Rhythm */}
              <div className="bg-background border rounded-2xl p-8 space-y-6 hover:border-primary/40 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/30 flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Improved Team Rhythm</h3>
                  <p className="text-sm text-muted-foreground italic">Micro-practices remove friction and build momentum.</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">60-second weekly pulse for real-time insight</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Monday brief to align and prioritise</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Recognition routines that sustain energy and accountability</span>
                  </li>
                </ul>
              </div>

              {/* Dashboard Visibility */}
              <div className="bg-background border rounded-2xl p-8 space-y-6 hover:border-primary/40 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center">
                  <LineChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Dashboard Visibility</h3>
                  <p className="text-sm text-muted-foreground italic">See what drives performance in real time.</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Live team health metrics at a glance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">6-week trend insights on trust, workload, and recognition</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Audit-ready trail for compliance and leadership reporting</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* From Low to High Accountability */}
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">From Low to High Accountability in 6 Weeks</h3>
                <p className="text-muted-foreground">What makes us different:</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200/30 dark:border-purple-800/30">
                  <div className="h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400 mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">Only 30 minutes per week from the leader / leadership team</p>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/20 dark:to-blue-950/20 border border-indigo-200/30 dark:border-indigo-800/30">
                  <div className="h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">Tier One Construction Firm regulatory compliance alignment</p>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-violet-50/50 dark:from-blue-950/20 dark:to-violet-950/20 border border-blue-200/30 dark:border-blue-800/30">
                  <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">Privacy by minimalism – team level data only</p>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-950/20 dark:to-purple-950/20 border border-violet-200/30 dark:border-violet-800/30">
                  <div className="h-2 w-2 rounded-full bg-violet-600 dark:bg-violet-400 mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">Proven 6-week transformation program</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-muted/30 dark:bg-muted/5 relative overflow-hidden" id="how-it-works" aria-labelledby="how-it-works-heading">
          {/* Decorative gradient backgrounds */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            {/* Header */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-4xl mx-auto">
              <h2 id="how-it-works-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                How It Works
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl">
                A simple weekly rhythm that transforms leadership from theory into embedded practice.
              </p>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">30 minutes per week</span>
              </div>
            </div>

            {/* The Loop at a Glance */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">The Loop at a Glance</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Five simple steps that run every week, building accountability and visibility into your team's natural flow of work.
                </p>
              </div>
              <CircularLoop />
            </div>

            {/* Toggle Button for Week-by-Week */}
            <div className="flex justify-center mb-12">
              <Button
                variant="outline"
                onClick={() => setShowWeekly(!showWeekly)}
                className="flex items-center gap-2 px-6 py-6 h-auto text-base rounded-xl"
              >
                {showWeekly ? (
                  <>
                    <ChevronUp className="h-5 w-5" />
                    Hide Week-by-Week Breakdown
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-5 w-5" />
                    Show Week-by-Week Breakdown
                  </>
                )}
              </Button>
            </div>

            {/* Week-by-Week Timeline (Collapsible) */}
            {showWeekly && (
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Week-by-Week Install</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Six weeks to go from zero to a fully embedded Leadership Operating System.
                  </p>
                </div>
                <WeekByWeekTimeline />
              </div>
            )}

            {/* Bottom CTA Card */}
            <div className="max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-purple-50/90 to-indigo-50/90 dark:from-purple-950/30 dark:to-indigo-950/30 backdrop-blur-sm border-2 border-purple-200/50 dark:border-purple-800/50 rounded-3xl p-8 md:p-12 text-center space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold">Simple. Sustainable. Measurable.</h3>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                    No complex software. No extensive training. Just a proven rhythm that fits into the way your teams already work - with AI quietly tracking what matters so you can lead with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background dark:from-background dark:via-muted/5 dark:to-background" id="methodology">
          <div className="container px-4 md:px-6">
            <AccountableConversations />
          </div>
        </section>

        {/* Why Now Section */}
        <section className="py-24" id="why-now" aria-labelledby="why-now-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium border border-primary/20">
                Why Now
              </div>
              <h2 id="why-now-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl">
                The Time to Act is Now
              </h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                The shift to distributed, hybrid, and project‑based work has exposed the limits of event‑based leadership development.
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 md:p-12 border border-primary/20">
                <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium text-center">
                  Organisations that move first to install embedded leadership operating systems will lead on three fronts:
                </p>
              </div>
            </div>

            {/* Three Fronts */}
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-background border border-primary/30 rounded-2xl p-8 space-y-6 h-full hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mx-auto">
                    <span className="text-3xl font-bold text-primary">1</span>
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold">Performance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Faster decisions, less rework, more value delivered consistently across the organisation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-background border border-primary/30 rounded-2xl p-8 space-y-6 h-full hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mx-auto">
                    <span className="text-3xl font-bold text-primary">2</span>
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold">Learning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Safer dialogue, faster feedback, better innovation through embedded learning rhythms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-background border border-primary/30 rounded-2xl p-8 space-y-6 h-full hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mx-auto">
                    <span className="text-3xl font-bold text-primary">3</span>
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold">Engagement</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Lower turnover, higher energy, stronger trust built through daily leadership rhythms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-muted/50 dark:bg-muted/10" aria-labelledby="contact-heading">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start max-w-6xl mx-auto">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium border border-primary/20">
                    Get Started
                  </div>
                  <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Install Your Leadership Operating System
                  </h2>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                    Culture Crunch turns leadership into an operating system - one that continuously powers clarity, trust, and performance in an increasingly complex world.
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Embedded Leadership Rhythms</div>
                      <div className="text-sm text-muted-foreground">Built into the way work happens, not added on top</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">AI-Powered Insights</div>
                      <div className="text-sm text-muted-foreground">See patterns in clarity, trust, and energy week to week</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Psychological Safety + Performance</div>
                      <div className="text-sm text-muted-foreground">Teams that can tell the truth and execute with precision</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Tools, Not Theory</div>
                      <div className="text-sm text-muted-foreground">Micro-actions that work inside your existing flow</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:ml-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
