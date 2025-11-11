import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Brain, Rocket, TrendingUp, CheckCircle, Award } from "lucide-react";

interface Week {
  number: number;
  title: string;
  subtitle: string;
  icon: typeof Target;
  description: string;
  color: string;
}

export default function WeekByWeekTimeline() {
  const weeks: Week[] = [
    {
      number: 1,
      title: "Foundations & Baselines",
      subtitle: "Setting the foundation",
      icon: Target,
      description: "Triple Goal survey analysed to set starting points for performance, learning and psychosocial safety. Leadership workshop defines Red/Green Zone behaviours and the first three focus areas. LGP360 is launched, leaders configure their Leadership Copilot, the app is set up, and a short baseline pulse is completed.",
      color: "indigo"
    },
    {
      number: 2,
      title: "Mindset Installation",
      subtitle: "Accountable Conversations",
      icon: Brain,
      description: "Leaders build the inner foundations for safe, accountable dialogue using the Alteva model: intention, empathy and self-regulation. Dashboard is finalised; optional Organisational Network Analysis maps trust and inclusion patterns.",
      color: "purple"
    },
    {
      number: 3,
      title: "Skillset Installation + First Sprint",
      subtitle: "Skillset in Action",
      icon: Rocket,
      description: "First Leader Brief lands Monday 7 a.m. Leaders run their first Team Check-In and pick a single micro-practice. The system tracks meeting load, rosters, overtime, recognition and psychosocial signals through the week.",
      color: "blue"
    },
    {
      number: 4,
      title: "Momentum & Insight",
      subtitle: "Building rhythm",
      icon: TrendingUp,
      description: "Weekly brief continues; micro-actions implemented and tracked. Live dashboard reveals emerging shifts. Each leader completes a 60–90 minute LGP360 debrief linking personal insights to team outcomes.",
      color: "indigo"
    },
    {
      number: 5,
      title: "Embed & Refine",
      subtitle: "Locking in practices",
      icon: CheckCircle,
      description: "Team Review locks in what's working. The 'One Big Practice' is chosen for sustained focus beyond the sprint; the weekly loop continues.",
      color: "purple"
    },
    {
      number: 6,
      title: "Impact & Transition",
      subtitle: "Measuring success",
      icon: Award,
      description: "Culture Impact Report delivered with measurable gains. Compliance documentation aligned to WHS and Aged Care Quality Standards is provided. Final sprint cycle closes, and the team transitions to a 12-month sustain licence.",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "indigo":
        return {
          bg: "bg-indigo-100 dark:bg-indigo-950/40",
          text: "text-indigo-600 dark:text-indigo-400",
          border: "border-indigo-300"
        };
      case "purple":
        return {
          bg: "bg-purple-100 dark:bg-purple-950/40",
          text: "text-purple-600 dark:text-purple-400",
          border: "border-purple-300"
        };
      case "blue":
        return {
          bg: "bg-blue-100 dark:bg-blue-950/40",
          text: "text-blue-600 dark:text-blue-400",
          border: "border-blue-300"
        };
      default:
        return {
          bg: "bg-indigo-100 dark:bg-indigo-950/40",
          text: "text-indigo-600 dark:text-indigo-400",
          border: "border-indigo-300"
        };
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="space-y-6">
        {weeks.map((week, index) => {
          const Icon = week.icon;
          const colors = getColorClasses(week.color);
          
          return (
            <motion.div
              key={week.number}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`p-6 ${colors.bg} hover-elevate`}
                data-testid={`week-${week.number}`}
              >
                <div className="flex items-start gap-6">
                  {/* Week number and icon */}
                  <div className="flex flex-col items-center gap-3 flex-shrink-0">
                    <div className={`${colors.bg} p-4 rounded-full`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <div className={`${colors.bg} px-3 py-1 rounded-full`}>
                      <span className={`text-sm font-bold ${colors.text}`}>
                        Week {week.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {week.title}
                    </h4>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      {week.subtitle}
                    </p>
                    <p className="text-base text-foreground leading-relaxed">
                      {week.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
