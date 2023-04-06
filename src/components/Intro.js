import React from 'react';

const Intro = () => {
  return (
    <div className="intro">
      <div className="imageContainer">
        <div className="imageOverlay" />
        <img className="heroImage" src="..l/assets/HandsOnBarre.png" alt="Hands on barre" />
        <h1 className="mobileTitle">Raise the Barre With Us!</h1>
      </div>
      <div className="introduction">
        <h1 className="tabletDesktopTitle">Raise the Barre With Us!</h1>
        <p>Join our full-body workout inspired by Ballet, Pilates, and Yoga.</p>
        <button type="button" className="joinUsBtn">Join Us!</button>
      </div>
    </div>
  )
}

export default Intro;