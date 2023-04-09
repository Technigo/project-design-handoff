import React from 'react';
import './LoadingPageText.css';

const LoadingPageText = () => {
  const handleButtonClick = () => {
    alert('Thank you for trying Self Health!');
  };
  return (
    <section className="loading-page-wrapper">
      <div className="text-wrapper">
        <h1>Online<br /> Healthy Diet<br />Strong Body</h1>
        <p className="loading-text">Level up your life to the happier and healthier with help of the certified personal
        trainers and nutrition coaches based on your personal circumstance
        </p>
        <div className="users-trainers">
          <p className="users"><span>1250+</span><br />active users</p>
          <p className="trainers"><span>50+ </span><br />personal trainers</p>
        </div>
        <button className="tryforfree-hero" type="submit" onClick={handleButtonClick}>Try for Free</button>
      </div>
    </section>
  )
}

export default LoadingPageText;
