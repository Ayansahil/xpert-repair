import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../components/About';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Xpert Home Appliance Repair Bhopal | Our Story & Mission</title>
        <meta name="description" content="Learn about Xpert Home Appliance Repair, Bhopal's trusted choice for appliance service. With 7+ years of experience, 10,000+ satisfied customers, and a 90-day warranty, we are committed to quality. Call (887) 880-4847." />
        <meta name="keywords" content="about xpert repair, appliance repair company bhopal, licensed appliance technicians, appliance repair experience, trusted appliance service bhopal, our mission, Washing machine repair bhopal, Led tv repair bhopal, fridge repair bhopal, Microwave repair bhopal, Ac repair service bhopal, geyser repair bhopal" />
        <link rel="canonical" href="https://xpertrepair.com/about" />
        <meta property="og:title" content="About Xpert Home Appliance Repair | Bhopal's Trusted Technicians" />
        <meta property="og:description" content="Discover the story behind Xpert Home Appliance Repair. We're a Bhopal-based team dedicated to providing reliable, expert appliance repair with 7+ years of experience." />
        <meta property="og:url" content="https://xpertrepair.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Xpert Home Appliance Repair",
            "url": "https://xpertrepair.com",
            "logo": "https://xpertrepair.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+918878804847",
              "email": "bhopalrepair2025@gmail.com",
              "contactType": "Customer Service"
            },
            "address": { "@type": "PostalAddress", "addressLocality": "Bhopal", "addressRegion": "MP", "addressCountry": "IN" },
            "description": "Xpert Home Appliance Repair provides professional, same-day repair services for all major home appliances in Bhopal. With over 7 years of experience, we guarantee quality work with a 90-day warranty."
          })}
        </script>
      </Helmet>
      <About />
    </>
  );
};

export default AboutPage;