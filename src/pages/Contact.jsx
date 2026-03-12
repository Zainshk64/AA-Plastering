import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactHero from "../components/contact/ContactHero";
import { HiPencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="pt-32">
      <ContactHero />

      {/* Full Width Background */}
      <section className="bg-[#F2F7FC] py-16 ">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-"
            >
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-3">Contact Us</h1>
                <p className="text-gray-600">
                  For any other inquiry, give us a call or fill in the form. We
                  will be thrilled to help.
                </p>
              </div>

              <h2 className="text-xl font-semibold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-secondary)]/90 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-[var(--color-primary)] text-xl" />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      123 Construction Ave
                      <br />
                      Builder City, BC 12345
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-secondary)]/90 rounded-full flex items-center justify-center">
                    <FaPhone className="text-[var(--color-primary)] text-xl" />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-gray-600 hover:text-[var(--color-primary)] text-sm"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-secondary)]/90 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-[var(--color-primary)] text-xl" />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:info@aaplastering.com"
                      className="text-gray-600 hover:text-[var(--color-primary)] text-sm"
                    >
                      info@aaplastering.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              <form className="space-y-5">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--color-primary)]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--color-primary)]"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[var(--color-secondary)] text-white py-4 rounded-lg font-semibold hover:bg-[var(--color-primary)] transition"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

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

export default Contact;
