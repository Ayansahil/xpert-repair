import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Brands = () => {
  // Brand data with SVG logos for better SEO and performance
  const brands = [
    {
      name: "Samsung",
      logo: "/brands/samsung.svg",
      alt: "Samsung TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "LG",
      logo: "/brands/lg.svg",
      alt: "LG TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Sony",
      logo: "/brands/sony.svg",
      alt: "Sony TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "TCL",
      logo: "/brands/tcl.svg",
      alt: "TCL TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Mi",
      logo: "/brands/mi.svg",
      alt: "Mi TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Whirlpool",
      logo: "/brands/whirlpool.svg",
      alt: "Whirlpool appliance repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Bosch",
      logo: "/brands/bosch.svg",
      alt: "Bosch appliance repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Godrej",
      logo: "/brands/godrej.svg",
      alt: "Godrej appliance repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Haier",
      logo: "/brands/haier.svg",
      alt: "Haier TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Panasonic",
      logo: "/brands/panasonic.svg",
      alt: "Panasonic TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Hitachi",
      logo: "/brands/hitachi.svg",
      alt: "Hitachi TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Hyundai",
      logo: "/brands/hyundai.svg",
      alt: "Hyundai Electronics TV repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Nokia",
      logo: "/brands/nokia.svg",
      alt: "Nokia TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Videocon",
      logo: "/brands/videocon.svg",
      alt: "Videocon TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Kodak",
      logo: "/brands/kodak.svg",
      alt: "Kodak TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Philips",
      logo: "/brands/philips.svg",
      alt: "Philips TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "IFB",
      logo: "/brands/ifb.svg",
      alt: "IFB TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Realme",
      logo: "/brands/realme.svg",
      alt: "Realme TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Sharp",
      logo: "/brands/sharp.svg",
      alt: "Sharp TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
     {
      name: "Micromax",
      logo: "/brands/micromax.svg",
      alt: "Micromax TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Sansui",
      logo: "/brands/sansui.svg",
      alt: "Sansui TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Electrolux",
      logo: "/brands/electrolux.svg",
      alt: "Electrolux TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
    {
      name: "Onida",
      logo: "/brands/onida.svg",
      alt: "Onida TV LCD LED repair service - Xpert Repair Center Bhopal",
    },
  ];

  // Triple the brands array for seamless infinite loop
  const extendedBrands = [...brands, ...brands, ...brands];

  return (
    <section
      id="brands"
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4 mr-2" />
            Supported Brands
          </div>

          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            LCD/LED Plasma
            <span className="text-blue-500 block">TV Brands</span>
            <span className="text-gray-800">We Repair in Bhopal</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Our certified technicians in Bhopal are trained to work on appliances from all
            leading manufacturers. From washing machine and fridge repair to microwave and geyser repair, no matter the brand, we have the expertise to
            get it fixed.
          </p>
        </motion.div>

        {/* Clean Logo Marquee Section */}
        <div className="relative mb-20">
          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 w-16 md:w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 md:w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Container */}
          <div className="overflow-hidden py-8">
            <div className="flex animate-marquee-smooth hover:pause-marquee">
              {extendedBrands.map((brand, index) => (
                <div
                  key={`brand-${index}`}
                  className="flex-shrink-0 mx-3 md:mx-4 w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 border-2 border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 hover:border-blue-300 group"
                  role="img"
                  aria-label={brand.alt}
                >
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to brand name if SVG fails to load
                      e.target.style.display = "none";
                      const fallbackDiv = document.createElement("div");
                      fallbackDiv.className =
                        "text-lg font-bold text-gray-700 text-center";
                      fallbackDiv.textContent = brand.name;
                      e.target.parentNode.appendChild(fallbackDiv);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 lg:p-12 rounded-2xl shadow-lg">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Genuine Parts Guarantee
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We use only OEM and manufacturer-approved parts to ensure your
                  appliances run like new.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Quality Assured
                </h4>
                <p className="text-gray-600 text-sm">Satisfaction Guaranteed</p>
              </div>

              <div className="text-center lg:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Don&apos;t See Your Brand?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We service many more brands not listed here. Contact us for
                  any appliance repair needs.
                </p>
                <a
                  href="tel:+918878804847"
                  aria-label="Contact us for appliance repair needs"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <motion.div 
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">7+</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">
              Years Experience
            </div>
            <p className="text-gray-600 text-sm">
              Servicing all major TV brands
            </p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-green-600 mb-2">
              10,000+
            </div>
            <div className="text-lg font-semibold text-gray-800 mb-2">
              Happy Customers
            </div>
            <p className="text-gray-600 text-sm">
              Trusted by thousands in Bhopal
            </p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-4xl font-bold text-orange-600 mb-2">Fair</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">
              Transparent Pricing
            </div>
            <p className="text-gray-600 text-sm">
              No hidden costs or fees
            </p>
          </motion.div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes marquee-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee-smooth {
          animation: marquee-smooth 35s linear infinite;
          width: fit-content;
        }

        .animate-marquee-smooth:hover {
          animation-play-state: paused;
        }

        /* Responsive animation speeds */
        @media (max-width: 1024px) {
          .animate-marquee-smooth {
            animation-duration: 35s;
          }
        }

        @media (max-width: 768px) {
          .animate-marquee-smooth {
            animation-duration: 30s;
          }
        }

        @media (max-width: 480px) {
          .animate-marquee-smooth {
            animation-duration: 25s;
          }
        }

        /* Smooth transitions for better UX */
        .animate-marquee-smooth > div {
          transition: all 0.3s ease;
        }

        /* Logo hover effects - removed grayscale filter for full color display */
        .group:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Brands;
