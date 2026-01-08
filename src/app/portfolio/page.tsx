'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Calendar, User } from 'lucide-react'
import Link from 'next/link'

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Django, and payment integration. Features include user authentication, product management, shopping cart, and secure payment processing.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Django', 'PostgreSQL', 'Stripe', 'AWS'],
      category: 'Web Development',
      client: 'TechStart Inc.',
      year: '2024',
      link: '#',
      github: '#',
      featured: true
    },
    {
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent customer support chatbot powered by OpenAI GPT-4. Handles customer inquiries, provides product information, and escalates complex issues to human agents.',
      image: '/api/placeholder/600/400',
      technologies: ['OpenAI', 'Python', 'FastAPI', 'React', 'LangChain'],
      category: 'AI & Automation',
      client: 'SupportPro Solutions',
      year: '2024',
      link: '#',
      github: '#',
      featured: true
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management features.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Biometric Auth'],
      category: 'Mobile Development',
      client: 'SecureBank',
      year: '2023',
      link: '#',
      github: '#',
      featured: false
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Real-time business intelligence dashboard with interactive charts, automated reports, and data visualization for enterprise clients.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Docker'],
      category: 'Web Development',
      client: 'DataFlow Corp',
      year: '2023',
      link: '#',
      github: '#',
      featured: false
    },
    {
      title: 'Food Delivery App',
      description: 'Cross-platform food delivery application with real-time tracking, payment integration, and restaurant management system.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'Google Maps'],
      category: 'Mobile Development',
      client: 'FoodieExpress',
      year: '2023',
      link: '#',
      github: '#',
      featured: false
    },
    {
      title: 'AI Content Generator',
      description: 'Automated content generation system using advanced NLP models. Creates blog posts, social media content, and marketing materials.',
      image: '/api/placeholder/600/400',
      technologies: ['OpenAI', 'Python', 'Django', 'React', 'Redis'],
      category: 'AI & Automation',
      client: 'ContentPro Agency',
      year: '2023',
      link: '#',
      github: '#',
      featured: false
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile Development', 'AI & Automation', 'UI/UX Design']

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy via-navy to-primary-600 overflow-hidden dark:from-navy dark:via-navy dark:to-primary-600">
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
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-white dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-aqua to-primary-400 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Discover our latest work and see how we've helped businesses transform 
              their digital presence with innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
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
              Featured <span className="bg-gradient-to-r from-aqua to-primary-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our most successful and innovative projects that showcase our expertise 
              and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy/20 to-aqua/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-navy">{project.title.charAt(0)}</span>
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-aqua rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <Github className="w-5 h-5 text-navy" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-aqua/10 text-aqua text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm">Featured</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-navy to-aqua text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      View Project
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
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
              All <span className="bg-gradient-to-r from-aqua to-primary-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of our work across different industries and technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy/20 to-aqua/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-navy">{project.title.charAt(0)}</span>
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-aqua rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <Github className="w-5 h-5 text-navy" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-aqua/10 text-aqua text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    {project.featured && (
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-xs">Featured</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-poppins font-semibold text-navy mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-navy to-aqua text-white px-4 py-2 rounded-lg font-semibold text-center text-sm hover:shadow-lg transition-all duration-300"
                    >
                      View
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-primary-600 dark:from-navy dark:to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white dark:text-white mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-aqua to-primary-400 bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-xl text-gray-200 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and create something amazing together. 
              Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-navy px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white dark:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-navy transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
