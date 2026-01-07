'use client'

import { motion } from 'framer-motion'
import { Brain, CheckCircle, ArrowRight, Star, Clock, Users, Shield, Zap } from 'lucide-react'
import Link from 'next/link'
import CountUp from '@/components/CountUp'

export default function AIMachineLearning() {
  const features = [
    {
      icon: Brain,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that understands and responds to user queries naturally.',
      benefits: ['Natural language processing', '24/7 customer support', 'Multi-language support', 'Integration with existing systems']
    },
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Custom ML models for predictive analytics, pattern recognition, and data insights.',
      benefits: ['Predictive analytics', 'Pattern recognition', 'Automated decision making', 'Continuous learning']
    },
    {
      icon: Brain,
      title: 'Computer Vision Solutions',
      description: 'AI-powered image and video analysis for various business applications.',
      benefits: ['Object detection', 'Image classification', 'Facial recognition', 'Quality control automation']
    },
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced text analysis and language understanding for business intelligence.',
      benefits: ['Sentiment analysis', 'Text summarization', 'Language translation', 'Content generation']
    }
  ]

  const technologies = [
    { name: 'Python', category: 'Language', description: 'Primary language for AI/ML development' },
    { name: 'TensorFlow', category: 'Framework', description: 'Google\'s open-source ML platform' },
    { name: 'PyTorch', category: 'Framework', description: 'Facebook\'s deep learning framework' },
    { name: 'Scikit-learn', category: 'Library', description: 'Machine learning library for Python' },
    { name: 'OpenAI', category: 'API', description: 'Advanced AI models and services' },
    { name: 'LangChain', category: 'Framework', description: 'Framework for LLM applications' },
    { name: 'Pandas', category: 'Library', description: 'Data manipulation and analysis' },
    { name: 'NumPy', category: 'Library', description: 'Numerical computing with Python' }
  ]

  const process = [
    {
      step: '01',
      title: 'Data Analysis & Strategy',
      description: 'Analyze your data, define AI objectives, and create a comprehensive AI strategy.'
    },
    {
      step: '02',
      title: 'Model Development',
      description: 'Design and train custom AI models using the latest machine learning techniques.'
    },
    {
      step: '03',
      title: 'Integration & Testing',
      description: 'Integrate AI solutions into your existing systems and conduct thorough testing.'
    },
    {
      step: '04',
      title: 'Deployment & Monitoring',
      description: 'Deploy AI solutions to production and provide ongoing monitoring and optimization.'
    }
  ]

  const stats = [
    { number: '25+', label: 'AI Projects Completed', icon: Brain },
    { number: '95%', label: 'Accuracy Rate', icon: Star },
    { number: '24/7', label: 'AI Monitoring', icon: Clock },
    { number: '100%', label: 'Client Satisfaction', icon: Shield }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl"></div>
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
              <Brain className="w-6 h-6 text-white mr-3" />
              <span className="text-white font-semibold">AI & Machine Learning</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-pink-400 to-white bg-clip-text text-transparent">AI & Machine Learning</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Harness the power of artificial intelligence and machine learning to automate processes, 
              gain insights from data, and create intelligent solutions that transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                <span>View AI Projects</span>
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <CountUp end={stat.number} className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2" />
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
              Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">AI & ML</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From chatbots to predictive analytics, we create intelligent solutions that 
              automate processes and provide valuable insights for your business.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
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
              Technologies We <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We use cutting-edge AI and machine learning technologies to create 
              intelligent solutions that drive business innovation.
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
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-navy mb-2">{tech.name}</h3>
                  <p className="text-sm text-purple-600 font-medium mb-2">{tech.category}</p>
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
              Our AI Development <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to AI development that ensures your intelligent solutions 
              are delivered on time and exceed your expectations.
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
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
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
