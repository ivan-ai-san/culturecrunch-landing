# Claude Code Prompt: Leadership Development ROI Calculator

## Project Overview
Build a standalone web page calculator that helps organizations estimate the ROI of implementing a systematic leadership development operating system (LeadershipOS). The calculator should be professional, research-backed, and convert prospects by demonstrating clear financial value.

## Technical Requirements

### Tech Stack
- **Frontend:** HTML5, vanilla JavaScript (ES6+)
- **Styling:** Tailwind CSS v4 (via @import 'tailwindcss')
  - Uses existing globals.css color system (OKLCH)
  - Includes tw-animate-css for animations
  - Custom properties already defined (--background, --foreground, etc.)
  - Dark mode support via `.dark` class
- **Charts:** Chart.js (via CDN)
- **Fonts:** Geist and Geist Mono (already loaded on site)
- **No backend required** - all calculations client-side
- **Mobile responsive** design using Tailwind breakpoints

### File Structure
```
/roi-calculator/
  index.html          # Main calculator page
  calculator.js       # All calculation logic and data
  styles.css         # Custom styles beyond Tailwind
  README.md          # Documentation
```

## Design Requirements

### Visual Style
**CRITICAL: Use the existing site's design system**

- **Color System:** OKLCH color space (already defined in globals.css)
  - Background: `oklch(1 0 0)` (white) / `oklch(0.145 0 0)` (dark mode)
  - Foreground/Text: `oklch(0.145 0 0)` (near black) / `oklch(0.985 0 0)` (dark mode)
  - Primary: `oklch(0.205 0 0)` (dark gray/black)
  - Accent for positive ROI: Use `--chart-1` through `--chart-5` variables
  - Success/Growth: `--chart-1: oklch(0.646 0.222 41.116)` (warm orange)
  - Trust/Stability: `--chart-2: oklch(0.6 0.118 184.704)` (teal)
  
- **Typography:** 
  - Sans: 'Geist', 'Geist Fallback'
  - Mono: 'Geist Mono' (for numbers, calculations)
  - Use Tailwind's font-sans and font-mono classes

- **Design Philosophy:**
  - Monochromatic with strategic color accents
  - Clean, minimal, sophisticated
  - Generous white space
  - Clear hierarchy through size/weight, not color
  - Dark mode support built-in

### Component Styling Guide

**Typography Classes:**
```html
<!-- Headings -->
<h1 class="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
<h2 class="text-3xl font-semibold text-foreground">
<h3 class="text-2xl font-medium text-foreground">

<!-- Body text -->
<p class="text-base text-foreground leading-relaxed">
<p class="text-sm text-muted-foreground"> <!-- Secondary text -->

<!-- Numbers/Data -->
<span class="font-mono text-lg text-chart-1"> <!-- ROI figures -->
```

**Cards & Containers:**
```html
<div class="bg-card border border-border rounded-lg p-6 shadow-sm">
<div class="bg-muted/50 rounded-md p-4"> <!-- Subtle backgrounds -->
```

**Buttons:**
```html
<!-- Primary CTA -->
<button class="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">

<!-- Secondary action -->
<button class="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90">

<!-- Ghost/outline -->
<button class="border border-border text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent">
```

**Form Elements:**
```html
<!-- Text input -->
<input class="w-full bg-input border border-border rounded-md px-4 py-2 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">

<!-- Label -->
<label class="text-sm font-medium text-foreground mb-2 block">

<!-- Range slider -->
<input type="range" class="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-chart-1">
```

**Results Display:**
```html
<!-- Large ROI number -->
<div class="text-6xl font-bold font-mono text-chart-1">$1.05M</div>

<!-- Metric card -->
<div class="bg-card border border-border rounded-lg p-6">
  <div class="text-sm text-muted-foreground mb-1">Total ROI</div>
  <div class="text-3xl font-bold font-mono text-chart-1">7.8x</div>
  <div class="text-xs text-muted-foreground mt-1">Break-even: 4.2 months</div>
</div>

<!-- Table -->
<table class="w-full border-collapse">
  <thead class="border-b border-border">
    <tr>
      <th class="text-left py-3 text-sm font-medium text-muted-foreground">Category</th>
      <th class="text-right py-3 text-sm font-medium text-muted-foreground">Year 1</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-border">
    <tr>
      <td class="py-3 text-foreground">Turnover Reduction</td>
      <td class="py-3 text-right font-mono text-foreground">$285k</td>
    </tr>
  </tbody>
</table>
```

**Progress Indicators:**
```html
<!-- Step indicator -->
<div class="flex items-center gap-2">
  <div class="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">1</div>
  <div class="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium">2</div>
</div>

<!-- Progress bar -->
<div class="h-2 bg-muted rounded-full overflow-hidden">
  <div class="h-full bg-chart-1 transition-all" style="width: 33%"></div>
</div>
```

### Layout Sections (in order)

1. **Hero Section**
   - Compelling headline: "Calculate Your Leadership Development ROI"
   - Subheading: "See the real financial impact of building leadership as an operating system, not an event"
   - Trust indicator: "Based on peer-reviewed research across 100+ studies"

2. **Input Section (Calculator Form)**
   Create a multi-step form with progress indicator:
   
   **Step 1: Organization Basics**
   - Number of leaders/managers (slider: 10-500, default 50)
   - Average employees per leader (slider: 5-20, default 10)
   - Average annual salary (input: $40k-$200k, default $75k)
   - Industry (dropdown: Tech, Healthcare, Manufacturing, Professional Services, Other)
   
   **Step 2: Current State**
   - Annual turnover rate (slider: 5-30%, default 15%)
   - Average engagement score if known (1-5 scale, optional)
   - Current leadership development investment (input: $0-$500k, default $0)
   
   **Step 3: Investment Parameters**
   - Program duration (dropdown: 6 months, 12 months, 18 months - default 12)
   - Investment level (slider: $100k-$200k, default $150k)
   - Implementation approach (radio: Full rollout, Pilot program)
   
   Each step should:
   - Show only relevant fields
   - Have "Next" and "Back" buttons
   - Display progress (e.g., "Step 2 of 3")
   - Include helpful tooltips (ⓘ icons) with research context

3. **Results Dashboard**
   Appears after form completion with smooth scroll:
   
   **Summary Cards (4 across)**
   - Total ROI (large, prominent - e.g., "$1.2M over 12 months")
   - ROI Multiple (e.g., "7.8x return")
   - Break-even timeline (e.g., "4.2 months")
   - Annual benefit (e.g., "$945k/year")
   
   **Benefit Breakdown (Stacked Bar Chart)**
   Show contribution from each category:
   - Turnover reduction (25-40% improvement)
   - Productivity gains (10% improvement)
   - Engagement improvement (7-23% improvement converting to reduced presenteeism)
   - Error reduction (industry-specific)
   - Time savings from better communication
   
   **Timeline Visualization (Line Chart)**
   - X-axis: Months (0-24)
   - Y-axis: Cumulative value
   - Two lines:
     1. Cumulative investment (including opportunity cost)
     2. Cumulative benefits
   - Show break-even point clearly
   - Shade area between lines after break-even
   
   **Detailed Breakdown (Expandable Table)**
   ```
   Benefit Category | Year 1 | Year 2 | 3-Year Total | Research Basis
   ----------------------------------------------------------------
   Reduced Turnover | $285k  | $342k  | $1.1M       | 25-40% reduction
   Productivity     | $187k  | $187k  | $561k       | 10% increase
   Engagement       | $94k   | $113k  | $328k       | 7-23% improvement
   Error Reduction  | $47k   | $56k   | $164k       | Healthcare: Jeyaraman 2018
   Communication    | $71k   | $85k   | $246k       | Time savings
   ----------------------------------------------------------------
   Total Benefits   | $684k  | $783k  | $2.4M
   Total Investment | $150k  | $30k   | $210k       | Includes maintenance
   Net ROI          | $534k  | $753k  | $2.19M
   ROI Multiple     | 4.6x   | 26.1x  | 10.4x
   ```

4. **Assumptions & Methodology**
   Expandable section with:
   - Clear explanation of each calculation
   - Conservative vs. typical vs. optimistic ranges
   - Link to full methodology document
   - Confidence intervals where applicable
   - Research citations (hyperlinked)

5. **Call to Action Section**
   - Primary CTA: "Schedule ROI Discussion" (button)
   - Secondary CTA: "Download Full Methodology" (PDF)
   - Trust builders:
     - "Join 150+ organizations building leadership systems"
     - Logos of research institutions (if applicable)
     - "100% of pilot programs achieve >3x ROI"

6. **FAQ Section**
   Common questions:
   - How accurate is this calculator?
   - What's included in the investment?
   - How long until we see results?
   - What if our situation is unique?
   - Is this better than traditional training?

## Calculation Logic

### Core Formula
```javascript
const calculateROI = (inputs) => {
  // Extract inputs
  const {
    numLeaders,
    reportsPerLeader,
    avgSalary,
    turnoverRate,
    engagementScore,
    industry,
    programDuration,
    investmentAmount,
    implementationType
  } = inputs;

  // Derived metrics
  const totalEmployees = numLeaders * reportsPerLeader;
  const totalCompensation = totalEmployees * avgSalary;
  
  // Research-based improvement factors (conservative)
  const turnoverReduction = 0.25; // 25% (conservative end of 25-40%)
  const productivityGain = 0.10; // 10%
  const engagementGain = 0.07; // 7% (conservative end of 7-23%)
  
  // Calculate benefit categories
  const benefits = {
    turnover: calculateTurnoverSavings(),
    productivity: calculateProductivityGains(),
    engagement: calculateEngagementImpact(),
    errorReduction: calculateErrorReduction(),
    timeSavings: calculateTimeSavings()
  };
  
  // Calculate costs
  const costs = {
    program: investmentAmount,
    opportunity: investmentAmount * 0.05, // 5% opportunity cost
    maintenance: investmentAmount * 0.20 * (programDuration / 12) // 20% annual
  };
  
  return {
    totalBenefits: Object.values(benefits).reduce((a,b) => a+b, 0),
    totalCosts: Object.values(costs).reduce((a,b) => a+b, 0),
    netROI: totalBenefits - totalCosts,
    roiMultiple: totalBenefits / totalCosts,
    breakEvenMonths: calculateBreakEven(),
    yearlyBreakdown: calculateYearlyBreakdown()
  };
};
```

### Specific Calculations

**1. Turnover Savings**
```javascript
// Cost per departure = 50-200% of salary (use 100% as middle)
const costPerDeparture = avgSalary * 1.0;

// Expected departures without intervention
const currentDepartures = totalEmployees * (turnoverRate / 100);

// Departures with intervention (25% reduction)
const newDepartures = currentDepartures * (1 - turnoverReduction);

// Annual savings
const turnoverSavings = (currentDepartures - newDepartures) * costPerDeparture;
```

**2. Productivity Gains**
```javascript
// 10% productivity improvement on total compensation
// Assumes 43-45% of actions are habitual (Wood & Rünger 2016)
// Better leadership = better habits = higher productivity

const productivityValue = totalCompensation * productivityGain;

// Ramp-up: 0% month 1, 50% month 3, 100% month 6
const rampUpFactor = calculateRampUp(month);
const monthlyProductivityGain = (productivityValue / 12) * rampUpFactor;
```

**3. Engagement Impact**
```javascript
// Engagement improvement reduces presenteeism
// Low engagement = 37% lost productivity time (Gallup)
// 7% engagement improvement = 2.6% productivity recovery

const presenteeismCost = totalCompensation * 0.37;
const engagementImprovement = 0.07; // 7%
const presenteeismReduction = presenteeismCost * engagementImprovement;
```

**4. Error Reduction (Industry-Specific)**
```javascript
const errorRates = {
  healthcare: 0.05, // 5% of costs to errors (Jeyaraman 2018)
  manufacturing: 0.08, // 8% quality costs
  tech: 0.03, // 3% bug/rework costs
  professional_services: 0.04,
  other: 0.04
};

const errorCost = totalCompensation * errorRates[industry];
const leadershipImpact = 0.15; // 15% of errors leader-influenced
const errorReduction = errorCost * leadershipImpact;
```

**5. Time Savings**
```javascript
// Better communication via O.O.R.A. methodology
// Average manager spends 25% time on communication issues
// 30% improvement = 7.5% time saved

const managerCompensation = numLeaders * avgSalary;
const communicationTime = 0.25;
const improvementFactor = 0.30;
const timeSavings = managerCompensation * communicationTime * improvementFactor;
```

### Confidence Intervals
Provide ranges based on research:
- **Conservative:** Use low end of research ranges (3x ROI)
- **Typical:** Use median research findings (7x ROI)
- **Optimistic:** Use high end with caveats (11x ROI)

Display the typical case by default with option to toggle views.

### Break-Even Calculation
```javascript
const calculateBreakEven = () => {
  let cumulativeBenefits = 0;
  let cumulativeCosts = investmentAmount;
  
  for (let month = 1; month <= 24; month++) {
    cumulativeBenefits += calculateMonthlyBenefits(month);
    
    if (cumulativeBenefits >= cumulativeCosts) {
      return month;
    }
  }
  
  return 24; // Max display period
};
```

## Interactive Features

1. **Real-time Updates**
   - Calculations update as user adjusts sliders
   - Smooth animations (not jarring recalculations)
   - Debounce inputs (300ms) to avoid excessive calculations

2. **Scenario Comparison**
   - "Save Scenario" button to store up to 3 scenarios
   - Side-by-side comparison view
   - "Reset to Defaults" option

3. **Export Options**
   - "Download PDF Report" (use jsPDF library)
   - "Email Results" (opens mailto with summary)
   - "Share Link" (encode parameters in URL)

4. **Tooltips & Help**
   - Hover tooltips on all inputs explaining what they mean
   - "Why this matters" context boxes
   - Research citation popups with proper APA format

5. **Data Validation**
   - Reasonable range limits on all inputs
   - Warning if inputs seem unusual (e.g., turnover >40%)
   - Helpful error messages

## Accessibility Requirements

- WCAG 2.1 AA compliant
- Keyboard navigation throughout
- Screen reader friendly with proper ARIA labels
- Color contrast ratios >4.5:1
- Focus indicators clearly visible
- Alternative text for charts

## Performance Requirements

- Page load <2 seconds
- Calculations complete <100ms
- Smooth 60fps animations
- Works on mobile devices (responsive breakpoints: 640px, 768px, 1024px)
- Graceful degradation if JavaScript disabled (show message to enable)

## Analytics Events to Track
(If implementing analytics)

```javascript
// Track these user interactions:
- calculator_started
- step_completed (with step number)
- calculation_completed (with ROI multiple)
- pdf_downloaded
- cta_clicked
- scenario_saved
- methodology_viewed
```

## Content Requirements

### Microcopy
- Keep labels short and clear
- Use active voice
- Avoid jargon (or define it)
- Be specific about what each input means

### Research Citations Format
When showing research basis:
```
Format: "Author (Year): Brief finding"
Example: "Lally et al. (2010): 66-day habit formation median"
Link to: Full reference in methodology document
```

### Validation Messages
- Positive reinforcement: "Great! These numbers are typical for your industry"
- Gentle corrections: "Turnover rate seems high - is this annual or monthly?"
- Helpful context: "Most organizations see 5-7x ROI with these parameters"

## Testing Checklist

Before completion, verify:
- [ ] All calculations match methodology document
- [ ] Charts render correctly on mobile
- [ ] Form validation catches edge cases
- [ ] Tooltips display correctly
- [ ] PDF export includes all data
- [ ] Links work and open appropriately
- [ ] Loading states display (if needed)
- [ ] Error states handle gracefully
- [ ] Accessible via keyboard only
- [ ] Screen reader announces key information
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Works on iOS and Android

## SEO & Meta Tags

```html
<title>Leadership Development ROI Calculator | LeadershipOS</title>
<meta name="description" content="Calculate the financial return of implementing systematic leadership development. Based on 100+ peer-reviewed studies. Average 7x ROI.">
<meta property="og:title" content="Leadership Development ROI Calculator">
<meta property="og:description" content="Discover your organization's potential ROI from evidence-based leadership development">
<meta property="og:image" content="/images/roi-calculator-preview.png">
```

## Code Quality Standards

- ES6+ JavaScript (no jQuery)
- Commented functions explaining calculation logic
- DRY principles (no repeated code)
- Separated concerns (logic, display, data)
- Consistent naming conventions (camelCase for JS, kebab-case for CSS)
- Error handling for all calculations
- Console logging for debugging (removable in production)

## Example Output Format

When a user with these inputs:
- 50 leaders
- 10 reports each (500 employees)
- $75k average salary
- 15% turnover
- Tech industry
- $150k investment
- 12-month program

Should see results approximately:
- **Total ROI:** $1.05M over 12 months
- **ROI Multiple:** 7.0x
- **Break-even:** 4.3 months
- **Annual benefit:** $945k/year

With breakdown:
- Turnover reduction: $337k (36%)
- Productivity gains: $375k (40%)
- Engagement improvement: $140k (15%)
- Error reduction: $47k (5%)
- Time savings: $46k (4%)

## Deployment Notes

- Host on `/roi-calculator` path
- Set up analytics tracking
- A/B test variations of CTAs
- Monitor completion rate
- Track conversion from calculator to scheduling calls

## Future Enhancements (Phase 2)
- Industry benchmarking data
- Save and retrieve calculations (requires backend)
- Email drip campaign for calculator users
- Integration with CRM
- Advanced scenarios (mergers, rapid growth, etc.)
- Comparison with event-based training costs

---

## Build Instructions

1. Start with semantic HTML structure
2. Style with Tailwind + custom CSS
3. Implement calculator logic with comprehensive comments
4. Add Chart.js visualizations
5. Implement interactivity (sliders, forms, exports)
6. Add accessibility features
7. Test thoroughly across devices/browsers
8. Optimize for performance
9. Add analytics tracking
10. Document deployment process

## Questions to Ask Before Starting

1. Do you have brand colors to use instead of the suggested palette?
2. Is there a specific CTA (phone number, booking link) to use?
3. Do you want the methodology PDF pre-generated or dynamically created?
4. Should the calculator require email capture before showing results?
5. Any specific compliance/legal disclaimers needed?
6. Should results be optimistic, conservative, or balanced by default?

Build this as a production-ready, professional tool that establishes credibility and drives conversions while being transparent about research basis and assumptions.
