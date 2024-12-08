import React from 'react';
import { motion } from 'framer-motion';
import Stats from './Stats';
import Features from './Features';
import CallToAction from './CallToAction';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Insurance and
            <span className="text-indigo-600"> Healthcare Management</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering insurers, hospitals, and members with seamless, scalable solutions
            built for the future of healthcare in Kenya. Experience the power of integrated
            healthcare technology.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold"
            >
              Schedule Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold border-2 border-indigo-600"
            >
              Learn More
            </motion.button>
          </div>

          <Stats />
          <Features />
          <CallToAction />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;