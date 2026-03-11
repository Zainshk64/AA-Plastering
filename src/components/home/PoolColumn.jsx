import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaBorderStyle,
  FaLayerGroup,
  FaVectorSquare,
  FaPaintRoller,
  FaCheckCircle,
  FaPhone,
  FaPencilAlt,
} from "react-icons/fa";

/* ─── Step data ─────────────────────────────────────────── */
const steps = [
  {
    number: "01",
    Icon: FaShieldAlt,
    title: "Waterproofing with Tar Paper",
    description:
      "Before applying any stucco, it's essential to protect the OSB from moisture. We covered the entire surface of the column with tar paper, creating a waterproof barrier to protect the wood underneath.",
  },
  {
    number: "02",
    Icon: FaBorderStyle,
    title: "Installing Casing Beads",
    description:
      "We installed casing beads to provide clean edges around the column and ensure the stucco has a precise, neat finish with professional-grade quality.",
  },
  {
    number: "03",
    Icon: FaLayerGroup,
    title: "Adding Metal Lath",
    description:
      "Next, we installed metal lath over the tar paper to create a strong foundation for the stucco to adhere to, ensuring long-lasting durability.",
  },
  {
    number: "04",
    Icon: FaVectorSquare,
    title: "Applying Corner Pieces",
    description:
      "We then placed corner pieces on the edges of the column to reinforce and protect the corners, preventing cracks and damage over time.",
  },
  {
    number: "05",
    Icon: FaPaintRoller,
    title: "Applying the Stucco Base Coat",
    description:
      "With the column prepped, we applied a ¾ inch layer of stucco over the entire surface. This base coat is crucial for creating a smooth, even surface.",
  },
  {
    number: "06",
    Icon: FaCheckCircle,
    title: "Finishing the Job",
    description:
      "After allowing the stucco to dry and cure, we returned to apply the final finish coat in the texture and color of the customer's choice.",
  },
];

/* ─── Animation variants ─────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ══════════════════════════════════════════════════════════ */
const PoolColumn = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax: background moves slower than scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-white">
      {/* ══ HERO SECTION WITH PARALLAX ══════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-[500px] md:h-[500px] overflow-hidden"
      >
        {/* Parallax Background Image */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 w-full h-[110%] -top-[10%]"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url(/poolcolumn.jpg)",
            }}
          />
        </motion.div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 z-10" />

        {/* Hero Content */}
        <div className="container relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl  font-bold text-white leading-tight mb-6 max-w-5xl"
          >
            Let's Build Something{" "}
            <span className="text-[var(--color-primary)]">Beautiful</span>{" "}
            Together!
            <br />
            Get a Free Estimate Today.
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            {/* Primary CTA */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--color-primary)] cursor-pointer text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-[var(--color-secondary)] transition-colors flex items-center gap-3"
              >
                <FaPencilAlt />
                Request a Consultation
              </motion.button>
            </Link>

            {/* Phone CTA */}
            <motion.a
              href="tel:9134495061"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all flex items-center gap-3"
            >
              <FaPhone />
              Call Us: 913-449-5061
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ══ INFO SECTION ════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start"
          >
            {/* Left Column - Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
                How We Stuccoes a Pool Column:
              </h2>
              <p className="text-xl font-bold text-[var(--color-secondary)]">
                A Step-by-Step Guide
              </p>
            </div>

            {/* Right Column - Description */}
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                At A&A Plastering, we recently had the opportunity to work on a
                unique project: stuccoing a pool column that needed to hide a
                pipe within the structure. The builder constructed the column
                using 2×4s with an outer shell of OSB (oriented strand board).
                Below, we'll walk you through the process we followed to ensure
                a high-quality, long-lasting stucco finish.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 6 STEP CARDS SECTION ════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {steps.map(({ number, Icon, title, description }, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-default relative overflow-hidden"
              >
                {/* Hover Background Overlay */}
                <div className="absolute inset-0 bg-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon and Number Row */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Icon Badge */}
                    <div className="w-14 h-14 rounded-lg bg-[var(--color-primary)]/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                      <Icon className="text-2xl text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Step Number */}
                    <span className="text-5xl font-black text-gray-200 group-hover:text-white/30 transition-colors duration-300 leading-none">
                      {number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 leading-tight transition-colors duration-300">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-gray-100 leading-relaxed text-sm transition-colors duration-300">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PoolColumn;
