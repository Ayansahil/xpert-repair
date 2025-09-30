import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load components that are likely below the fold
const About = lazy(() => import('../components/About'));
const Services = lazy(() => import('../components/Services'));
const Brands = lazy(() => import('../components/Brands'));
const Contact = lazy(() => import('../components/Contact'));

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Xpert Home Appliance Repair Bhopal | Same-Day Service & Free Quote</title>
        <meta name="description" content="Top-rated home appliance repair in Bhopal. Xpert Repair offers same-day service for TV, AC, fridge, and washing machines. 7+ years experience. Call +918878804847 for a free quote!" />
        <meta name="keywords" content="home appliance repair bhopal near me, same day appliance repair bhopal near me, tv repair bhopal near me, ac repair bhopal near me, refrigerator repair bhopal near me, washing machine repair bhopal near me, expert appliance service, Led tv repair bhopal near me, fridge repair bhopal near me, Microwave repair bhopal near me, Ac repair service bhopal near me, geyser repair bhopal near me, bhopal best service near me, refrigerator repair technician near me, geyser repair service technician near bhopal" />
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

        <meta property="og:description" content="Need fast appliance repair in Bhopal? Xpert Repair provides professional, same-day service for all major brands. Licensed technicians available. Call +918878804847 now!" />
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
            ,
            "areaServed": {
              "@type": "City",
              "name": "Bhopal"
            },
            "description": "Xpert Home Appliance Repair offers same-day repair services in Bhopal for TV, AC, fridge, washing machines, and more. Licensed technicians and free quotes available."
          })}
        </script>
      </Helmet>
      {/* CHANGED: Added all components to render them on the homepage. */}
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
        <Services />
        <Brands />
        <Contact />
      </Suspense>
    </>
  );
};

export default HomePage;