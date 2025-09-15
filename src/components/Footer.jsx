import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Wrench,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: "Refrigerator Repair", path: "/services/refrigerator-repair/" },
    {
      name: "Washing Machine Repair",
      path: "/services/washing-machine-repair/",
    },
    {
      name: "Air Conditioner Repair",
      path: "/services/air-conditioner-repair/",
    },
    { name: "LED & LCD TV Repair", path: "/services/led-lcd-tv-repair/" },
    { name: "Microwave Oven Repair", path: "/services/microwave-oven-repair/" },
    { name: "RO Purifier Repair", path: "/services/ro-purifier-repair/" },
    { name: "Geyser Repair", path: "/services/geyser-repair/" },
    { name: "Plasma Tv Repair", path: "/services/plasma-tv-repair/" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Xpert Repair</span>
                <p className="text-gray-400 text-sm">Home Appliance Services</p>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner for all home appliance repairs in Bhopal. We
              aim to provide Bhopal&apos;s best service with fair pricing and
              guaranteed customer satisfaction.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Follow Xpert Repair on Facebook"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Follow Xpert Repair on Twitter"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Follow Xpert Repair on Instagram"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/brands/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Supported Brands
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <a
                href="tel:+918878804847"
                aria-label="Call Xpert Repair at (887)-880-4847 for 24/7 emergency appliance repair service"
                className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <Phone className="h-5 w-5 mt-1 text-blue-500" />
                <div>
                  <div className="font-medium">(887)-880-4847</div>
                  <div className="text-sm">24/7 Emergency Service</div>
                </div>
              </a>

              <a
                href="mailto:bhopalrepair2025@gmail.com"
                aria-label="Email Xpert Repair at bhopalrepair2025@gmail.com for free appliance repair quote"
                className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-5 w-5 mt-1 text-green-500" />
                <div>
                  <div className="font-medium">bhopalrepair2025@gmail.com</div>
                  <div className="text-sm">Get your free quote</div>
                </div>
              </a>

              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 mt-1 text-orange-500" />
                <div>
                  <div className="font-medium">City-wide Service</div>
                  <div className="text-sm">We come to your location</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-400">
                <Clock className="h-5 w-5 mt-1 text-purple-500" />
                <div>
                  <div className="font-medium">Mon-Fri: 8AM-8PM</div>
                  <div className="text-sm">Sat-Sun: 9AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-500 mb-1">7+</div>
              <div className="text-xs text-gray-400">Years Experience</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-500 mb-1">10K+</div>
              <div className="text-xs text-gray-400">Happy Customers</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl font-bold text-orange-500 mb-1">
                24/7
              </div>
              <div className="text-xs text-gray-400">Emergency Service</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-500 mb-1">✓</div>
              <div className="text-xs text-gray-400">Licensed & Insured</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              © {currentYear} Xpert Repair. All rights reserved. Licensed &
              Insured.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <div className="text-blue-400">
                Website by{" "}
                <span className="font-semibold">
                  Ayan Sahil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
