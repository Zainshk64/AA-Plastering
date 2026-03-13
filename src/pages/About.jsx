import React from 'react'
import { motion } from 'framer-motion'
import AboutHero from '../components/about/AboutHero'
import AboutSection from '../components/about/AboutSection'

const About = () => {
  return (
    <div className="pt-32">
      <AboutHero />
      <AboutSection/>
      {/* <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-[var(--color-primary)]">A&A Plastering</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At 20 years old, I arrived in the U.S. with nothing but determination and
            a dream. Today, A&A Plastering stands as a testament to over two decades
            of dedication, hard work, and an unwavering commitment to excellence in
            stucco and plastering services.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              What started as a one-person operation has grown into a trusted name in
              the construction industry. We've built our reputation on quality
              workmanship, reliability, and treating every project as if it were our
              own home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 leading-relaxed">
              Family values guide everything we do. We believe in honest
              communication, fair pricing, and delivering results that exceed
              expectations. Your satisfaction is our success.
            </p>
          </motion.div>
        </div>
      </div> */}
    </div>
  )
}

export default About