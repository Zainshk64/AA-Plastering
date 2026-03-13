import React, { useState } from "react";
import { FaArrowRight, FaInstagram, FaTwitter, FaLinkedin, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServiceHero from "../../components/services/ServiceHero";
import { HiPencilAlt } from "react-icons/hi";
import {motion } from 'framer-motion'
/* ─── Other Services ────────────────────────────────────────── */
const otherServices = [
  { label: "Texture or Acrylic Finish", link: "/services/texture-acrylic-finish" },
  { label: "EIFS",                       link: "/services/eifs" },
  { label: "Veneer Stone",               link: "/services/veneer-stone" },
  { label: "Stucco & Stone Repairs",     link: "/services/stucco-stone-repairs" },
  { label: "Leak Repair & Inspections",  link: "/services/leak-repair" },
  { label: "Custom Solutions",           link: "/services/custom-solutions" },
  { label: "Pool Plastering Coating",    link: "/services/pool-plastering" },
];

/* ─── Service Detail Sections ───────────────────────────────── */
const sections = [
  {
    title: "Stucco Installation:",
    body: "Our expert team provides professional stucco installation for both residential and commercial properties. We apply traditional stucco using high-quality materials to ensure long-lasting durability and an aesthetically pleasing finish. Whether you're building from the ground up or renovating, our stucco services create a seamless, classic look for your home or business.",
  },
  {
    title: "Stucco Repair & Restoration:",
    body: "Cracks or damage in your stucco can compromise both the appearance and structural integrity of your property. We specialize in stucco repair and restoration, ensuring that your surfaces are restored to their original condition. Our team matches textures and colors perfectly, making the repairs blend flawlessly with the rest of your exterior.",
  },
  {
    title: "Stucco Patching & Crack Filling:",
    body: "Minor cracks and chips in stucco can worsen over time, leading to bigger issues. Our patching and crack filling services address these small imperfections before they become major problems. We use premium materials to ensure the repairs are seamless and your stucco remains weather-resistant.",
  },
  {
    title: "Stucco Maintenance:",
    body: "Proper maintenance is key to the longevity of your stucco surfaces. We offer comprehensive maintenance services, including cleaning, sealing, and minor touch-ups. Our goal is to keep your stucco looking fresh and beautiful while protecting it from environmental elements such as rain, sun, and wind.",
  },
  {
    title: "Stucco Customization & Decorative Finishes:",
    body: "Add a unique touch to your home with custom stucco designs and decorative finishes. From textured surfaces to smooth, modern styles, we offer a variety of options to enhance your property's curb appeal. Our experts work closely with you to create a look that matches your vision, whether it's a traditional or contemporary aesthetic.",
  },
];

/* ══════════════════════════════════════════════════════════════ */
const SingleService = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="pt-32 pb-20 bg-white">
      <ServiceHero />

      <div className="container my-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ════ MAIN CONTENT ════════════════════════════════ */}
          <main className="flex-1 min-w-0">

            {/* Hero image */}
            <div className="rounded-2xl overflow-hidden mb-8 bg-gray-100 aspect-video">
              <img
                src="/services/img1.jpg"
                alt="Traditional Stucco"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.style.background =
                    "linear-gradient(135deg,#cbd5e1,#94a3b8)";
                }}
              />
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Traditional Stucco
            </h1>

            {/* Intro */}
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              At A&amp;A Plastering, we specialize in providing high-quality traditional
              stucco applications that stand the test of time. With years of experience
              in the craft, our team ensures precise installation using tried-and-true
              methods that create a durable and weather-resistant exterior. We pride
              ourselves on delivering exceptional results, combining our expertise with
              family values to ensure that every stucco project meets the highest
              standards of excellence.
            </p>

            {/* Detail sections */}
            <div className="space-y-8">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </main>

          {/* ════ SIDEBAR ═════════════════════════════════════ */}
          <aside className="w-full lg:w-[280px] flex-shrink-0 space-y-5">

            {/* Other Services */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden sticky top-28">
              <div className="px-5 py-4 border-b border-gray-100">
                <h3 className="text-base font-bold text-gray-900">
                  Other Services
                </h3>
              </div>

              <ul className="divide-y divide-gray-100">
                {otherServices.map((s, i) => (
                  <li key={i}>
                    <Link
                      to={s.link}
                      className="flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 hover:text-[var(--color-primary)] hover:bg-blue-50 transition-colors duration-150 group"
                    >
                      <span>{s.label}</span>
                      <FaArrowRight className="text-xs text-gray-400 group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mailing list */}
              <div className="bg-[var(--color-primary)] px-5 py-5 mt-4">
                <p className="text-white font-bold text-sm text-center mb-3">
                  Join Our Mailing List
                </p>
                <form
                  onSubmit={handleSubscribe}
                  className="flex overflow-hidden rounded-lg border border-white/30"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address..."
                    required
                    className="flex-1 min-w-0 px-3 py-2 text-xs bg-white text-gray-700 placeholder-gray-400 outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[var(--color-secondary)] text-white text-xs font-semibold whitespace-nowrap hover:brightness-110 transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Social share */}
              <div className="px-5 py-4 flex items-center gap-3">
                <span className="text-sm text-gray-500 font-medium">Share:</span>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FaInstagram className="text-white text-sm" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-full bg-sky-400 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FaTwitter className="text-white text-sm" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FaLinkedin className="text-white text-sm" />
                </a>
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

export default SingleService;