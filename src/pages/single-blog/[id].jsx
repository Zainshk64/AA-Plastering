import React from "react";
import { FaCalendar, FaPhone, FaPlay, FaUser} from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";
import BlogsHero from "../../components/blogs/BlogsHero";
import { motion } from "framer-motion";
/* ─── Recent Posts Data ─────────────────────────────────────── */
const recentPosts = [
  {
    image: "/single-blog/img1.jpg",
    title: "Why Fall is the Perfect Time for Stucco Repairs",
    date: "12 Oct 2024",
    link: "/blogs/fall-stucco-repairs",
  },
  {
    image: "/single-blog/img2.jpg",
    title: "Stucco vs. Siding: Which is Best for Your Home?",
    date: "12 Oct 2024",
    link: "/blogs/stucco-vs-siding",
  },
  {
    image: "/single-blog/img3.jpg",
    title: "Lessons from Our First Year in Business",
    date: "10 Sep 2024",
    link: "/blogs/first-year-lessons",
  },
  {
    image: "/single-blog/img4.jpg",
    title: "A Family Legacy in Construction",
    date: "12 Oct 2024",
    link: "/blogs/family-legacy",
  },
  {
    image: "/single-blog/img5.jpg",
    title: "How to Spot Common Stucco Problems",
    date: "13 Oct 2024",
    link: "/blogs/common-stucco-problems",
  },
];

/* ─── Blog Steps ────────────────────────────────────────────── */
const steps = [
  {
    number: 1,
    title: "Waterproofing with Tar Paper",
    body: "Before applying any stucco, it's essential to protect the OSB from moisture. We covered the entire surface of the column with tar paper, creating a waterproof barrier to protect the wood underneath.",
    image: null,
  },
  {
    number: 2,
    title: "Installing Casing Beads",
    body: "Next, we installed casing beads to provide clean edges around the column and ensure the stucco has a precise, neat finish.",
    image: null,
  },
  {
    number: 3,
    title: "Adding Metal Lath",
    body: "To prepare for the stucco application, we wrapped the entire column with metal lath. This provides a stable base for the stucco to adhere to, ensuring a solid bond and long-lasting durability.",
    image: null,
  },
  {
    number: 4,
    title: "Applying Corner Pieces",
    body: "We then placed corner pieces on the edges of the column to reinforce and protect the corners, preventing cracks and damage over time.",
    image: "/single-blog/img2.jpg",
  },
  {
    number: 5,
    title: "Finishing the Job",
    body: (
      <>
        After allowing the stucco to dry and cure, we returned to apply the
        final finish coat in the texture and color of the{" "}
        <strong>customer's choice</strong>. This final layer not only completes
        the look but also adds an extra layer of durability and aesthetic appeal
        to the column.
        <br />
        <br />
        This straightforward process results in a strong, waterproof, and
        visually appealing column that blends seamlessly into the surrounding
        pool area.
      </>
    ),
    image: null,
  },
];

/* ══════════════════════════════════════════════════════════════ */
const SingleBlog = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <BlogsHero />

      <div className="container mt-10">
        {/* ── Two-column layout ─────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* ════ MAIN CONTENT ════════════════════════════════ */}
          <main className="flex-1 min-w-0">
            {/* Hero video thumbnail */}
            <div className="relative rounded-2xl overflow-hidden mb-6 bg-gray-100 aspect-video">
              <img
                src="/single-blog/img1.jpg"
                alt="Pool Column Stucco"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.style.background =
                    "linear-gradient(135deg,#cbd5e1,#94a3b8)";
                }}
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200">
                  <FaPlay className="text-gray-800 text-lg ml-1" />
                </div>
              </div>
            </div>

            {/* Article meta */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-4">
              <div className="flex items-center gap-2">
                <img
                  src="/single-blog/img1.jpg"
                  alt="author"
                  className="w-7 h-7 rounded-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <span>Article by: A &amp; A Plastering LLC.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCalendar className="text-xs" />
                <span>Published: 22nd Sep 2024</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
              How We Stuccoed a Pool Column: A Step-by-Step Guide
            </h1>

            {/* Intro paragraph */}
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              At A&amp;A Plastering, we recently had the opportunity to work on
              a unique project: stuccoing a pool column that needed to hide a
              pipe within the structure. The builder constructed the column
              using 2×4s with an outer shell of OSB (oriented strand board).
              Below, we'll walk you through the process we followed to ensure a
              high-quality, long-lasting stucco finish.
            </p>

            {/* Steps */}
            <div className="space-y-7">
              {steps.map((step) => (
                <div key={step.number}>
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Step {step.number}: {step.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.body}
                  </p>
                  {step.image && (
                    <div className="mt-4 rounded-xl overflow-hidden aspect-video bg-gray-100">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentNode.style.background =
                            "linear-gradient(135deg,#cbd5e1,#94a3b8)";
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>

          {/* ════ SIDEBAR ═════════════════════════════════════ */}
          <aside className="w-full lg:w-[300px] flex-shrink-0">
            <div className="border border-gray-200 rounded-2xl p-5 sticky top-28">
              <h3 className="text-base font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100">
                Recent Posts
              </h3>

              <div className="space-y-5">
                {recentPosts.map((post, i) => (
                  <Link
                    key={i}
                    to={post.link}
                    className="flex items-start gap-3 group"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentNode.style.background =
                            "linear-gradient(135deg,#cbd5e1,#94a3b8)";
                        }}
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                        {post.title}
                      </p>
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs mt-1.5">
                        <FaCalendar className="text-[10px]" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

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

export default SingleBlog;
