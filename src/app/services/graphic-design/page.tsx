'use client'

import { motion } from 'framer-motion'
import { Palette, CheckCircle, ArrowRight, Star, Clock, Users, Shield, Zap } from 'lucide-react'
import Link from 'next/link'
import CountUp from '@/components/CountUp'

export default function GraphicDesign() {
  const features = [
    {
      icon: Palette,
      title: 'Logo Design',
      description: 'Unique and memorable logo designs that represent your brand identity and values.',
      benefits: ['Brand identity creation', 'Multiple design concepts', 'Vector format delivery', 'Brand guidelines']
    },
    {
      icon: Palette,
      title: 'Brand Identity Design',
      description: 'Complete brand identity packages including logos, color schemes, typography, and brand guidelines.',
      benefits: ['Complete brand package', 'Color palette selection', 'Typography selection', 'Brand style guide']
    },
    {
      icon: Palette,
      title: 'Print Design',
      description: 'Professional print materials including brochures, flyers, business cards, and marketing materials.',
      benefits: ['Business cards', 'Brochures & flyers', 'Posters & banners', 'Print-ready files']
    },
    {
      icon: Palette,
      title: 'Digital Graphics',
      description: 'Eye-catching digital graphics for social media, websites, and digital marketing campaigns.',
      benefits: ['Social media graphics', 'Web banners', 'Email templates', 'Digital advertisements']
    }
  ]

  const technologies = [
    { name: 'Adobe Photoshop', category: 'Software', description: 'Professional image editing and graphic design' },
    { name: 'Adobe Illustrator', category: 'Software', description: 'Vector graphics and logo design' },
    { name: 'Adobe InDesign', category: 'Software', description: 'Layout design for print and digital media' },
    { name: 'Figma', category: 'Tool', description: 'Collaborative design and prototyping tool' },
    { name: 'Canva', category: 'Tool', description: 'Easy-to-use design platform for quick graphics' },
    { name: 'CorelDRAW', category: 'Software', description: 'Vector illustration and page layout' },
    { name: 'Sketch', category: 'Tool', description: 'Digital design toolkit for Mac' },
    { name: 'Adobe XD', category: 'Tool', description: 'UI/UX design and prototyping' }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Brief',
      description: 'We understand your brand, target audience, and design requirements through detailed discussions.'
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Create initial design concepts and present multiple options for your review and feedback.'
    },
    {
      step: '03',
      title: 'Refinement & Revisions',
      description: 'Refine the selected concept based on your feedback and make necessary adjustments.'
    },
    {
      step: '04',
      title: 'Final Delivery',
      description: 'Deliver final design files in all required formats with complete brand guidelines.'
    }
  ]

  const stats = [
    { number: '50+', label: 'Designs Created', icon: Palette },
    { number: '100%', label: 'Client Satisfaction', icon: Star },
    { number: '48hrs', label: 'Quick Turnaround', icon: Clock },
    { number: '100%', label: 'Original Designs', icon: Shield }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Palette className="w-6 h-6 text-white mr-3" />
              <span className="text-white font-semibold">Graphic Design</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-white dark:text-white mb-6">
              Creative <span className="bg-gradient-to-r from-pink-400 to-white bg-clip-text text-transparent">Graphic Design</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your brand with stunning visual designs that captivate your audience and communicate your message effectively.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <CountUp end={stat.number} className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-2" />
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Our <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Design Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From logos to complete brand identities, we create visually stunning designs that make your brand stand out.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-navy">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-poppins font-semibold text-navy mb-4">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Design Tools We <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We use industry-standard design tools and software to create professional graphics and visual designs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-navy mb-2">{tech.name}</h3>
                  <p className="text-sm text-indigo-600 font-medium mb-2">{tech.category}</p>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Our Design <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to graphic design that ensures your visual identity is created with precision and creativity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                  )}
                </div>
                <h3 className="text-xl font-poppins font-semibold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

