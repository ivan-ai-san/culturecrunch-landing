"use client"

import { useEffect, useState, useRef } from "react"
import { TrendingUp, Users, Zap, Award } from "lucide-react"

interface Milestone {
  id: string
  label: string
  sublabel: string
  x: number
  y: number
  color: string
  delay: number
}

const milestones: Milestone[] = [
  {
    id: "baseline",
    label: "Baseline",
    sublabel: "Your organisation joins",
    x: 80,
    y: 280,
    color: "rgb(34, 211, 238)", // cyan-400
    delay: 0
  },
  {
    id: "2x",
    label: "2X Better",
    sublabel: "Pattern Recognition",
    x: 260,
    y: 200,
    color: "rgb(168, 85, 247)", // purple-500
    delay: 1
  },
  {
    id: "5x",
    label: "5X Faster",
    sublabel: "Problem-Solving",
    x: 480,
    y: 120,
    color: "rgb(139, 92, 246)", // violet-500
    delay: 2
  },
  {
    id: "category",
    label: "Category-Defining",
    sublabel: "Intelligence",
    x: 700,
    y: 60,
    color: "rgb(99, 102, 241)", // indigo-500
    delay: 3
  }
]

export default function NetworkValueChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleMilestones, setVisibleMilestones] = useState<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      milestones.forEach((milestone) => {
        setTimeout(() => {
          setVisibleMilestones((prev) => [...prev, milestone.id])
        }, milestone.delay * 800 + 1500) // Start after line animation
      })
    }
  }, [isVisible])

  // Generate the curved path for the growth line
  const pathD = "M 80 280 Q 170 240 260 200 T 480 120 T 700 60"

  return (
    <div ref={containerRef} className="mt-20 space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Network Value Growth
        </h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Every organisation that joins makes the system smarter for everyone
        </p>
      </div>

      {/* Animated Chart */}
      <div className="relative group max-w-4xl mx-auto">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur opacity-75"></div>
        <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 backdrop-blur-sm border border-primary/20 rounded-3xl p-6 md:p-8">
          <style jsx>{`
            @keyframes drawLine {
              from {
                stroke-dashoffset: 1000;
              }
              to {
                stroke-dashoffset: 0;
              }
            }

            @keyframes glowPulse {
              0%, 100% {
                filter: drop-shadow(0 0 8px currentColor);
              }
              50% {
                filter: drop-shadow(0 0 20px currentColor);
              }
            }

            .growth-line {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
            }

            .growth-line.animate {
              animation: drawLine 2s ease-out forwards;
            }

            .milestone-point {
              opacity: 0;
              transform: scale(0);
              transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
            }

            .milestone-point.visible {
              opacity: 1;
              transform: scale(1);
            }

            .milestone-glow {
              animation: glowPulse 2s ease-in-out infinite;
            }
          `}</style>

          <svg
            className="w-full h-auto overflow-visible"
            viewBox="0 0 800 360"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Gradient for the growth line */}
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(34, 211, 238)" />
                <stop offset="50%" stopColor="rgb(168, 85, 247)" />
                <stop offset="100%" stopColor="rgb(99, 102, 241)" />
              </linearGradient>

              {/* Gradient for the area fill */}
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0.05" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid lines */}
            <g className="stroke-foreground/5 dark:stroke-white/5">
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={`h-${i}`}
                  x1="40"
                  y1={60 + i * 55}
                  x2="760"
                  y2={60 + i * 55}
                  strokeWidth="1"
                />
              ))}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <line
                  key={`v-${i}`}
                  x1={80 + i * 130}
                  y1="40"
                  x2={80 + i * 130}
                  y2="300"
                  strokeWidth="1"
                />
              ))}
            </g>

            {/* Y-axis label */}
            <text
              x="20"
              y="170"
              className="fill-muted-foreground"
              fontSize="12"
              transform="rotate(-90, 20, 170)"
              textAnchor="middle"
            >
              Network Value
            </text>

            {/* X-axis label */}
            <text
              x="420"
              y="340"
              className="fill-muted-foreground"
              fontSize="12"
              textAnchor="middle"
            >
              Organisations in Network
            </text>

            {/* Area fill under the curve */}
            <path
              d={`${pathD} L 700 300 L 80 300 Z`}
              fill="url(#areaGradient)"
              className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Main growth line */}
            <path
              d={pathD}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#glow)"
              className={`growth-line ${isVisible ? 'animate' : ''}`}
            />

            {/* Milestone points and labels */}
            {milestones.map((milestone) => (
              <g
                key={milestone.id}
                className={`milestone-point ${visibleMilestones.includes(milestone.id) ? 'visible' : ''}`}
                style={{ transformOrigin: `${milestone.x}px ${milestone.y}px` }}
              >
                {/* Outer glow ring */}
                <circle
                  cx={milestone.x}
                  cy={milestone.y}
                  r="20"
                  fill="none"
                  stroke={milestone.color}
                  strokeWidth="2"
                  opacity="0.3"
                  className="milestone-glow"
                  style={{ color: milestone.color }}
                />

                {/* Inner point */}
                <circle
                  cx={milestone.x}
                  cy={milestone.y}
                  r="10"
                  fill={milestone.color}
                  filter="url(#glow)"
                />

                {/* Center dot */}
                <circle
                  cx={milestone.x}
                  cy={milestone.y}
                  r="4"
                  fill="white"
                />

                {/* Label with background for visibility */}
                <g>
                  {/* Background rect for text visibility - transparent blend */}
                  <rect
                    x={milestone.x - 70}
                    y={milestone.y - 58}
                    width="140"
                    height="36"
                    rx="6"
                    fill="transparent"
                  />
                  <text
                    x={milestone.x}
                    y={milestone.y - 40}
                    textAnchor="middle"
                    className="fill-foreground font-semibold"
                    fontSize="14"
                  >
                    {milestone.label}
                  </text>
                  <text
                    x={milestone.x}
                    y={milestone.y - 24}
                    textAnchor="middle"
                    className="fill-muted-foreground font-semibold"
                    fontSize="11"
                  >
                    {milestone.sublabel}
                  </text>
                </g>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Narrative Section: Why Network Effects Matter */}
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center">
          <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Why Network Effects Matter
          </h4>
        </div>

        {/* Two Column Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column: Every Week */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-cyan-50/90 to-purple-50/90 dark:from-cyan-950/30 dark:to-purple-950/30 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-800/50 rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/50 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h5 className="text-lg font-bold text-foreground">Every Week</h5>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-lg bg-cyan-100 dark:bg-cyan-950/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span className="text-muted-foreground">Thousands of leaders run check-ins</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-lg bg-cyan-100 dark:bg-cyan-950/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span className="text-muted-foreground">Micro-actions get tested across contexts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-lg bg-cyan-100 dark:bg-cyan-950/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span className="text-muted-foreground">What works surfaces automatically</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: The Result */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-purple-50/90 to-indigo-50/90 dark:from-purple-950/30 dark:to-indigo-950/30 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50 rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center">
                  <Award className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h5 className="text-lg font-bold text-foreground">The Result</h5>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-lg bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-muted-foreground">New clients start with proven playbooks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-lg bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-muted-foreground">Skip trial-and-error, go straight to results</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-lg bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-muted-foreground">System gets smarter with every organisation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Blockquote */}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-75"></div>
          <blockquote className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-foreground/90 leading-relaxed italic">
              "In leadership development, the fastest learner wins. With Culture Crunch, your organisation learns from every organisation in the network - not just your own."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
