import React from 'react'
import { Hero } from './Sections/Hero';
import { PowerYogaInfo } from './Sections/PowerYogaInfo';
import { Classes } from './Sections/Classes';
import { Address } from './Sections/Address';
import { SantulanInfo } from './Sections/SantulanInfo';
import { Reviews } from './Sections/Reviews';
import { SignupForm } from './Sections/SignupForm';
import { Footer } from './Sections/Footer';

export const App = () => {
  return (
    <div>
      <Hero />
      <PowerYogaInfo />
      <Classes />
      <SantulanInfo />
      <Address />
      <Reviews />
      <SignupForm />
      <Footer />
    </div>
  )
}
