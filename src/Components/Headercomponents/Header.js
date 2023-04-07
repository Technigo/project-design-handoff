import React from 'react';
import Jammer from 'Images/Jammer.svg';
import Navbar from './Navbar';

const Header = () => {
  return (
    <section className="header-section">
      <Navbar />
      <h1 className="hero-header">UP YOUR GAME WITH FIT2DERBY!</h1>
      <h2 className="sub-header">Customised online off skate programs for roller derby players</h2>
      <p className="body-copy">Choose between our <span>individual sign-up</span> and <span>Team sign-up</span> with exclusive access to our <span>Multiplayer Platform</span></p>
      <img className="jammer" src={Jammer} alt="jammer" />
      <div className="button-container">
        <button className="signup-button" type="button">Individual sign-up</button>
        <button className="signup-button" type="button">Join with your team</button>
      </div>
    </section>
  )
};

export default Header;