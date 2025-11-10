"use client"

import { motion } from "framer-motion"
import { Target, Brain, Rocket, TrendingUp, CheckCircle, Award } from "lucide-react"

export default function WeekByWeekTimeline() {
  const weeks = [
    {
      week: 1,
      icon: Target,
      title: "Foundations & Baselines",
      subtitle: "Set up your operating system",
      description: "Install the rhythm, baseline team health, and establish the cadence for accountable conversations. Leaders learn the Monday Brief structure and teams complete their first pulse check.",
      color: "purple"
    },
    {
      week: 2,
      icon: Brain,
      title: "Mindset Installation",
      subtitle: "Build psychological safety",
      description: "Focus on creating the conditions for honest dialogue. Teams practice giving and receiving feedback using structured formats. The AI begins tracking conversation patterns and team sentiment.",
      color: "indigo"
    },
    {
      week: 3,
      icon: Rocket,
      title: "Skillset Installation + First Sprint",
      subtitle: "Turn talk into action",
      description: "Introduce the O.O.R.A. framework (Observation, Opinion, Request, Agreement) for clear decision-making. Teams choose their first micro-action and track follow-through accountability.",
      color: "blue"
    },
    {
      week: 4,
      icon: TrendingUp,
      title: "Momentum & Insight",
      subtitle: "See patterns emerge",
      description: "Review 4-week trends in team health metrics. Leaders receive AI-generated insights on conversation quality, follow-through rates, and energy levels. Adjust rhythms based on data.",
      color: "violet"
    },
    {
      week: 5,
      icon: CheckCircle,
      title: "Embed & Refine",
      subtitle: "Make it stick",
      description: "Solidify habits with recognition routines and celebration of wins. Teams identify what's working and what needs adjustment. The system becomes self-sustaining with minimal leader input.",
      color: "purple"
    },
    {
      week: 6,
      icon: Award,
      title: "Impact & Transition",
      subtitle: "Measure and scale",
      description: "Review full 6-week transformation: compare baseline to current metrics. Create sustainability plan and identify opportunities to scale the operating system across other teams.",
      color: "indigo"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: "from-purple-50/90 to-indigo-50/90 dark:from-purple-950/30 dark:to-indigo-950/30",
        border: "border-purple-200/50 dark:border-purple-800/50",
        icon: "bg-purple-100 dark:bg-purple-950/30",
        iconColor: "text-purple-600 dark:text-purple-400",
        number: "from-purple-600 to-indigo-600"
      },
      indigo: {
        bg: "from-indigo-50/90 to-blue-50/90 dark:from-indigo-950/30 dark:to-blue-950/30",
        border: "border-indigo-200/50 dark:border-indigo-800/50",
        icon: "bg-indigo-100 dark:bg-indigo-950/30",
        iconColor: "text-indigo-600 dark:text-indigo-400",
        number: "from-indigo-600 to-blue-600"
      },
      blue: {
        bg: "from-blue-50/90 to-violet-50/90 dark:from-blue-950/30 dark:to-violet-950/30",
        border: "border-blue-200/50 dark:border-blue-800/50",
        icon: "bg-blue-100 dark:bg-blue-950/30",
        iconColor: "text-blue-600 dark:text-blue-400",
        number: "from-blue-600 to-violet-600"
      },
      violet: {
        bg: "from-violet-50/90 to-purple-50/90 dark:from-violet-950/30 dark:to-purple-950/30",
        border: "border-violet-200/50 dark:border-violet-800/50",
        icon: "bg-violet-100 dark:bg-violet-950/30",
        iconColor: "text-violet-600 dark:text-violet-400",
        number: "from-violet-600 to-purple-600"
      }
    }
    return colors[color as keyof typeof colors] || colors.purple
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
    >
      {weeks.map((week) => {
        const Icon = week.icon
        const colors = getColorClasses(week.color)

        return (
          <motion.div
            key={week.week}
            variants={item}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-sm border-2 ${colors.border} rounded-3xl p-6 space-y-4 h-full transition-transform duration-300 hover:scale-105`}>
              {/* Week Number & Icon */}
              <div className="flex items-center justify-between">
                <div className={`text-5xl font-bold bg-gradient-to-br ${colors.number} bg-clip-text text-transparent`}>
                  W{week.week}
                </div>
                <div className={`h-12 w-12 rounded-xl ${colors.icon} flex items-center justify-center`}>
                  <Icon className={`h-6 w-6 ${colors.iconColor}`} />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-foreground">{week.title}</h3>
                <p className="text-sm font-medium text-muted-foreground italic">{week.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {week.description}
              </p>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
