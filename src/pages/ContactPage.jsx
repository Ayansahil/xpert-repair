import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Xpert Repair - Get Free Quote | Call (123) 456-7890 | Same-Day Service</title>
        <meta name="description" content="Contact Xpert Repair for free appliance repair quote. Call (123) 456-7890, WhatsApp, or email. Same-day service available. Licensed technicians, 90-day warranty." />
        <meta name="keywords" content="contact appliance repair, free appliance repair quote, appliance repair phone number, same day appliance service, emergency appliance repair" />
        <link rel="canonical" href="https://xpertrepair.com/contact" />
        <meta property="og:title" content="Contact Xpert Repair - Free Quote & Same-Day Service" />
        <meta property="og:description" content="Get your free appliance repair quote today. Multiple contact options available with same-day service." />
        <meta property="og:url" content="https://xpertrepair.com/contact" />
      </Helmet>
      <Contact />
    </>
  );
};

export default ContactPage;