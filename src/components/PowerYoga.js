/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const InfoText = styled.h1`
color: white;
font-size: 16px;
`
const PageSection = styled.div`
display: none;

@media (min-width: 768px) {
display:block;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #2E160E;
height: 298px;
margin-top: 20px;

}
`
const Header = styled.h1`
color: #FF9F0A;
font-size: 17px;
`

const PowerYoga = () => {
  return (
    <PageSection>
      <Header>
        <h1>What is Power Yoga?</h1>
      </Header>
      <InfoText>
        <h1>Power yoga is a fast-paced style of yoga that&apos;s
         focused on building strength and endurance.
         Whilst practising this form of yoga, you will feel
         the tension and toxins leaving your body and
         your posture and back pain getting better.
        </h1>
      </InfoText>
    </PageSection>
  )
}

export default PowerYoga;