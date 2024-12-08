import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Heart, Globe, Clock, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Built with Kenyan regulations in mind',
    color: 'text-indigo-600',
  },
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Smart automation and fraud detection',
    color: 'text-blue-600',
  },
  {
    icon: Heart,
    title: 'Patient-Centric',
    description: 'Designed for optimal care delivery',
    color: 'text-purple-600',
  },
  {
    icon: Globe,
    title: 'Nationwide Coverage',
    description: 'Serving all 47 counties in Kenya',
    color: 'text-green-600',
  },
  {
    icon: Clock,
    title: '24/7 Operation',
    description: 'Round-the-clock system availability',
    color: 'text-orange-600',
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Enterprise-grade security measures',
    color: 'text-red-600',
  },
];

const Features = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-16">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow-xl hover-lift"
        >
          <feature.icon className={`h-12 w-12 ${feature.color} mx-auto mb-4`} />
          <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
          <p className="text-gray-600 text-center">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;