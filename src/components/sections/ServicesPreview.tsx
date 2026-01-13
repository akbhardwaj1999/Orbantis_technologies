'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Code, Smartphone, Brain, Palette, Database, Shield, ArrowRight, Sparkles, CheckCircle, Clock, Globe, Server, Image, Search } from 'lucide-react'
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
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Robust and scalable backend solutions to power your applications with optimal performance.',
      image: '/backend.png',
      href: '/services/backend-development'
    },
    {
      icon: Image,
      title: 'Graphic Design',
      description: 'Creative and compelling visual designs that capture your brand essence and engage your audience.',
      image: '/graphic.png',
      href: '/services/graphic-design'
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.',
      image: '/seo.png',
      href: '/services/seo'
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
            className="text-center px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Our Services
            </h2>
            <p className="max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg text-gray-700 font-poppins px-2 sm:px-4">
              Transform Your Business
            </p>
          </motion.div>

        {/* Services Grid - White Cards with Icons */}
            <div className="pt-2 pb-8 sm:pb-12">
              <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: false }}
                      className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300 group"
                    >
                      {/* Icon */}
                      <div className="mb-3 sm:mb-4 flex justify-center">
                        <div className={`${service.title === 'Backend Development' || service.title === 'Graphic Design' || service.title === 'SEO' ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-14 h-14 sm:w-16 sm:h-16'} flex items-center justify-center`}>
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-contain max-w-full max-h-full"
                            style={service.title === 'Backend Development' || service.title === 'Graphic Design' || service.title === 'SEO' ? { minWidth: '60px', minHeight: '60px' } : {}}
                            onError={(e) => {
                              // Fallback to icon if image doesn't exist
                              e.currentTarget.style.display = 'none'
                              const parent = e.currentTarget.parentElement
                              const isLargeIcon = service.title === 'Backend Development' || service.title === 'Graphic Design' || service.title === 'SEO'
                              if (parent) {
                                parent.innerHTML = `
                                  <div class="${isLargeIcon ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-14 h-14 sm:w-16 sm:h-16'} bg-accent-blue/10 rounded-xl flex items-center justify-center">
                                    <svg class="${isLargeIcon ? 'w-12 h-12 sm:w-16 sm:h-16' : 'w-10 h-10 sm:w-12 sm:h-12'} text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base text-left leading-relaxed text-gray-700 font-poppins">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="flex justify-center">
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-accent-blue font-semibold text-xs sm:text-sm md:text-base hover:text-accent-cyan transition-colors group/link"
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
      </motion.div>
    </section>

      {/* Stats Section - Image Left, Stats Right */}
      <section className="relative bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex items-center justify-center order-2 lg:order-1"
            >
              <img
                src="/hst-05.png"
                alt="Stats Illustration"
                className="w-full max-w-[280px] sm:max-w-sm md:max-w-md h-auto object-contain"
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
              className="order-1 lg:order-2"
            >
              <div className="mb-2">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-accent-blue">
                  INSIGHT
                </span>
              </div>
              
              <h2 className="heading-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Unlocking<br />
                Competitive Edge
              </h2>
              
              <p 
                className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg"
                style={{
                  textAlign: 'left',
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
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: false }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                    <span>10+</span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">Projects Completed</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                    <CountUp end="100" className="inline" />
                    <span className="text-accent-blue">%</span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">Dedication</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: false }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                    <CountUp end="24" className="inline" />/<CountUp end="7" className="inline" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">Support Available</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: false }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                    <span>∞</span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">Potential</div>
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
                  className="inline-flex items-center bg-accent-blue text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:bg-accent-blue-bright transition-all duration-300 group"
                >
                  Get in touch
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
 