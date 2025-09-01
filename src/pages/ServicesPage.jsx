import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Appliance Repair Services in Bhopal | TV, AC, Fridge | Xpert Repair</title>
        <meta name="description" content="Xpert Repair offers expert appliance repair services in Bhopal. We fix Refrigerators, ACs, Washing Machines, LED TVs, and more. Same-day service available. Call (887) 880-4847." />
        <meta name="keywords" content="appliance repair services bhopal, refrigerator repair service bhopal, washing machine repair bhopal, ac repair service bhopal, led tv repair bhopal, microwave repair bhopal, geyser repair bhopal, fridge repair bhopal, ro water purifier service, bhopal best service, washing machine near me technician, LED TV repair technician, geyser repair service technician, refrigerator repair technician, refrigerator compressor repair technician, LED TV display repair, LED TV motherboard repair in bhopal" />
        <link rel="canonical" href="https://xpertrepair.com/services" />
        <meta property="og:title" content="Expert Appliance Repair Services in Bhopal | Xpert Repair" />
        <meta property="og:description" content="From refrigerators to air conditioners, our certified technicians in Bhopal provide fast and reliable repair services for all your home appliances. 90-day warranty on all jobs." />
        <meta property="og:url" content="https://xpertrepair.com/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Appliance Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Xpert Home Appliance Repair",
              "telephone": "+918878804847",
              "email": "bhopalrepair2025@gmail.com",
              "address": { "@type": "PostalAddress", "addressLocality": "Bhopal", "addressRegion": "MP", "addressCountry": "IN" }
            },
            "areaServed": { "@type": "City", "name": "Bhopal" },
            "description": "Same-day repair services for a wide range of home appliances including refrigerators, washing machines, air conditioners, and LED TVs."
          })}
        </script>
      </Helmet>
      <Services />
    </>
  );
};

export default ServicesPage;