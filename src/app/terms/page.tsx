'use client'

import { motion } from 'framer-motion'
import { FileText, Scale, CheckCircle, AlertCircle, Shield, Sparkles } from 'lucide-react'
import { useRef } from 'react'

export default function TermsOfService() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    content: useRef<HTMLElement>(null)
  }

  const termsFeatures = [
    {
      icon: FileText,
      title: 'Clear Terms',
      description: 'Transparent and easy-to-understand terms and conditions for all our services.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Scale,
      title: 'Fair Usage',
      description: 'Fair and reasonable terms that protect both parties in our business relationship.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Legal Protection',
      description: 'Comprehensive legal framework to ensure clarity and protection for all parties.',
      gradient: 'from-blue-600 to-cyan-400'
    },
    {
      icon: CheckCircle,
      title: 'Compliance',
      description: 'All terms comply with applicable laws and regulations.',
      gradient: 'from-cyan-400 to-blue-600'
    }
  ]

  const termsSections = [
    {
      title: 'Agreement to Terms',
      content: 'By accessing or using the services provided by Orbantis Technologies, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.',
      type: 'text'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily access and use our services for personal or commercial purposes. This license does not include:',
      type: 'list',
      items: [
        'Modifying or copying materials from our website',
        'Using materials for commercial purposes without permission',
        'Removing copyright or proprietary notations',
        'Transferring materials to another person or server'
      ],
      iconType: 'alert'
    },
    {
      title: 'Service Description',
      content: 'Orbantis Technologies provides the following services:',
      type: 'list',
      items: [
        'Web development and design services',
        'Mobile application development',
        'AI and machine learning solutions',
        'UI/UX design services',
        'Backend development and API integration',
        'Data analytics and business intelligence',
        'Testing and quality assurance services'
      ],
      iconType: 'check'
    },
    {
      title: 'Payment Terms',
      content: 'Payment terms will be specified in individual project agreements. Generally:',
      type: 'list',
      items: [
        'Payment schedules are agreed upon before project commencement',
        'Invoices are due within the specified payment terms',
        'Late payments may incur additional charges',
        'All prices are subject to change without notice',
        'Refunds are handled on a case-by-case basis'
      ],
      iconType: 'check'
    },
    {
      title: 'Intellectual Property',
      content: 'All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the property of Orbantis Technologies and are protected by copyright, trademark, and other intellectual property laws.',
      type: 'text'
    },
    {
      title: 'Limitation of Liability',
      content: 'In no event shall Orbantis Technologies be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.',
      type: 'text'
    },
    {
      title: 'Termination',
      content: 'We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms of Service.',
      type: 'text'
    },
    {
      title: 'Changes to Terms',
      content: 'We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.',
      type: 'text'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section 
        ref={sectionRefs.hero}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 lg:pt-24"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-accent-cyan/10 to-accent-blue/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-white/80 backdrop-blur-md rounded-full px-6 py-3 mb-8 shadow-xl border border-accent-blue/20"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <FileText className="w-6 h-6 text-accent-blue mr-3" />
              </motion.div>
              <span className="text-gray-900 font-semibold font-poppins text-sm lg:text-base">Terms of Service</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-poppins font-extrabold text-gray-900 mb-6 leading-tight"
            >
              Terms of{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue bg-clip-text text-transparent">
                  Service
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-accent-blue/30 via-accent-cyan/30 to-accent-blue/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-poppins font-medium"
            >
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-4">
              What We <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 font-poppins max-w-2xl mx-auto">
              Transparent, fair, and comprehensive terms designed to protect both parties
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {termsFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-accent-blue/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-poppins text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section 
        ref={sectionRefs.content}
        className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent-blue/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-cyan/5 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {termsSections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/20 via-accent-cyan/20 to-accent-blue/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 lg:p-10 border-2 border-gray-100 hover:border-accent-blue/30 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-xl flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 pt-1">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="ml-16">
                    <p className="text-gray-700 leading-relaxed font-poppins text-lg mb-6">
                      {section.content}
                    </p>
                    
                    {section.type === 'list' && section.items && (
                      <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                      >
                        {section.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            variants={itemVariants}
                            className="flex items-start space-x-4 group/item"
                          >
                            <div className="flex-shrink-0 mt-1">
                              {section.iconType === 'alert' ? (
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform">
                                  <AlertCircle className="w-5 h-5 text-white" />
                                </div>
                              ) : (
                                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform">
                                  <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                              )}
                            </div>
                            <span className="text-gray-700 leading-relaxed font-poppins text-lg pt-1">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 rounded-2xl px-8 py-4 border border-accent-blue/20">
              <FileText className="w-5 h-5 text-accent-blue" />
              <p className="text-gray-700 font-poppins font-medium">
                Last Updated: <span className="text-accent-blue font-semibold">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
