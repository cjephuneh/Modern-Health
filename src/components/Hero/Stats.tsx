import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Activity } from 'lucide-react';

const stats = [
  { icon: Users, value: '50K+', label: 'Active Members', color: 'text-blue-600' },
  { icon: Building2, value: '100+', label: 'Partner Hospitals', color: 'text-indigo-600' },
  { icon: Activity, value: '1M+', label: 'Claims Processed', color: 'text-purple-600' },
];

const Stats = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 my-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift"
        >
          <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-4`} />
          <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
          <p className="text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;