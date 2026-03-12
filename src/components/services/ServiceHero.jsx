import React from "react";
import { Link } from "react-router-dom";

const ServiceHero = () => {
  return (
    <section className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/banner.jpg)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-white px-4">
        {/* Breadcrumb */}
        <p className="text-xs sm:text-sm md:text-base mb-2 flex items-center gap-2">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>

          <span>-</span>

          <span className="opacity-80">Services</span>
        </p>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Services
        </h1>
      </div>
    </section>
  );
};

export default ServiceHero;
