import React from 'react';
import styled from 'styled-components';
import './classes.css';

const ArrowDown = styled.i`
    font-size: 20px;
    color: #FF9F0A; 
    margin-left: 1rem;
    padding-top: 6px;
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
        <h3>Power yoga 60</h3>
        <img src="./img/yoga-3.png" alt="yoga woman" />
      </div>
    </>
  )
}