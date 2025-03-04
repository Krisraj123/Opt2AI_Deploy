import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Zap size={28} className="text-purple-400" />
          </motion.div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Opt2AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/api" label="API" />
          <NavLink to="/docs" label="Documentation" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden mt-4 py-4 bg-slate-800 bg-opacity-90 backdrop-blur-lg rounded-lg"
        >
          <div className="flex flex-col space-y-4 px-4">
            <MobileNavLink to="/" label="Home" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/api" label="API" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/docs" label="Documentation" onClick={() => setIsOpen(false)} />
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link to={to}>
    <motion.span
      className="text-gray-300 hover:text-white font-medium"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {label}
    </motion.span>
  </Link>
);

const MobileNavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => (
  <Link to={to} onClick={onClick}>
    <span className="block text-gray-300 hover:text-white font-medium py-2">
      {label}
    </span>
  </Link>
);

export default Navbar;
