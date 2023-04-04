import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Why from './components/Why';
import Classes from './components/Classes';
import Signup from './components/Signup';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <Header screenSize={screenSize} />
      <Hero />
      <Why />
      <Classes screenSize={screenSize} />
      <Signup />
      <Footer screenSize={screenSize} />
    </div>
  );
};

export default App;
