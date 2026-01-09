'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, CheckCircle, Sparkles } from 'lucide-react'
import { useRef } from 'react'

export default function PrivacyPolicy() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    content: useRef<HTMLElement>(null)
  }

  const privacyFeatures = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lock,
      title: 'Secure Storage',
      description: 'Your data is stored securely using encrypted systems and secure servers.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are transparent about how we collect, use, and share your information.',
      gradient: 'from-blue-600 to-cyan-400'
    },
    {
      icon: FileText,
      title: 'Your Rights',
      description: 'You have the right to access, update, or delete your personal information at any time.',
      gradient: 'from-cyan-400 to-blue-600'
    }
  ]

  const privacySections = [
    {
      title: 'Introduction',
      content: 'At Orbantis Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
      type: 'text'
    },
    {
      title: 'Information We Collect',
      content: 'We collect various types of information to provide and improve our services:',
      type: 'list',
      items: [
        'Personal Information: Name, email address, phone number, and other contact details you provide',
        'Usage Data: Information about how you interact with our website, including IP address, browser type, and pages visited',
        'Cookies: We use cookies to enhance your browsing experience and analyze website traffic',
        'Communication Data: Records of correspondence when you contact us'
      ],
      iconType: 'check'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect for various purposes:',
      type: 'list',
      items: [
        'To provide and maintain our services',
        'To notify you about changes to our services',
        'To provide customer support and respond to inquiries',
        'To analyze usage patterns and improve our website',
        'To send marketing communications (with your consent)',
        'To detect and prevent fraud or security issues'
      ],
      iconType: 'check'
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.',
      type: 'text'
    },
    {
      title: 'Your Rights',
      content: 'You have the following rights regarding your personal information:',
      type: 'list',
      items: [
        'Right to access: Request a copy of your personal data',
        'Right to rectification: Correct inaccurate or incomplete data',
        'Right to erasure: Request deletion of your personal data',
        'Right to restrict processing: Limit how we use your data',
        'Right to data portability: Receive your data in a structured format',
        'Right to object: Object to processing of your personal data'
      ],
      iconType: 'check'
    },
    {
      title: 'Cookies',
      content: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
      type: 'text'
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
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
                <Shield className="w-6 h-6 text-accent-blue mr-3" />
              </motion.div>
              <span className="text-gray-900 font-semibold font-poppins text-sm lg:text-base">Privacy Policy</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-poppins font-extrabold text-gray-900 mb-6 leading-tight"
            >
              Your Privacy{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue bg-clip-text text-transparent">
                  Matters
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
              We are committed to protecting your privacy and ensuring the security of your personal information.
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
              Our Privacy <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Commitment</span>
            </h2>
            <p className="text-lg text-gray-600 font-poppins max-w-2xl mx-auto">
              Comprehensive protection and transparency for your personal data
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {privacyFeatures.map((feature, index) => (
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

      {/* Privacy Content Section */}
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
            {privacySections.map((section, index) => (
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
                              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform">
                                <CheckCircle className="w-5 h-5 text-white" />
                              </div>
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
              <Shield className="w-5 h-5 text-accent-blue" />
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
