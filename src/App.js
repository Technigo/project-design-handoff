import React from 'react'
import { Testimonials } from 'components/Testimonials';
import { Header } from './components/Header';
import { Benefits } from './components/Benefits';
import { CTAsection } from './components/CTAsection';
import { Onlineyoga } from './components/Onlineyoga';
import { Nutrition } from './components/Nutrition';
import { Pricingplan } from './components/Pricingplan';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div>
      <Header />
      <Benefits />
      <CTAsection />
      <Testimonials />
      <CTAsection />
      <Onlineyoga />
      <CTAsection />
      <Nutrition />
      <Pricingplan />
      <Footer />
    </div>
  )
}
