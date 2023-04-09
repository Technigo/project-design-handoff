import React, { useState } from "react";
import GlobalStyle from "style/Global";
import Header from "components/Header";
import Benefits from "components/Benefits";
import Testimonials from "components/Testimonials";
import OnlineYoga from "components/OnlineYoga";
import Nutrition from "components/Nutrition";
import Pricing from "components/Pricing";
import Popup from "components/Popup";
import Footer from "components/Footer";
import CTADiv from "components/CTADiv";

export const App = () => {
// Hi and welcome to my code. This thing toggles the popup!
  const [isShowing, setIsShowing] = useState(false);

  const handleCTAClick = () => {
  // This thing handles the actual click and changes state of popup!
    setIsShowing(true);
  };

  return (
  
    <>
      <GlobalStyle />
      <Header onClick={handleCTAClick} />
      <Benefits />
      <CTADiv onClick={handleCTAClick} />
      <Testimonials />
      <CTADiv onClick={handleCTAClick} />
      <OnlineYoga />
      <CTADiv onClick={handleCTAClick} />
      <Nutrition />
      <Pricing />
      {isShowing && <Popup setIsShowing={setIsShowing} 
      // actually rendering the popup when it's set to showing
      />}
      <Footer />
    </>
  );
};
