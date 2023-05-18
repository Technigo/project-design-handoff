/* eslint-disable max-len */
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styled from 'styled-components';

const Slider = () => {
  return (
    <ReviewSlider>
      <AwesomeSlider>
        <div className="review">
          <h5>
       Anyone who thinks of joining a class, do it! Its such a great mix of physical exercise and a calm break from the everyday life. 
          </h5>
          <img src="/images/reviewimg1.png" alt="Profilepicture of John B" />
          <p>
        John B.
          </p>
        </div>
        <div className="review">
          <h5>
        Just WOW. I have never tried something like this before, but this is definetally my new thing! Never going back to a normal gym.
          </h5>
          <img src="/images/reviewimg2.png" alt="Profilepicture of Anna M" />
          <p>
        Anna M.
          </p>
        </div>
        <div className="review">
          <h5>
        10/10 recommend! Everyone should go to the Santulan studio and try out power yoga at least once in their lives.
          </h5>
          <img src="/images/reviewimg3.png" alt="Profilepicture of Moa F" />
          <p>
        Moa F.
          </p>
        </div>
      </AwesomeSlider>
    </ReviewSlider>
  )
}

export default Slider;

const ReviewSlider = styled.div`

`