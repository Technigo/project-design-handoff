import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export const Slider = () => {
  return (
    <section className="yoga-container">
      <AwesomeSlider bullets={false}>
        <div className="yoga-style">
          <h3>Power Yoga 60</h3>
          <img src="./img/yoga-1.png" alt="Power Yoga 60" />
        </div>

        <div className="yoga-style">
          <h3>Power Yoga 75</h3>
          <img src="./img/yoga-2.png" alt="Power Yoga 75" />
        </div>

        <div className="yoga-style">
          <h3>Yoga Strong</h3>
          <img src="./img/yoga-3.png" alt="Yoga Strong" />
        </div>
      </AwesomeSlider>
    </section>
  );
}