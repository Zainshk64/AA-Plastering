import { motion } from "framer-motion";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <>
      <section className="relative min-h-[90vh] md:min-h-screen flex items-cente overflow-hidden">
        {/* Background subtle texture/gradient overlay */}
        {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(39,147,255,0.09)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(39,147,255,0.07)_0%,transparent_55%)]" />
      </div> */}

        <div className="relative z-10 container mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-gray-800/50"
            >
              <img
                src="/about/img1.jpg"
                alt="A&A Plastering garage workshop – where it all began"
                className="w-full h-[380px] md:h-[520px] object-cover brightness-[0.85] contrast-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </motion.div>

            {/* Right side – Text content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center md:text-left space-y-4 md:space-y-5"
            >
              <motion.p className="text-[#2793FF] font-semibold tracking-widest uppercase text-sm md:text-base">
                Our Story
              </motion.p>

              <motion.h1 className="text-4xl sm:text-4xl  font-bold text-black leading-tight">
                From Sales to Stucco Mastery <br />
              </motion.h1>

              <motion.div className="space-y-4 text-black/60 text-lg  leading-relaxed  max-w-2xl mx-auto md:mx-0">
                <p>
                  At 20 years old, I arrived in the U.S. with a dream of
                  building something meaningful, despite not speaking English at
                  the time. My father was already working in the stucco
                  industry. {""}
                  <b>
                    I joined him with little knowledge of the trade and no prior
                    construction experience.
                  </b>{" "}
                  {""}
                  My background was in sales, but I was determined to learn.
                  Over the next two years, I dedicated myself to learning
                  English and mastering the stucco craft. {""}
                  <b>
                    I immersed myself in the trade, joining a plasterers’ union,
                    where I had the privilege of learning from seasoned
                    craftsmen.
                  </b>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-[#F2F7FC] overflow-hidden">
        <div className="relative z-10 container mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center md:text-left space-y-4 md:space-y-5"
            >
              <motion.p className="text-[#2793FF] font-semibold tracking-widest uppercase text-sm md:text-base">
                Our Mission
              </motion.p>

              <motion.h1 className="text-4xl sm:text-4xl  font-bold text-black leading-tight">
                Building a Legacy with Quality and Precision <br />
              </motion.h1>

              <motion.div className="space-y-4 text-black/60 text-lg  leading-relaxed  max-w-2xl mx-auto md:mx-0">
                <p>
                  After four years of hard work, an opportunity presented
                  itself.
                  <b>
                    My father and I decided it was time to build something of
                    our own. We founded A&A Plastering together, and my brother
                    soon joined us.
                  </b>{" "}
                  {""}
                  Our first year was full of lessons, especially when it came to
                  understanding the business side—pricing jobs correctly,
                  managing workloads, and staying competitive. Then, like many,
                  we were deeply affected by the COVID-19 pandemic, which slowed
                  everything down. My brother left the business, and it was just
                  me and my father. {""}
                  <b>
                    We made the decision to focus on smaller, high-quality jobs
                    that we could handle ourselves. This was the turning point.
                  </b>{" "}
                  {""}
                  By prioritizing quality over quantity, we developed a
                  reputation for precision, attention to detail, and exceptional
                  customer service.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-gray-800/50"
            >
              <img
                src="/about/img2.jpg"
                alt="A&A Plastering garage workshop – where it all began"
                className="w-full h-[380px] md:h-[520px] object-cover brightness-[0.85] contrast-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-gray-800/50"
            >
              <img
                src="/about/img3.jpg"
                alt="A&A Plastering garage workshop – where it all began"
                className="w-full h-[380px] md:h-[520px] object-cover brightness-[0.85] contrast-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center md:text-left space-y-4 md:space-y-5"
            >
              <motion.p className="text-[#2793FF] font-semibold tracking-widest uppercase text-sm md:text-base">
                Our Vision
              </motion.p>

              <motion.h1 className="text-4xl sm:text-4xl  font-bold text-black leading-tight">
                Building for the Future, One Home at a Time <br />
              </motion.h1>

              <motion.div className="space-y-4 text-black/60 text-lg  leading-relaxed  max-w-2xl mx-auto md:mx-0">
                <p>
                  In 2023, my father decided to step away from the business due
                  to health reasons, and I took over full ownership. {""}
                  <b>
                    Today, A&A Plastering continues to uphold the values we
                    started with: hard work, craftsmanship, and treating every
                    project like it’s our own home. {""}
                  </b>
                  As a husband and father of a young son, my goal is to create
                  something lasting—not just for my family, but for the families{" "}
                  {""}
                  <b>we serve throughout Kansas City.</b> {""}
                  Each job we take on is a reflection of our commitment to
                  quality, care, and trust, and these principles will guide A&A
                  Plastering for years to come.
                </p>
              </motion.div>
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



      <section className="bg-[#F2F7FC] py-16">
  <div className="container px-4">

    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">
        Core Values
      </h2>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        
        {/* Image */}
        <div className="p-2">
          <img
            src="/cors-value/img1.jpg"
            alt="Integrity"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-black mb-2">
            Integrity
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            At A&A Plastering, we specialize in providing high-quality
            traditional stucco applications that stand the test of time.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        
        <div className="p-2">
          <img
            src="/cors-value/img2.jpg"
            alt="Professionalism"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-black mb-2">
            Professionalism
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Delivering polished, precise work with pride and attention to detail.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        
        <div className="p-2">
          <img
            src="/cors-value/img3.jpg"
            alt="Craftsmanship"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-black mb-2">
            Craftsmanship
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Producing high-quality results with dedication and expert care.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  );
};

export default AboutSection;
