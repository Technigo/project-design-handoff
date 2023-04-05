import React from 'react';
import Header from 'Components/Headercomponents/Header';
import Footer from 'Components/FooterComponents/Footer';
import QuestionCorner from 'Components/QuestionComponents/QuestionCorner';
import Benefits from 'Components/BenefitsComponents/Benefits';
import PickYourPosition from 'Components/PositionComponents/PickYourPosition';

export const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Benefits />
      <PickYourPosition />
      <QuestionCorner />
      <Footer />
    </div>
  )
}
