'use client'

import { usePathname } from 'next/navigation'
import LetsTalk from '@/components/sections/LetsTalk'

export default function ConditionalLetsTalk() {
  const pathname = usePathname()
  
  // Don't show LetsTalk on contact page (handle /contact, /contact/, and any query params)
  if (pathname?.startsWith('/contact')) {
    return null
  }
  
  return <LetsTalk />
}

