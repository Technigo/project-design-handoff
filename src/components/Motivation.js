import React from 'react';
import '../css/Motivation.css'

export const Motivation = () => {
  return (
    <div className="container">
      <h2>How we get you in shape:</h2>
      <div className="motivation-section">
        <div className="card">
          <img src="/assets/ave.png" alt="Ave" />
          <h3>Keep at it - even on the worse days</h3>
          <h4>Read more about our sciene-backed hacks</h4>
        </div>
        <div className="card">
          <img src="/assets/omid.png" alt="Omid" />
          <h3>Do it when ever where ever you want</h3>
          <h4>With our science-proofed hacks you will still not stay behind</h4>
        </div>
        <div className="card">
          <img src="/assets/Group2.png" alt="yoga" />
          <h3>Push it but with caution</h3>
          <h4>Our experienced team knows everything about Rectus stasis, C-section and co</h4>
        </div>
      </div>
      <div className="scrollImg">
        <img src="/assets/ReadMore.svg" alt="scroll" />
      </div>
    </div>
  )
}
