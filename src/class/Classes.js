import React from 'react'
import SingleClass from './SingleClass'
import SilkTop from '../silk/SilkTop'
import SilkBottom from '../silk/SilkBottom'
import BeginnerImg from '../assets/images/Beginner.png'
import IntermediateImg from '../assets/images/Intermediate.png'
import ExpertImg from '../assets/images/Expert.png'

// import IntermediateImg from '../assets/images/Intermediate.png'
import './Classes.css'

const Classes = ({ screenSize }) => {
  return (
    <>
      <SilkTop screenSize={screenSize} />
      <div className="classes-container">
        <h3>Our Classes</h3>
        <div className="classes">
          <SingleClass screenSize={screenSize} level="Beginner" img={BeginnerImg} description="Beginner classes for aerial silks teach you the foundational moves and techniques, and is led by experienced instructors to guide you. No prior experience is necessary." />
          <SingleClass screenSize={screenSize} level="Intermediate" img={IntermediateImg} description="Intermediate classes build on foundational moves and introduce complex techniques, led by experienced instructors. They improve strength, flexibility, and coordination." />
          <SingleClass screenSize={screenSize} level="Expert" img={ExpertImg} description="Expert classes are for the experienced aerialists, which offer a challenging workout with advanced techniques. Led by skilled instructors to help guide you to refine your skills." />
        </div>
      </div>
      <SilkBottom screenSize={screenSize} />
    </>
  )
}

export default Classes;