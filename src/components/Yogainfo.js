/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const InfoText = styled.p`
color: white;
`
const PageSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #2E160E;
height: 298px;
`

const YogaInfo = () => {
  return (
    <PageSection>
      <InfoText>
        <h1>What is Power Yoga?</h1>
Power yoga is a fast-paced style of yoga that&apos;s
focused on building strength and endurance.
Whilst practising this form of yoga, you will feel
the tension and toxins leaving your body and
your posture and back pain getting better.
      </InfoText>
    </PageSection>
  )
}

export default YogaInfo;