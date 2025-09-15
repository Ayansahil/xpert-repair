import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Monitor,
  Tv,
  Wind,
  Refrigerator,
  WashingMachine,
  Microwave,
  GlassWater,
  ShowerHead,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "LED LCD TV Repair",
      slug: "led-lcd-tv-repair",
      icon: Monitor,
      description:
        "Xpert Repair offers reliable LED LCD TV repair in Bhopal with quick solutions for screen, sound, and power issues.",
      image: "/images/services/led-lcd-tv-repair.jpg",
      alt: "LED LCD TV Repair Bhopal",
    },
    {
      id: 2,
      name: "Plasma TV Repair",
      slug: "plasma-tv-repair",
      icon: Tv,
      description:
        "Need television repair in Bhopal? Xpert Repair provides fast and affordable professional plasma TV repair services.",
      image: "/images/services/plasma-tv-repair.jpg",
      alt: "Plasma TV Repair Bhopal",
    },
    {
      id: 3,
      name: "Air Conditioner Repair",
      slug: "air-conditioner-repair",
      icon: Wind,
      description:
        "Xpert Repair delivers fast and affordable air conditioner repair services in Bhopal with professional installation.",
      image: "/images/services/air-conditioner-repair.jpg",
      alt: "Air Conditioner Repair Bhopal",
    },
    {
      id: 4,
      name: "Refrigerator Repair",
      slug: "refrigerator-repair",
      icon: Refrigerator,
      description:
        "Our refrigerator repair technician in Bhopal handles cooling problems, ice maker issues, and complex refrigerator compressor repair.",
      image: "/images/services/refrigerator-repair.jpg",
      alt: "Refrigerator compressor repair technician Bhopal",
    },
    {
      id: 5,
      name: "Washing Machine Repair",
      slug: "washing-machine-repair",
      icon: WashingMachine,
      description:
        "Get reliable washing machine repair in Bhopal from Xpert Repair for all types including front-load and top-load machines.",
      image: "/images/services/washing-machine-repair.jpg",
      alt: "Washing Machine Repair Bhopal",
    },
    {
      id: 6,
      name: "Microwave Oven Repair",
      slug: "microwave-oven-repair",
      icon: Microwave,
      description:
        "Xpert Repair offers professional microwave repair in Bhopal with quick fixes for heating problems and door malfunctions.",
      image: "/images/services/microwave-oven-repair.jpg",
      alt: "Microwave Oven Repair Bhopal",
    },
    {
      id: 7,
      name: "Ro Purifier Repair",
      slug: "ro-purifier-repair",
      icon: GlassWater,
      description:
        "Xpert Repair offers professional RO purifier repair in Bhopal with quick fixes for water leakage, filter replacement, and purification issues.",
      image: "/images/services/ro-purifier-repair.jpg",
      alt: "RO Purifier Repair Bhopal",
    },
    {
      id: 8,
      name: "Geyser Repair",
      slug: "geyser-repair",
      icon: ShowerHead,
      description:
        "Our geyser repair service technician in Bhopal provides fast solutions for heating problems, water flow issues, and installation.",
      image: "/images/services/geyser-repair.jpg",
      alt: "Geyser repair service technician Bhopal",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Repair Services in Bhopal
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Professional appliance repair services across Bhopal with certified
            technicians and same-day service available.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                // CHANGED: Added an 'id' to each service card for direct navigation from the header.
                id={service.slug}
                key={service.id}
                className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image Container - Full width with top-right rounded corner */}
                <div className="w-full h-48 rounded-tr-2xl overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Blue Icon Box */}
                  <div className="absolute top-4 left-4 bg-blue-500 p-2.5 rounded-lg shadow-md">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Content Container - Slightly narrower with bottom-left rounded corner */}
                <div className="bg-white shadow-lg rounded-bl-2xl p-6 -mt-1">
                  {/* CHANGED: Replaced anchor tag with Link to navigate to the service detail page. */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="block mb-3 hover:text-blue-600 transition-colors duration-200"
                  >
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {service.name}
                    </h3>
                  </Link>
                  <p className="text-gray-500 text-base leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
