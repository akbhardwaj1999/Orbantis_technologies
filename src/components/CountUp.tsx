'use client'

import { useState, useEffect, useRef } from 'react'

interface CountUpProps {
  end: number | string
  duration?: number
  delay?: number
  className?: string
}

export default function CountUp({ end, duration = 2000, delay = 0, className = '' }: CountUpProps) {
  // Determine initial count based on format
  const getInitialCount = () => {
    if (typeof end === 'string') {
      if (end.includes('/')) {
        const parts = end.split('/')
        return `0/${parts[1] || ''}`
      } else if (end.includes('+')) {
        return '0+'
      } else if (end.includes('%')) {
        return '0%'
      } else if (end === '∞' || end === 'New' || isNaN(Number(end))) {
        return end
      }
    }
    return 0
  }

  const [count, setCount] = useState<number | string>(() => {
    // Set initial count properly based on end value
    if (typeof end === 'string' && end.includes('/')) {
      const parts = end.split('/')
      return `0/${parts[1] || ''}`
    } else if (typeof end === 'string' && end.includes('+')) {
      return '0+'
    } else if (typeof end === 'string' && end.includes('%')) {
      return '0%'
    } else if (typeof end === 'string' && (end === '∞' || end === 'New' || isNaN(Number(end)))) {
      return end
    }
    return 0
  })
  const countRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset count when element comes into view
            if (!hasAnimatedRef.current) {
              // Parse the end value first to determine format
              let targetNumber: number
              let suffix = ''
              
              if (typeof end === 'string') {
                if (end.includes('+')) {
                  targetNumber = parseInt(end.replace('+', ''))
                  suffix = '+'
                } else if (end.includes('%')) {
                  targetNumber = parseInt(end.replace('%', ''))
                  suffix = '%'
                } else if (end.includes('/')) {
                  // For values like "24/7", animate the first number
                  const parts = end.split('/')
                  targetNumber = parseInt(parts[0])
                  suffix = `/${parts[1] || ''}`
                } else if (end === '∞' || end === 'New' || isNaN(Number(end))) {
                  // For special values, don't animate
                  setCount(end)
                  return
                } else {
                  targetNumber = Number(end)
                }
              } else {
                targetNumber = end
              }

              if (isNaN(targetNumber)) {
                setCount(end)
                return
              }

              // Set initial count based on format - ensure it's set correctly
              if (suffix.includes('/')) {
                // For "24/7" format, extract the second part properly
                const parts = end.toString().split('/')
                setCount(`0/${parts[1] || ''}`)
              } else if (suffix) {
                setCount(`0${suffix}`)
              } else {
                setCount(0)
              }
              
              hasAnimatedRef.current = true
              
              // Use consistent duration for all numbers to maintain same speed
              // For better visibility, use a fixed duration
              const calculatedDuration = 2000 // Fixed 2 seconds for all numbers
              
              setTimeout(() => {
                const startTime = Date.now()
                const startValue = 0
                let lastDisplayedValue = -1 // Track last displayed value to ensure all numbers show

                const animate = () => {
                  const now = Date.now()
                  const elapsed = now - startTime
                  const progress = Math.min(elapsed / calculatedDuration, 1)
                  
                  // Easing function for smooth animation
                  const easeOutQuart = 1 - Math.pow(1 - progress, 4)
                  const current = Math.floor(startValue + (targetNumber - startValue) * easeOutQuart)
                  
                  // Only update if value changed to ensure all numbers are visible
                  if (current !== lastDisplayedValue) {
                    lastDisplayedValue = current
                    
                    if (suffix.includes('/')) {
                      // For "24/7" format, extract the second part properly
                      const parts = end.toString().split('/')
                      setCount(`${current}/${parts[1] || ''}`)
                    } else if (suffix) {
                      setCount(`${current}${suffix}`)
                    } else {
                      setCount(current)
                    }
                  }

                  if (progress < 1) {
                    animationFrameRef.current = requestAnimationFrame(animate)
                  } else {
                    // Ensure final value is set correctly
                    if (suffix.includes('/')) {
                      const parts = end.toString().split('/')
                      setCount(`${targetNumber}/${parts[1] || ''}`)
                    } else if (suffix) {
                      setCount(`${targetNumber}${suffix}`)
                    } else {
                      setCount(targetNumber)
                    }
                  }
                }

                animationFrameRef.current = requestAnimationFrame(animate)
              }, delay)
            }
          } else {
            // Reset when element goes out of view so it can animate again
            hasAnimatedRef.current = false
            if (animationFrameRef.current) {
              cancelAnimationFrame(animationFrameRef.current)
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [end, duration, delay])

  return (
    <div ref={countRef} className={className}>
      {count}
    </div>
  )
}

