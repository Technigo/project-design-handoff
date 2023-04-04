import React from 'react';
import SilkTop from './Silk/SilkTop.js';
import SilkBottom from './Silk/SilkBottom.js';

import './Classes.css';

const Classes = ({ screenSize }) => {
  return (
    <>
      <SilkTop screenSize={screenSize} />
      <div className="classes-container">
        <div className="classes">
          <h3>Classes</h3>
          <p>Beginner</p>
          <p>Intermediate</p>
          <p>Expert</p>
        </div>
      </div>
      <SilkBottom screenSize={screenSize} />
    </>
  );
};

export default Classes;

//       <SilkBottom />