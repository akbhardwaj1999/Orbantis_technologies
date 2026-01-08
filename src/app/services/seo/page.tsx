'use client'

import { motion } from 'framer-motion'
import { Search, CheckCircle, ArrowRight, Star, Clock, Users, Shield, Zap } from 'lucide-react'
import Link from 'next/link'
import CountUp from '@/components/CountUp'

export default function SEO() {
  const features = [
    {
      icon: Search,
      title: 'On-Page SEO',
      description: 'Optimize your website content, meta tags, and structure to improve search engine rankings.',
      benefits: ['Keyword optimization', 'Meta tags optimization', 'Content optimization', 'Internal linking']
    },
    {
      icon: Search,
      title: 'Off-Page SEO',
      description: 'Build quality backlinks and improve your website authority through strategic link building.',
      benefits: ['Link building', 'Social media marketing', 'Guest posting', 'Brand mentions']
    },
    {
      icon: Search,
      title: 'Technical SEO',
      description: 'Improve website speed, mobile-friendliness, and technical aspects that affect search rankings.',
      benefits: ['Site speed optimization', 'Mobile optimization', 'Schema markup', 'XML sitemaps']
    },
    {
      icon: Search,
      title: 'Local SEO',
      description: 'Improve your local search visibility and attract customers in your geographic area.',
      benefits: ['Google My Business', 'Local citations', 'Local keywords', 'Review management']
    }
  ]

  const technologies = [
    { name: 'Google Analytics', category: 'Analytics', description: 'Track website traffic and user behavior' },
    { name: 'Google Search Console', category: 'Tool', description: 'Monitor search performance and indexing' },
    { name: 'SEMrush', category: 'Tool', description: 'Comprehensive SEO and keyword research platform' },
    { name: 'Ahrefs', category: 'Tool', description: 'Advanced SEO tools for backlink analysis' },
    { name: 'Moz', category: 'Tool', description: 'SEO software for keyword research and site audits' },
    { name: 'Screaming Frog', category: 'Tool', description: 'Website crawler for technical SEO audits' },
    { name: 'PageSpeed Insights', category: 'Tool', description: 'Analyze and improve website performance' },
    { name: 'Schema.org', category: 'Standard', description: 'Structured data markup for better search results' }
  ]

  const process = [
    {
      step: '01',
      title: 'SEO Audit & Analysis',
      description: 'Conduct a comprehensive audit of your website to identify SEO opportunities and issues.'
    },
    {
      step: '02',
      title: 'Keyword Research',
      description: 'Research and identify the best keywords for your business to target in search engines.'
    },
    {
      step: '03',
      title: 'Optimization & Implementation',
      description: 'Implement on-page and technical SEO improvements to boost your search rankings.'
    },
    {
      step: '04',
      title: 'Monitoring & Reporting',
      description: 'Continuously monitor performance, track rankings, and provide detailed monthly reports.'
    }
  ]

  const stats = [
    { number: '200+', label: 'Keywords Ranked', icon: Search },
    { number: '150%', label: 'Traffic Increase', icon: Star },
    { number: '24/7', label: 'Monitoring', icon: Clock },
    { number: '100%', label: 'Client Satisfaction', icon: Shield }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden dark:from-green-600 dark:via-emerald-600 dark:to-teal-600">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"></div>
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
              <Search className="w-6 h-6 text-white mr-3" />
              <span className="text-white font-semibold">SEO Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-white dark:text-white mb-6">
              Search Engine <span className="bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">Optimization</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Improve your website visibility and drive organic traffic with our comprehensive SEO services that boost your search engine rankings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <CountUp end={stat.number} className="text-3xl lg:text-4xl font-bold text-green-600 mb-2" />
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
              Our <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">SEO Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive SEO solutions to improve your search engine rankings and drive organic traffic to your website.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
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
              SEO Tools We <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Use</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We use industry-leading SEO tools and platforms to analyze, optimize, and improve your search engine performance.
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
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-navy mb-2">{tech.name}</h3>
                  <p className="text-sm text-green-600 font-medium mb-2">{tech.category}</p>
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
              Our SEO <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to SEO that ensures your website achieves better search engine rankings and increased organic traffic.
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
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"></div>
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

