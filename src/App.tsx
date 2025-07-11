import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Retail from './pages/Retail';
import Distribution from './pages/Distribution';
import Finance from './pages/Finance';
import Partners from './pages/Partners';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <Router>
      <div className="font-inter text-gray-800 bg-white min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/distribution" element={<Distribution />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;