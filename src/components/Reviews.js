import React from 'react';
import '../css/Reviews.css'

import Blob2Mobile from '../assets/Blob 2 Mobile.svg'

const Reviews = () => {
  return (
    <div className="reviewsContainer">
      <img className="vectorShape" src={Blob2Mobile} alt="Decorative element" />
      <img className="shape" alt="Ribbons hanging from a barre" />
      <div>
        <h2 className="reviewsTitle">Why Students Love Our Barre Classes</h2>
        <p className="reviewsExamples">The instructors are amazing, the atmosphere is supportive,</p>
        <p> and the workouts are challenging yet fun!</p>
        <p> -Robyn Andersson, <span>Barre Basic Student</span></p>
        <p> I can feel the muscles working and getting stronger.</p>
        <p> I always feel energized at the end of the class</p>
        <p> -Paula Ray, <span>Barre Strong Student</span></p>
      </div>
    </div>
  )
}

export default Reviews;
