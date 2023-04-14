import React from 'react';
import '../index.css';

import img1 from '../images/Icon-1.png'
import img2 from '../images/Icon-2.png'
import img3 from '../images/Icon-3.png'
import img4 from '../images/Icon-4.png'

const Methods = ({ title, img1Title, img2Title, img3Title, img4Title }) => {
  return (
    <section className="methods-section">
      <div className="methods-container">
        <h2>{title}</h2>
        <div className="img-container-method">
          <img src={img1} alt={img1Title} />
          <p>{img1Title}</p>
        </div>
        <div className="img-container-method">
          <img src={img2} alt={img2Title} />
          <p>{img2Title}</p>
        </div>
        <div className="img-container-method">
          <img src={img3} alt={img3Title} />
          <p>{img3Title}</p>
        </div>
        <div className="img-container-method">
          <img src={img4} alt={img4Title} />
          <p>{img4Title}</p>
        </div>
      </div>
    </section>
  )
}

export default Methods;