import React from 'react';
import styled from 'styled-components';
import contactStripes from '../assets/contact-stripes.svg';
import logoAG from '../assets/logo-AG-white.svg';
import socialMedia from '../assets/social-media.svg';
import brand1 from '../assets/brand1.svg';
import brand2 from '../assets/brand2.svg';
import brand3 from '../assets/brand3.svg';
import brand4 from '../assets/brand4.svg';

const ContactContainer = styled.div`
  display: flex;
  flex-direction:column;
  height: 906px;
  width: 100vw;
  background-color:#42403C;
  position:relative;
  margin-bottom:20px;
`;

const ContactStripesDiv = styled.div`
  display: flex;
  width: 100vw;
  margin-top:8px;
`;

const ContactStripesImage = styled.img`
  position:relative;
  width: 271px;
  height: 271px;
  left: -35px;
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  position:absolute;
  top:196px;
`;

const LogoImage = styled.img`
  width: 154px;
  height: 96px;
  `;

const ContactInfoDiv = styled.div`
  display: flex;
  flex-direction:column;
  width: 46.7%;
  position:absolute;
  top:367px;
  font-style: normal;
  font-weight: 400;
  font-size: 16.0539px;
  line-height: 119%;
  text-align: center;
  letter-spacing: -0.022em;
  left:97px;
`;

const SocialMedia = styled.img`
  position:absolute;
  width: 53.9%;
  height: 3.5%;
  left: 84px;
  top:503px;
`;

const BrandsDiv = styled.div`
  display: flex; 
  flex-direction:column;
  position:absolute;
  width: 114px;
  height: 257.42px;
  left: 123px;
  top: 613.22px;
  gap:30px;
`;

const BrandImage = styled.img`
  width: 114px;
  height: 55px;
  filter: invert(100%);
`;

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactStripesDiv>
        <ContactStripesImage src={`${contactStripes}`} />
      </ContactStripesDiv>
      <LogoDiv>
        <LogoImage src={`${logoAG}`} />
      </LogoDiv>
      <ContactInfoDiv>
        <div style={{ color: '#B9F615' }}>Contact us:</div>
        <div style={{ color: '#FFFFFF' }}>acrogym@sportsorg.se <br /> 078 652 45 32</div>
      </ContactInfoDiv>
      <SocialMedia src={`${socialMedia}`} />
      <BrandsDiv>
        <BrandImage src={`${brand1}`} />
        <BrandImage src={`${brand2}`} />
        <BrandImage src={`${brand3}`} />
        <BrandImage src={`${brand4}`} />
      </BrandsDiv>
    </ContactContainer>
  );
};
