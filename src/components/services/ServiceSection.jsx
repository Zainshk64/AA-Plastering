import { motion } from "framer-motion";
import React from "react";
const ServiceSection = () => {
  return (
    <>

      <section className="relative min-h-[90vh] md:min-h-screen flex overflow-hidden">
        <div className="relative z-10 container mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32 ">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-gray-800/50"
            >
              <img
                src="https://res.cloudinary.com/drdpqf3ns/image/upload/v1774377892/9a3ae35d-831c-4b69-9be1-70969459f5d2_w1ysc4.jpg"
                alt="A&A Plastering garage workshop – where it all began"
                className="w-full h-[380px] md:h-[420px] object-cover brightness-[0.85] contrast-[1.05]"
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
              <motion.h1 className="text-4xl sm:text-4xl  font-bold text-black leading-tight">
                Traditional Stucco
                <br />
              </motion.h1>

              <motion.div className="space-y-4 text-black/60 text-lg  leading-relaxed  max-w-2xl mx-auto md:mx-0">
                <p>
                  At A&A Plastering, we specialize in providing high-quality
                  traditional stucco applications that stand the test of time.
                  With years of experience in the craft, our team ensures
                  precise installation using tried-and-true methods that create
                  a durable and weather-resistant exterior. We pride ourselves
                  on delivering exceptional results, combining our expertise
                  with family values to ensure that every stucco project meets
                  the highest standards of excellence.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[90vh] md:min-h-screen flex overflow-hidden bg-[#F2F7FC] ">
        <div className="relative z-10 container mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32     ">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Right side – Text content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center md:text-left space-y-4 md:space-y-5"
            >
              <motion.h1 className="text-4xl sm:text-4xl  font-bold text-black leading-tight">
                Texture Or Acrylic Finish
                <br />
              </motion.h1>

              <motion.div className="space-y-4 text-black/60 text-lg  leading-relaxed  max-w-2xl mx-auto md:mx-0">
                <p>
                  A&A offers a wide variety of texture and acrylic finishes,
                  allowing homeowners to personalize the look of their property
                  with long-lasting and beautiful results. Our acrylic finishes
                  not only enhance the aesthetic but also provide flexibility
                  and resistance to cracking, making them ideal for regions with
                  extreme weather conditions. We mix premium Sherwin-Williams
                  paints directly into our finishes, offering endless color
                  options while maintaining durability and quality.
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
                src="/services/img2.jpg"
                alt="A&A Plastering garage workshop – where it all began"
                className="w-full h-[380px] md:h-[420px] object-cover brightness-[0.85] contrast-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>


      <section className="relative min-h-[90vh] md:min-h-screen flex overflow-hidden">
        <div className="relative z-10 container mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32 ">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-gray-800/50"
            >
              <img
                src="https://res.cloudinary.com/drdpqf3ns/image/upload/v1774377687/b06734ba-adad-4d8a-9e4d-e76321d32978_yrenxe.jpg"
                alt="A&A Plastering garage workshop – where it all began"
                className="w-full h-[380px] md:h-[420px] object-cover brightness-[0.85] contrast-[1.05]"
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
              <motion.h1 className="text-4xl sm:text-4xl  font-bold text-black leading-tight">
                EIFS
                <br />
              </motion.h1>

              <motion.div className="space-y-4 text-black/60 text-lg  leading-relaxed  max-w-2xl mx-auto md:mx-0">
                <p>
                 When it comes to energy-efficient and moisture-resistant solutions, A&A excels in EIFS installations. We offer top-of-the-line EIFS systems that enhance insulation while providing a smooth, seamless exterior. Our meticulous attention to detail ensures proper installation, resulting in a beautiful and long-lasting finish that also improves energy efficiency, making homes more comfortable and cost-effective.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>



       <section className="relative min-h-[90vh] md:min-h-screen flex overflow-hidden bg-[#F2F7FC] ">
        <div className="relative z-10 container mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Right side – Text content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center md:text-left space-y-4 md:space-y-5"
            >
              <motion.h1 className="text-4xl sm:text-4xl  font-bold text-black leading-tight">
                Veneer Stone
                <br />
              </motion.h1>

              <motion.div className="space-y-4 text-black/60 text-lg  leading-relaxed  max-w-2xl mx-auto md:mx-0">
                <p>
                  A&A brings craftsmanship and precision to every veneer stone project, enhancing the beauty and elegance of your home or commercial building. Whether you're looking to add a rustic or modern touch, our expert team carefully installs stone veneers with the perfect balance of aesthetics and functionality. We ensure a flawless finish that elevates curb appeal while delivering long-lasting durability.
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
                src="https://res.cloudinary.com/drdpqf3ns/image/upload/v1774378044/d1a057d1-b992-412a-a273-5643a3e2f0bf_e4icfl.jpg"
                alt="A&A Plastering garage workshop – where it all began"
                className="w-full h-[380px] md:h-[420px] object-cover brightness-[0.85] contrast-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>












        <section className="relative min-h-[90vh] md:min-h-screen flex overflow-hidden">
        <div className="relative z-10 container mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32 ">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-gray-800/50"
            >
              <img
                src="https://res.cloudinary.com/drdpqf3ns/image/upload/v1774377753/ad92b9e1-8815-49b3-9e00-02e7620be55b_tdu8su.jpg"
                alt="A&A Plastering garage workshop – where it all began"
                className="w-full h-[380px] md:h-[420px] object-cover brightness-[0.85] contrast-[1.05]"
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
              <motion.h1 className="text-4xl sm:text-4xl  font-bold text-black leading-tight">
                Stucco & Stone Repair
                <br />
              </motion.h1>

              <motion.div className="space-y-4 text-black/60 text-lg  leading-relaxed  max-w-2xl mx-auto md:mx-0">
                <p>
                  A&A is your go-to source for professional stucco and stone repairs, providing quick, efficient, and high-quality solutions. Whether it’s addressing cracks, chips, or more significant damage, our experienced team uses the best materials and techniques to restore your stucco or stonework to its original condition. Our focus is on seamless repairs that blend in perfectly with the existing surface, ensuring your home looks as good as new.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[90vh] md:min-h-screen flex overflow-hidden bg-[#F2F7FC] ">
        <div className="relative z-10 container mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32     ">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Right side – Text content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center md:text-left space-y-4 md:space-y-5"
            >
              <motion.h1 className="text-4xl sm:text-4xl  font-bold text-black leading-tight">
                Leak Repair & Inspections
                <br />
              </motion.h1>

              <motion.div className="space-y-4 text-black/60 text-lg  leading-relaxed  max-w-2xl mx-auto md:mx-0">
                <p>
                  Preventing water damage is critical, and A&A offers thorough leak inspection and repair services for stucco and stone surfaces. Our skilled team identifies problem areas and provides expert repairs to prevent future leaks and damage. With a reputation for thorough inspections and precision repairs, we protect your property from costly water damage and ensure long-term peace of mind.
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
                src="/services/img6.jpg"
                alt="A&A Plastering garage workshop – where it all began"
                className="w-full h-[380px] md:h-[420px] object-cover brightness-[0.85] contrast-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>


      <section className="relative min-h-[90vh] md:min-h-screen flex overflow-hidden">
        <div className="relative z-10 container mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32 ">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-gray-800/50"
            >
              <img
                src="/services/img7.jpg"
                alt="A&A Plastering garage workshop – where it all began"
                className="w-full h-[380px] md:h-[420px] object-cover brightness-[0.85] contrast-[1.05]"
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
              <motion.h1 className="text-4xl sm:text-4xl  font-bold text-black leading-tight">
                Custom Solutions
                <br />
              </motion.h1>

              <motion.div className="space-y-4 text-black/60 text-lg  leading-relaxed  max-w-2xl mx-auto md:mx-0">
                <p>
                At A&A, we believe no two projects are the same. That's why we offer custom stucco and stone solutions tailored to your unique vision and needs. Whether you're looking for a distinctive design or have specific material preferences, our team works closely with you to bring your ideas to life. With our commitment to personalized service, we create custom finishes that blend style, durability, and craftsmanship.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>



       <section className="relative min-h-[90vh] md:min-h-screen flex overflow-hidden bg-[#F2F7FC] ">
        <div className="relative z-10 container mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Right side – Text content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center md:text-left space-y-4 md:space-y-5"
            >
              <motion.h1 className="text-4xl sm:text-4xl  font-bold text-black leading-tight">
                Pool Plasteting Coating
                <br />
              </motion.h1>

              <motion.div className="space-y-4 text-black/60 text-lg  leading-relaxed  max-w-2xl mx-auto md:mx-0">
                <p>
                  Our expertise extends to pool plastering, where we offer durable and beautiful finishes to enhance your pool area. At A&A, we use high-quality materials to ensure a smooth, water-resistant plastering coat that can withstand the elements and the wear of daily use. Our pool plastering services not only improve the aesthetic appeal of your pool but also enhance its longevity and performance, providing you with a surface that’s as reliable as it is attractive.
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
                src="/services/img8.jpg"
                alt="A&A Plastering garage workshop – where it all began"
                className="w-full h-[380px] md:h-[420px] object-cover brightness-[0.85] contrast-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>



        <section className="relative min-h-[90vh] md:min-h-screen flex overflow-hidden">
        <div className="relative z-10 container mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32 ">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-gray-800/50"
            >
              <img
                src="https://res.cloudinary.com/drdpqf3ns/image/upload/v1774379512/9f84bb72-880f-4807-9d4d-d0cf07d219a0_mi7mt1.jpg"
                alt="A&A Plastering garage workshop – where it all began"
                className="w-full h-[380px] md:h-[420px] object-cover brightness-[0.85] contrast-[1.05]"
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
  <motion.h1 className="text-4xl sm:text-4xl font-bold text-black leading-tight">
    Stucco Bathrooms
    <br />
  </motion.h1>

  <motion.div className="space-y-4 text-black/60 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
    
    <p>
      Transform your bathroom into a modern, seamless space with our premium stucco finishes. Stucco bathrooms offer a clean, waterproof, and elegant look that enhances both residential and commercial interiors. At A&A, we specialize in creating smooth, durable surfaces that resist moisture while maintaining a sophisticated appearance.
    </p>

    <p>
      Our team carefully designs each bathroom to ensure functionality meets aesthetics. From walls to shower areas, we apply high-quality materials that provide long-lasting performance with minimal maintenance. Every detail is crafted to deliver a refined finish that elevates your everyday experience.
    </p>

    

  </motion.div>
</motion.div>
          </div>
        </div>
      </section>



    </>
  );
};

export default ServiceSection;
