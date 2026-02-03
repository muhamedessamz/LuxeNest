import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';
import Home from './pages/Home.tsx';
import ProductDetails from './pages/ProductDetails.tsx';
import Collections from './pages/Collections.tsx';
import InteriorDesign from './pages/InteriorDesign.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Projects from './pages/Projects.tsx';
import Auth from './pages/Auth.tsx';
import Cart from './pages/Cart.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';

const App: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-white transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/services" element={<InteriorDesign />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          {/* Fallback to Home for demo purposes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
