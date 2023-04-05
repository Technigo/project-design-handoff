import React from 'react'
import SilkTop from '../silk/SilkTop'
import SilkBottom from '../silk/SilkBottom'
import BeginnerImg from '../assets/images/Beginner.png'
// import IntermediateImg from '../assets/images/Intermediate.png'
import './Classes.css'

const Classes = ({ screenSize }) => {
  return (
    <>
      <SilkTop screenSize={screenSize} />
      <div className="class-container">
        <div className="classes">
          <h3>Our Classes</h3>
          <img src={BeginnerImg} alt="beginner-img" />
          <p>Beginner</p>

          <p>Intermediate</p>
          <p>Expert</p>
        </div>
      </div>
      <SilkBottom screenSize={screenSize} />
    </>
  )
}

export default Classes;