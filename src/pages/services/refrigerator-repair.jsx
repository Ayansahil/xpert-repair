import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const RefrigeratorRepair = () => {

  return (
    <>
      <Helmet>
        <title>Refrigerator Repair Bhopal | Fridge Service & Gas Filling | Xpert Repair</title>
        <meta name="description" content="Expert refrigerator & fridge repair in Bhopal. We service single door, double door & all brands like LG, Samsung, Whirlpool. For cooling issues & gas filling, call: (887)-880-4847." />
        <meta name="keywords" content="refrigerator repair bhopal, fridge repair bhopal, refrigerator repair technician, refrigerator compressor repair technician, lg fridge repair bhopal, samsung fridge service, whirlpool refrigerator service, fridge gas filling bhopal, double door fridge repair" />
        <link rel="canonical" href="https://bhopalrepair.in/services/refrigerator-repair" />
        <meta property="og:title" content="Refrigerator Repair Service in Bhopal | Xpert Repair" /> 
        <meta property="og:description" content="Fast & affordable fridge repair, installation, and gas refilling in Bhopal. We service all brands." />
        <meta property="og:url" content="https://bhopalrepair.in/services/refrigerator-repair" />
        <meta property="og:image" content="https://bhopalrepair.in/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Refrigerator Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Xpert Home Appliance Repair"
            },
            "areaServed": { "@type": "City", "name": "Bhopal" },
            "description": "Professional refrigerator and fridge repair service in Bhopal for all brands and models, including compressor repair and gas refilling."
          })}
        </script>
      </Helmet>
      <motion.div
        id="refrigerator-repair-page"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      {/* Main Header Image */}
      <div className="mb-8">
        <img
          src="/images/services/image4.jpg"
          alt="Expert Refrigerator and Fridge Repair in Bhopal"
          className="w-375 h-250 object-cover "
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#072C42] mb-6 text-center">
        Refrigerator Repair, Installation & Maintenance in Bhopal
      </h1>

      {/* Introduction Paragraph */}
      <p className="text-xl text-[#939393] mb-6 leading-relaxed">
        Is your fridge not working? Our dedicated team of engineers is ready to help from  <strong className="text-blue-500 font-semibold">8 AM to 9 PM, 7 days a week. </strong>We provide service across all of Bhopal—just give us a call, and we&apos;ll be at your doorstep.
      </p>

      <p className="text-lg text-[#939393] mb-6 leading-relaxed">
        If you&apos;re searching for the most affordable refrigerator repair service in Bhopal, Xpert Repair is your best option. We provide repair, installation, and maintenance for all models, including single-door, double-door, side-by-side, and commercial fridges.
      </p>

      <p className="text-lg text-[#939393] mb-6 leading-relaxed">
        We make refrigerator repair easier by connecting you with the best local fridge technicians in the business. We have expert mechanics for every brand and model, including LG, Samsung, Whirlpool, Godrej, Haier, Bosch, and Kelvinator.
      </p>

      {/* Our Services Section */}
      <h2 className="text-2xl font-extrabold text-[#072C42] mb-4 border-b-2 border-blue-500 pb-2">
        Our Refrigerator Repair Services
      </h2>

      <ul className="list-disc list-inside text-lg text-[#939393] mb-6 space-y-3">
        <li>Refrigerator Repair Service</li>
        <li>Refrigerator Installation and Setup</li>
        <li>Refrigerator Servicing & Maintenance</li>
        <li>Fridge Gas Refilling Services</li>
        <li>Domestic Refrigerator AMC Services</li>
        <li>Commercial Refrigerator AMC Services</li>
      </ul>

      {/* Types of Refrigerators Section */}
      <h2 className="text-2xl font-extrabold text-[#072C42] mb-4 border-b-2 border-purple-500 pb-2">
        <strong className=" text-[#072C42]">We repair all types of Refrigerators</strong>
      </h2>
      <p className="text-lg text-[#939393] mb-4 leading-relaxed">
        Whether you have a frost-free refrigerator, a direct cool model, or a French door fridge, we can help. We repair all types of refrigerators, including those listed below.
      </p>
      <ul className="list-disc list-inside text-lg text-[#939393] mb-6 space-y-3">
        <li>Single Door Refrigerator Repair</li>
        <li>Double Door Refrigerator Repair</li>
        <li>Multi Door & Side-by-Side Refrigerator Repair</li>
        <li>Deep Freezer (Chest Freezers) Repair</li>
        <li>Commercial Fridge & Freezer Repair</li>
      </ul>

      {/* Common Problems Section */}
      <h2 className="text-2xl font-extrabold text-[#072C42] mb-4 border-b-2 border-red-500 pb-2">
        Common Fridge Problems We Fix
      </h2>

      <p className="text-lg text-[#939393] mb-4 leading-relaxed">
        If your fridge is making strange noises, not cooling properly, or leaking water, it&apos;s time to call Xpert Repair for a quick and reliable solution.
      </p>

      <ul className="list-disc list-inside text-lg text-[#939393] mb-6 space-y-4">
        <li className="text-[#747474]"><strong>Refrigerator Not Starting:</strong> Issues related to power supply or the compressor.</li>
        <li className="text-[#747474]"><strong>Not Cooling Properly:</strong> The fridge is running but not cooling, or cooling is insufficient.</li>
        <li className="text-[#747474]"><strong>Strange Noises:</strong> Rattling, buzzing, or gurgling sounds from the unit.</li>
        <li className="text-[#747474]"><strong>Excessive Frost Buildup:</strong> Too much frost forming in the freezer compartment.</li>
        <li className="text-[#747474]"><strong>Water Leakage:</strong> Water leaking inside or outside the refrigerator.</li>
        <li className="text-[#747474]"><strong>Other Issues:</strong> Bad odor, interior light not working, or faulty door seals.</li>
      </ul>

      {/* Why Choose Us Section */}
      <h2 className="text-2xl font-extrabold text-[#072C42] mb-4 border-b-2 border-green-500 pb-2">
        Why Choose Xpert Repair?
      </h2>

      <ul className="list-disc list-inside text-lg text-[#939393] mb-6 space-y-4">
        <li className="text-[#747474]">All Brands Repaired: We service LG, Samsung, Whirlpool, Godrej, and all other major brands.</li>
        <li className="text-[#747474]">Same-Day Service: Quick diagnosis and repair, often within a few hours.</li>
        <li className="text-[#747474]">Genuine Parts: We use only original manufacturer parts for long-lasting repairs.</li>
        <li className="text-[#747474]">Certified Technicians: Our professionals are experienced and company-trained.</li>
        <li className="text-[#747474]">Affordable & Transparent Pricing: No hidden charges, with clear estimates provided upfront.</li>
      </ul>

      {/* Contact Information */}
      <div className="p-6 rounded-lg border border-gray-200 bg-blue-50">
        <h3 className="text-2xl font-extrabold text-[#072C42] mb-3">
          Book Your Fridge Repair Today!
        </h3>
        <p className="text-[#939393] mb-3">
          Don&apos;t let a faulty fridge spoil your groceries. Contact Xpert Repair for immediate, professional assistance.
        </p>
        <p className="text-lg">
          <span className="text-[#072C42] font-bold">For Fast Service, Call: </span>
          <a href="tel:+918878804847" className="text-blue-600 font-bold hover:underline">(887)-880-4847</a>
        </p>
        <p className="text-sm text-[#939393] mt-2">
          <span className="text-[#072C42] font-extrabold">Service Hours:</span> Monday to Sunday, 8:00 AM - 9:00 PM
        </p>
      </div>

      {/* SEO Keywords Integration */}
      <div className="mt-8 text-xs text-gray-400">
        <p className="sr-only">
          refrigerator repair bhopal, fridge repair bhopal, lg fridge repair bhopal, samsung fridge service, whirlpool refrigerator service, fridge gas filling bhopal, double door fridge repair, refrigerator service near me, +918878804847, Xpert Repair Bhopal, fridge compressor repair.
        </p>
      </div>
      </motion.div>
    </>
  );
};

export default RefrigeratorRepair;