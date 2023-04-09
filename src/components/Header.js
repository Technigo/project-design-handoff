import React from 'react';
import '../index.css';

// eslint-disable-next-line max-len
const Header = ({ img1, img2, img3, img4, img5, img6 }) => {
  return (
    <section className="header-section">
      <div className="header-logo">
        <img src={img1} alt="page logo" />
      </div>
      <div className="header-content-1">
        <img src={img2} alt="dads" />
      </div>
      <div className="header-content-2">
        <img src={img3} alt="moms" />
      </div>
      <div className="header-content3">
        <img src={img4} alt="moms and dads" />
      </div>
      <div className="header-content-4">
        <img src={img5} alt="food" />
      </div>
      <div className="hamburger">
        <img src={img6} alt="hamburger-menu" />
      </div>
    </section>
  )
}

export default Header;