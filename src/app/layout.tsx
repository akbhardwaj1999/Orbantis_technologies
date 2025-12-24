import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://orbantistechnologies.com'),
  title: 'Orbantis Technologies - Digital Innovation & Technology Solutions',
  description: 'Leading IT company specializing in web development, mobile apps, AI automation, and digital transformation. Get your free quote today!',
  keywords: 'web development, mobile development, AI automation, digital transformation, IT solutions, React, Python, Django',
  authors: [{ name: 'Orbantis Technologies' }],
  openGraph: {
    title: 'Orbantis Technologies - Digital Innovation & Technology Solutions',
    description: 'Leading IT company specializing in web development, mobile apps, AI automation, and digital transformation.',
    type: 'website',
    locale: 'en_US',
    url: 'https://orbantistechnologies.com',
    siteName: 'Orbantis Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbantis Technologies - Digital Innovation & Technology Solutions',
    description: 'Leading IT company specializing in web development, mobile apps, AI automation, and digital transformation.',
  },
  alternates: {
    canonical: 'https://orbantistechnologies.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
