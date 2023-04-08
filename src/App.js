/* eslint-disable linebreak-style */
import React from 'react'
import { ImageSlider } from 'ReviewSlider'
import Navbar from 'Navbar'
import { Benefits } from 'Benefits';
import Contacts from 'Contacts';
import { Hero } from 'Hero';
import { Membership } from 'Membership';
import { Article } from 'Article';

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
    </>
  )
}
