import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaArrowRight, FaPhone } from "react-icons/fa";
import { Link, Links } from "react-router-dom";
import { HiPencilAlt } from "react-icons/hi";

/* ─── Portfolio Data ─────────────────────────────────────────── */
const portfolioData = [
  {
    clientName: "David S",
    date: "24 October, 2023",
    avatar: "/images/avatars/david.jpg",
    stars: 5,
    review:
      "I had a small leak issue, and A&A Plastering handled it quickly and efficiently. The work was flawless, and they even followed up to make sure everything was perfect. Excellent service!",
    beforeImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774552209/5d294613-6075-4377-9584-548d5195f834_hre9xb.jpg",
    afterImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774552272/114cb9d6-25a7-4c82-95d0-f148b95bd253_qleziu.jpg",
  },
  {
    clientName: "Maria Lopez",
    date: "10 November, 2023",
    avatar: "/images/avatars/maria.jpg",
    stars: 5,
    review:
      "Exceptional craftsmanship and attention to detail! A&A Plastering transformed the exterior of our home with their stucco work, and we couldn't be happier with the results",
    beforeImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774552612/d933c8ab-efef-4f08-b8cf-228580b6dfc4_wna9s9.jpg",
    afterImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774552624/40c89fe2-3d17-4d1b-a112-ce23b0ee7f93_yxecez.jpg",
  },
  {
    clientName: "James T",
    date: "2 December, 2023",
    avatar: "/images/avatars/james.jpg",
    stars: 5,
    review:
      "We had an amazing experience with A&A Plastering. They handled our project with care, stayed on budget, and delivered beautiful work. Their focus on quality and customer satisfaction is truly remarkable!",
    beforeImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774552698/b97912ce-180f-4229-b118-d2a57b6a9133_lv79dd.jpg",
    afterImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774552711/b504e4e3-dc79-4985-8fbf-9cd4f672750f_y1a6ny.jpg",
  },
  {
    clientName: "Shana W",
    date: "15 December, 2023",
    avatar: "/images/avatars/shana.jpg",
    stars: 5,
    review:
      "I Had A Small Leak Issue And A&A Plastering Handled It Quickly And Efficiently. The Work Was Flawless And They Followed Up To Make Sure Everything Was Perfect. Excellent Service!",
    beforeImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774553317/60e16490-c792-4f54-ab16-3ca23c8159bc_ykjfrr.jpg",
    afterImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774553319/ec89903c-a885-4672-85d9-033c93bfa2be_uqldha.jpg",
  },
  {
    clientName: "Andrew J",
    date: "3 January, 2024",
    avatar: "/images/avatars/andrew.jpg",
    stars: 5,
    review:
      "Exceptional attention to detail! A&A Plastering transformed the exterior of our commercial building. The acrylic finish is stunning and has already received many compliments.",
    beforeImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774553480/723139e7-2967-401a-a12d-9d553157e148_pkzfml.jpg",
    afterImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774553514/1595717b-6e32-4a1d-82a6-b90ff2a1b5d0_ylgbgw.jpg",
  },
  
  {
    clientName: "Lisa C",
    date: "20 January, 2024",
    avatar: "/images/avatars/lisa.jpg",
    stars: 5,
    review:
      "Professional team from start to finish. The stone repair work on our property looks absolutely stunning. Neighbors keep asking who did the work. Could not recommend them more highly.",
    beforeImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774553602/76400d7a-9d9c-49e7-b0d1-c98d26716ad1_knz2qy.jpg",
    afterImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774553592/dfeb6e89-66f0-4300-8618-18bcb1d5972e_voywgx.jpg",
  },
  {
    clientName: "Lisa C",
    date: "20 January, 2024",
    avatar: "/images/avatars/lisa.jpg",
    stars: 5,
    review:
      "Professional team from start to finish. The stone repair work on our property looks absolutely stunning. Neighbors keep asking who did the work. Could not recommend them more highly.",
    beforeImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774553721/f87dc101-2d20-403b-94ba-b2673e15dde8_mv3jxx.jpg",
    afterImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774553724/3887b9e7-2939-4467-bf98-4250eb0d0872_fgto4o.jpg",
  },
  {
    clientName: "Lisa C",
    date: "20 January, 2024",
    avatar: "/images/avatars/lisa.jpg",
    stars: 5,
    review:
      "Professional team from start to finish. The stone repair work on our property looks absolutely stunning. Neighbors keep asking who did the work. Could not recommend them more highly.",
    beforeImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774553828/3682e8e3-4cb4-4957-81aa-81c60007f0bd_jc8m49.jpg",
    afterImg: "https://res.cloudinary.com/daljxhxzf/image/upload/v1774553832/ac7cd74a-e25c-4e3c-9fa8-4482e7e5eb1f_mmpp4x.jpg",
  },
  
 
];

/* ─── Single Portfolio Card ──────────────────────────────────── */
const PortfolioCard = ({ item, index }) => {
  const isReverse = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
      className={`flex flex-col ${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"} 
        items-stretch bg-[#F0F6FF] rounded-2xl overflow-hidden border border-gray-200 
        shadow-sm hover:shadow-lg transition-shadow duration-300`}
    >
      {/* ── LEFT / TEXT SIDE ──────────────────────────────────── */}
      <div className="flex flex-col justify-between gap-5 p-7 lg:p-9 flex-1 min-w-0">
        {/* Avatar + name + date */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <img
              src={item.avatar}
              alt={item.clientName}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.clientName)}&background=2793FF&color=fff&size=56`;
              }}
            />
            <div>
              <p className="font-bold text-gray-900 text-base leading-tight">
                {item.clientName}
              </p>
              <p className="text-sm text-gray-500 mt-0.5">{item.date}</p>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 mb-5" />

          {/* Stars */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(item.stars)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-lg" />
            ))}
          </div>

          {/* Review text */}
          <p className="text-gray-700 text-[0.93rem] leading-relaxed italic">
            {item.review}
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] 
                text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors duration-200 shadow-md"
            >
              Explore Our Work
              <FaArrowRight className="text-xs" />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* ── RIGHT / IMAGES SIDE ───────────────────────────────── */}
      <div className="flex flex-row lg:w-[46%] flex-shrink-0 min-h-[240px] lg:min-h-0">
        {/* Before */}
        <div className="relative flex-1 overflow-hidden">
          <img
            src={item.beforeImg}
            alt={`${item.clientName} before`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentNode.style.background =
                "linear-gradient(135deg,#94a3b8,#64748b)";
            }}
          />
          <div className="absolute bottom-3 left-3 bg-black/55 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-md">
            Before
          </div>
        </div>

        {/* After */}
        <div className="relative flex-1 overflow-hidden">
          <img
            src={item.afterImg}
            alt={`${item.clientName} after`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentNode.style.background =
                "linear-gradient(135deg,#7c8e6b,#4a5e3a)";
            }}
          />
          <div className="absolute bottom-3 left-3 bg-black/55 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-md">
            After
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Section ────────────────────────────────────────────────── */
const PortfolioSection = () => {
  return (
    <>
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          {/* Section header */}
          {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-[var(--color-primary)] font-semibold text-sm tracking-widest uppercase mb-2">
            OUR WORK
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Before &amp; After Results
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Real projects, real transformations — see what A&amp;A Plastering delivers
            for every client.
          </p>
        </motion.div> */}

          {/* Cards list */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {portfolioData.map((item, index) => (
              <PortfolioCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[500px] md:h-[500px] overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div
          //   style={{ y: bgY }}
          className="absolute inset-0 w-full h-[110%] -top-[10%]"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url(/portfolio/banner.jpg)",
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
            Transform Home with Precision <br /> Stucco Craftsmanship!
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
                <HiPencilAlt />
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
              Get A Free Qoute
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
