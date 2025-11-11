import { Sparkles, MessageSquare, Target, Activity, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const loopSteps = [
  {
    icon: Sparkles,
    title: "Weekly Brief",
    subtitle: "Monday 7 a.m.",
    description: "Brief lands Monday 7 a.m. with the 1–2 focus areas for the week.",
    color: "purple"
  },
  {
    icon: MessageSquare,
    title: "Team Check-In",
    subtitle: "20 minutes",
    description: "Run one Team Check-In, pick one micro-practice (e.g., kill two meetings, 5-min recognition).",
    color: "indigo"
  },
  {
    icon: Target,
    title: "Choose Micro-Action",
    subtitle: "One simple change",
    description: "Select one small, actionable practice that can be completed this week.",
    color: "purple"
  },
  {
    icon: Activity,
    title: "System Tracks",
    subtitle: "Background monitoring",
    description: "Tracking runs in the background; leaders see live shifts during the week.",
    color: "indigo"
  },
  {
    icon: TrendingUp,
    title: "Evidence Visible",
    subtitle: "Real-time dashboard",
    description: "Evidence visible on dashboard; feeds next week's Weekly Brief.",
    color: "purple"
  }
];

export default function CircularLoop() {
  return (
    <>
      {/* Desktop: Circular Layout */}
      <div className="hidden lg:block relative mx-auto" style={{ width: '800px', height: '800px' }}>
        {/* Center image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40 rounded-full p-5 shadow-lg border border-purple-200 dark:border-purple-800">
            <img
              src="/ai-brain.png"
              alt="Weekly Loop"
              className="w-44 h-44 object-contain rounded-full"
            />
          </div>
        </div>

        {/* Circular connecting line and curved text */}
        <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
          <defs>
            {/* Arc path on inner bot circle border - radius 120 for the bot container */}
            <path
              id="textArc"
              d="M 280,400 A 120,120 0 0,1 520,400"
              fill="none"
            />
          </defs>
          <circle
            cx="400"
            cy="400"
            r="280"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 8"
            className="text-purple-300 dark:text-purple-700"
            opacity="0.5"
          />
          {/* Animated circle to show flow */}
          <circle
            cx="400"
            cy="400"
            r="280"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="20 1740"
            className="text-purple-600 animate-spin-slow"
            opacity="0.8"
            style={{ animationDuration: '8s' }}
          />
          {/* Curved text on top of inner bot circle border */}
          <text style={{ transform: 'rotate(90deg)', transformOrigin: '400px 400px' }}>
            <textPath href="#textArc" startOffset="50%" textAnchor="middle" className="text-base font-bold fill-purple-600 dark:fill-purple-400">
              CIMIC Accountable Leadership AI
            </textPath>
          </text>
        </svg>

        {/* Loop nodes positioned in a circle */}
        {loopSteps.map((step, index) => {
          const Icon = step.icon;
          const angle = (index * 72 - 90) * (Math.PI / 180); // 360/5 = 72 degrees per step, start at top
          const radius = 280;
          const x = 400 + radius * Math.cos(angle);
          const y = 400 + radius * Math.sin(angle);
          
          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)'
              }}
              data-testid={`loop-step-${index}`}
            >
              <Card className={`p-6 w-48 hover-elevate bg-gradient-to-br ${
                step.color === 'purple' 
                  ? 'from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/40 border-purple-300 dark:border-purple-700' 
                  : 'from-indigo-50 to-indigo-100 dark:from-indigo-950/40 dark:to-indigo-900/40 border-indigo-300 dark:border-indigo-700'
              }`}>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className={`w-12 h-12 rounded-full ${
                    step.color === 'purple' ? 'bg-purple-600' : 'bg-indigo-600'
                  } flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm">{step.title}</h4>
                  <p className={`text-xs ${
                    step.color === 'purple' ? 'text-purple-600' : 'text-indigo-600'
                  } font-semibold`}>
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Mobile: Vertical Flow */}
      <div className="lg:hidden space-y-6">
        {/* Center image for mobile */}
        <div className="flex flex-col items-center mb-8 space-y-4">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40 rounded-full p-4 shadow-lg border border-purple-200 dark:border-purple-800">
            <img
              src="/ai-brain.png"
              alt="Weekly Loop"
              className="w-32 h-32 object-contain rounded-full"
            />
          </div>
          <p className="text-center text-base font-bold text-purple-600 dark:text-purple-400 max-w-xs leading-tight px-4">
            CIMIC Accountable Leadership AI
          </p>
        </div>
        {loopSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} data-testid={`loop-step-mobile-${index}`}>
              <Card className={`p-6 hover-elevate bg-gradient-to-br ${
                step.color === 'purple' 
                  ? 'from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/40 border-purple-300 dark:border-purple-700' 
                  : 'from-indigo-50 to-indigo-100 dark:from-indigo-950/40 dark:to-indigo-900/40 border-indigo-300 dark:border-indigo-700'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full ${
                    step.color === 'purple' ? 'bg-purple-600' : 'bg-indigo-600'
                  } flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
                    <p className={`text-sm ${
                      step.color === 'purple' ? 'text-purple-600' : 'text-indigo-600'
                    } font-semibold mb-2`}>
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
              {index < loopSteps.length - 1 && (
                <div className="flex justify-center py-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full" />
                </div>
              )}
              {index === loopSteps.length - 1 && (
                <div className="flex justify-center py-3">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full opacity-50" 
                         style={{ backgroundImage: 'repeating-linear-gradient(0deg, currentColor, currentColor 4px, transparent 4px, transparent 8px)' }} />
                    <p className="text-xs text-muted-foreground italic">Feeds next week's Brief</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
