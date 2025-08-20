import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Appliance Repair Services - Refrigerator, AC, Washing Machine & More | Expert Repair</title>
        <meta name="description" content="Complete appliance repair services: Refrigerator, RO Water Purifier, Washing Machine, Air Conditioner, LED TV, Dishwasher, Microwave repair. Same-day service, fair pricing, 90-day warranty." />
        <meta name="keywords" content="appliance repair services, refrigerator repair service, washing machine repair, AC repair service, TV repair, dishwasher repair, microwave repair, RO water purifier service" />
        <link rel="canonical" href="https://expertrepair.com/services" />
        <meta property="og:title" content="Professional Appliance Repair Services - Expert Repair" />
        <meta property="og:description" content="Complete appliance repair services with same-day availability. Licensed technicians, fair pricing, 90-day warranty on all repairs." />
        <meta property="og:url" content="https://expertrepair.com/services" />
      </Helmet>
      <Services />
    </>
  );
};

export default ServicesPage;