import React from 'react';
import Header from 'Header/Header';
import Hero from 'Body';
import FreeTrialButton from 'Button';
import Wellbeing from 'Wellbeing/Wellbeing';
import YogisCarousel from 'Yogis/YogisCarousel';
import OnlineYoga from 'OnlineYoga';
import PersonalisedMeal from 'PersonalisedMeal';
import PricingPlan from 'PricingPlan';
import Footer from 'Footer';
import Yogis from './Yogis/Yogis';

export const App = () => {
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
        <div className="carousel-container">
          <YogisCarousel />
        </div>
        <div className="yogis-container">
          <Yogis />
        </div>
      </section>
      <div className="free-button-container">
        <FreeTrialButton />
      </div>
      <section className="online-yoga-container">
        <OnlineYoga />
      </section>
      <div className="free-button-container">
        <FreeTrialButton />
      </div>
      <PersonalisedMeal />
      <PricingPlan />
      <Footer />
    </>
  );
}