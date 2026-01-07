'use client'

import { motion } from 'framer-motion'
import { Lightbulb, DollarSign, FileText, Target, Zap, Users, Award, Clock, Globe, Brain, Code, Smartphone, Database } from 'lucide-react'
import CountUp from '@/components/CountUp'
import { useRef } from 'react'

export default function About() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    coreBeliefs: useRef<HTMLElement>(null),
    values: useRef<HTMLElement>(null),
    strengths: useRef<HTMLElement>(null)
  }

  const foundationalValues = [
    {
      icon: Lightbulb,
      title: 'Invent the Future',
      description: 'We continuously innovate and create cutting-edge solutions that shape tomorrow\'s technology landscape.',
      gradient: 'from-accent-blue to-accent-cyan'
    },
    {
      icon: DollarSign,
      title: 'Be Budget-Efficient',
      description: 'We deliver maximum value while maintaining cost-effectiveness, ensuring optimal ROI for our clients.',
      gradient: 'from-accent-cyan to-accent-blue'
    },
    {
      icon: FileText,
      title: 'Be Open and Accountable',
      description: 'Transparency and accountability are at the core of everything we do, building trust through honest communication.',
      gradient: 'from-accent-blue to-accent-cyan' 
    },
    {
      icon: Target,
      title: 'Stand by Your Goals',
      description: 'We are committed to achieving your objectives, delivering results that align with your vision and mission.',
      gradient: 'from-accent-cyan to-accent-blue'
    }
  ]

  const stats = [
    { number: '10+', label: 'Projects Completed', icon: Users },
    { number: '100%', label: 'Dedication', icon: Award },
    { number: '5+', label: 'Years Experience', icon: Clock },
    { number: '∞', label: 'Potential', icon: Globe }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Light Theme with Image Background */}
      <section 
        ref={sectionRefs.hero}
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 lg:pt-24"
      >
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <motion.img
                src="/banner-image-04.png"
                alt="Banner Illustration"
                className="w-full h-auto max-w-xs lg:max-w-sm object-contain"
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

            {/* Right Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <p 
                style={{
                  textAlign: 'left',
                  fontSize: '18px',
                  lineHeight: '1.44',
                  fontWeight: 400,
                  color: '#555',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                <span className="text-accent-blue font-bold">We are creators and innovators in digital transformation.</span>
                <span className="text-gray-700"> Our goal is to help you succeed in the digital world with the latest technologies and reliable solutions. Our experienced team is committed to delivering the best. Ready to go digital? Think Orbantis.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Beliefs Section */}
     

      {/* Foundational Values Section */}
      <section 
        ref={sectionRefs.values}
        className="relative py-24 bg-gradient-to-br from-light-200 via-white to-light-200 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {foundationalValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">
                  {value.title}
                </h3>
                <p 
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.44',
                    fontWeight: 400,
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-xl lg:text-2xl font-bold text-gray-900 font-poppins"
          >
            These aren't just words—they're the building blocks of everything we stand for.
          </motion.p>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative py-10 bg-gradient-to-br from-white via-light-200 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src="/new.png"
              alt="About"
              className="w-full max-w-6xl h-auto object-contain rounded-2xl"
              onError={(e) => {
                console.error('❌ Image not found')
                e.currentTarget.style.display = 'none'
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-gradient-to-br from-accent-blue/5 via-accent-cyan/5 to-accent-blue/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Our <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue bg-clip-text text-transparent">Impact</span>
            </h2>
            <p 
              style={{
                fontSize: '18px',
                lineHeight: '1.44',
                fontWeight: 400,
                color: '#555',
                fontFamily: 'Poppins, sans-serif'
              }}
              className="max-w-4xl mx-auto"
            >
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <CountUp end={stat.number} className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent mb-2 block" />
                <div className="text-gray-600 text-sm lg:text-base font-medium font-poppins">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
