import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Track scroll position for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 90)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about#team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Testimonials', path: '/#testimonials' },
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    { name: 'Stucco Installation', path: '/services#stucco' },
    { name: 'Plastering', path: '/services#plastering' },
    { name: 'Repair & Restoration', path: '/services#repair' },
    { name: 'Custom Finishes', path: '/services#finishes' },
  ]

  const socialLinks = [
    { icon: FaFacebookF, url: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
  ]

  return (
    <>
      <footer className="bg-gray-50 text-gray-700 relative">
        {/* Main Footer Content */}
        <div className="container py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info - Column 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:pr-4"
            >
              <img
                src="/logo.jpg"
                className="h-24 w-30 object-cover mb-4"
                alt="A&A Plastering Logo"
              />
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                My father was already working in the stucco industry, and I joined
                him with little knowledge of the trade and no prior construction
                experience. My background was in sales, but I was determined to
                learn.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors shadow-md"
                    aria-label={social.label}
                  >
                    <social.icon className="text-base" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links - Column 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-5 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[var(--color-primary)] rounded-full -mb-2"></span>
              </h4>
              <ul className="space-y-3 mt-6">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-[var(--color-primary)] transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-[var(--color-primary)] group-hover:w-4 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services - Column 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-5 relative inline-block">
                Our Services
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[var(--color-primary)] rounded-full -mb-2"></span>
              </h4>
              <ul className="space-y-3 mt-6">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link
                      to={service.path}
                      className="text-gray-600 hover:text-[var(--color-primary)] transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-[var(--color-primary)] group-hover:w-4 transition-all duration-300"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info - Column 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-5 relative inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[var(--color-primary)] rounded-full -mb-2"></span>
              </h4>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[var(--color-primary)] text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-600 text-sm leading-relaxed">
                    7607 E 75th St
                    <br />
                    Kansas City, MO
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-[var(--color-primary)] text-lg flex-shrink-0" />
                  <a
                    href="tel:+19134495061"
                    className="text-gray-600 hover:text-[var(--color-primary)] transition-colors text-sm"
                  >
                    913-449-5061
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-[var(--color-primary)] text-lg flex-shrink-0" />
                  <a
                    href="mailto:antonio@aandaplastering.com"
                    className="text-gray-600 hover:text-[var(--color-primary)] transition-colors text-sm break-all"
                  >
                    antonio@aandaplastering.com
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 bg-white">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm text-center md:text-left">
                &copy; {currentYear} A&A Plastering. All rights reserved. |{' '}
                <span className="text-[var(--color-primary)] font-semibold">
                  Crafted with Excellence
                </span>
              </p>
              <div className="flex gap-6 text-sm">
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-[var(--color-primary)] transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-[var(--color-primary)] transition-colors font-medium"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[var(--color-primary)] text-white rounded-full shadow-lg hover:bg-[var(--color-secondary)] transition-colors flex items-center justify-center group"
            aria-label="Back to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-lg group-hover:translate-y-[-2px] transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default Footer;