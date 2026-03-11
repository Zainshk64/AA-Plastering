import React from 'react'
import { motion } from 'framer-motion'
import ServiceHero from '../components/services/ServiceHero'

const Services = () => {
  return (
    <div className="pt-32 pb-16">
      <ServiceHero />
      {/* <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-[var(--color-primary)]">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive stucco and plastering solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Service {item}</h3>
              <p className="text-gray-600">
                Detailed description of service {item} goes here.
              </p>
            </motion.div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default Services