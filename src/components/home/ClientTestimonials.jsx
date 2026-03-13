import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

/* ─── Data ──────────────────────────────────────────────────── */
const testimonials = [
  {
    name: "Shana Williams",
    date: "24 October, 2023",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    text: "I Had A Small Leak Issue, And A&A Plastering Handled It Quickly And Efficiently. The Work Was Flawless, And They Even Followed Up To Make Sure Everything Was Perfect. Excellent Service!",
  },
  {
    name: "Andrew Johnson",
    date: "23 October, 2023",
    avatar: "https://i.pravatar.cc/150?img=33",
    rating: 5,
    text: "Exceptional Craftsmanship And Attention To Detail! A&A Plastering Transformed The Exterior Of Our Home With Their Stucco Work, And We Couldn't Be Happier With The Results.",
  },
  {
    name: "Maria Garcia",
    date: "20 October, 2023",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "A&A Plastering sheets are among the best I have seen. Summer nights working with them was a pleasure. Great craftsmanship, excellent communication throughout the project.",
  },
  {
    name: "James Thompson",
    date: "18 October, 2023",
    avatar: "https://i.pravatar.cc/150?img=60",
    rating: 5,
    text: "As Someone Who Has Been Looking For A Reliable Contractor, A&A Plastering Is Absolutely The Best. Great Attention To Detail, And The Results Were Nothing Short Of Spectacular!",
  },
  {
    name: "Lisa Chen",
    date: "15 October, 2023",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Outstanding work on our commercial building. They completed the project ahead of schedule and under budget. The quality of the stucco finish is impeccable. Highly recommended!",
  },
];

/* ─── Single Card ───────────────────────────────────────────── */
const TestimonialCard = ({ t, variant }) => (
  <motion.div
    variants={variant}
    className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 select-none h-full"
  >
    {/* Blue quote bubble — top right */}
    <div className="absolute -top-4 right-5 w-9 h-9 bg-[var(--color-primary)] rounded-full flex items-center justify-center shadow-md z-10">
      <FaQuoteLeft className="text-white text-sm" />
    </div>

    {/* Stars + label */}
    <div className="flex items-center gap-2 pt-1">
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
    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
      <img
        src={t.avatar}
        alt={t.name}
        className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-100"
        onError={(e) => {
          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=2793FF&color=fff&size=44`;
        }}
      />
      <div>
        <p className="text-sm font-bold text-gray-900 leading-tight">{t.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">{t.date}</p>
      </div>
    </div>
  </motion.div>
);

/* ══════════════════════════════════════════════════════════════ */
const ClientTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;

  const prev = () => {
    if (current === 0) return;
    setDirection(-1);
    setCurrent((c) => c - 1);
  };
  const next = () => {
    if (current >= total - 2) return;
    setDirection(1);
    setCurrent((c) => c + 1);
  };

  /* Which indices to show:
     peek-left | active | active | peek-right  */
  const peekLeft  = current > 0 ? current - 1 : null;
  const activeA   = current;
  const activeB   = current + 1 < total ? current + 1 : null;
  const peekRight = current + 2 < total ? current + 2 : null;

  const slideVariants = {
    enter:  (d) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.38, ease: "easeOut" } },
    exit:   (d) => ({ x: d > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.28 } }),
  };

  return (
    <section className="py-16  bg-[#EEF5FF] overflow-hidden">
      <div className="container">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12"
        >
          What Our Customers Say About us
        </motion.h2>

        {/* Slider row */}
        <div className="relative flex items-center gap-4">

          {/* ── LEFT ARROW ── */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous"
            className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center z-20 transition-all duration-200
              ${current === 0
                ? "border-gray-200 text-gray-300 cursor-not-allowed bg-white/60"
                : "border-[var(--color-primary)] text-[var(--color-primary)] bg-white hover:bg-[var(--color-primary)] hover:text-white shadow-md"
              }`}
          >
            <FaChevronLeft className="text-sm" />
          </button>

          {/* ── CARDS VIEWPORT ── */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                variants={slideVariants}
                className="flex gap-5 items-stretch"
              >
                {/* Peek left — faded */}
                {peekLeft !== null && (
                  <div className="hidden xl:block w-[200px] flex-shrink-0 opacity-30 pointer-events-none scale-95 origin-right transition-all">
                    <TestimonialCard t={testimonials[peekLeft]} variant={{}} />
                  </div>
                )}

                {/* Active card A */}
                <div className="flex-1 min-w-0 pt-5">
                  <TestimonialCard t={testimonials[activeA]} variant={{}} />
                </div>

                {/* Active card B */}
                {activeB !== null && (
                  <div className="hidden sm:block flex-1 min-w-0 pt-5">
                    <TestimonialCard t={testimonials[activeB]} variant={{}} />
                  </div>
                )}

                {/* Peek right — faded */}
                {peekRight !== null && (
                  <div className="hidden xl:block w-[200px] flex-shrink-0 opacity-30 pointer-events-none scale-95 origin-left transition-all overflow-hidden">
                    <TestimonialCard t={testimonials[peekRight]} variant={{}} />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT ARROW ── */}
          <button
            onClick={next}
            disabled={current >= total - 2}
            aria-label="Next"
            className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center z-20 transition-all duration-200
              ${current >= total - 2
                ? "border-gray-200 text-gray-300 cursor-not-allowed bg-white/60"
                : "border-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] shadow-md"
              }`}
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(total / 2) }).map((_, i) => {
            const active = i === Math.floor(current / 1) && current === i * 1 || current === i;
            const isActive = current === i;
            return (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-6 h-2.5 bg-[var(--color-primary)]"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ClientTestimonials;