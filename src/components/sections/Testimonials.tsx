'use client'

import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
            Why Choose <span className="bg-gradient-to-r from-aqua to-primary-500 bg-clip-text text-transparent">Orbantis?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a new company with fresh ideas, modern technology, and a commitment to excellence. 
            Let us prove our worth through our work.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Fresh Perspective',
              description: 'As a new company, we bring fresh ideas and modern approaches to every project.',
              icon: '💡'
            },
            {
              title: 'Modern Technology',
              description: 'We use the latest technologies and frameworks to build cutting-edge solutions.',
              icon: '🚀'
            },
            {
              title: 'Personal Attention',
              description: 'Every client gets our full attention and dedication to their project success.',
              icon: '🎯'
            },
            {
              title: 'Competitive Pricing',
              description: 'New company rates with premium quality work and service.',
              icon: '💰'
            },
            {
              title: 'Fast Delivery',
              description: 'Quick turnaround times without compromising on quality.',
              icon: '⚡'
            },
            {
              title: 'Future-Ready',
              description: 'We build solutions that will grow with your business.',
              icon: '🔮'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-poppins font-semibold text-navy mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-navy to-primary-600 rounded-3xl p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-aqua mb-2">New</div>
              <div className="text-gray-200">Fresh Start</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-aqua mb-2">100%</div>
              <div className="text-gray-200">Dedication</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-aqua mb-2">24/7</div>
              <div className="text-gray-200">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-aqua mb-2">∞</div>
              <div className="text-gray-200">Potential</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials