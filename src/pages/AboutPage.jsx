import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../components/About';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Xpert Home Appliance Repair Bhopal | Our Story & Mission</title>
        <meta name="description" content="Learn about Xpert Home Appliance Repair, Bhopal's trusted choice for appliance service. With 7+ years of experience and 10,000+ satisfied customers, we are committed to quality. Call (887)-880-4847." />
        <meta name="keywords" content="about xpert repair, appliance repair company bhopal near me, licensed appliance technicians, appliance repair experience near me, trusted appliance service bhopal near me, our mission, Washing machine repair bhopal near me, Led tv repair bhopal near me, fridge repair bhopal near me, Microwave repair bhopal near me, Ac repair service bhopal near me, geyser repair bhopal near me, bhopal best service near me, refrigerator repair technician near me, geyser repair service technician near bhopal" />
        <link rel="canonical" href="https://bhopalrepair.in/about/" />
        <meta property="og:title" content="About Xpert Home Appliance Repair | Bhopal's Trusted Technicians" />
        <meta property="og:description" content="Discover the story behind Xpert Home Appliance Repair. We're a Bhopal-based team dedicated to providing reliable, expert appliance repair with 7+ years of experience." />
        <meta property="og:url" content="https://bhopalrepair.in/about/" />
        <meta property="og:image" content="https://bhopalrepair.in/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Xpert Home Appliance Repair",
            "url": "https://bhopalrepair.in",
            "logo": "https://bhopalrepair.in/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+918878804847",
              "email": "bhopalrepair2025@gmail.com",
              "contactType": "Customer Service"
            },
            "address": { "@type": "PostalAddress", "addressLocality": "Bhopal", "addressRegion": "MP", "addressCountry": "IN" },
            "description": "Xpert Home Appliance Repair provides professional, same-day repair services for all major home appliances in Bhopal. With over 7 years of experience, we guarantee quality work."
          })}
        </script>
      </Helmet>
      <About />
    </>
  );
};

export default AboutPage;