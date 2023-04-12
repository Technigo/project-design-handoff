import React from 'react';
import './HeroImg.css';

const HeroImg = () => {
  return (
    <div className="heroimg-container">
      <div className="heroimg-background">
        <img src={`${process.env.PUBLIC_URL}/img/heroimg-mobile.png`} alt="hero" />
      </div>
      <div>
        <img className="hero-logo" src={`${process.env.PUBLIC_URL}/img/Logo .png`} alt="logo" />
        <img className="lupa" src={`${process.env.PUBLIC_URL}/img/lupa.png`} alt="lupa" />
        <img className="Ham-menu" src={`${process.env.PUBLIC_URL}/img/Ham-menu.png`} alt="menu" />
        {/* <Navbar /> */}
      </div>
      <div className="hero-padding">
        <div className="hero-text-h1">
          <div>Online</div>
          <div>Healthy Diet</div>
          <div>Strong Body</div>
        </div>
        <div className="hero-text-p3">
          <div>Level up your life to the happier and</div>
          <div>healthier with help of the certified</div>
          <div>personal trainers and nutrition</div>
          <div>coaches based on your personal</div>
          <div>circumstance</div>
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
          <div className="hero-button">
            <div>Try for Free</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

