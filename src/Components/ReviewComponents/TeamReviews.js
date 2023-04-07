/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import bearcity from 'Images/bearcity.svg';
import london from 'Images/london.svg';
import norternbeaches from 'Images/northernbeaches.svg';

const TeamReviews = () => {
  return (
    <section className="review-section">
      <h2>Team Reviews</h2>

      <div className="review-div">
        <img src={bearcity} alt="Bear City" />
        <div className="review-text">
          <p>
            "Fit2Derby has helped us see quick improvements on the track. We have better endurance,
            faster recovery from falls, and increased strength and agility.
            The program's challenging exercises and customization options
            have made us a more confident and capable roller derby team. Thanks, Fit2Derby!"
          </p>
          <p className="bold">-Bear city Roller Derby</p>
        </div>

      </div>

      <div className="review-div">
        <img src={london} alt="London" />
        <div className="review-text">
          <p>
          "Using a team platform to track our progress has been an excellent
          addition to our training routine. It allows us to keep track of our
          individual and team progress, identify areas of improvement,
          and adjust our training accordingly.
           This way, we can continue to push ourselves and achieve our
           fitness goals while becoming an even stronger team."
          </p>
          <p className="bold">-London Roller Derby</p>
        </div>

      </div>

      <div className="review-div">
        <img src={norternbeaches} alt="Northern Beaches" />
        <div className="review-text">
          <p>
        "Fit2Derby is a game-changer for our league. The program is designed
        for roller derby athletes
        and offers challenging yet fun workouts.
        We appreciate the variety and user-friendly platform.
        As a team, we feel more connected and have seen fewer
        injuries since starting the program. Thanks to Fit2Derby,
        we feel stronger, faster, and more prepared for the roller derby track."
          </p>
          <p className="bold">-Northern Beaches Roller Derby</p>
        </div>

      </div>
    </section>
  )
};

export default TeamReviews;