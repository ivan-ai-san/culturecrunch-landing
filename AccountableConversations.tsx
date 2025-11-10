import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Wrench, BookOpen, Lightbulb, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionFeedbackButton from "@/components/SectionFeedbackButton";

const sections = [
  {
    id: "mindset",
    icon: Brain,
    title: "The Mindset: Installing the Right Mindset for Accountable Conversations",
    intro: "Every accountable conversation begins with intention—not correction. Leaders pause to self-regulate, check their motives, and centre on values before they speak.",
    content: [
      {
        label: "Intention setting",
        text: "\"Am I here to help, to connect, to learn?\""
      },
      {
        label: "Self-regulation",
        text: "Noticing emotions, settling the nervous system, returning to calm."
      },
      {
        label: "Awareness of others",
        text: "Sensing what others may be feeling or needing."
      },
      {
        label: "Empathy and needs awareness",
        text: "Listening beneath behaviour to what truly matters."
      }
    ],
    footer: "This is the shift from Red Zone (reactivity, approval, control, or security seeking) to Green Zone—where clarity, courage, and care can coexist.",
    color: "purple"
  },
  {
    id: "skillset",
    icon: Wrench,
    title: "The Skillset: O.O.R.A. in Action",
    intro: "A simple, high-trust structure keeps conversations clean and accountable: Always ask yourself: \"What's My Part In This\", then \"Is there an unmet need in the other I can acknowledge\". Start the conversation here.",
    content: [
      {
        label: "Ownership",
        text: "Take responsibility for your part and acknowledge unmet needs in others. Start with your part. Lead from integrity, not blame."
      },
      {
        label: "Observation + Impact",
        text: "Name what you've noticed and why it matters."
      },
      {
        label: "Request",
        text: "Be clear and specific. Be sure of understanding."
      },
      {
        label: "Agreement",
        text: "Align on clear next steps, outcomes, and shared responsibility."
      }
    ],
    footer: "It's not a script—it's a backbone for honest, human dialogue.",
    color: "indigo"
  },
  {
    id: "theory",
    icon: BookOpen,
    title: "The Theory",
    intro: "Evidenced based emotionally intelligent leadership models driving Accountable Conversations which are grounded in:",
    content: [
      {
        label: "The Triple Goal",
        text: "Every exchange should drive great performance, great learning, and a great workplace."
      },
      {
        label: "The LGP 360 Framework",
        text: "A developmental map showing how self-awareness and self-regulation transform Red Zone reactivity into Green Zone leadership. Built off 30 years of research and practice."
      },
      {
        label: "Neuroscience of Psychological Safety",
        text: "Calm, connected presence opens the brain for trust and learning."
      },
      {
        label: "Nonviolent Communication Principles",
        text: "Speaking from needs, not judgment, to sustain dignity and respect."
      }
    ],
    footer: null,
    color: "purple"
  },
  {
    id: "practice",
    icon: Lightbulb,
    title: "In Practice",
    intro: "In aged care and other human-centred settings, Accountable Conversations protect dignity, restore trust, and keep people connected to purpose.",
    content: [
      {
        label: "Protecting dignity",
        text: "Conversations that honour the worth and autonomy of every person, resident and staff alike."
      },
      {
        label: "Restoring trust",
        text: "Building psychological safety through consistent, honest dialogue that repairs fractures and strengthens relationships."
      },
      {
        label: "Staying connected to purpose",
        text: "Keeping teams aligned with the Triple Goal—great performance, great learning, and a great workplace."
      },
      {
        label: "Growth moments",
        text: "Transforming difficult conversations into opportunities for both individual and cultural development."
      }
    ],
    footer: "They turn difficult moments into growth moments—for both people and culture.",
    color: "indigo"
  }
];

export default function AccountableConversations() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="mb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-6" data-testid="badge-methodology">
          Methodology
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.01em' }}>
          Accountable Conversations
        </h2>
        <h4 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-6">
          Building Psych Safety Through Human Dialogue
        </h4>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          While the Culture Crunch system installs weekly structure and insight, Accountable Conversations build the human capability beneath it. This high-EQ leadership model trains leaders to communicate with clarity, care, and courage - creating alignment without blame, and connection without avoidance. It’s a universal conversational practice that strengthens performance, trust, and psychological safety across every level of work. It’s the backbone of the Culture Crunch system.
        </p>
      </motion.div>

      {/* Sections */}
      <div className="space-y-6 max-w-5xl mx-auto">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isExpanded = expandedSection === section.id;
          
          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                className={`overflow-visible cursor-pointer transition-all ${
                  isExpanded
                    ? 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40 border-2 border-purple-400 dark:border-purple-600 shadow-lg'
                    : 'hover-elevate'
                }`}
                onClick={() => toggleSection(section.id)}
                data-testid={`accountable-conversation-${section.id}`}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full ${
                      section.color === 'purple'
                        ? 'bg-purple-100 dark:bg-purple-950/40'
                        : 'bg-indigo-100 dark:bg-indigo-950/40'
                    } flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${
                        section.color === 'purple'
                          ? 'text-purple-600 dark:text-purple-400'
                          : 'text-indigo-600 dark:text-indigo-400'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <h5 className="text-lg md:text-xl font-bold text-foreground mb-2">
                        {section.title}
                      </h5>
                      <p className="text-muted-foreground">{section.intro}</p>
                    </div>

                    <ChevronDown
                      className={`flex-shrink-0 w-5 h-5 text-muted-foreground transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-purple-200 dark:border-purple-800">
                          {section.content.length > 0 && (
                            <div className="space-y-4 mb-4">
                              {section.content.map((item, idx) => (
                                <div key={idx} className="flex gap-3">
                                  <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                                    section.color === 'purple'
                                      ? 'bg-purple-600'
                                      : 'bg-indigo-600'
                                  }`} />
                                  <div className="flex-1">
                                    <span className="font-semibold text-foreground">{item.label}</span>
                                    <span className="text-muted-foreground"> – {item.text}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {section.footer && (
                            <p className="text-sm italic text-muted-foreground mt-4">
                              {section.footer}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
      <SectionFeedbackButton />
    </div>
  );
}
