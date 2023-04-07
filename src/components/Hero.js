import React from 'react';
import './Hero.css'
import PrimaryButtonLarge from 'components/PrimaryButtonLarge.js'

const Hero = () => {
  return (
    <div className="heroWrapper">
      <div className="imageContainer">
        <div className="imageOverlay" />
        <img className="heroImage" src="../images/HandsOnBarre.svg" alt="Hands on Barre" />
        <h1 className="mobileTitle">Raise the Barre With Us!</h1>
      </div>
      <div className="welcomeSection">
        <h1 className="tabletDesktopTitle">Raise the Barre With Us!</h1>
        <p>Join our fully-body workout inspired by Ballet, Pilates and Yoga.</p>
        <PrimaryButtonLarge className="primaryButtonLarge" buttonText="Join Us!" />
      </div>

    </div>
  )
}

export default Hero;

// return (
//     <div className="heroWrapper">
//       <div className="mobileWelcomeSection">
//         <h1 className="mobileTitle">Raise the Barre With Us!</h1>
//         <img className="mobileHeroImage" src="../images/HandsOnBarre.jpg" alt="Hands on Barre" />
//       </div>
//       <img className="heroImage" src="../images/HandsOnBarre.jpg" alt="Hands on Barre" />
//       <div className="welcomeSection">
//         <h1>Raise the Barre With Us!</h1>
//         <p>Join our fully-body workout inspired by Ballet, Pilates and Yoga.</p>
//         <button type="button" className="joinUpButton">Sign up!</button>
//       </div>
//     </div>
//   )
// }