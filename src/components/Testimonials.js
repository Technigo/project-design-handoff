import React from 'react';
import '../index.css';

import img1 from '../images/Test-1.png'
import img2 from '../images/Test-2.png'
import img3 from '../images/Test-3.png'

// eslint-disable-next-line max-len
const Testimonial = ({ title, backgroundImg, img1Title, img2Title, img3Title, img1Subtitle, img2Subtitle, img3Subtitle, buttonText, onClick }) => {
  const testimonialBackground = {
    backgroundImage: `url(${backgroundImg})`
  };

  return (
    <section className="testimonial-section" style={testimonialBackground}>
      <div className="testimonial-container">
        <h2>{title}</h2>
        <div className="images-container-test">
          <div className="img-container-test">
            <img src={img1} alt={img1Title} />
            <p>{img1Title}</p>
            <h3>{img1Subtitle}</h3>
          </div>
          <div className="img-container-test">
            <img src={img2} alt={img2Title} />
            <p>{img2Title}</p>
            <h3>{img2Subtitle}</h3>
          </div>
          <div className="img-container-test">
            <img src={img3} alt={img3Title} />
            <p>{img3Title}</p>
            <h3>{img3Subtitle}</h3>
          </div>
        </div>
        <div className="test-btn-container">
          <button type="button" onClick={onClick}>{buttonText}</button>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;
