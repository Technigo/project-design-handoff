import React from 'react';
import { TextButton } from 'button/TextButton';

import './SingleClass.css';

const SingleClass = ({ screenSize, img, level, description }) => {
  console.log(screenSize)
  console.log(level)
  console.log(description)

  return (
    <div className="class-card">
      <img src={img} alt="" />
      <div className="class-text">
        <h2>{level}</h2>
        <p>{description}</p>
        <TextButton>See more</TextButton>
      </div>
    </div>
  )
}

export default SingleClass;