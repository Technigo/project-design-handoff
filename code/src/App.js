import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Why from './components/Why';
import Classes from './components/Classes';
import Signup from './components/Signup';
import Footer from './components/Footer';

import './index.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Why />
      <Classes />
      <Signup />
      <Footer />
    </div>
  );
};

export default App;
