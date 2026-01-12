'use client'

import { useState, useEffect, useRef } from 'react'

interface UseCountUpOptions {
  start?: number
  duration?: number
  delay?: number
}

export function useCountUp(
  end: number | string,
  options: UseCountUpOptions = {}
) {
  const { start = 0, duration = 2000, delay = 0 } = options
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const countRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if the value is a number or contains special characters
    if (typeof end === 'string') {
      // Handle strings like "50+", "100%", "24/7", "∞", "New"
      if (end.includes('+')) {
        const num = parseInt(end.replace('+', ''))
        if (!isNaN(num)) {
          animateNumber(num)
        } else {
          setCount(end as any)
        }
      } else if (end.includes('%')) {
        const num = parseInt(end.replace('%', ''))
        if (!isNaN(num)) {
          animateNumber(num, '%')
        } else {
          setCount(end as any)
        }
      } else if (end.includes('/')) {
        // For values like "24/7", don't animate
        setCount(end as any)
      } else if (end === '∞' || end === 'New' || isNaN(Number(end))) {
        // For special values, don't animate
        setCount(end as any)
      } else {
        const num = Number(end)
        if (!isNaN(num)) {
          animateNumber(num)
        } else {
          setCount(end as any)
        }
      }
    } else {
      animateNumber(end)
    }

    function animateNumber(target: number, suffix: string = '') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true)
              
              setTimeout(() => {
                const startTime = Date.now()
                const startValue = start
                const endValue = target

                const animate = () => {
                  const now = Date.now()
                  const elapsed = now - startTime
                  const progress = Math.min(elapsed / duration, 1)
                  
                  // Easing function for smooth animation
                  const easeOutQuart = 1 - Math.pow(1 - progress, 4)
                  const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
                  
                  if (suffix) {
                    setCount(`${current}${suffix}` as any)
                  } else {
                    setCount(current)
                  }

                  if (progress < 1) {
                    requestAnimationFrame(animate)
                  } else {
                    if (suffix) {
                      setCount(`${endValue}${suffix}` as any)
                    } else {
                      setCount(endValue)
                    }
                  }
                }

                requestAnimationFrame(animate)
              }, delay)
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
      }
    }
  }, [end, start, duration, delay, isVisible])

  return { count, countRef }
}













