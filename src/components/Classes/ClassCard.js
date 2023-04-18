import React from 'react';
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const YogaDesk = styled.div`
    display: flex;
    flex-direction: row;
    gap: 28px;
    justify-content: center;
    text-align: center;
    margin-bottom: 2rem;

    h3 {
        margin-bottom: 8px;
    }

    @media (max-width: 895px) {
    display: none;
    }
`

export const Slider = () => {
  return (
    <>
      <section className="yoga-container">
        <AwesomeSlider bullets={false}>
          <div className="yoga-card">
            <h3>Power Yoga 60</h3>
            <img src="./img/yoga-1.png" alt="Power Yoga 60" />
          </div>

          <div className="yoga-card">
            <h3>Power Yoga 75</h3>
            <img src="./img/yoga-2.png" alt="Power Yoga 75" />
          </div>

          <div className="yoga-card">
            <h3>Yoga Strong</h3>
            <img src="./img/yoga-3.png" alt="Yoga Strong" />
          </div>
        </AwesomeSlider>
      </section>
      <YogaDesk>
        <div className="yoga-card">
          <h3>Power Yoga 60</h3>
          <img src="./img/yoga-1.png" alt="Power Yoga 60" />
        </div>

        <div className="yoga-card">
          <h3>Power Yoga 75</h3>
          <img src="./img/yoga-2.png" alt="Power Yoga 75" />
        </div>

        <div className="yoga-card">
          <h3>Yoga Strong</h3>
          <img src="./img/yoga-3.png" alt="Yoga Strong" />
        </div>
      </YogaDesk>
    </>
  );
}