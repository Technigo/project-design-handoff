import React from 'react';
import Carousel from './carousel';
import { CarouselData } from './carouselData';
import './css/acrobatics.css'
import Man from './images/tobias-nii-kwatei-quartey-eGdGkZAI6h4-unsplash 2.png'
import Stripes from './images/lines.png'

export const Acrobatics = () => {
  return (
    <div className="acrobatics-container">
      <h2 className="title">But, what is acrobatics?</h2>
      <div className="Stripe">
        <img src={Stripes} alt="stripes" className="stripes" />
      </div>
      <div className="image-container">
        <img src={Man} alt="man" className="man" />
      </div>
      <div className="acrobatics">

        <p>Acrobaticsis is the performance of
          human feats of balance, agility,
          and motor coordination.
          Acrobatic skills are used in
          performing arts, sporting events,
          and martial arts.
          Extensive use of acrobatic skills are most often performed
          in acro dance, circus, gymnastics,
          and freerunning and to a lesser extent in other athletic activities including ballet,
          slacklining and diving
        </p>
      </div>
      <div className="Carousel">
        <Carousel slides={CarouselData} />
      </div>
      <button className="BookaClass" type="button">
      Book a class
      </button>
    </div>
  );
}

// <Carousel slides={CarouselData} />