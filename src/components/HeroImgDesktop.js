import React from 'react';
import './HeroImgDesktop.css';

const HeroImg = () => {
  return (
    <div className="hero-desk-img-container">
      <div className="herodesk-background">
        <img src={`${process.env.PUBLIC_URL}/img/Hero-desktop.png`} alt="hero-desk" />
      </div>
      <div>
        <img className="hero-logo-desk" src={`${process.env.PUBLIC_URL}/img/Logo-desk.png`} alt="logo-desk" />
        <img className="lupa" src={`${process.env.PUBLIC_URL}/img/lupa.png`} alt="lupa" />
        <div className="hero-button-top">
          <div>Try for Free</div>
        </div>
        <div className="nav-options">
          <div>Services</div>
          <div>Coaches</div>
          <div>About</div>
          <div>Shop</div>
          <div>Club</div>
        </div>
      </div>
      <div className="hero-padding">
        <div className="hero-text-h1">
          <div>Online</div>
          <div>Healthy Diet</div>
          <div>Strong Body</div>
        </div>
        <div className="hero-text-p3">
          Level up your life to the happier and
          healthier with help of the certified
          personal trainers and nutrition
          coaches based on your personal
          circumstance
        </div>

        <div className="hero-text-p3-numbers">
          <div className="120">
            <div>1250+</div>
            <div className="parragraph">active users</div>
          </div>
          <div className="50">
            <div>50+</div>
            <div className="parragraph">personal trainers</div>
          </div>
        </div>
        <div className="hero-button">
          <div>Try for Free</div>
        </div>

      </div>
    </div>
  );
};

export default HeroImg;