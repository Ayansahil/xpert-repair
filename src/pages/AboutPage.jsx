import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../components/About';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Xpert Repair - 15+ Years Professional Appliance Repair Experience</title>
        <meta name="description" content="Learn about Xpert Repair's 15+ years of professional appliance repair experience. Licensed & insured technicians, 10,000+ satisfied customers, 90-day warranty on all repairs." />
        <meta name="keywords" content="about xpert repair, professional appliance repair company, licensed appliance technicians, appliance repair experience, trusted appliance service" />
        <link rel="canonical" href="https://xpertrepair.com/about" />
        <meta property="og:title" content="About Xpert Repair - 15+ Years Professional Appliance Repair Experience" />
        <meta property="og:description" content="Trusted appliance repair company with 15+ years experience, licensed technicians, and 10,000+ satisfied customers." />
        <meta property="og:url" content="https://xpertrepair.com/about" />
      </Helmet>
      <About />
    </>
  );
};

export default AboutPage;