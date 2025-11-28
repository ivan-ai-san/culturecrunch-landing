"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingDown, Users, Zap, Target, Clock, BarChart3, Brain, Heart, Lightbulb, MessageSquare, RefreshCw, LineChart, Sparkles, Activity, Rocket, Award, CheckCircle, ChevronDown, ChevronUp, Mail, Smartphone, Send, ClipboardCheck, Calendar, Globe, LayoutDashboard, Database, TrendingUp, Scale, Building } from "lucide-react"
import ContactForm from "@/components/contact-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TypingPromptInput from "@/components/typing-prompt-input"
import FramerSpotlight from "@/components/framer-spotlight"
import CssGridBackground from "@/components/css-grid-background"
import StructuredData from "@/components/structured-data"
import CircularLoop from "@/components/circular-loop"
import WeekByWeekTimeline from "@/components/week-by-week-timeline"
import ThreeLoops from "@/components/three-loops"
import NetworkValueChart from "@/components/network-value-chart"
import StickyMobileCTA from "@/components/sticky-mobile-cta"
import AnimatedCounter from "@/components/animated-counter"
import LeadMagnet from "@/components/lead-magnet"
import { useState } from "react"
import Link from "next/link"

export default function Home() {
  const [showWeekly, setShowWeekly] = useState(false)
  const [showFullComparison, setShowFullComparison] = useState(false)

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
              <div className="inline-block rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 px-5 py-2 text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">The Culture Operating System</span>
              </div>

              {/* Hero Headline - Redesigned for visual impact */}
              <div className="space-y-4 mb-10">
                {/* Line 1 - The contrast statement */}
                <div className="flex flex-col items-center justify-center">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground tracking-tight">
                    Most HR platforms measure culture
                  </span>
                </div>

                {/* Line 2 - The differentiator */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-foreground">We install the system that </span>
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                      transforms it every week
                    </span>
                    {/* Animated underline */}
                    <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-purple-500 to-indigo-500 rounded-full opacity-80"></span>
                  </span>
                </h1>
              </div>

              {/* Subheadline - with visual separation */}
              <div className="relative max-w-3xl mb-12">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-purple-500/50 to-transparent rounded-full hidden md:block"></div>
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed md:pl-6">
                  The <span className="font-semibold text-foreground">Culture OS</span> that improves itself -
                  <br className="hidden md:block" />
                  and your <span className="text-purple-500 dark:text-purple-400 font-medium">leaders</span>, <span className="text-primary font-medium">every week</span>
                </p>
              </div>

              <TypingPromptInput />

              <div className="flex flex-wrap justify-center gap-4 mt-16">
                <Button asChild className="flex items-center gap-3 px-6 py-7 h-auto text-base bg-[#1a1d21] hover:bg-[#2a2d31] text-white rounded-xl border-0 dark:bg-primary dark:hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(36,101,237,0.5)] relative overflow-hidden group">
                  <Link href="#contact">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 dark:opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                    <Zap className="h-5 w-5 text-white relative z-10" />
                    <div className="flex flex-col items-start relative z-10">
                      <span className="text-base font-semibold">See Culture Crunch in Action</span>
                      <span className="text-xs text-gray-400 dark:text-gray-300 -mt-0.5">Book your personalised demo</span>
                    </div>
                  </Link>
                </Button>
                <Button asChild className="px-6 py-7 h-auto rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-base font-semibold text-foreground">
                  <Link href="/roi-calculator">
                    Calculate Your Culture ROI
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-24 md:py-32 relative overflow-hidden" id="problem" aria-labelledby="problem-heading">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-950/50"></div>
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            {/* Header */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium border border-red-500/20 text-red-600 dark:text-red-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                The Problem
              </div>
              <h2 id="problem-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
                The $60 Billion Leadership Development Failure
              </h2>
            </div>

            {/* Hero Stat Card */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative group">
                {/* Animated gradient border */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-3xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-500"></div>
                <div className="absolute -inset-[2px] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-3xl opacity-10 animate-pulse"></div>

                <div className="relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 rounded-3xl p-8 md:p-14 border border-red-500/10">
                  {/* Icon badge */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-xl animate-pulse"></div>
                      <div className="relative flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-red-500/25">
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-red-500 dark:text-red-400 mb-4">
                    The Knowledge-Behaviour Chasm
                  </p>

                  {/* Big Number */}
                  <div className="text-center mb-6">
                    <span className="text-7xl md:text-9xl font-black bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                      <AnimatedCounter end={81} duration={2000} suffix="%" />
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-center text-xl md:text-2xl text-foreground/80 mb-3 max-w-2xl mx-auto leading-relaxed">
                    of leadership training <span className="font-bold text-red-500 dark:text-red-400">never transfers</span> to workplace behaviour
                  </p>
                  <p className="text-center text-base text-muted-foreground mb-6">
                    Leaders know what to do. They just don't do it.
                  </p>

                  {/* Source */}
                  <div className="flex justify-center">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/60 bg-muted/50 px-3 py-1.5 rounded-full">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Blume et al. (2010) meta-analysis
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Stats */}
            <div className="grid gap-4 md:gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-16">
              {/* Stat 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-orange-500/30 transition-colors duration-300">
                  <div className="flex justify-center mb-3">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                      <Target className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    <AnimatedCounter end={70} duration={1800} suffix="%" />
                  </div>
                  <p className="text-sm text-muted-foreground">treat symptoms, not systems</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-yellow-500/30 transition-colors duration-300">
                  <div className="flex justify-center mb-3">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors">
                      <Clock className="h-6 w-6 text-yellow-500" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">24 hrs</div>
                  <p className="text-sm text-muted-foreground">to forget 70% without practice</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-colors duration-300">
                  <div className="flex justify-center mb-3">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                      <BarChart3 className="h-6 w-6 text-blue-500" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    <AnimatedCounter end={70} duration={1800} suffix="%" />
                  </div>
                  <p className="text-sm text-muted-foreground">fail without frontline ownership</p>
                </div>
              </div>
            </div>

            {/* Bottom Insight */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center pt-4">
                  The real problem? Leaders are <span className="font-semibold text-foreground">"saturated with frameworks"</span> but lack repeatable practices embedded in their weekly work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <LeadMagnet />
          </div>
        </section>

        {/* The Opportunity Section */}
        <section className="py-24 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950" id="opportunity" aria-labelledby="opportunity-heading">
          <div className="container px-4 md:px-6">
            {/* Header */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium border border-primary/20">
                The Opportunity
              </div>
              <h2 id="opportunity-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl text-foreground">
                The Breakthrough: Whoever Learns Fastest Wins
              </h2>
              <p className="mx-auto max-w-[900px] text-foreground text-lg md:text-xl leading-relaxed font-semibold">
                What if your culture system learned from what actually works in your environment?
              </p>
              <div className="pt-8 space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Built on 100+ Peer-Reviewed Studies
                </h3>
                <p className="text-muted-foreground text-lg">
                  Every feature connects to research. Every claim has evidence.
                </p>
              </div>
            </div>

            {/* 3 Stats Row */}
            <div className="grid gap-4 md:gap-6 md:grid-cols-3 max-w-6xl mx-auto mb-12 md:mb-16">
              {/* Stat 1: 66 Days */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-2xl md:rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-purple-50/90 to-indigo-50/90 dark:from-purple-950/30 dark:to-indigo-950/30 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50 rounded-2xl md:rounded-3xl p-5 md:p-8 space-y-2 md:space-y-4 h-full">
                  <div className="text-4xl md:text-7xl font-bold bg-gradient-to-br from-purple-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">66 Days</div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">Habit Formation Timeline</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Why our programs are 6+ weeks minimum
                  </p>
                  <div className="pt-1 md:pt-2">
                    <p className="text-xs font-medium text-purple-600 dark:text-purple-400">
                      Lally et al. (2010) - European Journal of Social Psychology
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 2: 6.8:1 ROI */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-2xl md:rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-indigo-50/90 to-blue-50/90 dark:from-indigo-950/30 dark:to-blue-950/30 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-800/50 rounded-2xl md:rounded-3xl p-5 md:p-8 space-y-2 md:space-y-4 h-full">
                  <div className="text-4xl md:text-7xl font-bold bg-gradient-to-br from-indigo-600 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">6.8:1</div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">Average Return on Investment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Range: $3-$11 per dollar invested
                  </p>
                  <div className="pt-1 md:pt-2">
                    <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                      BetterManager (2023) study of 752 managers
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 3: 25-40% */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/30 to-violet-500/30 rounded-2xl md:rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-50/90 to-violet-50/90 dark:from-blue-950/30 dark:to-violet-950/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-2xl md:rounded-3xl p-5 md:p-8 space-y-2 md:space-y-4 h-full">
                  <div className="text-4xl md:text-7xl font-bold bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent whitespace-nowrap">25-40%</div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">Turnover Reduction</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    When leadership development is systematic
                  </p>
                  <div className="pt-1 md:pt-2">
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      Deloitte (2023) Global Human Capital Trends
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Section */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
                The Shift That Changes Everything
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Measurement Platforms */}
                <div className="bg-transparent border rounded-2xl p-8 space-y-6 hover:border-red-500/40 transition-colors">
                  <div className="h-12 w-12 rounded-xl bg-red-100 dark:bg-red-950/30 flex items-center justify-center">
                    <span className="text-red-600 dark:text-red-400 text-xl font-bold">✕</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">Measurement Platforms</h4>
                    <p className="text-sm text-muted-foreground italic">What most organisations rely on today.</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-600 dark:bg-red-400 mt-1.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Tell you what's broken</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-600 dark:bg-red-400 mt-1.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Annual/quarterly surveys</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-600 dark:bg-red-400 mt-1.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Static insights</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-600 dark:bg-red-400 mt-1.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground">HR-focused</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-600 dark:bg-red-400 mt-1.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Measure sentiment</span>
                    </li>
                  </ul>
                </div>

                {/* Right Column - Culture Crunch */}
                <div className="bg-transparent border rounded-2xl p-8 space-y-6 hover:border-green-500/40 transition-colors">
                  <div className="h-12 w-12 rounded-xl bg-green-100 dark:bg-green-950/30 flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 text-xl font-bold">✓</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">Culture Crunch</h4>
                    <p className="text-sm text-muted-foreground italic">A system that learns and adapts.</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-400 mt-1.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Installs what fixes it</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-400 mt-1.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Weekly operating rhythm</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-400 mt-1.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Learning loops</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-400 mt-1.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Leader-focused</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-400 mt-1.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Change behaviour</span>
                    </li>
                  </ul>
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
                A 6-Week Program That Installs The Culture Operating System
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

            {/* White Paper CTA */}
            <div className="max-w-4xl mx-auto mt-16">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border border-purple-200/50 dark:border-purple-800/30 rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
                        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold text-foreground mb-2">Deep Dive: The Science Behind Culture Crunch</h3>
                      <p className="text-muted-foreground">Read our comprehensive white paper exploring the 100+ peer-reviewed studies that inform our methodology and learn why traditional approaches fail.</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button asChild variant="outline" className="h-12 px-6 rounded-xl border-purple-300 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900/30">
                        <Link href="/white-paper">
                          Read White Paper
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="py-24 relative overflow-hidden" id="who-its-for">
          {/* Background Effects */}
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-teal-500/5 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            {/* Header */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 max-w-4xl mx-auto">
              <div className="inline-block rounded-full bg-emerald-500/10 px-5 py-2 text-sm font-medium border border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                Is This You?
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                Who Culture Crunch Is Built For
              </h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                Culture Crunch is built for <span className="font-semibold text-foreground">mid and enterprise size organisations (200 - 10,000+)</span> where leaders are too busy to lead and culture is left to chance.
              </p>
            </div>

            {/* Ideal Customer Profiles */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {/* Profile 1 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-emerald-50/90 to-teal-50/90 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200/50 dark:border-emerald-800/50 rounded-2xl p-6 h-full">
                  <div className="h-12 w-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Growing Organisations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Scaling from startup culture to structured leadership without losing what made you special.
                  </p>
                </div>
              </div>

              {/* Profile 2 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-teal-50/90 to-cyan-50/90 dark:from-teal-950/30 dark:to-cyan-950/30 border border-teal-200/50 dark:border-teal-800/50 rounded-2xl p-6 h-full">
                  <div className="h-12 w-12 rounded-xl bg-teal-100 dark:bg-teal-950/50 flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Multi-Site Operations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Aged care, healthcare, retail, or hospitality with distributed teams needing consistent leadership.
                  </p>
                </div>
              </div>

              {/* Profile 3 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-cyan-50/90 to-blue-50/90 dark:from-cyan-950/30 dark:to-blue-950/30 border border-cyan-200/50 dark:border-cyan-800/50 rounded-2xl p-6 h-full">
                  <div className="h-12 w-12 rounded-xl bg-cyan-100 dark:bg-cyan-950/50 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Transformation-Ready</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Leaders who know surveys aren't enough and want systems that actually change behaviour.
                  </p>
                </div>
              </div>
            </div>

            {/* Signs You Need This */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-2xl blur-lg"></div>
                <div className="relative bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-foreground mb-6 text-center">You'll Know Culture Crunch Is Right If...</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Your leaders are promoted for technical skills, not people skills",
                      "Engagement surveys reveal problems but nothing changes",
                      "HR runs training events that feel disconnected from daily work",
                      "You've tried coaching but can't scale it across all leaders",
                      "Team issues simmer until they become HR crises",
                      "Good people leave because of bad managers"
                    ].map((sign, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <span className="text-sm text-muted-foreground">{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Loops Section - Core Innovation */}
        <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background dark:from-background dark:via-muted/5 dark:to-background" id="three-loops" aria-labelledby="three-loops-heading">
          <div className="container px-4 md:px-6">
            <ThreeLoops />
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
                    Six weeks to go from zero to a fully embedded Culture Operating System.
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

            {/* Start Simple. Scale Smart. Section */}
            <div className="mt-24 max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                  Start Simple. Scale Smart.
                </h3>
                <p className="text-muted-foreground text-lg md:text-xl">
                  No gatekeeping. No IT queue. No 6-month rollout.
                </p>
              </div>

              {/* Three Phases */}
              <div className="grid gap-8 md:grid-cols-3 mb-10">
                {/* Phase 1: Launch */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gradient-to-br from-purple-50/90 to-indigo-50/90 dark:from-purple-950/30 dark:to-indigo-950/30 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50 rounded-3xl p-8 h-full">
                    <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Phase 1: Launch</h4>
                    <p className="text-base font-semibold text-foreground mb-6">Week 1</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center flex-shrink-0">
                          <Smartphone className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <span className="text-muted-foreground">Email + Web/Mobile only</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center flex-shrink-0">
                          <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <span className="text-muted-foreground">3-10 teams pilot</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center flex-shrink-0">
                          <Zap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <span className="text-muted-foreground">Zero IT dependencies</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center flex-shrink-0">
                          <Send className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <span className="text-muted-foreground">Weekly briefs auto-sent</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center flex-shrink-0">
                          <ClipboardCheck className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <span className="text-muted-foreground">Leaders log check-ins</span>
                      </li>
                    </ul>
                    <p className="text-base font-semibold text-purple-600 dark:text-purple-400">Goal: Prove the rhythm works</p>
                  </div>
                </div>

                {/* Phase 2: Embed */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gradient-to-br from-indigo-50/90 to-blue-50/90 dark:from-indigo-950/30 dark:to-blue-950/30 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-800/50 rounded-3xl p-8 h-full">
                    <h4 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Phase 2: Embed</h4>
                    <p className="text-base font-semibold text-foreground mb-6">Weeks 7-12</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <span className="text-muted-foreground">Calendar integration</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <span className="text-muted-foreground">Teams/Slack prompts</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <span className="text-muted-foreground">Auto-schedule check-ins</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center flex-shrink-0">
                          <Globe className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <span className="text-muted-foreground">Roll out to more regions</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center flex-shrink-0">
                          <LayoutDashboard className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <span className="text-muted-foreground">Dashboard for executives</span>
                      </li>
                    </ul>
                    <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">Goal: Make it effortless</p>
                  </div>
                </div>

                {/* Phase 3: Scale */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/30 to-violet-500/30 rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gradient-to-br from-blue-50/90 to-violet-50/90 dark:from-blue-950/30 dark:to-violet-950/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-3xl p-8 h-full">
                    <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Phase 3: Scale</h4>
                    <p className="text-base font-semibold text-foreground mb-6">Months 4-6</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center flex-shrink-0">
                          <Database className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-muted-foreground">HRIS integration</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center flex-shrink-0">
                          <ClipboardCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-muted-foreground">Claims system data</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-muted-foreground">ROI correlation</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center flex-shrink-0">
                          <LayoutDashboard className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-muted-foreground">Enterprise dashboards</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center flex-shrink-0">
                          <BarChart3 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-muted-foreground">Cross-org benchmarking</span>
                      </li>
                    </ul>
                    <p className="text-base font-semibold text-blue-600 dark:text-blue-400">Goal: Prove hard ROI</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Differentiation Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden" id="differentiation">
          {/* Background Effects */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            {/* Header */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-4xl mx-auto">
              <div className="inline-block rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-500/20 dark:to-purple-500/20 px-5 py-2 text-sm font-medium border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300">
                Why We're Different
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                Not Another Measurement Platform
              </h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                We're not competing with survey tools. We're in a different category entirely.
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {/* Measurement Platforms */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/50 p-8 h-full backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-100 to-red-50 dark:from-red-950/50 dark:to-red-900/30 flex items-center justify-center shadow-inner">
                      <TrendingDown className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Measurement Platforms</h3>
                      <p className="text-xs text-muted-foreground">CultureAmp, Peakon, etc.</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { icon: BarChart3, text: "Measure how people feel" },
                      { icon: Calendar, text: "Annual/quarterly surveys" },
                      { icon: LayoutDashboard, text: "Static dashboards and benchmarks" },
                      { icon: Clock, text: "3-6 months to value" },
                      { icon: ClipboardCheck, text: "Recommended actions (hope they follow through)" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <div className="h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-700 transition-colors">
                          <item.icon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                        </div>
                        <span className="text-muted-foreground text-sm pt-1.5">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Culture Crunch */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/90 dark:to-purple-950/90 border border-indigo-200 dark:border-indigo-500/30 p-8 h-full backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">Culture Crunch</h3>
                      <p className="text-xs text-indigo-600/70 dark:text-indigo-400/70">The Culture Operating System</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { icon: RefreshCw, text: "Install weekly leadership rhythm" },
                      { icon: Clock, text: "30-minute weekly loops forever" },
                      { icon: TrendingUp, text: "Three compounding learning loops" },
                      { icon: Rocket, text: "Week 1 value (leaders running immediately)" },
                      { icon: Target, text: "Tracked micro-actions with accountability" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 flex items-center justify-center flex-shrink-0 shadow-sm group-hover/item:shadow-md transition-shadow">
                          <item.icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-200 text-sm pt-1.5 font-medium">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* The Line We Own */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur-lg"></div>
                <div className="relative rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/50 p-8 md:p-10 text-center backdrop-blur-sm">
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    "Measurement platforms tell organisations <span className="font-semibold text-foreground">what the culture feels like</span>.<br className="hidden md:block" />
                    Culture Crunch installs <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">the leadership operating system that changes it</span>."
                  </p>
                </div>
              </div>
            </div>

            {/* Expandable Full Comparison */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showFullComparison ? 'max-h-[2000px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
              <div className="max-w-5xl mx-auto">
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/80 shadow-xl">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900">
                        <th className="p-4 md:p-5 text-left font-semibold text-foreground border-b border-r border-slate-200 dark:border-slate-700 w-[140px] md:w-[160px]">Feature</th>
                        <th className="p-4 md:p-5 text-left border-b border-r border-slate-200 dark:border-slate-700">
                          <div className="font-semibold text-slate-600 dark:text-slate-300">Measurement Platforms</div>
                        </th>
                        <th className="p-4 md:p-5 text-left border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50">
                          <div className="font-semibold text-indigo-700 dark:text-indigo-300">Culture Crunch</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: "Job to be done", measurement: "Measure how people feel", cc: "Install weekly leadership rhythm that changes how teams operate" },
                        { feature: "Primary users", measurement: "HR / People & Culture teams", cc: "Leaders and teams (HR as strategic partner)" },
                        { feature: "Rhythm", measurement: "Annual/quarterly surveys → action planning", cc: "6-week OS installation → 30-min weekly loops forever" },
                        { feature: "Output", measurement: "Dashboards, benchmarks, sentiment trends", cc: "Micro-actions, decisions, accountability, live evidence linking behaviour → outcomes" },
                        { feature: "Learning", measurement: "Static insights (same reports every year)", cc: "Three compounding learning loops" },
                        { feature: "Integration", measurement: "Required upfront (6-12 month sales cycles)", cc: "Optional - start in 1 week, integrate later" },
                        { feature: "Time to value", measurement: "3-6 months (survey → analysis → action)", cc: "Week 1 (leaders running rhythm immediately)" },
                        { feature: "Behaviour change", measurement: "Recommended actions (hope they follow through)", cc: "Tracked micro-actions with accountability loops" }
                      ].map((row, i) => (
                        <tr key={i} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                          <td className="p-4 md:p-5 border-b border-r border-slate-200 dark:border-slate-700 font-medium text-foreground text-sm">{row.feature}</td>
                          <td className="p-4 md:p-5 border-b border-r border-slate-200 dark:border-slate-700 text-muted-foreground text-sm">{row.measurement}</td>
                          <td className="p-4 md:p-5 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm bg-indigo-50/50 dark:bg-indigo-950/20 font-medium">{row.cc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                variant="outline"
                className="px-6 py-6 h-auto rounded-xl text-base group"
                onClick={() => setShowFullComparison(!showFullComparison)}
              >
                {showFullComparison ? 'Hide' : 'See'} Full Comparison
                <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 ${showFullComparison ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="py-24 relative overflow-hidden" id="why-now" aria-labelledby="why-now-heading">
          {/* Decorative gradient backgrounds for depth */}
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-purple-500/8 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
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

            {/* Network Value Growth Chart */}
            <NetworkValueChart />

            {/* Urgency/Scarcity Banner */}
            <div className="mt-10 md:mt-16 max-w-4xl mx-auto">
              <div className="relative group">
                {/* Animated border glow */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl md:rounded-3xl opacity-30 group-hover:opacity-50 blur-sm transition-all duration-500 animate-pulse"></div>

                <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border border-amber-500/30 rounded-2xl md:rounded-3xl p-5 md:p-10 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>

                  <div className="relative z-10 text-center space-y-4 md:space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-amber-500/30">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                      </span>
                      <span className="text-xs md:text-sm font-semibold text-amber-700 dark:text-amber-300">Limited Availability</span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl md:text-3xl font-bold text-foreground">
                      Only 5 Pilot Partner Spots Remaining
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                      We're selecting a small group of founding partners to shape Culture Crunch with us. Pilot partners receive <span className="font-semibold text-foreground">priority pricing locked for life</span> plus direct input into our product roadmap.
                    </p>

                    {/* CTA */}
                    <div className="pt-1 md:pt-2">
                      <Button asChild className="w-full sm:w-auto px-6 md:px-8 py-4 md:py-6 h-auto text-base whitespace-normal text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 active:from-amber-700 active:to-orange-700 text-white rounded-xl shadow-lg shadow-amber-500/25 touch-manipulation">
                        <Link href="#contact">
                          <Zap className="h-5 w-5 mr-2 flex-shrink-0" />
                          <span>Claim Your Pilot Partner Spot</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-muted/50 dark:bg-muted/10 relative overflow-hidden" aria-labelledby="contact-heading">
          {/* Decorative gradient backgrounds for depth */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start max-w-6xl mx-auto">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium border border-primary/20">
                    Get Started
                  </div>
                  <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Install Your Culture Operating System
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
        <StickyMobileCTA />
      </div>
    </>
  )
}
