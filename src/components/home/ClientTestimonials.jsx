import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

/* ─── Data ──────────────────────────────────────────────────── */
const testimonials = [
  {
    name: "Jake Randall",
    date: "a year ago",
    avatar: "",
    rating: 5,
    text: "Antonio and his team were amazing. I had them do my outdoor kitchen smooth stucco. They were great at communication, very fair pricing, and cleaned up after themselves. I could not recommend them enough. His passion for his work is commendable.",
  },
  {
    name: "Julie Prudden",
    date: "9 months ago",
    avatar: "/julie.png",
    rating: 5,
    text: "Antonio came highly recommended by several of our friends. We have an old house that needed to have the stucco completely redone and I wanted the new stucco to match the original to keep the historical look. I am so happy with the results! Not only does it look beautiful but I feel good knowing the house has structural integrity again. Antonio and his crew were enjoyable to work with, did exactly what they said they would, and the communication was excellent!",
  },
  {
    name: "Yessi Reyes",
    date: "11 months ago",
    avatar: "/yessi.png",
    rating: 5,
    text: "Communicated the process in detail, did a really good stucco repair for my wall and fixed my front steps that were falling apart. Very punctual and professional.",
  },
  {
    name: "Travis",
    date: "11 months ago",
    avatar: "/travis.png",
    rating: 5,
    text: "A&A Plastering has done great work for us on multiple jobs. Antonio and his team are fast precise and always available to make changes when needed. If you are looking for someone that does great work for fair pricing and has tremendous respect for his clients look no further.",
  },
];

/* ─── Get Initials ──────────────────────────────────────────── */
const getInitials = (name) => {
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length >= 2)
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name.charAt(0).toUpperCase();
};

/* ─── Avatar (Image or Initials) ────────────────────────────── */
const Avatar = ({ name, avatar }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const showInitials = !avatar || avatar.trim() === "" || imgFailed;

  if (showInitials) {
    return (
      <div className="w-11 h-11 rounded-full bg-[var(--color-primary)] flex items-center justify-center ring-2 ring-blue-100 flex-shrink-0">
        <span className="text-white text-sm font-bold leading-none">
          {getInitials(name)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={avatar}
      alt={name}
      className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-100 flex-shrink-0"
      onError={() => setImgFailed(true)}
    />
  );
};

/* ─── Expandable Text ───────────────────────────────────────── */
const ExpandableText = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const [needsClamp, setNeedsClamp] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    // Check if text overflows 4 lines
    // line-height ~20px × 4 lines = 80px
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 20;
    const maxHeight = lineHeight * 4;
    // Temporarily remove clamp to measure real height
    el.style.webkitLineClamp = "unset";
    el.style.display = "block";
    const fullHeight = el.scrollHeight;
    // Restore clamp
    el.style.webkitLineClamp = "";
    el.style.display = "";
    setNeedsClamp(fullHeight > maxHeight + 2);
  }, [text]);

  return (
    <div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: expanded ? "500px" : "5.6em", // ~4 lines
        }}
      >
        <p
          ref={textRef}
          className="text-gray-600 text-sm leading-relaxed"
        >
          {text}
        </p>
      </div>

      {needsClamp && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[var(--color-primary)] text-xs font-semibold mt-2 hover:underline focus:outline-none transition-colors"
        >
          {expanded ? "See Less ▲" : "See More ▼"}
        </button>
      )}
    </div>
  );
};

/* ─── Single Card ───────────────────────────────────────────── */
const TestimonialCard = ({ t }) => (
  <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col select-none">
    {/* Quote bubble */}
    <div className="absolute -top-4 right-5 w-9 h-9 bg-[var(--color-primary)] rounded-full flex items-center justify-center shadow-md z-10">
      <FaQuoteLeft className="text-white text-sm" />
    </div>

    {/* Stars */}
    <div className="flex items-center gap-2 pt-1 mb-4">
      <div className="flex gap-0.5">
        {[...Array(t.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ))}
      </div>
      <span className="text-xs text-gray-500 font-medium">
        {t.rating}/5 Reviews
      </span>
    </div>

    {/* Expandable Text — 4 line clamp */}
    <ExpandableText text={t.text} />

    {/* Avatar + Name — always at bottom */}
    <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-100">
      <Avatar name={t.name} avatar={t.avatar} />
      <div className="min-w-0">
        <p className="text-sm font-bold text-gray-900 leading-tight truncate">
          {t.name}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{t.date}</p>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════ */
const ClientTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;
  const maxIndex = total - 1;

  const prev = () => {
    if (current === 0) return;
    setDirection(-1);
    setCurrent((c) => c - 1);
  };

  const next = () => {
    if (current >= maxIndex) return;
    setDirection(1);
    setCurrent((c) => c + 1);
  };

  const goTo = (i) => {
    if (i === current) return;
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const peekLeft = current > 0 ? current - 1 : null;
  const activeA = current;
  const activeB = current + 1 < total ? current + 1 : null;
  const peekRight = current + 2 < total ? current + 2 : null;

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.38, ease: "easeOut" },
    },
    exit: (d) => ({
      x: d > 0 ? -60 : 60,
      opacity: 0,
      transition: { duration: 0.28 },
    }),
  };

  return (
    <section className="py-16 bg-[#EEF5FF] overflow-hidden">
      <div className="container">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12"
        >
          What Our Customers Say About Us
        </motion.h2>

        {/* Slider row */}
        <div className="relative flex items-center gap-2 sm:gap-4">
          {/* LEFT ARROW */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous"
            className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center z-20 transition-all duration-200
              ${
                current === 0
                  ? "border-gray-200 text-gray-300 cursor-not-allowed bg-white/60"
                  : "border-[var(--color-primary)] text-[var(--color-primary)] bg-white hover:bg-[var(--color-primary)] hover:text-white shadow-md"
              }`}
          >
            <FaChevronLeft className="text-xs sm:text-sm" />
          </button>

          {/* CARDS VIEWPORT */}
          <div className="flex-1 overflow-hidden min-w-0">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                variants={slideVariants}
                className="flex gap-5 items-start"
                // {/* ↑ items-START so expanding one card doesn't stretch the other */}
              >
                {/* Peek left */}
                {peekLeft !== null && (
                  <div className="hidden xl:block w-[200px] flex-shrink-0 opacity-30 pointer-events-none scale-95 origin-right pt-5">
                    <TestimonialCard t={testimonials[peekLeft]} />
                  </div>
                )}

                {/* Active card A */}
                <div className="flex-1 min-w-0 pt-5">
                  <TestimonialCard t={testimonials[activeA]} />
                </div>

                {/* Active card B */}
                {activeB !== null && (
                  <div className="hidden sm:block flex-1 min-w-0 pt-5">
                    <TestimonialCard t={testimonials[activeB]} />
                  </div>
                )}

                {/* Peek right */}
                {peekRight !== null && (
                  <div className="hidden xl:block w-[200px] flex-shrink-0 opacity-30 pointer-events-none scale-95 origin-left pt-5 overflow-hidden">
                    <TestimonialCard t={testimonials[peekRight]} />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            disabled={current >= maxIndex}
            aria-label="Next"
            className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center z-20 transition-all duration-200
              ${
                current >= maxIndex
                  ? "border-gray-200 text-gray-300 cursor-not-allowed bg-white/60"
                  : "border-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] shadow-md"
              }`}
          >
            <FaChevronRight className="text-xs sm:text-sm" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                current === i
                  ? "w-6 h-2.5 bg-[var(--color-primary)]"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;