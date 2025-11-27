"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail, Twitter, Coffee, Users, Flame, Rocket } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CssGridBackground from "@/components/css-grid-background"
import Link from "next/link"
// import Image from "next/image" // Uncomment when adding actual profile images

// =============================================================================
// CO-FOUNDER PROFILES - Edit this section to add your details
// =============================================================================

const coFounders = [
  {
    name: "Campbell McGlynn",
    role: "Co-Founder & CEO",
    image: "/placeholder-avatar.jpg", // Replace with actual image path
    bio: `Campbell brings over 20 years of senior HR leadership experience transforming culture at scale. As EGM People & Culture at IRT Group, he led programs that generated $3M ROI while improving lives for 3,000 employees. He's designed and delivered enterprise-wide leadership transformations at organisations like Laing O'Rourke, NBN Co, Woodside Energy, and King & Wood Mallesons - consistently achieving double-digit improvements in engagement and dramatic reductions in attrition.

Starting his career as an Australian Army officer, Campbell learned early that leadership under pressure requires more than skillsets - it demands identity-level transformation. As an IECL Professional Certified Coach, he specialises in vertical development, emotional intelligence, and high-performance communication. He's seen firsthand why traditional leadership programs fail: they teach concepts without changing the operating systems leaders run on.

Campbell's unique perspective? He's tired of watching organisations spend millions on training events that produce temporary enthusiasm but zero lasting behaviour change. At CultureCrunch, he's building what he wished existed in every boardroom conversation about culture: an operating system that makes leadership development inseparable from how work actually gets done.`,
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle",
    email: "campbell@culturecrunch.com"
  },
  {
    name: "Ivan Sanchez",
    role: "Co-Founder & CTO",
    image: "/placeholder-avatar.jpg", // Replace with actual image path
    bio: `Ivan brings 16+ years at the intersection of enterprise technology and strategic growth. From scaling Salesforce implementations at Cloudwerx to driving AI-led digital innovation at Thoughtworks, he's watched countless organisations buy transformation tools that measure everything but change nothing. His career spans territory sales at Oracle, business development across Asia-Pacific, and founding Digicity for Kids - a startup teaching him the hard lessons about product-market fit.

With an MBA from UNSW and graduation from both Founder Institute and WSU Launch Pad, Ivan combines enterprise sales discipline with startup velocity. He's that rare technologist who speaks both boardroom strategy and shipping code - someone who's exceeded quotas at Dell and Oracle while also bootstrapping ventures from zero. He knows the difference between software that gets bought and software that gets used.

Ivan's unique perspective? He's seen billion-dollar companies drown in engagement surveys while their culture rots from lack of execution. He understands that culture transformation isn't a data problem - it's a behaviour change problem disguised as an analytics opportunity. At CultureCrunch, he's building the infrastructure that turns research into repeatable systems, making evidence-based leadership as accessible as checking email.`,
    linkedin: "https://linkedin.com/in/theirprofile",
    twitter: "https://twitter.com/theirhandle",
    email: "ivan@culturecrunch.com"
  }
]

// =============================================================================
// COMPANY STORY - Edit this section to tell your story
// =============================================================================

const companyStory = {
  headline: "The Coffee That Changed Everything",
  subheadline: "Or: How Two Friends Accidentally Started a Revolution Over Caffeine",
  mission: "Our mission is to transform how organisations build culture - making it embedded, measurable, and continuously improving."
}

// =============================================================================
// VALUES - Edit this section to reflect your company values
// =============================================================================

const values = [
  {
    title: "Evidence Over Opinion",
    description: "Every feature we build connects to research. Every claim has evidence. We believe in measuring what matters."
  },
  {
    title: "Simplicity Wins",
    description: "Complex systems don't get used. We obsess over making powerful tools that feel effortless."
  },
  {
    title: "Leaders First",
    description: "We build for the leaders in the trenches, not just executives in boardrooms. If it doesn't help frontline managers, it doesn't ship."
  },
  {
    title: "Compound Learning",
    description: "Every interaction makes the system smarter. We believe the fastest learner wins."
  }
]

// =============================================================================
// PAGE COMPONENT - You probably don't need to edit below this line
// =============================================================================

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <CssGridBackground />
        <div className="container px-4 md:px-6 py-24 md:py-32 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-block rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 px-4 py-2 text-sm font-medium mb-6 border border-primary/20">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              {companyStory.headline}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              {companyStory.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-muted/30 dark:bg-muted/5">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* The Setup */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">The Setup</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Picture this: The Southern Highlands of NSW, Australia. Rolling green hills, excellent coffee, and apparently, a breeding ground for dangerous ideas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Campbell and Ivan had been friends for nearly a decade - long enough to know each other's coffee orders, short enough to still tolerate each other's bad jokes. Campbell, the leadership and culture guy who'd seen more "transformation initiatives" fail than he cared to count. Ivan, the startup tech person who'd watched enough companies burn money on solutions that solved nothing.
              </p>
            </div>

            {/* The Spark */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">The Spark</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                One particular morning, over cups of coffee strong enough to wake the dead (Australian coffee, naturally), they found themselves in the same peculiar headspace: unreasonably excited about AI and business opportunities. You know that caffeinated energy where everything seems possible? That was the vibe.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                They started throwing ideas at the wall. Some stuck briefly. Most slid down pathetically.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Then someone said the word: <span className="font-bold text-foreground">Culture.</span>
              </p>
            </div>

            {/* The Wait What Moment */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">The "Wait, What?" Moment</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                See, they'd both been circling the same drain from different angles:
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">Campbell</span> had watched companies spend millions on leadership programs, only to see leaders return to their desks and... revert to exactly the same behaviours within weeks. It was like watching Groundhog Day, but with more PowerPoint and less Bill Murray.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <span className="font-semibold text-foreground">Ivan</span> had seen the tech side: companies drowning in engagement surveys, pulse checks, and measurement tools - measuring culture to death while never actually changing anything. Data everywhere, action nowhere.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                As they talked (read: ranted), a pattern emerged:
              </p>
              <ul className="space-y-2 mb-6 ml-6">
                <li className="flex items-start gap-2 text-lg text-muted-foreground">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Tons of tools for measuring culture</span>
                </li>
                <li className="flex items-start gap-2 text-lg text-muted-foreground">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Plenty of workshops for talking about culture</span>
                </li>
                <li className="flex items-start gap-2 text-lg text-muted-foreground">
                  <span className="text-muted-foreground/50 mt-1">?</span>
                  <span>But actual execution layers for transforming culture?</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                Cricket sounds.
              </p>
            </div>

            {/* The Decision */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">The Decision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Now, most rational people would've finished their coffee, said "huh, interesting," and gone home.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Campbell and Ivan are not most people.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Instead, they looked at each other with that particular brand of excited stupidity that precedes either brilliance or disaster (sometimes both), and essentially said:
              </p>
              <div className="relative group my-8">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-br from-purple-50/90 to-indigo-50/90 dark:from-purple-950/30 dark:to-indigo-950/30 border border-purple-200/50 dark:border-purple-800/50 rounded-xl p-6 text-center">
                  <p className="text-xl font-medium text-foreground italic">
                    "You know what? Let's fix this."
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Because why not tackle one of the hardest problems in organisational behaviour with no guarantee of success, while the entire leadership development industry - worth $60 billion - is already entrenched?
              </p>
            </div>

            {/* The Adventure Begins */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">The Adventure Begins</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                What excited them wasn't just the problem - it was the timing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The old playbook was broken:
              </p>
              <ul className="space-y-2 mb-6 ml-6">
                <li className="flex items-start gap-2 text-lg text-muted-foreground">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Training events that stick for exactly three weeks</span>
                </li>
                <li className="flex items-start gap-2 text-lg text-muted-foreground">
                  <span className="text-red-500 mt-1">•</span>
                  <span>70% failure rates on transformation efforts (though as they'd later discover, even that statistic is questionable)</span>
                </li>
                <li className="flex items-start gap-2 text-lg text-muted-foreground">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Companies treating culture like a "program" instead of an operating system</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                But now? AI, behavioural science, implementation frameworks - the pieces existed to actually solve this properly. Not with another measurement tool. Not with another workshop. But with something that actually embeds behaviour change into how work gets done.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                They called it their "problem-market fit adventure." Others might call it "two optimistic friends who severely underestimated how hard culture transformation is." Both are accurate.
              </p>
            </div>

            {/* What Happened Next */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">What Happened Next</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Spoiler alert: You're reading this, which means they actually built something.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Culture Crunch emerged from that coffee conversation - but not as they expected. Every assumption was tested. Every hypothesis was challenged. They dove into over 100 peer-reviewed studies. They challenged the "70% failure" myth (turns out, totally unsupported). They discovered the real reasons transformations fail (it's not what the consultants tell you).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most importantly, they figured out that culture transformation doesn't need another training event. <span className="font-semibold text-foreground">It needs an operating system.</span>
              </p>
            </div>

            {/* The Punchline */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">The Punchline</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Today, Campbell brings the leadership wisdom and culture expertise. Ivan brings the startup pragmatism and tech execution. Together, they're building something that does what that gap in the market demanded:
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Not another tool to measure culture. <span className="font-semibold text-foreground">A platform to actually transform it.</span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                And it all started because two friends in the Southern Highlands couldn't just enjoy their coffee in peace.
              </p>
            </div>

            {/* The Moral */}
            <div className="relative group mb-12">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-gradient-to-br from-purple-50/90 to-indigo-50/90 dark:from-purple-950/30 dark:to-indigo-950/30 border border-purple-200/50 dark:border-purple-800/50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-foreground mb-4 text-center">The Moral of the Story</h4>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-center">
                  Sometimes the best business ideas come from:
                </p>
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Coffee className="h-5 w-5 text-purple-600 dark:text-purple-400" /> Really good coffee
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" /> Really good friends
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Flame className="h-5 w-5 text-purple-600 dark:text-purple-400" /> Really big problems
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Rocket className="h-5 w-5 text-purple-600 dark:text-purple-400" /> Dangerous optimism
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mb-12">
              <p className="text-xl font-medium text-foreground mb-2">
                Want to join the adventure? We're just getting started.
              </p>
              <p className="text-sm text-muted-foreground italic">
                P.S. - Yes, they still meet for coffee. Yes, they still throw ideas at walls. And yes, Campbell still insists his coffee order is "not that complicated."
              </p>
            </div>

            {/* Mission Statement */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-gradient-to-br from-purple-50/90 to-indigo-50/90 dark:from-purple-950/30 dark:to-indigo-950/30 border border-purple-200/50 dark:border-purple-800/50 rounded-2xl p-8 text-center">
                <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                  {companyStory.mission}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
              Meet the Founders
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The team behind Culture Crunch
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coFounders.map((founder, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border border-primary/20 rounded-3xl p-8 h-full">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur opacity-30"></div>
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-background">
                        {/* Replace with actual image or use placeholder */}
                        <div className="w-full h-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900 flex items-center justify-center">
                          <span className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                            {founder.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        {/* Uncomment below and comment above when you have actual images */}
                        {/* <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          className="object-cover"
                        /> */}
                      </div>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground">{founder.name}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">{founder.role}</p>
                  </div>

                  {/* Bio */}
                  <div className="space-y-4 mb-6">
                    {founder.bio.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground text-sm leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4">
                    {founder.linkedin && (
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-primary" />
                      </a>
                    )}
                    {founder.twitter && (
                      <a
                        href={founder.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-primary" />
                      </a>
                    )}
                    {founder.email && (
                      <a
                        href={`mailto:${founder.email}`}
                        className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Mail className="h-5 w-5 text-primary" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30 dark:bg-muted/5">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
              What We Believe
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-background border border-primary/20 rounded-2xl p-6 h-full hover:border-primary/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-purple-600 dark:text-purple-400">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              Ready to Transform Your Culture?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join the organisations building leadership capability that compounds week after week.
            </p>
            <Button asChild className="px-8 py-6 h-auto text-base rounded-xl">
              <Link href="/#contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
