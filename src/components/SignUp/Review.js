import React from 'react';
import styled from 'styled-components';
import { Slider } from './ReviewCard'

const TheDiv = styled.div`
  background-color: #66A1AE;
  width: 100%;

  @media (min-width: 895px) {
        max-width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const ComeJoin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #66A1AE;

  h3 {
    font-size: 30px;
    font-weight: 700;
    padding: 20px 20px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
    align-self: center;
    text-align: center;
    color: #fff;
    max-width: 310px;
  }
`;

export const ReviewTemp = () => {
  return (
    <TheDiv>
      <ComeJoin>
        <h3>Come join us!</h3>
        <p>Discover all the benefits of Power Yoga and
            Become a part of our amazing community!
        </p>
        <Slider />
      </ComeJoin>
    </TheDiv>
  )
}