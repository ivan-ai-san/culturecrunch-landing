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
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}
    >
      <div className="bg-background/95 backdrop-blur-lg border-t px-4 py-3">
        <Button
          asChild
          className="w-full flex items-center justify-center gap-2 py-4 h-14 text-base bg-primary hover:bg-primary/90 active:bg-primary/80 text-white rounded-xl shadow-lg touch-manipulation"
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
