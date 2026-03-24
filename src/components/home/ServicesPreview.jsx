import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// SVG Icons matching the screenshot style (outline, blue)
const StuccoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <path d="M17 14v3M14 17h6"/>
  </svg>
)

const TextureIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <path d="M4 9h16M4 14h16M9 4v16M14 4v16"/>
  </svg>
)

const RepairIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="16"/>
    <line x1="10" y1="14" x2="14" y2="14"/>
  </svg>
)

const services = [
  {
    Icon: StuccoIcon,
    title: 'Traditional Stucco',
    description:
      'At A&A Plastering, we specialize in providing high-quality traditional stucco applications...',
    image: 'https://res.cloudinary.com/drdpqf3ns/image/upload/v1774376039/db07a2b0-bbb3-44da-ab6b-3a0f7bd694d1_xr6t9l.jpg',
  },
  {
    Icon: TextureIcon,
    title: 'Synthetic stucco or EIFS',
    description:
      'A&A offers a wide variety of texture and acrylic finishes, allowing homeowners to p...',
    image: 'https://res.cloudinary.com/drdpqf3ns/image/upload/v1774375678/22af289b-1250-4a2e-b78d-4d8b11caa1db_o6pubp.jpg',
  },
  {
    Icon: RepairIcon,
    title: 'Stucco & Stone Repairs',
    description:
      'A&A is your go-to source for professional stucco and stone repairs, providing quick,...',
    image: 'https://res.cloudinary.com/drdpqf3ns/image/upload/v1774377753/ad92b9e1-8815-49b3-9e00-02e7620be55b_tdu8su.jpg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const ServicesPreview = () => {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top row: heading left, button right ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            // style={{ fontFamily: "'Georgia', serif" }}
          >
            Expert Plastering Services<br />
            Tailored for You
          </h2>

          <div className="flex-shrink-0 sm:pt-1">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg px-7 py-4 rounded-lg transition-colors shadow-md whitespace-nowrap"
              >
                View all Services
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ Icon, title, description, image }, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
            >
              {/* Image area with icon overlay */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  // onError={(e) => {
                  //   // Fallback gradient if image not found
                  //   e.target.style.display = 'none'
                  //   e.target.parentNode.style.background =
                  //     'linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%)'
                  // }}
                />

                {/* Icon badge — bottom-left of image */}
                <div
                  className="absolute bottom-4 left-4 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background: 'rgba(239, 246, 255, 0.95)', backdropFilter: 'blur(4px)' }}
                >
                  <Icon />
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
                <Link
                  to="/services"
                  className="text-[var(--color-secondary)] hover:text-blue-800 font-bold text-md tracking-widest uppercase transition-colors inline-flex items-center gap-1"
                >
                  View Service
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview