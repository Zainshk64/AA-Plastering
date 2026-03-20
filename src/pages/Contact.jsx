import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaTimesCircle, FaTimes } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ContactHero from "../components/contact/ContactHero";
import { HiPencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";

// ─── Custom Toast Component ─────────────────────────────────
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -40, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: -40, x: "-50%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-24 left-1/2 z-[9999] w-[90%] max-w-md"
    >
      <div
        className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl border backdrop-blur-sm ${
          type === "success"
            ? "bg-white border-green-200 text-green-800"
            : "bg-white border-red-200 text-red-800"
        }`}
      >
        {/* Icon */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            type === "success" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {type === "success" ? (
            <FaCheckCircle className="text-green-500 text-lg" />
          ) : (
            <FaTimesCircle className="text-red-500 text-lg" />
          )}
        </div>

        {/* Text */}
        <div className="flex-1">
          <p className="font-semibold text-sm">
            {type === "success" ? "Message Sent!" : "Oops!"}
          </p>
          <p className="text-xs opacity-80 mt-0.5">{message}</p>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition p-1"
        >
          <FaTimes className="text-sm" />
        </button>
      </div>

      {/* Auto-dismiss progress bar */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 5, ease: "linear" }}
        className={`h-1 mt-0 rounded-b-xl origin-left ${
          type === "success" ? "bg-green-400" : "bg-red-400"
        }`}
      />
    </motion.div>
  );
};

// ─── Main Contact Page ──────────────────────────────────────
const Contact = () => {
  // ── Replace with YOUR Formspree endpoint ──
  const FORMSPREE_URL = "https://formspree.io/f/meerpvzr";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { message, type }

  // ── Handle input change ──
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ── Validate fields ──
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Submit to Formspree ──
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setToast({
        message: "Please fill in all required fields correctly.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setToast({
          message: "Thank you! We'll get back to you shortly.",
          type: "success",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        const data = await response.json();
        throw new Error(data?.error || "Submission failed");
      }
    } catch (error) {
      setToast({
        message: "Something went wrong. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32">
      {/* ── Toast Notification ── */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      <ContactHero />

      {/* Full Width Background */}
      <section className="bg-[#F2F7FC] py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            {/* ── Contact Info Card ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-start"
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

            {/* ── Contact Form Card ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                      errors.name
                        ? "border-red-400 bg-red-50 focus:border-red-500"
                        : "border-gray-300 focus:border-[var(--color-primary)]"
                    }`}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                    >
                      <FaTimesCircle className="text-[10px]" /> {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                        errors.email
                          ? "border-red-400 bg-red-50 focus:border-red-500"
                          : "border-gray-300 focus:border-[var(--color-primary)]"
                      }`}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                      >
                        <FaTimesCircle className="text-[10px]" />{" "}
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                        errors.phone
                          ? "border-red-400 bg-red-50 focus:border-red-500"
                          : "border-gray-300 focus:border-[var(--color-primary)]"
                      }`}
                    />
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                      >
                        <FaTimesCircle className="text-[10px]" />{" "}
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? "border-red-400 bg-red-50 focus:border-red-500"
                        : "border-gray-300 focus:border-[var(--color-primary)]"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                    >
                      <FaTimesCircle className="text-[10px]" />{" "}
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full py-4 rounded-lg font-semibold transition flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-primary)]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>


        <section className="w-full">
        <iframe
          title="A&A Plastering Location"
          src="https://www.google.com/maps?q=place_id:ChIJ0ViCRIVP1moRm7M6K10l-Bo&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
        />
      </section>

      {/* ── CTA Section ── */}
      <section className="relative h-[420px] md:h-[300px] overflow-hidden">
        <motion.div className="absolute inset-0 w-full h-[110%] -top-[10%]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url(/poolcolumn.jpg)" }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="container relative z-20 h-full flex flex-col md:flex-row items-center justify-center lg:justify-between gap-6 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold text-white max-w-xl"
          >
            Transform Your Home with Precision Stucco Craftsmanship!
          </motion.h2>

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