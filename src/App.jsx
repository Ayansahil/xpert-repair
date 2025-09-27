import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

// Lazy-loaded Page Imports
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const BrandsPage = lazy(() => import('./pages/BrandsPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));

// Lazy-loaded Service Sub-pages
const LedLcdTvRepair = lazy(() => import('./pages/services/led-lcd-tv-repair.jsx'));
const PlasmaTvRepair = lazy(() => import('./pages/services/plasma-tv-repair.jsx'));
const AirConditionerRepair = lazy(() => import('./pages/services/air-conditioner-repair.jsx'));
const RefrigeratorRepair = lazy(() => import('./pages/services/refrigerator-repair.jsx'));
const WashingMachineRepair = lazy(() => import('./pages/services/washing-machine-repair.jsx'));
const MicrowaveOvenRepair = lazy(() => import('./pages/services/microwave-oven-repair.jsx'));
const ROPurifierRepair = lazy(() => import('./pages/services/ro-purifier-repair.jsx'));
const GeyserRepair = lazy(() => import('./pages/services/geyser-repair.jsx'));

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
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
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
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;