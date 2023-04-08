import React from 'react'
import { Testimonials } from 'components/Testimonials/Testimonials';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Hero } from './components/Hero/Hero';
import { Motivation } from './components/Motivation/Motivation';
import { Program } from './components/Program/Program';
import { Plan } from './components/Plan/Plan';
import { Methods } from './components/Methods/Methods';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Motivation />
      <Program />
      <Plan />
      <Testimonials />
      <Methods />
      <Footer />
    </div>
  )
}
