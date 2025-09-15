import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Page & Component Imports
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import LedLcdTvRepair from './pages/services/led-lcd-tv-repair.jsx';
import PlasmaTvRepair from './pages/services/plasma-tv-repair.jsx';
import AirConditionerRepair from './pages/services/air-conditioner-repair.jsx';
import RefrigeratorRepair from './pages/services/refrigerator-repair.jsx';
import WashingMachineRepair from './pages/services/washing-machine-repair.jsx';
import MicrowaveOvenRepair from './pages/services/microwave-oven-repair.jsx';
import ROPurifierRepair from './pages/services/ro-purifier-repair.jsx';
import GeyserRepair from './pages/services/geyser-repair.jsx';

// Page Imports for main navigation
import AboutPage from './pages/AboutPage.jsx';
import BrandsPage from './pages/BrandsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

// This helper component scrolls to the top of the page on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          {/* Top padding to prevent content from being hidden by the fixed header */}
          <main className="flex-grow pt-16 lg:pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about/" element={<AboutPage />} />
              <Route path="/services/" element={<ServicesPage />} />
              
              <Route path="/services/led-lcd-tv-repair/" element={<LedLcdTvRepair />} />
              <Route path="/services/plasma-tv-repair/" element={<PlasmaTvRepair />} />
              <Route path="/services/air-conditioner-repair/" element={<AirConditionerRepair />} />
              <Route path="/services/refrigerator-repair/" element={<RefrigeratorRepair />} />
              <Route path="/services/washing-machine-repair/" element={<WashingMachineRepair />} />
              <Route path="/services/microwave-oven-repair/" element={<MicrowaveOvenRepair />} />
              <Route path="/services/ro-purifier-repair/" element={<ROPurifierRepair />} />
              <Route path="/services/geyser-repair/" element={<GeyserRepair />} />

              <Route path="/brands/" element={<BrandsPage />} />
              <Route path="/contact/" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;