import React from 'react';

export const Pitch = () => {
  return (
    <div className="pitch-container">
      <h2 className="pitch-title"> How we get you in shape: </h2>
      <div className="pitch-cards">
        <div className="pitch-card">
          <img alt="shape" src="../assets/pitchimg1.png" />
          <div className="pitchtextbox">
            <h3>Keep at it - even on the worse days</h3>
            <p> Read more about our science-backed hacks</p>
          </div>
        </div>
        <div className="pitch-card">
          <img alt="shape" src="../assets/pitchimg2.png" />
          <div className="pitchtextbox">
            <h3>Do it whenever and wherever you want</h3>
            <p> With our science-proofed hacks you will not stay behind </p>
          </div>
        </div>
        <div className="pitch-card">
          <img alt="shape" src="assets/pitchimg3.png" />
          <div className="pitchtextbox">
            <h3>Push it but with caution</h3>
            <p> Our experienced team knows everything about Rectus statis, C-section and co</p>
          </div>
        </div>

      </div>
      <div className="readmore">
        <h4>Choose your program</h4>
        <img alt="read more" src="./assets/Read more.svg" />
      </div>
    </div>
  )
}