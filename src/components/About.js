/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.div`
display:none;
background-color: #2E160E;
height: 305px;
@media (min-width:768px){
  display: block;
}
`
const Header = styled.h1`
color: #FF9F0A;
font-size: 17px;
margin-top: 20px;
display: flex;
justify-content: center;
`

const Text = styled.div`
color: white;
font-size: 16px;
display: flex;
justify-content: center;
margin-top: -30px;
p {
  justify-content: center;
  max-width: 320px;
}
`

const About = () => {
  return (
    <AboutSection>
      <Header>
        <h1>Santulan Power Yoga Studio</h1>
      </Header>
      <Text>
        <p>Put simply, Yoga transformed our lives and we want to share that magic with you. We created Santulan to empower your journey to personal growth and well-being. Our classes weave ancient yogic philosophy into 21st century life, and everyone’s welcome, from absolute beginners to advanced practitioners. We passionately believe that Power Yoga is for everyone, and no matter your age or flexibility, our expert teachers will ensure you leave each class stronger in mind and body.</p>
      </Text>
    </AboutSection>
  )
}

export default About;