import React, { useState, useEffect } from 'react';
// CHANGED: Imported NavLink for routing and icons for a cleaner UI.
import { NavLink } from 'react-router-dom';
import { Wrench, ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // CHANGED: Re-introduced state to manage the services dropdown visibility.
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  // CHANGED: Re-introduced isScrolled state to handle navbar style changes on scroll.
  const [isScrolled, setIsScrolled] = useState(false);

  // CHANGED: This effect handles navbar style changes on scroll.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // This effect handles body scroll lock when the mobile menu is open.
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // CHANGED: Added service items for the dropdown menu.
  const serviceItems = [
    { name: 'LED LCD TV Repair', slug: 'led-lcd-tv-repair' },
    { name: 'Plasma TV Repair', slug: 'plasma-tv-repair' },
    { name: 'Air Conditioner Repair', slug: 'air-conditioner-repair' },
    { name: 'Refrigerator Repair', slug: 'refrigerator-repair' },
    { name: 'Washing Machine Repair', slug: 'washing-machine-repair' },
    { name: 'Microwave Oven Repair', slug: 'microwave-oven-repair' },
    { name: 'Geyser Repair', slug: 'geyser-repair' },
    { name: 'Ro Purifier Repair', slug: 'ro-repair' },
  ];

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    // CHANGED: Also close the services dropdown when the mobile menu is closed.
    setIsServicesOpen(false);
  };

  return (
    <>
      {/* CHANGED: Reverted to a full-width, fixed header that changes style on scroll. */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          {/* CHANGED: Restored original height for different screen sizes. */}
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-3 flex-shrink-0" aria-label="Xpert Repair Home">
              <div className="bg-gradient-to-br from-[#3B82F6] to-blue-700 p-2.5 rounded-xl shadow-lg">
                {/* CHANGED: Replaced complex SVG with a clean Wrench icon from lucide-react */}
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Xpert Repair
                </h1>
                <p className="text-xs text-gray-600 font-medium hidden sm:block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Home Appliance Services
                </p>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            {/* CHANGED: Used semantic <ul> for the navigation list. */}
            <ul className="hidden lg:flex items-center space-x-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <li>
                {/* CHANGED: Replaced <a> with <NavLink> for client-side routing and active styles. */}
                <NavLink to="/" className={({isActive}) => `font-bold transition-all duration-300 px-4 py-2 rounded-lg ${isActive ? 'bg-[#3B82F6] text-white' : 'text-gray-700 hover:bg-[#3B82F6] hover:text-white'}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({isActive}) => `font-bold transition-all duration-300 px-4 py-2 rounded-lg ${isActive ? 'bg-[#3B82F6] text-white' : 'text-gray-700 hover:bg-[#3B82F6] hover:text-white'}`}>
                  About
                </NavLink>
              </li>
              
              {/* CHANGED: Restored the services dropdown functionality. */}
              <li className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                <NavLink 
                  to="/services" 
                  className={({isActive}) => `font-bold transition-all duration-300 px-4 py-2 rounded-lg flex items-center space-x-1 ${isActive ? 'bg-[#3B82F6] text-white' : 'text-gray-700 hover:bg-[#3B82F6] hover:text-white'}`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </NavLink>

                {/* Desktop Dropdown Menu */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white shadow-lg rounded-xl border border-gray-100 transition-all duration-300 ease-in-out ${
                    isServicesOpen 
                      ? 'opacity-100 visible transform translate-y-0' 
                      : 'opacity-0 invisible transform -translate-y-2'
                  }`}
                >
                  <ul className="py-2">
                    {serviceItems.map((service) => (
                      <li key={service.slug}>
                        <NavLink
                          to={`/services/${service.slug}`}
                          className="block px-5 py-2.5 text-gray-700 hover:bg-[#3B82F6] hover:text-white transition-all duration-200 font-medium"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <NavLink to="/brands" className={({isActive}) => `font-bold transition-all duration-300 px-4 py-2 rounded-lg ${isActive ? 'bg-[#3B82F6] text-white' : 'text-gray-700 hover:bg-[#3B82F6] hover:text-white'}`}>
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({isActive}) => `font-bold transition-all duration-300 px-4 py-2 rounded-lg ${isActive ? 'bg-[#3B82F6] text-white' : 'text-gray-700 hover:bg-[#3B82F6] hover:text-white'}`}>
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Sidebar */}
      <div id="mobile-menu" className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-end h-16 px-4 border-b border-gray-200">
            <button 
              onClick={closeMobileMenu}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300"
              aria-label="Close mobile menu"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <ul className="px-4 space-y-1">
              <li>
                <NavLink to="/" onClick={closeMobileMenu} className={({isActive}) => `block py-3 px-4 font-bold rounded-lg transition-all duration-300 ${isActive ? 'bg-[#3B82F6] text-white' : 'text-gray-700 hover:bg-[#3B82F6] hover:text-white'}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMobileMenu} className={({isActive}) => `block py-3 px-4 font-bold rounded-lg transition-all duration-300 ${isActive ? 'bg-[#3B82F6] text-white' : 'text-gray-700 hover:bg-[#3B82F6] hover:text-white'}`}>
                  About
                </NavLink>
              </li>
              
              {/* CHANGED: Restored mobile dropdown functionality for services. */}
              <li>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full py-3 px-4 font-bold text-gray-700 hover:bg-[#3B82F6] hover:text-white rounded-lg transition-all duration-300"
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <ul className="mt-2 ml-4 space-y-1 border-l-2 border-blue-100">
                    {/* This link is necessary for mobile users to get to the main services page */}
                    <li>
                      <NavLink to="/services" onClick={closeMobileMenu} className="block py-2 px-4 text-sm font-semibold text-[#3B82F6] hover:text-[#3B82F6] hover:bg-blue-50 rounded-lg transition-all duration-200">
                        All Services
                      </NavLink>
                    </li>
                    {serviceItems.map((service) => (
                      <li key={service.slug}>
                        <NavLink 
                          to={`/services/${service.slug}`} 
                          onClick={closeMobileMenu} 
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-[#3B82F6] hover:bg-blue-50 rounded-lg transition-all duration-200"
                        >
                          {service.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <NavLink to="/brands" onClick={closeMobileMenu} className={({isActive}) => `block py-3 px-4 font-bold rounded-lg transition-all duration-300 ${isActive ? 'bg-[#3B82F6] text-white' : 'text-gray-700 hover:bg-[#3B82F6] hover:text-white'}`}>
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMobileMenu} className={({isActive}) => `block py-3 px-4 font-bold rounded-lg transition-all duration-300 ${isActive ? 'bg-[#3B82F6] text-white' : 'text-gray-700 hover:bg-[#3B82F6] hover:text-white'}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;