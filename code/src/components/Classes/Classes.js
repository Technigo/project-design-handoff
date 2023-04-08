import React from 'react';
import SilkTop from './Silk/SilkTop.js';
import SilkBottom from './Silk/SilkBottom.js';
import Class from './Class.js';
import ClassCarousel from './ClassCarousel.js';
import BeginnerImg from '../../assets/images/Beginner.png';
import IntermediateImg from '../../assets/images/Intermediate.png';
import ExpertImg from '../../assets/images/Expert.png';

import './Classes.css';

const beginnerdescription = 'Beginner classes for aerial silks teach you the foundational moves and techniques, and is led by experienced instructors to guide you. No prior experience is necessary.';
const intermediatedescription = 'Intermediate classes build on foundational moves and introduce complex techniques, led by experienced instructors. They improve strength, flexibility, and coordination.';
const expertdescription = 'Expert classes are for the experienced aerialists, which offer a challenging workout with advanced techniques. Led by skilled instructors to help guide you to refine your skills.';

const Classes = ({ screenSize }) => {
  const isMobile = screenSize <= 640;
  return (
    <div className="Classes">
      <SilkTop screenSize={screenSize} />
      <div className="classes-container">
        <h3 className="classes-title">Our Classes</h3>
        {isMobile && (
          <div className="classes-section-carousel">
            <ClassCarousel />
          </div>
        )}
        {!isMobile && (
          <div className="classes-section">
            <hr className="first-line" />
            <Class screenSize={screenSize} level="Beginner" img={BeginnerImg} description={beginnerdescription} />
            <hr className="class-divider" />
            <Class screenSize={screenSize} level="Intermediate" img={IntermediateImg} description={intermediatedescription} />
            <hr className="class-divider" />
            <Class screenSize={screenSize} level="Expert" img={ExpertImg} description={expertdescription} />
          </div>
        )}
      </div>
      <SilkBottom screenSize={screenSize} />
    </div>
  );
};

export default Classes;

//       <SilkBottom />

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

  // const beginner = 'beginner';
  // const intermediate = 'intermediate';
  // const expert = 'expert';
*/