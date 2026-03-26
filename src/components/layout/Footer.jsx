import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Our Blogs", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    { name: "Traditional Stucco", path: "/services#stucco" },
    { name: "Texture or Acrylic Finish", path: "/services#plastering" },
    { name: "EIFS", path: "/services#repair" },
    { name: "Veneer Stone", path: "/services#finishes" },
    { name: "Stucco & Stone Repairs", path: "/services#finishes" },
    { name: "See All", path: "/services" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: "https://www.facebook.com/share/17UZ8GSXvT/", label: "Facebook" },
    { icon: FaTiktok, url: "https://www.tiktok.com/@antonio.navarro247?is_from_webapp=1&sender_device=pc", label: "Twitter" },
    // { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <>
      <footer className="bg-gray-50 text-gray-700 relative">
        {/* Main Footer */}
        <div className="container py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
            
            {/* Column 1 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <img
                src="/logo.jpg"
                alt="A&A Plastering"
                className="h-20 w-20 object-cover"
              />

              <p className="text-gray-600 text-sm leading-relaxed">
                My father was already working in the stucco industry, and I
                joined him with little knowledge of the trade and no prior
                construction experience.
              </p>
            </motion.div>

            {/* Column 2 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-5">
                Useful Links
              </h4>

              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-700 hover:text-[var(--color-primary)] transition flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[2px] bg-[var(--color-primary)] group-hover:w-4 transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-5">
                Our Services
              </h4>

              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-sm text-gray-700 hover:text-[var(--color-primary)] transition flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[2px] bg-[var(--color-primary)] group-hover:w-4 transition-all"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-5">
                Contact Information
              </h4>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FaPhone className="text-[var(--color-primary)]" />
                  <a
                    href="tel:+19134495061"
                    className="text-sm text-gray-600 hover:text-[var(--color-primary)]"
                  >
                    913-449-5061
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-[var(--color-primary)]" />
                  <a
                    href="mailto:antonio@aandaplastering.com"
                    className="text-sm text-gray-600 hover:text-[var(--color-primary)]"
                  >
                    antonio@aandaplastering.com
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[var(--color-primary)] mt-1" />
                  <span className="text-sm text-gray-600">
                    7607 E 75th St <br />
                    Kansas City, MO
                  </span>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition"
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 bg-white">
          <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              © {currentYear} A&A Plastering. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="hover:text-[var(--color-primary)]"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="hover:text-[var(--color-primary)]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Back To Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="fixed bottom-8 right-8 w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--color-secondary)]"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;