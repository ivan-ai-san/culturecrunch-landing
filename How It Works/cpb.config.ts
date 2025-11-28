import type { IndustryConfig } from '../types';

/**
 * CPB Segment Configuration - Construction Engineering Industry Focus
 *
 * This file contains all content for the CPB sublanding page with construction engineering industry messaging.
 * Integrates research from construction-landing-page-strategy.md
 */

export const cpbConfig: IndustryConfig = {
  // ===========================================================================
  // Meta Information
  // ===========================================================================

  slug: 'cpb',
  displayName: 'Construction Engineering Leadership',
  shortName: 'CPB',

  // ===========================================================================
  // SEO
  // ===========================================================================

  metaTitle: 'Construction Engineering Leadership ROI: Evidence-Based Solutions for Australia\'s Triple Crisis | Culture Crunch',
  metaDescription: 'The Culture Operating System',
  keywords: [
    'construction engineering leadership development',
    'construction engineering project management',
    'reduce construction engineering rework',
    'construction engineering workforce retention',
    'psychosocial safety construction engineering',
    'construction engineering productivity',
    'construction engineering leadership ROI',
  ],

  // ===========================================================================
  // Vision Section (UNCHANGED per user request)
  // ===========================================================================

  vision: {
    headline: 'Australia\'s Construction Sector Is Under Enormous Pressure',
    subheadline: 'Embedding accountable leadership at scale for CPB contractors',
    heroMessage: 'A 9% productivity decline, 86% of projects delayed, and rising mental health claims are costing $10–30 million per project - proof that culture, wellbeing, and leadership performance are inseparable.',
    ctaText: 'Calculate Your Project\'s Hidden Costs',
    ctaLink: '#roi',
    backgroundStyle: {
      gradient: 'corporate-gradient',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    },
    stats: [
      {
        label: 'Productivity Decline',
        value: '9%',
        description: 'Collapse since 2018 - need 9% more labour for same output',
        icon: 'TrendingDown',
      },
      {
        label: 'Rework Cost',
        value: '5-9%',
        description: 'Of total project value, 48% from miscommunication',
        icon: 'RefreshCw',
      },
      {
        label: 'Worker Suicides',
        value: '190/year',
        description: 'One every two days, 2x rate of other workers',
        icon: 'Heart',
      },
      {
        label: 'Psychological Claims',
        value: '$288.5K',
        description: 'Average cost, up 97% since 2019',
        icon: 'Brain',
      },
      {
        label: 'Workforce Shortage',
        value: '50,000',
        description: 'Queensland peak shortfall by 2026-27',
        icon: 'Users',
      },
      {
        label: 'Turnover Cost',
        value: '$120-300K',
        description: 'Per key employee replacement',
        icon: 'DollarSign',
      },
      {
        label: 'Schedule Delays',
        value: '$10-25K/day',
        description: 'Typical liquidated damages on $50M projects',
        icon: 'Clock',
      },
      {
        label: 'Project Overruns',
        value: '86%',
        description: 'Of major transport projects exceed budget/schedule',
        icon: 'AlertCircle',
      },
    ],
  },

  // ===========================================================================
  // Problem Section
  // Contains: 1) $10M Question  2) Why 70% Fail  3) Hidden Costs
  // ===========================================================================

  problem: {
    mainIssue: 'The $30 Million Question: Why 70% of Culture Transformation Efforts Fail',
    description: 'Australia\'s construction and engineering giants face a triple crisis—productivity collapse, workforce attrition, and execution drift—creating $10–30 million in avoidable losses per project. Most leadership programs fail because they treat culture as a workshop, not as a performance system. The difference between failure and ROI lies in how leadership is operationalised every week on site.',
    impactStatement: '',

    statistics: [
      {
        label: 'Productivity Decline',
        value: '9%',
        description: 'Collapse since 2018 - need 9% more labour for same output',
        trend: 'up',
      },
      {
        label: 'Rework Cost',
        value: '5-9%',
        description: 'Of total project value, 48% from miscommunication',
      },
      {
        label: 'Worker Suicides',
        value: '190/year',
        description: 'One every two days, 2x rate of other workers',
        trend: 'up',
      },
      {
        label: 'Psychological Claims',
        value: '$288.5K',
        description: 'Average cost, up 97% since 2019',
        trend: 'up',
      },
      {
        label: 'Workforce Shortage',
        value: '50,000',
        description: 'Queensland peak shortfall by 2026-27',
        trend: 'up',
      },
      {
        label: 'Turnover Cost',
        value: '$120-300K',
        description: 'Per key employee replacement',
      },
      {
        label: 'Schedule Delays',
        value: '$10-25K/day',
        description: 'Typical liquidated damages on $50M projects',
      },
      {
        label: 'Project Overruns',
        value: '86%',
        description: 'Of major transport projects exceed budget/schedule',
        trend: 'up',
      },
    ],

    painPoints: [
      {
        title: 'Superficial Change Doesn\'t Stick',
        description: 'Many programs teach new behaviours but skip the mindset shift. Real change takes discomfort, repetition, and practice inside the work. Without that, it fades fast — and fatigue sets in.',
        severity: 'critical',
      },
      {
        title: 'Programs Detached from Real Work',
        description: 'Too many programs run off-site, once, and are quickly forgotten. People remember 10 % of what they hear but 66 % of what they do. When learning isn\'t tied to live project work, it feels like "not real work."',
        severity: 'critical',
      },
      {
        title: 'Generic Training Misses Construction Reality',
        description: 'Most programs push "delegation" and "empowerment" without grasping construction\'s project-based, high-pressure world—creating time-pressure pushback and a sense it\'s not "real work."',
        severity: 'high',
      },
      {
        title: 'Compliance Programs Tick Boxes, Not Change Performance',
        description: 'Policies and EAPs react after harm instead of preventing it through leadership. Psychological claims keep rising even as compliance programs multiply—proof that documentation isn\'t culture. The result: reactive responses, no prevention, higher cost.',
        severity: 'high',
      },
    ],

    charts: [
      {
        type: 'area',
        title: 'The Vicious Cycle: Triple Crisis Amplification',
        data: [
          { label: 'Productivity Decline', value: 5, color: '#6366f1' },
          { label: 'Increased Rework', value: 7, color: '#6366f1' },
          { label: 'Schedule Delays', value: 9, color: '#8b5cf6' },
          { label: 'Workforce Stress', value: 10, color: '#8b5cf6' },
          { label: 'More Departures', value: 8, color: '#6366f1' },
        ],
      },
    ],
  },

  // ===========================================================================
  // Why Now Section
  // Contains: 1) Convergence Crisis  2) What Works  3) Decision Before You
  // ===========================================================================

  whyNow: {
    headline: 'Why Now: The Convergence Crisis',
    description: 'Four simultaneous drivers converge with the 2025-2027 Olympics window, creating both urgent need and unprecedented opportunity for evidence-based leadership intervention.',
    urgencyStatement: 'The convergence of workforce shortages, productivity decline, psychosocial regulations, and Olympics talent competition creates a narrow window for intervention before costs escalate dramatically.',

    regulatoryDrivers: [
      {
        title: 'Psychosocial Safety Requirements',
        description: 'New WHS psychosocial safety regulations effective April 2023 make leadership a legal obligation. Organisations must identify, assess, and control 17 specific psychosocial hazards proactively.',
        effectiveDate: '2023-04-01',
        penaltyAmount: 'Escalating test cases',
        source: 'Safe Work Australia',
      },
      {
        title: 'Client Procurement Evolution',
        description: 'Major clients now requiring evidence beyond "we have an EAP" - demanding demonstrated culture leadership and measurable psychosocial safety programs.',
        source: 'Infrastructure Australia',
      },
    ],

    marketForces: [
      {
        title: 'Olympics Talent War (2025-2027)',
        description: 'Peak 50,000-worker shortfall by 2026-27. Proactive retention ($50K per employee) vs Reactive replacement ($120-300K). Learning window closing before Olympics peak demand.',
        impact: 'high',
        timeline: '2025-2027',
      },
      {
        title: 'Productivity Crisis Deepening',
        description: '9% productivity decline since 2018 means 77,000 fewer dwellings built. Every delayed project amplifies costs - 4% rework difference equals $2M on $50M project.',
        impact: 'high',
        timeline: 'Current',
      },
    ],

    timeline: [
      {
        date: '2025',
        event: 'Critical intervention window opens',
        importance: 'high',
      },
      {
        date: '2026-2027',
        event: 'Olympics peak talent war - 50,000 worker shortfall',
        importance: 'critical',
      },
      {
        date: '2027+',
        event: 'Window closes - exponentially higher costs',
        importance: 'critical',
      },
    ],
  },

  // ===========================================================================
  // Solution Section
  // ===========================================================================

  solution: {
    headline: 'A 6-Week Program That Installs The Accountable Leadership Operating System',
    tagline: '',
    description: 'Transform CPB teams with accountable conversations, clear decisions, and repeatable leadership habits that lift performance, reduce turnover, and protect project margin.',

    valuePropositions: [
      {
        title: 'Turnover Reduction',
        description: 'Achieve up to 25% lower staff turnover by building leadership routines that identify pressure early, sustain recognition, and keep high performers engaged on site.',
        metric: {
          value: '25%',
          label: 'Turnover Reduction',
        },
        impact: 'Retention = stability = delivery continuity.',
      },
      {
        title: 'Engagement Lift',
        description: 'Drive a 30% increase in engagement scores through consistent clarity, feedback, and recognition cycles that strengthen trust and performance ownership.',
        metric: {
          value: '30%',
          label: 'Engagement Increase',
        },
        impact: 'More energy, better collaboration, faster execution.',
      },
      {
        title: 'Claims Reduction',
        description: 'Reduce total workplace claims—both physical and psychological—by up to 40% through clear decision pathways, accountability loops, and proactive communication.',
        metric: {
          value: '40%',
          label: 'Claims Reduction',
        },
        impact: 'Fewer incidents, fewer disputes, lower insurance cost.',
      },
    ],

    features: [
      {
        title: 'Accountable Conversations',
        description: 'Where leadership talk turns into results.',
        benefits: [
          'Clear decisions, finished actions, visible accountability',
          'Structured dialogue for clarity and speed',
          'Action tracking for follow-through',
          'Team routines for ownership and results',
        ],
      },
      {
        title: 'Improved Team Rhythm',
        description: 'Micro-practices remove friction and build momentum.',
        benefits: [
          '60-second weekly pulse for real-time insight',
          'Monday brief to align and prioritise',
          'Recognition routines that sustain energy and accountability',
        ],
      },
      {
        title: 'Dashboard Visibility',
        description: 'See what drives performance in real time.',
        benefits: [
          'Live team health metrics at a glance',
          '6-week trend insights on trust, workload, and recognition',
          'Audit-ready trail for compliance and leadership reporting',
        ],
      },
    ],

    differentiators: [
      'Only 30 minutes per week from the leader / leadership team',
      'Tier One Construction Firm regulatory compliance alignment',
      'Privacy by minimalism – team level data only',
      'Proven 6-week transformation program',
    ],

    corePromise: 'From Low to High Accountability in 6 Weeks',
  },

  // ===========================================================================
  // How It Works Section
  // ===========================================================================

  howItWorks: {
    headline: 'How It Works',
    description: 'A focused 6-week program that builds and installs lasting Accountable Leadership habits. Leaders are trained in Accountable Conversations, define Red and Green Zone behaviours, with their team and commit to applying the practices before launch. They then operate within the Weekly Performance Loop—brief, check-in, action, review—throughout the pilot. Optional LGP360 feedback and coaching accelerate insight and sustain performance.',
    timeCommitment: '30 minutes per week',
    cadence: 'Weekly',

    weeklyWorkflow: [
      {
        step: 1,
        title: 'Baselines',
        description: 'Baselines (Triple Goal survey, pulse) and priorities agreed with the leadership team',
        duration: 'Week 1',
      },
      {
        step: 2,
        title: 'Mindset Installation',
        description: 'Install the mindset for safe, accountable dialogue; dashboard finalised; optional Organisational Network Analysis.',
        duration: 'Week 2',
      },
      {
        step: 3,
        title: 'Skillset Installation + First Sprint',
        description: 'First Weekly Brief 7 a.m. Monday; first Team Check-In; one micro-practice; tracking on.',
        duration: 'Week 3',
      },
      {
        step: 4,
        title: 'Momentum',
        description: 'Momentum; LGP360 debrief; ongoing loop; live shifts visible.',
        duration: 'Week 4',
      },
      {
        step: 5,
        title: 'Team Review',
        description: 'Team Review; confirm One Big Practice; behavioural impact logged.',
        duration: 'Week 5',
      },
      {
        step: 6,
        title: 'Impact & Transition',
        description: 'Impact Report plus compliance pack aligned to WHS and Aged Care Quality Standards; transition to a 12-month sustain licence.',
        duration: 'Week 6',
      },
    ],
  },

  // ===========================================================================
  // ROI Calculator Section
  // "The Hidden Costs of Leadership Failure"
  // ===========================================================================

  roiCalculator: {
    headline: 'The Hidden Costs of Leadership Failure',
    description: 'Every delayed project amplifies costs while the window to act narrows. Calculate your project\'s avoidable leadership costs with conservative modelling for a $50 million project.',
    industryContext: 'Based on Construction Engineering Industry Institute research and Australian construction engineering sector data',

    inputs: [
      {
        id: 'projectValue',
        label: 'Project Value',
        description: 'Total project value in millions',
        defaultValue: 50,
        min: 10,
        max: 500,
        step: 10,
        unit: 'M',
        prefix: '$',
        suffix: 'M',
      },
      {
        id: 'duration',
        label: 'Duration',
        description: 'Project duration in months',
        defaultValue: 24,
        min: 6,
        max: 60,
        step: 3,
        unit: 'months',
        suffix: ' months',
      },
      {
        id: 'teamSize',
        label: 'Team Size',
        description: 'Total project team size',
        defaultValue: 200,
        min: 50,
        max: 500,
        step: 25,
        unit: 'people',
        suffix: ' people',
      },
    ],

    calculations: [
      {
        id: 'reworkCost',
        label: 'Rework Cost (9% vs 5%)',
        formula: (inputs) => inputs.projectValue * 0.04, // 4% difference
        format: 'currency',
        description: '$2M on $50M project',
      },
      {
        id: 'delayCost',
        label: 'Schedule Delays (30% vs 15%)',
        formula: (inputs) => (inputs.duration * 30 * 0.15 * 15) / 1000, // 15% of days * $15K/day
        format: 'currency',
        description: 'Liquidated damages and extended costs',
      },
      {
        id: 'turnoverCost',
        label: 'Turnover (10 vs 5 key employees)',
        formula: () => 5 * 0.2, // 5 employees * $200K average
        format: 'currency',
        description: 'Key employee replacement costs',
      },
      {
        id: 'claimsCost',
        label: 'Psychological Claims (6 vs 3)',
        formula: () => 3 * 0.15, // 3 claims * $150K average
        format: 'currency',
        description: 'Mental health claim costs',
      },
      {
        id: 'totalAvoidable',
        label: 'Total Avoidable Costs',
        formula: (inputs) => {
          const rework = inputs.projectValue * 0.04;
          const delays = (inputs.duration * 30 * 0.15 * 15) / 1000;
          const turnover = 5 * 0.2;
          const claims = 3 * 0.15;
          return rework + delays + turnover + claims;
        },
        format: 'currency',
        description: 'Conservative total of leadership failure costs',
      },
    ],

    impactAreas: [
      {
        title: 'Rework Reduction',
        description: 'Reduce rework from 9% to 5% through error management culture',
        baselineFormula: (inputs) => inputs.projectValue * 0.09,
        improvedFormula: (inputs) => inputs.projectValue * 0.05,
        improvementPercentage: 44,
      },
      {
        title: 'Schedule Performance',
        description: 'Reduce delays from 30% to 15% through decision velocity protocols',
        baselineFormula: (inputs) => inputs.duration * 0.30,
        improvedFormula: (inputs) => inputs.duration * 0.15,
        improvementPercentage: 50,
      },
      {
        title: 'Workforce Retention',
        description: 'Reduce key employee turnover by 50% through systematic recognition',
        baselineFormula: () => 10,
        improvedFormula: () => 5,
        improvementPercentage: 50,
      },
    ],

    assumptions: [
      'Rework costs based on Construction Industry Institute benchmarks (5-9% of project value)',
      'Replacement costs: $120-300K per key employee (industry research)',
      'Psychological claims: $288.5K average (NSW Workers Comp 2024)',
      'Schedule delays: $10-25K per day liquidated damages (typical $50M project)',
      'Leadership intervention investment: $0.5-1M total',
      'Expected ROI: 10-20x based on evidence from 13 studies, 7,220 participants',
    ],

    sources: [
      {
        title: 'Construction Industry Institute',
        description: 'Rework cost benchmarks and miscommunication impacts',
      },
      {
        title: 'Safe Work Australia 2023',
        description: 'Construction worker mental health and suicide data',
      },
      {
        title: 'Infrastructure Australia',
        description: 'Workforce shortage projections and project performance data',
      },
      {
        title: 'Meta-analysis (13 studies, 7,220 participants)',
        description: 'Safety-focused transformational leadership impact',
      },
    ],
  },

  // ===========================================================================
  // Accountable Conversations (Methodology Section)
  // ===========================================================================

  accountableConversations: {
    headline: 'Accountable Conversations',
    description: 'Building Psych Safety Through Human Dialogue',
    framework: {
      name: 'O.O.R.A. Framework',
      description: 'While the Culture Crunch system installs weekly structure and insight, Accountable Conversations build the human capability beneath it. This high-EQ leadership model trains leaders to communicate with clarity, care, and courage – creating alignment without blame, and connection without avoidance. It\'s a universal conversational practice that strengthens performance, trust, and psychological safety across every level of work. It\'s the backbone of the Culture Crunch system.',
      source: 'Culture Crunch Methodology',
    },
    benefits: [
      'Every accountable conversation begins with intention—not correction. Leaders pause to self-regulate, check their motives, and centre on values before they speak.',
      'A simple, high-trust structure keeps conversations clean and accountable: Always ask yourself: "What\'s My Part In This", then "Is there an unmet need in the other I can acknowledge". Start the conversation here.',
      'Evidenced based emotionally intelligent leadership models driving Accountable Conversations',
      'In aged care and other human-centred settings, Accountable Conversations protect dignity, restore trust, and keep people connected to purpose.',
    ],
    process: [
      'The Mindset: Installing the Right Mindset for Accountable Conversations',
      'The Skillset: O.O.R.A. in Action',
      'The Theory',
      'In Practice',
    ],
  },

  // ===========================================================================
  // Brand Customization
  // ===========================================================================

  brandColor: '#FF6B35', // Safety Orange
  accentColor: '#2C3E50', // Steel Blue
};

export default cpbConfig;
