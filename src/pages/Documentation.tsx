import React from 'react';
import { motion } from 'framer-motion';

const Documentation = () => {
  return (
    <div className="py-10">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Documentation
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          This page will be updated with comprehensive documentation soon.
        </p>
      </motion.section>
    </div>
  );
};

export default Documentation;