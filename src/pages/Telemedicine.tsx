import React from 'react';
import { motion } from 'framer-motion';
import { Video, MessageSquare, Stethoscope, FileText } from 'lucide-react';

const Telemedicine = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Telemedicine Platform</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Connect patients with healthcare providers through our state-of-the-art
                telemedicine platform. Designed for Kenya's unique healthcare landscape,
                our solution ensures quality care reaches every corner of the nation.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Video, title: "HD Video Calls", desc: "Low-bandwidth optimized" },
                  { icon: MessageSquare, title: "Secure Chat", desc: "End-to-end encryption" },
                  { icon: Stethoscope, title: "Virtual Exams", desc: "Interactive consultations" },
                  { icon: FileText, title: "Digital Records", desc: "NHIF integrated" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <item.icon className="h-6 w-6 text-purple-600 mb-2" />
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Telemedicine"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Telemedicine;