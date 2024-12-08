import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Shield, TrendingUp, Clock } from 'lucide-react';

const Claims = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Claims Management System</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our flagship Claims Management System streamlines the entire claims lifecycle,
                from submission to payout. Built specifically for the Kenyan market, it integrates
                seamlessly with NHIF and private insurers.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FileCheck, title: "Automated Processing", desc: "AI-powered claims validation" },
                  { icon: Shield, title: "Fraud Detection", desc: "Advanced analytics and patterns" },
                  { icon: TrendingUp, title: "Real-time Analytics", desc: "Comprehensive dashboards" },
                  { icon: Clock, title: "24/7 Processing", desc: "Continuous operation" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <item.icon className="h-6 w-6 text-indigo-600 mb-2" />
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Claims Management"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Claims;