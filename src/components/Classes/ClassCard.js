import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import styled from 'styled-components';
import 'react-awesome-slider/dist/styles.css';

const Slide = styled.div`
width: 400px;
height: fit-content;
`

export const Slider = () => {
  return (
    <Slide>
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
    </Slide>
  );
}