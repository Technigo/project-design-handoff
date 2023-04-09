import React from 'react';
import endurancesmall from 'Images/endurancesmall.png'
import agilitysmall from 'Images/agilitysmall.png'
import strengthsmall from 'Images/strenghtsmall.png'
import prehabsmall from 'Images/prehabsmall.png'

const Benefits = () => {
  return (
    <section className="benefits-section">
      <h3 className="benefits-header">BENEFITS OF FIT2DERBY</h3>
      <div className="benefits-div">
        <p className="benefits-text">
          All our programs includes exercises to increase your endurance and agility
          as well as strengthening your neck muscles,
          core and lower body, all to prevent injuries and optimise your skating,
          blocking, juking and overall playing skills
        </p>
        <h4 className="examples-header">EXAMPLES OF EXERCISES</h4>
        <ul className="examples-list">
          <li>High Intensity Interval Training (HIIT)</li>
          <li>Mobility training such as yoga movements for stretching and stability</li>
          <li>Recommendations on gym classes and exercises involving gym equipment</li>
        </ul>
      </div>

      <div>
        <img src={endurancesmall} alt="z" />
      </div>

      <div>
        <img src={agilitysmall} alt="z" />
      </div>

      <div>
        <img src={strengthsmall} alt="z" />
      </div>

      <div>
        <img src={prehabsmall} alt="z" />
      </div>

    </section>
  )
};

export default Benefits;