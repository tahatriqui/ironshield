import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Stats from './components/Stats';
import Specs from './components/Specs';
import TrustBar from './components/TrustBar';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CategoryPage from './components/CategoryPage';
import CategoryGrid from './components/CategoryGrid';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TrustBar />
                <Stats />
                <CategoryGrid />
                <ProductGrid />
                <Specs />
                <CTASection />
              </>
            }
          />
          <Route path="/category/:categoryKey" element={<CategoryPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
