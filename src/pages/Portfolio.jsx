import React from 'react'
import { motion } from 'framer-motion'
import PortfolioHero from '../components/portfolio/PortfolioHero'
import PortfolioSection from '../components/portfolio/PortfolioSection'

const Portfolio = () => {
  return (
    <div className="pt-32">
      <PortfolioHero />
      <PortfolioSection/>
      {/* <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-[var(--color-primary)]">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our completed projects and see the quality for yourself.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: item * 0.05 }}
              className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={`https://images.unsplash.com/photo-${1600000000000 + item}?auto=format&fit=crop&w=600&q=80`}
                alt={`Project ${item}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default Portfolio