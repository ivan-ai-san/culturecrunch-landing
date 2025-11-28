"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import Link from "next/link"

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 100vh (hero section)
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight
      setIsVisible(scrollPosition > heroHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-background/95 backdrop-blur-lg border-t px-4 py-3 safe-area-bottom">
        <Button
          asChild
          className="w-full flex items-center justify-center gap-2 py-4 h-auto text-base bg-primary hover:bg-primary/90 text-white rounded-xl"
        >
          <Link href="#contact">
            <Zap className="h-5 w-5" />
            See Culture Crunch in Action
          </Link>
        </Button>
      </div>
    </div>
  )
}
