'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, List, Share2, Headphones, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    }, 3000)
  }

  const supportCards = [
    {
      icon: List,
      title: 'Quick Answers',
      description: 'Find brief answers to your short questions here.',
      buttonText: 'Read More',
      link: '#',
      gradient: 'from-accent-blue to-accent-cyan'
    },
    {
      icon: Phone,
      title: "Let's Talk",
      description: 'Pick up the phone to chat with a member of our team.',
      buttonText: 'Call Us',
      link: 'tel:+919805871945',
      gradient: 'from-accent-blue to-accent-cyan'
    },
    {
      icon: Share2,
      title: 'We are Social',
      description: 'Get involved in making the dream a reality today.',
      buttonText: 'Join our Community',
      link: '#',
      gradient: 'from-accent-cyan to-accent-blue'
    },
    {
      icon: Headphones,
      title: 'Support',
      description: "We're here to help with any questions or queries.",
      buttonText: 'Help & Support',
      link: '#',
      gradient: 'from-accent-blue to-accent-cyan'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Section with Gradient Background */}
      <section className="relative py-10 lg:py-20 overflow-hidden pt-20 lg:pt-24">
        {/* Gradient Background with Wave */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-blue to-accent-cyan"></div>
          {/* Wave Shape - At the bottom of the form section */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 lg:h-32">
              <path d="M0,120 L0,80 Q360,40 720,80 T1440,80 L1440,120 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl max-w-lg mx-auto lg:mx-0"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 font-poppins">
                Have some questions or want to say hi?
              </h2>
              <p className="text-gray-600 mb-6 text-base">
                Anything you ask, no matter how small, will make a big difference in helping us.
              </p>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="heading text-gray-900 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for your message. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-light-200 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-300 placeholder-gray-400 text-base"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-light-200 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-300 placeholder-gray-400 text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-light-200 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-300 placeholder-gray-400 text-base resize-none"
                      placeholder="Your message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white px-6 py-3 rounded-lg font-bold text-base hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-end ml-auto"
            >
              <motion.img
                src="/contact-01.png"
                alt="Contact us"
                className="w-full max-w-2xl max-h-[500px] h-auto object-contain"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                  ease: "easeInOut"
                }}
                onError={(e) => {
                  // Fallback placeholder
                  e.currentTarget.style.display = 'none'
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full max-w-lg mx-auto bg-white/20 rounded-lg flex items-center justify-center p-8">
                        <div class="text-center">
                          <div class="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                          </div>
                          <p class="text-white text-lg">Contact Us</p>
                        </div>
                      </div>
                    `
                  }
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Middle Section - Support Cards */}
      <section className="py-20 bg-light-200 relative overflow-hidden">
        {/* Dotted Pattern Background */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
              WE WORK SEAMLESSLY WITH OUR CLIENTS FOR THE LONG-TERM
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto font-poppins">
              Give us a call or drop by anytime, we endeavor to answer all inquiries within 24 hours.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCards.map((card, index) => (
              <motion.a
                key={card.title}
                href={card.link}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">
                  {card.title}
                </h3>
                <p 
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.44',
                    fontWeight: 400,
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                  className="mb-6"
                >
                  {card.description}
                </p>
                <button className="text-accent-blue font-semibold hover:text-accent-cyan transition-colors flex items-center space-x-2">
                  <span>{card.buttonText}</span>
                  <Send className="w-4 h-4" />
                </button>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section - Contact Info & Hours */}
      <section className="py-20 bg-light-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Address & Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-accent-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 font-medium mb-2 font-poppins">Address</p>
                      <p 
                        style={{
                          fontSize: '18px',
                          lineHeight: '1.44',
                          fontWeight: 400,
                          color: '#555',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                      >
                        Locality: Ghumarwin, District: Bilaspur, State: Himachal Pradesh
                      </p>
                      <p 
                        style={{
                          fontSize: '18px',
                          lineHeight: '1.44',
                          fontWeight: 400,
                          color: '#555',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                        className="mt-3"
                      >
                        Know our locations and affiliates. Contact us today.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium mb-1 font-poppins">Phone Number</p>
                      <a href="tel:+919805871945" className="text-accent-blue hover:text-accent-cyan transition-colors text-lg font-semibold font-poppins">
                        +91 9805871945
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Opening Hours */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Our Opening Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-accent-blue flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-semibold text-lg font-poppins">Monday - Friday</p>
                      <p 
                        style={{
                          fontSize: '18px',
                          lineHeight: '1.44',
                          fontWeight: 400,
                          color: '#555',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                      >
                        9:00am - 6:00pm
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-semibold text-lg font-poppins">Saturday</p>
                      <p 
                        style={{
                          fontSize: '18px',
                          lineHeight: '1.44',
                          fontWeight: 400,
                          color: '#555',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                      >
                        10:00am - 4:00pm
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-semibold text-lg font-poppins">Sunday</p>
                      <p 
                        style={{
                          fontSize: '18px',
                          lineHeight: '1.44',
                          fontWeight: 400,
                          color: '#555',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                      >
                        Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
