import React from 'react';
import styled from 'styled-components';
import { Slider } from './ClassCard'
import './classes.css';

const ArrowDown = styled.i`
    margin-left: 1rem;
    padding-top: 6px;

    i {
      color: #FF9F0A;
      font-size: 20px;
    }
`

export const Classes = () => {
  return (
    <>
      <div className="classes-container">
        <h4>Our Classes</h4>
        <ArrowDown>
          <i className="fa-sharp fa-solid fa-chevron-down" />
        </ArrowDown>
      </div>
      <div className="yoga-container">
        <Slider />
      </div>
    </>
  )
}