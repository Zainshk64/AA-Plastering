import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

/* ─── Gallery images — replace paths with your /public images ─── */
const galleryImages = [
  { src: '/slider/slide1.jpg', alt: 'Project 1' },
  { src: '/slider/slide2.jpg', alt: 'Project 2' },
  { src: '/slider/slide3.jpg', alt: 'Project 3' },
  { src: '/slider/slide4.jpg', alt: 'Project 4' },
  { src: '/slider/slide5.jpg', alt: 'Project 5' },
  { src: '/slider/slide6.jpg', alt: 'Project 6' },
]

/* ─── Testimonials data ─────────────────────────────────────── */
const testimonials = [
  {
    name: 'Shana Williams',
    date: '24 October, 2023',
    image: 'https://i.pravatar.cc/150?img=45',
    rating: 5,
    text: 'I Had A Small Leak Issue, And A&A Plastering Handled It Quickly And Efficiently. The Work Was Flawless, And They Even Followed Up To Make Sure Everything Was Perfect. Excellent Service!',
  },
  {
    name: 'Andrew Johnson',
    date: '25 October, 2023',
    image: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    text: 'Exceptional Craftsmanship And Attention To Detail! A&A Plastering Transformed The Exterior Of Our Home With Their Stucco Work, And We Couldn\'t Be Happier With The Results.',
  },
  {
    name: 'Maria Garcia',
    date: '30 October, 2023',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'Professional team from start to finish. The stucco finish on our property looks absolutely stunning. Neighbors keep asking who did the work. Could not recommend them more highly.',
  },
  {
    name: 'James Thompson',
    date: '5 November, 2023',
    image: 'https://i.pravatar.cc/150?img=60',
    rating: 5,
    text: 'A&A Plastering sheets are among the best I have seen. Summer nights working with them was a pleasure. Great craftsmanship, excellent communication throughout the project.',
  },
  {
    name: 'Lisa Chen',
    date: '12 November, 2023',
    image: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    text: 'Outstanding work on our commercial building. They completed the project ahead of schedule and under budget. The quality of the stucco finish is impeccable. Highly recommended!',
  },
]

/* ══════════════════════════════════════════════════════════════ */
/*  INFINITE AUTO-SCROLL IMAGE STRIP                            */
/* ══════════════════════════════════════════════════════════════ */
const InfiniteImageStrip = () => {
  // Duplicate array so it seamlessly loops
  const doubled = [...galleryImages, ...galleryImages]

  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-5 animate-infinite-scroll">
        {doubled.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 h-44 md:w-100 md:h-72 rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              // onError={e => {
              //   e.target.style.display = 'none'
              //   e.target.parentNode.style.background =
              //     'linear-gradient(135deg,#cbd5e1,#94a3b8)'
              // }}
            />
          </div>
        ))}
      </div>

      {/* Inline keyframes — Tailwind can't generate arbitrary animation */}
      <style>{`
        @keyframes infinite-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 28s linear infinite;
          width: max-content;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════ */
/*  TESTIMONIAL SLIDER (2 visible, button controlled)           */
/* ══════════════════════════════════════════════════════════════ */
const VISIBLE = 2 // cards shown at once on desktop

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const maxIndex = testimonials.length - VISIBLE

  const goLeft = () => {
    if (index === 0) return
    setDirection(-1)
    setIndex(i => i - 1)
  }
  const goRight = () => {
    if (index >= maxIndex) return
    setDirection(1)
    setIndex(i => i + 1)
  }

  const variants = {
    enter:  (d) => ({ x: d > 0 ?  80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.42, ease: 'easeOut' } },
    exit:   (d) => ({ x: d > 0 ? -80 :  80, opacity: 0, transition: { duration: 0.3 } }),
  }

  return (
    <div className="relative">
      {/* Slider viewport */}
      <div className="overflow-hidden">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {testimonials.slice(index, index + VISIBLE).map((t, i) => (
              <TestimonialCard key={t.name + i} testimonial={t} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons — centered below */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goLeft}
          disabled={index === 0}
          aria-label="Previous"
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200
            ${index === 0
              ? 'border-gray-200 text-gray-300 cursor-not-allowed'
              : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
            }`}
        >
          <FaChevronLeft className="text-sm" />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
              className={`rounded-full transition-all duration-300 ${
                i === index ? 'w-6 h-2.5 bg-blue-500' : 'w-2.5 h-2.5 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goRight}
          disabled={index >= maxIndex}
          aria-label="Next"
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200
            ${index >= maxIndex
              ? 'border-gray-200 text-gray-300 cursor-not-allowed'
              : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
            }`}
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>
    </div>
  )
}

/* ─── Single testimonial card ─────────────────────────────── */
const TestimonialCard = ({ testimonial: t }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative flex flex-col gap-4">
    {/* Quote icon — top-right blue circle */}
    <div className="absolute -top-4 right-6 w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
      <FaQuoteLeft className="text-white text-sm" />
    </div>

    {/* Stars + label */}
    <div className="flex items-center gap-2 mt-1">
      <div className="flex gap-0.5">
        {[...Array(t.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ))}
      </div>
      <span className="text-xs text-gray-500 font-medium">{t.rating}/5 Reviews</span>
    </div>

    {/* Text */}
    <p className="text-gray-600 text-sm leading-relaxed flex-1">{t.text}</p>

    {/* Avatar + name */}
    <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
      <img
        src={t.image}
        alt={t.name}
        className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100"
      />
      <div>
        <p className="text-sm font-bold text-gray-900">{t.name}</p>
        <p className="text-xs text-gray-400">{t.date}</p>
      </div>
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════════════ */
/*  MAIN EXPORT                                                  */
/* ══════════════════════════════════════════════════════════════ */
const Testimonials = () => {
  return (
    <section className="bg-[#F0F6FF] py-16 lg:py-24 overflow-hidden">

      {/* ── Gallery strip ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-5"
      >
        <h2 className="text-center text-2xl md:text-5xl font-semibold text-gray-900 mb-8 px-4">
          From Vision to Reality: Our Project Gallery
        </h2>
        <InfiniteImageStrip />
      </motion.div>

      {/* ── Testimonials ──────────────────────────────── */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-10">
          What Our Customers Say About us
        </h2>

        <TestimonialSlider />
      </motion.div> */}
    </section>
  )
}

export default Testimonials