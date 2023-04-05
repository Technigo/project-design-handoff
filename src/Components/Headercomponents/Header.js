import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <section className="header-section">
      <Navbar />
      <h1 className="hero-header">UP YOUR GAME WITH FIT2DERBY!</h1>
      <h2 className="sub-header">Customised online off skate programs for roller derby players</h2>
      <p className="body-copy">djkfnsdjfndslnfsdlnfäd <span>sdnlasödln fkdslnfkn</span>
       sdfökdslfasnf <span>sdnlasödln fkdslnfkn</span> lsdköfngaödlsgn
      </p>
      <div className="button-container">
        <button className="signup-button" type="button">Individual signup</button>
        <button className="signup-button" type="button">Join with your team</button>
      </div>
    </section>
  )
};

export default Header;