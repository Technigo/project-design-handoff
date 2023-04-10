import React from 'react';
import '../index.css';

import img1 from '../images/Motivation-1.png'
import img2 from '../images/Motivation-2.png'
import img3 from '../images/Motivation-3.png'
import icon from '../images/Read-more.png'

// eslint-disable-next-line max-len
const Motivation = ({ title, backgroundImg, img1Title, img2Title, img3Title, img1Subtitle, img2Subtitle, img3Subtitle, shortText }) => {
  const motivationBackground = {
    backgroundImage: `url(${backgroundImg})`
  };

  return (
    <section className="motivation-section" style={motivationBackground}>
      <div className="motivation-container">
        <h2>{title}</h2>
        <div className="images-container">
          <div className="img-container-motiv">
            <img src={img1} alt={img1Title} />
            <h3>{img1Title}</h3>
            <p>{img1Subtitle}</p>
          </div>
          <div className="img-container-motiv">
            <img src={img2} alt={img2Title} />
            <h3>{img2Title}</h3>
            <p>{img2Subtitle}</p>
          </div>
          <div className="img-container-motiv">
            <img src={img3} alt={img3Title} />
            <h3>{img3Title}</h3>
            <p>{img3Subtitle}</p>
          </div>
        </div>
        <div className="short-text-container">
          <p>{shortText}</p>
          <img src={icon} alt="icon" />
        </div>
      </div>
    </section>
  )
}

export default Motivation;
