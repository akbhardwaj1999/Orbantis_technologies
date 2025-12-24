'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, Award, Clock, Globe, Zap } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations and drive measurable results.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients to understand their unique needs and goals.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of the curve by embracing cutting-edge technologies and creative problem-solving approaches.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards, ensuring transparency, honesty, and trust in all our relationships.'
    }
  ]

  const stats = [
    { number: 'New', label: 'Fresh Start', icon: Users },
    { number: '100%', label: 'Dedication', icon: Award },
    { number: '5+', label: 'Years Experience', icon: Clock },
    { number: '∞', label: 'Potential', icon: Globe }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy via-navy to-primary-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-aqua/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-aqua to-primary-400 bg-clip-text text-transparent">Orbantis Technologies</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Founded by <strong>Arun Kumar</strong>, we are a team of passionate developers, designers, and innovators dedicated to 
              transforming businesses through cutting-edge technology solutions across web development, mobile apps, AI automation, and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-navy to-aqua rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-poppins font-bold text-navy">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading force in digital transformation, empowering businesses worldwide 
                with innovative technology solutions that drive growth, efficiency, and success 
                in the ever-evolving digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-aqua to-primary-500 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-poppins font-bold text-navy">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver exceptional digital solutions that transform businesses, enhance user 
                experiences, and create lasting value through our expertise in web development, 
                mobile applications, AI automation, and digital innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="bg-gradient-to-r from-aqua to-primary-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-navy to-aqua rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-aqua to-primary-400 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-aqua" />
                </div>
                <div className="text-4xl font-bold text-aqua mb-2">{stat.number}</div>
                <div className="text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-aqua to-primary-400 bg-clip-text text-transparent">Founder</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              The visionary leader behind Orbantis Technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="w-32 h-32 bg-gradient-to-r from-aqua to-primary-400 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <span className="text-4xl font-bold text-white">AK</span>
              </div>
              <h3 className="text-3xl font-poppins font-bold text-white mb-4">Arun Kumar</h3>
              <p className="text-xl text-aqua mb-6">Founder & CEO</p>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                A passionate technologist with over 5+ years of experience in full-stack development, 
                AI automation, and digital transformation. Arun founded Orbantis Technologies with a 
                vision to democratize technology and help businesses scale through innovative solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
                  <div className="text-2xl font-bold text-aqua mb-1">5+</div>
                  <div className="text-gray-200 text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
                  <div className="text-2xl font-bold text-aqua mb-1">50+</div>
                  <div className="text-gray-200 text-sm">Projects Led</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <h4 className="text-xl font-poppins font-semibold text-white mb-3">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Django', 'Laravel', 'WordPress', 'Shopify', 'React Native', 'Python', 'AI/ML', 'SQL', 'ETL', 'SEO', 'Figma'].map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-white/20 text-white text-sm rounded-full hover:bg-aqua/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <h4 className="text-xl font-poppins font-semibold text-white mb-3">Vision</h4>
                <p className="text-gray-200 leading-relaxed">
                  "To create a world where technology empowers every business to achieve their dreams, 
                  regardless of size or industry. We believe in building solutions that are not just 
                  functional, but transformative."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose <span className="bg-gradient-to-r from-aqua to-primary-500 bg-clip-text text-transparent">Orbantis?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-navy to-aqua rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-navy mb-2">Cutting-Edge Technology</h3>
                  <p className="text-gray-600">We use the latest frameworks, tools, and methodologies to build future-proof solutions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-aqua to-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-navy mb-2">Expert Team</h3>
                  <p className="text-gray-600">Our experienced developers and designers bring years of expertise to every project.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-navy mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">98% client satisfaction rate with 50+ successful projects delivered on time and within budget.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 h-96 flex flex-col justify-center items-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 -right-20 w-40 h-40 bg-aqua/30 rounded-full filter blur-3xl"></div>
                  <div className="absolute bottom-1/4 -left-20 w-40 h-40 bg-primary-500/30 rounded-full filter blur-3xl"></div>
                </div>
                
                <div className="text-center relative z-10">
                  <div className="flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-105">
                    <img
                      src="/logo.png"
                      alt="Orbantis Logo"
                      className="h-24 w-auto object-contain drop-shadow-lg"
                    />
                  </div>
                  <p className="text-gray-700 text-lg font-medium max-w-md mx-auto leading-relaxed">
                    Building the future, <span className="text-navy font-semibold">one innovation at a time</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
