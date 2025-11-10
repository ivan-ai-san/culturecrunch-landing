/**
 * ROI Calculator Calculation Engine
 * Based on peer-reviewed research methodology
 * See roi_methodology_document.md for complete research citations
 */

export interface ROIInputs {
  numLeaders: number
  reportsPerLeader: number
  avgSalary: number
  industry: string
  turnoverRate: number
  currentInvestment: number
  engagementScore: number
  programDuration: number
  investmentAmount: number
  implementationType: string
}

export interface BenefitBreakdown {
  turnover: number
  productivity: number
  engagement: number
  errorReduction: number
  timeSavings: number
}

export interface YearlyBreakdown {
  year: number
  benefits: BenefitBreakdown
  totalBenefits: number
  costs: number
  netROI: number
  roiMultiple: number
}

export interface ROIResults {
  inputs: ROIInputs
  totalEmployees: number
  totalCompensation: number

  // Summary metrics
  year1NetROI: number
  year1Multiple: number
  year3NetROI: number
  year3Multiple: number
  breakEvenMonths: number

  // Detailed breakdowns
  year1Breakdown: YearlyBreakdown
  year2Breakdown: YearlyBreakdown
  year3Breakdown: YearlyBreakdown

  // Monthly timeline for charts
  monthlyTimeline: Array<{
    month: number
    cumulativeBenefits: number
    cumulativeCosts: number
    netPosition: number
  }>
}

/**
 * Industry-specific error rates (% of total compensation)
 * Based on research cited in methodology document
 */
const INDUSTRY_ERROR_RATES: Record<string, number> = {
  healthcare: 0.05,      // 5% - Jeyaraman et al. 2018
  manufacturing: 0.08,    // 8% - Quality management literature
  tech: 0.03,            // 3% - Bug/rework costs
  professional_services: 0.04,
  finance: 0.06,
  other: 0.04
}

/**
 * Calculate turnover savings
 * Research: 25-40% reduction (Deloitte 2023, ICF, Zenger Folkman)
 * Using conservative 25%
 */
function calculateTurnoverSavings(
  totalEmployees: number,
  avgSalary: number,
  turnoverRate: number,
  rampUpFactor: number
): number {
  // Cost per departure = 100% of salary (SHRM median estimate)
  const costPerDeparture = avgSalary * 1.0

  // Current annual departures
  const currentDepartures = totalEmployees * (turnoverRate / 100)

  // 25% reduction (conservative end of 25-40% range)
  const turnoverReduction = 0.25
  const newDepartures = currentDepartures * (1 - turnoverReduction)

  // Annual savings at full implementation
  const fullYearSavings = (currentDepartures - newDepartures) * costPerDeparture

  // Apply ramp-up factor
  return fullYearSavings * rampUpFactor
}

/**
 * Calculate productivity gains
 * Research: 10% improvement (ICF, DDI)
 * Mechanism: Better habits, clearer goals, reduced friction
 */
function calculateProductivityGains(
  totalEmployees: number,
  avgSalary: number,
  rampUpFactor: number
): number {
  const totalCompensation = totalEmployees * avgSalary

  // 50% of work is productivity-sensitive (conservative estimate)
  const productivityFactor = 0.50
  const productivityPotential = totalCompensation * productivityFactor

  // 10% improvement with good leadership
  const improvementRate = 0.10
  const fullYearGains = productivityPotential * improvementRate

  return fullYearGains * rampUpFactor
}

/**
 * Calculate engagement improvements
 * Research: 7-23% improvement (Gallup, McKinsey, BCG)
 * Using conservative 7%
 * Mechanism: Engagement reduces presenteeism (37% lost time)
 */
function calculateEngagementImpact(
  totalEmployees: number,
  avgSalary: number,
  rampUpFactor: number
): number {
  const totalCompensation = totalEmployees * avgSalary

  // Low engagement = 37% lost productive time (Gallup)
  const presenteeismCost = totalCompensation * 0.37

  // 7% engagement improvement (conservative end of 7-23%)
  const engagementImprovement = 0.07
  const fullYearGains = presenteeismCost * engagementImprovement

  return fullYearGains * rampUpFactor
}

/**
 * Calculate error/quality reduction
 * Industry-specific, based on research
 */
function calculateErrorReduction(
  totalEmployees: number,
  avgSalary: number,
  industry: string,
  rampUpFactor: number
): number {
  const totalCompensation = totalEmployees * avgSalary

  // Industry-specific error rates
  const errorRate = INDUSTRY_ERROR_RATES[industry] || 0.04
  const errorCost = totalCompensation * errorRate

  // Leadership influences 15% of error variance (conservative)
  const leadershipImpact = 0.15
  const fullYearSavings = errorCost * leadershipImpact

  return fullYearSavings * rampUpFactor
}

/**
 * Calculate communication/time savings
 * Research: O.O.R.A. methodology 30% improvement
 * Managers spend 25% time on communication issues
 */
function calculateTimeSavings(
  numLeaders: number,
  avgSalary: number,
  rampUpFactor: number
): number {
  // Leaders earn 1.5x average salary (assumption)
  const leaderSalary = avgSalary * 1.5
  const managerCompensation = numLeaders * leaderSalary

  // 25% of time on communication issues
  const communicationTime = 0.25
  const communicationTimeCost = managerCompensation * communicationTime

  // 30% efficiency improvement with O.O.R.A.
  const improvementFactor = 0.30
  const fullYearSavings = communicationTimeCost * improvementFactor

  return fullYearSavings * rampUpFactor
}

/**
 * Calculate ramp-up factor based on month and benefit type
 * Based on habit formation research (Lally et al. 2010 - 66 day median)
 */
function getRampUpFactor(month: number, benefitType: string): number {
  // Different ramp-up schedules by benefit type
  switch (benefitType) {
    case 'turnover':
      // Slowest - requires sustained behavior change
      if (month <= 3) return 0
      if (month <= 6) return 0.25
      if (month <= 9) return 0.50
      if (month <= 12) return 0.75
      return 1.0

    case 'productivity':
      // Moderate speed
      if (month <= 3) return 0
      if (month <= 6) return 0.25
      if (month <= 9) return 0.50
      if (month <= 12) return 0.75
      return 1.0

    case 'engagement':
      // Fastest - immediate morale boost
      if (month <= 2) return 0.10
      if (month <= 4) return 0.30
      if (month <= 6) return 0.50
      if (month <= 9) return 0.75
      if (month <= 12) return 0.90
      return 1.0

    case 'errorReduction':
      // Slowest - requires process changes
      if (month <= 6) return 0
      if (month <= 9) return 0.25
      if (month <= 12) return 0.50
      if (month <= 18) return 0.75
      return 1.0

    case 'timeSavings':
      // Moderate - skill building required
      if (month <= 3) return 0
      if (month <= 6) return 0.20
      if (month <= 9) return 0.40
      if (month <= 12) return 0.60
      if (month <= 15) return 0.80
      return 1.0

    default:
      return month <= 12 ? month / 12 : 1.0
  }
}

/**
 * Calculate average ramp-up for a year
 */
function getYearlyAverageRampUp(year: number, benefitType: string): number {
  if (year === 1) {
    // Average the monthly ramp-ups for year 1
    let total = 0
    for (let month = 1; month <= 12; month++) {
      total += getRampUpFactor(month, benefitType)
    }
    return total / 12
  } else if (year === 2) {
    // Year 2: moving towards full implementation
    return benefitType === 'errorReduction' ? 0.875 : 1.0
  } else {
    // Year 3+: full implementation
    return 1.0
  }
}

/**
 * Calculate costs for a given year
 */
function calculateYearlyCosts(year: number, investmentAmount: number): number {
  if (year === 1) {
    // Year 1: Full investment + 50% maintenance
    return investmentAmount + (investmentAmount * 0.20 * 0.5)
  } else if (year === 2) {
    // Year 2: Maintenance only (20% of initial)
    return investmentAmount * 0.20
  } else {
    // Year 3: Reduced maintenance (15% as system becomes self-sustaining)
    return investmentAmount * 0.15
  }
}

/**
 * Calculate benefits for a specific year
 */
function calculateYearlyBenefits(
  inputs: ROIInputs,
  year: number,
  totalEmployees: number,
  totalCompensation: number
): BenefitBreakdown {
  const {
    numLeaders,
    avgSalary,
    industry,
    turnoverRate
  } = inputs

  // Get average ramp-up factors for each benefit type for this year
  const turnoverRamp = getYearlyAverageRampUp(year, 'turnover')
  const productivityRamp = getYearlyAverageRampUp(year, 'productivity')
  const engagementRamp = getYearlyAverageRampUp(year, 'engagement')
  const errorRamp = getYearlyAverageRampUp(year, 'errorReduction')
  const timeRamp = getYearlyAverageRampUp(year, 'timeSavings')

  return {
    turnover: calculateTurnoverSavings(totalEmployees, avgSalary, turnoverRate, turnoverRamp),
    productivity: calculateProductivityGains(totalEmployees, avgSalary, productivityRamp),
    engagement: calculateEngagementImpact(totalEmployees, avgSalary, engagementRamp),
    errorReduction: calculateErrorReduction(totalEmployees, avgSalary, industry, errorRamp),
    timeSavings: calculateTimeSavings(numLeaders, avgSalary, timeRamp)
  }
}

/**
 * Calculate break-even point in months
 */
function calculateBreakEven(
  inputs: ROIInputs,
  totalEmployees: number,
  totalCompensation: number
): number {
  let cumulativeBenefits = 0
  let cumulativeCosts = inputs.investmentAmount

  for (let month = 1; month <= 24; month++) {
    // Calculate monthly benefits for each category
    const turnoverMonthly = calculateTurnoverSavings(
      totalEmployees,
      inputs.avgSalary,
      inputs.turnoverRate,
      getRampUpFactor(month, 'turnover')
    ) / 12

    const productivityMonthly = calculateProductivityGains(
      totalEmployees,
      inputs.avgSalary,
      getRampUpFactor(month, 'productivity')
    ) / 12

    const engagementMonthly = calculateEngagementImpact(
      totalEmployees,
      inputs.avgSalary,
      getRampUpFactor(month, 'engagement')
    ) / 12

    const errorMonthly = calculateErrorReduction(
      totalEmployees,
      inputs.avgSalary,
      inputs.industry,
      getRampUpFactor(month, 'errorReduction')
    ) / 12

    const timeMonthly = calculateTimeSavings(
      inputs.numLeaders,
      inputs.avgSalary,
      getRampUpFactor(month, 'timeSavings')
    ) / 12

    const monthlyBenefit = turnoverMonthly + productivityMonthly + engagementMonthly + errorMonthly + timeMonthly
    cumulativeBenefits += monthlyBenefit

    // Add monthly maintenance costs
    const monthlyCost = (inputs.investmentAmount * 0.20) / 12
    cumulativeCosts += monthlyCost

    if (cumulativeBenefits >= cumulativeCosts) {
      return month
    }
  }

  return 24 // Max display period
}

/**
 * Main calculation function
 */
export function calculateFullROI(inputs: ROIInputs): ROIResults {
  const totalEmployees = inputs.numLeaders * inputs.reportsPerLeader
  const totalCompensation = totalEmployees * inputs.avgSalary

  // Calculate benefits for each year
  const year1Benefits = calculateYearlyBenefits(inputs, 1, totalEmployees, totalCompensation)
  const year2Benefits = calculateYearlyBenefits(inputs, 2, totalEmployees, totalCompensation)
  const year3Benefits = calculateYearlyBenefits(inputs, 3, totalEmployees, totalCompensation)

  // Calculate costs for each year
  const year1Costs = calculateYearlyCosts(1, inputs.investmentAmount)
  const year2Costs = calculateYearlyCosts(2, inputs.investmentAmount)
  const year3Costs = calculateYearlyCosts(3, inputs.investmentAmount)

  // Aggregate totals
  const year1Total = Object.values(year1Benefits).reduce((a, b) => a + b, 0)
  const year2Total = Object.values(year2Benefits).reduce((a, b) => a + b, 0)
  const year3Total = Object.values(year3Benefits).reduce((a, b) => a + b, 0)

  // Calculate yearly breakdowns
  const year1Breakdown: YearlyBreakdown = {
    year: 1,
    benefits: year1Benefits,
    totalBenefits: year1Total,
    costs: year1Costs,
    netROI: year1Total - year1Costs,
    roiMultiple: year1Total / year1Costs
  }

  const year2Breakdown: YearlyBreakdown = {
    year: 2,
    benefits: year2Benefits,
    totalBenefits: year2Total,
    costs: year2Costs,
    netROI: year2Total - year2Costs,
    roiMultiple: year2Total / year2Costs
  }

  const year3Breakdown: YearlyBreakdown = {
    year: 3,
    benefits: year3Benefits,
    totalBenefits: year3Total,
    costs: year3Costs,
    netROI: year3Total - year3Costs,
    roiMultiple: year3Total / year3Costs
  }

  // 3-year totals
  const total3YearBenefits = year1Total + year2Total + year3Total
  const total3YearCosts = year1Costs + year2Costs + year3Costs
  const year3NetROI = total3YearBenefits - total3YearCosts
  const year3Multiple = total3YearBenefits / total3YearCosts

  // Calculate monthly timeline for charts
  const monthlyTimeline = []
  let cumulativeBenefits = 0
  let cumulativeCosts = inputs.investmentAmount

  for (let month = 1; month <= 36; month++) {
    // Monthly benefit calculation
    const monthlyBenefit =
      (calculateTurnoverSavings(totalEmployees, inputs.avgSalary, inputs.turnoverRate, getRampUpFactor(month, 'turnover')) / 12) +
      (calculateProductivityGains(totalEmployees, inputs.avgSalary, getRampUpFactor(month, 'productivity')) / 12) +
      (calculateEngagementImpact(totalEmployees, inputs.avgSalary, getRampUpFactor(month, 'engagement')) / 12) +
      (calculateErrorReduction(totalEmployees, inputs.avgSalary, inputs.industry, getRampUpFactor(month, 'errorReduction')) / 12) +
      (calculateTimeSavings(inputs.numLeaders, inputs.avgSalary, getRampUpFactor(month, 'timeSavings')) / 12)

    cumulativeBenefits += monthlyBenefit

    // Add monthly maintenance cost
    const monthlyCost = (inputs.investmentAmount * 0.20) / 12
    cumulativeCosts += monthlyCost

    monthlyTimeline.push({
      month,
      cumulativeBenefits,
      cumulativeCosts,
      netPosition: cumulativeBenefits - cumulativeCosts
    })
  }

  return {
    inputs,
    totalEmployees,
    totalCompensation,
    year1NetROI: year1Breakdown.netROI,
    year1Multiple: year1Breakdown.roiMultiple,
    year3NetROI,
    year3Multiple,
    breakEvenMonths: calculateBreakEven(inputs, totalEmployees, totalCompensation),
    year1Breakdown,
    year2Breakdown,
    year3Breakdown,
    monthlyTimeline
  }
}
