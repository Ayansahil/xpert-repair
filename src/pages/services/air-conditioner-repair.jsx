import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const AirConditionerRepair = () => {

  return (
    <>
      <Helmet>
        <title>AC Repair & Service in Bhopal | Window & Split AC | Xpert Repair</title>
        <meta name="description" content="Expert AC repair, installation, and service in Bhopal for window & split ACs. We fix cooling issues, gas leaks & more. Same-day service. Call Xpert Repair: +918878804847." />
        <link rel="canonical" href="https://bhopalrepair.in/services/air-conditioner-repair" />
        <meta property="og:title" content="AC Repair & Service in Bhopal | Xpert Repair" />
        <meta property="og:description" content="Fast, affordable AC repair, installation, and gas refilling in Bhopal. We service all brands." />
        <meta property="og:url" content="https://bhopalrepair.in/services/air-conditioner-repair" />
        <meta property="og:image" content="https://bhopalrepair.in/og-image.jpg" />
      </Helmet>
      <motion.div
        id="ac-repair-page"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      {/* Main Header Image */}
      <div className="mb-8">
        <img
          src="/images/services/image3.jpg"
          alt="Expert AC Repair and Service in Bhopal"
          className="w-375 h-250 object-cover "
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#072C42] mb-6 text-center">
        AC Repair, Installation, and Maintenance Services in Bhopal
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-xl text-[#939393] mb-6 leading-relaxed">
        Is your AC failing to beat the heat? Our dedicated team of service engineers is here to help. We operate from <strong className="text-blue-500 font-semibold">8am to 9pm, 7 days a week</strong> , providing prompt and reliable AC services right at your doorstep anywhere in Bhopal. Just one call and our expert technicians will be on their way.
      </p>

      <p className="text-lg text-[#939393] mb-6 leading-relaxed">
        Xpert Repair is your one-stop solution for all air conditioner needs in Bhopal. We provide expert repair, installation, and maintenance for all types of ACs, including window, split, and commercial units. We connect you with the best local AC mechanics who specialize in every brand and model, ensuring a quick and efficient fix every time.
      </p>

      <p className="text-lg text-[#939393] mb-6 leading-relaxed">
        We are your best choice for any AC repair in Bhopal, no matter the brand. Our technicians are trained to service all major manufacturers, including: LG, Samsung, Whirlpool, Videocon, Godrej, Daikin, Carrier, Blue Star, Lloyd, Haier, Panasonic, Hitachi, and more!
      </p>

      {/* Our Services Section */}
      <h2 className="text-2xl font-extrabold text-[#072C42] mb-4 border-b-2 border-blue-500 pb-2">
        Our Comprehensive AC Services
      </h2>

      <ul className="list-disc list-inside text-lg text-[#939393] mb-6 space-y-3">
        <li>Air Conditioner Repair Service</li>
        <li>AC Installation and Setup Service</li>
        <li>AC Uninstallation and Shifting</li>
        <li>Preventive Maintenance & Servicing</li>
        <li>AC Copper Piping Services</li>
        <li>AC Gas Refilling and Leak Fixing</li>
        <li>Annual Maintenance Contracts (AMC)</li>
      </ul>

      {/* Types of ACs Section */}
      <h2 className="text-2xl font-extrabold text-[#072C42] mb-4 border-b-2 border-purple-500 pb-2">
        We Repair All Types of Air Conditioners
      </h2>
      <p className="text-lg text-[#939393] mb-4 leading-relaxed">
        Whether you need a window AC repaired, a new split AC installed, or your central air system serviced, we have you covered. Our team is equipped to handle all AC systems.
      </p>
      <ul className="list-disc list-inside text-lg text-[#939393] mb-6 space-y-3">
        <li>Window Air Conditioner (AC) Repair</li>
        <li>Split Air Conditioner (AC) Repair</li>
        <li>Central Air Conditioning Unit Repair</li>
        <li>Packaged and Portable AC Repair</li>
      </ul>

      {/* Common AC Problems Section */}
      <h2 className="text-2xl font-extrabold text-[#072C42] mb-4 border-b-2 border-red-500 pb-2">
        Common AC Problems We Solve
      </h2>

      <p className="text-lg text-[#939393] mb-4 leading-relaxed">
        If your AC isn&apos;t working as it should, don&apos;t sweat it. Our experts can quickly diagnose and fix most common issues to restore your comfort.
      </p>

      <ul className="list-disc list-inside text-lg text-[#939393] mb-6 space-y-4">
        <li className="text-[#747474]"><strong>No Power:</strong> The AC unit is completely dead and won&apos;t start.</li>
        <li className="text-[#747474]"><strong>Insufficient Cooling:</strong> The AC is running but the room isn&apos;t getting cold.</li>
        <li className="text-[#747474]"><strong>Strange Noises:</strong> Grinding, squealing, or rattling sounds from the unit.</li>
        <li className="text-[#747474]"><strong>Water Leakage:</strong> Water dripping from the indoor or outdoor unit.</li>
        <li className="text-[#747474]"><strong>Gas Leak / Refrigerant Issues:</strong> Low cooling performance due to refrigerant leaks.</li>
        <li className="text-[#747474]"><strong>Bad Odor:</strong> Foul smells coming from the AC vents.</li>
      </ul>

      {/* Why Choose Us Section */}
      <h2 className="text-2xl font-extrabold text-[#072C42] mb-4 border-b-2 border-green-500 pb-2">
        Why Choose Xpert Repair for AC Service in Bhopal?
      </h2>

      <p className="text-lg text-[#939393] mb-4 leading-relaxed">
        We are the leading professional technician service provider in Bhopal, offering unmatched expertise in air conditioner repairs.
      </p>

      <ul className="list-disc list-inside text-lg text-[#939393] mb-6 space-y-4">
        <li className="text-[#747474]">All AC Types Serviced: Expertise in Window, Split, and Central AC units.</li>
        <li className="text-[#747474]">Same-Day Service: Quick diagnosis and repair, often within hours.</li>
        <li className="text-[#747474]">Genuine Parts Only: We use original manufacturer parts for reliability.</li>
        <li className="text-[#747474]">Certified Technicians: Factory-trained and experienced professionals.</li>
        <li className="text-[#747474]">Affordable & Transparent Pricing: No hidden costs, clear estimates upfront.</li>
      </ul>

      {/* Contact Information */}
      <div className="p-6 rounded-lg border border-gray-200 bg-blue-50">
        <h3 className="text-2xl font-extrabold text-[#072C42] mb-3">
          Book Your AC Service Today!
        </h3>
        <p className="text-[#939393] mb-3">
          Don&apos;t let a faulty AC ruin your day. Contact Xpert Repair for immediate, professional assistance.
        </p>
        <p className="text-lg">
          <span className="text-[#072C42] font-bold">Call Now for Fast Service: </span>
          <a href="tel:+918878804847" className="text-blue-600 font-bold hover:underline">+91-887-880-4847</a>
        </p>
        <p className="text-sm text-[#939393] mt-2">
          <span className="text-[#072C42] font-extrabold">Service Hours:</span> Monday to Sunday, 8:00 AM - 9:00 PM
        </p>
      </div>

      {/* SEO Keywords Integration */}
      <div className="mt-8 text-xs text-gray-400">
        {/* Hidden SEO content for better indexing */}
        <p className="sr-only">
          AC repair Bhopal, split AC service Bhopal, window AC installation Bhopal, AC gas filling Bhopal, air conditioner service near me, Daikin AC service, LG AC repair, Samsung AC service Bhopal, +918878804847, Xpert Repair Bhopal, AC uninstallation, AC AMC Bhopal.
        </p>
      </div>
      </motion.div>
    </>
  );
};

export default AirConditionerRepair;