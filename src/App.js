import React from 'react';
import Header from 'components/Header.js';
import Hero from 'components/Hero.js';
import Classes from 'components/Classes.js';

export const App = () => {
  return (
    <div className="landingPage">
      <Header />
      <Hero />
      <Classes />
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
