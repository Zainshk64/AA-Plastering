import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[var(--color-secondary)] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let's bring your vision to life with our expert stucco and plastering
            services. Get a free consultation today and discover the difference
            quality craftsmanship makes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[var(--color-secondary)] transition-colors shadow-lg w-full sm:w-auto"
            >
              Request a Consultation
            </motion.button>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[var(--color-secondary)] transition-colors w-full sm:w-auto"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default CTASection