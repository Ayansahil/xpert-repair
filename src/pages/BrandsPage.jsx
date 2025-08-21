import React from 'react';
import { Helmet } from 'react-helmet-async';
import Brands from '../components/Brands';

const BrandsPage = () => {
  return (
    <>
      <Helmet>
        <title>Appliance Brands We Repair - Samsung, LG, Whirlpool, Bosch & More | Xpert Repair</title>
        <meta name="description" content="We repair all major appliance brands: Samsung, LG, TCL, Mi, Whirlpool, Bosch, Godrej, Haier, Panasonic, Sony. Genuine parts, certified technicians, 90-day warranty." />
        <meta name="keywords" content="Samsung appliance repair, LG appliance repair, Whirlpool repair, Bosch appliance service, appliance brands repair, genuine parts appliance repair" />
        <link rel="canonical" href="https://xpertrepair.com/brands" />
        <meta property="og:title" content="Major Appliance Brands We Repair - Xpert Repair" />
        <meta property="og:description" content="Professional repair services for all major appliance brands with genuine parts and certified technicians." />
        <meta property="og:url" content="https://xpertrepair.com/brands" />
      </Helmet>
      <Brands />
    </>
  );
};

export default BrandsPage;