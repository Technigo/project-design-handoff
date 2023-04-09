import React from 'react';
import '../index.css';

const Methods = ({ title, img1, img2, img3, img4, img1Title, img2Title, img3Title, img4Title }) => {
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