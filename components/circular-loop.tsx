"use client"

import { Sparkles, MessageSquare, Target, Activity, TrendingUp } from "lucide-react"

export default function CircularLoop() {
  const loopSteps = [
    {
      icon: Sparkles,
      title: "Weekly Brief",
      description: "Monday 7 a.m. - Align priorities",
      color: "purple",
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
    },
    {
      icon: MessageSquare,
      title: "Team Check-In",
      description: "20-minute pulse - clarity & trust",
      color: "indigo",
      position: "top-1/4 right-0 translate-x-1/2"
    },
    {
      icon: Target,
      title: "Choose Micro-Action",
      description: "One simple change this week",
      color: "blue",
      position: "bottom-1/4 right-0 translate-x-1/2"
    },
    {
      icon: Activity,
      title: "System Tracks",
      description: "Background monitoring - no extra work",
      color: "violet",
      position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
    },
    {
      icon: TrendingUp,
      title: "Evidence Visible",
      description: "Real-time dashboard shows impact",
      color: "purple",
      position: "top-1/4 left-0 -translate-x-1/2"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "bg-purple-100 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800",
      indigo: "bg-indigo-100 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800",
      blue: "bg-blue-100 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800",
      violet: "bg-violet-100 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800"
    }
    return colors[color as keyof typeof colors] || colors.purple
  }

  const getIconColorClasses = (color: string) => {
    const colors = {
      purple: "text-purple-600 dark:text-purple-400",
      indigo: "text-indigo-600 dark:text-indigo-400",
      blue: "text-blue-600 dark:text-blue-400",
      violet: "text-violet-600 dark:text-violet-400"
    }
    return colors[color as keyof typeof colors] || colors.purple
  }

  return (
    <div className="w-full">
      {/* Desktop: Circular Layout */}
      <div className="hidden lg:block relative h-[600px] max-w-4xl mx-auto">
        {/* Center Circle with rotating border */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
          {/* Rotating gradient border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-20 animate-spin" style={{ animationDuration: "8s" }}></div>

          {/* Inner circle */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/20 dark:to-indigo-950/20 backdrop-blur-sm border-2 border-purple-200/30 dark:border-purple-800/30 flex flex-col items-center justify-center p-8">
            <div className="text-center space-y-2">
              <div className="text-sm font-medium text-muted-foreground">The Weekly Loop</div>
              <div className="text-2xl font-bold bg-gradient-to-br from-purple-600 to-indigo-600 bg-clip-text text-transparent">Culture Crunch</div>
              <div className="text-xs text-muted-foreground">Accountable Leadership OS</div>
            </div>
          </div>
        </div>

        {/* Loop Steps positioned in circle */}
        {loopSteps.map((step, index) => {
          const Icon = step.icon
          return (
            <div
              key={index}
              className={`absolute ${step.position} w-56`}
            >
              <div className={`relative group`}>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className={`relative ${getColorClasses(step.color)} rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-start gap-3">
                    <div className={`h-10 w-10 rounded-xl ${getColorClasses(step.color)} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-5 w-5 ${getIconColorClasses(step.color)}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* Connecting lines (optional decorative element) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: -1 }}>
          <circle
            cx="50%"
            cy="50%"
            r="200"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" />
              <stop offset="50%" stopColor="rgb(99, 102, 241)" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mobile & Tablet: Vertical Stack */}
      <div className="lg:hidden space-y-4 max-w-md mx-auto">
        {loopSteps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className={`relative ${getColorClasses(step.color)} rounded-2xl p-6 border-2`}>
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-xl ${getColorClasses(step.color)} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`h-6 w-6 ${getIconColorClasses(step.color)}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
