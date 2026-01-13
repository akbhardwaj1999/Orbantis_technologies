'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { PenTool, Lightbulb, Mouse, Image as ImageIcon } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  // Parallax effect for icons - they move up slowly and smoothly when scrolling
  // Different speeds for each icon create a dynamic effect
  // Negative values make them move up as you scroll down
  const icon1Y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const icon2Y = useTransform(scrollYProgress, [0, 1], [0, -130])
  const icon3Y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const icon4Y = useTransform(scrollYProgress, [0, 1], [0, -110])

  const skills = [
    { name: 'Branding', percentage: 90 },
    { name: 'Technical SEO', percentage: 70 },
    { name: 'App Development', percentage: 70 },
    { name: 'Web Development', percentage: 80 },
    { name: 'UI/UX Designs', percentage: 80 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Column - Skills with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="lg:pr-8 order-2 lg:order-1"
          >
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-poppins font-bold text-gray-800 mb-6 sm:mb-8 leading-tight">
              We make your brand stand out from the noise
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold text-sm sm:text-base">{skill.name}</span>
                    <span className="text-accent-blue font-bold text-sm sm:text-base">{skill.percentage}%</span>
                  </div>
                  <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.2,
                        ease: "easeOut"
                      }}
                      className="absolute left-0 top-0 h-full bg-accent-blue rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image with Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="relative order-1 lg:order-2"
          >
            {/* Main Image Card */}
            <div 
              ref={imageRef}
              className="relative bg-white rounded-2xl shadow-xl overflow-visible"
            >
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] xl:h-[450px] bg-gradient-to-br from-gray-100 to-gray-200 overflow-visible">
                {/* Meeting Image - Replace with your actual image path */}
                <img
                  src="/meeting.jpeg"
                  alt="Team Meeting"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback gradient if image not found
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
                  }}
                />
                
                {/* Background Dots Pattern - Inside image background */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  {/* Dots in various positions in background */}
                  {[
                    { top: '8%', right: '5%' },
                    { top: '20%', right: '8%' },
                    { top: '35%', right: '4%' },
                    { top: '50%', right: '7%' },
                    { top: '65%', right: '5%' },
                    { top: '80%', right: '6%' },
                  ].map((pos, idx) => (
                    <div key={idx} className="absolute" style={{ top: pos.top, right: pos.right }}>
                      <div className="flex flex-col space-y-1">
                        {[...Array(2 + (idx % 3))].map((_, col) => (
                          <div
                            key={col}
                            className="w-1.5 h-1.5 bg-accent-blue/30 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Overlaid Icons with Parallax Effect - Fixed positioning to prevent clipping */}
                <motion.div
                  style={{ y: icon1Y }}
                  className="absolute top-2 sm:top-4 left-2 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-accent-blue rounded-lg shadow-lg flex items-center justify-center z-20 border-2 border-white"
                >
                  <PenTool className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </motion.div>

                <motion.div
                  style={{ y: icon2Y }}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-lg shadow-lg flex items-center justify-center z-20 border-2 border-gray-200"
                >
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-accent-blue" />
                </motion.div>

                <motion.div
                  style={{ y: icon3Y }}
                  className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-2 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-lg shadow-lg flex items-center justify-center z-20 border-2 border-gray-200"
                >
                  <Mouse className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-accent-blue" />
                </motion.div>

                <motion.div
                  style={{ y: icon4Y }}
                  className="absolute bottom-2 sm:bottom-4 right-3 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-accent-blue rounded-lg shadow-lg flex items-center justify-center z-20 border-2 border-white"
                >
                  <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </motion.div>
              </div>
              
              {/* Dots Pattern - Inside image at bottom right corner */}
              <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
                {[...Array(10)].map((_, row) => (
                  <div key={row} className="flex flex-col space-y-1 mb-1">
                    {[...Array(2 + Math.floor(row * 0.3))].map((_, col) => (
                      <div
                        key={col}
                        className="w-1.5 h-1.5 bg-accent-blue/40 rounded-full"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

