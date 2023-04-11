import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from 'components/Hero/Hero';
import Footer from './components/Footer';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" />
        <Route path="/products" />
        <Route path="/contact" />
        <Route path="/about" />
      </Routes>
      <Footer />
    </Router>
  )
}
