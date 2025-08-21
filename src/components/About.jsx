import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'Happy Customers' },
    { icon: Clock, number: '15+', label: 'Years Experience' },
    { icon: Award, number: '50+', label: 'Xpert Technicians' },
    { icon: Shield, number: '90-Day', label: 'Warranty Coverage' }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              About Xpert Repair
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted 
              <span className="text-blue-600 block">Appliance Partners</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 15 years, Xpert Repair has been the go-to choice for homeowners 
              who demand quality appliance repair services. Our team of certified technicians 
              combines extensive experience with cutting-edge diagnostic tools to deliver 
              solutions that last.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand that appliance breakdowns are more than just inconveniences—they 
              disrupt your daily routine. That&apos;s why we&apos;re committed to providing fast, 
              reliable, and affordable repairs with a 90-day warranty on all our work.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Licensed & Insured</h3>
                  <p className="text-sm text-gray-600">Fully certified professionals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">24/7 Emergency Service</h3>
                  <p className="text-sm text-gray-600">24/7 availability</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Transparent Fair Pricing</h3>
                  <p className="text-sm text-gray-600">Transparent, no hidden fees</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Genuine Quality Parts</h3>
                  <p className="text-sm text-gray-600">OEM and genuine components</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h2 className="font-semibold text-gray-800 mb-3">Our Mission</h2>
              <p className="text-gray-600">
                To provide exceptional appliance repair services that exceed customer 
                expectations while building lasting relationships based on trust, 
                reliability, and outstanding value.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
            
            {/* Testimonial Card */}
            <div className="col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl" role="img" aria-label="Star">⭐</span>
                ))}
              </div>
              <p className="text-blue-100 mb-4 leading-relaxed">
                &quot;Xpert Repair saved the day! Our refrigerator broke down on a holiday weekend, 
                and they had a technician at our door within 2 hours. Professional, 
                efficient, and reasonably priced.&quot;
              </p>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-blue-200 text-sm">Verified Customer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;