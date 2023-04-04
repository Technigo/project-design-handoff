import React from 'react';
import Header from 'Header/Header';
import Hero from 'Body';
import FreeTrialButton from 'Button';

export const App = () => {
  return (
    <div className="start-container">
      <Header />
      <Hero />
      <div className="button-container">
        <FreeTrialButton />
      </div>
    </div>
  )
}
