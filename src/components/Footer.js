import React from 'react'

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <h1>logo</h1>
        <p className="footer-adress">Vallgatan 6
223 61, Lund
        </p>
        <nav className="footer-nav">
          <div className="footer-nav-links">
            <h1>Company</h1>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Our Studio</a>
            <a href="#">FAQs</a>
          </div>
          <div className="footer-nav-links">
            <h1>Classes</h1>
            <a href="#">Pricing</a>
            <a href="#">Schedule</a>
            <a href="#">Instructors</a>
            <a href="#">About Barre</a>
          </div>
          <div className="footer-nav-socials">
            <h2>Follow Us</h2>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Footer;