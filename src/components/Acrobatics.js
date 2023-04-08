import React from 'react';
import './css/acrobatics.css'
import Man from './images/tobias-nii-kwatei-quartey-eGdGkZAI6h4-unsplash 2.png'
import Stripes from './images/lines.png'
import Title from './images/Whats acrobatics main button.png'
import OurClasses from './images/classes-button.png'

export const Acrobatics = () => {
  return (
    <div className="acrobatics-container">
      <div className="tabletDesktop-container">
        <div className="Title">
          <img src={Title} alt="Title" className="Title" />
        </div>

        <div className="picture-container">
          <img src={Stripes} alt="stripes" className="stripes" />
          <div className="image-container">
            <img src={Man} alt="man" className="man" />
          </div>
        </div>
        <div className="acrobaticsParagraph">
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
      </div>
      <a href="mailto:acrogym@sportsorg.se">
        <img className="Ourclasses" src={OurClasses} alt="button" />
      </a>
    </div>
  );
}

// <Carousel slides={CarouselData} />