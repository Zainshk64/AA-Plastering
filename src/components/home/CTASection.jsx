import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiPencilAlt } from "react-icons/hi";
import { FaArrowRight, FaCalendar, FaPhone } from "react-icons/fa";

const CTASection = () => {
  return (
    <>
      {/* ═══════════ ARTICLES SECTION ═══════════ */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12">
            Our Latest Stucco Articles
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl overflow-hidden  transition"
            >
              <div className="h-[220px] rounded-lg overflow-hidden">
                <img
                  src="/article1.jpg"
                  alt="stucco article"
                  className="w-full h-full rounded-lg object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="py-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <FaCalendar />
                  <p>Oct 07, 2024</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  The Benefits of Choosing Traditional Stucco for Your Home
                </h3>

                <button className="flex items-center gap-2 text-[var(--color-secondary)] font-medium hover:gap-3 transition-all">
                  Read Article <FaArrowRight />
                </button>
              </div>
            </motion.div>

            {/* Article 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl overflow-hidden transition"
            >
               <div className="h-[220px] rounded-lg overflow-hidden">
                <img
                  src="/article2.jpg"
                  alt="stucco article"
                  className="w-full h-full rounded-lg object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="py-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <FaCalendar />
                  <p>Oct 07, 2024</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why This Timeless Choice Is Perfect for Your Home’s Exterior
                </h3>

                <button className="flex items-center gap-2 text-[var(--color-secondary)] font-medium hover:gap-3 transition-all">
                  Read Article <FaArrowRight />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA HERO SECTION ═══════════ */}
      <section className="relative h-[420px] md:h-[300px] overflow-hidden">
        {/* Background */}
        <motion.div className="absolute inset-0 w-full h-[110%] -top-[10%]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url(/poolcolumn.jpg)" }}
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <div className="container relative z-20 h-full flex flex-col md:flex-row items-center justify-center lg:justify-between gap-6 text-center md:text-left">
          {/* Text */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold text-white max-w-xl"
          >
            Transform Your Home with Precision Stucco Craftsmanship!
          </motion.h2>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--color-primary)] text-white px-6 py-4 rounded-lg font-semibold shadow-lg hover:bg-[var(--color-secondary)] transition flex items-center gap-3"
              >
                <HiPencilAlt />
                Request a Consultation
              </motion.button>
            </Link>

            <motion.a
              href="tel:9134495061"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-4 rounded-lg font-semibold hover:bg-white/20 transition flex items-center gap-3 justify-center"
            >
              <FaPhone />
              Call Us: 913-449-5061
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CTASection;