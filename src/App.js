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
  const [isShowing, setIsShowing] = useState(false);
  console.log(isShowing);

  const handleCTAClick = () => {
    setIsShowing(true);
  };

  return (
    <div>
      <GlobalStyle />
      <Header onClick={() => setIsShowing(true)} />
      <Benefits />
      <CTADiv onClick={handleCTAClick} />
      <Testimonials />
      <CTADiv onClick={handleCTAClick} />
      <OnlineYoga />
      <CTADiv onClick={handleCTAClick} />
      <Nutrition />
      <Pricing />
      {isShowing && <Popup setIsShowing={setIsShowing} />}
      <Footer />
    </div>
  );
};
