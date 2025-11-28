import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
  ],
}

export const metadata: Metadata = {
  title: "The Culture Operating System",
  description:
    "Transform workplace culture with embedded leadership rhythms. 6-week program for accountable conversations and measurable performance lift.",
  keywords: "culture operating system, workplace culture, accountable conversations, team engagement, leadership development",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://culturecrunch.io",
    title: "Culture Crunch | The Culture Operating System",
    description:
      "Transform workplace culture with embedded leadership rhythms.",
    siteName: "Culture Crunch",
    images: [
      {
        url: "https://culturecrunch.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Culture Crunch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Culture Crunch | The Culture Operating System",
    description: "Transform workplace culture with embedded leadership rhythms. 6-week program for accountable conversations.",
    images: ["https://culturecrunch.io/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Culture Crunch',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
