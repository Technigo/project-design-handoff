
import React from 'react';
import './Advantages.css';

const Advantages = () => {
  return (
    <div className="advantages-container">
      <div className="coach">
        <h3>Personal Coach support and flexibility of Online Training</h3>
        <div className="sub">Your Personal Coach</div>
        <ul className="custom-list">
          <li>Monitor your progression and technique </li>
          <li>Keeps you accountable and motivated</li>
        </ul>

        <div className="sub">Online Workout</div>
        <ul className="custom-list">
          <li>Save time and resources </li>
          <li>Fit the sessions into your schedule</li>
          <li>Never boring</li>
        </ul>
        <img src={`${process.env.PUBLIC_URL}/img/adv-coach.png`} alt="adv-coach" />
      </div>

      <div className="diet">
        <h3>Your preferred workout and diet plan</h3>
        <ul className="custom-list">
          <li>We offer various type of workout  </li>
          <li>Trainings are conducted by certified
             coaches and tailored according to your
              personal needs
          </li>
        </ul>
        <div>Diet plan</div>
        <ul className="custom-list">
          <li>We offer different healthy diets</li>
          <li>Diet plans are customised according to your health conditions and background </li>
        </ul>
        <img src={`${process.env.PUBLIC_URL}/img/adv-diet1.png`} alt="adv-diet1" />
        <img className="food-img" src={`${process.env.PUBLIC_URL}/img/adv-diet2.png`} alt="adv-diet2" />
      </div>
    </div>
  );
};

export default Advantages;
