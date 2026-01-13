'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import CountUp from '@/components/CountUp'
import { useRef, useState, useEffect } from 'react'

// Typing Text Card Component
const TypingTextCard = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fixedText = "Fresh ideas,"
  const typingText = " modern technology, and a commitment to quality"
  const typingRef = useRef<{ currentIndex: number; timeoutId: NodeJS.Timeout | null; isActive: boolean }>({
    currentIndex: 0,
    timeoutId: null,
    isActive: false
  })

  useEffect(() => {
    // Clear any existing timeout
    if (typingRef.current.timeoutId) {
      clearTimeout(typingRef.current.timeoutId)
    }
    
    // Reset state
    typingRef.current.currentIndex = 0
    typingRef.current.isActive = true
    setDisplayedText('')
    
    const typeNext = () => {
      if (!typingRef.current.isActive) return
      
      if (typingRef.current.currentIndex < typingText.length) {
        setDisplayedText(typingText.slice(0, typingRef.current.currentIndex + 1))
        typingRef.current.currentIndex++
        typingRef.current.timeoutId = setTimeout(typeNext, 100)
      } else {
        // Wait a bit, then restart
        typingRef.current.timeoutId = setTimeout(() => {
          if (typingRef.current.isActive) {
            typingRef.current.currentIndex = 0
            setDisplayedText('')
            typeNext()
          }
        }, 3000)
      }
    }
    
    typeNext()

    return () => {
      typingRef.current.isActive = false
      if (typingRef.current.timeoutId) {
        clearTimeout(typingRef.current.timeoutId)
      }
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {/* Description with attractive styling - Fixed part + typing part */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-left leading-relaxed sm:leading-relaxed mt-2 sm:mt-3 text-gray-700 font-poppins">
        <span className="text-accent-blue font-bold">{fixedText}</span>
        <span className="text-gray-700">
          {displayedText}
          {displayedText.length < typingText.length && (
            <span className="animate-pulse ml-1 text-accent-blue">|</span>
          )}
        </span>
      </p>
    </motion.div>
  )
}

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const typingRef = useRef<{ currentIndex: number; timeoutId: NodeJS.Timeout | null; isActive: boolean }>({
    currentIndex: 0,
    timeoutId: null,
    isActive: false
  })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // No content switching - show all content directly

  const stats = [
    { number: '100+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ]

  const typingText = "Business"
  
  // Typing cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  // Typing animation for "Business" - fixed glitch with useRef
  useEffect(() => {
    // Clear any existing timeout
    if (typingRef.current.timeoutId) {
      clearTimeout(typingRef.current.timeoutId)
    }
    
    // Reset state
    typingRef.current.currentIndex = 0
    typingRef.current.isActive = true
    setDisplayedText('')
    
    const typeNext = () => {
      if (!typingRef.current.isActive) return
      
      if (typingRef.current.currentIndex < typingText.length) {
        setDisplayedText(typingText.slice(0, typingRef.current.currentIndex + 1))
        typingRef.current.currentIndex++
        typingRef.current.timeoutId = setTimeout(typeNext, 150)
      } else {
        // Wait a bit, then restart
        typingRef.current.timeoutId = setTimeout(() => {
          if (typingRef.current.isActive) {
            typingRef.current.currentIndex = 0
            setDisplayedText('')
            typeNext()
          }
        }, 2000)
      }
    }
    
    typeNext()

    return () => {
      typingRef.current.isActive = false
      if (typingRef.current.timeoutId) {
        clearTimeout(typingRef.current.timeoutId)
      }
    }
  }, [typingText])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[100vh] sm:min-h-screen flex items-center overflow-hidden"
    >
      {/* Image Background with subtle floating effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ y }}
      >
        <motion.img
          src="/1d19d578-7d3a-454b-9ce3-2dae3fd63c7b.jpg"
          alt="Background"
          className="w-full h-full object-cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onError={(e) => {
            console.error('❌ Background image not found')
            e.currentTarget.style.display = 'none'
          }}
        />
      </motion.div>
      
      {/* Content - Two Column Layout */}
      <motion.div 
        className="relative z-10 w-full min-h-[100vh] sm:min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-0"
        style={{ opacity }}
      >
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-3 sm:space-y-4 md:space-y-6 order-2 lg:order-1"
            >
              {/* Heading with typing Business - Clean rewrite */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-poppins font-bold leading-tight sm:leading-tight">
                <motion.span 
                  className="block mb-1 sm:mb-2 text-gray-900"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Revolutionizing Your
                </motion.span>
                <motion.span 
                  className="block text-accent-blue font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {displayedText}
                  {showCursor && displayedText.length < typingText.length && (
                    <span className="animate-pulse ml-1 text-accent-blue">|</span>
                  )}
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  With Technology
                </motion.span>
              </h1>

              {/* Description Text with typing */}
              <TypingTextCard />
              
              {/* Stats Section - Left aligned, no gap */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 pt-3 sm:pt-4 md:pt-6 lg:pt-8"
              >
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-left"
                  >
                    <CountUp 
                      end={stat.number} 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-accent-blue mb-0.5 sm:mb-1 block" 
                    />
                    <div className="text-gray-700 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Floating Image (Bigger) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="flex items-center justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-0 order-1 lg:order-2"
            >
              <motion.img
                src="/banner-image-04.png"
                alt="Banner Illustration"
                className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg object-contain"
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                onError={(e) => {
                  console.error('❌ Banner image not found')
                  e.currentTarget.style.display = 'none'
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
