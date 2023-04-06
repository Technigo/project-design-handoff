import React, { useState } from "react";
import GlobalStyle from "style/Global";
import { CTA } from "components/CTA";
import Header from "components/Header";
import Benefits from "components/Benefits";
import Testimonials from "components/Testimonials";
import OnlineYoga from "components/OnlineYoga";
import Nutrition from "components/Nutrition";
import Pricing from "components/Pricing";
import Popup from "components/Popup";
import Footer from "components/Footer";

export const App = () => {
  const [isShowing, setIsShowing] = useState(false);
  console.log(isShowing);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Benefits />
      <CTA onClick={() => setIsShowing(true)}>Start your 7-day FREE trial
      </CTA>
      <Testimonials />
      <CTA>Start your 7-day FREE trial</CTA>
      <OnlineYoga />
      <CTA alone>Start your 7-day FREE trial</CTA>
      <Nutrition />
      <Pricing />
      {isShowing && <Popup setIsShowing={setIsShowing} />}
      <Footer />
    </div>
  );
};
