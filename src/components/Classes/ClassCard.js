import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import styled from 'styled-components';
import 'react-awesome-slider/dist/styles.css';

const Slide = styled.div`
width: 400px;
`

export const Slider = () => {
  return (
    <Slide>
      <AwesomeSlider bullets={false}>
        <div data-src="./img/yoga-1.png" />
        <div data-src="./img/yoga-2.png" />
        <div data-src="./img/yoga-3.png" />
      </AwesomeSlider>
    </Slide>
  );
}