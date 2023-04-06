import React from 'react';
import Header from 'Header/Header';
import Hero from 'Body';
import FreeTrialButton from 'Button';
import Wellbeing from 'Wellbeing/Wellbeing';
import Yogis from 'Yogis/Yogis';
import YogisCarousel from 'Yogis/YogisCarousel';

export const App = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <section className="start">
        <div className="start-container">
          <Header />
          <Hero />
          <div className="button-container">
            <FreeTrialButton />
          </div>
        </div>
      </section>
      <section className="wellbeing-container">
        <Wellbeing />
      </section>
      <div className="free-button-container">
        <FreeTrialButton />
      </div>
      <section className="yoga-container">
        {isMobile ? <Yogis /> : <YogisCarousel />}
      </section>
      <div className="free-button-container">
        <FreeTrialButton />
      </div>
    </>
  )
}
