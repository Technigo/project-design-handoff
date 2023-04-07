import React from 'react';
import styled from 'styled-components';

/* const BenefitsContainer = styled.div`
background-color: #004852;
width: 90%;
margin-left: auto;
margin-right: auto;

`; */

export const GreenYellowHeader = styled.div`
  font-family: 'Permanent Marker', cursive;
  color: #FFE600;
padding: 3px 73px 7px 34px;
 margin: 0 2rem 5rem 0px;
  height: 58px;
  background: #096B78;
  border-bottom: 5px solid #004852;
  border-top: 5px solid #004852;
  border-radius: 0px 0px 100px 13px;
  font-size: 40px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BenefitSection = () => {
  return (

    <GreenYellowHeader>Benefits</GreenYellowHeader>

  )
}

export default BenefitSection;
