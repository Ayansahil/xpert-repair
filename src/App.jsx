import React from 'react';
// CHANGED: Reverted to the traditional BrowserRouter setup for simplicity.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// CHANGED: All page components are imported here for routing.
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BrandsPage from './pages/BrandsPage';
import ContactPage from './pages/ContactPage';
// CHANGED: Imported the ServiceDetailPage to handle individual service routes.


function App() {
  return (
    <HelmetProvider>
      {/* CHANGED: Using Router to wrap the application. Header and Footer are outside
          Routes so they appear on every page. The Layout.jsx file is no longer needed. */}
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          {/* CHANGED: Adjusted top padding to account for the restored header height. */}
          <main className="flex-grow pt-24">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              {/* CHANGED: Added a dynamic route for individual service pages. */}
              {/* <Route path="/services/:serviceId" element={<ServiceDetailPage />} /> */}
              <Route path="/brands" element={<BrandsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;