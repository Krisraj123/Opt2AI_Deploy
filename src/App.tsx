import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ApiDocs from './pages/ApiDocs';
import Documentation from './pages/Documentation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api" element={<ApiDocs />} />
            <Route path="/docs" element={<Documentation />} />
          </Routes>
          <Footer />
        </motion.div>
      </div>
    </Router>
  );
}

export default App;