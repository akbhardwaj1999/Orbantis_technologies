'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Mobile Development', href: '/services/mobile-development' },
      { name: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
      { name: 'Data & Analytics', href: '/services/data-analytics' },
      { name: 'UI/UX & Digital Marketing', href: '/services/ui-ux-marketing' },
      { name: 'Backend Development', href: '/services/backend-development' },
      { name: 'Testing & QA', href: '/services/testing-qa' },
      { name: 'Graphic Design', href: '/services/graphic-design' },
      { name: 'SEO', href: '/services/seo' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Study', href: '/case-study' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/orbantis-technologies' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/orbantis-technologies' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/919805871945' },
  ]

  return (
    <footer ref={footerRef} className="relative bg-light-200 text-gray-900 border-t border-gray-300 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2">
              <img
                src="/logo2.png"
                alt="Orbantis Logo"
                className="h-[5.7rem] object-contain rounded-lg"
              />
            </div>
            <p className="text-gray-600 mb-6 mt-6 leading-relaxed">
              Leading the digital transformation with cutting-edge technology solutions. 
              We build the future, one innovation at a time.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4 text-accent-blue" />
                <a href="mailto:info@orbantistechnologies.com" className="text-sm hover:text-accent-blue transition-colors">info@orbantistechnologies.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-4 h-4 text-accent-cyan" />
                <a href="tel:+919805871945" className="text-sm hover:text-accent-cyan transition-colors">9805871945</a>
              </div>
              <div className="flex items-start space-x-3 text-gray-600">
                <MapPin className="w-4 h-4 text-accent-magenta mt-1" />
                <div className="text-sm">
                  Locality: Ghumarwin, District: Bilaspur, State: Himachal Pradesh
                </div>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-poppins font-semibold text-lg mb-4 text-gray-900">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.name === 'Portfolio' ? (
                    <span className="text-gray-600 cursor-not-allowed">
                      {link.name}
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-accent-blue transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-poppins font-semibold text-lg mb-4 text-gray-900">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-accent-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-poppins font-semibold text-lg mb-4 text-gray-900">Resources</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.name === 'Blog' ? (
                    <span className="text-gray-600 cursor-not-allowed">
                      {link.name}
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-accent-blue transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            <h4 className="font-poppins font-semibold text-base mb-4 text-gray-900">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-accent-blue hover:border-accent-blue transition-colors duration-300 group shadow-sm"
                >
                  <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-300 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Orbantis Technologies. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <Link href="/case-study" className="text-gray-600 hover:text-accent-blue text-sm transition-colors">
                Case Study
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-accent-blue text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-accent-blue text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
