import React from 'react';
import { Hero } from './components/maininfo';
import { Register } from './components/register';
import { Classes } from './components/classes';
import { Acrobatics } from './components/Acrobatics'
import Carousel from './components/carousel';
import { CarouselData } from './components/carouselData';

import { Footer } from './components/footer';
import './index.css'

export const App = () => {
  return (
    <div className="Main-container">

      <Hero />
      <Acrobatics />
      <Carousel slides={CarouselData} />
      <Register />
      <Classes />
      <Footer />

    </div>

  );
}

