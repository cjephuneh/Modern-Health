import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero/Hero';
import Claims from './pages/Claims';
import Support from './pages/Support';
import Telemedicine from './pages/Telemedicine';
import Hospital from './pages/Hospital';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/support" element={<Support />} />
          <Route path="/telemedicine" element={<Telemedicine />} />
          <Route path="/hospital" element={<Hospital />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;