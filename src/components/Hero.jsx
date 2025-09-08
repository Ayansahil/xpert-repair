import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Clock, Star, CheckCircle, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Trusted by 10,000+ Customers
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" itemProp="headline">
              Xpert Home
              <span className="text-blue-600 block">Appliance Repair</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Fast, reliable, and affordable repair services for all your home appliances. 
              <span className="font-semibold text-gray-800"> Same-day service available!</span>
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Licensed & Insured</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">24/7 Emergency</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <ShieldCheck className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-700">Quality Assured</span>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </Link>
                <a
                  href="tel:+918878804847"
                  aria-label="Call Xpert Repair at (887)-880-4847 for immediate appliance repair service"
                  className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call (887)-880-4847</span>
                </a>
            </motion.div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl" role="img" aria-label="Tools">🔧</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Certified Expert Technicians</h3>
                  <p className="text-sm text-gray-600">Certified professionals</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl" role="img" aria-label="Lightning">⚡</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Same-Day Quick Service</h3>
                  <p className="text-sm text-gray-600">Same-day repairs</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300 -mt-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl" role="img" aria-label="Money">💰</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Transparent Fair Pricing</h3>
                  <p className="text-sm text-gray-600">No hidden fees</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl" role="img" aria-label="Wrench">⚙️</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Genuine Parts</h3>
                  <p className="text-sm text-gray-600">Only OEM parts used</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
