'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle, ArrowRight, Star, Clock, Users, Zap, Bug } from 'lucide-react'
import Link from 'next/link'
import CountUp from '@/components/CountUp'

export default function TestingQA() {
  const features = [
    {
      icon: Shield,
      title: 'Automated Testing',
      description: 'Comprehensive automated testing solutions using modern testing frameworks.',
      benefits: ['Faster test execution', 'Consistent results', 'Regression testing', 'CI/CD integration']
    },
    {
      icon: Shield,
      title: 'Manual Testing',
      description: 'Thorough manual testing to ensure user experience and functionality.',
      benefits: ['User perspective testing', 'Edge case coverage', 'Usability testing', 'Exploratory testing']
    },
    {
      icon: Shield,
      title: 'Performance Testing',
      description: 'Load testing and performance optimization to ensure optimal application speed.',
      benefits: ['Load testing', 'Stress testing', 'Performance monitoring', 'Optimization recommendations']
    },
    {
      icon: Shield,
      title: 'Security Testing',
      description: 'Comprehensive security testing to protect against vulnerabilities and threats.',
      benefits: ['Vulnerability assessment', 'Penetration testing', 'Security audits', 'Compliance testing']
    }
  ]

  const technologies = [
    { name: 'Selenium', category: 'Automation', description: 'Web browser automation framework' },
    { name: 'Jest', category: 'Testing', description: 'JavaScript testing framework' },
    { name: 'Cypress', category: 'E2E Testing', description: 'End-to-end testing framework' },
    { name: 'Postman', category: 'API Testing', description: 'API development and testing platform' },
    { name: 'JMeter', category: 'Performance', description: 'Load testing and performance measurement' },
    { name: 'TestRail', category: 'Management', description: 'Test case management platform' },
    { name: 'Bug Tracking', category: 'Management', description: 'Bug tracking and issue management' },
    { name: 'Docker', category: 'Container', description: 'Containerization for testing environments' }
  ]

  const process = [
    {
      step: '01',
      title: 'Test Planning',
      description: 'Define testing strategy, scope, and create comprehensive test plans.'
    },
    {
      step: '02',
      title: 'Test Design',
      description: 'Create test cases, test scenarios, and prepare testing environments.'
    },
    {
      step: '03',
      title: 'Test Execution',
      description: 'Execute tests, identify issues, and provide detailed bug reports.'
    },
    {
      step: '04',
      title: 'Reporting & Analysis',
      description: 'Generate test reports, analyze results, and provide recommendations.'
    }
  ]

  const stats = [
    { number: '45+', label: 'Projects Tested', icon: Shield },
    { number: '99%', label: 'Bug Detection Rate', icon: Star },
    { number: '24/7', label: 'Testing Support', icon: Clock },
    { number: '100%', label: 'Quality Assurance', icon: Bug }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 overflow-hidden dark:from-teal-600 dark:via-cyan-600 dark:to-blue-600">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
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
              <Shield className="w-6 h-6 text-white mr-3" />
              <span className="text-white font-semibold">Testing & Quality Assurance</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-white dark:text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">Testing & QA</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Ensure your applications are bug-free, secure, and perform optimally with our 
              comprehensive testing and quality assurance services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300"
              >
                <span>View Testing Projects</span>
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
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <CountUp end={stat.number} className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2" />
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
              Our <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Testing & QA</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From automated testing to security audits, we provide comprehensive quality assurance 
              services that ensure your applications meet the highest standards.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center">
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
              Testing Tools We <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We use industry-leading testing tools and frameworks to ensure comprehensive 
              coverage and deliver reliable, high-quality applications.
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
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-navy mb-2">{tech.name}</h3>
                  <p className="text-sm text-teal-600 font-medium mb-2">{tech.category}</p>
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
              Our Testing <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to testing that ensures your applications are thoroughly 
              tested and meet the highest quality standards.
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
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
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
