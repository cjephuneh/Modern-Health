import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-center mt-16"
    >
      <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Healthcare Operations?</h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Join leading healthcare providers across Kenya in revolutionizing healthcare delivery
        with our comprehensive suite of solutions.
      </p>
      <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold 
        flex items-center gap-2 mx-auto hover:bg-indigo-700 transition-colors">
        Get Started Today
        <ArrowRight className="h-5 w-5" />
      </button>
    </motion.div>
  );
};

export default CallToAction;