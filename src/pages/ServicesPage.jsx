import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Appliance Repair Services in Bhopal | TV, AC, Fridge | Xpert Repair</title>
        <meta name="description" content="Xpert Repair offers expert appliance repair services in Bhopal. We fix Refrigerators, ACs, Washing Machines, LED TVs, and more. Same-day service available. Call +918878804847." />
        <meta name="keywords" content="appliance repair services bhopal near me, refrigerator repair service bhopal near me, washing machine repair bhopal near me, ac repair service bhopal near me, led tv repair bhopal near me, microwave repair bhopal near me, geyser repair bhopal near me, fridge repair bhopal near me, ro water purifier service near me, bhopal best service near me, washing machine near me technician" />
        <link rel="canonical" href="https://bhopalrepair.in/services/" />
        <meta property="og:title" content="Expert Appliance Repair Services in Bhopal | Xpert Repair" />
        <meta property="og:description" content="From refrigerators to air conditioners, our certified technicians in Bhopal provide fast and reliable repair services for all your home appliances." />
        <meta property="og:url" content="https://bhopalrepair.in/services/" />
        <meta property="og:image" content="https://bhopalrepair.in/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Appliance Repair",
            "url": "https://bhopalrepair.in/services/",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Xpert Home Appliance Repair",
              "@id": "https://bhopalrepair.in/",
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