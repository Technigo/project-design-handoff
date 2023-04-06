import React from 'react';
import Header from 'components/Header.js';
import Hero from 'components/Hero.js';
import Classes from 'components/Classes.js';
import Quiz from 'components/Quiz.js';
import FinalSection from 'components/FinalSection.js';

export const App = () => {
  return (
    <div className="landingPage">
      <Header />
      <Hero />
      <Classes />
      <Quiz />
      <FinalSection />
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
