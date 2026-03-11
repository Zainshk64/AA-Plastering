import React from 'react'
import { motion } from 'framer-motion'
import { HiPencilAlt } from 'react-icons/hi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-banner.jpg)',
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container pt-33 relative z-10 text-white"
      >
        <div className="max-w-4xl">
          <motion.p
            variants={itemVariants}
            className="font-semibold text-sm -mb-1 md:text-base tracking-wider uppercase"
          >
            STUCCO EXCELLENCE, BUILT ON FAMILY VALUES
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-bold lead mb-6"
          >
            Craftsmanship You Can Trust,{' '}
            <span className="">Results You'll Love</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl"
          >
           My father was already working in the stucco industry, and I joined him with little knowledge of the trade and no prior construction experience. My background was in sales, but I was determined to learn.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--color-primary)] cursor-pointer text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--color-secondary)] flex items-center transition-colors shadow-lg hover:shadow-xl"
            >
              <HiPencilAlt className="mr-2 md:flex hidden" size={23} />
              Request a Consultation
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

    
    </section>
  )
}

export default Hero