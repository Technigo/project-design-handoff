import React from 'react'
import BeginnerImg from '../assets/images/Beginner.png'
// import IntermediateImg from '../assets/images/Intermediate.png'
import './Classes.css'

const Classes = () => {
  return (
    <div className="class-container">
      <div className="classes">
        <h3>Our Classes</h3>
        <img src={BeginnerImg} alt="beginner-img" />
        <p>Beginner</p>
        {/* <img src={IntermediateImg} alt="intermediate-img" /> */}
        <p>Intermediate</p>
        <p>Expert</p>

      </div>
    </div>
  )
}

export default Classes;