import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, Database, BarChart } from 'lucide-react';

const Hospital = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Hospital Management System</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Hospital Management"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-transparent rounded-lg"></div>
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-lg text-gray-600 mb-6">
                Transform your hospital operations with our comprehensive HMIS solution.
                From patient registration to inventory management, we provide the tools
                needed for efficient healthcare delivery in Kenya.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, title: "Department Sync", desc: "Unified operations" },
                  { icon: Calendar, title: "Smart Scheduling", desc: "Automated appointments" },
                  { icon: Database, title: "Resource Planning", desc: "Inventory management" },
                  { icon: BarChart, title: "Analytics", desc: "Performance insights" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <item.icon className="h-6 w-6 text-cyan-600 mb-2" />
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hospital;