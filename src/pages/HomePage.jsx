import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
// CHANGED: Imported all the components for the main page.
import About from '../components/About';
import Services from '../components/Services';
import Brands from '../components/Brands';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Xpert Home Appliance Repair Bhopal | Same-Day Service & Free Quote</title>
        <meta name="description" content="Top-rated home appliance repair in Bhopal. Xpert Repair offers same-day service for TV, AC, fridge, and washing machines. 7+ years experience. Call (887)-880-4847 for a free quote!" />
        <meta name="keywords" content="home appliance repair bhopal, same day appliance repair bhopal, tv repair bhopal, ac repair bhopal, refrigerator repair bhopal, washing machine repair bhopal, expert appliance service, Led tv repair bhopal, fridge repair bhopal, Microwave repair bhopal, Ac repair service bhopal, geyser repair bhopal, bhopal best service, refrigerator repair technician, geyser repair service technician" />
        <link rel="canonical" href="https://bhopalrepair.in/" />
        <meta property="og:title" content="Xpert Home Appliance Repair Bhopal | Same-Day Service" />
        
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#2d89ef" />

        <meta property="og:description" content="Need fast appliance repair in Bhopal? Xpert Repair provides professional, same-day service for all major brands. Licensed technicians available. Call (887)-880-4847 now!" />
        <meta property="og:url" content="https://bhopalrepair.in/" />
        <meta property="og:image" content="https://bhopalrepair.in/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Xpert Home Appliance Repair",
            "image": "https://bhopalrepair.in/logo.png",
            "@id": "https://bhopalrepair.in/",
            "url": "https://bhopalrepair.in/",
            "telephone": "+918878804847",
            "email": "bhopalrepair2025@gmail.com",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bhopal",
              "addressRegion": "MP",
              "addressCountry": "IN"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>
      </Helmet>
      {/* CHANGED: Added all components to render them on the homepage. */}
      <Hero />
      <About />
      <Services />
      <Brands />
      <Contact />
    </>
  );
};

export default HomePage;