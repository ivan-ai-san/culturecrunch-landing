import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingDown, Users, Zap, Target, Clock, BarChart3, Brain, Heart, Lightbulb } from "lucide-react"
import ContactForm from "@/components/contact-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TypingPromptInput from "@/components/typing-prompt-input"
import FramerSpotlight from "@/components/framer-spotlight"
import CssGridBackground from "@/components/css-grid-background"
import StructuredData from "@/components/structured-data"

export default function Home() {
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
                Leaders run the operating system — they set the rhythm for clarity, trust, and performance, translating culture from words into action every day.
              </p>

              <TypingPromptInput />

              <div className="flex flex-wrap justify-center gap-4 mt-16">
                <Button className="flex items-center gap-3 px-6 py-7 h-auto text-base bg-[#1a1d21] hover:bg-[#2a2d31] text-white rounded-xl border-0 dark:bg-primary dark:hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(36,101,237,0.5)] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 dark:opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  <Zap className="h-5 w-5 text-white relative z-10" />
                  <div className="flex flex-col items-start relative z-10">
                    <span className="text-base font-semibold">Install Your OS</span>
                    <span className="text-xs text-gray-400 dark:text-gray-300 -mt-0.5">Get started today</span>
                  </div>
                </Button>
                <Button className="px-6 py-7 h-auto rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-base font-semibold text-foreground">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
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
                Despite Billions Spent, Most Leadership Initiatives Fail to Stick
              </h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                The result is a costly cycle of disengagement, rework, and underperformance that drains organizational energy and resources.
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
                  <div className="text-sm font-semibold text-foreground">Behavior Change Reversal</div>
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
                      The old HR view — culture as values on the wall — has shifted. Boards and investors now link leadership behaviour directly to business results.
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
                      With simple weekly signals, teams can now see what was once invisible — how clarity, trust, and energy shift week to week.
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

        {/* Placeholder: Solution */}
        <section className="py-24 bg-muted/30 dark:bg-muted/5" id="solution" aria-labelledby="solution-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
              <div className="inline-block rounded-lg bg-muted px-4 py-2 text-sm font-medium border">
                Coming Soon
              </div>
              <h2 id="solution-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Solution
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Discover how Culture Crunch helps organizations install a high‑performance Leadership and Culture Operating System — a living framework that connects people, rhythm, and insight.
              </p>
              <div className="h-64 w-full rounded-2xl border-2 border-dashed border-muted-foreground/20 flex items-center justify-center bg-muted/20">
                <Lightbulb className="h-16 w-16 text-muted-foreground/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder: How It Works */}
        <section className="py-24" id="how-it-works" aria-labelledby="how-it-works-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
              <div className="inline-block rounded-lg bg-muted px-4 py-2 text-sm font-medium border">
                Coming Soon
              </div>
              <h2 id="how-it-works-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How It Works
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Learn about the proven process for installing and scaling your Leadership Operating System across your organization.
              </p>
              <div className="h-64 w-full rounded-2xl border-2 border-dashed border-muted-foreground/20 flex items-center justify-center bg-muted/20">
                <Target className="h-16 w-16 text-muted-foreground/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder: Methodology */}
        <section className="py-24 bg-muted/30 dark:bg-muted/5" id="methodology" aria-labelledby="methodology-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
              <div className="inline-block rounded-lg bg-muted px-4 py-2 text-sm font-medium border">
                Coming Soon
              </div>
              <h2 id="methodology-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Methodology
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Explore the behavioral science and practical frameworks that power Culture Crunch's approach to embedded leadership.
              </p>
              <div className="h-64 w-full rounded-2xl border-2 border-dashed border-muted-foreground/20 flex items-center justify-center bg-muted/20">
                <Brain className="h-16 w-16 text-muted-foreground/40" />
              </div>
            </div>
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
                  Organizations that move first to install embedded leadership operating systems will lead on three fronts:
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
                      Faster decisions, less rework, more value delivered consistently across the organization.
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
                    Culture Crunch turns leadership into an operating system — one that continuously powers clarity, trust, and performance in an increasingly complex world.
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
