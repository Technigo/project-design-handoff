import React from 'react';
import Carousel from './carousel';
import { CarouselData } from './carouselData';
import './css/info.css'
import Man from './images/tobias-nii-kwatei-quartey-eGdGkZAI6h4-unsplash 2.png'
import Vector1 from './images/Vector1.png'
import Vector2 from './images/Vector-2.png'
import Vector3 from './images/Vector-3.png'
import Vector4 from './images/Vector-4.png'

export const Acrobatics = () => {
  return (
    <div className="acrobatics-container">
      <h2 className="title">But, what is acrobatics?</h2>
      <div className="image-container">
        <img src={Man} alt="man" className="man" />
        <div className="Stripe">
          <div className="stripe1">
            <img src={Vector1} alt="man" className="Vector1" />
          </div>
          <div className="stripe2">
            <img src={Vector2} alt="man" className="Vector2" />
          </div>
          <div className="stripe3">
            <img src={Vector3} alt="man" className="Vector3" />
          </div>
          <div className="stripe4">

            <img src={Vector4} alt="man" className="Vector4" />
          </div>
        </div>
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

    </div>
  );
}

// <Carousel slides={CarouselData} />