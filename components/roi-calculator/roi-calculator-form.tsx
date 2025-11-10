"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { calculateFullROI } from "./roi-calculations"
import type { ROIInputs } from "./roi-calculations"

interface ROICalculatorFormProps {
  onCalculate: (results: any) => void
}

export default function ROICalculatorForm({ onCalculate }: ROICalculatorFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<ROIInputs>({
    numLeaders: 50,
    reportsPerLeader: 10,
    avgSalary: 75000,
    industry: 'tech',
    turnoverRate: 15,
    currentInvestment: 0,
    engagementScore: 3,
    programDuration: 12,
    investmentAmount: 150000,
    implementationType: 'full'
  })

  const totalEmployees = formData.numLeaders * formData.reportsPerLeader
  const totalCompensation = totalEmployees * formData.avgSalary
  const estimatedDepartures = Math.round(totalEmployees * (formData.turnoverRate / 100))
  const perLeaderCost = Math.round(formData.investmentAmount / formData.numLeaders)

  const handleInputChange = (field: keyof ROIInputs, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCalculate = () => {
    const results = calculateFullROI(formData)
    onCalculate(results)
  }

  const goToStep = (step: number) => {
    setCurrentStep(step)
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="calculator" className="py-16 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl">

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  currentStep === step
                    ? 'bg-primary text-primary-foreground'
                    : currentStep > step
                    ? 'bg-green-600 text-white'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step}
                </div>
                <span className={`text-sm font-medium hidden sm:inline ${
                  currentStep >= step ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step === 1 && 'Organization'}
                  {step === 2 && 'Current State'}
                  {step === 3 && 'Investment'}
                </span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-600 dark:bg-purple-400 transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Organization Basics */}
        {currentStep === 1 && (
          <Card className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">Tell us about your organization</h2>
              <p className="text-muted-foreground">We'll use these details to calculate your projected ROI</p>
            </div>

            {/* Number of Leaders */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="numLeaders">Number of leaders/managers</Label>
                <span className="font-mono text-lg text-purple-600 dark:text-purple-400">{formData.numLeaders}</span>
              </div>
              <input
                id="numLeaders"
                type="range"
                min="10"
                max="500"
                value={formData.numLeaders}
                onChange={(e) => handleInputChange('numLeaders', parseInt(e.target.value))}
                step="5"
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>10</span>
                <span>500</span>
              </div>
            </div>

            {/* Employees per Leader */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="reportsPerLeader">Average employees per leader</Label>
                <span className="font-mono text-lg text-purple-600 dark:text-purple-400">{formData.reportsPerLeader}</span>
              </div>
              <input
                id="reportsPerLeader"
                type="range"
                min="5"
                max="20"
                value={formData.reportsPerLeader}
                onChange={(e) => handleInputChange('reportsPerLeader', parseInt(e.target.value))}
                step="1"
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>5</span>
                <span>20</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Total employees: <span className="font-mono text-foreground font-medium">{totalEmployees.toLocaleString()}</span>
              </p>
            </div>

            {/* Average Salary */}
            <div className="space-y-3">
              <Label htmlFor="avgSalary">Average annual salary</Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="avgSalary"
                  type="number"
                  value={formData.avgSalary}
                  onChange={(e) => handleInputChange('avgSalary', parseInt(e.target.value))}
                  min="40000"
                  max="200000"
                  step="5000"
                  className="pl-8 font-mono"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Total annual compensation: <span className="font-mono text-foreground font-medium">${totalCompensation.toLocaleString()}</span>
              </p>
            </div>

            {/* Industry */}
            <div className="space-y-3">
              <Label htmlFor="industry">Industry</Label>
              <select
                id="industry"
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <option value="tech">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="professional_services">Professional Services</option>
                <option value="finance">Finance</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Navigation */}
            <div className="flex justify-end pt-6 border-t border-border">
              <Button onClick={() => goToStep(2)} className="gap-2">
                Next: Current State
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        )}

        {/* Step 2: Current State */}
        {currentStep === 2 && (
          <Card className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">Your current state</h2>
              <p className="text-muted-foreground">Help us understand your baseline metrics</p>
            </div>

            {/* Turnover Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="turnoverRate">Annual turnover rate</Label>
                <span className="font-mono text-lg text-purple-600 dark:text-purple-400">{formData.turnoverRate}%</span>
              </div>
              <input
                id="turnoverRate"
                type="range"
                min="5"
                max="30"
                value={formData.turnoverRate}
                onChange={(e) => handleInputChange('turnoverRate', parseInt(e.target.value))}
                step="1"
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>5%</span>
                <span>30%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Estimated annual departures: <span className="font-mono text-foreground font-medium">{estimatedDepartures}</span> employees
              </p>
            </div>

            {/* Current Investment */}
            <div className="space-y-3">
              <Label htmlFor="currentInvestment">Current annual investment in leadership development</Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="currentInvestment"
                  type="number"
                  value={formData.currentInvestment}
                  onChange={(e) => handleInputChange('currentInvestment', parseInt(e.target.value))}
                  min="0"
                  max="500000"
                  step="10000"
                  className="pl-8 font-mono"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Enter 0 if you don't currently have a structured program
              </p>
            </div>

            {/* Engagement Score */}
            <div className="space-y-3">
              <Label htmlFor="engagementScore">Average engagement score (optional)</Label>
              <select
                id="engagementScore"
                value={formData.engagementScore}
                onChange={(e) => handleInputChange('engagementScore', parseInt(e.target.value))}
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <option value={0}>Not measured</option>
                <option value={1}>1 - Very Low</option>
                <option value={2}>2 - Low</option>
                <option value={3}>3 - Average</option>
                <option value={4}>4 - Good</option>
                <option value={5}>5 - Excellent</option>
              </select>
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-6 border-t border-border">
              <Button variant="outline" onClick={() => goToStep(1)} className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>
              <Button onClick={() => goToStep(3)} className="gap-2">
                Next: Investment
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        )}

        {/* Step 3: Investment Parameters */}
        {currentStep === 3 && (
          <Card className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">Investment parameters</h2>
              <p className="text-muted-foreground">Configure your leadership development program</p>
            </div>

            {/* Program Duration */}
            <div className="space-y-3">
              <Label htmlFor="programDuration">Program duration</Label>
              <select
                id="programDuration"
                value={formData.programDuration}
                onChange={(e) => handleInputChange('programDuration', parseInt(e.target.value))}
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <option value={6}>6 months</option>
                <option value={12}>12 months (recommended)</option>
                <option value={18}>18 months</option>
              </select>
            </div>

            {/* Investment Amount */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="investmentAmount">Annual investment amount</Label>
                <span className="font-mono text-lg text-purple-600 dark:text-purple-400">${formData.investmentAmount.toLocaleString()}</span>
              </div>
              <input
                id="investmentAmount"
                type="range"
                min="100000"
                max="200000"
                value={formData.investmentAmount}
                onChange={(e) => handleInputChange('investmentAmount', parseInt(e.target.value))}
                step="10000"
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$100k</span>
                <span>$200k</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Per leader: <span className="font-mono text-foreground font-medium">${perLeaderCost.toLocaleString()}</span>
              </p>
            </div>

            {/* Implementation Approach */}
            <div className="space-y-3">
              <Label>Implementation approach</Label>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer p-4 rounded-md border border-border hover:bg-accent/50 transition-colors">
                  <input
                    type="radio"
                    name="implementation"
                    value="full"
                    checked={formData.implementationType === 'full'}
                    onChange={(e) => handleInputChange('implementationType', e.target.value)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-foreground">Full rollout</div>
                    <div className="text-sm text-muted-foreground">All leaders participate from the start</div>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer p-4 rounded-md border border-border hover:bg-accent/50 transition-colors">
                  <input
                    type="radio"
                    name="implementation"
                    value="pilot"
                    checked={formData.implementationType === 'pilot'}
                    onChange={(e) => handleInputChange('implementationType', e.target.value)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-foreground">Pilot program</div>
                    <div className="text-sm text-muted-foreground">Start with a subset, scale based on results</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-6 border-t border-border">
              <Button variant="outline" onClick={() => goToStep(2)} className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>
              <Button onClick={handleCalculate} className="gap-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700">
                Calculate ROI
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        )}

      </div>
    </section>
  )
}
