import React from 'react';
import { Membership } from 'components/Membership';
import { Article } from 'components/Article';
import { Navbar } from 'components/NavBar';
import { Hero } from 'components/Hero';
import { Benefits } from 'components/Benefits';
import { ReviewSlider } from 'components/ReviewSlider';
import { Contacts } from 'components/Contact';
import { Footer } from 'components/Footer';

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Membership />
      <Article />
      <ReviewSlider />
      <Contacts />
      <Footer />
    </>
  )
}
