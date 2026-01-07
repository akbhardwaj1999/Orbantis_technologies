'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Code, Smartphone, Brain, Palette, Database, Shield, ArrowRight, Sparkles, CheckCircle, Clock, Globe } from 'lucide-react'
import { useRef, useState } from 'react'
import CountUp from '@/components/CountUp'

const ServicesPreview = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0])

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Our Web Development Services Transform Concepts into Stunning Websites that Reflect Your Brand and Achieve Business Goals',
      image: '/service_02.png',
      href: '/services/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Our Mobile Application development services can elevate your business growth. Let\'s connect to turn your concept into cutting edge reality',
      image: '/service_01.png',
      href: '/services/mobile-development'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Our AI-powered Systems Adapt, Learn, and Evolve to Keep Businesses Ahead in the Era of Constant Change',
      image: '/services-06.png',
      href: '/services/ai-machine-learning'
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'SQL databases, ETL processes, and business intelligence solutions.',
      image: '/services-04.png',
      href: '/services/data-analytics'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Our UI/UX Design Services Help Businesses Stand Out with Engaging and Memorable User Interfaces.',
      image: '/service_03.png',
      href: '/services/ui-ux-marketing'
    },
    {
      icon: Shield,
      title: 'Testing & QA',
      description: 'Comprehensive testing solutions including automated and manual testing.',
      image: '/service_05.png',
      href: '/services/testing-qa'
    }
  ]

  return (
    <>
      {/* Our Services Section */}
      <section 
        ref={sectionRef}
        className="relative min-h-screen flex flex-col bg-light-200 overflow-hidden"
      >
        {/* Image Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/simple-blue-white-background-with-text-space.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('❌ Background image not found')
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        <motion.div 
          className="relative z-10"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-center px-2 sm:px-6 lg:px-8 py-10"
          >
            <h2 className="heading-title text-gray-900 mb-6">
              Our Services
            </h2>
            <p 
              className="max-w-3xl mx-auto text-center"
              style={{
                fontSize: '18px',
                lineHeight: '1.44',
                fontWeight: 400,
                marginTop: '12px',
                color: '#555',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Transform Your Business
            </p>
          </motion.div>

        {/* Services Grid - White Cards with Icons */}
            <div className="py-2">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: false }}
                      className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 group"
                    >
                      {/* Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 flex items-center justify-center">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              // Fallback to icon if image doesn't exist
                              e.currentTarget.style.display = 'none'
                              const parent = e.currentTarget.parentElement
                              if (parent) {
                                parent.innerHTML = `
                                  <div class="w-20 h-20 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                                    <svg class="w-12 h-12 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                  </div>
                                `
                              }
                            }}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p 
                        className="mb-6"
                        style={{
                          textAlign: 'left',
                          fontSize: '16px',
                          lineHeight: '1.44',
                          fontWeight: 400,
                          marginTop: '12px',
                          color: '#555',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                      >
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-accent-blue font-semibold text-sm lg:text-base hover:text-accent-cyan transition-colors group/link"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
      </motion.div>
    </section>

      {/* Stats Section - Image Left, Stats Right */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex items-center justify-center"
            >
              <img
                src="/hst-05.png"
                alt="Stats Illustration"
                className="w-full max-w-md h-auto object-contain"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.style.display = 'none'
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full max-w-md mx-auto">
                        <div class="w-full aspect-square bg-gradient-to-br from-accent-blue/10 via-accent-cyan/10 to-accent-blue/10 rounded-2xl flex items-center justify-center">
                          <div class="text-center">
                            <div class="w-32 h-32 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                              <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                              </svg>
                            </div>
                            <p class="text-gray-600 text-lg">Growth & Achievement</p>
                          </div>
                        </div>
                      </div>
                    `
                  }
                }}
              />
            </motion.div>

            {/* Right Side - Stats Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-blue">
                  INSIGHT
                </span>
              </div>
              
              <h2 className="heading-title">
                Unlocking<br />
                Competitive Edge
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
                Revealing Our Key Differentiator.
              </p>

              {/* Statistics Grid - 2 Columns */}
              <div className="grid grid-cols-2 gap-6 lg:gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: false }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                    <span>10+</span>
                  </div>
                  <div className="text-sm text-gray-700">Projects Completed</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                    <CountUp end="100" className="inline" />
                    <span className="text-accent-blue">%</span>
                  </div>
                  <div className="text-sm text-gray-700">Dedication</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: false }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                    <CountUp end="24" className="inline" />/<CountUp end="7" className="inline" />
                  </div>
                  <div className="text-sm text-gray-700">Support Available</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: false }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                    <span>∞</span>
                  </div>
                  <div className="text-sm text-gray-700">Potential</div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: false }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-accent-blue text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-accent-blue-bright transition-all duration-300 group"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPreview
 