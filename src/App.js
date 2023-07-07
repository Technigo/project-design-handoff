import React from 'react';
import { Hero } from './Sections/Hero';
import { PowerYogaInfo } from './Sections/PowerYogaInfo';
import { Classes } from './Sections/Classes';
import { Address } from './Sections/Address';
import { SantulanInfo } from './Sections/SantulanInfo';
import { ReviewsSignUp } from './Sections/ReviewsSignUp';
import { Footer } from './Sections/Footer';

export const App = () => {
  return (
    <div>
      <Hero />
      <PowerYogaInfo />
      <Classes />
      <SantulanInfo />
      <Address />
      <ReviewsSignUp />
      <Footer />
    </div>
  )
}
