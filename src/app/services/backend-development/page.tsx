'use client'

import { motion } from 'framer-motion'
import { Code, CheckCircle, ArrowRight, Star, Clock, Users, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function BackendDevelopment() {
  const features = [
    {
      icon: Code,
      title: 'Django & Python Backend',
      description: 'Robust backend systems built with Django framework for scalable applications.',
      benefits: ['Rapid development', 'Built-in admin panel', 'ORM integration', 'Security features']
    },
    {
      icon: Code,
      title: 'FastAPI Development',
      description: 'High-performance APIs using FastAPI for modern web applications.',
      benefits: ['Automatic documentation', 'Type hints', 'High performance', 'Easy testing']
    },
    {
      icon: Code,
      title: 'RESTful API Development',
      description: 'Well-designed REST APIs that follow industry best practices and standards.',
      benefits: ['RESTful architecture', 'HTTP methods', 'Status codes', 'API versioning']
    },
    {
      icon: Code,
      title: 'Microservices Architecture',
      description: 'Scalable microservices architecture for large-scale applications.',
      benefits: ['Service independence', 'Scalability', 'Technology diversity', 'Fault isolation']
    }
  ]

  const technologies = [
    { name: 'Django', category: 'Framework', description: 'High-level Python web framework' },
    { name: 'FastAPI', category: 'Framework', description: 'Modern, fast web framework for APIs' },
    { name: 'Python', category: 'Language', description: 'Versatile programming language' },
    { name: 'PostgreSQL', category: 'Database', description: 'Advanced open-source database' },
    { name: 'MongoDB', category: 'Database', description: 'NoSQL document database' },
    { name: 'Redis', category: 'Cache', description: 'In-memory data structure store' },
    { name: 'AWS', category: 'Cloud', description: 'Amazon Web Services cloud platform' },
    { name: 'Docker', category: 'Container', description: 'Containerization platform' }
  ]

  const process = [
    {
      step: '01',
      title: 'Architecture Planning',
      description: 'Design scalable backend architecture and define system requirements.'
    },
    {
      step: '02',
      title: 'Database Design',
      description: 'Design and implement database schemas optimized for performance.'
    },
    {
      step: '03',
      title: 'API Development',
      description: 'Build robust APIs with proper authentication and error handling.'
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Comprehensive testing and deployment to production environments.'
    }
  ]

  const stats = [
    { number: '35+', label: 'Backend Projects', icon: Code },
    { number: '99%', label: 'Uptime Guarantee', icon: Star },
    { number: '24/7', label: 'Server Monitoring', icon: Clock },
    { number: '100%', label: 'Security Compliance', icon: Shield }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
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
              <Code className="w-6 h-6 text-white mr-3" />
              <span className="text-white font-semibold">Backend Development</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-white mb-6">
              Robust <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">Backend Development</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Build scalable, secure, and high-performance backend systems using Django, FastAPI, 
              and modern technologies. We create the foundation that powers your applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                <span>View Backend Projects</span>
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
                <div className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
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
              Our <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Backend Development</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From API development to database design, we create robust backend systems 
              that scale with your business and provide reliable performance.
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
              Technologies We <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We use cutting-edge backend technologies and frameworks to create 
              scalable, secure, and high-performance server-side solutions.
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
                    <Code className="w-6 h-6 text-white" />
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
              Our Backend Development <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to backend development that ensures your server-side 
              solutions are robust, scalable, and deliver optimal performance.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
              Ready to Build a <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">Powerful Backend?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your backend requirements and create robust server-side 
              solutions that power your applications and scale with your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <span>Start Your Backend Project</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="tel:+918352841945"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                <span>Call +91 8352841945</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
