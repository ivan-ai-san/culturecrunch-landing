"use client"

import { Sparkles, MessageSquare, Target, Activity, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function CircularLoop() {
  const loopSteps = [
    {
      icon: Sparkles,
      title: "Weekly Brief",
      description: "Monday 7 a.m. - Align priorities",
      color: "purple",
      angle: 270 // top (12 o'clock)
    },
    {
      icon: MessageSquare,
      title: "Team Check-In",
      description: "20-minute pulse - clarity & trust",
      color: "indigo",
      angle: 342 // top right (2 o'clock) - 270° + 72°
    },
    {
      icon: Target,
      title: "Choose Micro-Action",
      description: "One simple change this week",
      color: "blue",
      angle: 54 // bottom right (4 o'clock) - 342° + 72° = 414° - 360°
    },
    {
      icon: Activity,
      title: "System Tracks",
      description: "Background monitoring - no extra work",
      color: "violet",
      angle: 126 // bottom left (8 o'clock) - 54° + 72°
    },
    {
      icon: TrendingUp,
      title: "Evidence Visible",
      description: "Real-time dashboard shows impact",
      color: "purple",
      angle: 198 // top left (10 o'clock) - 126° + 72°
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

  // Calculate card position based on angle
  const getCardPosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180
    const x = Math.cos(radian) * radius
    const y = Math.sin(radian) * radius
    return { x, y }
  }

  return (
    <div className="w-full">
      {/* Desktop: Circular Layout */}
      <div className="hidden lg:block relative h-[750px] max-w-6xl mx-auto">
        {/* Dashed circle guide */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <circle
            cx="50%"
            cy="50%"
            r="280"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="8 8"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" />
              <stop offset="50%" stopColor="rgb(99, 102, 241)" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Circle with AI Brain */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-10">
          {/* Rotating gradient border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-30 animate-spin" style={{ animationDuration: "8s" }}></div>

          {/* Inner circle with overflow clipping */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40 backdrop-blur-sm border-2 border-purple-200/50 dark:border-purple-800/50 flex items-center justify-center p-4 shadow-lg overflow-hidden">
            {/* AI Brain Image - clipped to circle */}
            <Image
              src="/ai-brain.png"
              alt="AI Assistant"
              width={160}
              height={160}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Loop Steps positioned in circle */}
        {loopSteps.map((step, index) => {
          const Icon = step.icon
          const position = getCardPosition(step.angle, 280)

          return (
            <div
              key={index}
              className="absolute w-56"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`
              }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className={`relative ${getColorClasses(step.color)} rounded-2xl p-5 border-2 transition-all duration-300 hover:scale-105 shadow-md`}>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className={`h-12 w-12 rounded-xl ${getColorClasses(step.color)} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <Icon className={`h-6 w-6 ${getIconColorClasses(step.color)}`} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm">{step.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
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
