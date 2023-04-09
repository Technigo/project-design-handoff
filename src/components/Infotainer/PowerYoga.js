import React from 'react';
import styled from 'styled-components';

const Pyoga = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #2E160E;
 

  p {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 130%;
    padding: 10px 32px;
    align-self: center;
    text-align: center;
    color: #fff;
    max-width: 420px;
  }
  @media (max-width: 454px) {
        display: none;
 }
  @media (min-width: 455px) {
        display: flex;
 }
`;

export const PowYoga = () => {
  return (
    <div>
      <Pyoga>
        <h4> What is Power Yoga?
        </h4>
        <p> Power yoga is a fast-paced style of yoga that&apos;s
            focused on building strength and endurance.
            Whilst practising this form of yoga, you will
            feel the tension and toxins leaving your body
            and your posture and back pain getting better.
        </p>
      </Pyoga>
    </div>
  )
}