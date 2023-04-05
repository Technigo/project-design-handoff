import React, { useState, useEffect } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './components/About'
import Classes from './components/Classes'
import Footer from './sections/Footer'

import './index.css'

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
      <About />
      <Classes screenSize={screenSize} />
      <Footer screenSize={screenSize} />
    </div>
  )
}
export default App;