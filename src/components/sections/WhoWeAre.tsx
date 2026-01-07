'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const WhoWeAre = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="mb-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent-blue">
                WHO WE ARE
              </span>
            </div>
            
            <h2 className="heading-title text-gray-900 mb-6">
            Where ideas take shape and become reality
            </h2>
            
            <p 
              className="mb-8"
              style={{
                textAlign: 'left',
                fontSize: '18px',
                lineHeight: '1.44',
                fontWeight: 400,
                marginTop: '12px',
                color: '#555',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Over the years, we drive innovation and deliver impactful solutions across the digital landscape. 
              Our unwavering commitment to excellence has established a legacy of remarkable achievements. 
              We harness technology to unlock unparalleled growth and shape a brighter future for your business. 
              Let's partner to rewrite the rules and leave a lasting impact on the world.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-accent-blue to-accent-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              Get in touch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Side - Image with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="relative h-[400px] lg:h-[500px] flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full h-full"
            >
              <img
                src="/hst-03.png"
                alt="Who We Are"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.style.display = 'none'
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center">
                        <div class="w-64 h-64 bg-gradient-to-br from-accent-blue/20 via-accent-cyan/20 to-accent-blue/20 rounded-full flex items-center justify-center">
                          <svg class="w-32 h-32 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      </div>
                    `
                  }
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre

