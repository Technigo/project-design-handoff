import React from 'react';
import './global.css';
import Header from './components/Header';
import SimpleSlider from './components/SimpleSlider';
import Footer from './components/Footer';
import SignUpForm from './components/SignUpForm';

export const App = () => {
  return (
    <div className="app-container">
      <Header />
      <SignUpForm />
      <SimpleSlider />
      <Footer />
    </div>
  );
};