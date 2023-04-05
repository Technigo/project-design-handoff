import React from 'react';
import SilkTop from './Silk/SilkTop.js';
import SilkBottom from './Silk/SilkBottom.js';
import Class from './Class.js';
import BeginnerImg from '../../assets/images/Beginner.png';

import './Classes.css';

/*
const classes = [
  { name: 'beginner',
    description: 'beginner bla bla bla',
    image: 'url' },
  { name: 'intermediate',
    description: 'intermediate bla bla bla',
    image: 'url' },
  { name: 'expert',
    description: 'expert bla bla bla',
    image: 'url' }
] data={classes}
*/

const Classes = ({ screenSize }) => {
  // const beginner = 'beginner';
  // const intermediate = 'intermediate';
  // const expert = 'expert';
  return (
    <>
      <SilkTop screenSize={screenSize} />
      <div className="classes-container">
        <h3>Our Classes</h3>
        <div className="classes">
          <Class screenSize={screenSize} level="Beginner" img={BeginnerImg} description="Beginner classes for aerial silks teach you the foundational moves and techniques, and is led by experienced instructors to guide you. No prior experience is necessary." />
          <Class screenSize={screenSize} level="Intermediate" img={BeginnerImg} description="Intermediate classes build on foundational moves and introduce complex techniques, led by experienced instructors. They improve strength, flexibility, and coordination." />
          <Class screenSize={screenSize} level="Expert" img={BeginnerImg} description="Expert classes are for the experienced aerialists, which offer a challenging workout with advanced techniques. Led by skilled instructors to help guide you to refine your skills." />
        </div>
      </div>
      <SilkBottom screenSize={screenSize} />
    </>
  );
};

export default Classes;

//       <SilkBottom />