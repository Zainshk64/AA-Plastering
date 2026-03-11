import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about#team' },
    { name: 'Careers', path: '#' },
    { name: 'Testimonials', path: '#testimonials' },
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
    <footer className=" text-gray-300">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <img src="/logo.jpg" className='h-30 w-44 object-cover' alt="" />
            <p className="text-black mb-6 leading-relaxed">
             My father was already working in the stucco industry, and I joined him with little knowledge of the trade and no prior construction experience. My background was in sales, but I was determined to learn.
            </p>
           
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-black mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-black mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-black transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-black mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                <span className="text-black">Address: 7607 e 75th st kansas city mo</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[var(--color-primary)] flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-black transition-colors"
                >
                  Call Us: 913-449-5061
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--color-primary)] flex-shrink-0" />
                <a
                  href="mailto:antonio@aandaplastering.com"
                  className="text-black transition-colors"
                >
                  antonio@aandaplastering.com
                </a>
              </li>
            </ul>
             <div className="flex mt-4 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              &copy; {currentYear} A&A Plastering. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-600 hover:text-[var(--color-primary)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-600 hover:text-[var(--color-primary)] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer