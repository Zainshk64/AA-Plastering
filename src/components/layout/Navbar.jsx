import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiMail, HiPhone, HiPencil, HiPencilAlt } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Our Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-black text-white text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <p className="text-gray-200 text-lg">
            At 20 years old, I arrived in the U.S.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@aaplastering.com"
              className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
            >
              <HiMail className="text-lg text-[var(--color-primary)]" />
              <span>antonio@aandaplastering.com</span>
            </a>
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
            >
              <HiPhone className="text-lg text-[var(--color-primary)]" />
              <span>Call Us: 913-449-5061</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        <div className="container">
          <div className="flex justify-between items-center h-30">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/logo.jpg" className="w-40 h-30 object-cover" alt="A&A Plastering" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium transition-colors hover:text-[var(--color-primary)] ${
                      isActive
                        ? 'text-[var(--color-primary)]'
                        : 'text-gray-700'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--color-primary)] cursor-pointer flex items-center text-white px-4 py-3 rounded-lg font-medium hover:bg-[var(--color-secondary)] transition-colors"
              >
                <HiPencilAlt className="mr-2" size={23} />
                Request a Consultation
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-3xl text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t"
            >
              <div className="container py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `font-medium py-2 transition-colors ${
                        isActive
                          ? 'text-[var(--color-primary)]'
                          : 'text-gray-700'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--color-secondary)] transition-colors mt-2">
                  Request a Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar