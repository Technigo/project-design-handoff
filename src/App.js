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
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  console.log(isPopupOpen);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Benefits />
      <CTA alone>Start your 7-day FREE trial</CTA>
      <CTA test onClick={() => setIsPopupOpen(!isPopupOpen)}>
        Start your 7-day FREE trial
      </CTA>
      <Testimonials />
      <CTA alone>Start your 7-day FREE trial</CTA>
      <OnlineYoga />
      <CTA alone>Start your 7-day FREE trial</CTA>
      <Nutrition />
      <Pricing />
      <Footer />
      {isPopupOpen && (
        <Popup
          close={() => {
            setIsPopupOpen(false);
            console.log("blur");
          }}
        />
      )}
    </div>
  );
};
