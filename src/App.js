import React from 'react'
import { Testimonials } from 'components/Testimonials';
import { Header } from './components/Header';
import { Benefits } from './components/Benefits';
import { CTAsection } from './components/CTAsection';
import { Carousel } from './components/Videoslider';

export const App = () => {
  return (
    <div>
      <Header />
      <Benefits />
      <CTAsection />
      <Testimonials />
      <CTAsection />
      <Carousel />
    </div>
  )
}
