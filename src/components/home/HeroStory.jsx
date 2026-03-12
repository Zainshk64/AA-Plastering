// HeroStory.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroStory = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center g-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#144A87]/20 overflow-hidden">
      {/* Background subtle texture/gradient overlay */}
      {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(39,147,255,0.09)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(39,147,255,0.07)_0%,transparent_55%)]" />
      </div> */}

      <div className="relative z-10 container mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left side – Image + badge overlay */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-gray-800/50"
          >
            {/* You can replace with your actual garage photo */}
            <img
              src="/OurStory.jpg"
              alt="A&A Plastering garage workshop – where it all began"
              className="w-full h-[380px] md:h-[520px] object-cover brightness-[0.85] contrast-[1.05]"
            />

            {/* Overlay badges */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
              <div className="bg-[#2793FF]/90 backdrop-blur-sm text-white font-bold text-4xl md:text-5xl px-5 py-3 rounded-xl shadow-lg border border-[#2793FF]/30 flex items-center gap-3">
                <span>35</span>
                <span className="text-2xl md:text-3xl font-semibold">
                  YEARS
                </span>
              </div>

              <div className="bg-black/70 backdrop-blur-sm text-white font-bold text-xl md:text-2xl px-6 py-3 rounded-xl shadow-lg border border-gray-700/50 flex items-center gap-2">
                SINCE <span className="text-[#2793FF]">1989</span>
              </div>
            </div> */}
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
              A Legacy of Craftsmanship & Commitment
              <br />
            </motion.h1>

            <motion.div className="space-y-4 text-black/60 text-lg  leading-relaxed  max-w-2xl mx-auto md:mx-0">
              <p>
                Founded by a family with a passion for quality craftsmanship,
                A&A Plastering started when a father and son teamed up to create
                something meaningful. Despite language barriers and no prior
                construction experience,
                <b>
                  the son immersed himself in the stucco trade learning from
                  seasoned craftsmen and gaining true expertise.
                </b>
                <br />
                Over 35 years, we’ve stayed focused on high-quality projects,
                earning a reputation for precision and{" "}
                <b>exceptional service throughout Kansas City.</b>
              </p>
            </motion.div>

            <motion.div className="pt-4 md:pt-8 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2793FF] hover:bg-[#1e7de6] text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-xl shadow-[#2793FF]/30 hover:shadow-[#2793FF]/50 hover:-translate-y-1 min-w-[240px]"
              >
                Learn More About Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroStory;
