import React from "react";
import { motion } from "framer-motion";
import BlogsHero from "../components/blogs/BlogsHero";
import { FaArrowRight, FaCalendar, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiPencilAlt } from "react-icons/hi";

/* ─── Blog Data ─────────────────────────────────────────────── */
const blogData = [
  {
    image: "/blogs/img1.jpg",
    title: "The Benefits of Choosing Traditional Stucco for Your Home",
    para: "Discover why traditional stucco remains one of the most durable and cost-effective exterior finishes available for modern homeowners today.",
    date: "Oct 07, 2024",
    link: "/blogs/traditional-stucco-benefits",
  },
  {
    image: "/blogs/img2.jpg",
    title: "How to Maintain Your Stucco Exterior Through Every Season",
    para: "Learn the essential maintenance tips that will keep your stucco looking fresh and prevent costly repairs throughout the changing seasons.",
    date: "Oct 14, 2024",
    link: "/blogs/stucco-maintenance-tips",
  },
  {
    image: "/blogs/img3.jpg",
    title: "Acrylic vs Traditional Stucco: Which Finish Is Right for You?",
    para: "We break down the key differences between acrylic and traditional stucco finishes so you can make the best choice for your property.",
    date: "Oct 22, 2024",
    link: "/blogs/acrylic-vs-traditional-stucco",
  },
  {
    image: "/blogs/img4.jpg",
    title: "Top Signs Your Stucco Needs Repair Before Winter Arrives",
    para: "Catching stucco damage early can save thousands in repair costs. Here are the warning signs every homeowner should watch out for.",
    date: "Nov 01, 2024",
    link: "/blogs/stucco-repair-signs",
  },
  {
    image: "/blogs/img5.jpg",
    title: "A Complete Guide to Stucco Textures and Decorative Finishes",
    para: "From smooth to coarse, explore the wide range of stucco textures and how each one can dramatically transform the look of your home.",
    date: "Nov 10, 2024",
    link: "/blogs/stucco-textures-guide",
  },
  {
    image: "/blogs/img6.jpg",
    title: "Why Proper Waterproofing Is the Foundation of Any Stucco Job",
    para: "Waterproofing is the most critical and often overlooked step in stucco application. Find out why it matters and how we get it right.",
    date: "Nov 18, 2024",
    link: "/blogs/stucco-waterproofing",
  },
];

/* ─── Card variants ─────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/* ══════════════════════════════════════════════════════════════ */
const Blogs = () => {
  return (
    <div className="pt-32">
      <BlogsHero />

      {/* ═══════════ ARTICLES SECTION ═══════════ */}
      <section className="py-16 bg-white">
        <div className="container">
          {/* Heading */}

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {blogData.map((blog, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="h-[260px] sm:h-[300px] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentNode.style.background =
                        "linear-gradient(135deg,#cbd5e1,#94a3b8)";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <FaCalendar className="flex-shrink-0" />
                    <span>{blog.date}</span>
                  </div>

                  {/* Title — 2 lines clamped */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Paragraph — 2 lines clamped */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                    {blog.para}
                  </p>

                  {/* Read article link */}
                  <Link
                    to={blog.link}
                    className="inline-flex items-center gap-2 text-[var(--color-secondary)] font-semibold text-sm hover:gap-3 transition-all duration-200 group"
                  >
                    Read Article
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
    </div>
  );
};

export default Blogs;
