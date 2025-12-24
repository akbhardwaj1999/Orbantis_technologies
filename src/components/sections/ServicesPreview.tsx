'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code, Smartphone, Brain, Palette, ArrowRight } from 'lucide-react'

const ServicesPreview = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'React, Next.js, Laravel, WordPress, Shopify - Full-stack web solutions for every business need.',
      technologies: ['React', 'Laravel', 'WordPress', 'Shopify'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps using React Native and Flutter. Native performance with shared codebase.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'AI chatbots, machine learning models, data analytics, ETL processes, and intelligent automation solutions.',
      technologies: ['AI/ML', 'Python', 'SQL', 'ETL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'UI/UX & SEO',
      description: 'Figma designs, SEO optimization, digital marketing, and complete brand identity solutions.',
      technologies: ['Figma', 'SEO', 'Marketing', 'Branding'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Our <span className="bg-gradient-to-r from-aqua to-primary-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions to transform your business. From web development, mobile apps, 
            AI & machine learning, data analytics, to SEO optimization - we deliver end-to-end technology solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-poppins font-semibold text-navy mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <Link
                href="/services"
                className="inline-flex items-center text-aqua font-medium hover:text-primary-600 transition-colors group-hover:translate-x-1 transform duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-navy to-primary-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-poppins font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. 
              Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-navy px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-navy transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
