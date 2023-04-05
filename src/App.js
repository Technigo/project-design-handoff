import React from 'react';
import './global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUpForm from './components/SignUpForm';

export const App = () => {
  return (
    <div className="app-container">
      <Header />
      <SignUpForm />
      <Footer />
    </div>
  );
};