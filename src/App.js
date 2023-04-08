import React from 'react'
import './reset.css';
import { Hero } from 'components/Hero'
import { Benefits } from 'components/Benefits'
import { Membership } from 'components/Membership';
import { Article } from 'components/Article';
import { ImageSlider } from 'components/Reviews';
import { Contacts } from 'components/Contact';
import { Footer } from 'components/Footer'

export const App = () => {
  return (
    <>
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