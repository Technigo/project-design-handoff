/* eslint-disable linebreak-style */
import React from 'react'
import { ImageSlider } from 'Components/Reviews'
import { Navbar } from 'Components/Navbar'
import { Benefits } from 'Components/Benefits';
import Contacts from 'Components/Contacts';
import { Hero } from 'Components/Hero';
import { Membership } from 'Components/Membership';
import { Article } from 'Components/Article';
import { Footer } from 'Components/Footer';

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Membership />
      <Article />
      <ImageSlider />
      <Contacts />
      <Footer />
    </>
  )
}
