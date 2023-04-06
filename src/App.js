import React from 'react';
import Header from 'components/Header.js';
import Hero from 'components/Hero.js';
import Classes from 'components/Classes.js';
import Quiz from 'components/Quiz.js';
import FinalSection from 'components/FinalSection.js';
import Footer from 'components/Footer.js';

export const App = () => {
  const screenSize = window.innerWidth;
  return (
    <div className="landingPage">
      <Header screenSize={screenSize} />
      <Hero />
      <Classes screenSize={screenSize} />
      <Quiz />
      <FinalSection />
      <Footer screenSize={screenSize} />
    </div>
  )
}

// export const App = () => {
//   return (
//     <div className="app">
//       <Button cta>SIGN UP</Button>
//       <Hero />
//     </div>
//   )
// }
