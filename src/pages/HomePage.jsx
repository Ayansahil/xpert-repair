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
        <title>Xpert Repair - #1 Home Appliance Repair Services | Same-Day Service Available</title>
        <meta name="description" content="Xpert Repair - #1 Professional Home Appliance Repair Services with 15+ years experience. Same-day service, licensed technicians, 90-day warranty. Call (123) 456-7890 now!" />
        <meta name="keywords" content="home appliance repair, same day appliance repair, refrigerator repair, washing machine repair, AC repair, professional appliance service" />
        <link rel="canonical" href="https://Xpertrepair.com/" />
        <meta property="og:title" content="Xpert Repair - #1 Home Appliance Repair Services | Same-Day Service" />
        <meta property="og:description" content="Professional appliance repair services with 15+ years experience. Licensed technicians, 90-day warranty, same-day service available." />
        <meta property="og:url" content="https://Xpertrepair.com/" />
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