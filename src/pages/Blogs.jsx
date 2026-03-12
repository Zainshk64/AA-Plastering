import React from 'react'
import { motion } from 'framer-motion'
import BlogsHero from '../components/blogs/BlogsHero'

const Blogs = () => {
  return (
    <div className="pt-32 pb-16">
      <BlogsHero />
      {/* <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-[var(--color-primary)]">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tips, insights, and industry knowledge from our experts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <p className="text-sm text-[var(--color-primary)] mb-2">
                  May {item}, 2024
                </p>
                <h3 className="text-xl font-bold mb-3">Blog Post Title {item}</h3>
                <p className="text-gray-600 mb-4">
                  Brief excerpt of the blog post content goes here...
                </p>
                <button className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-secondary)]">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default Blogs