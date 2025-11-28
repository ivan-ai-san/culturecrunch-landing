"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, AlertCircle, Building2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    size: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSizeChange = (value: string) => {
    setFormData(prev => ({ ...prev, size: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          ...formData
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Failed to submit form')
      }

      setIsSubmitted(true)
    } catch (err) {
      console.error('Form submission error:', err)
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or email us directly at hello@culturecrunch.io")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[400px] text-center">
          <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your inquiry has been received. Our enterprise team will contact you shortly to discuss your specific
            requirements.
          </p>
          <Button onClick={() => {
            setIsSubmitted(false)
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              company: "",
              role: "",
              size: "",
              message: ""
            })
          }}>Submit Another Inquiry</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>See Culture Crunch in Action</CardTitle>
        <CardDescription>
          Book a personalised demo and see how the Culture OS transforms leadership at scale.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-4">
          {error && (
            <div className="flex items-center gap-2 p-3 md:p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 rounded-lg">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {error}
            </div>
          )}
          {/* Stack on mobile, side-by-side on tablet+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm md:text-sm">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                required
                value={formData.firstName}
                onChange={handleChange}
                disabled={isSubmitting}
                autoComplete="given-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm md:text-sm">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                required
                value={formData.lastName}
                onChange={handleChange}
                disabled={isSubmitting}
                autoComplete="family-name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-1.5 text-sm">
              <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
              Work Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@company.com"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              autoComplete="email"
              inputMode="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm">Company/Organisation</Label>
            <Input
              id="company"
              placeholder="Acme Inc."
              required
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
              autoComplete="organization"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role" className="text-sm">Your Role</Label>
            <Input
              id="role"
              placeholder="CTO, IT Director, etc."
              required
              value={formData.role}
              onChange={handleChange}
              disabled={isSubmitting}
              autoComplete="organization-title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="size">Organisation Size</Label>
            <Select value={formData.size} onValueChange={handleSizeChange} disabled={isSubmitting}>
              <SelectTrigger id="size">
                <SelectValue placeholder="Select organisation size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-50">1-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-500">201-500 employees</SelectItem>
                <SelectItem value="501-1000">501-1000 employees</SelectItem>
                <SelectItem value="1001+">1001+ employees</SelectItem>
                <SelectItem value="government">Government Agency</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">How can we help?</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your specific requirements and use cases..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="flex items-start gap-3 py-2">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
              disabled={isSubmitting}
              className="mt-0.5"
            />
            <label
              htmlFor="terms"
              className="text-sm text-muted-foreground leading-relaxed cursor-pointer select-none"
            >
              I agree to the <a href="/terms" className="text-primary hover:underline active:underline" target="_blank" rel="noopener noreferrer">Terms of Use</a> and <a href="/privacy" className="text-primary hover:underline active:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and consent to receiving communications from Culture Crunch
            </label>
          </div>
          <Button type="submit" className="w-full h-12 md:h-11 text-base" disabled={isSubmitting || !agreedToTerms}>
            {isSubmitting ? "Booking Your Demo..." : "Book My Personalised Demo"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
