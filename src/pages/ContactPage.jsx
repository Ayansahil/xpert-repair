import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Xpert Repair in Bhopal - Get a Free Quote | Call (887) 880-4847</title>
        <meta name="description" content="Contact Xpert Repair in Bhopal for a free appliance repair quote. Call (887) 880-4847, WhatsApp, or email us. We offer same-day service with a 90-day warranty." />
        <meta name="keywords" content="contact appliance repair bhopal, free appliance repair quote, appliance repair phone number bhopal, same day appliance service, emergency appliance repair bhopal" />
        <link rel="canonical" href="https://xpertrepair.com/contact" />
        <meta property="og:title" content="Contact Xpert Repair Bhopal | Free Quote & Same-Day Service" />
        <meta property="og:description" content="Ready for your free appliance repair quote? Contact our Bhopal team today via phone, WhatsApp, or email for fast, reliable service." />
        <meta property="og:url" content="https://xpertrepair.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://xpertrepair.com/contact",
            "name": "Contact Xpert Home Appliance Repair Bhopal",
            "description": "Get in touch with Xpert Home Appliance Repair in Bhopal for a free quote on our repair services. We are available 24/7 for emergency repairs.",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://xpertrepair.com/contact" }
          })}
        </script>
      </Helmet>
      <Contact />
    </>
  );
};

export default ContactPage;