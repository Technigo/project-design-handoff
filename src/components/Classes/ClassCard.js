import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export const Slider = () => {
  return (
    <AwesomeSlider>
      <div data-src="./img/yoga-1.png" />
      <div data-src="./img/yoga-2.png" />
      <div data-src="./img/yoga-3.png" />
    </AwesomeSlider>
  );
}