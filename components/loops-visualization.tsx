"use client"

import { useState } from "react"

interface TooltipData {
  id: string
  metric: string
  description: string
  color: "purple" | "indigo" | "blue"
  loopX: number
}

const tooltipData: TooltipData[] = [
  {
    id: "tooltip-1",
    metric: "87%",
    description: "Check-in completion rate with 6-week historical trend visible.",
    color: "purple",
    loopX: 150
  },
  {
    id: "tooltip-2",
    metric: "3.2×",
    description: "Better guidance accuracy achieved over a 12-week learning period.",
    color: "indigo",
    loopX: 400
  },
  {
    id: "tooltip-3",
    metric: "40% Faster",
    description: "Problem-solving speed for new clients using cross-org insights.",
    color: "blue",
    loopX: 650
  }
]

export default function LoopsVisualization() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const handleMouseEnter = (tooltipId: string) => {
    setActiveTooltip(tooltipId)
  }

  const handleMouseLeave = () => {
    setActiveTooltip(null)
  }

  return (
    <div className="relative w-full">
      <style jsx>{`
        @keyframes flowAnimation {
          from {
            stroke-dashoffset: 628;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .loop-flow {
          /* Circumference of circle with r=100: 2 * PI * 100 ≈ 628 */
          stroke-dasharray: 40 588;
          stroke-dashoffset: 628;
          animation: flowAnimation 4s linear infinite;
        }

        .flow-1 {
          stroke: rgb(168, 85, 247);
          filter: drop-shadow(0 0 12px rgb(168, 85, 247));
        }
        .flow-2 {
          stroke: rgb(99, 102, 241);
          filter: drop-shadow(0 0 12px rgb(99, 102, 241));
          animation-delay: -1.33s;
        }
        .flow-3 {
          stroke: rgb(59, 130, 246);
          filter: drop-shadow(0 0 12px rgb(59, 130, 246));
          animation-delay: -2.66s;
        }

        .loop-group {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .svg-wrapper:hover .loop-group {
          opacity: 0.3;
        }

        .svg-wrapper .loop-group:hover {
          opacity: 1;
        }

        .loop-group:hover .flow-1 { filter: drop-shadow(0 0 25px rgb(168, 85, 247)); }
        .loop-group:hover .flow-2 { filter: drop-shadow(0 0 25px rgb(99, 102, 241)); }
        .loop-group:hover .flow-3 { filter: drop-shadow(0 0 25px rgb(59, 130, 246)); }

        @keyframes arrowPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .connector-arrow {
          animation: arrowPulse 2s ease-in-out infinite;
        }

        @keyframes outerGlowPulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.02); }
        }

        .outer-glow-1 {
          animation: outerGlowPulse 3s ease-in-out infinite;
          transform-origin: 150px 180px;
        }
        .outer-glow-2 {
          animation: outerGlowPulse 3s ease-in-out infinite;
          animation-delay: -1s;
          transform-origin: 400px 180px;
        }
        .outer-glow-3 {
          animation: outerGlowPulse 3s ease-in-out infinite;
          animation-delay: -2s;
          transform-origin: 650px 180px;
        }

        @keyframes innerRingRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .inner-ring-1 {
          animation: innerRingRotate 20s linear infinite reverse;
          transform-origin: 150px 180px;
        }
        .inner-ring-2 {
          animation: innerRingRotate 25s linear infinite;
          transform-origin: 400px 180px;
        }
        .inner-ring-3 {
          animation: innerRingRotate 22s linear infinite reverse;
          transform-origin: 650px 180px;
        }
      `}</style>

      <div
        className="svg-wrapper relative w-full overflow-visible"
        onMouseLeave={handleMouseLeave}
      >
        <svg
          className="w-full h-auto overflow-visible"
          viewBox="0 0 800 480"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="grad2-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="grad3-1" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="1" />
            </linearGradient>
            {/* Radial gradients for orb glow effect */}
            <radialGradient id="orb-glow-1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.15" />
              <stop offset="70%" stopColor="rgb(168, 85, 247)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="orb-glow-2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.15" />
              <stop offset="70%" stopColor="rgb(99, 102, 241)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="orb-glow-3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.15" />
              <stop offset="70%" stopColor="rgb(59, 130, 246)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
            </radialGradient>
            <marker id="arrowhead" markerWidth="12" markerHeight="9" refX="10" refY="4.5" orient="auto">
              <polygon points="0 0, 12 4.5, 0 9" fill="currentColor" className="text-foreground/60"/>
            </marker>
            <marker id="arrowhead-gradient-1" markerWidth="12" markerHeight="9" refX="10" refY="4.5" orient="auto">
              <polygon points="0 0, 12 4.5, 0 9" fill="rgb(99, 102, 241)"/>
            </marker>
            <marker id="arrowhead-gradient-2" markerWidth="12" markerHeight="9" refX="10" refY="4.5" orient="auto">
              <polygon points="0 0, 12 4.5, 0 9" fill="rgb(59, 130, 246)"/>
            </marker>
            <marker id="arrowhead-gradient-3" markerWidth="12" markerHeight="9" refX="10" refY="4.5" orient="auto">
              <polygon points="0 0, 12 4.5, 0 9" fill="rgb(168, 85, 247)"/>
            </marker>
          </defs>

          {/* Loop 1: Weekly Rhythm - centered at x=150, y=180 */}
          <g
            className="loop-group cursor-pointer"
            onMouseEnter={() => handleMouseEnter("tooltip-1")}
          >
            {/* Outer glow - pulsing ambient glow */}
            <circle
              cx="150"
              cy="180"
              r="115"
              fill="url(#orb-glow-1)"
              className="outer-glow-1"
            />
            {/* Inner rotating decorative ring */}
            <circle
              cx="150"
              cy="180"
              r="85"
              className="inner-ring-1 fill-none"
              stroke="rgb(168, 85, 247)"
              strokeWidth="1"
              strokeOpacity="0.2"
              strokeDasharray="8 12"
            />
            {/* Track - the dim background circle */}
            <circle
              cx="150"
              cy="180"
              r="100"
              className="fill-none stroke-foreground/5 dark:stroke-white/10"
              strokeWidth="2"
            />
            {/* Secondary outer ring for depth */}
            <circle
              cx="150"
              cy="180"
              r="100"
              className="fill-none"
              stroke="rgb(168, 85, 247)"
              strokeWidth="1"
              strokeOpacity="0.15"
            />
            {/* Animated flow - rendered on top */}
            <circle
              cx="150"
              cy="180"
              r="100"
              className="loop-flow flow-1 fill-none"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Hit area for hover */}
            <circle
              cx="150"
              cy="180"
              r="100"
              className="fill-none stroke-transparent"
              strokeWidth="60"
              style={{ pointerEvents: 'stroke' }}
            />
            <text x="150" y="170" className="fill-foreground font-medium" fontSize="15" textAnchor="middle" style={{ pointerEvents: 'none' }}>
              Weekly Rhythm
            </text>
            <text x="150" y="192" className="fill-muted-foreground" fontSize="13" textAnchor="middle" style={{ pointerEvents: 'none' }}>
              Generates Data
            </text>
          </g>

          {/* Connector 1→2: from right edge of loop 1 (250) to left edge of loop 2 (300) */}
          <path
            d="M 250,180 L 300,180"
            className="connector-arrow fill-none"
            stroke="url(#grad1-2)"
            strokeWidth="3"
            markerEnd="url(#arrowhead-gradient-1)"
          />

          {/* Loop 2: AI Learns - centered at x=400, y=180 */}
          <g
            className="loop-group cursor-pointer"
            onMouseEnter={() => handleMouseEnter("tooltip-2")}
          >
            {/* Outer glow - pulsing ambient glow */}
            <circle
              cx="400"
              cy="180"
              r="115"
              fill="url(#orb-glow-2)"
              className="outer-glow-2"
            />
            {/* Inner rotating decorative ring */}
            <circle
              cx="400"
              cy="180"
              r="85"
              className="inner-ring-2 fill-none"
              stroke="rgb(99, 102, 241)"
              strokeWidth="1"
              strokeOpacity="0.2"
              strokeDasharray="8 12"
            />
            {/* Track - the dim background circle */}
            <circle
              cx="400"
              cy="180"
              r="100"
              className="fill-none stroke-foreground/5 dark:stroke-white/10"
              strokeWidth="2"
            />
            {/* Secondary outer ring for depth */}
            <circle
              cx="400"
              cy="180"
              r="100"
              className="fill-none"
              stroke="rgb(99, 102, 241)"
              strokeWidth="1"
              strokeOpacity="0.15"
            />
            {/* Animated flow - rendered on top */}
            <circle
              cx="400"
              cy="180"
              r="100"
              className="loop-flow flow-2 fill-none"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Hit area for hover */}
            <circle
              cx="400"
              cy="180"
              r="100"
              className="fill-none stroke-transparent"
              strokeWidth="60"
              style={{ pointerEvents: 'stroke' }}
            />
            <text x="400" y="170" className="fill-foreground font-medium" fontSize="15" textAnchor="middle" style={{ pointerEvents: 'none' }}>
              AI Learns
            </text>
            <text x="400" y="192" className="fill-muted-foreground" fontSize="13" textAnchor="middle" style={{ pointerEvents: 'none' }}>
              Patterns Identified
            </text>
          </g>

          {/* Connector 2→3: from right edge of loop 2 (500) to left edge of loop 3 (550) */}
          <path
            d="M 500,180 L 550,180"
            className="connector-arrow fill-none"
            stroke="url(#grad2-3)"
            strokeWidth="3"
            markerEnd="url(#arrowhead-gradient-2)"
          />

          {/* Loop 3: Cross-org Insights - centered at x=650, y=180 */}
          <g
            className="loop-group cursor-pointer"
            onMouseEnter={() => handleMouseEnter("tooltip-3")}
          >
            {/* Outer glow - pulsing ambient glow */}
            <circle
              cx="650"
              cy="180"
              r="115"
              fill="url(#orb-glow-3)"
              className="outer-glow-3"
            />
            {/* Inner rotating decorative ring */}
            <circle
              cx="650"
              cy="180"
              r="85"
              className="inner-ring-3 fill-none"
              stroke="rgb(59, 130, 246)"
              strokeWidth="1"
              strokeOpacity="0.2"
              strokeDasharray="8 12"
            />
            {/* Track - the dim background circle */}
            <circle
              cx="650"
              cy="180"
              r="100"
              className="fill-none stroke-foreground/5 dark:stroke-white/10"
              strokeWidth="2"
            />
            {/* Secondary outer ring for depth */}
            <circle
              cx="650"
              cy="180"
              r="100"
              className="fill-none"
              stroke="rgb(59, 130, 246)"
              strokeWidth="1"
              strokeOpacity="0.15"
            />
            {/* Animated flow - rendered on top */}
            <circle
              cx="650"
              cy="180"
              r="100"
              className="loop-flow flow-3 fill-none"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Hit area for hover */}
            <circle
              cx="650"
              cy="180"
              r="100"
              className="fill-none stroke-transparent"
              strokeWidth="60"
              style={{ pointerEvents: 'stroke' }}
            />
            <text x="650" y="160" className="fill-foreground font-medium" fontSize="15" textAnchor="middle" style={{ pointerEvents: 'none' }}>
              Cross-org Insights
            </text>
            <text x="650" y="182" className="fill-muted-foreground" fontSize="13" textAnchor="middle" style={{ pointerEvents: 'none' }}>
              Improve Guidance
            </text>
            <text x="650" y="204" className="fill-blue-500" fontSize="12" fontWeight="600" textAnchor="middle" style={{ pointerEvents: 'none' }}>
              → Better Weekly Briefs
            </text>
          </g>

          {/* Feedback Loop: 3→1 (curved path below) */}
          <path
            d="M 650,285 Q 400,380 150,285"
            className="connector-arrow fill-none"
            stroke="url(#grad3-1)"
            strokeWidth="2"
            strokeDasharray="8 6"
            markerEnd="url(#arrowhead-gradient-3)"
          />

          {/* Tooltips rendered inside SVG */}
          {tooltipData.map((tooltip) => {
            const isActive = activeTooltip === tooltip.id
            const colorMap = {
              purple: { fill: "rgb(168, 85, 247)", bg: "rgba(88, 28, 135, 0.95)" },
              indigo: { fill: "rgb(99, 102, 241)", bg: "rgba(55, 48, 163, 0.95)" },
              blue: { fill: "rgb(59, 130, 246)", bg: "rgba(30, 64, 175, 0.95)" }
            }
            const colors = colorMap[tooltip.color]

            return (
              <g
                key={tooltip.id}
                className="transition-all duration-300"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: `translateY(${isActive ? 0 : 10}px)`,
                  pointerEvents: 'none'
                }}
              >
                {/* Tooltip background */}
                <rect
                  x={tooltip.loopX - 100}
                  y="360"
                  width="200"
                  height="90"
                  rx="12"
                  fill={colors.bg}
                  className="backdrop-blur-xl"
                />
                {/* Metric */}
                <text
                  x={tooltip.loopX}
                  y="395"
                  textAnchor="middle"
                  fontSize="28"
                  fontWeight="800"
                  fill={colors.fill}
                  style={{ filter: `drop-shadow(0 0 10px ${colors.fill})` }}
                >
                  {tooltip.metric}
                </text>
                {/* Description */}
                <text
                  x={tooltip.loopX}
                  y="420"
                  textAnchor="middle"
                  fontSize="11"
                  fill="rgba(255,255,255,0.8)"
                >
                  <tspan x={tooltip.loopX} dy="0">{tooltip.description.split(' ').slice(0, 4).join(' ')}</tspan>
                  <tspan x={tooltip.loopX} dy="14">{tooltip.description.split(' ').slice(4).join(' ')}</tspan>
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
