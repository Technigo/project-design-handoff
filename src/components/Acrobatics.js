import React from 'react';
import Carousel from './carousel';
import { CarouselData } from './carouselData';
import './css/info.css'
import Man from './images/tobias-nii-kwatei-quartey-eGdGkZAI6h4-unsplash 2.png'

export const Acrobatics = () => {
  return (
    <div className="acrobatics-container">
      <div className="image-container">
        <img src={Man} alt="man" className="man" />
        <div className="Stripe">
          <div className="stripe1" />
          <div className="stripe2" />
          <div className="stripe3" />
        </div>
      </div>
      <div className="acrobatics">
        <h2 className="title">But, what is acrobatics?</h2>
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
      <div>
        <Carousel slides={CarouselData} />
      </div>

    </div>
  );
}

// <Carousel slides={CarouselData} />