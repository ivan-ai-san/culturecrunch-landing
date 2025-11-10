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

  const navItems = [
    { label: "The Problem", href: "#problem" },
    { label: "The Opportunity", href: "#opportunity" },
    { label: "Solution", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Methodology", href: "#methodology" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3" aria-label="Culture Crunch Homepage">
            <Image
              src="/culturecrunch-logo.png"
              alt="CultureCrunch Logo"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight">CultureCrunch</span>
              <span className="text-[10px] text-muted-foreground leading-tight">The Leadership and Culture Operating System</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 items-center" aria-label="Main Navigation">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium h-auto p-0 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  Why Now
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48">
                    <NavigationMenuLink asChild>
                      <Link href="#why-now" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Why Now</div>
                        <p className="text-xs leading-snug text-muted-foreground mt-1">
                          The urgency of leadership development
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/roi-calculator" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">ROI Calculator</div>
                        <p className="text-xs leading-snug text-muted-foreground mt-1">
                          Calculate your leadership investment returns
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button
            asChild
            className="hidden md:flex items-center gap-3 px-4 py-2 bg-[#1a1d21] hover:bg-[#2a2d31] text-white rounded-xl border-0 h-auto dark:bg-primary dark:hover:bg-primary/90 dark:shadow-[0_0_10px_rgba(36,101,237,0.4)]"
          >
            <Link href="#contact">
              <Zap className="h-4 w-4 text-white" />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">Get Started</span>
                <span className="text-xs text-gray-400 dark:text-gray-300 -mt-0.5">Install your OS</span>
              </div>
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              {/* Mobile Logo */}
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/culturecrunch-logo.png"
                  alt="CultureCrunch Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-tight">CultureCrunch</span>
                  <span className="text-[9px] text-muted-foreground leading-tight">The Leadership and Culture Operating System</span>
                </div>
              </div>
              <nav className="flex flex-col gap-4 mt-4" aria-label="Mobile Navigation">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pl-4 border-l-2 border-purple-200 dark:border-purple-800">
                  <Link
                    href="#why-now"
                    className="text-base font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Why Now
                  </Link>
                  <Link
                    href="/roi-calculator"
                    className="text-base font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    ROI Calculator
                  </Link>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <ThemeToggle />
                  <Button
                    asChild
                    className="w-full flex items-center gap-3 px-4 py-2 bg-[#1a1d21] hover:bg-[#2a2d31] text-white rounded-xl border-0 h-auto dark:bg-primary dark:hover:bg-primary/90 dark:shadow-[0_0_10px_rgba(36,101,237,0.4)]"
                  >
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      <Zap className="h-4 w-4 text-white" />
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">Get Started</span>
                        <span className="text-xs text-gray-400 dark:text-gray-300 -mt-0.5">Install your OS</span>
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
