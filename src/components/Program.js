import React from 'react';
import '../index.css';

import img1 from '../images/Program-1.png'
import img2 from '../images/Program-2.png'
import img3 from '../images/Program-3.png'
import img4 from '../images/Program-4.png'
import img5 from '../images/Program-5.png'
import img6 from '../images/Program-7.png'

// eslint-disable-next-line max-len
const Program = ({ title, img1Title, img2Title, img3Title, img4Title, img5Title, img6Title, buttonText, onClick }) => {
  return (
    <section className="program-section">
      <div className="program-container">
        <h2>{title}</h2>
        <div className="img-container-program">
          <img src={img1} alt={img1Title} />
          <h3>{img1Title}</h3>
        </div>
        <div className="img-container-program">
          <img src={img2} alt={img2Title} />
          <h3>{img2Title}</h3>
        </div>
        <div className="img-container-program">
          <img src={img3} alt={img3Title} />
          <h3>{img3Title}</h3>
        </div>
        <div className="img-container-program">
          <img src={img4} alt={img4Title} />
          <h3>{img4Title}</h3>
        </div>
        <div className="img-container-program">
          <img src={img5} alt={img5Title} />
          <h3>{img5Title}</h3>
        </div>
        <div className="img-container-program">
          <img src={img6} alt={img6Title} />
          <h3>{img6Title}</h3>
        </div>
        <button type="button" onClick={onClick}>{buttonText}</button>
      </div>
    </section>
  )
}

export default Program;
