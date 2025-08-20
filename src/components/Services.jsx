import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Refrigerator Repair',
      description: 'Complete refrigerator and freezer repair services including cooling issues, ice maker problems, and compressor replacement.',
      image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Professional refrigerator repair service - Expert Repair technician fixing modern stainless steel refrigerator cooling issues',
      features: ['Cooling Problems', 'Ice Maker Issues', 'Compressor Repair', 'Seal Replacement'],
      pricing: 'Starting from $89'
    },
    {
      id: 2,
      name: 'RO Water Purifier',
      description: 'Professional RO water purifier maintenance, filter replacement, and system optimization for clean, safe drinking water.',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'RO water purifier repair and maintenance service - Expert technician replacing filters for clean drinking water',
      features: ['Filter Replacement', 'System Cleaning', 'Membrane Repair', 'Installation'],
      pricing: 'Starting from $49'
    },
    {
      id: 3,
      name: 'Washing Machine',
      description: 'Expert washing machine repair for all types including front-load, top-load, and washer-dryer combination units.',
      image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Washing machine repair service - Professional technician fixing front-load washing machine drum and motor issues',
      features: ['Drum Issues', 'Water Problems', 'Motor Repair', 'Control Panel'],
      pricing: 'Starting from $79'
    },
    {
      id: 4,
      name: 'Air Conditioner',
      description: 'Complete AC repair and maintenance services including cooling problems, refrigerant refills, and system cleaning.',
      image: 'https://images.pexels.com/photos/1963013/pexels-photo-1963013.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Air conditioner repair service - Expert technician servicing wall-mounted AC unit for cooling problems and gas refill',
      features: ['Cooling Issues', 'Gas Refill', 'Coil Cleaning', 'Installation'],
      pricing: 'Starting from $99'
    },
    {
      id: 5,
      name: 'LED TV Repair',
      description: 'Professional LED, OLED, and Smart TV repair services for screen issues, audio problems, and connectivity solutions.',
      image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'LED TV repair service - Professional technician fixing smart TV screen issues and audio problems',
      features: ['Screen Repair', 'Audio Issues', 'Smart TV Setup', 'Port Problems'],
      pricing: 'Starting from $69'
    },
    {
      id: 6,
      name: 'Dishwasher',
      description: 'Complete dishwasher repair and maintenance including cleaning cycles, drainage issues, and control problems.',
      image: 'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Dishwasher repair service - Expert technician fixing built-in dishwasher drainage and cleaning cycle problems',
      features: ['Cleaning Issues', 'Drainage Problems', 'Pump Repair', 'Installation'],
      pricing: 'Starting from $89'
    },
    {
      id: 7,
      name: 'Microwave Oven',
      description: 'Expert microwave repair services including heating problems, turntable issues, and control panel malfunctions.',
      image: 'https://images.pexels.com/photos/4686822/pexels-photo-4686822.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Microwave oven repair service - Professional technician fixing countertop microwave heating and turntable issues',
      features: ['Heating Problems', 'Turntable Issues', 'Door Problems', 'Control Repair'],
      pricing: 'Starting from $59'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Wrench className="h-4 w-4 mr-2" />
            Our Services
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Complete Appliance
            <span className="text-blue-600 block">Repair Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From refrigerators to washing machines, our expert technicians repair all major 
            home appliances with precision and care. Same-day service available!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              {/* Service Header */}
              <div className="p-8 pb-6">
                <div className="w-full h-48 bg-gray-100 rounded-2xl mb-6 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <img 
                    src={service.image} 
                    alt={service.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Footer */}
              <div className="px-8 pb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-blue-600">
                    {service.pricing}
                  </div>
                  <div className="text-sm text-gray-500">
                    + parts & labor
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Don&apos;t see your appliance listed?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We repair all major home appliances from leading brands. Contact us today 
              for a free diagnostic and personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Request Service
              </Link>
              <a
                href="tel:+1234567890"
                aria-label="Call Expert Repair at (123) 456-7890 for immediate appliance repair service"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors duration-200"
              >
                Call (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;