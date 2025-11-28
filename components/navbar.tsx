"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 safe-area-top">
      <div className="container flex h-16 md:h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-3">
          <Link href="/" className="flex items-center gap-2 md:gap-3 min-h-[44px]" aria-label="Culture Crunch Homepage">
            <Image
              src="/culturecrunch-logo.png"
              alt="Culture Crunch Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold leading-tight">Culture Crunch</span>
              <span className="text-[9px] md:text-[10px] text-muted-foreground leading-tight hidden sm:block">The Culture Operating System</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 items-center" aria-label="Main Navigation">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Home Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium h-auto px-4 py-2 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  Home
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48">
                    <NavigationMenuLink asChild>
                      <Link href="/#problem" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">The Problem</div>
                        <p className="text-xs leading-snug text-muted-foreground mt-1">
                          Understanding the leadership challenge
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/#opportunity" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">The Opportunity</div>
                        <p className="text-xs leading-snug text-muted-foreground mt-1">
                          The potential for transformation
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Offering Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium h-auto px-4 py-2 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  Offering
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48">
                    <NavigationMenuLink asChild>
                      <Link href="/#solution" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Solution</div>
                        <p className="text-xs leading-snug text-muted-foreground mt-1">
                          Our approach to leadership development
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/#how-it-works" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">How It Works</div>
                        <p className="text-xs leading-snug text-muted-foreground mt-1">
                          The implementation process
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/#differentiation" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Differentiation</div>
                        <p className="text-xs leading-snug text-muted-foreground mt-1">
                          What makes us different
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Methodology Link */}
          <Link href="/methodology" className="text-sm font-medium transition-colors hover:text-primary">
            Methodology
          </Link>

          {/* Why Now Dropdown - Separate NavigationMenu for proper positioning */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium h-auto px-4 py-2 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  Why Now
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48">
                    <NavigationMenuLink asChild>
                      <Link href="/#why-now" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Why Now</div>
                        <p className="text-xs leading-snug text-muted-foreground mt-1">
                          The urgency of culture development
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/roi-calculator" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">ROI Calculator</div>
                        <p className="text-xs leading-snug text-muted-foreground mt-1">
                          Calculate your investment returns
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Link */}
          <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button
            asChild
            className="hidden md:flex items-center gap-3 px-4 py-2 bg-[#1a1d21] hover:bg-[#2a2d31] text-white rounded-xl border-0 h-auto dark:bg-primary dark:hover:bg-primary/90 dark:shadow-[0_0_10px_rgba(36,101,237,0.4)]"
          >
            <Link href="/#contact">
              <Zap className="h-4 w-4 text-white" />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">See It in Action</span>
                <span className="text-xs text-gray-400 dark:text-gray-300 -mt-0.5">Book your demo</span>
              </div>
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="h-11 w-11" aria-label="Open Menu">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[350px] safe-area-right overflow-y-auto">
              {/* Mobile Logo */}
              <div className="flex items-center gap-3 mb-6 pt-2">
                <Image
                  src="/culturecrunch-logo.png"
                  alt="Culture Crunch Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-tight">Culture Crunch</span>
                  <span className="text-[9px] text-muted-foreground leading-tight">The Culture Operating System</span>
                </div>
              </div>
              <nav className="flex flex-col gap-3 mt-4 pb-safe" aria-label="Mobile Navigation">
                {/* Home Section */}
                <div className="flex flex-col gap-1">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">Home</div>
                  <Link
                    href="/#problem"
                    className="text-base font-medium transition-colors hover:text-primary active:bg-accent px-3 py-3 rounded-lg min-h-[48px] flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    The Problem
                  </Link>
                  <Link
                    href="/#opportunity"
                    className="text-base font-medium transition-colors hover:text-primary active:bg-accent px-3 py-3 rounded-lg min-h-[48px] flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    The Opportunity
                  </Link>
                </div>

                {/* Offering Section */}
                <div className="flex flex-col gap-1">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">Offering</div>
                  <Link
                    href="/#solution"
                    className="text-base font-medium transition-colors hover:text-primary active:bg-accent px-3 py-3 rounded-lg min-h-[48px] flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Solution
                  </Link>
                  <Link
                    href="/#how-it-works"
                    className="text-base font-medium transition-colors hover:text-primary active:bg-accent px-3 py-3 rounded-lg min-h-[48px] flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/#differentiation"
                    className="text-base font-medium transition-colors hover:text-primary active:bg-accent px-3 py-3 rounded-lg min-h-[48px] flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Differentiation
                  </Link>
                </div>

                {/* Methodology */}
                <Link
                  href="/methodology"
                  className="text-base font-medium transition-colors hover:text-primary active:bg-accent px-3 py-3 rounded-lg min-h-[48px] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Methodology
                </Link>

                {/* Why Now Section */}
                <div className="flex flex-col gap-1">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">Why Now</div>
                  <Link
                    href="/#why-now"
                    className="text-base font-medium transition-colors hover:text-primary active:bg-accent px-3 py-3 rounded-lg min-h-[48px] flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Why Now
                  </Link>
                  <Link
                    href="/roi-calculator"
                    className="text-base font-medium transition-colors hover:text-primary active:bg-accent px-3 py-3 rounded-lg min-h-[48px] flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    ROI Calculator
                  </Link>
                </div>

                {/* Contact */}
                <Link
                  href="/#contact"
                  className="text-base font-medium transition-colors hover:text-primary active:bg-accent px-3 py-3 rounded-lg min-h-[48px] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <div className="flex items-center gap-3 mt-4 pt-4 border-t">
                  <ThemeToggle />
                  <Button
                    asChild
                    className="flex-1 flex items-center justify-center gap-3 px-4 py-4 bg-[#1a1d21] hover:bg-[#2a2d31] text-white rounded-xl border-0 h-auto min-h-[52px] dark:bg-primary dark:hover:bg-primary/90 dark:shadow-[0_0_10px_rgba(36,101,237,0.4)]"
                  >
                    <Link href="/#contact" onClick={() => setIsOpen(false)}>
                      <Zap className="h-5 w-5 text-white" />
                      <div className="flex flex-col items-start">
                        <span className="text-base font-medium">See It in Action</span>
                        <span className="text-xs text-gray-400 dark:text-gray-300 -mt-0.5">Book your demo</span>
                      </div>
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
