import React from 'react';
import { Helmet } from 'react-helmet-async';
import Brands from '../components/Brands';

const BrandsPage = () => {
  return (
    <>
      <Helmet>
        <title>Brands We Service in Bhopal | Samsung, LG, Sony Repair | Xpert Repair</title>
        <meta name="description" content="Xpert Repair in Bhopal services all major appliance brands including Samsung, LG, Sony, Whirlpool, Bosch, and more. We use genuine parts for all repairs. Call (887) 880-4847." />
        <meta name="keywords" content="samsung repair bhopal, lg repair bhopal, sony tv repair bhopal, whirlpool repair bhopal, bosch service bhopal, appliance brands repair, genuine parts appliance repair" />
        <link rel="canonical" href="https://bhopalrepair.in/brands" />
        <meta property="og:title" content="All Major Appliance Brands Repaired in Bhopal | Xpert Repair" />
        <meta property="og:description" content="We are experts in repairing appliances from leading brands like Samsung, LG, Sony, and more in the Bhopal area. Certified technicians and quality service guaranteed." />
        <meta property="og:url" content="https://bhopalrepair.in/brands" />
        <meta property="og:image" content="https://bhopalrepair.in/og-image.jpg" />
      </Helmet>
      <Brands />
    </>
  );
};

export default BrandsPage;